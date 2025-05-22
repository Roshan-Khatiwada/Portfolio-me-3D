"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud";

// Define the array of icon slugs
const slugs = [
  "android","bootstrap", "c", "cplusplus", "csharp", 
  "css3", "discord", "dotnet", "figma", "firebase", "git", 
  "github","gmail", "html5", "instagram", "java", 
  "javascript", "kotlin", "linkedin", "linux", "mongodb", "nextdotjs", 
  "npm", "php","react", "stackoverflow", "svg", "tailwindcss", "twitter",
  "visualstudiocode", "visualstudio", "windows"
];

// Map icon slugs to colors
const colorMap = {
  android: '#3DDC84',
  bootstrap: '#7952B3',
  c: '#A8B9CC',
  cplusplus: '#00599C',
  csharp: '#239120',
  css3: '#1572B6',
  discord: '#5865F2',
  dotnet: '#512BD4',
  figma: '#F24E1E',
  firebase: '#FFCA28',
  git: '#F05032',
  github: '#ddd',
  gmail: '#EA4335',
  html5: '#E34F26',
  instagram: '#E4405F',
  java: '#007396',
  javascript: '#F7DF1E',
  kotlin: '#0095D5',
  linkedin: '#0A66C2',
  linux: '#FCC624',
  mongodb: '#47A248',
  nextdotjs: '#000000',
  npm: '#CB3837',
  php: '#777BB4',
  react: '#61DAFB',
  stackoverflow: '#F58025',
  svg: '#FFB13B',
  tailwindcss: '#06B6D4',
  twitter: '#1DA1F2',
  visualstudiocode: '#007ACC',
  visualstudio: '#5C2D91',
  windows: '#0078D5',
};

const cloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

const renderCustomIcon = (icon, theme) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 50, // Increased icon size
    aProps: {
      onClick: (e) => e.preventDefault(),
      style: {
        margin: "0", // Add margin between icons
        transition: "transform 0.3s", // Smooth scaling transition
        color: colorMap[icon.slug] || "#FFFFFF", // Default to white if no color is found
      },
      onMouseEnter: (e) => {
        e.currentTarget.style.transform = "scale(2)"; // Scale on hover
      },
      onMouseLeave: (e) => {
        e.currentTarget.style.transform = "scale(1)"; // Reset scale on mouse leave
      },
    },
  });
};

const IconCloud = ({ iconSlugs = slugs }) => {
  const [data, setData] = useState(null);
  const { theme } = useTheme();

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme || "light")
    );
  }, [data, theme]);

  return (
     
    <Cloud {...cloudProps}>
      {renderedIcons}
    </Cloud>
  );
};

export default IconCloud;
