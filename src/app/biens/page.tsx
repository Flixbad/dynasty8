import type { Metadata } from "next";
import BiensPageClient from "./BiensPageClient";

export const metadata: Metadata = {
  title: "Propriétés",
  description: "Catalogue Dynasty8 — maisons, villas, appartements, entrepôts et garages à Los Santos.",
};

export default function BiensPage() {
  return <BiensPageClient />;
}
