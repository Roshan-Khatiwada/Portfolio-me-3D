import React from 'react';
import { FaArrowTurnDown } from 'react-icons/fa6';  // U-turn styled arrow

function UTurnArrow({ size = 40, color = 'white', rotation = 90, flip = false }) {
  return (
    <FaArrowTurnDown
      style={{
        transform: `rotate(${rotation}deg) ${flip ? 'scaleX(-1)' : ''}`,  // Rotate and flip horizontally if specified
      }}
      size={size}
      color={color}
    />
  );
}

export default UTurnArrow;
