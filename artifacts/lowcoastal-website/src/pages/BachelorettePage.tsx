import React, { useState } from "react";
import { useBooking } from "@/components/BookingModal";
import { motion } from "framer-motion";
import {
  Sparkles, CheckCircle2, ChevronDown, Star, ArrowRight, Anchor, MapPin,
  Clock, Users, BadgeCheck, Camera, ChevronLeft, Heart, Music, Wine, Trophy, Gift, Waves, Gem, Sun
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
    q: "How many people can come on the bachelorette charter?",
    a: "Our Roamer IV luxury cruiser accommodates up to 23 guests — complete with a full bathroom, shade, Bluetooth stereo, and plenty of deck space to celebrate. For smaller groups we also offer our 27' Coastal Skiff and 25' Tidewater."
  },
  {
    q: "Can we bring alcohol?",
    a: "Absolutely! BYOB is fully welcome on private charters. Bring champagne, wine, seltzers, whatever fits the vibe — we just ask guests enjoy responsibly. No glass bottles on deck. We provide a large cooler with ice."
  },
  {
    q: "Can we play our own music?",
    a: "Yes! The Roamer IV has a Bluetooth speaker system. Connect your playlist and set the tone. Your boat, your soundtrack, your celebration."
  },
  {
    q: "What's the best time of year for a bachelorette cruise in Charleston?",
    a: "Anytime is beautiful in the Lowcountry, but April through October offer the warmest water and the most stunning golden hours. Spring and fall have the most comfortable temperatures. Summer sunsets are absolutely unforgettable."
  },
  {
    q: "Can we combine the cruise with a shark tooth hunt or beach stop?",
    a: "Yes — and we highly recommend it! Our most popular bachelorette package combines a private cruise, a remote barrier island beach stop, and a shark tooth hunt all in one trip. Just let us know when booking."
  },
  {
    q: "How far in advance should we book?",
    a: "For bachelorette and bachelor parties, we strongly recommend booking 4–8 weeks in advance for weekend dates. Peak season (April–September) books out especially fast — don't wait!"
  },
  {
    q: "Is the boat 100% private for our group?",
    a: "Yes, always. On a private charter it's exclusively your group — no strangers, no shared space. The whole boat is yours from the moment you board to when you return to the dock."
  }
];

const packageOptions = [
  {
    icon: <Waves className="h-6 w-6" />,
    title: "Dolphin & Sunset Cruise",
    duration: "2–3 Hours",
    desc: "Glide through Shem Creek and Charleston Harbor as the sky turns gold. Wild dolphins often appear at golden hour. Perfect for a champagne toast on the water.",
    price: "From $375",
    tag: "Most Popular",
    color: "text-blue-400"
  },
  {
    icon: <Gem className="h-6 w-6" />,
    title: "Beach & Shark Tooth Hunt",
    duration: "3–4 Hours",
    desc: "Cruise to a remote, boat-access-only barrier island beach. Shark tooth hunt, swim in shallow water, and have a private beach all to yourselves — a bachelorette party she'll never forget.",
    price: "From $375",
    tag: "Most Unique",
    color: "text-primary"
  },
  {
    icon: <Sun className="h-6 w-6" />,
    title: "Full Day Private Charter",
    duration: "4–6 Hours",
    desc: "The ultimate celebration: beach stop, dolphin spotting, shark tooth hunting, sunset cruise — all in one unforgettable day. Total privacy, total customization, total fun.",
    price: "From $550",
    tag: "Best Value",
    color: "text-yellow-400"
  }
];

const whyWater = [
  { icon: <Heart className="h-5 w-5" />, title: "100% Private — No Strangers", desc: "The whole boat belongs to your group. No crowds, no sharing, just your crew and the open water." },
  { icon: <Music className="h-5 w-5" />, title: "Your Playlist, Your Vibe", desc: "Bluetooth stereo on the Roamer IV. Connect your phone and set the perfect party atmosphere." },
  { icon: <Wine className="h-5 w-5" />, title: "BYOB Welcome", desc: "Bring champagne, wine, seltzers — whatever fits the celebration. Large cooler with ice provided." },
  { icon: <Camera className="h-5 w-5" />, title: "Unforgettable Photos", desc: "Wild dolphins, the Ravenel Bridge, golden marshes — every backdrop is a postcard. Your Instagram will thank you." },
  { icon: <Trophy className="h-5 w-5" />, title: "Beats Every Bar Crawl", desc: "No cover, no lines, no sharing a venue with strangers. Just your people and some of the most beautiful coastal scenery in the South." },
  { icon: <Gift className="h-5 w-5" />, title: "Fully Customizable", desc: "Tell us what you want and we'll build the perfect itinerary — beach stop, dolphin watching, shark tooth hunt, sunset, or all of the above." },
];

const steps = [
  { num: "01", title: "Book Your Date", desc: "Reserve your private charter online or by phone. Tell us your group size, preferred duration, and any special requests — beach stop, shark tooth hunt, sunset timing, etc." },
  { num: "02", title: "Board at Shem Creek, Mt. Pleasant", desc: "Meet your USCG-certified captain at the dock at Tavern & Table on Shem Creek (100 Church St., Mt. Pleasant, SC). Set up your cooler, connect your Bluetooth music, and cast off — the whole boat is yours." },
  { num: "03", title: "Cruise Charleston's Iconic Waterways", desc: "Wind through Shem Creek, past the Arthur Ravenel Jr. Bridge, and into the tidal creeks and estuaries of the Lowcountry. Dolphins often appear in the first 15 minutes. Pelicans, herons, and ospreys fly overhead." },
  { num: "04", title: "Private Beach Landing (Optional)", desc: "Pull up to a remote, boat-access-only barrier island beach most visitors never see. Shark tooth hunt, swim, take photos on a completely private beach — the ultimate bachelorette experience." },
  { num: "05", title: "Golden Hour Return", desc: "Head back through glowing orange and pink skies over the Lowcountry marsh. Toast the bride-to-be as the Bluetooth playlist keeps the vibe going all the way back to Shem Creek." },
];

const reviews = [
  {
    name: "Jessica T.",
    location: "Charlotte, NC",
    text: "Booked for my sister's bachelorette and it was INCREDIBLE. We brought champagne, cruised gorgeous waterways, saw dolphins up close, and had a blast on the private beach. Way better than any bar in Charleston!",
    date: "February 2025",
    rating: 5
  },
  {
    name: "Megan R.",
    location: "Raleigh, NC",
    text: "11 of us for a bachelorette cruise and every single person had the time of their life. The captain was so fun and accommodating. We saw dolphins, found shark teeth on the beach, and toasted at sunset. Perfect in every way.",
    date: "May 2025",
    rating: 5
  },
  {
    name: "Brittany K.",
    location: "Nashville, TN",
    text: "We did the sunset cruise for a bach party of 14 and it was absolutely magical. Dolphins showed up during our champagne toast!! The Bluetooth speaker is great and the boat is clean and comfortable. 10/10 would book again.",
    date: "October 2024",
    rating: 5
  }
];

export default function BachelorettePage() {
  const { openBooking } = useBooking();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const base = import.meta.env.BASE_URL?.replace(/\/$/, "") || "";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNavbar />

      {/* Hero */}
      <section id="tour-hero" className="relative h-[90vh] min-h-[600px] overflow-hidden flex items-center pt-24 pb-12">
        <div className="absolute inset-0 z-0">
          <img src="/images/lccx-bachelorette-boat.webp" alt="Bachelorette party celebrating on a private charter boat near the Ravenel Bridge in Charleston SC" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-background/20 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <a href={`${base}/`} className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-primary transition-colors mb-5">
            <ChevronLeft className="h-4 w-4" /> Back to All Tours
          </a>
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-white px-3 py-1.5 rounded-full text-sm font-medium mb-3"
            style={{ boxShadow: "0 0 16px hsl(22 95% 52% / 0.2)" }}>
            <Sparkles className="h-4 w-4 text-primary" /> Charleston's Best Bachelorette & Bachelor Party Experience
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4 leading-tight">
            Bachelorette &<br />
            <span className="text-primary glow-orange-text">Bachelor Party Cruises</span>
          </h1>
          <p className="text-xl text-white/85 max-w-2xl mb-5">
            100% private boat charter on the stunning waters of Charleston Harbor and Shem Creek. Bring your crew, your drinks, and your playlist. We'll handle the rest — dolphins, private beaches, and golden sunsets included.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-white/70 mb-4">
            <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> 2–6 Hours (Fully Custom)</span>
            <span className="flex items-center gap-2"><Users className="h-4 w-4 text-primary" /> Up to 23 Guests</span>
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Shem Creek, Mt. Pleasant, SC</span>
            <span className="flex items-center gap-2"><Music className="h-4 w-4 text-primary" /> BYOB · Bluetooth · Full Bathroom</span>
          </div>
          <div className="mb-6">
            <span className="inline-block bg-primary/20 border border-primary/40 text-primary font-bold text-sm px-4 py-1.5 rounded-full">From $375 · Up to 23 Guests · 100% Private</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={openBooking}
              className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-bold text-base hover:bg-primary/90 transition-all glow-orange inline-flex items-center gap-2"
            >
              <Anchor className="h-5 w-5" /> Book Your Party Charter
            </button>
            <div className="flex items-center gap-2 text-white/60 text-sm self-center">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span>4.9 stars · 127 Google reviews</span>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider color="hsl(214 30% 95%)" />

      {/* Why the Water */}
      <section className="py-20 light-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-bold tracking-widest uppercase mb-4">
              <Heart className="h-4 w-4" /> Why Celebrate on the Water
            </div>
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Better Than Any Bar in Charleston</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">No cover charge, no strangers, no waiting in line. Just your people, incredible scenery, and memories you'll still be talking about 10 years from now.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyWater.map((item, i) => (
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

      {/* Package Options */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-bold tracking-widest uppercase mb-4">
              <Sparkles className="h-4 w-4" /> Choose Your Experience
            </div>
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Bachelorette & Bachelor Party Packages</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">All packages are 100% private — no strangers, ever. Fully customizable itinerary built around what your group wants most.</p>
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
                  <span className="text-xl font-bold text-primary">{pkg.price}</span>
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
              Pricing: $375 for 1–4 guests · +$50 per guest (up to 23) · Kids under 5 ride free
            </p>
            <p className="text-xs text-muted-foreground mt-1">Groups over 12 require the Roamer IV (30-ft, full bathroom, up to 23 guests)</p>
          </div>
        </div>
      </section>

      <WaveDivider color="hsl(214 30% 95%)" />

      {/* What's Included */}
      <section className="py-20 light-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-primary text-sm font-bold tracking-widest uppercase mb-4">
                <Sparkles className="h-4 w-4" /> What's Included
              </div>
              <h2 className="text-4xl font-serif font-bold text-foreground mb-6">The Full Private Experience</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Every charter is 100% private — no strangers, no shared space. Just your group, a professional captain, and the most beautiful coastal scenery in South Carolina.
              </p>
              <ul className="space-y-4">
                {[
                  "100% private boat — no strangers, no shared space, ever",
                  "Roamer IV luxury cruiser: 30-ft, up to 23 guests, full onboard bathroom",
                  "Also available: 27' Coastal Skiff & 25' Tidewater for smaller groups",
                  "USCG-certified captain with expert local knowledge",
                  "Fully custom itinerary built around your group's wishes",
                  "Bluetooth stereo system — connect your playlist and set the vibe",
                  "BYOB welcome: large cooler with ice provided (no glass on deck)",
                  "Private barrier island beach access (shark tooth hunt option!)",
                  "Dolphin & wildlife spotting through Shem Creek & Charleston Harbor",
                  "Sunset & golden hour departure times available",
                  "Life jackets for all guests · safety briefing included",
                  "Kids under 5 ride FREE (still count in passenger total)"
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
                <img src="/images/lccx-bachelorette-boat.webp" alt="Bachelorette party group on a private charter boat near Charleston SC" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-2xl p-5 shadow-xl max-w-[210px]">
                <div className="text-3xl font-bold text-primary glow-orange-text mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Private — no strangers, ever</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider color="hsl(218 45% 7%)" />

      {/* Steps */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-bold tracking-widest uppercase mb-4">
              <Anchor className="h-4 w-4" /> Your Day on the Water
            </div>
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">How It All Goes Down</h2>
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

      <WaveDivider color="hsl(214 30% 95%)" />

      {/* Gallery */}
      <section className="py-20 light-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-bold tracking-widest uppercase mb-4">
            <Camera className="h-4 w-4" /> Gallery
          </div>
          <h2 className="text-4xl font-serif font-bold text-foreground mb-10">Parties on the Water</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { src: "/images/lccx-bachelorette-boat.webp", alt: "Bachelorette party on a private charter boat near Charleston SC" },
              { src: "/images/lccx-group-shot.webp", alt: "Happy group celebrating on the water in the Lowcountry" },
              { src: "/images/lccx-charleston-sunset.webp", alt: "Golden sunset over Charleston Harbor from the boat" }
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

      <WaveDivider color="hsl(218 45% 7%)" />

      {/* Reviews */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-bold tracking-widest uppercase mb-4">
              <Star className="h-4 w-4" /> Guest Reviews
            </div>
            <h2 className="text-4xl font-serif font-bold text-foreground mb-3">Real Bachelorette Parties Love It</h2>
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
                  <div className="bg-secondary/60 text-foreground/80 px-3 py-1 rounded-full text-xs font-medium border border-border">Bachelorette Charter</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider color="hsl(214 30% 95%)" />

      {/* FAQ */}
      <section className="py-20 light-section">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-bold tracking-widest uppercase mb-4">
              <Sparkles className="h-4 w-4" /> Questions
            </div>
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Bachelorette Charter FAQs</h2>
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

      <WaveDivider color="hsl(218 45% 7%)" />

      {/* CTA */}
      <section id="tour-cta" className="py-24 bg-background text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <Sparkles className="h-12 w-12 text-primary mx-auto mb-6" style={{ filter: "drop-shadow(0 0 16px hsl(22 95% 52% / 0.6))" }} />
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Book the <span className="text-primary glow-orange-text">Perfect Party</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-3">
            Bachelorette and bachelor dates fill fast — especially weekends and peak season. Lock in your date before it's gone.
          </p>
          <div className="inline-flex items-center gap-2 text-sm text-primary font-semibold bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
            <Clock className="h-4 w-4" /> Weekend dates book out weeks in advance — don't wait
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={openBooking} className="bg-primary text-primary-foreground px-10 py-4 rounded-full text-lg font-bold hover:bg-primary/90 transition-all glow-orange inline-flex items-center gap-2 justify-center">
              <Anchor className="h-5 w-5" /> Book Your Charter
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
