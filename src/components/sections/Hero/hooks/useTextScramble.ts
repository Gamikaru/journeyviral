import { useState, useEffect } from "react";

export const useTextScramble = (text: string, isActive: boolean) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  useEffect(() => {
    if (!isActive) {
      setDisplayText(text);
      return;
    }

    const TOTAL_SCRAMBLE_TIME = 1000;
    const FRAME_RATE = 60;
    const FRAME_INTERVAL = 1000 / FRAME_RATE;
    const TOTAL_FRAMES = TOTAL_SCRAMBLE_TIME / FRAME_INTERVAL;

    let currentFrame = 0;

    const interval = setInterval(() => {
      const progress = currentFrame / TOTAL_FRAMES;

      setDisplayText(
        text
          .split("")
          .map((letter, index) => {
            const charLockPoint = (index + 1) / text.length;

            if (progress >= charLockPoint) {
              return text[index];
            } else {
              return chars[Math.floor(Math.random() * chars.length)];
            }
          })
          .join("")
      );

      currentFrame++;

      if (currentFrame > TOTAL_FRAMES) {
        clearInterval(interval);
        setDisplayText(text);
      }
    }, FRAME_INTERVAL);

    return () => clearInterval(interval);
  }, [text, chars, isActive]);

  return displayText;
};
