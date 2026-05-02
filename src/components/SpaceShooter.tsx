import { useEffect, useRef, useState } from "react";

/**
 * Tiny canvas-based Space-Invaders style mini-game.
 * Self-contained, no external deps. ~Theme aware (uses CSS vars at draw time).
 */
const SpaceShooter = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() =>
    Number(localStorage.getItem("404_high_score") || 0)
  );
  const [gameOver, setGameOver] = useState(false);
  const [started, setStarted] = useState(false);
  const stateRef = useRef({
    player: { x: 200, y: 360, w: 28, h: 14 },
    bullets: [] as { x: number; y: number }[],
    invaders: [] as { x: number; y: number; alive: boolean }[],
    dir: 1,
    keys: {} as Record<string, boolean>,
    score: 0,
    over: false,
    raf: 0,
  });

  const W = 480;
  const H = 400;

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
      keys: {},
      score: 0,
      over: false,
      raf: 0,
    };
    setScore(0);
    setGameOver(false);
    setStarted(true);
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
      if (e.key === " ") e.preventDefault();
    };
    const onKeyUp = (e: KeyboardEvent) => {
      stateRef.current.keys[e.key] = false;
      if (e.key === " ") {
        // shoot on key release
        const s = stateRef.current;
        if (s.bullets.length < 4 && !s.over) {
          s.bullets.push({ x: s.player.x + s.player.w / 2 - 1, y: s.player.y });
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);

    const tick = () => {
      const s = stateRef.current;
      // input
      if (s.keys["ArrowLeft"] || s.keys["a"]) s.player.x = Math.max(4, s.player.x - 4);
      if (s.keys["ArrowRight"] || s.keys["d"])
        s.player.x = Math.min(W - s.player.w - 4, s.player.x + 4);

      // bullets
      s.bullets = s.bullets.filter((b) => b.y > -10);
      s.bullets.forEach((b) => (b.y -= 6));

      // invaders movement
      const alive = s.invaders.filter((i) => i.alive);
      const minX = Math.min(...alive.map((i) => i.x), Infinity);
      const maxX = Math.max(...alive.map((i) => i.x + 24), -Infinity);
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

      if (alive.length === 0) {
        s.invaders = resetInvaders();
        s.dir = 1;
      }

      // draw
      ctx.clearRect(0, 0, W, H);
      // bg stars
      ctx.fillStyle = "rgba(255,255,255,0.05)";
      for (let i = 0; i < 30; i++) {
        ctx.fillRect((i * 53) % W, (i * 91) % H, 1, 1);
      }
      const primary = getColor("--primary");
      // player
      ctx.fillStyle = primary;
      ctx.fillRect(s.player.x, s.player.y, s.player.w, s.player.h);
      ctx.fillRect(s.player.x + s.player.w / 2 - 2, s.player.y - 6, 4, 6);
      // bullets
      s.bullets.forEach((b) => {
        ctx.fillRect(b.x, b.y, 2, 8);
      });
      // invaders
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
        if (s.score > highScore) {
          setHighScore(s.score);
          localStorage.setItem("404_high_score", String(s.score));
        }
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
  }, [started, highScore]);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative rounded-xl overflow-hidden border border-primary/40 glow-box bg-black">
        <canvas
          ref={canvasRef}
          width={W}
          height={H}
          className="block max-w-full h-auto"
        />
        {!started && (
          <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center text-center p-6">
            <h3 className="text-2xl font-heading font-bold text-primary mb-2">
              Lost in Space?
            </h3>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs">
              Defend the page from invaders.
              <br />
              <span className="text-primary">←/→</span> to move ·{" "}
              <span className="text-primary">space</span> to shoot
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
      <div className="flex gap-6 text-xs text-muted-foreground font-mono">
        <span>SCORE: <span className="text-primary">{score}</span></span>
        <span>HIGH: <span className="text-primary">{highScore}</span></span>
      </div>
    </div>
  );
};

export default SpaceShooter;
