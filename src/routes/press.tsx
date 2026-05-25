import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FadeUp } from "@/components/FadeUp";
import { Logo } from "@/components/Logo";
import { useScrolled } from "@/hooks/use-scrolled";

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
      "Court De Padel announces its newest venue at Unit 3, National Business Park, Bontoft Avenue, HU5 4HF — opening to the public in March 2026.",
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
      "Court De Padel has been revealed as the new business to open an indoor sports centre at Kirkham House, in Whiffler Road — opening its doors next month.",
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

function Press() {
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
        <Link to="/" aria-label="Court de Padel home">
          <Logo size={scrolled ? 36 : 44} />
        </Link>
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 font-display uppercase tracking-wider text-sm text-white">
          <Link to="/" className="hover:text-court-lime transition">Home</Link>
          <Link to="/norwich" className="hover:text-court-lime transition">Norwich</Link>
          <Link to="/hull" className="hover:text-court-lime transition">Hull</Link>
          <Link to="/press" className="text-court-lime">Press</Link>
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
      <header className="relative py-24 sm:py-32 px-5 sm:px-10 overflow-hidden bg-court-blue">
        <div className="absolute inset-0 bg-gradient-to-br from-court-blue to-court-navy" />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-court-lime/8 blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <FadeUp>
            <span className="text-court-lime font-display uppercase tracking-widest text-sm">Press &amp; Media</span>
            <h1 className="mt-4 font-display font-extrabold uppercase leading-[0.9] text-[clamp(3rem,11vw,9rem)] tracking-tight">
              Court De Padel<br />Is Making<br />A Racket
            </h1>
            <p className="mt-8 text-white/65 max-w-xl text-lg">
              From Hull to Norwich and beyond — Court de Padel is in the news.
            </p>
          </FadeUp>
        </div>
      </header>

      {/* Articles */}
      <section className="py-20 sm:py-28 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {articles.map((article, i) => (
              <FadeUp key={article.headline} delay={i * 0.07}>
                <a
                  href={article.href}
                  target={article.href !== "#" ? "_blank" : undefined}
                  rel={article.href !== "#" ? "noreferrer" : undefined}
                  className="group flex flex-col h-full bg-white/[0.06] border border-white/10 p-8 hover:border-court-lime/60 hover:-translate-y-1 hover:bg-white/[0.08] transition-all duration-300 overflow-hidden"
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
                      <span className="ml-2 text-white/35 normal-case font-sans not-italic">· {article.byline}</span>
                    )}
                  </p>

                  <h2 className="font-display font-bold uppercase text-xl sm:text-2xl tracking-wide leading-[1.1] flex-1 group-hover:text-court-lime transition-colors duration-200">
                    {article.headline}
                  </h2>

                  <p className="mt-4 text-white/60 leading-relaxed text-sm">
                    {article.excerpt}
                  </p>

                  <div className="mt-6 flex items-center gap-2 font-display font-bold uppercase tracking-widest text-xs text-court-lime">
                    Read
                    <ArrowUpRight className="w-4 h-4 -translate-y-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-1 transition-transform duration-200" />
                  </div>
                </a>
              </FadeUp>
            ))}
          </div>

          {/* Press enquiries */}
          <FadeUp delay={0.3}>
            <div className="mt-16 border-t border-white/10 pt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h2 className="font-display font-bold uppercase text-2xl tracking-wide">Press Enquiries</h2>
                <p className="mt-2 text-white/60 text-sm">
                  For media enquiries, interview requests or press assets, get in touch.
                </p>
              </div>
              <a
                href="mailto:hello@courtdepadel.com"
                className="inline-flex items-center gap-2 bg-court-lime text-court-navy font-display font-bold uppercase tracking-wider text-sm px-6 py-3 hover:bg-court-lime/90 transition shrink-0"
              >
                hello@courtdepadel.com <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-court-blue py-10 px-5 sm:px-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <Logo />
          <div className="flex items-center gap-6 font-display uppercase tracking-wider text-sm text-white/60">
            <Link to="/" className="hover:text-court-lime transition">Home</Link>
            <Link to="/norwich" className="hover:text-court-lime transition">Norwich</Link>
            <Link to="/hull" className="hover:text-court-lime transition">Hull</Link>
          </div>
          <p className="text-white/40 text-sm">© 2026 Court de Padel</p>
        </div>
      </footer>
    </div>
  );
}
