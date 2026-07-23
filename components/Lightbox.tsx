"use client";

import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { FeedItem } from "@/data/feed";

interface LightboxProps {
  items: FeedItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({
  items,
  index,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const item = items[index];

  return (
    <div className="fixed inset-0 z-[200] flex flex-col bg-ink">
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-6 top-6 z-10 text-paper/70 transition-colors hover:text-brass"
      >
        <X className="h-6 w-6" strokeWidth={1.5} />
      </button>

      <button
        onClick={onPrev}
        aria-label="Previous"
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-paper/70 transition-colors hover:text-brass sm:left-8"
      >
        <ChevronLeft className="h-8 w-8" strokeWidth={1.5} />
      </button>

      <button
        onClick={onNext}
        aria-label="Next"
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 text-paper/70 transition-colors hover:text-brass sm:right-8"
      >
        <ChevronRight className="h-8 w-8" strokeWidth={1.5} />
      </button>

      <div className="flex flex-1 items-center justify-center px-16 py-20">
        {item.video ? (
          <video
            key={item.id}
            src={item.video}
            poster={item.poster}
            controls
            autoPlay
            muted
            className="max-h-full max-w-full object-contain"
          />
        ) : (
          <div className="relative h-full max-h-[80vh] w-full max-w-[90vw]">
            <Image
              key={item.id}
              src={item.image!}
              alt={item.title}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>
        )}
      </div>

      <div className="mb-10 flex items-baseline justify-center gap-4 px-6 text-center">
        <p className="font-display text-lg italic font-light text-paper">
          {item.title}
        </p>
        <p className="font-sans text-xs tracking-widest text-brass">
          {item.tag}
        </p>
        <p className="font-sans text-xs text-paper/50">
          {index + 1} / {items.length}
        </p>
      </div>
    </div>
  );
}