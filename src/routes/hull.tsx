import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Trophy, Users, Sparkles, ArrowRight, Check } from "lucide-react";
import { FadeUp } from "@/components/FadeUp";
import { CountUp } from "@/components/CountUp";
import { Marquee } from "@/components/Marquee";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

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

const PLAYTOMIC = "https://playtomic.com/clubs/court-de-padel-hull";

function Hull() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteNav />

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
            <h1 className="font-display font-extrabold uppercase leading-[0.85] text-[clamp(3.5rem,13vw,11rem)] tracking-tight">
              Game
              <span className="inline-block w-[0.06em] h-[0.75em] bg-court-lime mx-[0.15em]" />
              Set
              <span className="inline-block w-[0.06em] h-[0.75em] bg-court-lime mx-[0.15em]" />
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

      {/* Marquee */}
      <Marquee
        items={[
          "Hull · Now Open",
          "8 Super-Panoramic Indoor Courts",
          "Bar · Café · BodyReset · Physio",
          "Pickleball Courts",
          "Social Play · Leagues · Tournaments",
          "Americano · Run Club · Ladies Social",
          "Norwich · Open Now",
        ]}
      />

      {/* Photo gallery */}
      <div className="grid grid-cols-2 md:grid-cols-4">
        {[
          { src: "https://images.squarespace-cdn.com/content/v1/6777dae8a2db76294b6d4e0e/3387da17-4241-42dc-a098-52f6a8cec5ab/IMG_7604.JPG?format=800w", alt: "Court de Padel courts", caption: "The Courts" },
          { src: "https://images.squarespace-cdn.com/content/v1/6777dae8a2db76294b6d4e0e/59cc6eef-a51a-4001-89bc-827fed2fd44c/6+700%2B+Padel+Photos%2C+taleaux+et+images+libre+de+droits.jpeg?format=800w", alt: "Padel court action", caption: "Game On" },
          { src: "https://images.squarespace-cdn.com/content/v1/6777dae8a2db76294b6d4e0e/9d9b6b25-a935-49fd-adc1-8ba57849b8fc/OYSHO+_+NEW+PADEL+COLLECTION+Discover+the+favourite+look+of+our+Padel+Player+%40carlottacasali+%F0%9F%99%8C%F0%9F%8F%BC+%23oysho+%23padel+%23padelplayers+%23carlottacasali+_+Instagram.jpeg?format=800w", alt: "Padel player", caption: "Every Level" },
          { src: "https://images.squarespace-cdn.com/content/v1/6777dae8a2db76294b6d4e0e/1749813016687-BBWP0MFAA11VJBOD49QT/unsplash-image-JnoNcfFwrNA.jpg?format=800w", alt: "Padel courts", caption: "Social Play" },
        ].map((img) => (
          <div key={img.src} className="aspect-square overflow-hidden relative group">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-court-navy/0 group-hover:bg-court-navy/60 transition-all duration-400" />
            <span className="absolute bottom-4 left-4 font-display font-bold uppercase tracking-widest text-xs text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              {img.caption}
            </span>
          </div>
        ))}
      </div>

      {/* As Featured In strip */}
      <div className="bg-court-navy/60 border-y border-white/10 py-6 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
          <span className="font-display uppercase tracking-widest text-xs text-white/40 shrink-0">As Featured In</span>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6 sm:gap-10">
            {["Hull Daily Mail", "BBC", "Evening News", "Stoke Sentinel", "hullisthis.news", "PPH Commercial"].map((pub) => (
              <span key={pub} className="font-display font-bold uppercase tracking-wider text-sm text-white/55 hover:text-white/90 transition cursor-default">
                {pub}
              </span>
            ))}
          </div>
        </div>
      </div>

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

      {/* What to expect — three card section with hover */}
      <section className="py-20 sm:py-28 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <span className="text-court-lime font-display uppercase tracking-widest text-sm">What to Expect</span>
            <h2 className="mt-3 font-display font-extrabold uppercase text-5xl sm:text-7xl leading-[0.95]">
              Built for the<br />Game. Built for You.
            </h2>
          </FadeUp>
          <div className="mt-14 grid md:grid-cols-3 gap-5">
            {[
              {
                icon: Trophy,
                title: "Pro Courts",
                desc: "8 super-panoramic indoor courts — 6 doubles, 2 singles. All-weather, pro LED lighting, tournament-ready from day one.",
              },
              {
                icon: Users,
                title: "Social Play",
                desc: "Americano tournaments, mixers, leagues and lessons from world-class pros. Plus a Run Club for everyone.",
              },
              {
                icon: Sparkles,
                title: "More Than Courts",
                desc: "Bar & café, pilates and wellbeing sessions, modern changing rooms and on-site physio support.",
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
                  <ArrowRight className="absolute bottom-6 right-6 w-5 h-5 text-court-lime opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Courts */}
      <section id="courts" className="py-20 sm:py-28 px-5 sm:px-10 bg-court-blue/40 border-y border-white/10">
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

      {/* Menu */}
      <section className="py-20 sm:py-28 px-5 sm:px-10 bg-court-navy relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "linear-gradient(var(--court-lime) 1px, transparent 1px), linear-gradient(90deg, var(--court-lime) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div
          className="absolute inset-0 flex items-center justify-end pr-10 pointer-events-none select-none overflow-hidden"
          aria-hidden
        >
          <span
            className="font-display font-extrabold uppercase text-white/[0.04] leading-none"
            style={{ fontSize: "clamp(6rem,20vw,14rem)" }}
          >
            MENU
          </span>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <FadeUp>
            <span className="text-court-lime font-display uppercase tracking-widest text-sm">Bar &amp; Café</span>
            <h2
              className="mt-3 font-display font-extrabold uppercase text-white leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(2.5rem,7vw,5.5rem)" }}
            >
              Food &amp;<br />
              <span className="text-court-lime">Drinks</span>
            </h2>
            <p className="mt-6 text-white/60 text-lg leading-relaxed max-w-md">
              Fresh food, great coffee and cold drinks — all available at the Hull club. Fuel up before a session or wind down after.
            </p>
            <a
              href="/menu-hull.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 bg-court-lime text-court-navy font-display font-bold uppercase tracking-wider px-6 py-3.5 hover:bg-court-lime/90 transition"
            >
              View Full Menu
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="relative border border-white/15 overflow-hidden bg-white/[0.04] group hover:border-court-lime/40 transition">
              <iframe
                src="/menu-hull.pdf#toolbar=0&navpanes=0&scrollbar=0"
                className="w-full h-[480px] pointer-events-none"
                title="Hull Menu"
              />
              <a
                href="/menu-hull.pdf"
                target="_blank"
                rel="noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-court-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <span className="font-display font-bold uppercase tracking-widest text-white text-sm border border-white/40 px-5 py-3">
                  Open Full Menu
                </span>
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 sm:py-28 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <span className="text-court-lime font-display uppercase tracking-widest text-sm">Pricing</span>
            <h2 className="mt-3 font-display font-extrabold uppercase text-5xl sm:text-7xl leading-[0.95]">Court Hire</h2>
          </FadeUp>

          {/* Full-width pricing rows */}
          <div className="mt-12 border border-white/10">
            {/* Header row */}
            <div className="grid grid-cols-3 border-b border-white/10 bg-white/[0.03]">
              <div className="px-6 py-4 font-display font-bold uppercase tracking-widest text-xs text-white/40">Court Type</div>
              <div className="px-6 py-4 font-display font-bold uppercase tracking-widest text-xs text-white/40 border-l border-white/10">Off-Peak</div>
              <div className="px-6 py-4 font-display font-bold uppercase tracking-widest text-xs text-white/40 border-l border-white/10">Peak</div>
            </div>
            {[
              { type: "Doubles Court", sub: "Up to 4 players", offPeak: "£32", peak: "£44" },
              { type: "Singles Court", sub: "1v1 play", offPeak: "£18", peak: "£22" },
            ].map((p, i) => (
              <FadeUp key={p.type} delay={i * 0.08}>
                <div className={`grid grid-cols-3 hover:bg-white/[0.04] transition group ${i < 1 ? "border-b border-white/10" : ""}`}>
                  <div className="px-6 py-7">
                    <p className="font-display font-bold uppercase text-xl sm:text-2xl tracking-wide">{p.type}</p>
                    <p className="text-white/45 text-xs font-display uppercase tracking-wider mt-1">{p.sub}</p>
                  </div>
                  <div className="px-6 py-7 border-l border-white/10 flex items-center">
                    <span className="font-display font-extrabold text-4xl sm:text-5xl text-court-lime tabular-nums">{p.offPeak}</span>
                    <span className="text-white/40 text-sm font-display ml-2 mt-2 self-end pb-1">/ hr</span>
                  </div>
                  <div className="px-6 py-7 border-l border-white/10 flex items-center">
                    <span className="font-display font-extrabold text-4xl sm:text-5xl tabular-nums group-hover:text-white transition">{p.peak}</span>
                    <span className="text-white/40 text-sm font-display ml-2 mt-2 self-end pb-1">/ hr</span>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Membership card */}
          <FadeUp delay={0.2}>
            <div className="mt-6 relative overflow-hidden bg-gradient-to-br from-court-lime/15 to-court-lime/5 border border-court-lime/40 p-8 sm:p-10">
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
                <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-2 text-sm text-white/80">
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
                src="https://maps.google.com/maps?q=National+Business+Park+Bontoft+Avenue+Hull+HU5+4HF&output=embed&z=15"
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

      <SiteFooter />
    </div>
  );
}
