"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useUI } from "@/lib/ui";

export function Toast() {
  const { toast } = useUI();

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          className="pointer-events-none fixed bottom-28 left-1/2 z-[80] -translate-x-1/2 md:bottom-10"
          initial={{ opacity: 0, y: 16, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.35 }}
        >
          <div className="search-glass px-5 py-3 text-sm text-cream shadow-lg">{toast}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
