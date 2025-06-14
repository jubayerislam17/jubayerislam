import { useState, useEffect } from "react";

export function useTypingAnimation(texts: string[], speed: number = 100) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        
        if (charIndex === 0) {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % texts.length);
        }
      } else {
        setCurrentText(current.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        
        if (charIndex === current.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, charIndex, isDeleting, texts, speed]);

  return currentText;
}
