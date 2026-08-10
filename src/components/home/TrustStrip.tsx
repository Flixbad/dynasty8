"use client";

import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import { Reveal } from "@/components/motion/Reveal";

interface TrustStripProps {
  total: number;
  available: number;
  zones: number;
  districts: number;
}

export function TrustStrip({ total, available, zones, districts }: TrustStripProps) {
  const stats = [
    { label: "Biens", value: total },
    { label: "Disponibles", value: available },
    { label: "Zones", value: zones },
    { label: "Quartiers", value: districts, suffix: "+" },
  ];

  return (
    <section className="border-y border-[var(--line)]">
      <div className="container-x grid grid-cols-2 gap-8 py-12 md:grid-cols-4 md:py-16">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.06}>
            <p className="display text-5xl text-ivory md:text-6xl">
              <AnimatedCounter value={stat.value} suffix={stat.suffix ?? ""} />
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
