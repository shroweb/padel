import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/FadeUp";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/what-is-padel")({
  component: WhatIsPadel,
  head: () => ({
    meta: [
      { title: "What is Padel? — Court de Padel" },
      {
        name: "description",
        content:
          "New to padel? Learn about the world's fastest-growing racket sport — how it's played, why it's so addictive, and how to get started at Court de Padel.",
      },
    ],
  }),
});

const PLAYTOMIC =
  "https://playtomic.io/tenant/04a4fdf5-418b-4ebb-888b-1ed46cfa8d9c?utm_campaign=share&utm_source=app_ios";

function WhatIsPadel() {
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
            style={{ fontSize: "clamp(6rem,22vw,16rem)" }}
          >
            PADEL
          </span>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <FadeUp>
            <span className="text-court-lime font-display uppercase tracking-widest text-sm">The Sport</span>
            <h1
              className="mt-4 font-display font-extrabold uppercase text-white leading-[0.88] tracking-tight"
              style={{ fontSize: "clamp(3rem,11vw,9rem)" }}
            >
              What is<br />
              <span className="text-court-lime">Padel?</span>
            </h1>
            <p className="mt-8 text-white/65 max-w-xl text-lg leading-relaxed">
              The world's fastest-growing racket sport. Easy to pick up, impossible to put down.
            </p>
          </FadeUp>
        </div>
      </header>

      {/* Intro */}
      <section className="py-20 sm:py-28 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeUp>
            <div className="space-y-5 text-white/75 leading-relaxed text-lg">
              <p>
                Padel is a racket sport that blends the best elements of tennis and squash. Played in doubles on an enclosed glass-and-mesh court roughly a third the size of a tennis court — it's fast, social, and seriously addictive.
              </p>
              <p>
                You serve underarm, use solid (perforated) rackets with no strings, and the walls are in play. That's it. Most beginners are having proper rallies within minutes.
              </p>
              <p>
                It's the fastest-growing sport in the world — over 25 million players across 90+ countries — and it's finally arrived in Hull and Norwich.
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="relative aspect-[4/3] overflow-hidden border border-white/15">
              <img
                src="/722809987_18590251195009497_719732711432549501_n.jpg"
                alt="Padel court at Court de Padel Hull"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-court-navy/50 to-transparent" />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Key facts */}
      <section className="py-20 sm:py-28 px-5 sm:px-10 bg-court-navy">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <span className="text-court-lime font-display uppercase tracking-widest text-sm">The Basics</span>
            <h2 className="mt-3 font-display font-extrabold uppercase text-4xl sm:text-6xl leading-[0.9]">
              How It Works
            </h2>
          </FadeUp>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                num: "01",
                title: "Doubles Format",
                desc: "Padel is almost always played as doubles — two vs two. It's inherently social, which is why it spreads so fast.",
              },
              {
                num: "02",
                title: "Walls Are in Play",
                desc: "The glass and metal mesh walls surrounding the court are fair game. Balls can bounce off them, creating angles that don't exist in any other sport.",
              },
              {
                num: "03",
                title: "Underarm Serve",
                desc: "You serve underarm, below waist height, after letting the ball bounce once. No power serving required — it levels the playing field.",
              },
              {
                num: "04",
                title: "Solid Rackets",
                desc: "Padel uses a solid, stringless racket — shorter than a tennis racket, with perforations. Much easier on the arm than tennis.",
              },
              {
                num: "05",
                title: "Fast Rallies",
                desc: "Because the court is smaller and walls are in play, rallies are longer and more exciting — even for total beginners.",
              },
              {
                num: "06",
                title: "Any Level",
                desc: "We run sessions from absolute beginners to competitive league players. If you can hold a racket, you can play padel.",
              },
            ].map((item, i) => (
              <FadeUp key={item.num} delay={i * 0.07}>
                <div className="relative bg-white/[0.04] border border-white/10 p-8 hover:border-court-lime/50 hover:-translate-y-1 transition-all duration-300">
                  <span className="absolute top-5 right-6 font-display font-extrabold text-5xl text-white/[0.06] leading-none select-none">
                    {item.num}
                  </span>
                  <span className="font-display font-bold text-court-lime text-xs tracking-widest uppercase">{item.num}</span>
                  <h3 className="mt-3 font-display font-bold uppercase text-xl tracking-wide">{item.title}</h3>
                  <p className="mt-3 text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <div className="grid grid-cols-2 lg:grid-cols-4 h-[300px] sm:h-[380px]">
        {[
          { img: "https://images.squarespace-cdn.com/content/v1/67a13ab7b86cc617d43f803a/1742490680659-FD3SIHX6XICQJMDSTFFT/DSCF8558.jpg", caption: "Norwich Courts" },
          { img: "/722809987_18590251195009497_719732711432549501_n.jpg", caption: "Hull Courts" },
          { img: "https://images.squarespace-cdn.com/content/v1/6777dae8a2db76294b6d4e0e/59cc6eef-a51a-4001-89bc-827fed2fd44c/6+700%2B+Padel+Photos%2C+taleaux+et+images+libre+de+droits.jpeg?format=800w", caption: "Game On" },
          { img: "https://images.squarespace-cdn.com/content/v1/6777dae8a2db76294b6d4e0e/9d9b6b25-a935-49fd-adc1-8ba57849b8fc/OYSHO+_+NEW+PADEL+COLLECTION+Discover+the+favourite+look+of+our+Padel+Player+%40carlottacasali+%F0%9F%99%8C%F0%9F%8F%BC+%23oysho+%23padel+%23padelplayers+%23carlottacasali+_+Instagram.jpeg?format=800w", caption: "Every Level" },
        ].map((item, i) => (
          <div key={i} className="relative overflow-hidden group">
            <img src={item.img} alt={item.caption} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-court-navy/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="font-display font-bold uppercase text-white text-base tracking-wide">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <section className="py-20 sm:py-28 px-5 sm:px-10 bg-court-lime">
        <div className="max-w-3xl mx-auto text-center">
          <FadeUp>
            <h2 className="font-display font-extrabold uppercase text-court-navy text-5xl sm:text-7xl leading-[0.9]">
              Ready to<br />Try It?
            </h2>
            <p className="mt-6 text-court-navy/75 max-w-xl mx-auto text-lg">
              Book a court at Norwich or Hull and give padel a go. First timers welcome — we'll sort you out with everything you need.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <a
                href={PLAYTOMIC}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-court-navy text-white font-display font-bold uppercase tracking-wider px-8 py-4 hover:bg-court-navy/90 transition"
              >
                Book a Court <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/faq"
                className="inline-flex items-center gap-2 border-2 border-court-navy text-court-navy font-display font-bold uppercase tracking-wider px-8 py-4 hover:bg-court-navy hover:text-white transition"
              >
                Read the FAQs <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
