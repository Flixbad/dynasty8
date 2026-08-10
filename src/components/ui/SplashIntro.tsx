"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const SEEN_KEY = "dynasty8-splash-seen";

export function SplashIntro() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SEEN_KEY)) return;
      setShow(true);
      sessionStorage.setItem(SEEN_KEY, "1");
    } catch {
      setShow(true);
    }
  }, []);

  useEffect(() => {
    if (!show) return;
    const t = window.setTimeout(() => setShow(false), 2200);
    return () => window.clearTimeout(t);
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-center">
            <motion.p
              className="display text-5xl tracking-[0.12em] text-cream md:text-7xl"
              initial={{ opacity: 0, letterSpacing: "0.4em", y: 20 }}
              animate={{ opacity: 1, letterSpacing: "0.12em", y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              DYNASTY<span className="text-gold">8</span>
            </motion.p>
            <motion.div
              className="mx-auto mt-6 h-px w-16 origin-left bg-gold"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.35, duration: 0.7 }}
            />
            <motion.p
              className="mt-5 text-[0.65rem] uppercase tracking-[0.35em] text-cream-muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
            >
              Los Santos Realty
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
