import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MapPin, Mail } from "lucide-react";
import { Logo } from "@/components/Logo";

const PLAYTOMIC = "https://playtomic.com/clubs/east-coast-padel";
const INSTAGRAM = "https://www.instagram.com/eastcoastpadel.uk?igsh=Mm40YWI1ejU2MGEy";
const FACEBOOK = "https://www.facebook.com/profile.php?id=61574851976436";

export function SiteFooter() {
  return (
    <footer className="bg-court-navy border-t border-white/10 pt-16 pb-10 px-5 sm:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-4 text-white/55 text-sm leading-relaxed max-w-xs">
              Bringing the dynamic sport of padel to East Yorkshire and North Lincolnshire.
            </p>
          </div>

          <div>
            <p className="font-display font-bold uppercase tracking-widest text-xs text-court-lime mb-4">Location</p>
            <ul className="space-y-3 text-sm text-white/65">
              <li>
                <p className="text-white font-display font-bold uppercase tracking-wide text-sm">Hull — Open Now</p>
                <p className="text-white/35 text-xs mt-0.5 flex items-start gap-1.5"><MapPin className="w-3 h-3 mt-0.5 shrink-0" />Active+, Harpings Rd, HU5 4JF</p>
              </li>
              <li className="mt-3">
                <p className="text-white/50 font-display uppercase tracking-wide text-sm">Cleethorpes — Coming Soon</p>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-display font-bold uppercase tracking-widest text-xs text-court-lime mb-4">Quick Links</p>
            <ul className="space-y-3 text-sm text-white/65">
              {[
                { label: "About Us", to: "/about" as const },
                { label: "Contact Us", to: "/contact" as const },
                { label: "Store", to: "/store" as const },
                { label: "Terms & Conditions", to: "/terms" as const },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-white transition">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display font-bold uppercase tracking-widest text-xs text-court-lime mb-4">Get In Touch</p>
            <ul className="space-y-3 text-sm text-white/65">
              <li>
                <a href="mailto:info@eastcoastpadel.co.uk" className="inline-flex items-center gap-2 hover:text-white transition">
                  <Mail className="w-4 h-4" /> info@eastcoastpadel.co.uk
                </a>
              </li>
              <li>
                <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white transition">
                  <Instagram className="w-4 h-4" /> @eastcoastpadel.uk
                </a>
              </li>
              <li>
                <a href={FACEBOOK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white transition">
                  <Facebook className="w-4 h-4" /> East Coast Padel
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/35 text-xs">
          <p>© 2026 East Coast Padel. All rights reserved.</p>
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
