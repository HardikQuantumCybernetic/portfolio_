import { useEffect, useRef, useState } from "react";

interface MagneticCursorProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

// Unique magnetic cursor effect component that attracts elements towards cursor
const MagneticCursor = ({ children, className = "", strength = 30 }: MagneticCursorProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) / (rect.width / 2);
      const deltaY = (e.clientY - centerY) / (rect.height / 2);
      
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      
      if (distance < 2) {
        element.style.transform = `translate(${deltaX * strength}px, ${deltaY * strength}px)`;
      }
    };

    const handleMouseLeave = () => {
      element.style.transform = "translate(0, 0)";
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength]);

  return (
    <div 
      ref={ref} 
      className={`transition-transform duration-200 ease-out ${className}`}
    >
      {children}
    </div>
  );
};

// Unique glowing orb that follows the cursor across the page
export const GlowingOrb = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-50 transition-opacity duration-300"
      style={{
        left: position.x,
        top: position.y,
        opacity: isVisible ? 1 : 0,
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* Inner glow */}
      <div className="w-4 h-4 rounded-full bg-primary/60 blur-sm" />
      {/* Outer glow */}
      <div 
        className="absolute inset-0 w-24 h-24 -translate-x-[40%] -translate-y-[40%] rounded-full bg-primary/10 blur-2xl"
      />
    </div>
  );
};

// Unique text scramble effect
export const ScrambleText = ({ text, className = "" }: { text: string; className?: string }) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  useEffect(() => {
    if (!isHovering) {
      setDisplayText(text);
      return;
    }

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(prev => 
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) return text[index];
            if (char === " ") return " ";
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      
      if (iteration >= text.length) {
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, [isHovering, text]);

  return (
    <span 
      className={`inline-block cursor-default font-mono ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {displayText}
    </span>
  );
};

// Unique typewriter effect with custom cursor
export const TypewriterText = ({ 
  texts, 
  className = "",
  speed = 100,
  deleteSpeed = 50,
  pauseTime = 2000 
}: { 
  texts: string[]; 
  className?: string;
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentFullText.length) {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTextIndex, texts, speed, deleteSpeed, pauseTime]);

  return (
    <span className={className}>
      {displayText}
      <span className="inline-block w-0.5 h-[1em] bg-primary ml-1 animate-pulse" />
    </span>
  );
};

export default MagneticCursor;
