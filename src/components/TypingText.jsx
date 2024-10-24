import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const TypingText = ({ text = "", speed = 20 }) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    if (!text || typeof text !== 'string') return;  // Ensure text is valid

    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + (text[index] || "")); // Append only valid characters
      index += 1;

      if (index === text.length) {
        clearInterval(interval);  // Stop the interval when all characters are typed
      }
    }, speed);

    return () => clearInterval(interval);  // Cleanup interval on unmount
  }, [text, speed]);

  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {displayedText}
    </motion.p>
  );
};

export default TypingText;
