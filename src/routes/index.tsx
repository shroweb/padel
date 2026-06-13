import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Instagram, MapPin, Trophy, Users, Sparkles, ArrowRight, ArrowUpRight, Menu, X, Check } from "lucide-react";
import { WaitlistForm } from "@/components/WaitlistForm";
import { FadeUp } from "@/components/FadeUp";
import { Logo } from "@/components/Logo";
import { Marquee } from "@/components/Marquee";
import { CountUp } from "@/components/CountUp";
import { useScrolled } from "@/hooks/use-scrolled";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Court de Padel — Premium Indoor Padel | Norwich & Hull" },
      {
        name: "description",
        content:
          "Court de Padel — premium indoor padel clubs in Norwich and Hull. Book a court in Norwich or Hull now.",
      },
      { property: "og:title", content: "Court de Padel — Norwich & Hull" },
      {
        property: "og:description",
        content: "Premium indoor padel clubs across the UK. Norwich & Hull — now open.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=DM+Sans:wght@400;500;700&display=swap",
      },
    ],
  }),
});

const PLAYTOMIC =
  "https://playtomic.io/tenant/04a4fdf5-418b-4ebb-888b-1ed46cfa8d9c?utm_campaign=share&utm_source=app_ios";

function Index() {
  const scrolled = useScrolled(60);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* 1. Announcement bar — updated "Hull · Now Open" */}
      <div className="bg-court-navy text-white/90 text-xs sm:text-sm tracking-widest uppercase py-2 px-4 text-center font-display font-semibold">
        <span className="inline-flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-court-lime rounded-full animate-pulse" />
          Norwich · Open Now
        </span>
        <span className="mx-3 text-white/30">|</span>
        <span className="inline-flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-court-lime rounded-full animate-pulse" />
          Hull · Now Open
        </span>
      </div>

      {/* 2. Nav — with mobile hamburger menu */}
      <nav
        className={`sticky top-0 z-40 flex items-center justify-between px-5 sm:px-10 bg-court-blue transition-all duration-300 ${
          scrolled ? "py-2 border-b border-white/10 shadow-lg" : "py-3"
        }`}
      >
        <a href="#" aria-label="Court de Padel home">
          <Logo size={scrolled ? 36 : 44} />
        </a>
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 font-display uppercase tracking-wider text-sm text-white">
          <a href="#what-is-padel" className="hover:text-court-lime transition">What is Padel?</a>
          <a href="#faqs" className="hover:text-court-lime transition">FAQs</a>
          <Link to="/press" className="hover:text-court-lime transition">Press</Link>
          <a href="#corporate" className="hover:text-court-lime transition">Corporate</a>
          <a href="#coming-up" className="hover:text-court-lime transition">Coming up</a>
          <Link to="/norwich" className="hover:text-court-lime transition">Norwich</Link>
          <Link to="/hull" className="hover:text-court-lime transition">Hull</Link>
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
          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-white hover:text-court-lime transition"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-30 bg-court-navy/98 flex flex-col items-center justify-center gap-8 text-center"
          style={{ top: scrolled ? "52px" : "60px" }}>
          {[
            { label: "What is Padel?", href: "#what-is-padel" },
            { label: "FAQs", href: "#faqs" },
            { label: "Coming Up", href: "#coming-up" },
            { label: "Corporate", href: "#corporate" },
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
          <div className="flex flex-col gap-4 mt-4">
            <Link to="/norwich" onClick={() => setMenuOpen(false)} className="font-display font-bold uppercase tracking-widest text-3xl text-white hover:text-court-lime transition">Norwich</Link>
            <Link to="/hull" onClick={() => setMenuOpen(false)} className="font-display font-bold uppercase tracking-widest text-3xl text-white hover:text-court-lime transition">Hull</Link>
          </div>
        </div>
      )}

      {/* Hero */}
      <header className="relative min-h-[calc(100vh-140px)] flex items-center px-5 sm:px-10 py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.squarespace-cdn.com/content/v1/6777dae8a2db76294b6d4e0e/e34b6463-4654-4438-b83d-1f30040fa420/IMG_7561.JPG?format=2500w"
            alt=""
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-court-blue/75" />
          <div className="absolute inset-0 bg-gradient-to-b from-court-blue/30 via-transparent to-background" />
          {/* 3. Subtle grid overlay for premium texture */}
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        </div>
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-court-lime/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 w-full max-w-6xl mx-auto">
          <FadeUp>
            {/* 4. Updated hero badges — "Hull · Now Open" */}
            <div className="flex flex-wrap gap-3 mb-6">
              <Link to="/norwich" className="inline-flex items-center gap-2 bg-court-lime text-court-navy font-display font-bold uppercase tracking-widest text-xs px-3 py-1.5 hover:bg-court-lime/90 transition">
                <span className="w-1.5 h-1.5 bg-court-navy rounded-full animate-pulse" />
                Norwich · Open Now
              </Link>
              <Link to="/hull" className="inline-flex items-center gap-2 bg-court-lime text-court-navy font-display font-bold uppercase tracking-widest text-xs px-3 py-1.5 hover:bg-court-lime/90 transition">
                <span className="w-1.5 h-1.5 bg-court-navy rounded-full animate-pulse" />
                Hull · Now Open
              </Link>
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
              Premium Indoor Padel — Norwich &amp; Hull
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <p className="mt-6 text-white/65 max-w-xl leading-relaxed">
              Super-panoramic indoor courts, social play, leagues and events for every level. Both Norwich and Hull are now open.
            </p>
          </FadeUp>

          <FadeUp delay={0.4}>
            {/* 5. Hull CTA updated to "Book Hull Now" */}
            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <a
                href={PLAYTOMIC}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-court-lime text-court-navy font-display font-bold uppercase tracking-wider text-sm px-6 py-3.5 hover:bg-court-lime/90 transition"
              >
                Book Norwich Now <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/hull"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/40 text-white font-display font-bold uppercase tracking-wider text-sm px-6 py-3.5 hover:border-court-lime hover:text-court-lime hover:bg-white/5 transition backdrop-blur-sm"
              >
                Book Hull Now <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </header>

      {/* Marquee */}
      <Marquee
        items={[
          "Norwich · Open Now",
          "Hull · Now Open",
          "16 Super-Panoramic Indoor Courts",
          "Bar · Café · BodyReset · Physio",
          "Social Play · Leagues · Tournaments",
          "Americano · Run Club · Ladies Social",
        ]}
      />

      {/* 6. Photo gallery — with hover overlays & captions */}
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

      {/* 7. "As Featured In" press credibility strip */}
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

      {/* 8. Stats — with large background watermark numbers */}
      <section className="bg-court-navy py-16 sm:py-24 px-5 sm:px-10 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-display font-extrabold text-[clamp(8rem,30vw,22rem)] text-white/[0.03] leading-none tracking-tight">
            PADEL
          </span>
        </div>
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6">
          {[
            { n: 2, suffix: "", l: "UK venues — Norwich & Hull" },
            { n: 16, suffix: "", l: "Super-panoramic indoor courts" },
            { n: 1, prefix: "#", l: "Social padel community in the UK" },
          ].map((s, i) => (
            <FadeUp
              key={s.l}
              delay={i * 0.1}
              className="text-center sm:text-left sm:border-l-2 sm:border-court-lime/60 sm:pl-6 sm:first:border-l-0 sm:first:pl-0"
            >
              <div className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl text-white tabular-nums">
                <CountUp to={s.n} prefix={s.prefix ?? ""} suffix={s.suffix ?? ""} />
              </div>
              <div className="mt-2 text-white/65 uppercase tracking-wider text-xs sm:text-sm font-display">
                {s.l}
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* What to expect */}
      <section id="about" className="py-20 sm:py-28 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <span className="text-court-lime font-display uppercase tracking-widest text-sm">
              What to Expect
            </span>
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
                  <h3 className="mt-6 font-display font-bold uppercase text-2xl tracking-wide">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-white/65 leading-relaxed">{f.desc}</p>
                  <ArrowRight className="absolute bottom-6 right-6 w-5 h-5 text-court-lime opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 9. "How to Book" — new 3-step editorial section */}
      <section className="py-20 sm:py-28 px-5 sm:px-10 bg-court-navy relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none"
          style={{ background: "linear-gradient(to left, rgba(200,220,0,0.04), transparent)" }} />
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <span className="text-court-lime font-display uppercase tracking-widest text-sm">Getting Started</span>
            <h2 className="mt-3 font-display font-extrabold uppercase text-5xl sm:text-7xl leading-[0.95]">
              Book in<br />Three Steps
            </h2>
          </FadeUp>
          <div className="mt-16 grid md:grid-cols-3 gap-0">
            {[
              {
                num: "01",
                title: "Download Playtomic",
                desc: "Our courts are booked through Playtomic — the world's leading padel booking platform. Free to download on iOS and Android.",
              },
              {
                num: "02",
                title: "Choose Your Court",
                desc: "Pick your date, time, and court type — doubles, singles or pickleball. Off-peak and peak slots available seven days a week.",
              },
              {
                num: "03",
                title: "Show Up & Play",
                desc: "Rock up, grab a racket if you need one, and hit the court. Our team will sort you out. Coffee's waiting after.",
              },
            ].map((step, i) => (
              <FadeUp key={step.num} delay={i * 0.12}>
                <div className="relative p-8 md:p-10 border-b md:border-b-0 md:border-r border-white/10 last:border-0">
                  <span className="font-display font-extrabold text-[5rem] leading-none text-white/[0.06] select-none absolute top-6 right-6">
                    {step.num}
                  </span>
                  <div className="relative">
                    <span className="font-display font-bold text-court-lime text-sm tracking-widest uppercase">{step.num}</span>
                    <h3 className="mt-3 font-display font-bold uppercase text-2xl tracking-wide leading-tight">{step.title}</h3>
                    <p className="mt-4 text-white/65 leading-relaxed text-sm">{step.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={0.3}>
            <div className="mt-10 pl-8 md:pl-10">
              <a
                href={PLAYTOMIC}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-court-lime text-court-navy font-display font-bold uppercase tracking-wider text-sm px-6 py-3.5 hover:bg-court-lime/90 transition"
              >
                Book a Court Now <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="py-20 sm:py-28 px-5 sm:px-10 bg-court-blue/40 border-y border-white/10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <FadeUp>
            <span className="text-court-lime font-display uppercase tracking-widest text-sm">
              Location
            </span>
            <h2 className="mt-3 font-display font-extrabold uppercase text-5xl sm:text-7xl leading-[0.95]">
              Find Us
            </h2>
            <div className="mt-8 flex items-start gap-4">
              <MapPin className="w-6 h-6 text-court-lime mt-1 shrink-0" />
              <div>
                <p className="font-display font-bold uppercase text-xl tracking-wide">
                  Unit 1–3 National Business Park
                </p>
                <p className="text-white/80">Bontoft Ave, Hull, HU5 4HF</p>
              </div>
            </div>
            <p className="mt-6 text-white/65 max-w-md">
              Loads of parking. Right in the heart of west Hull. Five minutes off the A1079.
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Unit+3+National+Business+Park+Bontoft+Ave+HU5+4HF"
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
                title="Court de Padel location map"
                src="https://maps.google.com/maps?q=Unit+3+National+Business+Park,+Bontoft+Avenue,+Hull+HU5+4HF&output=embed&z=15"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 10. "What is Padel?" — updated with local image */}
      <section id="what-is-padel" className="py-20 sm:py-28 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <FadeUp>
            <span className="text-court-lime font-display uppercase tracking-widest text-sm">The Sport</span>
            <h2 className="mt-3 font-display font-extrabold uppercase text-5xl sm:text-7xl leading-[0.95]">What is<br />Padel?</h2>
            <div className="mt-8 text-white/75 space-y-4 leading-relaxed">
              <p>Padel is a racket sport that blends tennis and squash — played in doubles on an enclosed glass court roughly a third the size of a tennis court. Easy to pick up, addictive to master.</p>
              <p>It's the fastest-growing sport in the world. Underarm serve, solid (perforated) rackets, and walls in play make for fast rallies, big laughs and zero learning curve.</p>
              <p>Whether you've never picked up a racket or you're chasing your next league title, padel is for everyone.</p>
            </div>
            <Link
              to="/norwich"
              className="mt-8 inline-flex items-center gap-2 border border-white/30 text-white font-display font-bold uppercase tracking-wider text-sm px-5 py-3 hover:border-court-lime hover:text-court-lime transition"
            >
              Book a Taster Session <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="relative aspect-[4/3] overflow-hidden border border-white/15">
              <img
                src="/722809987_18590251195009497_719732711432549501_n.jpg"
                alt="Padel court at Court de Padel Hull"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-court-navy/60 to-transparent" />
              <div className="absolute bottom-5 left-5">
                <span className="font-display font-bold uppercase tracking-widest text-xs text-court-lime bg-court-navy/80 px-3 py-1.5">
                  Hull · Now Open
                </span>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="py-20 sm:py-28 px-5 sm:px-10 bg-court-blue/40 border-y border-white/10">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <span className="text-court-lime font-display uppercase tracking-widest text-sm">FAQs</span>
            <h2 className="mt-3 font-display font-extrabold uppercase text-5xl sm:text-7xl leading-[0.95]">Frequently Asked</h2>
          </FadeUp>
          <div className="mt-12 grid md:grid-cols-2 gap-5">
            {[
              { q: "Where are we based?", a: "Norwich — Unit 4 Whiffler Road, NR3 2BU. Hull — Unit 1–3 National Business Park, Bontoft Ave, HU5 4HF. Both venues are now open." },
              { q: "How do I book?", a: "All bookings are managed via Playtomic. Hit Book Now in the nav to reserve a court." },
              { q: "How many courts?", a: "6 double super-panoramic courts and 2 single super-panoramic courts, plus table tennis throughout the club." },
              { q: "Indoor or outdoor?", a: "All courts are indoor. We've got you covered for the English weather." },
              { q: "How much does it cost?", a: "Doubles: £32 off-peak / £44 peak per hour. Singles: £18 off-peak / £22 peak per hour. Members get 10% off." },
              { q: "Can I rent equipment?", a: "Rental rackets £4 (free for members). Balls £6.50. Equipment is provided for classes and private sessions." },
              { q: "What's included in membership?", a: "£17.50pppm — 10% off courts, MODO Pilates, food & drinks. Access to members-only events with free food, drinks and racket hire. 20% off classes, BodyReset and merch. 21-day priority booking." },
            ].map((f, i) => (
              <FadeUp key={f.q} delay={i * 0.05}>
                <div className="h-full bg-white/[0.06] border border-white/10 p-6 hover:border-court-lime/60 transition">
                  <h3 className="font-display font-bold uppercase text-lg tracking-wide text-court-lime">{f.q}</h3>
                  <p className="mt-3 text-white/75 leading-relaxed text-sm">{f.a}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Testimonial / community quote section */}
      <section className="py-20 sm:py-28 px-5 sm:px-10 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <span className="absolute top-8 left-8 font-display font-extrabold text-[12rem] leading-none text-white/[0.025] select-none">"</span>
        </div>
        <div className="max-w-4xl mx-auto relative">
          <FadeUp>
            <blockquote className="font-display font-bold uppercase text-3xl sm:text-5xl leading-[1.1] tracking-tight text-white">
              The best padel club in the north. The courts are world-class, the atmosphere is electric and the community keeps you coming back.
            </blockquote>
            <div className="mt-10 flex items-center gap-5">
              <div className="flex -space-x-3">
                {[
                  "https://images.squarespace-cdn.com/content/v1/6777dae8a2db76294b6d4e0e/a7b664ea-d3ed-4a1f-a21e-f775bdeda4a9/IMG_7560+2.JPG?format=200w",
                  "https://images.squarespace-cdn.com/content/v1/6777dae8a2db76294b6d4e0e/e34b6463-4654-4438-b83d-1f30040fa420/IMG_7561.JPG?format=200w",
                  "https://images.squarespace-cdn.com/content/v1/6777dae8a2db76294b6d4e0e/3387da17-4241-42dc-a098-52f6a8cec5ab/IMG_7604.JPG?format=200w",
                ].map((src, i) => (
                  <div key={i} className="w-10 h-10 rounded-full overflow-hidden border-2 border-court-navy">
                    <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                ))}
              </div>
              <div>
                <p className="font-display font-bold uppercase tracking-wider text-sm text-white">Our Members</p>
                <p className="text-white/55 text-sm mt-0.5">500+ players and counting</p>
              </div>
              <div className="ml-auto hidden sm:block">
                <span className="font-display font-bold uppercase tracking-widest text-xs text-court-lime border border-court-lime/40 px-3 py-1.5">★★★★★</span>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Press */}
      <section id="press" className="py-20 sm:py-28 px-5 sm:px-10 bg-court-blue/40 border-y border-white/10">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <span className="text-court-lime font-display uppercase tracking-widest text-sm">Press</span>
            <h2 className="mt-3 font-display font-extrabold uppercase text-5xl sm:text-7xl leading-[0.95]">
              Making a Racket
            </h2>
          </FadeUp>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {[
              {
                source: "Hull Daily Mail",
                date: "Jul 2025",
                tag: "Hull",
                headline: "Plans for new sports centre submitted to Hull City Council",
                excerpt: "It would have eight indoor sports courts and an outdoor padel court.",
                href: "https://www.hulldailymail.co.uk/news/hull-east-yorkshire-news/plans-new-indoor-sports-centre-10368020",
              },
              {
                source: "Evening News",
                date: "10 Aug 2025",
                tag: "Norwich",
                headline: "New sports centre in Kirkham House to open next month",
                excerpt: "Court De Padel has been revealed as the new business to open an indoor sports centre at Kirkham House, in Whiffler Road.",
                href: "https://www.eveningnews24.co.uk/news/25368596.new-sports-centre-kirkham-house-open-next-month/",
              },
              {
                source: "hullisthis.news",
                date: "11 Nov 2025",
                tag: "Hull",
                headline: "Court De Padel to open new Padel centre in Hull",
                excerpt: "Court De Padel announces its newest venue at Unit 3, National Business Park, Bontoft Avenue, HU5 4HF.",
                href: "https://hullisthis.news/court-de-padel-to-open-new-padel-centre-in-hull/",
              },
            ].map((p, i) => (
              <FadeUp key={p.headline} delay={i * 0.1}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col h-full bg-white/[0.06] border border-white/10 p-8 hover:border-court-lime/60 hover:-translate-y-1 hover:bg-white/[0.08] transition-all duration-300"
                >
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="inline-block font-display font-bold uppercase text-xs tracking-widest bg-court-lime/15 border border-court-lime/30 text-court-lime px-2.5 py-1">
                      {p.tag}
                    </span>
                    <span className="text-white/40 text-xs font-display uppercase tracking-wider shrink-0">{p.date}</span>
                  </div>
                  <p className="text-white/45 text-xs font-display uppercase tracking-widest mb-3">{p.source}</p>
                  <h3 className="font-display font-bold uppercase text-xl tracking-wide leading-[1.1] flex-1 group-hover:text-court-lime transition-colors duration-200">
                    {p.headline}
                  </h3>
                  <p className="mt-3 text-white/60 text-sm leading-relaxed">{p.excerpt}</p>
                  <div className="mt-5 flex items-center gap-2 font-display font-bold uppercase tracking-widest text-xs text-court-lime">
                    Read <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </div>
                </a>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={0.25}>
            <Link
              to="/press"
              className="mt-8 inline-flex items-center gap-2 border border-white/30 text-white font-display font-bold uppercase tracking-wider text-sm px-6 py-3 hover:border-court-lime hover:text-court-lime transition"
            >
              All Press Coverage <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* Corporate */}
      <section id="corporate" className="py-20 sm:py-28 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <FadeUp>
            <span className="text-court-lime font-display uppercase tracking-widest text-sm">Corporate</span>
            <h2 className="mt-3 font-display font-extrabold uppercase text-5xl sm:text-7xl leading-[0.95]">Team Days,<br />Done Right.</h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="text-white/75 space-y-4 leading-relaxed">
              <p>Court bookings, Americano tournaments, coaching, food and drink — fully-tailored corporate events at both our Norwich and Hull venues.</p>
              <p>Perfect for client entertaining, team away days, charity events and league nights. We handle every detail.</p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {["Court hire", "Tournament format", "Coaching included", "Bar & food"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-white/80">
                    <Check className="w-4 h-4 text-court-lime shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <a
                href="mailto:hello@courtdepadel.com"
                className="inline-flex items-center gap-2 mt-6 bg-court-lime text-court-navy font-display font-bold uppercase tracking-wider text-sm px-5 py-3 hover:bg-court-lime/90 transition"
              >
                Enquire Now <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 12. Coming up — with visual tags */}
      <section id="coming-up" className="py-20 sm:py-28 px-5 sm:px-10 bg-court-blue/40 border-y border-white/10">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <span className="text-court-lime font-display uppercase tracking-widest text-sm">Coming Up</span>
            <h2 className="mt-3 font-display font-extrabold uppercase text-5xl sm:text-7xl leading-[0.95]">What's On</h2>
          </FadeUp>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "Americano Tournaments", tag: "Competitive", desc: "Regular Americano-style tournaments and mixers — meet new players and compete at every level." },
              { title: "Sunday Run Club", tag: "Social", desc: "A fun social run for all members followed by a free coffee. Every Sunday — all abilities welcome." },
              { title: "Ladies Padel Social", tag: "Community", desc: "Skills sessions and mini Americano games in a welcoming, all-abilities format. Follow us on Instagram for dates." },
              { title: "Sports Screen", tag: "Events", desc: "Watch Wimbledon, live sports and padel on our big screen with drinks in hand. Great vibes all summer." },
            ].map((c, i) => (
              <FadeUp key={c.title} delay={i * 0.08}>
                <div className="h-full bg-white/[0.06] border border-white/10 p-6 hover:border-court-lime/60 hover:-translate-y-1 transition-all duration-300">
                  <span className="inline-block font-display font-bold uppercase tracking-widest text-xs text-court-lime border border-court-lime/40 px-2.5 py-1 mb-4">
                    {c.tag}
                  </span>
                  <h3 className="font-display font-bold uppercase text-xl tracking-wide leading-tight">{c.title}</h3>
                  <p className="mt-3 text-white/70 leading-relaxed text-sm">{c.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Norwich */}
      <section id="norwich" className="py-20 sm:py-28 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <FadeUp>
            <span className="text-court-lime font-display uppercase tracking-widest text-sm">Norwich · Open Now</span>
            <h2 className="mt-3 font-display font-extrabold uppercase text-5xl sm:text-7xl leading-[0.95]">The Only Indoor<br />Club in Norwich</h2>
            <div className="mt-8 flex items-start gap-4">
              <MapPin className="w-6 h-6 text-court-lime mt-1 shrink-0" />
              <div>
                <p className="font-display font-bold uppercase text-xl tracking-wide">Unit 4 Whiffler Road</p>
                <p className="text-white/80">Norwich, NR3 2BU</p>
              </div>
            </div>
            <p className="mt-6 text-white/65 max-w-md">Open since November 2025 — fast become the number one padel venue in Norfolk.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={PLAYTOMIC}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-court-lime text-court-navy font-display font-bold uppercase tracking-wider text-sm px-5 py-3 hover:bg-court-lime/90 transition"
              >
                Book Norwich <ArrowRight className="w-4 h-4" />
              </a>
              <Link to="/norwich" className="inline-flex items-center gap-2 border border-white/30 text-white font-display font-bold uppercase tracking-wider text-sm px-5 py-3 hover:border-court-lime hover:text-court-lime transition">
                Full Norwich Info <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: 6, l: "Double super-panoramic courts" },
                { n: 2, l: "Single super-panoramic courts" },
                { n: 1, prefix: "#", l: "Padel venue in Norfolk" },
                { n: 21, suffix: "d", l: "Member priority booking" },
              ].map((s) => (
                <div key={s.l} className="bg-white/[0.06] border border-white/10 p-6 hover:border-court-lime/40 transition">
                  <div className="font-display font-extrabold text-4xl text-court-lime tabular-nums">
                    <CountUp to={s.n} prefix={s.prefix ?? ""} suffix={s.suffix ?? ""} />
                  </div>
                  <div className="mt-2 text-white/65 uppercase tracking-wider text-xs font-display">{s.l}</div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 13. Hull section — updated "Now Open" + Book Now CTA */}
      <section id="hull" className="py-20 sm:py-28 px-5 sm:px-10 bg-court-blue/40 border-y border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-end pr-10 opacity-[0.025]">
          <span className="font-display font-extrabold text-[clamp(6rem,20vw,16rem)] leading-none tracking-tight text-white">HULL</span>
        </div>
        <div className="max-w-6xl mx-auto relative">
          <FadeUp>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-2 bg-court-lime text-court-navy font-display font-bold uppercase tracking-widest text-xs px-3 py-1.5">
                <span className="w-1.5 h-1.5 bg-court-navy rounded-full animate-pulse" />
                Hull · Now Open
              </span>
            </div>
            <h2 className="font-display font-extrabold uppercase text-5xl sm:text-7xl leading-[0.95]">Hull's Biggest<br />Social Padel Club</h2>
          </FadeUp>
          <div className="mt-10 grid lg:grid-cols-2 gap-12 items-start">
            <FadeUp delay={0.1} className="text-white/75 space-y-4 leading-relaxed">
              <p>Our Hull venue is now open — 6 double + 2 single super-panoramic courts, plus professional pickleball courts. BodyReset physio, bar & café, in-house food and modern changing rooms.</p>
              <p>Unit 1–3 National Business Park, Bontoft Avenue, Kingston Upon Hull, HU5 4HF. Loads of free parking. Five minutes off the A1079.</p>
              <div className="flex flex-wrap gap-3 mt-2">
                <a
                  href={PLAYTOMIC}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-court-lime text-court-navy font-display font-bold uppercase tracking-wider text-sm px-5 py-3 hover:bg-court-lime/90 transition"
                >
                  Book Hull Now <ArrowRight className="w-4 h-4" />
                </a>
                <Link to="/hull" className="inline-flex items-center gap-2 border border-white/30 text-white font-display font-bold uppercase tracking-wider text-sm px-5 py-3 hover:border-court-lime hover:text-court-lime transition">
                  Full Hull Info <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="aspect-[4/3] border border-white/15 overflow-hidden relative">
                <img
                  src="/722809987_18590251195009497_719732711432549501_n.jpg"
                  alt="Court de Padel Hull venue"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-court-navy/50 to-transparent" />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section id="waitlist" className="relative py-24 sm:py-32 px-5 sm:px-10 overflow-hidden bg-court-blue">
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-court-lime/10 blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeUp>
            <span className="inline-block bg-court-lime text-court-navy font-display font-bold uppercase tracking-widest text-xs px-3 py-1.5">
              Community
            </span>
            <h2 className="mt-6 font-display font-extrabold uppercase text-5xl sm:text-7xl leading-[0.95]">
              Stay in the<br />Loop
            </h2>
            <p className="mt-6 text-white/75 max-w-xl mx-auto">
              Sign up and be first to hear about new events, tournaments, member offers and everything happening at Court de Padel.
            </p>
            <div className="mt-10 flex justify-center">
              <WaitlistForm variant="cta" />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Instagram */}
      <section className="py-16 sm:py-20 px-5 sm:px-10 bg-court-navy">
        <div className="max-w-6xl mx-auto">
          <FadeUp className="text-center mb-8">
            <a
              href="https://www.instagram.com/courtdepadelhull/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-court-lime font-display font-bold uppercase tracking-widest text-sm hover:text-white transition"
            >
              <Instagram className="w-5 h-5" />
              @courtdepadelhull
            </a>
            <h2 className="mt-3 font-display font-extrabold uppercase text-4xl sm:text-5xl">Follow Along</h2>
          </FadeUp>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-1">
            {[
              { src: "https://images.squarespace-cdn.com/content/v1/6777dae8a2db76294b6d4e0e/a7b664ea-d3ed-4a1f-a21e-f775bdeda4a9/IMG_7560+2.JPG?format=600w", alt: "" },
              { src: "https://images.squarespace-cdn.com/content/v1/6777dae8a2db76294b6d4e0e/e34b6463-4654-4438-b83d-1f30040fa420/IMG_7561.JPG?format=600w", alt: "" },
              { src: "https://images.squarespace-cdn.com/content/v1/6777dae8a2db76294b6d4e0e/9324190f-4e71-4208-8260-be153f68643d/Craft+Beer+Tour+in+Bristol.jpeg?format=600w", alt: "" },
              { src: "https://images.squarespace-cdn.com/content/v1/6777dae8a2db76294b6d4e0e/1735913892604-BHVLQR5WH3HLQ38GNYL2/unsplash-image-fRNkZ8-5vDg.jpg?format=600w", alt: "" },
              { src: "https://images.squarespace-cdn.com/content/v1/6777dae8a2db76294b6d4e0e/e523b9a4-68f1-4c87-99ad-3cb576edb475/unsplash-image-jUGnbZxLziQ.jpg?format=600w", alt: "" },
              { src: "https://images.squarespace-cdn.com/content/v1/6777dae8a2db76294b6d4e0e/3387da17-4241-42dc-a098-52f6a8cec5ab/IMG_7604.JPG?format=600w", alt: "" },
            ].map((img, i) => (
              <a
                key={i}
                href="https://www.instagram.com/courtdepadelhull/"
                target="_blank"
                rel="noreferrer"
                className="aspect-square overflow-hidden block group"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
          <FadeUp className="text-center mt-8">
            <a
              href="https://www.instagram.com/courtdepadelhull/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-display font-bold uppercase tracking-wider text-sm px-6 py-3 hover:border-court-lime hover:text-court-lime transition"
            >
              <Instagram className="w-4 h-4" /> Follow on Instagram
            </a>
          </FadeUp>
        </div>
      </section>

      {/* Join Our Community */}
      <section className="py-20 sm:py-28 px-5 sm:px-10 bg-court-lime">
        <div className="max-w-3xl mx-auto text-center">
          <FadeUp>
            <h2 className="font-display font-extrabold uppercase text-court-navy text-5xl sm:text-7xl leading-[0.95]">
              Join Our<br />Community
            </h2>
            <p className="mt-6 text-court-navy/75 max-w-xl mx-auto text-lg">
              Stay up to date with all our latest tournaments, events and activities — across Norwich and Hull.
            </p>
            <a
              href="https://mailchi.mp/45a651626aad/sign-ups"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 bg-court-navy text-white font-display font-bold uppercase tracking-wider text-sm px-8 py-4 hover:bg-court-navy/90 transition"
            >
              Join the Community <ArrowRight className="w-4 h-4" />
            </a>
          </FadeUp>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-court-navy border-t border-white/10 pt-16 pb-10 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <p className="font-display font-extrabold uppercase tracking-widest text-white text-lg">Court de Padel</p>
              <p className="font-display uppercase tracking-widest text-court-lime text-xs mt-0.5">Game · Set · Padel</p>
              <p className="mt-4 text-white/55 text-sm leading-relaxed max-w-xs">
                Premium indoor padel clubs across the UK. Now open in Norwich and Hull.
              </p>
            </div>

            {/* Venues */}
            <div>
              <p className="font-display font-bold uppercase tracking-widest text-xs text-court-lime mb-4">Venues</p>
              <ul className="space-y-3 text-sm text-white/65">
                <li>
                  <Link to="/norwich" className="hover:text-white transition">Norwich — Open Now</Link>
                  <p className="text-white/35 text-xs mt-0.5">Unit 4 Whiffler Rd, NR3 2BU</p>
                </li>
                <li>
                  {/* 14. Footer Hull text updated to "Now Open" */}
                  <Link to="/hull" className="hover:text-white transition">Hull — Now Open</Link>
                  <p className="text-white/35 text-xs mt-0.5">Unit 1–3 National Business Park, HU5 4HF</p>
                </li>
              </ul>
            </div>

            {/* Site */}
            <div>
              <p className="font-display font-bold uppercase tracking-widest text-xs text-court-lime mb-4">Explore</p>
              <ul className="space-y-3 text-sm text-white/65">
                {[
                  { label: "What is Padel?", href: "#what-is-padel" },
                  { label: "FAQs", href: "#faqs" },
                  { label: "Coming Up", href: "#coming-up" },
                  { label: "Corporate", href: "#corporate" },
                  { label: "Press", href: "#press" },
                ].map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="hover:text-white transition">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
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
              <a
                href="mailto:hello@courtdepadel.com"
                className="mt-6 inline-block text-sm text-white/65 hover:text-white transition"
              >
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
