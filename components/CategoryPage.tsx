"use client";
import Nav from "@/components/Nav";
import BackHome from "@/components/BackHome";
import BackToTop from "@/components/BackToTop";
import type { FeedItem } from "@/data/feed";

interface CategoryPageProps {
  label: string;
  items: FeedItem[];
}

export default function CategoryPage({ label, items }: CategoryPageProps) {
  return (
    <main>
      <Nav />
      <div className="mx-auto max-w-6xl px-6 pb-32 pt-40 sm:px-10 sm:pt-48">
        <BackHome />
        <p className="mb-16 font-sans text-xs uppercase tracking-[0.2em] text-caption">
          {label}
        </p>

        <div className="grid grid-cols-1 gap-x-8 gap-y-20 sm:grid-cols-2">
          {items.map((item) => (
            <div key={item.id}>
              <div className="aspect-[4/5] w-full overflow-hidden">
                {item.video ? (
                  <video
                    src={item.video}
                    poster={item.poster}
                    muted
                    loop
                    playsInline
                    onMouseEnter={(e) => e.currentTarget.play().catch(() => {})}
                    onMouseLeave={(e) => e.currentTarget.pause()}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                    style={{ objectPosition: item.imagePosition ?? "center 85%" }}
                    />
                )}
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <p className="font-display text-lg italic font-light text-ink">
                  {item.title}
                </p>
                <p className="font-sans text-xs tracking-widest text-brass">
                  {item.tag}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BackToTop />
    </main>
  );
}