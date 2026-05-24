import { createFileRoute, Link } from "@tanstack/react-router";
import { Instagram, MapPin, Trophy, Users, Sparkles, ArrowRight, Calendar } from "lucide-react";
import { FadeUp } from "@/components/FadeUp";
import { Logo } from "@/components/Logo";
import { CountUp } from "@/components/CountUp";
import { useScrolled } from "@/hooks/use-scrolled";

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
  }),
});

const PLAYTOMIC =
  "https://playtomic.io/tenant/04a4fdf5-418b-4ebb-888b-1ed46cfa8d9c?utm_campaign=share&utm_source=app_ios";

function Norwich() {
  const scrolled = useScrolled(60);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Announcement */}
      <div className="bg-court-navy text-white/90 text-xs sm:text-sm tracking-widest uppercase py-2 px-4 text-center font-display font-semibold">
        Open Now — The Only Indoor Padel Club in Norwich
      </div>

      {/* Nav */}
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
          <a href="#events" className="hover:text-court-lime transition">What's On</a>
          <a href="#pricing" className="hover:text-court-lime transition">Pricing</a>
          <a href="#location" className="hover:text-court-lime transition">Location</a>
          <Link to="/hull" className="hover:text-court-lime transition">Hull</Link>
        </div>
        <a
          href={PLAYTOMIC}
          target="_blank"
          rel="noreferrer"
          className="bg-court-lime text-court-navy font-display font-bold uppercase tracking-wider text-xs sm:text-sm px-4 sm:px-5 py-2.5 hover:bg-court-lime/90 transition"
        >
          Book Now
        </a>
      </nav>

      {/* Hero */}
      <header className="relative min-h-[calc(100vh-140px)] flex items-center px-5 sm:px-10 py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-court-blue via-background to-background" />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-court-lime/10 blur-3xl pointer-events-none" />
        <div className="relative z-10 w-full max-w-6xl mx-auto">
          <FadeUp>
            <span className="inline-flex items-center gap-2 bg-court-lime text-court-navy font-display font-bold uppercase tracking-widest text-xs px-3 py-1.5">
              <span className="w-1.5 h-1.5 bg-court-navy rounded-full" />
              Open Now
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="mt-6 font-display font-extrabold uppercase leading-[0.85] text-[clamp(3.5rem,13vw,11rem)] tracking-tight flex flex-wrap items-baseline gap-x-[0.18em] gap-y-2">
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
              The Only Indoor Club in Norwich
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div className="mt-4 flex items-center gap-3 text-white/65">
              <MapPin className="w-4 h-4 text-court-lime shrink-0" />
              <span>Unit 4 Whiffler Road, Norwich, NR3 2BU</span>
            </div>
          </FadeUp>
          <FadeUp delay={0.4}>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={PLAYTOMIC}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-court-lime text-court-navy font-display font-bold uppercase tracking-wider px-6 py-3 hover:bg-court-lime/90 transition"
              >
                Book a Court <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/courtdepadel/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-white/30 text-white font-display font-bold uppercase tracking-wider px-6 py-3 hover:border-court-lime hover:text-court-lime transition"
              >
                <Instagram className="w-4 h-4" /> @courtdepadel
              </a>
            </div>
          </FadeUp>
        </div>
      </header>

      {/* Stats */}
      <section className="bg-court-navy py-12 sm:py-16 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-6">
          {[
            { n: 6, l: "Double super-panoramic courts" },
            { n: 2, l: "Single super-panoramic courts" },
            { n: 1, prefix: "#", l: "Padel venue in Norfolk" },
            { n: 21, suffix: "d", l: "Member priority booking" },
          ].map((s, i) => (
            <FadeUp
              key={s.l}
              delay={i * 0.1}
              className="text-center sm:text-left sm:border-l-2 sm:border-court-lime/60 sm:pl-6 sm:first:border-l-0 sm:first:pl-0"
            >
              <div className="font-display font-extrabold text-5xl sm:text-6xl text-white tabular-nums">
                <CountUp to={s.n} prefix={s.prefix ?? ""} suffix={s.suffix ?? ""} />
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
              Built for the<br />Game
            </h2>
          </FadeUp>
          <div className="mt-14 grid md:grid-cols-3 gap-5">
            {[
              {
                icon: Trophy,
                title: "6 Double Courts",
                desc: "Six super-panoramic doubles courts for social play, Americano tournaments and leagues — all year round, protected from the English weather.",
              },
              {
                icon: Users,
                title: "2 Singles Courts",
                desc: "Two dedicated singles super-panoramic courts for focused 1v1 coaching, competitive play and private training sessions.",
              },
              {
                icon: Sparkles,
                title: "Table Tennis",
                desc: "Table tennis tables throughout the club — great for warming up, winding down, or just having a laugh between sessions.",
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

      {/* What's On */}
      <section id="events" className="py-20 sm:py-28 px-5 sm:px-10 bg-court-blue/40 border-y border-white/10">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <span className="text-court-lime font-display uppercase tracking-widest text-sm">What's On</span>
            <h2 className="mt-3 font-display font-extrabold uppercase text-5xl sm:text-7xl leading-[0.95]">Events &<br />Activities</h2>
          </FadeUp>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: Calendar,
                title: "Sunday Run Club",
                desc: "A fun social run for all of our members followed by a free coffee. Every Sunday — all levels welcome.",
              },
              {
                icon: Users,
                title: "Ladies Padel Social",
                desc: "Teaching you the best skills in mini Americano style games. A welcoming session for all abilities.",
              },
              {
                icon: Trophy,
                title: "Americano Tournaments",
                desc: "Regular Americano tournaments and mixers — great for meeting new players and improving your game.",
              },
              {
                icon: Sparkles,
                title: "Sports Screen",
                desc: "Watch Wimbledon, live sports and padel on our big screen while enjoying drinks. Great vibes all summer.",
              },
            ].map((e, i) => (
              <FadeUp key={e.title} delay={i * 0.08}>
                <div className="h-full bg-white/[0.06] border border-white/10 p-6 hover:border-court-lime/60 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-10 h-10 bg-court-lime/15 border border-court-lime/30 flex items-center justify-center mb-4">
                    <e.icon className="w-5 h-5 text-court-lime" strokeWidth={2} />
                  </div>
                  <h3 className="font-display font-bold uppercase text-xl tracking-wide text-court-lime">{e.title}</h3>
                  <p className="mt-3 text-white/70 leading-relaxed text-sm">{e.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={0.2}>
            <p className="mt-8 text-white/55 text-sm">
              Follow{" "}
              <a
                href="https://www.instagram.com/courtdepadel/"
                target="_blank"
                rel="noreferrer"
                className="text-court-lime hover:underline"
              >
                @courtdepadel
              </a>{" "}
              on Instagram for the latest events and session times.
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
          <div className="mt-12 grid md:grid-cols-2 gap-5 max-w-3xl">
            {[
              { type: "Doubles Court", offPeak: "£32 / hr", peak: "£44 / hr" },
              { type: "Singles Court", offPeak: "£18 / hr", peak: "£22 / hr" },
            ].map((p, i) => (
              <FadeUp key={p.type} delay={i * 0.1}>
                <div className="h-full bg-white/[0.06] border border-white/10 p-8">
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
          <FadeUp delay={0.2}>
            <div className="mt-6 bg-court-lime/10 border border-court-lime/30 p-6 max-w-3xl">
              <h3 className="font-display font-bold uppercase text-xl tracking-wide text-court-lime">
                Membership — £17.50 / month
              </h3>
              <ul className="mt-4 space-y-2 text-white/75 text-sm leading-relaxed">
                {[
                  "10% off all court bookings",
                  "Free racket hire (normally £5)",
                  "20% off all classes",
                  "Access to member-only events with free food, drinks & racket hire",
                  "21-day priority booking window",
                  "10% off food & drinks",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="text-court-lime mt-0.5 shrink-0">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
          <FadeUp delay={0.25}>
            <p className="mt-4 text-white/50 text-sm max-w-3xl">
              Rental rackets £5 · Balls £5.50 · Equipment included in all classes & private sessions
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <a
              href={PLAYTOMIC}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 bg-court-lime text-court-navy font-display font-bold uppercase tracking-wider text-sm px-6 py-3 hover:bg-court-lime/90 transition"
            >
              Book on Playtomic <ArrowRight className="w-4 h-4" />
            </a>
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
            <a
              href="https://www.google.com/maps/search/?api=1&query=Unit+4+Whiffler+Road+Norwich+NR3+2BU"
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
                title="Court de Padel Norwich map"
                src="https://maps.google.com/maps?q=Unit+4+Whiffler+Road,+Norwich+NR3+2BU&output=embed&z=15"
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
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeUp>
            <h2 className="font-display font-extrabold uppercase text-5xl sm:text-7xl leading-[0.95]">
              Ready to Play?
            </h2>
            <p className="mt-6 text-white/75 max-w-xl mx-auto">
              Book a court online via Playtomic. Available for all levels — whether you've never held a racket or you're chasing a league title.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={PLAYTOMIC}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-court-lime text-court-navy font-display font-bold uppercase tracking-wider px-8 py-4 hover:bg-court-lime/90 transition text-sm"
              >
                Book a Court <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/hull"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-display font-bold uppercase tracking-wider px-8 py-4 hover:border-court-lime hover:text-court-lime transition text-sm"
              >
                See Hull Venue <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-court-blue py-10 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <Logo className="text-base" />
          <p className="text-white/55 text-sm">© 2026 Court de Padel</p>
          <a
            href="https://www.instagram.com/courtdepadel/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-court-lime hover:text-court-navy hover:border-court-lime transition"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </footer>
    </div>
  );
}
