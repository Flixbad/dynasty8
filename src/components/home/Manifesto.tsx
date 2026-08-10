import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";

const steps = [
  {
    n: "01",
    title: "Choisir sa zone",
    text: "Du sud industriel aux collines Vinewood — 4 secteurs pour cadrer votre recherche RP.",
    href: "/zones",
  },
  {
    n: "02",
    title: "Comparer les biens",
    text: "Favoris, comparateur et recherche ⌘K. Tout reste sur votre appareil.",
    href: "/comparer",
  },
  {
    n: "03",
    title: "Clôturer avec Dynasty8",
    text: "Visite, estimation et transaction accompagnées par nos conseillers.",
    href: "/contact",
  },
];

export function Manifesto() {
  return (
    <section className="band-stone section-y">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">Méthode</p>
          <h2 className="display mt-4 max-w-3xl text-4xl text-ink md:text-6xl">
            Une agence. Une signature.
            <span className="text-green-dim"> Trois gestes.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={0.08 * i}>
              <Link
                href={step.href}
                className="group block h-full rounded-[22px] border border-[var(--line-dark)] bg-white/40 p-7 transition hover:-translate-y-1 hover:bg-white/70"
              >
                <p className="display text-5xl text-green-dim/40 transition group-hover:text-green-dim">
                  {step.n}
                </p>
                <h3 className="display mt-6 text-2xl text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-dark">{step.text}</p>
                <span className="btn-link mt-6">Découvrir</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
