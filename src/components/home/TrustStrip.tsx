import Link from "next/link";
import { properties } from "@/data/properties";

export function TrustStrip() {
  const available = properties.filter((p) => p.status === "disponible").length;

  const stats = [
    { label: "Biens au catalogue", value: String(properties.length) },
    { label: "Disponibles", value: String(available) },
    { label: "Zones couvertes", value: "4" },
    { label: "Quartiers", value: "15+" },
  ];

  return (
    <section className="border-y border-[var(--line)] bg-ink-soft/30">
      <div className="container-x grid grid-cols-2 gap-8 py-10 md:grid-cols-4 md:py-12">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center md:text-left">
            <p className="display text-3xl text-cream md:text-4xl">{stat.value}</p>
            <p className="mt-2 text-[0.7rem] uppercase tracking-[0.18em] text-cream-muted">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
      <div className="container-x pb-8 text-center md:hidden">
        <Link href="/biens" className="btn-link justify-center">
          Parcourir <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
