import { useState, useEffect } from 'react';

const useCounter = (end, duration = 3000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const startValue = 0;
    
    // Easing function for smooth animation
    const easeOutQuart = (x) => {
      return 1 - Math.pow(1 - x, 4);
    };
    
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      // Apply easing function to the progress
      const easedProgress = easeOutQuart(progress);
      const currentCount = Math.floor(easedProgress * (end - startValue) + startValue);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Ensure we end exactly at the target number
        setCount(end);
      }
    };
    
    if (end > 0) {
      requestAnimationFrame(animate);
    } else {
      setCount(0);
    }

    // Cleanup
    return () => {
      startTime = null;
    };
  }, [end, duration]);

  return count;
};

export default useCounter; 