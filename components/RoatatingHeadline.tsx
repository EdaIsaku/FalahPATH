"use client";
import { useEffect, useState } from "react";

export default function RotatingHeadline() {
  const words = [
    "Skill Building Tools",
    "Progress Tracking",
    "Interactive Learning",
  ];
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  // RUN ANIMATION ONLY ONCE
  useEffect(() => {
    if (index === words.length - 1) return; // stop here, no loop
    const timeout = setTimeout(() => {
      setAnimating(true);

      setTimeout(() => {
        setIndex((prev) => prev + 1); // move only forward
        setAnimating(false);
      }, 500);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <span
      className={`text-transparent bg-clip-text bg-gradient-to-r from-[#2f57ef] to-[#b966e7]
                inline-block relative
                transition-all duration-500 
                ${
                  animating
                    ? "translate-y-10 opacity-0"
                    : "translate-y-0 opacity-100"
                }
              `}
    >
      {words[index]}
    </span>
  );
}
