import { useEffect, useRef, useState } from "react";
import { toast } from "@/hooks/use-toast";

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.3;

    const playAudio = () => {
      audio.play().catch(() => {});
      setHasInteracted(true);
      document.removeEventListener("click", playAudio);
      document.removeEventListener("scroll", playAudio);
      document.removeEventListener("keydown", playAudio);
    };

    audio.play().then(() => {
      setHasInteracted(true);
    }).catch(() => {
      // Show a subtle toast prompting interaction
      toast({
        title: "🎵 Background Music",
        description: "Click anywhere to start the cosmic ambient music.",
        duration: 5000,
      });
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
