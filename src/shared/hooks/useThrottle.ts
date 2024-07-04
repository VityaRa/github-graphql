import { useRef, useCallback } from 'react';

export const useThrottle = (fn: () => void, delay: number = 1000) => {
  const lastCallRef = useRef(0);

  const throttledFunction = useCallback(() => {
    const now = Date.now();
    if (now - lastCallRef.current >= delay) {
      lastCallRef.current = now;
      fn();
    }
  }, [fn, delay]);

  return throttledFunction;
}
