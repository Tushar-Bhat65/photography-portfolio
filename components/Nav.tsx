import Link from "next/link";

const links = [
  { label: "Events", href: "/#events" },
  { label: "My Best Work", href: "/#best-work" },
  { label: "Portraits", href: "/#portraits" },
  { label: "Product Photography", href: "/#product" },
  { label: "Videography", href: "/#videography" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ink">
      <div className="flex items-center justify-end px-6 py-5 sm:px-12">
        <nav className="hidden gap-6 sm:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-xs uppercase tracking-[0.15em] text-paper/70 transition-colors hover:text-brass"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}