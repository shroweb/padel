import { createFileRoute } from "@tanstack/react-router";
import { FadeUp } from "@/components/FadeUp";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/terms")({
  component: Terms,
  head: () => ({
    meta: [
      { title: "Terms & Conditions — East Coast Padel" },
      { name: "description", content: "East Coast Padel terms and conditions for court bookings, membership and use of facilities." },
    ],
  }),
});

const sections = [
  {
    title: "1. Responsibilities of Lead and Linked Players",
    content: `a. All players attending a court booking or activity are jointly and individually responsible under these Terms and Conditions.

b. This means: Any instructions regarding the booking (including cancellations) provided by one player will be treated as authorized by all players associated with that booking. Each player is responsible for payment of all relevant booking fees, including those for themselves, other attending players, and any linked players (adults or children). Each player is also responsible for any additional charges incurred for extra services or activities used by themselves or their linked players at the Club.

c. These Terms and Conditions apply to you and all linked players unless stated otherwise.

d. All lead and linked players must comply with the Club's rules and regulations as outlined in this document.`,
  },
  {
    title: "2. Court Bookings & Fees",
    content: `a. All bookings must be made via our third-party partner, Playtomic. Their platform governs the booking process, timing, and required information.

b. We reserve the right to modify our booking terms and conditions at any time.

c. Payments for court and activity bookings must be made via the Playtomic app.

d. For full Playtomic legal terms, visit: https://playtomic.io/legal-conditions`,
  },
  {
    title: "3. Court Fees",
    content: `a. East Coast Padel reserves the right to increase court and activity fees at any time.

b. Notice of any price changes will be given by updating the pricing on our website and in the Playtomic app.`,
  },
  {
    title: "4. Court Booking Rights, Restrictions and Cancellations",
    content: `a. Bookings can be made up to 14 days in advance as standard.

b. Each user may hold a maximum of 2 active bookings at any one time.

c. A maximum of 2 bookings per day is allowed.

d. Players can cancel bookings via the Playtomic app up to 24 hours before the match to receive a full and automatic refund. Within 24 hours, a cancellation/refund will only be applied if the courts are deemed unplayable (at the Club's discretion). During severe weather conditions (high winds, snow, thunder and lightning), the courts may be deemed unplayable at the Club's discretion and communicated to players where possible. If the Club decides to close due to weather conditions, players will have the choice to either rearrange the match or receive a full Club credit onto their Playtomic account wallet.

e. If you fail to cancel at least 24 hours in advance, you will be automatically charged via Playtomic.`,
  },
  {
    title: "5. Complaints",
    content: `a. We aim to deliver excellent service, but if you have any concerns or complaints, please raise them as soon as possible so they can be addressed promptly.

b. Complaints should be directed to info@eastcoastpadel.co.uk`,
  },
  {
    title: "6. Changes to Facilities, Services, and Activities",
    content: `a. We may temporarily or permanently withdraw or adjust services and facilities for reasons such as maintenance, cleaning, or security.

b. Where possible, we will notify you of such changes via email, text or phone.

c. In the event of closures beyond our control, we will make every effort to keep players informed.

d. Club opening and closing times are displayed on our website and may vary on public holidays or during seasonal periods. We aim to provide at least one month's notice of any permanent change to operating hours.`,
  },
  {
    title: "7. Liability",
    content: `a. We are not responsible for any loss or damage to your or your guests' personal property while on Club premises unless due to our negligence or failure to exercise reasonable care.

b. We are not liable for any injury or death occurring on the premises unless caused by our negligence.

c. These Terms and Conditions do not affect your statutory consumer rights.`,
  },
  {
    title: "8. General Health and Safety",
    content: `a. Glassware or crockery is not permitted outside unless provided by the Club.

b. Animals are not allowed inside Club facilities, except for registered guide dogs.

c. Please observe all health and safety signage. Ask a staff member if anything is unclear.

d. In case of fire, evacuate via the nearest exit to the designated assembly point in the car park.

e. Any accidents or injuries must be reported immediately to the first aid officer inside Active+.

f. Smoking and vaping are strictly prohibited within Club premises.

g. Respectful and appropriate behaviour and attire are required at all times. We reserve the right to refuse entry or ask individuals to leave if behaviour or appearance is deemed unsuitable.

h. Do not attend the Club if you have an infectious illness.

i. Appropriate footwear for the court surface must be worn (e.g., non-marking shoes).`,
  },
  {
    title: "9. Children's Safety",
    content: `a. Children under 16 must be supervised at all times by someone over 18, unless participating in a supervised Club activity.

b. If you are unable to attend a supervised activity, a named immediate family member may attend in your place, but cannot use other Club facilities.

c. Children must be signed in and out of supervised activities, with collection arrangements clearly communicated in advance.

d. Children with infectious illnesses are not permitted in the Club.`,
  },
  {
    title: "10. Car Park Use",
    content: `a. The shared Active+ car park is for members while using Club facilities only.

b. Parking is on a first-come, first-served basis and not guaranteed.

c. Use of the car park is at your own risk. The Club is not responsible for damage, loss, or theft involving vehicles or contents.`,
  },
  {
    title: "11. Personal Belongings",
    content: `a. All personal belongings are brought to the Club at your own risk. We accept no responsibility for loss or damage.

b. Any items left unattended may be removed. Lost property is held temporarily before being donated to charity.

c. If you find any lost property, please hand it in at reception.`,
  },
  {
    title: "12. Photography and Video",
    content: `a. You may take photos and videos for personal use only, and must follow Club rules.

b. You may not photograph or film children under 18 unless they are your own.

c. You must obtain consent from any individuals who appear in your recordings.

d. If another player objects or a staff member asks you to stop filming, you must comply immediately.

e. The Club may ask to review or request deletion of images in case of complaint.`,
  },
  {
    title: "13. Changes to Terms and Conditions",
    content: `a. East Coast Padel may amend these Terms and Conditions, including any player rights or restrictions, at any time.

b. Notification of updates will be posted on the Club's website or social media. Members are encouraged to regularly review the website and any Club communications.`,
  },
];

function Terms() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteNav />

      {/* Hero */}
      <header className="relative py-20 sm:py-28 px-5 sm:px-10 overflow-hidden bg-court-blue">
        <div className="absolute inset-0 bg-gradient-to-br from-court-blue via-court-navy to-court-navy/80" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <FadeUp>
            <span className="text-court-lime font-display uppercase tracking-widest text-sm">Legal</span>
            <h1 className="mt-4 font-display font-extrabold uppercase text-white text-5xl sm:text-7xl leading-[0.95]">
              Terms &amp;<br />
              <span className="text-court-lime">Conditions</span>
            </h1>
          </FadeUp>
        </div>
      </header>

      {/* Content */}
      <section className="py-16 sm:py-24 px-5 sm:px-10">
        <div className="max-w-3xl mx-auto">
          <p className="text-white/50 text-sm mb-12 border-l-2 border-court-lime/50 pl-4">
            Please read these terms carefully before making a booking or visiting East Coast Padel.
            By using our facilities, you agree to be bound by the following conditions.
          </p>
          <div className="space-y-10">
            {sections.map((s) => (
              <FadeUp key={s.title}>
                <div>
                  <h2 className="font-display font-bold uppercase tracking-wide text-xl text-court-lime mb-4">{s.title}</h2>
                  <div className="text-white/65 text-sm leading-relaxed whitespace-pre-line">{s.content}</div>
                </div>
              </FadeUp>
            ))}
          </div>
          <div className="mt-16 pt-8 border-t border-white/10 text-white/40 text-xs">
            <p>East Coast Padel · Active+, Harpings Road, Hull HU5 4JF · info@eastcoastpadel.co.uk</p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
