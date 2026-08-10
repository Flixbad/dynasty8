import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/contact/ContactForm";
import { getPropertyBySlug, properties } from "@/data/properties";
import { getZone } from "@/data/zones";
import {
  formatArea,
  formatPrice,
  getCategoryLabel,
  getStatusLabel,
} from "@/lib/format";

interface PropertyPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PropertyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) return { title: "Bien introuvable" };
  return {
    title: property.title,
    description: property.description,
  };
}

export default async function PropertyDetailPage({ params }: PropertyPageProps) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) notFound();
  const zone = getZone(property.zone);

  return (
    <div className="pb-24 pt-28">
      <div className="relative h-[55vh] min-h-[360px] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={property.image}
          alt={property.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/20" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-5 pb-10 md:px-8">
          <div className="flex flex-wrap gap-2">
            {zone && (
              <Link
                href={`/zones/${zone.slug}`}
                className="px-3 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-ink"
                style={{ background: zone.color }}
              >
                {zone.label}
              </Link>
            )}
            <span className="bg-ink/60 px-3 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-gold-soft backdrop-blur-sm">
              {getCategoryLabel(property.category)}
            </span>
            <span
              className={`bg-ink/60 px-3 py-1 text-[0.65rem] uppercase tracking-[0.18em] backdrop-blur-sm status-${property.status}`}
            >
              {getStatusLabel(property.status)}
            </span>
          </div>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl text-cream md:text-6xl">
            {property.title}
          </h1>
          <p className="mt-3 text-cream-muted">
            {property.location} · {property.district}
            {zone ? ` · ${zone.label}` : ""}
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 md:grid-cols-[1.4fr_0.8fr] md:px-8">
        <div>
          <p className="font-[family-name:var(--font-display)] text-4xl text-gold-soft">
            {formatPrice(property.price)}
          </p>
          <p className="mt-6 text-lg leading-relaxed text-cream-muted">{property.longDescription}</p>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Stat label="Surface" value={formatArea(property.area)} />
            {property.bedrooms !== undefined && (
              <Stat label="Chambres" value={String(property.bedrooms)} />
            )}
            {property.bathrooms !== undefined && (
              <Stat label="Salles de bain" value={String(property.bathrooms)} />
            )}
            {property.parking !== undefined && (
              <Stat label="Parking" value={String(property.parking)} />
            )}
            {property.yearBuilt !== undefined && (
              <Stat label="Année" value={String(property.yearBuilt)} />
            )}
          </div>

          <div className="mt-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-cream">
              Équipements
            </h2>
            <ul className="mt-5 flex flex-wrap gap-3">
              {property.features.map((feature) => (
                <li
                  key={feature}
                  className="border border-[var(--line)] px-3 py-2 text-sm text-cream-muted"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {property.gallery.length > 1 && (
            <div className="mt-12">
              <h2 className="font-[family-name:var(--font-display)] text-3xl text-cream">Galerie</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {property.gallery.map((src) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={src}
                    src={src}
                    alt={property.title}
                    className="aspect-[4/3] w-full object-cover"
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        <aside className="space-y-6">
          <div className="border border-[var(--line)] bg-ink-soft/60 p-6">
            <p className="text-xs uppercase tracking-[0.25em] text-gold">Intéressé ?</p>
            <p className="mt-3 text-sm text-cream-muted">
              Un conseiller Dynasty8 organise une visite RP et sécurise la transaction.
            </p>
            <Link href="/biens" className="btn-ghost mt-6 w-full">
              Retour au catalogue
            </Link>
          </div>
          <ContactForm propertyId={property.id} propertyTitle={property.title} />
        </aside>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-[var(--line)] bg-ink-soft/40 px-4 py-4">
      <p className="text-[0.65rem] uppercase tracking-[0.18em] text-cream-muted">{label}</p>
      <p className="mt-2 font-[family-name:var(--font-display)] text-2xl text-cream">{value}</p>
    </div>
  );
}
