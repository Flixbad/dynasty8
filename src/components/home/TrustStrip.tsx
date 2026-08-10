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
    { label: "Biens au catalogue", value: total },
    { label: "Disponibles", value: available },
    { label: "Zones couvertes", value: zones },
    { label: "Quartiers", value: districts },
  ];

  return (
    <section className="border-y border-[var(--line)] bg-ink-soft/30">
      <div className="container-x grid grid-cols-2 gap-8 py-10 md:grid-cols-4 md:py-14">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08}>
            <div className="text-center md:text-left">
              <p className="display text-3xl text-cream md:text-4xl">
                <AnimatedCounter value={stat.value} suffix={stat.label === "Quartiers" ? "+" : ""} />
              </p>
              <p className="mt-2 text-[0.7rem] uppercase tracking-[0.18em] text-cream-muted">
                {stat.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
