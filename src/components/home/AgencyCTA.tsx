import Link from "next/link";

export function AgencyCTA() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
          alt="Skyline de Los Santos"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent" />
      </div>

      <div className="relative container-x flex min-h-[70vh] flex-col justify-center py-24">
        <div className="gold-rule mb-6" />
        <p className="eyebrow">L&apos;agence</p>
        <h2 className="display mt-4 max-w-2xl text-4xl leading-[1.1] text-cream md:text-6xl">
          Une signature pour chaque transaction
        </h2>
        <p className="mt-6 max-w-lg font-light leading-relaxed text-cream-muted">
          Estimation, visite privée, négociation et remise des clés. Dynasty8 accompagne citoyens et
          organisations sur tout San Andreas.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/agence" className="btn-primary">
            Rencontrer l&apos;équipe
          </Link>
          <Link href="/contact" className="btn-ghost">
            Prendre rendez-vous
          </Link>
        </div>
      </div>
    </section>
  );
}
