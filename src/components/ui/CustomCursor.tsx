"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    setEnabled(fine);
    if (!fine) return;

    document.documentElement.classList.add("cursor-dynasty");

    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      const clickable = t?.closest("a, button, input, select, textarea, [role='button']");
      setHover(Boolean(clickable));
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      document.documentElement.classList.remove("cursor-dynasty");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[120] hidden mix-blend-difference md:block"
      animate={{
        x: pos.x - (hover ? 18 : 4),
        y: pos.y - (hover ? 18 : 4),
        width: hover ? 36 : 8,
        height: hover ? 36 : 8,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 28, mass: 0.4 }}
    >
      <div
        className={`h-full w-full rounded-full border ${hover ? "border-cream bg-transparent" : "bg-gold"}`}
      />
    </motion.div>
  );
}
