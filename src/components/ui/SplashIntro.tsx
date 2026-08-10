"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const SEEN_KEY = "dynasty8-splash-v2";

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
    const t = window.setTimeout(() => setShow(false), 2400);
    return () => window.clearTimeout(t);
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-void"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-center">
            <motion.div
              className="mx-auto mb-8 h-2 w-2 rounded-full bg-green"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.4, 1] }}
              transition={{ duration: 0.7 }}
            />
            <motion.p
              className="display text-6xl text-ivory md:text-8xl"
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              Dynasty<span className="text-green">8</span>
            </motion.p>
            <motion.p
              className="mt-5 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              Los Santos Realty
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
