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
    const t = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 6000);
    return () => window.clearInterval(t);
  }, [slides.length]);

  if (!current) return null;

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={current.image}
            alt={current.title}
            className="h-full w-full object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(9,10,12,0.94)_0%,rgba(9,10,12,0.58)_45%,rgba(9,10,12,0.28)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/55" />

      <div className="relative container-x flex min-h-[100svh] flex-col justify-end pb-12 pt-28 md:justify-center md:pb-20 md:pt-24">
        <div className="max-w-3xl">
          <motion.div
            className="gold-rule mb-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{ originX: 0 }}
          />
          <p className="eyebrow">Agence immobilière · Los Santos</p>
          <h1 className="display mt-5 text-[clamp(3.5rem,10vw,7.5rem)] text-cream">
            Dynasty<span className="text-gold">8</span>
          </h1>
          <p className="mt-5 max-w-md text-[1.05rem] font-light leading-relaxed text-cream-muted md:text-lg">
            Propriétés d&apos;exception, transactions discrètes — du Rockford Hills au nord de
            Paleto.
          </p>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id + "-meta"}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.45 }}
              className="mt-8"
            >
              <p className="text-[0.65rem] uppercase tracking-[0.22em] text-gold-soft">
                En vedette
              </p>
              <Link
                href={`/biens/${current.slug}`}
                className="mt-2 inline-block text-cream transition hover:text-gold-soft"
              >
                <span className="display text-2xl md:text-3xl">{current.title}</span>
                <span className="mt-1 block text-sm text-cream-muted">
                  {formatPrice(current.price)} · {current.district}
                </span>
              </Link>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Magnetic>
              <Link href="/biens" className="btn-primary">
                Explorer le catalogue
              </Link>
            </Magnetic>
            <Link href="/agence" className="btn-ghost">
              Notre agence
            </Link>
          </div>
        </div>

        <div className="mt-10 flex gap-2">
          {slides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              aria-label={`Slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className="group relative h-1 flex-1 max-w-16 overflow-hidden bg-white/15"
            >
              <motion.span
                className="absolute inset-y-0 left-0 bg-gold"
                initial={false}
                animate={{ width: i === index ? "100%" : i < index ? "100%" : "0%" }}
                transition={
                  i === index
                    ? { duration: 6, ease: "linear" }
                    : { duration: 0.3 }
                }
              />
            </button>
          ))}
        </div>

        <div className="mt-10 md:mt-14">
          <HeroSearch />
        </div>
      </div>
    </section>
  );
}
