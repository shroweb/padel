import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/FadeUp";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/faq")({
  component: FAQ,
  head: () => ({
    meta: [
      { title: "FAQs — Court de Padel" },
      {
        name: "description",
        content:
          "Everything you need to know about Court de Padel — booking, pricing, membership, equipment, locations and more.",
      },
    ],
  }),
});

const PLAYTOMIC =
  "https://playtomic.io/tenant/04a4fdf5-418b-4ebb-888b-1ed46cfa8d9c?utm_campaign=share&utm_source=app_ios";

const faqs = [
  {
    category: "Getting Here",
    items: [
      {
        q: "Where are you based?",
        a: "We have two venues: Norwich — Unit 4 Whiffler Road, NR3 2BU, and Hull — Unit 1–3 National Business Park, Bontoft Ave, HU5 4HF. Both are now open.",
      },
      {
        q: "Is there parking?",
        a: "Yes — both venues have free on-site parking. Hull has loads of space at the National Business Park. Norwich has parking at Kirkham House.",
      },
    ],
  },
  {
    category: "Booking",
    items: [
      {
        q: "How do I book a court?",
        a: "All bookings are made through Playtomic — the world's leading padel booking platform. Download the app or book online. Hit 'Book Now' in the nav.",
      },
      {
        q: "How far in advance can I book?",
        a: "Standard members can book up to 7 days in advance. Premium members get 21-day priority booking — a big advantage for peak times.",
      },
      {
        q: "Can I cancel or reschedule?",
        a: "Yes. Cancellations made more than 24 hours before your session are fully refunded. Within 24 hours, the booking is non-refundable.",
      },
    ],
  },
  {
    category: "Pricing",
    items: [
      {
        q: "How much does it cost?",
        a: "Norwich doubles: £34 off-peak / £44 peak per hour. Singles: £20 off-peak / £24 peak. Hull pricing is similar — check Playtomic for the latest rates.",
      },
      {
        q: "What is off-peak?",
        a: "Off-peak is generally weekday daytime slots (before 5pm). Peak is evenings and weekends. Exact off-peak windows are shown in the Playtomic app.",
      },
      {
        q: "Do members get a discount?",
        a: "Yes — members get 10% off all court bookings, plus discounts on classes, BodyReset sessions, food and merchandise.",
      },
    ],
  },
  {
    category: "Membership",
    items: [
      {
        q: "What does membership include?",
        a: "£17.50 per person per month. Includes 10% off courts, MODO Pilates, food & drinks, access to members-only events (with free food, drinks and racket hire), 20% off classes, BodyReset and merch, plus 21-day priority booking.",
      },
      {
        q: "How do I sign up?",
        a: "You can join through Playtomic or speak to a member of our team at either venue. Membership is rolling monthly with no long-term contract.",
      },
    ],
  },
  {
    category: "Equipment & Courts",
    items: [
      {
        q: "Do I need to bring equipment?",
        a: "No. Rackets are available to hire for £4 (free for members). Balls cost £6.50. All equipment is provided for lessons and classes.",
      },
      {
        q: "How many courts do you have?",
        a: "Each venue has 6 double super-panoramic courts and 2 single super-panoramic courts. Hull also has professional pickleball courts.",
      },
      {
        q: "Are the courts indoor?",
        a: "All courts are fully indoor. We're padel in England — we've got you covered for the weather.",
      },
      {
        q: "What is a super-panoramic court?",
        a: "Super-panoramic courts have full glass walls on all sides — no solid walls, just floor-to-ceiling glass. Better visibility, better atmosphere, and the ball plays off the glass more predictably.",
      },
    ],
  },
  {
    category: "Events & Socials",
    items: [
      {
        q: "Do you run beginner sessions?",
        a: "Yes — we run beginner-friendly Americano sessions, group lessons and intro clinics. No experience needed, just enthusiasm.",
      },
      {
        q: "What social events do you run?",
        a: "Regular Americano tournaments, Sunday Run Club, Ladies Padel Social, corporate events and members-only evenings. Follow our Instagram for the latest dates.",
      },
    ],
  },
];

function FAQ() {
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
            FAQs
          </span>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <FadeUp>
            <span className="text-court-lime font-display uppercase tracking-widest text-sm">Need to Know</span>
            <h1
              className="mt-4 font-display font-extrabold uppercase text-white leading-[0.88] tracking-tight"
              style={{ fontSize: "clamp(3rem,11vw,9rem)" }}
            >
              Frequently<br />
              <span className="text-court-lime">Asked</span>
            </h1>
            <p className="mt-8 text-white/65 max-w-xl text-lg leading-relaxed">
              Everything you need to know before you show up and play.
            </p>
          </FadeUp>
        </div>
      </header>

      {/* FAQs */}
      <section className="py-20 sm:py-28 px-5 sm:px-10">
        <div className="max-w-5xl mx-auto space-y-16">
          {faqs.map((group, gi) => (
            <FadeUp key={group.category} delay={gi * 0.05}>
              <div>
                <h2 className="font-display font-bold uppercase text-court-lime tracking-widest text-sm mb-6 border-b border-white/10 pb-4">
                  {group.category}
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {group.items.map((item, i) => (
                    <div key={i} className="bg-white/[0.04] border border-white/10 p-6 hover:border-court-lime/40 transition">
                      <h3 className="font-display font-bold uppercase text-lg tracking-wide text-white">{item.q}</h3>
                      <p className="mt-3 text-white/65 leading-relaxed text-sm">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-5 sm:px-10 bg-court-navy border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <FadeUp>
            <h2 className="font-display font-extrabold uppercase text-4xl sm:text-5xl">Still got questions?</h2>
            <p className="mt-4 text-white/60">Drop us a message and we'll come back to you quickly.</p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:hello@courtdepadel.com"
                className="inline-flex items-center gap-2 bg-court-lime text-court-navy font-display font-bold uppercase tracking-wider px-6 py-3.5 hover:bg-court-lime/90 transition"
              >
                hello@courtdepadel.com <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={PLAYTOMIC}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-white/30 text-white font-display font-bold uppercase tracking-wider px-6 py-3.5 hover:border-court-lime hover:text-court-lime transition"
              >
                Book a Court <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
