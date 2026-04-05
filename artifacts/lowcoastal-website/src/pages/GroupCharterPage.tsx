import React, { useState } from "react";
import { useBooking } from "@/components/BookingModal";
import { motion } from "framer-motion";
import {
  Sparkles, CheckCircle2, ChevronDown, Star, ArrowRight, Anchor, MapPin,
  Clock, Users, BadgeCheck, Camera, ChevronLeft, Heart, Music, Wine, Trophy, Gift
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
    q: "How many people can the boat hold?",
    a: "Our pontoons comfortably accommodate up to 10–12 guests per charter, with plenty of room to move, dance, and celebrate. For larger groups we can arrange multiple boats."
  },
  {
    q: "Can we bring alcohol?",
    a: "Yes! BYOB is fully welcome on private charters. Bring champagne, wine, coolers — we just ask guests drink responsibly as the captain is USCG certified and guest safety always comes first."
  },
  {
    q: "Can we play our own music?",
    a: "Absolutely! Our pontoons have Bluetooth speaker systems. Connect your playlist and set the vibe. Your boat, your music, your celebration."
  },
  {
    q: "What can we do on the charter?",
    a: "Cruise the waterways, stop at a private barrier island beach, do some shark tooth hunting, take a swimming break in shallow water, watch for dolphins — it's fully customizable to what your group wants most."
  },
  {
    q: "How far in advance should we book?",
    a: "For bachelorette parties and group charters, we recommend booking 4–8 weeks in advance for weekend dates. Peak season (April–September) books out especially fast."
  },
  {
    q: "Can we add a shark tooth hunt to our charter?",
    a: "Yes! The most popular group package combines the beach cruise, shark tooth hunt, and dolphin spotting all in one trip. Just let us know when you book and we'll make it happen."
  }
];

const occasions = [
  { icon: <Heart className="h-6 w-6" />, title: "Bachelorette Parties", desc: "The most unforgettable SC bachelorette experience. Sun, dolphins, champagne, and a private beach — beats any bar crawl." },
  { icon: <Gift className="h-6 w-6" />, title: "Birthday Celebrations", desc: "Celebrate milestone birthdays on the water with your closest people and a backdrop no restaurant can match." },
  { icon: <Users className="h-6 w-6" />, title: "Family Reunions", desc: "Multi-generation adventures the whole family will love. Kids to grandparents — everyone finds something magical." },
  { icon: <Trophy className="h-6 w-6" />, title: "Corporate Retreats", desc: "Bond your team on the water. Active, scenic, and memorable — far better than a conference room." },
  { icon: <Wine className="h-6 w-6" />, title: "Couples Getaways", desc: "A private sunset cruise through the Lowcountry for two. Dolphins, marsh sunsets, and just each other." },
  { icon: <Music className="h-6 w-6" />, title: "Any Group Celebration", desc: "Graduation parties, anniversary trips, friend getaways — if you have a group, we have the perfect charter." },
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
    name: "Lauren K.",
    location: "Greenville, SC",
    text: "10 of us for a corporate team outing. Best decision we ever made. The captain was professional and so fun. Everyone bonded in a way that would never happen in a meeting room. Already planning next year's trip!",
    date: "November 2024",
    rating: 5
  },
  {
    name: "The Thompson Family",
    location: "Virginia Beach, VA",
    text: "Our family reunion on the water was the highlight of the whole year. 11 of us from ages 5 to 74 — everyone had the time of their lives. The captain made every single person feel special.",
    date: "July 2024",
    rating: 5
  }
];

const steps = [
  { num: "01", title: "Tell Us Your Vision", desc: "Book your charter and share what you want: beach stop, tooth hunting, dolphin spotting, sunset cruise, or all of the above. We build the perfect itinerary for your group." },
  { num: "02", title: "Board Your Private Boat", desc: "The whole boat is yours. Set up your cooler, connect your music, and head out onto the water with your crew and your dedicated captain." },
  { num: "03", title: "Cruise & Explore", desc: "Wind through tidal creeks, open estuaries, and coastal waterways. Spot dolphins, herons, and the sweeping beauty of the SC Lowcountry barrier islands." },
  { num: "04", title: "Private Beach Landing", desc: "Pull up to a remote, boat-access-only barrier island beach. Shark tooth hunt, swim in shallow water, toast your celebration, and soak in the scenery." },
  { num: "05", title: "Sunset Return", desc: "Head back through glowing golden marsh grass as the sky turns orange and pink. An Instagram moment that belongs in a magazine — or your phone forever." },
];

export default function GroupCharterPage() {
  const { openBooking } = useBooking();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const base = import.meta.env.BASE_URL?.replace(/\/$/, "") || "";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNavbar />

      {/* Hero */}
      <section id="tour-hero" className="relative h-[80vh] min-h-[560px] overflow-hidden flex items-end pb-10 pt-20">
        <div className="absolute inset-0 z-0">
          <img src="/images/bachelorette.jpg" alt="Group celebrating on a charter boat" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <a href={`${base}/`} className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-primary transition-colors mb-5">
            <ChevronLeft className="h-4 w-4" /> Back to All Tours
          </a>
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-white px-3 py-1.5 rounded-full text-sm font-medium mb-3"
            style={{ boxShadow: "0 0 16px hsl(22 95% 52% / 0.2)" }}>
            <Sparkles className="h-4 w-4 text-primary" /> Private Charter
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4 leading-tight">
            Group &<br />
            <span className="text-primary glow-orange-text">Private Charters</span>
          </h1>
          <p className="text-xl text-white/85 max-w-2xl mb-5">
            Your boat, your crew, your rules. Celebrate your bachelorette party, family reunion, birthday, or corporate retreat on the most stunning waters in South Carolina.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-white/70 mb-4">
            <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> 2–6 Hours (Custom)</span>
            <span className="flex items-center gap-2"><Users className="h-4 w-4 text-primary" /> Up to 12 Guests</span>
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> SC Lowcountry</span>
            <span className="flex items-center gap-2"><Music className="h-4 w-4 text-primary" /> BYOB & Bluetooth Music</span>
          </div>
          <div className="mb-6">
            <span className="inline-block bg-primary/20 border border-primary/40 text-primary font-bold text-sm px-4 py-1.5 rounded-full">From $450/boat</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={openBooking}
              className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-bold text-base hover:bg-primary/90 transition-all glow-orange inline-flex items-center gap-2"
            >
              <Anchor className="h-5 w-5" /> Request Your Charter
            </button>
            <div className="flex items-center gap-2 text-white/60 text-sm self-center">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span>4.9 stars · 127 Google reviews</span>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider color="hsl(214 30% 95%)" />

      {/* Included */}
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
                  "100% private pontoon boat — exclusively yours",
                  "Professional USCG-certified captain & host",
                  "Customizable itinerary built around your group",
                  "Bluetooth speaker system — connect your playlist",
                  "BYOB welcome: cooler space & ice available",
                  "Private barrier island beach access",
                  "Shark tooth hunt option (hugely popular!)",
                  "Dolphin & wildlife spotting en route",
                  "Sunset & golden hour cruise options",
                  "Life jackets for all guests, safety briefing included"
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
                <img src="/images/charter-party.jpg" alt="Celebration on a private charter boat" className="w-full h-full object-cover" />
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

      {/* Occasions */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-bold tracking-widest uppercase mb-4">
              <Heart className="h-4 w-4" /> Perfect For
            </div>
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Every Celebration Belongs on the Water</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {occasions.map((o, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all group"
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">{o.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-2">{o.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{o.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider color="hsl(214 30% 95%)" />

      {/* Steps */}
      <section className="py-20 light-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-bold tracking-widest uppercase mb-4">
              <Anchor className="h-4 w-4" /> Your Charter Day
            </div>
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">How the Day Unfolds</h2>
          </div>
          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6 items-start bg-background border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors"
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
          <h2 className="text-4xl font-serif font-bold text-foreground mb-10">Life on Charter</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { src: "/images/bachelorette.jpg", alt: "Bachelorette group celebrating on the boat" },
              { src: "/images/couple-beach.jpg", alt: "Couple on a private beach at golden hour" },
              { src: "/images/marsh-sunrise.jpg", alt: "Golden sunset over the SC marsh" }
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
            <h2 className="text-4xl font-serif font-bold text-foreground mb-3">Groups Love It Here</h2>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <GoogleG />
              <span>Verified Google reviews</span>
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
                className="bg-background border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all flex flex-col"
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
                  <div className="bg-secondary/60 text-foreground/80 px-3 py-1 rounded-full text-xs font-medium border border-border">Group Charter</div>
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
              <Sparkles className="h-4 w-4" /> Questions
            </div>
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Charter FAQs</h2>
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
          <Sparkles className="h-12 w-12 text-primary mx-auto mb-6" style={{ filter: "drop-shadow(0 0 16px hsl(22 95% 52% / 0.6))" }} />
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Book Your <span className="text-primary glow-orange-text">Private Charter</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-3">
            Weekend dates fill 4–8 weeks in advance. Reach out now and let's build the perfect trip for your group.
          </p>
          <div className="inline-flex items-center gap-2 text-sm text-primary font-semibold bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
            <Clock className="h-4 w-4" /> Bachelorette & group dates book out fast — secure yours now
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={openBooking} className="bg-primary text-primary-foreground px-10 py-4 rounded-full text-lg font-bold hover:bg-primary/90 transition-all glow-orange inline-flex items-center gap-2 justify-center">
              <Anchor className="h-5 w-5" /> Request Your Charter
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
