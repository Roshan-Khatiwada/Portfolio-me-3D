import React, { useEffect, useState } from 'react';

const AnimatedPercent = ({ level }) => {
  const [animatedValue, setAnimatedValue] = useState(0); // Start at 0

  const animateValue = (start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setAnimatedValue(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  useEffect(() => {
    animateValue(0, level, 900); // Start at 0, end at skill.level over 5000 ms
  }, [level]); // Include level in the dependency array

  return (
    <div className="percentage text-white font-bold ml-4">
      <span className="hypertext">{animatedValue}%</span>
    </div>
  );
};

export default AnimatedPercent;
