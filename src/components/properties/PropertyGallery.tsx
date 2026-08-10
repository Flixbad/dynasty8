"use client";

import { useState } from "react";
import { Lightbox } from "./Lightbox";

interface PropertyGalleryProps {
  images: string[];
  title: string;
}

export function PropertyGallery({ images, title }: PropertyGalleryProps) {
  const [open, setOpen] = useState(false);
  const [start, setStart] = useState(0);

  if (images.length === 0) return null;

  return (
    <>
      <div className="mt-14">
        <div className="flex items-end justify-between gap-4">
          <h2 className="display text-3xl text-cream">Galerie</h2>
          <button
            type="button"
            className="btn-link"
            onClick={() => {
              setStart(0);
              setOpen(true);
            }}
          >
            Plein écran <span aria-hidden>↗</span>
          </button>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              className="group relative aspect-[4/3] overflow-hidden"
              onClick={() => {
                setStart(i);
                setOpen(true);
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`${title} ${i + 1}`}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-ink/0 transition group-hover:bg-ink/20" />
            </button>
          ))}
        </div>
      </div>
      <Lightbox
        images={images}
        alt={title}
        open={open}
        startIndex={start}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
