import Link from "next/link";

export default function BackHome() {
  return (
    <Link
      href="/"
      className="mb-10 inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.15em] text-caption transition-colors hover:text-brass"
    >
      <span aria-hidden="true">←</span>
      Home
    </Link>
  );
}