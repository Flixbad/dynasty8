import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2000&q=80"
          alt="Villa de luxe à Los Santos"
          className="hero-kenburns h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-24 pt-32 md:justify-center md:px-8 md:pb-16">
        <p className="reveal text-xs uppercase tracking-[0.4em] text-gold">Agence immobilière · GTA RP</p>
        <h1 className="reveal reveal-delay-1 mt-4 max-w-3xl font-[family-name:var(--font-display)] text-6xl leading-[0.95] tracking-wide text-cream md:text-8xl">
          <span className="brand-shimmer">DYNASTY8</span>
        </h1>
        <p className="reveal reveal-delay-2 mt-6 max-w-lg text-lg leading-relaxed text-cream-muted md:text-xl">
          L&apos;immobilier de prestige à Los Santos. Villas Rockford, penthouses Downtown, garages
          et entrepôts — votre adresse commence ici.
        </p>
        <div className="reveal reveal-delay-3 mt-10 flex flex-wrap gap-4">
          <Link href="/biens" className="btn-primary">
            Explorer les biens
          </Link>
          <Link href="/contact" className="btn-ghost">
            Parler à un conseiller
          </Link>
        </div>
      </div>
    </section>
  );
}
