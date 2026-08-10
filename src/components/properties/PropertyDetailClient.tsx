"use client";

import { useEffect } from "react";
import { useRecent } from "@/lib/recent";
import { PropertyActions } from "./PropertyActions";

interface PropertyDetailClientProps {
  propertyId: string;
}

export function PropertyDetailClient({ propertyId }: PropertyDetailClientProps) {
  const { push } = useRecent();

  useEffect(() => {
    push(propertyId);
  }, [propertyId, push]);

  return (
    <div className="mt-6">
      <PropertyActions id={propertyId} />
    </div>
  );
}
