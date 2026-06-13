import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FadeUp } from "@/components/FadeUp";
import { Marquee } from "@/components/Marquee";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/press")({
  component: Press,
  head: () => ({
    meta: [
      { title: "Press — Court de Padel" },
      {
        name: "description",
        content:
          "Court de Padel in the news — coverage from Hull Live, BBC, FR Evening News and more.",
      },
      { property: "og:title", content: "Press — Court de Padel is Making a Racket" },
    ],
  }),
});

const articles = [
  {
    source: "Hull Daily Mail",
    date: "Jul 2025",
    tag: "Hull",
    headline: "Plans for new sports centre submitted to Hull City Council",
    excerpt:
      "It would have eight indoor sports courts and an outdoor padel court.",
    href: "https://www.hulldailymail.co.uk/news/hull-east-yorkshire-news/plans-new-indoor-sports-centre-10368020",
  },
  {
    source: "BBC",
    date: "2025",
    tag: "Sport",
    headline: "Padel is for everybody, says comedian Manford",
    excerpt:
      "Jason Manford is visiting padel courts across the UK during his stand-up tour — part of a campaign to get a million children playing padel.",
    href: "https://www.bbc.co.uk/news/articles/c620xvlryy8o",
  },
  {
    source: "hullisthis.news",
    date: "11 Nov 2025",
    tag: "Hull",
    headline: "Court De Padel to open new Padel centre in Hull",
    excerpt:
      "Court De Padel announces its newest venue at Unit 3, National Business Park, Bontoft Avenue, HU5 4HF.",
    href: "https://hullisthis.news/court-de-padel-to-open-new-padel-centre-in-hull/",
  },
  {
    source: "BBC",
    date: "24 Aug 2025",
    tag: "Planning",
    headline: "Communal living plan includes eight padel courts",
    excerpt:
      "Eight padel courts are being proposed as part of redevelopment plans for a disused railway siding.",
    href: "https://www.bbc.co.uk/news/articles/c4gzxvrzww0o",
    byline: "Alison Stephenson",
  },
  {
    source: "Stoke Sentinel",
    date: "27 Aug 2025",
    tag: "Expansion",
    headline: "National chain wants to open Stoke-on-Trent sports centre with cafe and shop",
    excerpt:
      "Court de Padel is looking to bring a new indoor sports centre, complete with café and shop, to Stoke-on-Trent.",
    href: "https://www.stokesentinel.co.uk/whats-on/whats-on-news/national-chain-wants-open-stoke-10453781",
    byline: "Rob Andrews",
  },
  {
    source: "Evening News",
    date: "10 Aug 2025",
    tag: "Norwich",
    headline: "New sports centre in Kirkham House to open next month",
    excerpt:
      "Court De Padel has been revealed as the new business to open an indoor sports centre at Kirkham House, in Whiffler Road.",
    href: "https://www.eveningnews24.co.uk/news/25368596.new-sports-centre-kirkham-house-open-next-month/",
    byline: "Francis Redwood",
  },
  {
    source: "Rhyl Journal",
    date: "2025",
    tag: "Expansion",
    headline: "Plans approved for indoor padel centre in Prestatyn",
    excerpt:
      "Plans for a new indoor padel centre in Prestatyn have been given the green light, as Court de Padel continues its national expansion.",
    href: "https://www.rhyljournal.co.uk/news/25892383.plans-approved-ideal-indoor-padel-centre-prestatyn/",
  },
  {
    source: "PPH Commercial",
    date: "2025",
    tag: "Hull",
    headline: "Hull's first indoor padel court",
    excerpt:
      "Court de Padel Hull is bringing Hull's first indoor padel courts to the National Business Park on Bontoft Avenue.",
    href: "https://pph-commercial.co.uk/hulls-first-indoor-padel-court/",
  },
];

const marqueeItems = [
  "Hull Daily Mail",
  "BBC Sport",
  "Evening News Norwich",
  "Stoke Sentinel",
  "Rhyl Journal",
  "PPH Commercial",
  "hullisthis.news",
  "National Coverage",
  "BBC",
  "Local Press",
];

const pressLogos = [
  { name: "Hull Daily Mail", short: "HDM" },
  { name: "BBC", short: "BBC" },
  { name: "Evening News", short: "EN" },
  { name: "Stoke Sentinel", short: "Sentinel" },
  { name: "Rhyl Journal", short: "Rhyl" },
  { name: "PPH Commercial", short: "PPH" },
];

function Press() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteNav />

      {/* Hero */}
      <header className="relative py-24 sm:py-36 px-5 sm:px-10 overflow-hidden bg-court-blue">
        <div className="absolute inset-0 bg-gradient-to-br from-court-blue via-court-navy to-court-navy/80" />
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(var(--court-lime) 1px, transparent 1px), linear-gradient(90deg, var(--court-lime) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-court-lime/8 blur-3xl pointer-events-none" />

        {/* Watermark */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden
        >
          <span
            className="font-display font-extrabold uppercase text-white/[0.025] leading-none whitespace-nowrap"
            style={{ fontSize: "clamp(6rem,25vw,18rem)" }}
          >
            PRESS
          </span>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <FadeUp>
            <span className="inline-flex items-center gap-2 text-court-lime font-display uppercase tracking-widest text-sm mb-6">
              <span className="w-1.5 h-1.5 bg-court-lime rounded-full animate-pulse" />
              Press &amp; Media
            </span>
            <h1
              className="font-display font-extrabold uppercase text-white leading-[0.88] tracking-tight"
              style={{ fontSize: "clamp(3rem,11vw,9rem)" }}
            >
              Court De Padel
              <br />
              <span className="text-court-lime">Is Making</span>
              <br />A Racket
            </h1>
            <p className="mt-8 text-white/65 max-w-xl text-lg leading-relaxed">
              From Hull to Norwich and beyond — Court de Padel is in the news.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="mailto:hello@courtdepadel.com"
                className="inline-flex items-center gap-2 bg-court-lime text-court-navy font-display font-bold uppercase tracking-wider px-6 py-3 hover:bg-court-lime/90 transition"
              >
                Press Enquiries <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#articles"
                className="inline-flex items-center gap-2 border border-white/30 text-white font-display font-bold uppercase tracking-wider px-6 py-3 hover:border-court-lime hover:text-court-lime transition"
              >
                Read Coverage
              </a>
            </div>
          </FadeUp>
        </div>
      </header>

      {/* Marquee */}
      <div className="bg-court-lime py-3 overflow-hidden">
        <Marquee speed={35}>
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-4 text-court-navy font-display font-bold uppercase tracking-widest text-sm mx-6"
            >
              {item}
              <span className="w-1 h-1 bg-court-navy/40 rounded-full" />
            </span>
          ))}
        </Marquee>
      </div>

      {/* Gallery */}
      <section className="grid grid-cols-2 lg:grid-cols-4 h-[340px] sm:h-[420px]">
        {[
          {
            img: "/722809987_18590251195009497_719732711432549501_n.jpg",
            caption: "Hull Courts",
            sub: "Now Open",
          },
          {
            img: "https://images.squarespace-cdn.com/content/v1/67a13ab7b86cc617d43f803a/1742490680659-FD3SIHX6XICQJMDSTFFT/DSCF8558.jpg",
            caption: "Norwich Courts",
            sub: "Open Now",
          },
          {
            img: "https://images.squarespace-cdn.com/content/v1/67a13ab7b86cc617d43f803a/1742490716700-MPHPQVPPWHD9JTT4ZCFH/DSCF8472.jpg",
            caption: "Club Atmosphere",
            sub: "Social Padel",
          },
          {
            img: "https://images.squarespace-cdn.com/content/v1/67a13ab7b86cc617d43f803a/1742490645127-G2C7HW4O5OFIYPUIIS55/DSCF8535.jpg",
            caption: "Premium Facilities",
            sub: "Super-Panoramic Courts",
          },
        ].map((item, i) => (
          <div key={i} className="relative overflow-hidden group cursor-pointer">
            <img
              src={item.img}
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-court-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="font-display font-bold uppercase text-white text-lg leading-tight tracking-wide">
                {item.caption}
              </p>
              <p className="text-court-lime font-display uppercase tracking-widest text-xs mt-1">
                {item.sub}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* As Featured In */}
      <section className="bg-court-navy py-10 px-5 sm:px-10 border-y border-white/10">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-white/35 font-display uppercase tracking-widest text-xs mb-8">
            As Featured In
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-14">
            {pressLogos.map((logo) => (
              <span
                key={logo.name}
                className="font-display font-bold uppercase tracking-wider text-white/40 text-sm hover:text-white/70 transition-colors duration-200 cursor-default"
              >
                {logo.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-20 sm:py-28 px-5 sm:px-10 overflow-hidden">
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          aria-hidden
        >
          <span
            className="font-display font-extrabold uppercase text-white/[0.03] leading-none whitespace-nowrap"
            style={{ fontSize: "clamp(8rem,30vw,22rem)" }}
          >
            MEDIA
          </span>
        </div>
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {[
              { value: "8+", label: "Press Articles" },
              { value: "3", label: "Cities Covered" },
              { value: "BBC", label: "National Coverage" },
              { value: "2026", label: "National Expansion" },
            ].map((stat, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="text-center border border-white/10 bg-white/[0.03] p-8 hover:border-court-lime/40 transition-colors duration-300">
                  <div className="font-display font-extrabold uppercase text-court-lime text-4xl sm:text-5xl tracking-tight">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-white/50 font-display uppercase tracking-widest text-xs">
                    {stat.label}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section id="articles" className="py-20 sm:py-28 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <div className="mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-court-lime font-display uppercase tracking-widest text-sm">Latest Coverage</span>
                <h2 className="mt-2 font-display font-extrabold uppercase text-3xl sm:text-4xl tracking-tight">
                  In The News
                </h2>
              </div>
              <p className="text-white/50 text-sm max-w-sm">
                From local headlines to national features — the padel story is being told.
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {articles.map((article, i) => (
              <FadeUp key={article.headline} delay={i * 0.07}>
                <a
                  href={article.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col h-full bg-white/[0.04] border border-white/10 p-8 hover:border-court-lime/60 hover:-translate-y-1 hover:bg-white/[0.07] transition-all duration-300 overflow-hidden"
                >
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span className="inline-block font-display font-bold uppercase text-xs tracking-widest bg-court-lime/15 border border-court-lime/30 text-court-lime px-2.5 py-1">
                      {article.tag}
                    </span>
                    <span className="text-white/40 text-xs font-display uppercase tracking-wider shrink-0">
                      {article.date}
                    </span>
                  </div>

                  <p className="text-white/50 text-xs font-display uppercase tracking-widest mb-3">
                    {article.source}
                    {article.byline && (
                      <span className="ml-2 text-white/35 normal-case font-sans not-italic">
                        · {article.byline}
                      </span>
                    )}
                  </p>

                  <h2 className="font-display font-bold uppercase text-xl sm:text-2xl tracking-wide leading-[1.1] flex-1 group-hover:text-court-lime transition-colors duration-200">
                    {article.headline}
                  </h2>

                  <p className="mt-4 text-white/60 leading-relaxed text-sm">
                    {article.excerpt}
                  </p>

                  <div className="mt-6 flex items-center gap-2 font-display font-bold uppercase tracking-widest text-xs text-court-lime">
                    Read Article
                    <ArrowUpRight className="w-4 h-4 -translate-y-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-1 transition-transform duration-200" />
                  </div>
                </a>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Press Enquiries CTA */}
      <section className="relative py-20 sm:py-28 px-5 sm:px-10 bg-court-navy overflow-hidden">
        <div
          className="absolute inset-0 flex items-center justify-end pr-10 pointer-events-none select-none overflow-hidden"
          aria-hidden
        >
          <span
            className="font-display font-extrabold uppercase text-white/[0.04] leading-none whitespace-nowrap"
            style={{ fontSize: "clamp(6rem,18vw,14rem)" }}
          >
            CONTACT
          </span>
        </div>

        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "linear-gradient(var(--court-lime) 1px, transparent 1px), linear-gradient(90deg, var(--court-lime) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeUp>
              <span className="inline-flex items-center gap-2 text-court-lime font-display uppercase tracking-widest text-sm mb-4">
                <span className="w-1.5 h-1.5 bg-court-lime rounded-full animate-pulse" />
                Get In Touch
              </span>
              <h2
                className="font-display font-extrabold uppercase text-white leading-[0.9] tracking-tight"
                style={{ fontSize: "clamp(2.5rem,7vw,5.5rem)" }}
              >
                Press
                <br />
                <span className="text-court-lime">Enquiries</span>
              </h2>
              <p className="mt-6 text-white/60 text-lg leading-relaxed max-w-md">
                For media enquiries, interview requests, photography assets, or to arrange a site visit — we'd love to hear from you.
              </p>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="bg-white/[0.05] border border-white/10 p-8 sm:p-10">
                <div className="space-y-6">
                  {[
                    { label: "General Press", value: "hello@courtdepadel.com" },
                    { label: "Instagram", value: "@courtdepadel" },
                    { label: "Norwich Venue", value: "Kirkham House, Whiffler Road, NR3" },
                    { label: "Hull Venue", value: "Unit 1–3 National Business Park, Bontoft Ave, HU5 4HF" },
                  ].map((item) => (
                    <div key={item.label} className="border-b border-white/10 pb-5 last:border-0 last:pb-0">
                      <p className="text-white/40 font-display uppercase tracking-widest text-xs mb-1">
                        {item.label}
                      </p>
                      <p className="text-white font-display font-bold text-lg tracking-wide">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
                <a
                  href="mailto:hello@courtdepadel.com"
                  className="mt-8 w-full flex items-center justify-center gap-2 bg-court-lime text-court-navy font-display font-bold uppercase tracking-wider py-4 hover:bg-court-lime/90 transition"
                >
                  Send Us a Message <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
