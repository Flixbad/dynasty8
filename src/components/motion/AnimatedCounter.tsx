"use client";

import { motion, useInView, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

interface CounterProps {
  value: number;
  suffix?: string;
  className?: string;
}

export function AnimatedCounter({ value, suffix = "", className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const reduce = useReducedMotion();
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 60, damping: 20 });

  useEffect(() => {
    if (reduce) {
      motionValue.set(value);
      return;
    }
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue, reduce]);

  useEffect(() => {
    const unsub = spring.on("change", (latest) => {
      if (ref.current) {
        const n = Math.round(latest).toLocaleString("en-US");
        ref.current.textContent = `${n}${suffix}`;
      }
    });
    return () => unsub();
  }, [spring, suffix]);

  return (
    <motion.span ref={ref} className={className}>
      0{suffix}
    </motion.span>
  );
}
