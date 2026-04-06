import React, { useState } from "react";
import { useBooking } from "@/components/BookingModal";
import { motion } from "framer-motion";
import {
  Gift, CheckCircle2, ChevronDown, Star, ArrowRight, Anchor, MapPin,
  Clock, Users, BadgeCheck, Camera, ChevronLeft, Heart, Music, Wine, Sparkles, Waves, Sun, Gem
} from "lucide-react";
import { SiteNavbar, SiteFooter, WaveDivider, SiteMobileBookingBar } from "@/components/layout";

function GoogleG() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

const faqs = [
  {
    q: "How many people can come on the birthday cruise?",
    a: "Birthday party cruises accommodate up to 12 guests on our private skiff. For groups larger than 12, we recommend upgrading to our Roamer IV charter (up to 23 guests) — ask us about availability when booking."
  },
  {
    q: "Can we bring a birthday cake or food?",
    a: "Absolutely! You're welcome to bring food, a birthday cake, and anything else to make the celebration special. We provide a large cooler with ice for drinks. No glass bottles on deck please."
  },
  {
    q: "Can we bring alcohol?",
    a: "Yes! BYOB is fully welcome on private charters. Bring champagne, wine, seltzers — whatever fits the mood. We ask guests to enjoy responsibly as our captain is USCG certified and guest safety is always priority one."
  },
  {
    q: "Can we play our own music?",
    a: "Yes — Bluetooth speaker on board. Connect your phone, play your birthday playlist, and set the perfect party vibe. Your boat, your music."
  },
  {
    q: "What if we want to do a shark tooth hunt or beach stop?",
    a: "That's one of our most popular birthday add-ons! We can incorporate a private barrier island beach stop for shark tooth hunting into the 3-hour and 4-hour packages. Just let us know when booking."
  },
  {
    q: "How far in advance should we book?",
    a: "We recommend booking 2–4 weeks in advance, and 4–6 weeks for summer weekends and peak season. Birthday cruises are popular — don't wait too long!"
  },
  {
    q: "Is the boat 100% private?",
    a: "Yes, always. Your birthday cruise is exclusively for your group — no strangers, no shared space. The entire boat is yours from departure to return."
  }
];

const packageOptions = [
  {
    icon: <Waves className="h-6 w-6" />,
    title: "2-Hour Birthday Cruise",
    duration: "2 Hours",
    desc: "Cruise through Shem Creek and Charleston Harbor, spot dolphins, and celebrate against the backdrop of the Ravenel Bridge. Perfect for a memorable birthday with your closest friends.",
    priceRange: "$350 – $1,200",
    note: "Up to 12 guests",
    tag: "Quick Celebration",
    color: "text-blue-400"
  },
  {
    icon: <Gem className="h-6 w-6" />,
    title: "3-Hour Birthday Cruise",
    duration: "3 Hours",
    desc: "Add a remote beach stop to your birthday — shark tooth hunting, swimming in shallow water, and a private barrier island most Charleston visitors never see. Wildly memorable.",
    priceRange: "$450 – $1,750",
    note: "Up to 12 guests",
    tag: "Most Popular",
    color: "text-primary"
  },
  {
    icon: <Sun className="h-6 w-6" />,
    title: "4-Hour Birthday Cruise",
    duration: "4 Hours",
    desc: "The full birthday experience: private beach, shark tooth hunt, dolphin watching, and a golden hour sunset cruise back to Shem Creek. An extraordinary birthday that everyone will talk about for years.",
    priceRange: "$550 – $2,200",
    note: "Up to 12 guests",
    tag: "Best Experience",
    color: "text-yellow-400"
  }
];

const whyUs = [
  { icon: <Heart className="h-5 w-5" />, title: "100% Private — Just Your Crew", desc: "No strangers, no shared space. The entire boat is yours for the birthday celebration." },
  { icon: <Music className="h-5 w-5" />, title: "Bluetooth Stereo", desc: "Connect your playlist and set the birthday vibe. Your music, your boat, your day." },
  { icon: <Wine className="h-5 w-5" />, title: "BYOB Welcome", desc: "Bring champagne, wine, birthday cake — whatever makes the day special. Large cooler with ice provided." },
  { icon: <Camera className="h-5 w-5" />, title: "Incredible Photo Backdrops", desc: "Wild dolphins, the Ravenel Bridge, golden Lowcountry marshes — every backdrop is Instagram-worthy." },
  { icon: <Gift className="h-5 w-5" />, title: "Fully Customizable", desc: "Beach stop, shark tooth hunt, dolphin cruise, sunset — tell us what the birthday person wants and we'll make it happen." },
  { icon: <Gem className="h-5 w-5" />, title: "Shark Tooth Hunt Option", desc: "Add a remote barrier island beach stop and hunt prehistoric megalodon teeth — the most unique birthday activity in Charleston." },
];

const steps = [
  { num: "01", title: "Book Your Date", desc: "Reserve your private birthday cruise online or by phone. Tell us your group size, preferred duration, and any special requests — beach stop, shark tooth hunt, golden hour timing, or a surprise element." },
  { num: "02", title: "Board at Shem Creek, Mt. Pleasant", desc: "Meet your USCG-certified captain at the dock at Tavern & Table on Shem Creek (100 Church St., Mt. Pleasant, SC 29464). Set up your cooler, connect your Bluetooth playlist, and cast off — it's your birthday!" },
  { num: "03", title: "Cruise Charleston's Beautiful Waterways", desc: "Wind through iconic Shem Creek, past the Arthur Ravenel Jr. Bridge, and into the pristine tidal creeks of the Lowcountry. Dolphins often appear within the first 15 minutes. Pelicans, herons, and osprey fill the sky above." },
  { num: "04", title: "Beach Landing & Activities (Optional)", desc: "Pull up to a remote, boat-access-only barrier island beach — a place most Charleston visitors never see. Shark tooth hunt, swim in shallow water, or simply relax on a completely private stretch of South Carolina coast." },
  { num: "05", title: "Celebrate & Head Home", desc: "Toast the birthday person as the Lowcountry sun sinks below the marsh. The Bluetooth playlist keeps the good vibes going all the way back to Shem Creek. Happy Birthday!" },
];

const reviews = [
  {
    name: "Taylor M.",
    location: "Atlanta, GA",
    text: "Booked this for my sister's 30th birthday and it was absolutely perfect. We saw dolphins on the way out, hunted shark teeth on a private beach, and toasted her at sunset. Everyone is STILL talking about it.",
    date: "April 2025",
    rating: 5
  },
  {
    name: "Chris & Laura P.",
    location: "Raleigh, NC",
    text: "We surprised my husband with a birthday boat cruise and he was blown away. The captain was incredible — so fun and knowledgeable. Dolphins appeared right next to the boat. Best birthday gift I've ever given.",
    date: "August 2024",
    rating: 5
  },
  {
    name: "The Hendersons",
    location: "Columbia, SC",
    text: "Did the 4-hour cruise for a milestone birthday — beach stop, shark teeth, dolphins, and a sunset. The whole family was there, ages 8 to 65, and every single person had the time of their life. The captain made the birthday person feel so special.",
    date: "June 2024",
    rating: 5
  }
];

export default function BirthdayPage() {
  const { openBooking } = useBooking();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const base = import.meta.env.BASE_URL?.replace(/\/$/, "") || "";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNavbar />

      {/* Hero */}
      <section id="tour-hero" className="relative h-[90vh] min-h-[600px] overflow-hidden flex items-center pt-24 pb-12">
        <div className="absolute inset-0 z-0">
          <img src="/images/lccx-group-shot.webp" alt="Happy group celebrating a birthday on a private charter boat in Charleston SC" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-background/20 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <a href={`${base}/`} className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-primary transition-colors mb-5">
            <ChevronLeft className="h-4 w-4" /> Back to All Tours
          </a>
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-white px-3 py-1.5 rounded-full text-sm font-medium mb-3"
            style={{ boxShadow: "0 0 16px hsl(22 95% 52% / 0.2)" }}>
            <Gift className="h-4 w-4 text-primary" /> Charleston's Most Memorable Birthday Experience
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4 leading-tight">
            Birthday Party<br />
            <span className="text-primary glow-orange-text">Boat Cruises</span>
          </h1>
          <p className="text-xl text-white/85 max-w-2xl mb-5">
            Celebrate a birthday the way it deserves — on a 100% private boat charter through the stunning waters of Charleston Harbor and Shem Creek. Dolphins, private beaches, golden sunsets, and the whole crew to yourself.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-white/70 mb-4">
            <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> 2, 3, or 4 Hours</span>
            <span className="flex items-center gap-2"><Users className="h-4 w-4 text-primary" /> Up to 12 Guests</span>
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Shem Creek, Mt. Pleasant, SC</span>
            <span className="flex items-center gap-2"><Music className="h-4 w-4 text-primary" /> BYOB · Bluetooth · 100% Private</span>
          </div>
          <div className="mb-6">
            <span className="inline-block bg-primary/20 border border-primary/40 text-primary font-bold text-sm px-4 py-1.5 rounded-full">From $350 · Up to 12 Guests · 100% Private</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={openBooking}
              className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-bold text-base hover:bg-primary/90 transition-all glow-orange inline-flex items-center gap-2"
            >
              <Anchor className="h-5 w-5" /> Book the Birthday Cruise
            </button>
            <div className="flex items-center gap-2 text-white/60 text-sm self-center">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span>4.9 stars · 127 Google reviews</span>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider color="hsl(218 45% 7%)" />

      {/* Package Options */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-bold tracking-widest uppercase mb-4">
              <Gift className="h-4 w-4" /> Choose Your Package
            </div>
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Birthday Party Packages</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">All packages are 100% private. Pick your duration and we'll build the perfect itinerary around what you want most.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packageOptions.map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative bg-card border border-border rounded-2xl p-7 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all flex flex-col"
              >
                {pkg.tag && (
                  <div className="absolute -top-3.5 left-6">
                    <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">{pkg.tag}</span>
                  </div>
                )}
                <div className={`${pkg.color} mb-4`}>{pkg.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-1">{pkg.title}</h3>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                  <Clock className="h-3.5 w-3.5 text-primary" /> {pkg.duration}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">{pkg.desc}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xl font-bold text-primary">{pkg.priceRange}</span>
                    <p className="text-xs text-muted-foreground mt-0.5">{pkg.note}</p>
                  </div>
                  <button
                    onClick={openBooking}
                    className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-bold hover:bg-primary/90 transition-all"
                  >
                    Book This
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-muted-foreground text-sm">
              2 hrs: $350–$1,200 · 3 hrs: $450–$1,750 · 4 hrs: $550–$2,200 · Up to 12 guests
            </p>
            <p className="text-xs text-muted-foreground mt-1">Need more than 12 guests? Ask us about upgrading to the Roamer IV (up to 23 guests) · Kids under 5 ride FREE</p>
          </div>
        </div>
      </section>

      <WaveDivider color="hsl(214 30% 95%)" />

      {/* Why Us */}
      <section className="py-20 light-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-bold tracking-widest uppercase mb-4">
              <Sparkles className="h-4 w-4" /> Why a Birthday Cruise
            </div>
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">The Birthday They'll Never Forget</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">Skip the restaurant. Skip the bar. Give them a birthday that no gift card or dinner reservation can compete with.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all group"
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider color="hsl(218 45% 7%)" />

      {/* What's Included */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-primary text-sm font-bold tracking-widest uppercase mb-4">
                <Sparkles className="h-4 w-4" /> What's Included
              </div>
              <h2 className="text-4xl font-serif font-bold text-foreground mb-6">Everything Taken Care Of</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Every birthday charter is 100% private — no strangers, no shared space, no compromises. Just your people, a professional captain, and the most beautiful coastal scenery in the Lowcountry.
              </p>
              <ul className="space-y-4">
                {[
                  "100% private boat — exclusively your group for the entire trip",
                  "USCG-certified captain with expert knowledge of the Lowcountry",
                  "Private skiff up to 12 guests (or upgrade to Roamer IV for larger groups)",
                  "Fully custom itinerary — beach stop, dolphin watch, sunset, or all of the above",
                  "Bluetooth stereo — play your birthday playlist",
                  "BYOB welcome: large cooler with ice provided (no glass on deck)",
                  "Private barrier island beach access (optional shark tooth hunt!)",
                  "Dolphin & wildlife spotting through Shem Creek & Charleston Harbor",
                  "Sunset departure times available — golden hour is magical on the water",
                  "Life jackets for all guests · safety briefing included",
                  "Kids under 5 ride FREE (count in passenger total)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground/90">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden border border-border shadow-2xl shadow-black/30 aspect-[4/5]">
                <img src="/images/lccx-charleston-sunset.webp" alt="Beautiful golden sunset over Charleston Harbor from a private charter boat" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-2xl p-5 shadow-xl max-w-[210px]">
                <div className="text-3xl font-bold text-primary glow-orange-text mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Private — no strangers, ever</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider color="hsl(214 30% 95%)" />

      {/* Steps */}
      <section className="py-20 light-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-bold tracking-widest uppercase mb-4">
              <Anchor className="h-4 w-4" /> How It Works
            </div>
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Your Birthday on the Water</h2>
          </div>
          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6 items-start bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors"
              >
                <div className="text-4xl font-serif font-bold text-primary/30 shrink-0 leading-none w-14 text-center glow-orange-text">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider color="hsl(218 45% 7%)" />

      {/* Gallery */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-bold tracking-widest uppercase mb-4">
            <Camera className="h-4 w-4" /> Gallery
          </div>
          <h2 className="text-4xl font-serif font-bold text-foreground mb-10">Birthdays on the Water</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { src: "/images/lccx-group-shot.webp", alt: "Happy group celebrating on a private charter boat in Charleston SC" },
              { src: "/images/lccx-dolphin-leap.webp", alt: "Wild bottlenose dolphin leaping beside the tour boat" },
              { src: "/images/lccx-charleston-sunset.webp", alt: "Golden hour sunset over Charleston Harbor from the water" }
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="aspect-[4/3] rounded-2xl overflow-hidden group border border-border/50"
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider color="hsl(214 30% 95%)" />

      {/* Reviews */}
      <section className="py-20 light-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-bold tracking-widest uppercase mb-4">
              <Star className="h-4 w-4" /> Guest Reviews
            </div>
            <h2 className="text-4xl font-serif font-bold text-foreground mb-3">Real Birthday Celebrations</h2>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <GoogleG />
              <span>Verified Google reviews from real guests</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="bg-card border border-border rounded-full p-1.5"><GoogleG /></div>
                    <div>
                      <div className="flex gap-0.5">{Array.from({ length: r.rating }).map((_, s) => <Star key={s} className="h-3.5 w-3.5 fill-primary text-primary" />)}</div>
                      <p className="text-xs text-muted-foreground mt-0.5">{r.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-primary font-semibold bg-primary/10 border border-primary/20 rounded-full px-2 py-1">
                    <BadgeCheck className="h-3 w-3" /> Verified
                  </div>
                </div>
                <p className="text-sm text-foreground/85 italic leading-relaxed flex-1">"{r.text}"</p>
                <div className="flex items-center justify-between pt-4 mt-4 border-t border-border">
                  <div>
                    <h4 className="font-bold text-sm">{r.name}</h4>
                    <p className="text-xs text-muted-foreground flex items-center gap-1"><MapPin className="h-3 w-3" />{r.location}</p>
                  </div>
                  <div className="bg-secondary/60 text-foreground/80 px-3 py-1 rounded-full text-xs font-medium border border-border">Birthday Cruise</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider color="hsl(218 45% 7%)" />

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-bold tracking-widest uppercase mb-4">
              <Gift className="h-4 w-4" /> Questions
            </div>
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Birthday Cruise FAQs</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-colors">
                <button
                  className="w-full flex items-center justify-between p-6 text-left font-bold text-base text-foreground"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 text-primary shrink-0 ml-4 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-muted-foreground text-sm leading-relaxed">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider color="hsl(214 30% 95%)" />

      {/* CTA */}
      <section id="tour-cta" className="py-24 light-section text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <Gift className="h-12 w-12 text-primary mx-auto mb-6" style={{ filter: "drop-shadow(0 0 16px hsl(22 95% 52% / 0.6))" }} />
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Give Them a Birthday <span className="text-primary glow-orange-text">They'll Never Forget</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-3">
            Weekend dates and summer slots book out fast. Reserve your private birthday cruise before your date is gone.
          </p>
          <div className="inline-flex items-center gap-2 text-sm text-primary font-semibold bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
            <Clock className="h-4 w-4" /> Book early — birthday cruise dates fill up quickly
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={openBooking} className="bg-primary text-primary-foreground px-10 py-4 rounded-full text-lg font-bold hover:bg-primary/90 transition-all glow-orange inline-flex items-center gap-2 justify-center">
              <Anchor className="h-5 w-5" /> Book the Birthday Cruise
            </button>
            <a href={`${base}/`} className="bg-card text-foreground px-10 py-4 rounded-full text-lg font-semibold border border-border hover:border-primary/40 transition-all inline-flex items-center gap-2 justify-center">
              View All Tours <ArrowRight className="h-5 w-5" />
            </a>
          </div>
          <p className="text-sm text-muted-foreground mt-6 flex items-center justify-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary" /> 100% private boat · Instant confirmation · Free cancellation up to 48 hrs
          </p>
        </div>
      </section>

      <SiteFooter />
      <SiteMobileBookingBar />
    </div>
  );
}
