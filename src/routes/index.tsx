import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, ArrowRight, Instagram, Facebook, Mail } from "lucide-react";
import { FadeUp } from "@/components/FadeUp";
import { Marquee } from "@/components/Marquee";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "East Coast Padel — Hull's Home of Padel" },
      {
        name: "description",
        content:
          "East Coast Padel is bringing the dynamic sport of padel to East Yorkshire and North Lincolnshire. Play now at Active+, Harpings Road, Hull HU5 4JF.",
      },
      { property: "og:title", content: "East Coast Padel — Hull's Home of Padel" },
      {
        property: "og:description",
        content: "East Coast Padel is bringing the dynamic sport of padel to East Yorkshire and North Lincolnshire. Now open at Active+, Harpings Road, HU5 4JF.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

const PLAYTOMIC = "https://playtomic.com/clubs/east-coast-padel";
const INSTAGRAM = "https://www.instagram.com/eastcoastpadel.uk?igsh=Mm40YWI1ejU2MGEy";
const FACEBOOK = "https://www.facebook.com/profile.php?id=61574851976436";

const updates = [
  {
    title: "January at ECP",
    desc: "A peek into what's on at East Coast Padel as the year kicks off. Head to Playtomic or contact the coaches for session details.",
    href: "https://www.instagram.com/p/DTLd6CViITD/",
    img: "https://images.squarespace-cdn.com/content/v1/679cf42b2499af300948261a/1766956880001-0X8REG630QU0S3YC2RSH/image-asset.jpeg",
  },
  {
    title: "Festive Padel",
    desc: "Christmas court time and club updates from the ECP team, including seasonal offers and wallet-credit updates.",
    href: "https://www.instagram.com/p/DS0m3HcDjrs/",
    img: "https://images.squarespace-cdn.com/content/v1/679cf42b2499af300948261a/1766166285145-H18243CUBQ0FS5VJGLLF/image-asset.jpeg",
  },
  {
    title: "What's On",
    desc: "Monthly events, coach details, social sessions and club updates for the East Coast Padel community.",
    href: "https://www.instagram.com/p/DSc577dCP7L/",
    img: "https://images.squarespace-cdn.com/content/v1/679cf42b2499af300948261a/1764786519507-01832CDYHO20WIS7HP46/image-asset.jpeg",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteNav />

      {/* Hero */}
      <header className="relative min-h-[calc(100vh-80px)] flex items-center px-5 sm:px-10 py-10 sm:py-14 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.squarespace-cdn.com/content/v1/679cf42b2499af300948261a/29ecf6aa-9646-4824-932b-0ef2f0047fbc/1000036585.jpg"
            alt="East Coast Padel courts"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-court-blue/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-court-blue/30 via-transparent to-background" />
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        </div>
        <div className="relative z-10 w-full max-w-6xl mx-auto">
          <FadeUp>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-flex items-center gap-2 bg-court-lime text-court-navy font-display font-bold uppercase tracking-widest text-xs px-3 py-1.5">
                <span className="w-1.5 h-1.5 bg-court-navy rounded-full animate-pulse" />
                Hull · Now Open
              </span>
            </div>
            <h1 className="font-display font-extrabold uppercase leading-[0.9] text-5xl sm:text-7xl lg:text-8xl tracking-tight max-w-5xl">
              We Are<br />
              <span className="text-court-lime">East Coast</span><br />
              <span className="text-white">Padel</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mt-5 max-w-2xl text-base sm:text-xl text-white/80 leading-relaxed">
              East Coast Padel is bringing the dynamic sport of padel to East Yorkshire and North Lincolnshire.
            </p>
          </FadeUp>
          <FadeUp delay={0.25}>
            <div className="mt-4 flex items-center gap-3 text-white/60">
              <MapPin className="w-4 h-4 text-court-lime shrink-0" />
              <span>Active+, Harpings Road, Hull HU5 4JF</span>
            </div>
          </FadeUp>
          <FadeUp delay={0.35}>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={PLAYTOMIC}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-court-lime text-court-navy font-display font-bold uppercase tracking-wider text-sm px-6 py-3.5 hover:bg-court-lime/90 transition"
              >
                Book Now <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/40 text-white font-display font-bold uppercase tracking-wider text-sm px-6 py-3.5 hover:border-court-lime hover:text-court-lime hover:bg-white/5 transition backdrop-blur-sm"
              >
                About Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </header>

      {/* Marquee */}
      <Marquee
        items={[
          "Hull · Now Open",
          "Cleethorpes · Coming Soon",
          "Indoor Padel Courts",
          "Social Play · Leagues · Tournaments",
          "Book on Playtomic",
          "All Levels Welcome",
          "Hull's First Padel Club",
          "East Yorkshire · North Lincolnshire",
        ]}
      />

      {/* Photo strip */}
      <div className="grid grid-cols-2 md:grid-cols-4">
        {[
          { src: "https://images.squarespace-cdn.com/content/v1/679cf42b2499af300948261a/51065b60-fdba-490e-b4c0-db8f5b377366/1000038673.jpg", alt: "East Coast Padel courts", caption: "The Courts" },
          { src: "https://images.squarespace-cdn.com/content/v1/679cf42b2499af300948261a/6d586a72-5194-42b2-a8f3-b989c451e73e/1000036587.jpg", alt: "Padel players at East Coast Padel", caption: "All Levels" },
          { src: "https://images.squarespace-cdn.com/content/v1/6777dae8a2db76294b6d4e0e/9d9b6b25-a935-49fd-adc1-8ba57849b8fc/OYSHO+_+NEW+PADEL+COLLECTION+Discover+the+favourite+look+of+our+Padel+Player+%40carlottacasali+%F0%9F%99%8C%F0%9F%8F%BC+%23oysho+%23padel+%23padelplayers+%23carlottacasali+_+Instagram.jpeg?format=800w", alt: "Padel player", caption: "Social Play" },
          { src: "https://images.squarespace-cdn.com/content/v1/679cf42b2499af300948261a/29ecf6aa-9646-4824-932b-0ef2f0047fbc/1000036585.jpg", alt: "East Coast Padel", caption: "Game On" },
        ].map((img) => (
          <div key={img.src} className="aspect-square overflow-hidden relative group">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-court-navy/0 group-hover:bg-court-navy/60 transition-all duration-400" />
            <span className="absolute bottom-4 left-4 font-display font-bold uppercase tracking-widest text-xs text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              {img.caption}
            </span>
          </div>
        ))}
      </div>

      {/* Time to Play section */}
      <section className="py-20 sm:py-28 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <span className="text-court-lime font-display uppercase tracking-widest text-sm">Time to Play</span>
            <h2
              className="mt-3 font-display font-extrabold uppercase leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(2.5rem,8vw,6rem)" }}
            >
              Hull's Home<br />
              <span className="text-court-lime">of Padel</span>
            </h2>
            <p className="mt-6 text-white/65 text-lg leading-relaxed">
              Discover the excitement of padel — a fast, fun sport that blends tennis and squash. Whether you're new to sports or a seasoned player, padel offers an accessible, social experience.
            </p>
            <p className="mt-4 text-white/65 leading-relaxed">
              Get active, have fun, and join the growing global community. Try it today at Hull's first padel club!
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={PLAYTOMIC}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-court-lime text-court-navy font-display font-bold uppercase tracking-wider text-sm px-6 py-3.5 hover:bg-court-lime/90 transition"
              >
                Book a Court <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 border border-white/30 text-white font-display font-bold uppercase tracking-wider text-sm px-6 py-3.5 hover:border-court-lime hover:text-court-lime transition"
              >
                Learn More
              </Link>
            </div>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Hull's first", sub: "padel club", accent: true },
                { label: "All levels", sub: "welcome", accent: false },
                { label: "Book online", sub: "via Playtomic", accent: false },
                { label: "East Yorkshire", sub: "and North Lincolnshire", accent: true },
              ].map((s) => (
                <div
                  key={s.label}
                  className={`p-6 border ${s.accent ? "border-court-lime/40 bg-court-lime/5" : "border-white/10 bg-white/[0.04]"}`}
                >
                  <p className={`font-display font-extrabold uppercase text-2xl sm:text-3xl ${s.accent ? "text-court-lime" : "text-white"}`}>
                    {s.label}
                  </p>
                  <p className="mt-1 text-white/50 font-display uppercase tracking-wider text-xs">{s.sub}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Location / Map */}
      <section className="py-20 sm:py-28 px-5 sm:px-10 bg-court-navy/60 border-y border-white/10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <FadeUp>
            <span className="text-court-lime font-display uppercase tracking-widest text-sm">Find Us</span>
            <h2 className="mt-3 font-display font-extrabold uppercase text-5xl sm:text-6xl leading-[0.95]">Visit the Club</h2>
            <div className="mt-8 flex items-start gap-4">
              <MapPin className="w-6 h-6 text-court-lime mt-1 shrink-0" />
              <div>
                <p className="font-display font-bold uppercase text-xl tracking-wide">Active+, Harpings Road</p>
                <p className="text-white/70">National Avenue, Kingston Upon Hull, HU5 4JF</p>
              </div>
            </div>
            <p className="mt-6 text-white/60 leading-relaxed max-w-md">
              Right in the heart of west Hull. Plenty of parking on site. Easy to find — we're inside the Active+ sports complex.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Active+Plus+Harpings+Road+Hull+HU5+4JF"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-court-lime text-court-navy font-display font-bold uppercase tracking-wider text-sm px-5 py-3 hover:bg-court-lime/90 transition"
              >
                Get Directions <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-white/30 text-white font-display font-bold uppercase tracking-wider text-sm px-5 py-3 hover:border-court-lime hover:text-court-lime transition"
              >
                Contact Us
              </Link>
            </div>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="relative aspect-[4/3] border border-white/15 overflow-hidden">
              <iframe
                title="East Coast Padel map"
                src="https://maps.google.com/maps?q=Active+Plus+Harpings+Road+Hull+HU5+4JF&output=embed&z=15"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Latest updates */}
      <section className="py-20 sm:py-28 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
              <div>
                <span className="text-court-lime font-display uppercase tracking-widest text-sm">Latest Updates</span>
                <h2 className="mt-3 font-display font-extrabold uppercase text-4xl sm:text-5xl leading-[0.95]">
                  What's On<br />
                  <span className="text-court-lime">at ECP</span>
                </h2>
              </div>
              <p className="text-white/60 max-w-md leading-relaxed">
                Club news, social sessions and monthly updates direct from East Coast Padel.
              </p>
            </div>
          </FadeUp>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {updates.map((update, i) => (
              <FadeUp key={update.title} delay={i * 0.08}>
                <a
                  href={update.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group block h-full border border-white/10 bg-white/[0.04] hover:border-court-lime/50 transition"
                >
                  <div className="aspect-[4/5] overflow-hidden bg-white/5">
                    <img
                      src={update.img}
                      alt={update.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <p className="font-display font-bold uppercase text-lg text-white group-hover:text-court-lime transition">{update.title}</p>
                    <p className="mt-3 text-white/60 text-sm leading-relaxed">{update.desc}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-court-lime font-display font-bold uppercase tracking-wider text-xs">
                      View on Instagram <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </a>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Mailing list / Follow */}
      <section className="py-20 sm:py-28 px-5 sm:px-10 bg-court-blue">
        <div className="max-w-4xl mx-auto text-center">
          <FadeUp>
            <span className="text-court-lime font-display uppercase tracking-widest text-sm">Stay Connected</span>
            <h2 className="mt-3 font-display font-extrabold uppercase text-4xl sm:text-6xl leading-[0.95]">
              Follow the Action
            </h2>
            <p className="mt-5 text-white/60 max-w-md mx-auto">
              Follow us on Instagram and Facebook for events, tournaments, social sessions and everything happening at East Coast Padel.
            </p>
            <form
              action="https://formsubmit.co/info@eastcoastpadel.co.uk"
              method="POST"
              className="mt-8 mx-auto flex w-full max-w-xl flex-col gap-2 sm:flex-row"
              aria-label="Join the East Coast Padel mailing list"
            >
              <input type="hidden" name="_subject" value="East Coast Padel Mailing List Signup" />
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="email"
                name="email"
                required
                placeholder="Email address"
                className="flex-1 bg-white/[0.08] border border-white/20 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-court-lime/70 transition"
              />
              <button
                type="submit"
                className="bg-court-lime text-court-navy font-display font-bold uppercase tracking-wider px-6 py-3 hover:bg-court-lime/90 transition"
              >
                Sign Up
              </button>
            </form>
            <p className="mt-3 text-white/45 text-sm">Join our mailing list to get the latest updates from us.</p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-court-lime text-court-navy font-display font-bold uppercase tracking-wider px-6 py-3.5 hover:bg-court-lime/90 transition"
              >
                <Instagram className="w-4 h-4" /> Instagram
              </a>
              <a
                href={FACEBOOK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-white/30 text-white font-display font-bold uppercase tracking-wider px-6 py-3.5 hover:border-court-lime hover:text-court-lime transition"
              >
                <Facebook className="w-4 h-4" /> Facebook
              </a>
            </div>
            <a
              href="mailto:info@eastcoastpadel.co.uk"
              className="mt-6 inline-flex items-center gap-2 text-court-lime font-display font-bold uppercase tracking-wider text-sm hover:text-white transition"
            >
              <Mail className="w-4 h-4" /> info@eastcoastpadel.co.uk
            </a>
          </FadeUp>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
