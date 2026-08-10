import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/contact/ContactForm";
import { PropertyGallery } from "@/components/properties/PropertyGallery";
import { PropertyDetailClient } from "@/components/properties/PropertyDetailClient";
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
    <div className="pb-24">
      <div className="relative h-[68vh] min-h-[440px] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={property.image} alt={property.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/30" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="container-x pb-10 pt-24">
            <div className="flex flex-wrap gap-2">
              {zone && (
                <Link
                  href={`/zones/${zone.slug}`}
                  className="px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-ink"
                  style={{ background: zone.color }}
                >
                  {zone.label}
                </Link>
              )}
              <span className="bg-ink/50 px-2.5 py-1 text-[0.62rem] uppercase tracking-[0.16em] text-cream backdrop-blur-md">
                {getCategoryLabel(property.category)}
              </span>
              <span
                className={`bg-ink/50 px-2.5 py-1 text-[0.62rem] uppercase tracking-[0.16em] backdrop-blur-md status-${property.status}`}
              >
                {getStatusLabel(property.status)}
              </span>
            </div>
            <h1 className="display mt-5 max-w-4xl text-4xl text-cream md:text-6xl">
              {property.title}
            </h1>
            <p className="mt-3 font-light text-cream-muted">
              {property.location} · {property.district}
              {zone ? ` · ${zone.label}` : ""}
            </p>
          </div>
        </div>
      </div>

      <div className="container-x grid gap-14 py-14 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16">
        <div>
          <p className="display text-4xl text-cream md:text-5xl">{formatPrice(property.price)}</p>
          <PropertyDetailClient propertyId={property.id} />
          <div className="gold-rule mt-8" />
          <p className="mt-8 text-lg font-light leading-relaxed text-cream-muted">
            {property.longDescription}
          </p>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
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

          <div className="mt-14">
            <h2 className="display text-3xl text-cream">Équipements</h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {property.features.map((feature) => (
                <li
                  key={feature}
                  className="bg-surface px-3 py-2 text-sm font-light text-cream-muted"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <PropertyGallery images={property.gallery} title={property.title} />
        </div>

        <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
          <div className="border border-[var(--line)] bg-surface p-6">
            <p className="eyebrow">Visite privée</p>
            <p className="mt-3 text-sm font-light leading-relaxed text-cream-muted">
              Un conseiller Dynasty8 organise la visite et sécurise la transaction RP.
            </p>
            <Link href="/biens" className="btn-link mt-5">
              Retour au catalogue <span aria-hidden>→</span>
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
    <div className="border border-[var(--line)] bg-surface px-4 py-4">
      <p className="text-[0.62rem] uppercase tracking-[0.18em] text-cream-muted">{label}</p>
      <p className="display mt-2 text-2xl text-cream">{value}</p>
    </div>
  );
}
