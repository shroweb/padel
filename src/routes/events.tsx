import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Instagram } from "lucide-react";
import { FadeUp } from "@/components/FadeUp";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/events")({
  component: Events,
  head: () => ({
    meta: [
      { title: "Coming Up — Court de Padel" },
      {
        name: "description",
        content:
          "Events, tournaments, socials and more at Court de Padel Norwich and Hull. Americano tournaments, Run Club, Ladies Social and much more.",
      },
    ],
  }),
});

const events = [
  {
    tag: "Competitive",
    title: "Americano Tournaments",
    venue: "Norwich & Hull",
    desc: "Regular Americano-style tournaments — a rotating format where you play with and against everyone. Great for meeting new players and competing at every level. No partner needed.",
    img: "https://images.squarespace-cdn.com/content/v1/6777dae8a2db76294b6d4e0e/3387da17-4241-42dc-a098-52f6a8cec5ab/IMG_7604.JPG?format=800w",
  },
  {
    tag: "Social",
    title: "Sunday Run Club",
    venue: "Norwich & Hull",
    desc: "A fun, social run for all members followed by a free coffee. Every Sunday, all abilities welcome. The perfect way to start the week and meet the community.",
    img: "https://images.squarespace-cdn.com/content/v1/6777dae8a2db76294b6d4e0e/e523b9a4-68f1-4c87-99ad-3cb576edb475/unsplash-image-jUGnbZxLziQ.jpg?format=600w",
  },
  {
    tag: "Community",
    title: "Ladies Padel Social",
    venue: "Norwich & Hull",
    desc: "Skills sessions and mini Americano games in a welcoming, all-abilities format. No experience needed — just bring your enthusiasm. Follow us on Instagram for dates.",
    img: "https://images.squarespace-cdn.com/content/v1/6777dae8a2db76294b6d4e0e/9d9b6b25-a935-49fd-adc1-8ba57849b8fc/OYSHO+_+NEW+PADEL+COLLECTION+Discover+the+favourite+look+of+our+Padel+Player+%40carlottacasali+%F0%9F%99%8C%F0%9F%8F%BC+%23oysho+%23padel+%23padelplayers+%23carlottacasali+_+Instagram.jpeg?format=800w",
  },
  {
    tag: "Events",
    title: "Members Nights",
    venue: "Norwich & Hull",
    desc: "Exclusive members-only evenings with free food, drinks and racket hire included. The best perk of membership — check the Playtomic app for upcoming dates.",
    img: "https://images.squarespace-cdn.com/content/v1/6777dae8a2db76294b6d4e0e/9324190f-4e71-4208-8260-be153f68643d/Craft+Beer+Tour+in+Bristol.jpeg?format=600w",
  },
  {
    tag: "Events",
    title: "Sports Screening",
    venue: "Norwich & Hull",
    desc: "Watch Wimbledon, live padel and big sporting events on our screens with drinks in hand. Great atmosphere, great crowd.",
    img: "https://images.squarespace-cdn.com/content/v1/6777dae8a2db76294b6d4e0e/1735913892604-BHVLQR5WH3HLQ38GNYL2/unsplash-image-fRNkZ8-5vDg.jpg?format=600w",
  },
  {
    tag: "Competitive",
    title: "Padel Leagues",
    venue: "Norwich & Hull",
    desc: "Regular singles and doubles leagues across ability groups. Track your progress, climb the ladder and compete in a proper league structure. Sign up through Playtomic.",
    img: "/722809987_18590251195009497_719732711432549501_n.jpg",
  },
];

function Events() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteNav />

      {/* Hero */}
      <header className="relative py-24 sm:py-36 px-5 sm:px-10 overflow-hidden bg-court-blue">
        <div className="absolute inset-0 bg-gradient-to-br from-court-blue via-court-navy to-court-navy/80" />
        <div
          className="absolute inset-0 opacity-[0.04]"
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
            className="font-display font-extrabold uppercase text-white/[0.03] leading-none"
            style={{ fontSize: "clamp(5rem,18vw,13rem)" }}
          >
            EVENTS
          </span>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <FadeUp>
            <span className="text-court-lime font-display uppercase tracking-widest text-sm">What's On</span>
            <h1
              className="mt-4 font-display font-extrabold uppercase text-white leading-[0.88] tracking-tight"
              style={{ fontSize: "clamp(3rem,11vw,9rem)" }}
            >
              Coming<br />
              <span className="text-court-lime">Up</span>
            </h1>
            <p className="mt-8 text-white/65 max-w-xl text-lg leading-relaxed">
              Tournaments, socials, leagues and community events — at both Norwich and Hull.
            </p>
          </FadeUp>
        </div>
      </header>

      {/* Events grid */}
      <section className="py-20 sm:py-28 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {events.map((event, i) => (
              <FadeUp key={event.title} delay={i * 0.08}>
                <div className="group flex flex-col h-full bg-white/[0.04] border border-white/10 hover:border-court-lime/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.img}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-court-navy/50" />
                    <span className="absolute top-4 left-4 font-display font-bold uppercase text-xs tracking-widest bg-court-lime/15 border border-court-lime/30 text-court-lime px-2.5 py-1">
                      {event.tag}
                    </span>
                  </div>
                  <div className="flex flex-col flex-1 p-7">
                    <p className="text-white/40 font-display uppercase tracking-widest text-xs mb-2">{event.venue}</p>
                    <h2 className="font-display font-bold uppercase text-xl tracking-wide leading-tight group-hover:text-court-lime transition-colors duration-200 flex-1">
                      {event.title}
                    </h2>
                    <p className="mt-4 text-white/60 text-sm leading-relaxed">{event.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-20 px-5 sm:px-10 bg-court-navy border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <FadeUp>
            <h2 className="font-display font-extrabold uppercase text-4xl sm:text-5xl">Stay in the Loop</h2>
            <p className="mt-4 text-white/60 max-w-md mx-auto">
              Follow us on Instagram for event announcements, tournament results and what's happening at both clubs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <a
                href="https://www.instagram.com/courtdepadel/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-court-lime text-court-navy font-display font-bold uppercase tracking-wider px-6 py-3.5 hover:bg-court-lime/90 transition"
              >
                <Instagram className="w-4 h-4" /> @courtdepadel (Norwich)
              </a>
              <a
                href="https://www.instagram.com/courtdepadelhull/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-white/30 text-white font-display font-bold uppercase tracking-wider px-6 py-3.5 hover:border-court-lime hover:text-court-lime transition"
              >
                <Instagram className="w-4 h-4" /> @courtdepadelhull
              </a>
            </div>
            <a
              href="https://mailchi.mp/45a651626aad/sign-ups"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-court-lime font-display font-bold uppercase tracking-wider text-sm hover:text-white transition"
            >
              Join the mailing list <ArrowRight className="w-4 h-4" />
            </a>
          </FadeUp>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
