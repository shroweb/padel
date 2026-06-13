import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Trophy, Users, Sparkles, ArrowRight, Calendar, Smartphone, Check } from "lucide-react";
import { FadeUp } from "@/components/FadeUp";
import { CountUp } from "@/components/CountUp";
import { Marquee } from "@/components/Marquee";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/norwich")({
  component: Norwich,
  head: () => ({
    meta: [
      { title: "Court de Padel Norwich — The Only Indoor Padel Club in Norwich" },
      {
        name: "description",
        content:
          "The only indoor padel club in Norwich. 6 double + 2 single super-panoramic courts, Americano tournaments, bar & café, Run Club. Unit 4 Whiffler Road, NR3 2BU.",
      },
      { property: "og:title", content: "Court de Padel Norwich — Open Now" },
      {
        property: "og:description",
        content: "The only indoor padel club in Norfolk. Open since November 2025 at Unit 4 Whiffler Road, Norwich, NR3 2BU.",
      },
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

function Norwich() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteNav />

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
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        </div>
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-court-lime/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 w-full max-w-6xl mx-auto">
          <FadeUp>
            <span className="inline-flex items-center gap-2 bg-court-lime text-court-navy font-display font-bold uppercase tracking-widest text-xs px-3 py-1.5">
              <span className="w-1.5 h-1.5 bg-court-navy rounded-full animate-pulse" />
              Norwich · Open Now
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="mt-6 font-display font-extrabold uppercase leading-[0.85] text-[clamp(3.5rem,13vw,11rem)] tracking-tight">
              Game
              <span className="inline-block w-[0.06em] h-[0.75em] bg-court-lime mx-[0.15em]" />
              Set
              <span className="inline-block w-[0.06em] h-[0.75em] bg-court-lime mx-[0.15em]" />
              <span className="text-transparent" style={{ WebkitTextStroke: "2px var(--court-lime)" }}>Padel</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mt-4 font-display uppercase tracking-wider text-xl sm:text-3xl text-white/90">
              The Only Indoor Club in Norwich
            </p>
          </FadeUp>
          <FadeUp delay={0.25}>
            <div className="mt-4 flex items-center gap-3 text-white/65">
              <MapPin className="w-4 h-4 text-court-lime shrink-0" />
              <span>Unit 4 Whiffler Road, Norwich, NR3 2BU</span>
            </div>
          </FadeUp>
          <FadeUp delay={0.35}>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={PLAYTOMIC} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-court-lime text-court-navy font-display font-bold uppercase tracking-wider text-sm px-6 py-3.5 hover:bg-court-lime/90 transition">
                Book a Court <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#courts" className="inline-flex items-center gap-2 bg-white/10 border border-white/40 text-white font-display font-bold uppercase tracking-wider text-sm px-6 py-3.5 hover:border-court-lime hover:text-court-lime hover:bg-white/5 transition backdrop-blur-sm">
                Explore the Club <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </FadeUp>
        </div>
      </header>

      {/* Marquee */}
      <Marquee items={[
        "Norwich · Open Now",
        "8 Super-Panoramic Indoor Courts",
        "Bar · Café · Social Play",
        "Americano Tournaments · Leagues",
        "Sunday Run Club · Ladies Social",
        "Coaching for All Levels",
        "Hull · Now Open",
      ]} />

      {/* Photo gallery */}
      <div className="grid grid-cols-2 md:grid-cols-4">
        {[
          { src: "https://images.squarespace-cdn.com/content/v1/6777dae8a2db76294b6d4e0e/3387da17-4241-42dc-a098-52f6a8cec5ab/IMG_7604.JPG?format=800w", alt: "Courts", caption: "The Courts" },
          { src: "https://images.squarespace-cdn.com/content/v1/6777dae8a2db76294b6d4e0e/59cc6eef-a51a-4001-89bc-827fed2fd44c/6+700%2B+Padel+Photos%2C+taleaux+et+images+libre+de+droits.jpeg?format=800w", alt: "Padel action", caption: "Game On" },
          { src: "https://images.squarespace-cdn.com/content/v1/6777dae8a2db76294b6d4e0e/9d9b6b25-a935-49fd-adc1-8ba57849b8fc/OYSHO+_+NEW+PADEL+COLLECTION+Discover+the+favourite+look+of+our+Padel+Player+%40carlottacasali+%F0%9F%99%8C%F0%9F%8F%BC+%23oysho+%23padel+%23padelplayers+%23carlottacasali+_+Instagram.jpeg?format=800w", alt: "Player", caption: "Every Level" },
          { src: "https://images.squarespace-cdn.com/content/v1/6777dae8a2db76294b6d4e0e/1749813016687-BBWP0MFAA11VJBOD49QT/unsplash-image-JnoNcfFwrNA.jpg?format=800w", alt: "Social", caption: "Social Play" },
        ].map((img) => (
          <div key={img.src} className="aspect-square overflow-hidden relative group">
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
            <div className="absolute inset-0 bg-court-navy/0 group-hover:bg-court-navy/60 transition-all duration-400" />
            <span className="absolute bottom-4 left-4 font-display font-bold uppercase tracking-widest text-xs text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">{img.caption}</span>
          </div>
        ))}
      </div>

      {/* As Featured In */}
      <div className="bg-court-navy/60 border-y border-white/10 py-6 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
          <span className="font-display uppercase tracking-widest text-xs text-white/40 shrink-0">As Featured In</span>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6 sm:gap-10">
            {["Hull Daily Mail", "BBC", "Evening News", "Stoke Sentinel", "hullisthis.news", "PPH Commercial"].map((pub) => (
              <span key={pub} className="font-display font-bold uppercase tracking-wider text-sm text-white/55 hover:text-white/90 transition cursor-default">{pub}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <section className="bg-court-navy py-16 sm:py-24 px-5 sm:px-10 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-display font-extrabold text-[clamp(8rem,30vw,22rem)] text-white/[0.03] leading-none tracking-tight">NORWICH</span>
        </div>
        <div className="relative max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-6">
          {[
            { n: 6, l: "Double super-panoramic courts" },
            { n: 2, l: "Single super-panoramic courts" },
            { n: 1, prefix: "#", l: "Padel venue in Norfolk" },
            { n: 21, suffix: "d", l: "Member priority booking" },
          ].map((s, i) => (
            <FadeUp key={s.l} delay={i * 0.1} className="text-center sm:text-left sm:border-l-2 sm:border-court-lime/60 sm:pl-6 sm:first:border-l-0 sm:first:pl-0">
              <div className="font-display font-extrabold text-5xl sm:text-6xl text-white tabular-nums">
                <CountUp to={s.n} prefix={s.prefix ?? ""} suffix={s.suffix ?? ""} />
              </div>
              <div className="mt-2 text-white/65 uppercase tracking-wider text-xs sm:text-sm font-display">{s.l}</div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 sm:py-28 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <span className="text-court-lime font-display uppercase tracking-widest text-sm">What to Expect</span>
            <h2 className="mt-3 font-display font-extrabold uppercase text-5xl sm:text-7xl leading-[0.95]">Built for the<br />Game. Built for You.</h2>
          </FadeUp>
          <div className="mt-14 grid md:grid-cols-3 gap-5">
            {[
              { icon: Trophy, title: "Pro Courts", desc: "8 super-panoramic indoor courts — 6 doubles, 2 singles. All-weather, pro LED lighting, tournament-ready from day one." },
              { icon: Users, title: "Social Play", desc: "Americano tournaments, mixers, leagues and lessons from world-class pros. Plus a Sunday Run Club for everyone." },
              { icon: Sparkles, title: "More Than Courts", desc: "Bar & café, table tennis, social events and a welcoming community. Norwich's home of padel." },
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
            <h2 className="mt-3 font-display font-extrabold uppercase text-5xl sm:text-7xl leading-[0.95]">Built for the<br />Game</h2>
          </FadeUp>
          <div className="mt-14 grid md:grid-cols-3 gap-5">
            {[
              { icon: Trophy, title: "6 Double Courts", desc: "Six super-panoramic doubles courts for social play, Americano tournaments and leagues — all year round, protected from the English weather.", spec: "Super-panoramic glass" },
              { icon: Users, title: "2 Singles Courts", desc: "Two dedicated singles super-panoramic courts for focused 1v1 coaching, competitive play and private training sessions.", spec: "Tournament standard" },
              { icon: Sparkles, title: "Table Tennis", desc: "Table tennis tables throughout the club — great for warming up, winding down, or just having a laugh between sessions.", spec: "Throughout the club" },
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

      {/* Coaching */}
      <section id="coaching" className="py-20 sm:py-28 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <span className="text-court-lime font-display uppercase tracking-widest text-sm">Coaching</span>
            <h2 className="mt-3 font-display font-extrabold uppercase text-5xl sm:text-7xl leading-[0.95]">Learn to Play<br />With Us</h2>
            <p className="mt-6 text-white/65 max-w-2xl leading-relaxed">New to padel or looking to improve? Our sessions cover every level — from first-timers to competitive players.</p>
          </FadeUp>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { tag: "Kids", title: "Kids Lessons", desc: "Structured sessions for younger players — building technique and a love for the game in a safe, fun setting." },
              { tag: "1-on-1", title: "Private Coaching", desc: "One-to-one sessions with our experienced coaches, tailored to your level and goals." },
              { tag: "Group", title: "Group Sessions", desc: "Small group sessions for adults of all abilities. Learn together, improve together." },
              { tag: "Social", title: "Americano Tournaments", desc: "Social tournament format where you rotate partners. Perfect for meeting new players and testing your skills." },
              { tag: "Intro", title: "Taster Sessions", desc: "Never played before? A taster session is the perfect intro — all equipment provided, no experience needed." },
            ].map((s, i) => (
              <FadeUp key={s.title} delay={i * 0.08}>
                <div className="h-full bg-white/[0.06] border border-white/10 p-6 hover:border-court-lime/60 hover:-translate-y-1 transition-all duration-300">
                  <span className="inline-block font-display font-bold uppercase tracking-widest text-xs text-court-lime border border-court-lime/40 px-2.5 py-1 mb-4">{s.tag}</span>
                  <h3 className="font-display font-bold uppercase text-xl tracking-wide">{s.title}</h3>
                  <p className="mt-3 text-white/70 leading-relaxed text-sm">{s.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={0.3}>
            <a href={PLAYTOMIC} target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center gap-2 bg-court-lime text-court-navy font-display font-bold uppercase tracking-wider text-sm px-6 py-3 hover:bg-court-lime/90 transition">
              Book on Playtomic <ArrowRight className="w-4 h-4" />
            </a>
          </FadeUp>
        </div>
      </section>

      {/* What's On */}
      <section id="events" className="py-20 sm:py-28 px-5 sm:px-10 bg-court-blue/40 border-y border-white/10">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <span className="text-court-lime font-display uppercase tracking-widest text-sm">What's On</span>
            <h2 className="mt-3 font-display font-extrabold uppercase text-5xl sm:text-7xl leading-[0.95]">Events &<br />Activities</h2>
          </FadeUp>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { tag: "Social", title: "Sunday Run Club", desc: "A fun social run for all of our members followed by a free coffee. Every Sunday — all levels welcome." },
              { tag: "Community", title: "Ladies Padel Social", desc: "Teaching you the best skills in mini Americano style games. A welcoming session for all abilities." },
              { tag: "Competitive", title: "Americano Tournaments", desc: "Regular Americano tournaments and mixers — great for meeting new players and improving your game." },
              { tag: "Events", title: "Sports Screen", desc: "Watch Wimbledon, live sports and padel on our big screen while enjoying drinks. Great vibes all summer." },
            ].map((e, i) => (
              <FadeUp key={e.title} delay={i * 0.08}>
                <div className="h-full bg-white/[0.06] border border-white/10 p-6 hover:border-court-lime/60 hover:-translate-y-1 transition-all duration-300">
                  <span className="inline-block font-display font-bold uppercase tracking-widest text-xs text-court-lime border border-court-lime/40 px-2.5 py-1 mb-4">{e.tag}</span>
                  <h3 className="font-display font-bold uppercase text-xl tracking-wide">{e.title}</h3>
                  <p className="mt-3 text-white/70 leading-relaxed text-sm">{e.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={0.2}>
            <p className="mt-8 text-white/55 text-sm">
              Follow{" "}
              <a href="https://www.instagram.com/courtdepadel/" target="_blank" rel="noreferrer" className="text-court-lime hover:underline">@courtdepadel</a>
              {" "}on Instagram for the latest events and session times.
            </p>
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

          {/* Full-width pricing table */}
          <div className="mt-12 border border-white/10">
            <div className="grid grid-cols-5 border-b border-white/10 bg-white/[0.03]">
              <div className="px-5 py-4 font-display font-bold uppercase tracking-widest text-xs text-white/40">Duration</div>
              {["Singles Off-Peak", "Singles Peak", "Doubles Off-Peak", "Doubles Peak"].map((h) => (
                <div key={h} className="px-5 py-4 font-display font-bold uppercase tracking-widest text-xs text-white/40 border-l border-white/10">{h}</div>
              ))}
            </div>
            {[
              { dur: "1 Hour", prices: ["£20", "£24", "£34", "£44"] },
              { dur: "90 Minutes", prices: ["£30", "£34", "£48", "£60"] },
              { dur: "2 Hours", prices: ["£40", "£44", "£64", "£80"] },
            ].map((row, i) => (
              <FadeUp key={row.dur} delay={i * 0.06}>
                <div className={`grid grid-cols-5 hover:bg-white/[0.03] transition ${i < 2 ? "border-b border-white/10" : ""}`}>
                  <div className="px-5 py-6 font-display font-bold uppercase tracking-wider text-sm">{row.dur}</div>
                  {row.prices.map((price, j) => (
                    <div key={j} className="px-5 py-6 border-l border-white/10 flex items-center gap-1">
                      <span className={`font-display font-extrabold text-3xl sm:text-4xl tabular-nums ${j === 0 || j === 2 ? "text-court-lime" : ""}`}>{price}</span>
                    </div>
                  ))}
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Membership */}
          <FadeUp delay={0.2}>
            <div className="mt-6 relative overflow-hidden bg-gradient-to-br from-court-lime/15 to-court-lime/5 border border-court-lime/40 p-8 sm:p-10">
              <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(200,220,0,0.10) 0%, transparent 70%)" }} />
              <div className="relative">
                <span className="inline-block font-display font-bold uppercase tracking-widest text-xs text-court-lime border border-court-lime/40 px-2.5 py-1 mb-3">Membership</span>
                <h3 className="font-display font-bold uppercase text-3xl tracking-wide">
                  £17.50 <span className="text-lg text-white/60 font-sans font-normal normal-case tracking-normal">/ month</span>
                </h3>
                <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-2 text-sm text-white/80">
                  {[
                    "10% off all court bookings",
                    "10% off food & drinks",
                    "21-day priority booking window",
                    "Exclusive member-only events",
                    "10% off clothing",
                    "20% off all classes",
                    "Free racket hire",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-court-lime mt-0.5 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <a href={PLAYTOMIC} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 bg-court-lime text-court-navy font-display font-bold uppercase tracking-wider text-sm px-5 py-3 hover:bg-court-lime/90 transition">
                  Become a Member <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={0.25}>
            <p className="mt-4 text-white/50 text-sm">Rental rackets £4 each — free for members · Balls £6.50 · Equipment provided for all classes &amp; private sessions</p>
          </FadeUp>
        </div>
      </section>

      {/* Install the App */}
      <section className="py-16 sm:py-20 px-5 sm:px-10 bg-court-navy relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-end pr-10 pointer-events-none select-none opacity-[0.03]">
          <span className="font-display font-extrabold text-[clamp(4rem,16vw,12rem)] leading-none tracking-tight text-white">PLAYTOMIC</span>
        </div>
        <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <FadeUp>
            <span className="text-court-lime font-display uppercase tracking-widest text-sm">Booking</span>
            <h2 className="mt-3 font-display font-extrabold uppercase text-4xl sm:text-5xl leading-[0.95]">Install the App</h2>
            <p className="mt-4 text-white/65 max-w-md leading-relaxed">Download Playtomic on iOS or Android to book courts, join sessions and manage your game.</p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://apps.apple.com/app/playtomic-play-padel/id1244519546" target="_blank" rel="noreferrer" className="inline-flex items-center gap-4 border border-white/20 px-6 py-4 hover:border-court-lime hover:text-court-lime transition">
                <Smartphone className="w-6 h-6 text-court-lime shrink-0" />
                <div>
                  <div className="text-xs text-white/55 uppercase tracking-widest font-display">Download on the</div>
                  <div className="font-display font-bold uppercase tracking-wide">App Store</div>
                </div>
              </a>
              <a href="https://play.google.com/store/apps/details?id=io.playtomic.app" target="_blank" rel="noreferrer" className="inline-flex items-center gap-4 border border-white/20 px-6 py-4 hover:border-court-lime hover:text-court-lime transition">
                <Smartphone className="w-6 h-6 text-court-lime shrink-0" />
                <div>
                  <div className="text-xs text-white/55 uppercase tracking-widest font-display">Get it on</div>
                  <div className="font-display font-bold uppercase tracking-wide">Google Play</div>
                </div>
              </a>
            </div>
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
                <p className="font-display font-bold uppercase text-xl tracking-wide">Unit 4 Whiffler Road</p>
                <p className="text-white/80">Norwich, NR3 2BU</p>
              </div>
            </div>
            <p className="mt-6 text-white/65 max-w-md">Open since November 2025. Easy access and parking at Whiffler Road, Norwich.</p>
            <a href="https://www.google.com/maps/search/?api=1&query=Unit+4+Whiffler+Road+Norwich+NR3+2BU" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 bg-court-lime text-court-navy font-display font-bold uppercase tracking-wider text-sm px-5 py-3 hover:bg-court-lime/90 transition">
              Get Directions <ArrowRight className="w-4 h-4" />
            </a>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="relative aspect-[4/3] border border-white/15 overflow-hidden">
              <iframe
                title="Court de Padel Norwich map"
                src="https://maps.google.com/maps?q=Unit+4+Whiffler+Road+Norwich+NR3+2BU&output=embed&z=15"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 sm:py-32 px-5 sm:px-10 overflow-hidden bg-court-blue">
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-court-lime/10 blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <FadeUp>
            <span className="inline-flex items-center gap-2 bg-court-lime text-court-navy font-display font-bold uppercase tracking-widest text-xs px-3 py-1.5 mb-4">
              <span className="w-1.5 h-1.5 bg-court-navy rounded-full animate-pulse" />
              Open Now
            </span>
            <h2 className="font-display font-extrabold uppercase text-5xl sm:text-7xl leading-[0.95]">Ready to Play?</h2>
            <p className="mt-6 text-white/75 max-w-xl">Book a court online via Playtomic. All levels welcome — whether you've never held a racket or you're chasing a league title.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={PLAYTOMIC} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-court-lime text-court-navy font-display font-bold uppercase tracking-wider text-sm px-8 py-4 hover:bg-court-lime/90 transition">
                Book a Court <ArrowRight className="w-4 h-4" />
              </a>
              <Link to="/hull" className="inline-flex items-center gap-2 border border-white/30 text-white font-display font-bold uppercase tracking-wider text-sm px-8 py-4 hover:border-court-lime hover:text-court-lime transition">
                See Hull Venue <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
