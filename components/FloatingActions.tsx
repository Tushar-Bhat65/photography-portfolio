"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";

export default function FloatingActions() {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY || document.documentElement.scrollTop;
      setShowArrow(scrolled > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-center gap-4">
      <AnimatePresence>
        {showArrow && (
          <motion.button
            key="back-to-top"
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-paper shadow-md transition-transform hover:scale-105"
          >
            <span className="font-sans text-lg leading-none">↑</span>
          </motion.button>
        )}
      </AnimatePresence>

      <motion.div layout transition={{ duration: 0.4, ease: "easeOut" }}>
        <Link
          href="/contact"
          aria-label="Contact"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-paper shadow-md transition-transform hover:scale-105"
        >
          <Phone className="h-4 w-4" strokeWidth={1.5} />
        </Link>
      </motion.div>
    </div>
  );
}