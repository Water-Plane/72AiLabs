import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  showCursor?: boolean;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  speed = 100,
  delay = 0,
  showCursor = true,
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTypingCursor, setShowTypingCursor] = useState(false);

  useEffect(() => {
    const startTyping = setTimeout(() => {
      setShowTypingCursor(true);
      
      const typeInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        } else {
          clearInterval(typeInterval);
          if (!showCursor) {
            setShowTypingCursor(false);
          }
        }
      }, speed);

      return () => clearInterval(typeInterval);
    }, delay);

    return () => clearTimeout(startTyping);
  }, [text, speed, delay, currentIndex, showCursor]);

  return (
    <span>
      {displayText}
      {showTypingCursor && <span className="typewriter-cursor" />}
    </span>
  );
};

export default TypewriterText;
