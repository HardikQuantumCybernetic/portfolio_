import { useEffect, useRef } from "react";

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.3;

    const playAudio = () => {
      audio.play().catch(() => {});
      document.removeEventListener("click", playAudio);
      document.removeEventListener("scroll", playAudio);
      document.removeEventListener("keydown", playAudio);
    };

    // Browsers block autoplay without user interaction, so we play on first interaction
    audio.play().catch(() => {
      document.addEventListener("click", playAudio);
      document.addEventListener("scroll", playAudio);
      document.addEventListener("keydown", playAudio);
    });

    return () => {
      document.removeEventListener("click", playAudio);
      document.removeEventListener("scroll", playAudio);
      document.removeEventListener("keydown", playAudio);
    };
  }, []);

  return <audio ref={audioRef} src="/audio/Cosmic_Om_Resonance.mp3" loop preload="auto" />;
};

export default BackgroundMusic;
