import { createFileRoute, Link } from "@tanstack/react-router";
import { Instagram, MapPin, Trophy, Users, Sparkles, ArrowRight } from "lucide-react";
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
          "Court de Padel — premium indoor padel clubs in Norwich and Hull. Book a court in Norwich now, or join the waitlist for Hull opening 2026.",
      },
      { property: "og:title", content: "Court de Padel — Norwich & Hull" },
      {
        property: "og:description",
        content: "Premium indoor padel clubs across the UK. Norwich open now. Hull opening 2026.",
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

function Index() {
  const scrolled = useScrolled(60);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Announcement */}
      <div className="bg-court-navy text-white/90 text-xs sm:text-sm tracking-widest uppercase py-2 px-4 text-center font-display font-semibold">
        Norwich · Open Now &nbsp;|&nbsp; Hull · Opening 2026
      </div>

      {/* Nav */}
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
          <a href="#press" className="hover:text-court-lime transition">Press</a>
          <a href="#corporate" className="hover:text-court-lime transition">Corporate</a>
          <a href="#coming-up" className="hover:text-court-lime transition">Coming up</a>
          <Link to="/norwich" className="hover:text-court-lime transition">Norwich</Link>
          <Link to="/hull" className="hover:text-court-lime transition">Hull</Link>
        </div>
        <a
          href="https://playtomic.io/tenant/04a4fdf5-418b-4ebb-888b-1ed46cfa8d9c?utm_campaign=share&utm_source=app_ios"
          target="_blank"
          rel="noreferrer"
          className="bg-court-lime text-court-navy font-display font-bold uppercase tracking-wider text-xs sm:text-sm px-4 sm:px-5 py-2.5 hover:bg-court-lime/90 transition"
        >
          Book Now
        </a>
      </nav>


      {/* Hero */}
      <header className="relative min-h-[calc(100vh-140px)] flex items-center px-5 sm:px-10 py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.squarespace-cdn.com/content/v1/6777dae8a2db76294b6d4e0e/e34b6463-4654-4438-b83d-1f30040fa420/IMG_7561.JPG?format=2500w"
            alt=""
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-court-blue/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-court-blue/40 via-transparent to-background" />
        </div>
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-court-lime/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 w-full max-w-6xl mx-auto">
          <FadeUp>
            <div className="flex flex-wrap gap-3 mb-6">
              <Link to="/norwich" className="inline-flex items-center gap-2 bg-court-lime text-court-navy font-display font-bold uppercase tracking-widest text-xs px-3 py-1.5 hover:bg-court-lime/90 transition">
                <span className="w-1.5 h-1.5 bg-court-navy rounded-full animate-pulse" />
                Norwich · Open Now
              </Link>
              <Link to="/hull" className="inline-flex items-center gap-2 border border-court-lime text-court-lime font-display font-bold uppercase tracking-widest text-xs px-3 py-1.5 hover:bg-court-lime/10 transition">
                <span className="w-1.5 h-1.5 bg-court-lime rounded-full" />
                Hull · Opening 2026
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
            <p className="mt-6 text-white/65 max-w-xl">
              Super-panoramic indoor courts, social play, leagues and events for every level. Norwich is open now — Hull opens 2026.
            </p>
          </FadeUp>

          <FadeUp delay={0.4}>
            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <a
                href="https://playtomic.io/tenant/04a4fdf5-418b-4ebb-888b-1ed46cfa8d9c?utm_campaign=share&utm_source=app_ios"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-court-lime text-court-navy font-display font-bold uppercase tracking-wider text-sm px-6 py-3.5 hover:bg-court-lime/90 transition"
              >
                Book Norwich Now <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/hull"
                className="inline-flex items-center gap-2 border border-white/40 text-white font-display font-bold uppercase tracking-wider text-sm px-6 py-3.5 hover:border-court-lime hover:text-court-lime transition"
              >
                Join Hull Waitlist <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </header>

      {/* Marquee */}
      <Marquee
        items={[
          "Norwich · Open Now",
          "Hull · Opening 2026",
          "16 Super-Panoramic Indoor Courts",
          "Bar · Café · BodyReset · Physio",
          "Social Play · Leagues · Tournaments",
          "Americano · Run Club · Ladies Social",
        ]}
      />


      {/* Photo gallery */}
      <div className="grid grid-cols-2 md:grid-cols-4">
        {[
          { src: "https://images.squarespace-cdn.com/content/v1/6777dae8a2db76294b6d4e0e/3387da17-4241-42dc-a098-52f6a8cec5ab/IMG_7604.JPG?format=800w", alt: "Court de Padel courts" },
          { src: "https://images.squarespace-cdn.com/content/v1/6777dae8a2db76294b6d4e0e/59cc6eef-a51a-4001-89bc-827fed2fd44c/6+700%2B+Padel+Photos%2C+taleaux+et+images+libre+de+droits.jpeg?format=800w", alt: "Padel court action" },
          { src: "https://images.squarespace-cdn.com/content/v1/6777dae8a2db76294b6d4e0e/9d9b6b25-a935-49fd-adc1-8ba57849b8fc/OYSHO+_+NEW+PADEL+COLLECTION+Discover+the+favourite+look+of+our+Padel+Player+%40carlottacasali+%F0%9F%99%8C%F0%9F%8F%BC+%23oysho+%23padel+%23padelplayers+%23carlottacasali+_+Instagram.jpeg?format=800w", alt: "Padel player" },
          { src: "https://images.squarespace-cdn.com/content/v1/6777dae8a2db76294b6d4e0e/1749813016687-BBWP0MFAA11VJBOD49QT/unsplash-image-JnoNcfFwrNA.jpg?format=800w", alt: "Padel courts" },
        ].map((img) => (
          <div key={img.src} className="aspect-square overflow-hidden">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Stats */}
      <section className="bg-court-navy py-12 sm:py-16 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6">
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

      {/* What is Padel */}
      <section id="what-is-padel" className="py-20 sm:py-28 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          <FadeUp>
            <span className="text-court-lime font-display uppercase tracking-widest text-sm">The Sport</span>
            <h2 className="mt-3 font-display font-extrabold uppercase text-5xl sm:text-7xl leading-[0.95]">What is Padel?</h2>
          </FadeUp>
          <FadeUp delay={0.1} className="text-white/75 space-y-4 leading-relaxed">
            <p>Padel is a racket sport that blends tennis and squash — played in doubles on an enclosed glass court roughly a third the size of a tennis court. Easy to pick up, addictive to master.</p>
            <p>It's the fastest-growing sport in the world. Underarm serve, solid (perforated) rackets, and walls in play make for fast rallies, big laughs and zero learning curve.</p>
            <p>Whether you've never picked up a racket or you're chasing your next league title, padel is for everyone.</p>
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
              { q: "Where are we based?", a: "Norwich — Unit 4 Whiffler Road, NR3 2BU. Hull opens 2026 at Unit 1–3 National Business Park, Bontoft Ave, HU5 4HF." },
              { q: "How do I book?", a: "All bookings are managed via Playtomic. Hit Book Now in the nav to reserve a court." },
              { q: "How many courts?", a: "6 double super-panoramic courts and 2 single super-panoramic courts, plus table tennis throughout the club." },
              { q: "Indoor or outdoor?", a: "All courts are indoor. We've got you covered for the English weather." },
              { q: "How much does it cost?", a: "Doubles: £32 off-peak / £44 peak per hour. Singles: £18 off-peak / £22 peak per hour. Members get 10% off." },
              { q: "Can I rent equipment?", a: "Rental rackets £5 (free for members). Balls £5.50. Equipment is provided for classes and private sessions." },
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

      {/* Press */}
      <section id="press" className="py-20 sm:py-28 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <span className="text-court-lime font-display uppercase tracking-widest text-sm">Press</span>
            <h2 className="mt-3 font-display font-extrabold uppercase text-5xl sm:text-7xl leading-[0.95]">In The News</h2>
            <p className="mt-6 text-white/75 max-w-2xl">Court de Padel is bringing premium indoor padel to towns and cities across the UK — with a target of 3–4 new clubs opening every year.</p>
          </FadeUp>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {[
              { tag: "Launch", title: "Norwich opens November 2025", desc: "Our first club fast becomes the number one padel venue in Norfolk." },
              { tag: "Expansion", title: "Hull launches 2026", desc: "Our second site — eight super-panoramic indoor courts arriving in HU5." },
              { tag: "Growth", title: "Two more locations in 2026", desc: "A national rollout, with 3–4 new clubs targeted every year." },
            ].map((p, i) => (
              <FadeUp key={p.title} delay={i * 0.1}>
                <div className="h-full bg-white/[0.06] border border-white/10 p-8 hover:border-court-lime/60 transition">
                  <span className="text-court-lime font-display uppercase tracking-widest text-xs">{p.tag}</span>
                  <h3 className="mt-3 font-display font-bold uppercase text-2xl tracking-wide">{p.title}</h3>
                  <p className="mt-3 text-white/65 leading-relaxed">{p.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate */}
      <section id="corporate" className="py-20 sm:py-28 px-5 sm:px-10 bg-court-blue/40 border-y border-white/10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <FadeUp>
            <span className="text-court-lime font-display uppercase tracking-widest text-sm">Corporate</span>
            <h2 className="mt-3 font-display font-extrabold uppercase text-5xl sm:text-7xl leading-[0.95]">Team Days,<br />Done Right.</h2>
          </FadeUp>
          <FadeUp delay={0.1} className="text-white/75 space-y-4 leading-relaxed">
            <p>Court bookings, Americano tournaments, coaching, food and drink — fully-tailored corporate events at both our Norwich and Hull venues.</p>
            <p>Perfect for client entertaining, team away days, charity events and league nights. We handle every detail.</p>
            <a
              href="mailto:hello@courtdepadel.com"
              className="inline-flex items-center gap-2 mt-4 bg-court-lime text-court-navy font-display font-bold uppercase tracking-wider text-sm px-5 py-3 hover:bg-court-lime/90 transition"
            >
              Enquire Now <ArrowRight className="w-4 h-4" />
            </a>
          </FadeUp>
        </div>
      </section>

      {/* Coming up */}
      <section id="coming-up" className="py-20 sm:py-28 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <span className="text-court-lime font-display uppercase tracking-widest text-sm">Coming Up</span>
            <h2 className="mt-3 font-display font-extrabold uppercase text-5xl sm:text-7xl leading-[0.95]">What's On</h2>
          </FadeUp>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "Americano Tournaments", desc: "Regular Americano-style tournaments and mixers — meet new players and compete at every level." },
              { title: "Sunday Run Club", desc: "A fun social run for all members followed by a free coffee. Every Sunday — all abilities welcome." },
              { title: "Ladies Padel Social", desc: "Skills sessions and mini Americano games in a welcoming, all-abilities format. Follow us on Instagram for dates." },
              { title: "Sports Screen", desc: "Watch Wimbledon, live sports and padel on our big screen with drinks in hand. Great vibes all summer." },
            ].map((c, i) => (
              <FadeUp key={c.title} delay={i * 0.08}>
                <div className="h-full bg-white/[0.06] border border-white/10 p-6 hover:border-court-lime/60 hover:-translate-y-1 transition-all duration-300">
                  <h3 className="font-display font-bold uppercase text-xl tracking-wide text-court-lime">{c.title}</h3>
                  <p className="mt-3 text-white/70 leading-relaxed text-sm">{c.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Norwich */}
      <section id="norwich" className="py-20 sm:py-28 px-5 sm:px-10 bg-court-blue/40 border-y border-white/10">
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
                href="https://playtomic.io/tenant/04a4fdf5-418b-4ebb-888b-1ed46cfa8d9c?utm_campaign=share&utm_source=app_ios"
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
                <div key={s.l} className="bg-white/[0.06] border border-white/10 p-6">
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

      {/* Hull */}
      <section id="hull" className="py-20 sm:py-28 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <span className="text-court-lime font-display uppercase tracking-widest text-sm">Hull · Opening 2026</span>
            <h2 className="mt-3 font-display font-extrabold uppercase text-5xl sm:text-7xl leading-[0.95]">Hull's Biggest<br />Social Padel Club</h2>
          </FadeUp>
          <div className="mt-10 grid lg:grid-cols-2 gap-12 items-start">
            <FadeUp delay={0.1} className="text-white/75 space-y-4 leading-relaxed">
              <p>Our second site — 6 double + 2 single super-panoramic courts, plus professional pickleball courts. BodyReset physio, bar & café, in-house food and modern changing rooms.</p>
              <p>Unit 1–3 National Business Park, Bontoft Avenue, Kingston Upon Hull, HU5 4HF. Loads of free parking. Five minutes off the A1079.</p>
              <div className="flex flex-wrap gap-3 mt-2">
                <a href="#waitlist" className="inline-flex items-center gap-2 bg-court-lime text-court-navy font-display font-bold uppercase tracking-wider text-sm px-5 py-3 hover:bg-court-lime/90 transition">
                  Join Waitlist <ArrowRight className="w-4 h-4" />
                </a>
                <Link to="/hull" className="inline-flex items-center gap-2 border border-white/30 text-white font-display font-bold uppercase tracking-wider text-sm px-5 py-3 hover:border-court-lime hover:text-court-lime transition">
                  Full Hull Info <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="aspect-[4/3] border border-white/15 overflow-hidden">
                <iframe
                  title="Court de Padel Hull map"
                  src="https://maps.google.com/maps?q=Unit+3+National+Business+Park,+Bontoft+Avenue,+Hull+HU5+4HF&output=embed&z=15"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
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
              Waitlist
            </span>
            <h2 className="mt-6 font-display font-extrabold uppercase text-5xl sm:text-7xl leading-[0.95]">
              Be First<br />Through the Gate
            </h2>
            <p className="mt-6 text-white/75 max-w-xl mx-auto">
              Sign up and we'll let you know the moment we open — plus early booking access for waitlist members.
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
                Premium indoor padel clubs across the UK. Open in Norwich. Coming to Hull in 2026.
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
                  <Link to="/hull" className="hover:text-white transition">Hull — Opening 2026</Link>
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
              href="https://playtomic.io/tenant/04a4fdf5-418b-4ebb-888b-1ed46cfa8d9c?utm_campaign=share&utm_source=app_ios"
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
