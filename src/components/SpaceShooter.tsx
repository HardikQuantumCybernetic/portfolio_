import { useEffect, useRef, useState } from "react";

/**
 * Canvas-based Space-Invaders style mini-game.
 * Works on desktop (keyboard) and mobile/tablet (touch buttons).
 */
const SpaceShooter = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() =>
    Number(localStorage.getItem("404_high_score") || 0)
  );
  const [gameOver, setGameOver] = useState(false);
  const [started, setStarted] = useState(false);

  const W = 480;
  const H = 400;

  const stateRef = useRef({
    player: { x: 200, y: 360, w: 28, h: 14 },
    bullets: [] as { x: number; y: number }[],
    invaders: [] as { x: number; y: number; alive: boolean }[],
    dir: 1,
    move: 0, // -1 left, 1 right, 0 idle (touch)
    keys: {} as Record<string, boolean>,
    score: 0,
    over: false,
    raf: 0,
    lastShot: 0,
  });

  const resetInvaders = () => {
    const inv: { x: number; y: number; alive: boolean }[] = [];
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 8; c++) {
        inv.push({ x: 40 + c * 50, y: 40 + r * 36, alive: true });
      }
    }
    return inv;
  };

  const start = () => {
    stateRef.current = {
      player: { x: 200, y: 360, w: 28, h: 14 },
      bullets: [],
      invaders: resetInvaders(),
      dir: 1,
      move: 0,
      keys: {},
      score: 0,
      over: false,
      raf: 0,
      lastShot: 0,
    };
    setScore(0);
    setGameOver(false);
    setStarted(true);
  };

  const shoot = () => {
    const s = stateRef.current;
    const now = performance.now();
    if (s.over) return;
    if (s.bullets.length >= 4) return;
    if (now - s.lastShot < 180) return;
    s.lastShot = now;
    s.bullets.push({ x: s.player.x + s.player.w / 2 - 1, y: s.player.y });
  };

  useEffect(() => {
    if (!started) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const getColor = (name: string) => {
      const v = getComputedStyle(document.documentElement)
        .getPropertyValue(name)
        .trim();
      return v ? `hsl(${v})` : "#0ff";
    };

    const onKeyDown = (e: KeyboardEvent) => {
      stateRef.current.keys[e.key] = true;
      if (e.key === " " || e.key === "ArrowUp" || e.key === "ArrowDown") e.preventDefault();
    };
    const onKeyUp = (e: KeyboardEvent) => {
      stateRef.current.keys[e.key] = false;
      if (e.key === " ") {
        e.preventDefault();
        shoot();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);

    const tick = () => {
      const s = stateRef.current;
      // input
      const left = s.keys["ArrowLeft"] || s.keys["a"] || s.move === -1;
      const right = s.keys["ArrowRight"] || s.keys["d"] || s.move === 1;
      if (left) s.player.x = Math.max(4, s.player.x - 4);
      if (right) s.player.x = Math.min(W - s.player.w - 4, s.player.x + 4);

      // bullets
      s.bullets = s.bullets.filter((b) => b.y > -10);
      s.bullets.forEach((b) => (b.y -= 6));

      // invaders movement
      const alive = s.invaders.filter((i) => i.alive);
      if (alive.length > 0) {
        const minX = Math.min(...alive.map((i) => i.x));
        const maxX = Math.max(...alive.map((i) => i.x + 24));
        let drop = false;
        if (maxX > W - 4 && s.dir > 0) {
          s.dir = -1;
          drop = true;
        } else if (minX < 4 && s.dir < 0) {
          s.dir = 1;
          drop = true;
        }
        s.invaders.forEach((i) => {
          if (!i.alive) return;
          i.x += s.dir * 0.6;
          if (drop) i.y += 10;
          if (i.y + 20 >= s.player.y) s.over = true;
        });
      }

      // collisions
      s.bullets.forEach((b) => {
        s.invaders.forEach((i) => {
          if (
            i.alive &&
            b.x >= i.x &&
            b.x <= i.x + 24 &&
            b.y >= i.y &&
            b.y <= i.y + 20
          ) {
            i.alive = false;
            b.y = -100;
            s.score += 10;
            setScore(s.score);
          }
        });
      });

      if (s.invaders.every((i) => !i.alive)) {
        s.invaders = resetInvaders();
        s.dir = 1;
      }

      // draw
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "rgba(255,255,255,0.05)";
      for (let i = 0; i < 30; i++) {
        ctx.fillRect((i * 53) % W, (i * 91) % H, 1, 1);
      }
      const primary = getColor("--primary");
      ctx.fillStyle = primary;
      ctx.fillRect(s.player.x, s.player.y, s.player.w, s.player.h);
      ctx.fillRect(s.player.x + s.player.w / 2 - 2, s.player.y - 6, 4, 6);
      s.bullets.forEach((b) => {
        ctx.fillRect(b.x, b.y, 2, 8);
      });
      s.invaders.forEach((i) => {
        if (!i.alive) return;
        ctx.fillStyle = primary;
        ctx.fillRect(i.x, i.y, 24, 16);
        ctx.fillStyle = "rgba(0,0,0,0.6)";
        ctx.fillRect(i.x + 5, i.y + 5, 4, 4);
        ctx.fillRect(i.x + 15, i.y + 5, 4, 4);
      });

      if (s.over) {
        setGameOver(true);
        setHighScore((prev) => {
          if (s.score > prev) {
            localStorage.setItem("404_high_score", String(s.score));
            return s.score;
          }
          return prev;
        });
        return;
      }
      stateRef.current.raf = requestAnimationFrame(tick);
    };
    stateRef.current.raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(stateRef.current.raf);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, [started]);

  // Touch drag steering on canvas
  const onCanvasTouch = (e: React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas || !started || stateRef.current.over) return;
    const rect = canvas.getBoundingClientRect();
    const t = e.touches[0];
    if (!t) return;
    const scaleX = W / rect.width;
    const x = (t.clientX - rect.left) * scaleX;
    stateRef.current.player.x = Math.max(
      4,
      Math.min(W - stateRef.current.player.w - 4, x - stateRef.current.player.w / 2)
    );
  };

  const setMove = (dir: -1 | 0 | 1) => {
    stateRef.current.move = dir;
  };

  return (
    <div ref={wrapRef} className="flex flex-col items-center gap-3 w-full">
      <div className="relative rounded-xl overflow-hidden border border-primary/40 glow-box bg-black w-full max-w-[480px]">
        <canvas
          ref={canvasRef}
          width={W}
          height={H}
          onTouchStart={(e) => {
            e.preventDefault();
            onCanvasTouch(e);
          }}
          onTouchMove={(e) => {
            e.preventDefault();
            onCanvasTouch(e);
          }}
          className="block w-full h-auto touch-none select-none"
          style={{ aspectRatio: `${W} / ${H}` }}
        />
        {!started && (
          <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center text-center p-6">
            <h3 className="text-2xl font-heading font-bold text-primary mb-2">
              Lost in Space?
            </h3>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs">
              Defend the page from invaders.
              <br />
              <span className="hidden sm:inline">
                <span className="text-primary">←/→</span> move ·{" "}
                <span className="text-primary">space</span> shoot
              </span>
              <span className="sm:hidden">
                Tap <span className="text-primary">canvas</span> to aim ·{" "}
                <span className="text-primary">FIRE</span> to shoot
              </span>
            </p>
            <button
              onClick={start}
              className="px-6 py-2 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90"
            >
              Start Game
            </button>
          </div>
        )}
        {gameOver && (
          <div className="absolute inset-0 bg-black/85 flex flex-col items-center justify-center text-center p-6">
            <h3 className="text-2xl font-heading font-bold text-primary mb-2">
              Game Over
            </h3>
            <p className="text-foreground">Score: {score}</p>
            <p className="text-xs text-muted-foreground mb-4">High: {highScore}</p>
            <button
              onClick={start}
              className="px-6 py-2 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90"
            >
              Play Again
            </button>
          </div>
        )}
      </div>

      {/* Touch controls — visible on mobile/tablet */}
      <div className="flex md:hidden items-center justify-between gap-3 w-full max-w-[480px] select-none">
        <div className="flex gap-2">
          <button
            onTouchStart={(e) => { e.preventDefault(); setMove(-1); }}
            onTouchEnd={(e) => { e.preventDefault(); setMove(0); }}
            onMouseDown={() => setMove(-1)}
            onMouseUp={() => setMove(0)}
            onMouseLeave={() => setMove(0)}
            className="w-16 h-14 rounded-lg bg-primary/15 border border-primary/40 text-primary text-2xl font-bold active:bg-primary/30 touch-none"
            aria-label="Move left"
          >
            ←
          </button>
          <button
            onTouchStart={(e) => { e.preventDefault(); setMove(1); }}
            onTouchEnd={(e) => { e.preventDefault(); setMove(0); }}
            onMouseDown={() => setMove(1)}
            onMouseUp={() => setMove(0)}
            onMouseLeave={() => setMove(0)}
            className="w-16 h-14 rounded-lg bg-primary/15 border border-primary/40 text-primary text-2xl font-bold active:bg-primary/30 touch-none"
            aria-label="Move right"
          >
            →
          </button>
        </div>
        <button
          onTouchStart={(e) => { e.preventDefault(); shoot(); }}
          onClick={() => shoot()}
          className="px-6 h-14 rounded-lg bg-primary text-primary-foreground font-bold tracking-wider active:opacity-80 touch-none"
          aria-label="Shoot"
        >
          FIRE
        </button>
      </div>

      <div className="flex gap-6 text-xs text-muted-foreground font-mono">
        <span>SCORE: <span className="text-primary">{score}</span></span>
        <span>HIGH: <span className="text-primary">{highScore}</span></span>
      </div>
    </div>
  );
};

export default SpaceShooter;
