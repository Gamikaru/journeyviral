import { useState, useEffect, useCallback } from 'react';

type AnimationStage = 'hidden' | 'firstLine' | 'secondLine' | 'looping';

interface UseAnimationSequenceProps {
  isVisible: boolean;
  shouldAnimate: boolean;
  onComplete?: () => void;
}

export const useAnimationSequence = ({
  isVisible,
  shouldAnimate,
  onComplete
}: UseAnimationSequenceProps) => {
  const [stage, setStage] = useState<AnimationStage>('hidden');
  const [hasStarted, setHasStarted] = useState(false);

  const resetSequence = useCallback(() => {
    setStage('hidden');
    setHasStarted(false);
  }, []);

  useEffect(() => {
    if (!isVisible) {
      const hideTimer = setTimeout(() => {
        resetSequence();
      }, 300);
      return () => clearTimeout(hideTimer);
    }

    if (!shouldAnimate) {
      setStage('secondLine'); // Show both lines statically
      return;
    }

    if (hasStarted) return;

    setHasStarted(true);
    const timers: NodeJS.Timeout[] = [];

    // Start the looping sequence
    const startLoop = () => {
      timers.forEach(clearTimeout);
      const newTimers: NodeJS.Timeout[] = [];

      // Show first line for 3 seconds
      setStage('firstLine');

      // After 3 seconds, switch to second line
      newTimers.push(setTimeout(() => {
        setStage('secondLine');
      }, 3000));

      // After 4 more seconds (7 total), restart the loop
      newTimers.push(setTimeout(() => {
        startLoop(); // Recursive call to loop
      }, 7000));

      // Update timers array
      timers.push(...newTimers);
    };

    // Start the loop immediately
    startLoop();

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [isVisible, shouldAnimate, hasStarted, onComplete, resetSequence]);

  return { stage, resetSequence };
};
