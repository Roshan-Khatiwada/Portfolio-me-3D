"use client";

import { useEffect, useMemo, useState } from "react";
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud";
import "./DynamicIconCloud.css";

// Define the array of icon slugs
const slugs = [
  "android","bootstrap", "c", "cplusplus", "csharp", 
  "css3", "discord", "dotnet", "figma", "firebase", "git", 
  "github","gmail", "html5", "instagram", "java", 
  "javascript", "kotlin", "linkedin", "linux", "mongodb", "nextdotjs", 
  "npm", "php","react", "stackoverflow", "svg", "tailwindcss", "twitter",
  "visualstudiocode", "visualstudio", "windows"
];

// Map icon slugs to vibrant, distinctive colors
const colorMap = {
  android: '#4CAF50',        // Bright Android Green
  bootstrap: '#8E44AD',      // Purple Bootstrap
  c: '#FF6B6B',             // Coral Red for C
  cplusplus: '#3498DB',      // Bright Blue for C++
  csharp: '#2ECC71',         // Emerald Green for C#
  css3: '#3498DB',           // Blue for CSS3
  discord: '#7289DA',        // Discord Blurple
  dotnet: '#E74C3C',         // Red for .NET
  figma: '#F39C12',          // Orange for Figma
  firebase: '#FFA726',       // Amber for Firebase
  git: '#E67E22',           // Orange for Git
  github: '#34495E',         // Dark Blue-Gray for GitHub
  gmail: '#E74C3C',          // Red for Gmail
  html5: '#E67E22',          // Orange for HTML5
  instagram: '#E91E63',      // Pink for Instagram
  java: '#F39C12',          // Orange for Java
  javascript: '#F1C40F',     // Yellow for JavaScript
  kotlin: '#9B59B6',         // Purple for Kotlin
  linkedin: '#0077B5',       // LinkedIn Blue
  linux: '#F1C40F',         // Gold for Linux
  mongodb: '#4CAF50',        // Green for MongoDB
  nextdotjs: '#000000',      // Black for Next.js
  npm: '#E74C3C',           // Red for npm
  php: '#9B59B6',           // Purple for PHP
  react: '#61DAFB',          // React Blue
  stackoverflow: '#F39C12',  // Orange for Stack Overflow
  svg: '#E74C3C',           // Red for SVG
  tailwindcss: '#06B6D4',    // Cyan for Tailwind
  twitter: '#1DA1F2',        // Twitter Blue
  visualstudiocode: '#007ACC', // VS Code Blue
  visualstudio: '#5C2D91',   // Purple for Visual Studio
  windows: '#0078D4',        // Windows Blue
};

const cloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
    className: "cloud",
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

// Function to format icon names for better display
const formatIconName = (slug) => {
  const nameMap = {
    android: "Android",
    bootstrap: "Bootstrap",
    c: "C Programming",
    cplusplus: "C++",
    csharp: "C#",
    css3: "CSS3",
    discord: "Discord",
    dotnet: ".NET",
    figma: "Figma",
    firebase: "Firebase",
    git: "Git",
    github: "GitHub",
    gmail: "Gmail",
    html5: "HTML5",
    instagram: "Instagram",
    java: "Java",
    javascript: "JavaScript",
    kotlin: "Kotlin",
    linkedin: "LinkedIn",
    linux: "Linux",
    mongodb: "MongoDB",
    nextdotjs: "Next.js",
    npm: "NPM",
    php: "PHP",
    react: "React",
    stackoverflow: "Stack Overflow",
    svg: "SVG",
    tailwindcss: "Tailwind CSS",
    twitter: "Twitter",
    visualstudiocode: "VS Code",
    visualstudio: "Visual Studio",
    windows: "Windows",
  };
  
  return nameMap[slug] || slug.charAt(0).toUpperCase() + slug.slice(1);
};

const renderCustomIcon = (icon) => {
  const bgHex = "#080510";
  const fallbackHex = "#ffffff";
  const minContrastRatio = 2;
  const customColor = colorMap[icon.slug] || "#FFFFFF";
  const displayName = formatIconName(icon.slug);

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    fallbackHex: customColor, // Use custom color as fallback
    iconHex: customColor, // Force the icon color
    minContrastRatio,
    size: 50,
    aProps: {
      onClick: (e) => e.preventDefault(),
      style: {
        margin: "0",
        transition: "transform 0.3s",
        color: customColor + " !important",
        fill: customColor + " !important",
      },
      onMouseEnter: (e) => {
        e.currentTarget.style.transform = "scale(1.5)";
      },
      onMouseLeave: (e) => {
        e.currentTarget.style.transform = "scale(1)";
      },
      title: displayName, // Use formatted name for tooltip
      "data-tooltip": displayName, // Additional tooltip attribute
    },
  });
};

const IconCloud = ({ iconSlugs = slugs }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon)
    );
  }, [data]);

  return (
    <Cloud {...cloudProps}>
      {renderedIcons}
    </Cloud>
  );
};

export default IconCloud;
