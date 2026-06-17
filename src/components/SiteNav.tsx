import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { useScrolled } from "@/hooks/use-scrolled";

const PLAYTOMIC = "https://playtomic.com/clubs/east-coast-padel";

const NAV_LINKS = [
  { label: "Home", to: "/" as const },
  { label: "About", to: "/about" as const },
  { label: "Contact", to: "/contact" as const },
  { label: "Store", to: "/store" as const },
  { label: "Terms", to: "/terms" as const },
];

export function SiteNav() {
  const scrolled = useScrolled(60);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav
        className={`sticky top-0 z-40 flex items-center justify-between px-5 sm:px-10 bg-court-blue transition-all duration-300 ${
          scrolled ? "py-2 border-b border-white/10 shadow-lg" : "py-3"
        }`}
      >
        <Link to="/" aria-label="East Coast Padel home">
          <Logo size={scrolled ? 54 : 68} />
        </Link>

        <div className="hidden lg:flex items-center gap-5 xl:gap-7 font-display uppercase tracking-wider text-sm text-white">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="hover:text-court-lime transition"
              activeProps={{ className: "text-court-lime hover:text-court-lime transition" }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={PLAYTOMIC}
            target="_blank"
            rel="noreferrer"
            className="bg-court-lime text-court-navy font-display font-bold uppercase tracking-wider text-xs sm:text-sm px-4 sm:px-5 py-2.5 hover:bg-court-lime/90 transition"
          >
            Book Now
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-white hover:text-court-lime transition"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-30 bg-court-navy flex flex-col items-center justify-center gap-7 lg:hidden">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-5 right-5 text-white hover:text-court-lime"
            aria-label="Close menu"
          >
            <X className="w-7 h-7" />
          </button>
          {NAV_LINKS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className="font-display font-bold uppercase tracking-widest text-2xl text-white hover:text-court-lime transition"
              activeProps={{ className: "font-display font-bold uppercase tracking-widest text-2xl text-court-lime hover:text-court-lime transition" }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={PLAYTOMIC}
            target="_blank"
            rel="noreferrer"
            className="mt-2 bg-court-lime text-court-navy font-display font-bold uppercase tracking-wider px-8 py-4 text-base hover:bg-court-lime/90 transition"
          >
            Book Now
          </a>
        </div>
      )}
    </>
  );
}
