"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { sections } from "@/data/feed";
import Lightbox from "@/components/Lightbox";

export default function HomeFeed() {
  const [openSectionId, setOpenSectionId] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const activeSection = sections.find((s) => s.id === openSectionId) ?? null;
  const activeItems = activeSection?.items ?? [];

  const openLightbox = (sectionId: string, index: number) => {
    setOpenSectionId(sectionId);
    setActiveIndex(index);
  };

  const closeLightbox = () => setOpenSectionId(null);

  const goPrev = useCallback(() => {
    if (!activeItems.length) return;
    setActiveIndex((prev) => (prev - 1 + activeItems.length) % activeItems.length);
  }, [activeItems.length]);

  const goNext = useCallback(() => {
    if (!activeItems.length) return;
    setActiveIndex((prev) => (prev + 1) % activeItems.length);
  }, [activeItems.length]);

  useEffect(() => {
    if (!openSectionId) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [openSectionId, goPrev, goNext]);

  /* ==========================================================
     EDIT ONLY THESE VALUES
     ========================================================== */

  const CONFIG = {
    maxWidth: "max-w-5xl",
  };

  const PORTRAIT = {
    width: "40%",
    leftOffset: "8%",
    rightOffset: "8%",
    verticalGap: "-12px",
    aspect: "aspect-[4/5]",
  };

  const LANDSCAPE = {
    width: "55%",
    leftOffset: "5%",
    rightOffset: "5%",
    verticalGap: "10px",
    aspect: "aspect-[16/10]",
  };

  const LAYOUT = {
    events: {
      portrait: {
        ...PORTRAIT,
        verticalGap: "-150px",
      },

      landscape: {
        ...LANDSCAPE,
        rightOffset: "0%",
      },
    },

    "best-work": {
  portrait: {
    ...PORTRAIT,
    verticalGap: "-100px", // <-- change this
  },
  landscape: LANDSCAPE,
},

    portraits: {
     portrait: {
    ...PORTRAIT,
    verticalGap: "-100px", // <-- change this
  },
  landscape: LANDSCAPE,
},

    product: {
  portrait: PORTRAIT, // Doesn't matter unless you add portrait images later

  landscape: {
    ...LANDSCAPE,
    verticalGap: "35px",   // <-- Change spacing between product images
    width: "60%",          // Optional
    leftOffset: "4%",      // Optional
    rightOffset: "4%",     // Optional
  },
},

    videography: {
  portrait: {
    ...PORTRAIT,
    verticalGap: "20px",  // <-- Gap before/after the vertical video
    width: "38%",          // Optional
  },

  landscape: {
    ...LANDSCAPE,
    verticalGap: "30px",   // <-- Gap between landscape videos
    width: "58%",          // Optional
  },
},
  } as const;

  type SectionKey = keyof typeof LAYOUT;
  type Orientation = "portrait" | "landscape";

  function getLayout(sectionId: string, orientation: Orientation) {
    const key =
      sectionId in LAYOUT
        ? (sectionId as SectionKey)
        : "events";

    return LAYOUT[key][orientation];
  }

  /* ========================================================== */

  return (
    <div className={`mx-auto ${CONFIG.maxWidth} px-6 pb-32 sm:px-10`}>
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="mb-32 scroll-mt-24"
        >
          <div className="mb-14 flex items-baseline justify-between border-b border-ink/10 pb-4">
            <h2 className="font-sans text-sm font-medium uppercase tracking-[0.2em] text-ink">
              {section.label}
            </h2>

            <button
              onClick={() => openLightbox(section.id, 0)}
              className="font-sans text-xs uppercase tracking-[0.15em] text-caption transition-colors hover:text-brass"
            >
              View all →
            </button>
          </div>

          <div className="flex flex-col">
            {section.items.map((item, i) => {
              const isLandscape = item.orientation === "landscape";
              const isLeft = i % 2 === 0;

              const layout = getLayout(
                section.id,
                isLandscape ? "landscape" : "portrait"
              );

              const style: React.CSSProperties = isMobile
                ? {
                    width: "100%",
                    marginLeft: 0,
                    marginRight: 0,
                    marginBottom: "48px",
                  }
                : {
                    width: layout.width,

                    marginBottom:
                      section.id === "events" && i === 4
                        ? "40px"
                        : layout.verticalGap,

                    marginLeft: isLeft ? layout.leftOffset : "auto",
                    marginRight: isLeft ? "auto" : layout.rightOffset,
                  };

              return (
                <motion.div
                  key={item.id}
                  style={style}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <button
                    onClick={() => openLightbox(section.id, i)}
                    className="group block w-full text-left"
                  >
                    <div className={`relative overflow-hidden ${layout.aspect}`}>
                      {item.video ? (
                        <video
                          src={item.video}
                          poster={item.poster}
                          muted
                          loop
                          playsInline
                          onMouseEnter={(e) =>
                            e.currentTarget.play().catch(() => {})
                          }
                          onMouseLeave={(e) => e.currentTarget.pause()}
                          className="h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-90"
                        />
                      ) : (
                        <Image
                          src={item.image!}
                          alt={item.title}
                          fill
                          sizes="(max-width:768px) 90vw, 60vw"
                          className="object-cover transition-opacity duration-500 group-hover:opacity-90"
                          style={{
                            objectPosition:
                              item.imagePosition ?? "center center",
                          }}
                        />
                      )}
                    </div>

                    <div className="mt-4 flex items-baseline justify-between">
                      <p className="font-display text-lg font-light italic text-ink">
                        {item.title}
                      </p>

                      <p className="font-sans text-xs tracking-widest text-brass">
                        {item.tag}
                      </p>
                    </div>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </section>
      ))}

      {activeSection && (
        <Lightbox
          items={activeItems}
          index={activeIndex}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </div>
  );
}
