"use client";

import "lenis/dist/lenis.css";
import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";
import { FavoritesProvider } from "@/lib/favorites";
import { CompareProvider } from "@/lib/compare";
import { RecentProvider } from "@/lib/recent";
import { UIProvider } from "@/lib/ui";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.2, smoothWheel: true }}>
      <UIProvider>
        <FavoritesProvider>
          <CompareProvider>
            <RecentProvider>{children}</RecentProvider>
          </CompareProvider>
        </FavoritesProvider>
      </UIProvider>
    </ReactLenis>
  );
}
