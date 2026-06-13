import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { Logo } from "@/components/Logo";

const PLAYTOMIC =
  "https://playtomic.io/tenant/04a4fdf5-418b-4ebb-888b-1ed46cfa8d9c?utm_campaign=share&utm_source=app_ios";

export function SiteFooter() {
  return (
    <footer className="bg-court-navy border-t border-white/10 pt-16 pb-10 px-5 sm:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-4 text-white/55 text-sm leading-relaxed max-w-xs">
              Premium indoor padel clubs across the UK. Now open in Norwich and Hull.
            </p>
          </div>

          <div>
            <p className="font-display font-bold uppercase tracking-widest text-xs text-court-lime mb-4">Venues</p>
            <ul className="space-y-3 text-sm text-white/65">
              <li>
                <Link to="/norwich" className="hover:text-white transition">Norwich — Open Now</Link>
                <p className="text-white/35 text-xs mt-0.5">Unit 4 Whiffler Rd, NR3 2BU</p>
              </li>
              <li>
                <Link to="/hull" className="hover:text-white transition">Hull — Now Open</Link>
                <p className="text-white/35 text-xs mt-0.5">Unit 1–3 National Business Park, HU5 4HF</p>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-display font-bold uppercase tracking-widest text-xs text-court-lime mb-4">Explore</p>
            <ul className="space-y-3 text-sm text-white/65">
              {[
                { label: "What is Padel?", to: "/what-is-padel" as const },
                { label: "FAQs", to: "/faq" as const },
                { label: "Corporate", to: "/corporate" as const },
                { label: "Coming Up", to: "/events" as const },
                { label: "Press", to: "/press" as const },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-white transition">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display font-bold uppercase tracking-widest text-xs text-court-lime mb-4">Follow Us</p>
            <ul className="space-y-3 text-sm text-white/65">
              <li>
                <a href="https://www.instagram.com/courtdepadel/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white transition">
                  <Instagram className="w-4 h-4" /> @courtdepadel
                </a>
                <p className="text-white/35 text-xs mt-0.5 ml-6">Norwich</p>
              </li>
              <li>
                <a href="https://www.instagram.com/courtdepadelhull/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white transition">
                  <Instagram className="w-4 h-4" /> @courtdepadelhull
                </a>
                <p className="text-white/35 text-xs mt-0.5 ml-6">Hull</p>
              </li>
            </ul>
            <a href="mailto:hello@courtdepadel.com" className="mt-6 inline-block text-sm text-white/65 hover:text-white transition">
              hello@courtdepadel.com
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/35 text-xs">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p>© 2026 Court de Padel. All rights reserved.</p>
            <span className="hidden sm:inline text-white/15">·</span>
            <p>Web design by <a href="https://swift7.co.uk" target="_blank" rel="noreferrer" className="text-white/55 hover:text-white transition">Swift7</a></p>
          </div>
          <a
            href={PLAYTOMIC}
            target="_blank"
            rel="noreferrer"
            className="font-display font-bold uppercase tracking-wider text-court-lime hover:text-white transition text-xs"
          >
            Book a Court →
          </a>
        </div>
      </div>
    </footer>
  );
}
