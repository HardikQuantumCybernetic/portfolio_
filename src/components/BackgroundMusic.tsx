import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.3;
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/Cosmic_Om_Resonance.mp3" loop preload="auto" />
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 left-6 z-50 p-3 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-primary hover:bg-primary/30 transition-all duration-300 shadow-lg"
        aria-label={isPlaying ? "Mute background music" : "Play background music"}
      >
        {isPlaying ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
      </button>
    </>
  );
};

export default BackgroundMusic;
