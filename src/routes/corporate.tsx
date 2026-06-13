import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { FadeUp } from "@/components/FadeUp";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/corporate")({
  component: Corporate,
  head: () => ({
    meta: [
      { title: "Corporate Events — Court de Padel" },
      {
        name: "description",
        content:
          "Corporate padel events at Court de Padel Norwich and Hull. Team days, client entertaining, charity events and league nights — fully tailored.",
      },
    ],
  }),
});

function Corporate() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteNav />

      {/* Hero */}
      <header className="relative py-24 sm:py-36 px-5 sm:px-10 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.squarespace-cdn.com/content/v1/67a13ab7b86cc617d43f803a/1742490680659-FD3SIHX6XICQJMDSTFFT/DSCF8558.jpg"
            alt=""
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-court-navy/85" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "linear-gradient(var(--court-lime) 1px, transparent 1px), linear-gradient(90deg, var(--court-lime) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
        <div
          className="absolute inset-0 flex items-center justify-end pr-10 pointer-events-none select-none overflow-hidden"
          aria-hidden
        >
          <span
            className="font-display font-extrabold uppercase text-white/[0.04] leading-none"
            style={{ fontSize: "clamp(5rem,18vw,13rem)" }}
          >
            CORPORATE
          </span>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <FadeUp>
            <span className="text-court-lime font-display uppercase tracking-widest text-sm">For Teams & Businesses</span>
            <h1
              className="mt-4 font-display font-extrabold uppercase text-white leading-[0.88] tracking-tight"
              style={{ fontSize: "clamp(3rem,10vw,8rem)" }}
            >
              Team Days,<br />
              <span className="text-court-lime">Done Right.</span>
            </h1>
            <p className="mt-8 text-white/65 max-w-xl text-lg leading-relaxed">
              Court bookings, Americano tournaments, coaching, food and drink — fully-tailored corporate events at both our Norwich and Hull venues.
            </p>
            <a
              href="mailto:hello@courtdepadel.com"
              className="mt-10 inline-flex items-center gap-2 bg-court-lime text-court-navy font-display font-bold uppercase tracking-wider px-6 py-3.5 hover:bg-court-lime/90 transition"
            >
              Enquire Now <ArrowRight className="w-4 h-4" />
            </a>
          </FadeUp>
        </div>
      </header>

      {/* What's included */}
      <section className="py-20 sm:py-28 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <span className="text-court-lime font-display uppercase tracking-widest text-sm">What's Included</span>
            <h2 className="mt-3 font-display font-extrabold uppercase text-4xl sm:text-6xl leading-[0.9]">
              Everything<br />Sorted
            </h2>
          </FadeUp>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Court Hire",
                desc: "Exclusive use of multiple courts for your group. We accommodate teams of any size — from 8 to 80+.",
              },
              {
                title: "Americano Tournament",
                desc: "We run a structured Americano tournament format so everyone plays with and against everyone. No padel experience needed.",
              },
              {
                title: "Professional Coaching",
                desc: "Our pros can run skills clinics before the tournament, or provide on-court support throughout your event.",
              },
              {
                title: "Bar & Food",
                desc: "We handle the food and drinks from arrival through to the awards ceremony. Bespoke menus available on request.",
              },
              {
                title: "Equipment Provided",
                desc: "All rackets, balls and kit provided — your team just needs to show up. Branded merchandise available.",
              },
              {
                title: "Trophy & Awards",
                desc: "We provide a proper tournament experience with results tracking, leaderboard and a winner's ceremony.",
              },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.07}>
                <div className="group bg-white/[0.04] border border-white/10 p-8 hover:border-court-lime/60 hover:-translate-y-1 transition-all duration-300 h-full">
                  <span className="relative left-0 top-0 block w-8 h-1 bg-court-lime mb-6 group-hover:w-12 transition-all duration-300" />
                  <h3 className="font-display font-bold uppercase text-xl tracking-wide">{item.title}</h3>
                  <p className="mt-3 text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect for */}
      <section className="py-20 sm:py-28 px-5 sm:px-10 bg-court-navy">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <span className="text-court-lime font-display uppercase tracking-widest text-sm">Perfect For</span>
            <h2 className="mt-3 font-display font-extrabold uppercase text-4xl sm:text-6xl leading-[0.9]">
              Every Kind<br />of Event
            </h2>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Team away days",
                "Client entertaining",
                "Charity fundraisers",
                "Company league nights",
                "Staff parties",
                "Sales incentives",
                "Networking events",
                "Product launches",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-white/80 text-sm">
                  <Check className="w-4 h-4 text-court-lime shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="relative aspect-[4/3] overflow-hidden border border-white/15">
              <img
                src="https://images.squarespace-cdn.com/content/v1/67a13ab7b86cc617d43f803a/1742490716700-MPHPQVPPWHD9JTT4ZCFH/DSCF8472.jpg"
                alt="Corporate padel event"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-court-navy/60 to-transparent" />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 sm:py-32 px-5 sm:px-10 overflow-hidden bg-court-blue">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "linear-gradient(var(--court-lime) 1px, transparent 1px), linear-gradient(90deg, var(--court-lime) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeUp>
            <h2 className="font-display font-extrabold uppercase text-5xl sm:text-7xl leading-[0.9]">
              Let's Plan<br />
              <span className="text-court-lime">Your Event</span>
            </h2>
            <p className="mt-6 text-white/65 max-w-xl mx-auto text-lg">
              Get in touch and we'll put together a bespoke package for your team. Both Norwich and Hull available.
            </p>
            <a
              href="mailto:hello@courtdepadel.com"
              className="mt-10 inline-flex items-center gap-2 bg-court-lime text-court-navy font-display font-bold uppercase tracking-wider px-8 py-4 text-base hover:bg-court-lime/90 transition"
            >
              hello@courtdepadel.com <ArrowRight className="w-4 h-4" />
            </a>
          </FadeUp>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
