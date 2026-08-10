"use client";

import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import { Reveal } from "@/components/motion/Reveal";

const stats = [
  { label: "Locations réalisées", value: 2648, suffix: "+" },
  { label: "Intérieurs disponibles", value: 75, suffix: "" },
  { label: "Clients satisfaits", value: 97, suffix: "%" },
];

export function TrustStrip() {
  return (
    <section className="border-y border-[var(--line)]">
      <div className="container-x grid grid-cols-1 gap-10 py-12 sm:grid-cols-3 md:py-16">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.06} className="text-center sm:text-left">
            <p className="display text-5xl text-ivory md:text-6xl">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
