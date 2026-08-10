"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { Property } from "@/types";
import { HeroSearch } from "./HeroSearch";
import { Magnetic } from "@/components/motion/Magnetic";
import { formatPrice } from "@/lib/format";

interface HeroProps {
  slides: Property[];
}

export function Hero({ slides }: HeroProps) {
  const [index, setIndex] = useState(0);
  const current = slides[index] ?? slides[0];

  useEffect(() => {
    if (slides.length < 2) return;
    const t = window.setInterval(() => setIndex((i) => (i + 1) % slides.length), 5500);
    return () => window.clearInterval(t);
  }, [slides.length]);

  if (!current) return null;

  return (
    <section className="relative min-h-[100svh] overflow-hidden noise">
      <AnimatePresence mode="sync">
        <motion.div
          key={current.id}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.25, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={current.image}
            alt={current.title}
            className="h-full w-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,6,7,0.55)_0%,rgba(5,6,7,0.2)_35%,rgba(5,6,7,0.85)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(15,159,108,0.18),transparent_45%)]" />

      <div className="pointer-events-none absolute -right-8 top-1/2 hidden -translate-y-1/2 select-none xl:block">
        <span className="display text-[22rem] leading-none text-white/[0.04]">8</span>
      </div>

      <div className="relative container-x flex min-h-[100svh] flex-col justify-end pb-10 pt-32 md:pb-14">
        <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <motion.p
              className="eyebrow"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              Los Santos · San Andreas
            </motion.p>
            <motion.h1
              className="display mt-5 text-[clamp(4rem,14vw,9rem)] text-ivory"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              Live
              <br />
              <span className="text-green">Dynasty</span>
            </motion.h1>
            <motion.p
              className="mt-6 max-w-md text-base font-light leading-relaxed text-muted md:text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              L&apos;immobilier de prestige pour le roleplay. Villas, penthouses, garages & entrepôts
              — signés Dynasty8.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Magnetic>
                <Link href="/biens" className="btn-primary">
                  Voir les propriétés
                </Link>
              </Magnetic>
              <Link href="/zones" className="btn-ghost">
                Explorer les zones
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="rounded-[22px] border border-white/10 bg-void/40 p-5 backdrop-blur-md md:p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-green-soft">
              En ce moment
            </p>
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
              >
                <Link href={`/biens/${current.slug}`} className="mt-3 block">
                  <p className="display-light text-2xl text-ivory md:text-3xl">{current.title}</p>
                  <p className="mt-2 text-sm text-muted">
                    {formatPrice(current.price)} · {current.district}
                  </p>
                </Link>
              </motion.div>
            </AnimatePresence>
            <div className="mt-5 flex gap-1.5">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  aria-label={`Bien ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className="h-1 flex-1 overflow-hidden rounded-full bg-white/15"
                >
                  <motion.span
                    className="block h-full rounded-full bg-green"
                    initial={false}
                    animate={{ width: i === index ? "100%" : i < index ? "100%" : "0%" }}
                    transition={i === index ? { duration: 5.5, ease: "linear" } : { duration: 0.25 }}
                  />
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-10 md:mt-12">
          <HeroSearch />
        </div>
      </div>
    </section>
  );
}
