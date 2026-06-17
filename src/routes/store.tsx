import { createFileRoute } from "@tanstack/react-router";
import { FadeUp } from "@/components/FadeUp";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/store")({
  component: Store,
  head: () => ({
    meta: [
      { title: "Store — East Coast Padel | Rackets & Merchandise" },
      {
        name: "description",
        content: "Shop Dunlop padel rackets and East Coast Padel merchandise. Rackets, t-shirts, hoodies, hats and more.",
      },
    ],
  }),
});

const rackets = [
  {
    name: "Dunlop Aero-Star Lite",
    level: "£84.99",
    desc: "The perfect starter racket. Lightweight and forgiving, ideal for new players picking up the game.",
    img: "https://images.squarespace-cdn.com/content/v1/679cf42b2499af300948261a/32f68c8e-7684-49e9-9150-4d37cc72e263/10335747_DP23_Aerostar_Lite_Front_grey_1.png",
    href: "https://eastcoastpadel.co.uk/store/p/aero-star-lite",
    available: true,
  },
  {
    name: "Dunlop Aero-Star",
    level: "£92.99",
    desc: "A versatile all-round racket for developing players. Excellent control and power balance.",
    img: "https://images.squarespace-cdn.com/content/v1/679cf42b2499af300948261a/6a982f48-6235-45d8-a3ad-a6c93b84d2f9/10335746_DP23_Aerostar_Front_grey_1.png",
    href: "https://eastcoastpadel.co.uk/store/p/aero-star",
    available: true,
  },
  {
    name: "Dunlop Aero-Star Pro",
    level: "£175.00",
    desc: "The pro-level performance racket. High power and precision for experienced padel players.",
    img: "https://images.squarespace-cdn.com/content/v1/679cf42b2499af300948261a/1b65d57e-29b9-4052-a4df-a84b22511b7b/10335745_DP23_AerostarPro_Front_grey_1.png",
    href: "https://eastcoastpadel.co.uk/store/p/dunlop-aero-star-pro",
    available: false,
  },
];

const merch = [
  {
    name: "ECP Classic Heavyweight T-Shirt",
    price: "£23.00",
    desc: "Garment-dyed heavyweight tee in multiple colourways. The ECP logo front and centre.",
    img: "https://images.squarespace-cdn.com/content/v1/679cf42b2499af300948261a/1761909326375-3UKPX5FP6SXI3VULR4YU/unisex-garment-dyed-heavyweight-t-shirt-white-front-69049a472277e.jpg",
    href: "https://eastcoastpadel.co.uk/store/p/ecp-classic-heavyweight-t-shirt",
  },
  {
    name: "ECP Classic Hoodie",
    price: "£27.00",
    desc: "A heavy-blend unisex hoodie. Available in multiple colours — perfect for post-court warmth.",
    img: "https://images.squarespace-cdn.com/content/v1/679cf42b2499af300948261a/1761909787296-WIGAF5VQJ42BGEDL6E7K/unisex-heavy-blend-hoodie-sport-grey-front-69049c0fc891d.jpg",
    href: "https://eastcoastpadel.co.uk/store/p/ecp-classic-hoodie",
  },
  {
    name: "ECP Classic Dad Hat",
    price: "£20.00",
    desc: "The ECP embroidered dad hat. Clean, structured and ready for the court or the street.",
    img: "https://images.squarespace-cdn.com/content/v1/679cf42b2499af300948261a/1761909923925-URUPZZ008PG4PB8EHBO3/classic-dad-hat-black-front-69049c9816138.jpg",
    href: "https://eastcoastpadel.co.uk/store/p/ecp-classic-dad-hat",
  },
];

function Store() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteNav />

      {/* Hero */}
      <header className="relative py-24 sm:py-32 px-5 sm:px-10 overflow-hidden bg-court-blue">
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
            STORE
          </span>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <FadeUp>
            <span className="text-court-lime font-display uppercase tracking-widest text-sm">ECP Shop</span>
            <h1 className="mt-4 font-display font-extrabold uppercase text-white leading-[0.88] tracking-tight" style={{ fontSize: "clamp(3rem,11vw,9rem)" }}>
              Gear &amp;<br />
              <span className="text-court-lime">Merch</span>
            </h1>
            <p className="mt-8 text-white/65 max-w-xl text-lg leading-relaxed">
              Dunlop padel rackets and East Coast Padel merchandise. Click through to purchase on our store.
            </p>
          </FadeUp>
        </div>
      </header>

      {/* Rackets */}
      <section className="py-20 sm:py-28 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <span className="text-court-lime font-display uppercase tracking-widest text-sm">Equipment</span>
            <h2 className="mt-3 font-display font-extrabold uppercase text-5xl sm:text-6xl leading-[0.95]">Padel Rackets</h2>
          </FadeUp>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {rackets.map((r, i) => (
              <FadeUp key={r.name} delay={i * 0.1}>
                <div className={`group flex flex-col h-full bg-white/[0.04] border ${r.available ? "border-white/10 hover:border-court-lime/50" : "border-white/5 opacity-60"} transition-all duration-300 overflow-hidden`}>
                  <div className="relative bg-white/5 p-8 flex items-center justify-center h-64">
                    <img
                      src={r.img}
                      alt={r.name}
                      className="h-full w-auto object-contain mix-blend-lighten"
                      loading="lazy"
                    />
                    <span className={`absolute top-4 left-4 font-display font-bold uppercase text-xs tracking-widest px-2.5 py-1 ${r.available ? "bg-court-lime/15 border border-court-lime/30 text-court-lime" : "bg-white/10 border border-white/20 text-white/40"}`}>
                      {r.available ? r.level : "Sold Out"}
                    </span>
                  </div>
                  <div className="flex flex-col flex-1 p-7">
                    <h3 className="font-display font-bold uppercase text-xl tracking-wide group-hover:text-court-lime transition-colors duration-200">{r.name}</h3>
                    <p className="mt-3 text-white/60 text-sm leading-relaxed flex-1">{r.desc}</p>
                    {r.available ? (
                      <a
                        href={r.href}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-6 inline-flex items-center gap-2 bg-court-lime text-court-navy font-display font-bold uppercase tracking-wider text-sm px-5 py-3 hover:bg-court-lime/90 transition self-start"
                      >
                        Buy Now <ArrowRight className="w-4 h-4" />
                      </a>
                    ) : (
                      <span className="mt-6 inline-flex items-center font-display font-bold uppercase tracking-wider text-sm text-white/30 self-start">
                        Out of Stock
                      </span>
                    )}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Merch */}
      <section className="py-20 sm:py-28 px-5 sm:px-10 bg-court-navy/60 border-y border-white/10">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <span className="text-court-lime font-display uppercase tracking-widest text-sm">Apparel</span>
            <h2 className="mt-3 font-display font-extrabold uppercase text-5xl sm:text-6xl leading-[0.95]">ECP Merch</h2>
          </FadeUp>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {merch.map((m, i) => (
              <FadeUp key={m.name} delay={i * 0.1}>
                <div className="group flex flex-col h-full bg-white/[0.04] border border-white/10 hover:border-court-lime/50 transition-all duration-300 overflow-hidden">
                  <div className="relative bg-white/90 p-6 flex items-center justify-center h-64">
                    <img
                      src={m.img}
                      alt={m.name}
                      className="h-full w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col flex-1 p-7">
                    <h3 className="font-display font-bold uppercase text-lg tracking-wide group-hover:text-court-lime transition-colors duration-200">{m.name}</h3>
                    <p className="mt-1 font-display font-bold uppercase tracking-widest text-court-lime text-sm">{m.price}</p>
                    <p className="mt-3 text-white/60 text-sm leading-relaxed flex-1">{m.desc}</p>
                    <a
                      href={m.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-2 bg-court-lime text-court-navy font-display font-bold uppercase tracking-wider text-sm px-5 py-3 hover:bg-court-lime/90 transition self-start"
                    >
                      Shop Now <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
