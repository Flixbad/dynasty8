import Link from "next/link";
import { HeroSearch } from "./HeroSearch";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2200&q=85"
          alt="Villa de prestige Dynasty8 à Los Santos"
          className="hero-kenburns h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(9,10,12,0.92)_0%,rgba(9,10,12,0.55)_42%,rgba(9,10,12,0.25)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/50" />
      </div>

      <div className="relative container-x flex min-h-[100svh] flex-col justify-end pb-12 pt-28 md:justify-center md:pb-20 md:pt-24">
        <div className="max-w-3xl">
          <div className="reveal gold-rule mb-6" />
          <p className="reveal eyebrow">Agence immobilière · Los Santos</p>
          <h1 className="reveal reveal-delay-1 display mt-5 text-[clamp(3.5rem,10vw,7.5rem)] text-cream">
            Dynasty<span className="text-gold">8</span>
          </h1>
          <p className="reveal reveal-delay-2 mt-5 max-w-md text-[1.05rem] font-light leading-relaxed text-cream-muted md:text-lg">
            Propriétés d&apos;exception, transactions discrètes — du Rockford Hills au nord de
            Paleto.
          </p>
          <div className="reveal reveal-delay-3 mt-8 flex flex-wrap gap-3">
            <Link href="/biens" className="btn-primary">
              Explorer le catalogue
            </Link>
            <Link href="/agence" className="btn-ghost">
              Notre agence
            </Link>
          </div>
        </div>

        <div className="mt-12 md:mt-16">
          <HeroSearch />
        </div>
      </div>
    </section>
  );
}
