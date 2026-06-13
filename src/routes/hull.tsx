import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Instagram, MapPin, Trophy, Users, Sparkles, ArrowRight, Menu, X, Check } from "lucide-react";
import { FadeUp } from "@/components/FadeUp";
import { Logo } from "@/components/Logo";
import { CountUp } from "@/components/CountUp";
import { useScrolled } from "@/hooks/use-scrolled";

export const Route = createFileRoute("/hull")({
  component: Hull,
  head: () => ({
    meta: [
      { title: "Court de Padel Hull — Now Open | Indoor Padel & Pickleball" },
      {
        name: "description",
        content:
          "Hull's biggest social padel club — now open. 6 double + 2 single super-panoramic courts, professional pickleball, BodyReset physio, bar & café. Bontoft Ave, HU5 4HF.",
      },
      { property: "og:title", content: "Court de Padel Hull — Now Open" },
      {
        property: "og:description",
        content: "8 super-panoramic indoor courts + pickleball. Now open at Unit 1–3 National Business Park, Bontoft Ave, HU5 4HF.",
      },
    ],
  }),
});

const PLAYTOMIC =
  "https://playtomic.io/tenant/04a4fdf5-418b-4ebb-888b-1ed46cfa8d9c?utm_campaign=share&utm_source=app_ios";

function Hull() {
  const scrolled = useScrolled(60);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* 15. Announcement bar — "Now Open" */}
      <div className="bg-court-lime text-court-navy text-xs sm:text-sm tracking-widest uppercase py-2 px-4 text-center font-display font-bold">
        <span className="inline-flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-court-navy rounded-full animate-pulse" />
          Hull is Now Open — Book Your First Court Today
          <span className="w-1.5 h-1.5 bg-court-navy rounded-full animate-pulse" />
        </span>
      </div>

      {/* 16. Nav — with mobile hamburger menu */}
      <nav
        className={`sticky top-0 z-40 flex items-center justify-between px-5 sm:px-10 bg-court-blue transition-all duration-300 ${
          scrolled ? "py-2 border-b border-white/10 shadow-lg" : "py-3"
        }`}
      >
        <Link to="/" aria-label="Court de Padel home">
          <Logo size={scrolled ? 36 : 44} />
        </Link>
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 font-display uppercase tracking-wider text-sm text-white">
          <Link to="/" className="hover:text-court-lime transition">Home</Link>
          <a href="#courts" className="hover:text-court-lime transition">Courts</a>
          <a href="#amenities" className="hover:text-court-lime transition">Amenities</a>
          <a href="#pricing" className="hover:text-court-lime transition">Pricing</a>
          <a href="#location" className="hover:text-court-lime transition">Location</a>
          <Link to="/norwich" className="hover:text-court-lime transition">Norwich</Link>
          <Link to="/press" className="hover:text-court-lime transition">Press</Link>
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

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-30 bg-court-navy/98 flex flex-col items-center justify-center gap-8 text-center"
          style={{ top: scrolled ? "52px" : "60px" }}>
          {[
            { label: "Courts", href: "#courts" },
            { label: "Amenities", href: "#amenities" },
            { label: "Pricing", href: "#pricing" },
            { label: "Location", href: "#location" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="font-display font-bold uppercase tracking-widest text-3xl text-white hover:text-court-lime transition"
            >
              {item.label}
            </a>
          ))}
          <Link to="/norwich" onClick={() => setMenuOpen(false)} className="font-display font-bold uppercase tracking-widest text-3xl text-white hover:text-court-lime transition">Norwich</Link>
          <Link to="/" onClick={() => setMenuOpen(false)} className="font-display font-bold uppercase tracking-widest text-3xl text-white hover:text-court-lime transition">Home</Link>
        </div>
      )}

      {/* 17. Hero — with local Hull image as background */}
      <header className="relative min-h-[calc(100vh-140px)] flex items-center px-5 sm:px-10 py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/722809987_18590251195009497_719732711432549501_n.jpg"
            alt="Court de Padel Hull"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-court-blue/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-court-blue/40 via-transparent to-background" />
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        </div>
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-court-lime/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 w-full max-w-6xl mx-auto">
          {/* 18. "Now Open" badge replacing "Opening 2026" */}
          <FadeUp>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-flex items-center gap-2 bg-court-lime text-court-navy font-display font-bold uppercase tracking-widest text-xs px-3 py-1.5">
                <span className="w-1.5 h-1.5 bg-court-navy rounded-full animate-pulse" />
                Hull · Now Open
              </span>
            </div>
            <h1 className="font-display font-extrabold uppercase leading-[0.85] text-[clamp(3.5rem,13vw,11rem)] tracking-tight flex flex-wrap items-baseline gap-x-[0.18em] gap-y-2">
              <span>Game</span>
              <span className="inline-block w-[0.06em] h-[0.7em] bg-court-lime self-center" />
              <span>Set</span>
              <span className="inline-block w-[0.06em] h-[0.7em] bg-court-lime self-center" />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "2px var(--court-lime)" }}
              >
                Padel
              </span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mt-4 font-display uppercase tracking-wider text-xl sm:text-3xl text-white/90">
              Hull's Biggest Social Padel Club
            </p>
          </FadeUp>
          <FadeUp delay={0.25}>
            <div className="mt-4 flex items-center gap-3 text-white/65">
              <MapPin className="w-4 h-4 text-court-lime shrink-0" />
              <span>Unit 1–3 National Business Park, Bontoft Avenue, Kingston Upon Hull, HU5 4HF</span>
            </div>
          </FadeUp>
          {/* 19. Hero CTAs — Book Now instead of waitlist */}
          <FadeUp delay={0.35}>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={PLAYTOMIC}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-court-lime text-court-navy font-display font-bold uppercase tracking-wider text-sm px-6 py-3.5 hover:bg-court-lime/90 transition"
              >
                Book a Court <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#courts"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/40 text-white font-display font-bold uppercase tracking-wider text-sm px-6 py-3.5 hover:border-court-lime hover:text-court-lime hover:bg-white/5 transition backdrop-blur-sm"
              >
                Explore the Club <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </FadeUp>
        </div>
      </header>

      {/* Stats */}
      <section className="bg-court-navy py-12 sm:py-16 px-5 sm:px-10 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-display font-extrabold text-[clamp(6rem,22vw,18rem)] text-white/[0.03] leading-none tracking-tight">
            OPEN
          </span>
        </div>
        <div className="relative max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-6">
          {[
            { n: 6, l: "Double super-panoramic courts" },
            { n: 2, l: "Single super-panoramic courts" },
            { n: 2, l: "Pickleball courts" },
            { n: 1, prefix: "#", l: "Padel destination in Hull" },
          ].map((s, i) => (
            <FadeUp
              key={s.l}
              delay={i * 0.1}
              className="text-center sm:text-left sm:border-l-2 sm:border-court-lime/60 sm:pl-6 sm:first:border-l-0 sm:first:pl-0"
            >
              <div className="font-display font-extrabold text-5xl sm:text-6xl text-white tabular-nums">
                <CountUp to={s.n} prefix={s.prefix ?? ""} suffix="" />
              </div>
              <div className="mt-2 text-white/65 uppercase tracking-wider text-xs sm:text-sm font-display">
                {s.l}
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Courts */}
      <section id="courts" className="py-20 sm:py-28 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <span className="text-court-lime font-display uppercase tracking-widest text-sm">Courts</span>
            <h2 className="mt-3 font-display font-extrabold uppercase text-5xl sm:text-7xl leading-[0.95]">
              World-Class<br />Courts
            </h2>
          </FadeUp>
          <div className="mt-14 grid md:grid-cols-3 gap-5">
            {[
              {
                icon: Trophy,
                title: "6 Double Courts",
                desc: "Six super-panoramic doubles courts — built for social play, Americano tournaments, leagues and lessons from world-class pros.",
                spec: "Super-panoramic glass",
              },
              {
                icon: Users,
                title: "2 Singles Courts",
                desc: "Two dedicated singles super-panoramic courts for focused 1v1 training, competitive play and coaching sessions.",
                spec: "Tournament standard",
              },
              {
                icon: Sparkles,
                title: "Pickleball Courts",
                desc: "Professional pickleball courts — the perfect complement to padel. Try the fastest-growing racket sport in the US, right here in Hull.",
                spec: "Pro specification",
              },
            ].map((f, i) => (
              <FadeUp key={f.title} delay={i * 0.1}>
                <div className="group relative h-full bg-white/[0.06] border border-white/10 p-8 hover:border-court-lime/60 hover:-translate-y-1 hover:bg-white/[0.08] transition-all duration-300 overflow-hidden">
                  <span className="absolute left-0 top-0 h-full w-1 bg-court-lime origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />
                  <div className="w-12 h-12 bg-court-lime text-court-navy flex items-center justify-center">
                    <f.icon className="w-6 h-6" strokeWidth={2.5} />
                  </div>
                  <h3 className="mt-6 font-display font-bold uppercase text-2xl tracking-wide">{f.title}</h3>
                  <p className="mt-3 text-white/65 leading-relaxed">{f.desc}</p>
                  <div className="mt-5 pt-5 border-t border-white/10">
                    <span className="font-display font-bold uppercase tracking-widest text-xs text-court-lime/80">{f.spec}</span>
                  </div>
                  <ArrowRight className="absolute bottom-6 right-6 w-5 h-5 text-court-lime opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section id="amenities" className="py-20 sm:py-28 px-5 sm:px-10 bg-court-blue/40 border-y border-white/10">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <span className="text-court-lime font-display uppercase tracking-widest text-sm">Amenities</span>
            <h2 className="mt-3 font-display font-extrabold uppercase text-5xl sm:text-7xl leading-[0.95]">
              More Than<br />Just Courts
            </h2>
          </FadeUp>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "BodyReset",
                tag: "Wellbeing",
                desc: "On-site sports massage, physiotherapy and full recovery treatments. Stay at the top of your game.",
              },
              {
                title: "Bar & Café",
                tag: "Social",
                desc: "Coffee, cakes, beers, wines, cocktails and non-alcoholic options. Open every day — the perfect post-match wind-down.",
              },
              {
                title: "Street Food",
                tag: "Food",
                desc: "In-house food every day. Great music, great food, great padel.",
              },
              {
                title: "Changing Rooms",
                tag: "Facilities",
                desc: "Modern, well-equipped changing facilities. Everything you need to arrive and leave looking the part.",
              },
            ].map((a, i) => (
              <FadeUp key={a.title} delay={i * 0.08}>
                <div className="h-full bg-white/[0.06] border border-white/10 p-6 hover:border-court-lime/60 hover:-translate-y-1 transition-all duration-300">
                  <span className="inline-block font-display font-bold uppercase tracking-widest text-xs text-court-lime border border-court-lime/40 px-2.5 py-1 mb-4">
                    {a.tag}
                  </span>
                  <h3 className="font-display font-bold uppercase text-xl tracking-wide">{a.title}</h3>
                  <p className="mt-3 text-white/70 leading-relaxed text-sm">{a.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 sm:py-28 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <span className="text-court-lime font-display uppercase tracking-widest text-sm">Pricing</span>
            <h2 className="mt-3 font-display font-extrabold uppercase text-5xl sm:text-7xl leading-[0.95]">Court Hire</h2>
          </FadeUp>
          <div className="mt-12 grid md:grid-cols-2 gap-5 max-w-3xl">
            {[
              { type: "Doubles Court", offPeak: "£32 / hr", peak: "£44 / hr", desc: "Up to 4 players" },
              { type: "Singles Court", offPeak: "£18 / hr", peak: "£22 / hr", desc: "1v1 competitive play" },
            ].map((p, i) => (
              <FadeUp key={p.type} delay={i * 0.1}>
                <div className="h-full bg-white/[0.06] border border-white/10 p-8 hover:border-court-lime/40 transition">
                  <p className="text-white/50 text-xs font-display uppercase tracking-widest mb-2">{p.desc}</p>
                  <h3 className="font-display font-bold uppercase text-2xl tracking-wide">{p.type}</h3>
                  <div className="mt-6 space-y-3">
                    <div className="flex justify-between items-center border-b border-white/10 pb-3">
                      <span className="text-white/65 text-sm uppercase tracking-wider font-display">Off-Peak</span>
                      <span className="font-display font-bold text-2xl text-court-lime">{p.offPeak}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/65 text-sm uppercase tracking-wider font-display">Peak</span>
                      <span className="font-display font-bold text-2xl">{p.peak}</span>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Membership card */}
          <FadeUp delay={0.2}>
            <div className="mt-6 max-w-3xl relative overflow-hidden bg-gradient-to-br from-court-lime/15 to-court-lime/5 border border-court-lime/40 p-8">
              <div className="absolute top-0 right-0 w-48 h-48 pointer-events-none select-none"
                style={{ background: "radial-gradient(circle, rgba(200,220,0,0.12) 0%, transparent 70%)" }} />
              <div className="relative">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <span className="inline-block font-display font-bold uppercase tracking-widest text-xs text-court-lime border border-court-lime/40 px-2.5 py-1 mb-3">
                      Membership
                    </span>
                    <h3 className="font-display font-bold uppercase text-3xl tracking-wide">
                      £17.50 <span className="text-lg text-white/60 font-sans font-normal normal-case tracking-normal">/ month</span>
                    </h3>
                  </div>
                </div>
                <ul className="mt-6 grid sm:grid-cols-2 gap-2 text-sm text-white/80">
                  {[
                    "10% off all court bookings",
                    "Free racket hire (normally £5)",
                    "20% off classes and BodyReset",
                    "Members-only events — free food, drinks & racket hire",
                    "21-day priority booking window",
                    "10% off food & drinks",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-court-lime mt-0.5 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href={PLAYTOMIC}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 bg-court-lime text-court-navy font-display font-bold uppercase tracking-wider text-sm px-5 py-3 hover:bg-court-lime/90 transition"
                >
                  Become a Member <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={0.25}>
            <p className="mt-4 text-white/50 text-sm max-w-3xl">
              Rental rackets £5 · Balls £5.50 · Equipment included in all classes & private sessions
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="py-20 sm:py-28 px-5 sm:px-10 bg-court-blue/40 border-y border-white/10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <FadeUp>
            <span className="text-court-lime font-display uppercase tracking-widest text-sm">Location</span>
            <h2 className="mt-3 font-display font-extrabold uppercase text-5xl sm:text-7xl leading-[0.95]">Find Us</h2>
            <div className="mt-8 flex items-start gap-4">
              <MapPin className="w-6 h-6 text-court-lime mt-1 shrink-0" />
              <div>
                <p className="font-display font-bold uppercase text-xl tracking-wide">Unit 1–3 National Business Park</p>
                <p className="text-white/80">Bontoft Avenue, Kingston Upon Hull, HU5 4HF</p>
              </div>
            </div>
            <p className="mt-6 text-white/65 max-w-md">
              Loads of free parking. Right in the heart of west Hull. Five minutes off the A1079.
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=National+Business+Park+Bontoft+Avenue+Hull+HU5+4HF"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 bg-court-lime text-court-navy font-display font-bold uppercase tracking-wider text-sm px-5 py-3 hover:bg-court-lime/90 transition"
            >
              Get Directions <ArrowRight className="w-4 h-4" />
            </a>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="relative aspect-[4/3] border border-white/15 overflow-hidden">
              <iframe
                title="Court de Padel Hull map"
                src="https://maps.google.com/maps?q=National+Business+Park,+Bontoft+Avenue,+Hull+HU5+4HF&output=embed&z=15"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 20. "Book a Court" CTA — replaces waitlist */}
      <section id="book" className="relative py-24 sm:py-32 px-5 sm:px-10 overflow-hidden bg-court-blue">
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-court-lime/10 blur-3xl pointer-events-none" />
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-court-lime/5 blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <FadeUp>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-2 bg-court-lime text-court-navy font-display font-bold uppercase tracking-widest text-xs px-3 py-1.5">
                <span className="w-1.5 h-1.5 bg-court-navy rounded-full animate-pulse" />
                Now Open
              </span>
            </div>
            <h2 className="font-display font-extrabold uppercase text-5xl sm:text-7xl leading-[0.95]">
              Hull is Open.<br />Let's Play.
            </h2>
            <p className="mt-6 text-white/75 max-w-xl">
              The courts are ready. Grab a racket and get on court — all levels welcome from day one.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={PLAYTOMIC}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-court-lime text-court-navy font-display font-bold uppercase tracking-wider text-sm px-8 py-4 hover:bg-court-lime/90 transition text-base"
              >
                Book a Court Now <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@courtdepadel.com"
                className="inline-flex items-center gap-2 border border-white/30 text-white font-display font-bold uppercase tracking-wider text-sm px-8 py-4 hover:border-court-lime hover:text-court-lime transition"
              >
                Get in Touch
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Full footer */}
      <footer className="bg-court-navy border-t border-white/10 pt-16 pb-10 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
            <div className="col-span-2 md:col-span-1">
              <p className="font-display font-extrabold uppercase tracking-widest text-white text-lg">Court de Padel</p>
              <p className="font-display uppercase tracking-widest text-court-lime text-xs mt-0.5">Game · Set · Padel</p>
              <p className="mt-4 text-white/55 text-sm leading-relaxed max-w-xs">
                Hull's biggest social padel club. Now open at National Business Park, Bontoft Ave, HU5 4HF.
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
                  <Link to="/hull" className="hover:text-white transition text-white">Hull — Now Open</Link>
                  <p className="text-white/35 text-xs mt-0.5">Unit 1–3 National Business Park, HU5 4HF</p>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-display font-bold uppercase tracking-widest text-xs text-court-lime mb-4">The Club</p>
              <ul className="space-y-3 text-sm text-white/65">
                {[
                  { label: "Courts", href: "#courts" },
                  { label: "Amenities", href: "#amenities" },
                  { label: "Pricing", href: "#pricing" },
                  { label: "Location", href: "#location" },
                  { label: "Book a Court", href: PLAYTOMIC },
                ].map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="hover:text-white transition" target={l.href.startsWith("http") ? "_blank" : undefined} rel={l.href.startsWith("http") ? "noreferrer" : undefined}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-display font-bold uppercase tracking-widest text-xs text-court-lime mb-4">Follow Us</p>
              <ul className="space-y-3 text-sm text-white/65">
                <li>
                  <a href="https://www.instagram.com/courtdepadelhull/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white transition">
                    <Instagram className="w-4 h-4" /> @courtdepadelhull
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/courtdepadel/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white transition">
                    <Instagram className="w-4 h-4" /> @courtdepadel
                  </a>
                  <p className="text-white/35 text-xs mt-0.5 ml-6">Norwich</p>
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
              <p>Web design in Hull by <a href="https://swift7.co.uk" target="_blank" rel="noreferrer" className="text-white/55 hover:text-white transition">Swift7</a></p>
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
    </div>
  );
}
