"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, input, textarea, [data-interactive]")) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", updateCursor);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", updateCursor);
      window.removeEventListener("mouseover", handleHover);
    };
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 z-[99999] pointer-events-none w-2 h-2 bg-cyan-400 rounded-full hidden md:block transition-transform duration-75"
        style={{
          transform: `translate3d(${pos.x - 4}px, ${pos.y - 4}px, 0) scale(${isHovered ? 1.5 : 1})`,
        }}
      />
      <div
        className="fixed top-0 left-0 z-[99998] pointer-events-none w-8 h-8 border border-cyan-400/40 rounded-full flex items-center justify-center transition-transform duration-150 ease-out hidden md:block"
        style={{
          transform: `translate3d(${pos.x - 16}px, ${pos.y - 16}px, 0) scale(${isHovered ? 1.8 : 1})`,
          boxShadow: isHovered ? "0 0 15px rgba(0, 243, 255, 0.4)" : "none",
        }}
      />
    </>
  );
}
