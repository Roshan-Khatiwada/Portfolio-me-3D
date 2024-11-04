"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";

const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

const Dock = ({
  className,
  children,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  direction = "bottom",
  ...props
}) => {
  const mouseX = useMotionValue(Infinity);

  const renderChildren = () => {
    return React.Children.map(children, (child) => {
      if (React.isValidElement(child) && child.type === DockIcon) {
        return React.cloneElement(child, {
          ...child.props,
          mouseX: mouseX,
          magnification: magnification,
          distance: distance,
        });
      }
      return child;
    });
  };

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      {...props}
      className={`supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 mx-auto flex h-[58px] w-max gap-2   ${className} ${
        direction === "top"
          ? "items-start"
          : direction === "middle"
          ? "items-center"
          : "items-end"
      }`}
    >
      {renderChildren()}
    </motion.div>
  );
};

const DockIcon = ({
  size,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  mouseX,
  className,
  children,
  ...props
}) => {
  const ref = useRef(null);

  const distanceCalc = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [40, magnification, 40]
  );

  let width = useSpring(widthSync, {
    mass: 0.6,
    stiffness: 150,
    damping: 4,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className={`flex aspect-square cursor-pointer items-center justify-center rounded-full hover:bg-white/20 hover:backdrop-blur-lg ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const SocialMedia = () => {
  return (
    <Dock>
      <DockIcon>
        <a href="https://github.com/Roshan-Khatiwada" target="_blank" rel="noopener noreferrer">
          <FaGithub size={25} color="white"/>
        </a>
      </DockIcon>
      <DockIcon>
        <a href="https://www.linkedin.com/in/roshan-khatiwada-144a77307/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={25} color="white"/>
        </a>
      </DockIcon>
      <DockIcon>
        <a href="https://www.upwork.com/freelancers/~016ecd378bff17945a" target="_blank" rel="noopener noreferrer">
          <FaUpwork size={25} color="white"/>
        </a>
      </DockIcon>
      <DockIcon>
        <a href="https://www.facebook.com/profile.php?id=100085853364426" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={25} color="white"/>
        </a>
      </DockIcon>
      <DockIcon>
        <a href="https://www.instagram.com/roshan2005.8.19/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={25} color="white"/>
        </a>
      </DockIcon>
    </Dock>
  );
};

