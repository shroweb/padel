import { createFileRoute } from "@tanstack/react-router";
import { FadeUp } from "@/components/FadeUp";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { MapPin, Mail, Instagram, Facebook, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact Us — East Coast Padel Hull" },
      {
        name: "description",
        content: "Contact East Coast Padel. Find us at Active+, Harpings Road, Hull HU5 4JF. Email info@eastcoastpadel.co.uk.",
      },
    ],
  }),
});

const hours = [
  { day: "Monday", time: "6:00am - 11:00pm" },
  { day: "Tuesday", time: "6:00am - 11:00pm" },
  { day: "Wednesday", time: "6:00am - 11:00pm" },
  { day: "Thursday", time: "6:00am - 11:00pm" },
  { day: "Friday", time: "6:00am - 11:00pm" },
  { day: "Saturday", time: "6:00am - 11:00pm" },
  { day: "Sunday", time: "6:00am - 11:00pm" },
];

const INSTAGRAM = "https://www.instagram.com/eastcoastpadel.uk?igsh=Mm40YWI1ejU2MGEy";
const FACEBOOK = "https://www.facebook.com/profile.php?id=61574851976436";

function Contact() {
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
            CONTACT
          </span>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <FadeUp>
            <span className="text-court-lime font-display uppercase tracking-widest text-sm">Get In Touch</span>
            <h1 className="mt-4 font-display font-extrabold uppercase text-white leading-[0.88] tracking-tight" style={{ fontSize: "clamp(3rem,11vw,9rem)" }}>
              Contact<br />
              <span className="text-court-lime">Us.</span>
            </h1>
          </FadeUp>
        </div>
      </header>

      {/* Contact details + form */}
      <section className="py-20 sm:py-28 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Left: info */}
          <FadeUp>
            <div className="space-y-10">
              <div>
                <p className="font-display font-bold uppercase tracking-widest text-xs text-court-lime mb-4">Address</p>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-court-lime mt-0.5 shrink-0" />
                  <div>
                    <p className="font-display font-bold uppercase text-xl tracking-wide">Active+, Harpings Rd</p>
                    <p className="text-white/65 mt-1">National Ave, Hull HU5 4JF</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-display font-bold uppercase tracking-widest text-xs text-court-lime mb-4">Email</p>
                <a href="mailto:info@eastcoastpadel.co.uk" className="flex items-center gap-3 text-white/80 hover:text-white transition group">
                  <Mail className="w-5 h-5 text-court-lime shrink-0" />
                  <span className="group-hover:text-court-lime transition">info@eastcoastpadel.co.uk</span>
                </a>
              </div>

              <div>
                <p className="font-display font-bold uppercase tracking-widest text-xs text-court-lime mb-4">Opening Times</p>
                <div className="space-y-3">
                  {hours.map((h) => (
                    <div key={h.day} className="flex items-start gap-3">
                      <Clock className="w-4 h-4 text-court-lime mt-0.5 shrink-0" />
                      <div className="flex justify-between gap-4 w-full">
                        <span className="text-white/70">{h.day}</span>
                        <span className="text-white font-display font-bold uppercase tracking-wide text-sm">{h.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-white/40 text-xs">Hours may vary on public holidays.</p>
              </div>

              <div>
                <p className="font-display font-bold uppercase tracking-widest text-xs text-court-lime mb-4">Follow Us</p>
                <div className="space-y-3">
                  <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white/70 hover:text-white transition">
                    <Instagram className="w-5 h-5 text-court-lime shrink-0" />
                    @eastcoastpadel.uk
                  </a>
                  <a href={FACEBOOK} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white/70 hover:text-white transition">
                    <Facebook className="w-5 h-5 text-court-lime shrink-0" />
                    East Coast Padel
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <p className="font-display font-bold uppercase tracking-widest text-xs text-court-lime mb-3">Questions & Requests</p>
                <p className="text-white/60 text-sm leading-relaxed">
                  Have a question, suggestion or request for us? Fill out some info and we will be in touch shortly. We can't wait to hear from you.
                </p>
              </div>
            </div>
          </FadeUp>

          {/* Right: form */}
          <FadeUp delay={0.15}>
            <div className="bg-white/[0.04] border border-white/10 p-8 sm:p-10">
              <p className="font-display font-bold uppercase tracking-widest text-xs text-court-lime mb-6">Send a Message</p>
              <p className="text-white/60 text-sm mb-8">
                Have a question, suggestion or request? Fill out the form and we'll be in touch shortly.
              </p>
              <form
                action="https://formsubmit.co/info@eastcoastpadel.co.uk"
                method="POST"
                className="space-y-5"
              >
                <input type="hidden" name="_subject" value="East Coast Padel Website Enquiry" />
                <input type="hidden" name="_captcha" value="false" />
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-display font-bold uppercase tracking-wider text-xs text-white/60 mb-2">First Name</label>
                    <input
                      type="text"
                      name="first_name"
                      required
                      className="w-full bg-white/[0.06] border border-white/15 text-white px-4 py-3 text-sm focus:outline-none focus:border-court-lime/60 transition placeholder:text-white/30"
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <label className="block font-display font-bold uppercase tracking-wider text-xs text-white/60 mb-2">Last Name</label>
                    <input
                      type="text"
                      name="last_name"
                      className="w-full bg-white/[0.06] border border-white/15 text-white px-4 py-3 text-sm focus:outline-none focus:border-court-lime/60 transition placeholder:text-white/30"
                      placeholder="Last name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-display font-bold uppercase tracking-wider text-xs text-white/60 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-white/[0.06] border border-white/15 text-white px-4 py-3 text-sm focus:outline-none focus:border-court-lime/60 transition placeholder:text-white/30"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block font-display font-bold uppercase tracking-wider text-xs text-white/60 mb-2">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full bg-white/[0.06] border border-white/15 text-white px-4 py-3 text-sm focus:outline-none focus:border-court-lime/60 transition placeholder:text-white/30 resize-none"
                    placeholder="How can we help?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-court-lime text-court-navy font-display font-bold uppercase tracking-wider py-3.5 hover:bg-court-lime/90 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Map */}
      <section className="px-5 sm:px-10 pb-20 sm:pb-28">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <div className="relative aspect-[16/5] border border-white/15 overflow-hidden">
              <iframe
                title="East Coast Padel location map"
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

      <SiteFooter />
    </div>
  );
}
