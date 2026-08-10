"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LightboxProps {
  images: string[];
  alt: string;
  startIndex?: number;
  open: boolean;
  onClose: () => void;
}

export function Lightbox({ images, alt, startIndex = 0, open, onClose }: LightboxProps) {
  const [index, setIndex] = useState(startIndex);

  useEffect(() => {
    if (open) setIndex(startIndex);
  }, [open, startIndex]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, images.length, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[95] flex items-center justify-center bg-ink/92 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button
            type="button"
            className="absolute right-5 top-5 z-10 text-sm uppercase tracking-[0.2em] text-cream-muted hover:text-cream"
            onClick={onClose}
          >
            Fermer ✕
          </button>

          <button
            type="button"
            className="absolute left-4 z-10 hidden h-12 w-12 items-center justify-center border border-[var(--line)] text-cream md:flex"
            onClick={(e) => {
              e.stopPropagation();
              setIndex((i) => (i - 1 + images.length) % images.length);
            }}
            aria-label="Précédent"
          >
            ←
          </button>
          <button
            type="button"
            className="absolute right-4 z-10 hidden h-12 w-12 items-center justify-center border border-[var(--line)] text-cream md:flex"
            onClick={(e) => {
              e.stopPropagation();
              setIndex((i) => (i + 1) % images.length);
            }}
            aria-label="Suivant"
          >
            →
          </button>

          <motion.img
            key={images[index]}
            src={images[index]}
            alt={`${alt} — ${index + 1}`}
            className="max-h-[82vh] max-w-[92vw] object-contain"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={(e) => e.stopPropagation()}
          />

          <p className="absolute bottom-6 text-xs uppercase tracking-[0.2em] text-cream-muted">
            {index + 1} / {images.length}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
