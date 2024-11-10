import { useState, useEffect } from 'react';

const useCounter = (end, startOnVisible = false, start = 0, duration = 3000) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (startOnVisible && !end) return;
    
    let startTime = null;
    let animationFrame;

    const easeOutQuart = (x) => {
      return 1 - Math.pow(1 - x, 4);
    };

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      const easedProgress = easeOutQuart(progress);
      const currentCount = Math.floor(easedProgress * (end - start) + start);
      
      setCount(currentCount);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    if (end > start) {
      animationFrame = requestAnimationFrame(animate);
    } else {
      setCount(start);
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      startTime = null;
    };
  }, [end, start, duration, startOnVisible]);

  return count;
};

export default useCounter; 