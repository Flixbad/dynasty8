import Link from "next/link";

export function AgencyCTA() {
  return (
    <section className="relative overflow-hidden border-y border-[var(--line)]">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80"
          alt="Skyline de Los Santos"
          className="h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-emerald/30" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-8 px-5 py-28 md:px-8">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Dynasty8</p>
        <h2 className="max-w-2xl font-[family-name:var(--font-display)] text-4xl leading-tight text-cream md:text-6xl">
          Une signature pour chaque transaction à Los Santos
        </h2>
        <p className="max-w-xl text-cream-muted">
          Estimation, visite, négociation et remise des clés. Notre équipe accompagne citoyens,
          entreprises et collectionneurs sur tout le comté.
        </p>
        <Link href="/agence" className="btn-primary">
          Découvrir l&apos;agence
        </Link>
      </div>
    </section>
  );
}
