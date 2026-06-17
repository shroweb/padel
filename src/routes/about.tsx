import { createFileRoute } from "@tanstack/react-router";
import { FadeUp } from "@/components/FadeUp";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — East Coast Padel | Join the Padel Movement" },
      {
        name: "description",
        content: "About East Coast Padel — who we are, what is padel, FAQs and everything you need to know about Hull's first padel club.",
      },
    ],
  }),
});

const PLAYTOMIC = "https://playtomic.com/clubs/east-coast-padel";

const faqs = [
  {
    q: "Who can play?",
    a: "Everyone! Padel is one of the most accessible racket sports out there. Whether you're a complete beginner or a seasoned athlete, the game is easy to pick up and endlessly fun to improve at. All ages and abilities are welcome.",
  },
  {
    q: "How do I book?",
    a: "All bookings are made through the Playtomic app. Download it on iOS or Android, search for East Coast Padel, and you can book courts up to 14 days in advance. You can hold up to 2 active bookings at a time.",
  },
  {
    q: "Is equipment provided?",
    a: "Yes — rackets and balls are available to hire at the club. We also sell Dunlop padel rackets in our on-site store if you're ready to get your own kit. Check our Store page for what's available.",
  },
  {
    q: "Are there facilities on site?",
    a: "Yes, there are a full range of facilities including showers, changing rooms, restrooms and a fully licensed café/bar. We're located inside the Active+ sports complex on Harpings Road.",
  },
  {
    q: "What are your opening times?",
    a: "We're open 7 days a week. Check the Playtomic app for live availability and session times, or get in touch via our Contact page for more info.",
  },
  {
    q: "Do you offer group sessions or coaching?",
    a: "Absolutely. We run regular social sessions, Americano tournaments, leagues and coaching sessions for all levels. Follow us on Instagram or check Playtomic for upcoming events.",
  },
];

function About() {
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
        <div className="absolute inset-0 flex items-center justify-end pr-10 pointer-events-none select-none overflow-hidden" aria-hidden>
          <span className="font-display font-extrabold uppercase text-white/[0.03] leading-none" style={{ fontSize: "clamp(5rem,18vw,13rem)" }}>
            ABOUT
          </span>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <FadeUp>
            <span className="text-court-lime font-display uppercase tracking-widest text-sm">East Coast Padel</span>
            <h1 className="mt-4 font-display font-extrabold uppercase text-white leading-[0.88] tracking-tight" style={{ fontSize: "clamp(3rem,11vw,9rem)" }}>
              Join the<br />
              <span className="text-court-lime">Movement</span>
            </h1>
            <p className="mt-8 text-white/65 max-w-xl text-lg leading-relaxed">
              Hull's first padel club — built by four friends who love sport, community and the fastest-growing racket game in the world.
            </p>
          </FadeUp>
        </div>
      </header>

      {/* Who Are We */}
      <section className="py-20 sm:py-28 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <span className="text-court-lime font-display uppercase tracking-widest text-sm">Who Are We?</span>
            <h2 className="mt-3 font-display font-extrabold uppercase text-5xl sm:text-6xl leading-[0.95]">
              Four Friends.<br />One Vision.
            </h2>
            <p className="mt-6 text-white/65 leading-relaxed text-lg">
              Four friends, driven by a shared passion for sports and local community, are investing in a new padel club to energise their local area.
            </p>
            <p className="mt-4 text-white/65 leading-relaxed">
              Combining our entrepreneurial spirit with a love for the game, we aim to create a modern, welcoming facility where people of all ages can enjoy padel's fast-paced action.
            </p>
            <p className="mt-4 text-white/65 leading-relaxed">
              The vision is to build more than just courts — we want to foster a hub for fitness, fun, and social connection. By bringing this growing sport to the neighbourhood, we hope to promote an active lifestyle and strengthen community ties, making the club a go-to destination for all sport enthusiasts.
            </p>
            <a
              href={PLAYTOMIC}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 bg-court-lime text-court-navy font-display font-bold uppercase tracking-wider text-sm px-6 py-3.5 hover:bg-court-lime/90 transition"
            >
              Book a Court <ArrowRight className="w-4 h-4" />
            </a>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="relative overflow-hidden border border-white/15">
              <img
                src="https://images.squarespace-cdn.com/content/v1/679cf42b2499af300948261a/51065b60-fdba-490e-b4c0-db8f5b377366/1000038673.jpg"
                alt="East Coast Padel courts"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* What is Padel */}
      <section className="py-20 sm:py-28 px-5 sm:px-10 bg-court-navy/60 border-y border-white/10">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <span className="text-court-lime font-display uppercase tracking-widest text-sm">The Sport</span>
            <h2 className="mt-3 font-display font-extrabold uppercase text-5xl sm:text-6xl leading-[0.95]">
              What is Padel?
            </h2>
          </FadeUp>
          <div className="mt-14 grid md:grid-cols-2 gap-12 items-start">
            <FadeUp delay={0.1}>
              <p className="text-white/70 leading-relaxed text-lg">
                Padel is a fast-paced, sociable racquet sport that combines elements of tennis and squash. Played in doubles or singles on an enclosed court with glass walls, it uses solid, stringless racquets and a lower-pressure tennis ball.
              </p>
              <p className="mt-4 text-white/70 leading-relaxed">
                The game's unique twist is the ability to play off the walls, adding a strategic dimension. With underarm serves and a smaller court size, padel is easy to learn and accessible for all ages and skill levels.
              </p>
              <p className="mt-4 text-white/70 leading-relaxed">
                Padel originated in Mexico in 1969 when Enrique Corcuera adapted tennis for his walled backyard. The sport quickly spread to Spain and Argentina before gaining global popularity — and it's now arriving in Hull.
              </p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Easy to Learn", desc: "Pick it up in minutes regardless of experience" },
                  { label: "Social Sport", desc: "Doubles format — always play with friends" },
                  { label: "Wall Play", desc: "Use the glass walls for tactical advantage" },
                  { label: "All Ages", desc: "Suitable for everyone from kids to seniors" },
                  { label: "Great Fitness", desc: "Fast rallies and constant movement" },
                  { label: "Fast Growing", desc: "The world's fastest-growing racket sport" },
                ].map((f, i) => (
                  <div key={f.label} className="bg-white/[0.05] border border-white/10 p-5 hover:border-court-lime/40 transition">
                    <p className="font-display font-bold uppercase tracking-wide text-court-lime text-sm">{f.label}</p>
                    <p className="mt-2 text-white/60 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 sm:py-28 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <span className="text-court-lime font-display uppercase tracking-widest text-sm">FAQs</span>
            <h2 className="mt-3 font-display font-extrabold uppercase text-5xl sm:text-6xl leading-[0.95]">
              Frequently Asked<br />Questions
            </h2>
          </FadeUp>
          <div className="mt-14 grid md:grid-cols-2 gap-5">
            {faqs.map((faq, i) => (
              <FadeUp key={faq.q} delay={i * 0.07}>
                <div className="h-full bg-white/[0.04] border border-white/10 p-7 hover:border-court-lime/40 transition-colors duration-300">
                  <p className="font-display font-bold uppercase tracking-wide text-lg text-court-lime">{faq.q}</p>
                  <p className="mt-4 text-white/65 leading-relaxed text-sm">{faq.a}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 px-5 sm:px-10 bg-court-blue">
        <div className="max-w-4xl mx-auto text-center">
          <FadeUp>
            <h2 className="font-display font-extrabold uppercase text-4xl sm:text-6xl">Ready to Play?</h2>
            <p className="mt-5 text-white/60 max-w-md mx-auto">
              Book a court on Playtomic or get in touch if you have any questions.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <a
                href={PLAYTOMIC}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-court-lime text-court-navy font-display font-bold uppercase tracking-wider px-8 py-4 hover:bg-court-lime/90 transition"
              >
                Book Now <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@eastcoastpadel.co.uk"
                className="inline-flex items-center gap-2 border border-white/30 text-white font-display font-bold uppercase tracking-wider px-8 py-4 hover:border-court-lime hover:text-court-lime transition"
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
