import Link from "next/link";
import { Magnetic } from "@/components/motion/Magnetic";

export function AgencyCTA() {
  return (
    <section className="relative min-h-[75vh] overflow-hidden noise">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
          alt="Skyline Los Santos"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-void/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(15,159,108,0.25),transparent_50%)]" />
      </div>

      <div className="relative container-x flex min-h-[75vh] flex-col justify-center py-24">
        <p className="eyebrow">L&apos;agence</p>
        <h2 className="display mt-4 max-w-3xl text-5xl text-ivory md:text-7xl">
          Transactions
          <br />
          <span className="text-green">discrètes.</span>
          <br />
          Adresses publiques.
        </h2>
        <p className="mt-6 max-w-lg font-light text-muted">
          Estimation, visite privée, négociation. Dynasty8 accompagne citoyens et organisations sur
          tout San Andreas.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Magnetic>
            <Link href="/agence" className="btn-primary">
              Rencontrer l&apos;équipe
            </Link>
          </Magnetic>
          <Link href="/contact" className="btn-ghost">
            Prendre rendez-vous
          </Link>
        </div>
      </div>
    </section>
  );
}
