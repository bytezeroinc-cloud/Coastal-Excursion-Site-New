import React, { useState } from "react";
import { useBooking } from "@/components/BookingModal";
import { motion } from "framer-motion";
import {
  Gem, CheckCircle2, ChevronDown, Star, Anchor, MapPin,
  Clock, Users, Shield, Phone, ShieldCheck, BadgeCheck
} from "lucide-react";
import { LandingNavbar, LandingMobileBar, WaveDivider } from "@/components/layout";

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
    q: "What do you find on a shark tooth hunting tour?",
    a: "Most guests find between 10–40+ fossilized shark teeth per trip. The most common are ancient sand shark, mako, and tiger shark teeth ranging from 1/2 inch to 3 inches. Megalodon tooth fragments also wash up on these remote SC barrier island beaches — our guides know exactly where and when the tides bring them in."
  },
  {
    q: "Where do you go on the shark tooth tour?",
    a: "We cruise by boat to remote, boat-access-only barrier island beaches on the South Carolina Lowcountry coast — including areas near Edisto Beach, Beaufort, and Hunting Island. These beaches are completely inaccessible without a boat, which is why the fossils are so abundant."
  },
  {
    q: "How much does a shark tooth hunting tour cost?",
    a: "Shark tooth hunting tours start from $65 per person. The price includes your expert guide, boat transportation to the barrier island beach, fossil identification, and collection bags. All ages are welcome — great for families, couples, and groups."
  },
  {
    q: "Is this tour good for families with kids?",
    a: "Absolutely — it's our most family-friendly experience! Kids as young as 2–3 years old love the beach treasure hunt. Our certified guides help little ones learn what to look for, and the shallow tidal zones are safe for children with adult supervision. Most guests find their first tooth within 10 minutes."
  },
  {
    q: "How long does the shark tooth tour last?",
    a: "Tours run approximately 2.5 to 3.5 hours total, including the scenic boat ride through tidal creeks to the barrier island and dedicated fossil hunting time on the beach. You keep every single tooth and fossil fragment you find."
  },
  {
    q: "Do I need any experience to find megalodon teeth in SC?",
    a: "No experience needed at all! Our expert fossil hunting guides walk every guest through exactly what fossilized shark teeth look and feel like versus shells and rocks. Most first-timers find teeth within their first 10 minutes on the beach. We provide collection bags — everything you find is yours to keep."
  }
];

const reviews = [
  {
    name: "Sarah M.",
    location: "Atlanta, GA",
    text: "We found over 30 shark teeth including a Megalodon fragment! The captain was amazing with our kids. This was the highlight of our entire Edisto Beach vacation.",
    date: "March 2025",
    rating: 5
  },
  {
    name: "David L.",
    location: "Columbus, OH",
    text: "My teenage sons were absolutely thrilled. True professionals who know exactly when the tides are right. We found teeth within 5 minutes of hitting the SC barrier island beach.",
    date: "January 2025",
    rating: 5
  },
  {
    name: "Amy S.",
    location: "Raleigh, NC",
    text: "Found a beautiful 2-inch shark tooth within 20 minutes. Absolutely magical experience. Our Lowcountry guide was so knowledgeable about prehistoric ocean life around Beaufort SC.",
    date: "October 2024",
    rating: 5
  }
];

export default function SharkToothLandingPage() {
  const { openBooking } = useBooking();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <LandingNavbar onBook={openBooking} />

      {/* Hero */}
      <section id="lp-hero" className="relative min-h-[100dvh] overflow-hidden flex items-center pb-12 pt-24">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/kids-teeth.jpg"
            alt="Family finding prehistoric shark teeth on a South Carolina barrier island beach"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(218,45%,7%)]/75 via-[hsl(218,45%,7%)]/55 to-[hsl(218,45%,7%)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(218,45%,7%)]/40 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-white px-3 py-1.5 rounded-full text-sm font-semibold mb-5">
              <Gem className="h-4 w-4 text-primary" />
              #1 Shark Tooth Hunting Tour in SC · 127 Five-Star Reviews
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-5 leading-[1.08] tracking-tight">
              Shark Tooth Hunting Tours<br />
              <span className="text-primary glow-orange-text">South Carolina Lowcountry</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/85 max-w-2xl mb-5 leading-relaxed">
              Hunt prehistoric megalodon teeth and fossilized shark teeth on remote, boat-access-only barrier island beaches near Edisto Beach, Beaufort, and Hunting Island, SC. Family-friendly · All ages welcome · Keep everything you find.
            </p>

            <div className="flex flex-wrap gap-3 text-sm text-white/70 mb-5">
              <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary shrink-0" /> 2.5–3.5 Hours</span>
              <span className="flex items-center gap-2"><Users className="h-4 w-4 text-primary shrink-0" /> All Ages Welcome</span>
              <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary shrink-0" /> Edisto · Beaufort · Hunting Island, SC</span>
              <span className="flex items-center gap-2"><Shield className="h-4 w-4 text-primary shrink-0" /> USCG Certified</span>
            </div>

            <div className="flex flex-wrap gap-3 mb-7">
              <span className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground font-bold text-base px-5 py-2 rounded-full glow-orange">
                From $65/person
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white font-semibold text-sm px-4 py-2 rounded-full">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Free cancellation 48 hrs
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <button
                onClick={openBooking}
                className="bg-primary text-primary-foreground px-9 py-4 rounded-full text-lg font-bold hover:bg-primary/90 transition-all glow-orange hover:scale-105 active:scale-100 inline-flex items-center justify-center gap-2"
              >
                <Anchor className="h-5 w-5" />
                Check Availability & Book Now
              </button>
              <a
                href="tel:+18435550100"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold border-2 border-white/30 text-white hover:border-primary hover:text-primary transition-all"
              >
                <Phone className="h-5 w-5" />
                (843) 555-0100
              </a>
            </div>

            <p className="text-white/50 text-sm">Weekend spots filling fast — instant confirmation after booking</p>
          </motion.div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-card border-y border-border py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: <Star className="h-5 w-5 text-primary fill-primary mx-auto mb-1" />, label: "4.9 Stars", sub: "127 Google Reviews" },
              { icon: <ShieldCheck className="h-5 w-5 text-primary mx-auto mb-1" />, label: "USCG Certified", sub: "Fully licensed & insured" },
              { icon: <Users className="h-5 w-5 text-primary mx-auto mb-1" />, label: "All Ages Welcome", sub: "Toddlers to grandparents" },
              { icon: <Gem className="h-5 w-5 text-primary mx-auto mb-1" />, label: "30+ Teeth Avg", sub: "Per 2.5-hour trip" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                {item.icon}
                <div className="font-bold text-sm text-foreground">{item.label}</div>
                <div className="text-xs text-muted-foreground">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider color="hsl(218 45% 7%)" />

      {/* What's included */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <div className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-widest uppercase mb-4">
                <Gem className="h-4 w-4" /> What's Included
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-5">
                Everything You Need to Hunt Shark Teeth in SC
              </h2>
              <p className="text-muted-foreground mb-7 leading-relaxed">
                No experience needed. Our expert guides turn first-timers into confident fossil hunters in minutes. We provide everything — you focus on finding prehistoric megalodon teeth on the SC Lowcountry coast.
              </p>
              <ul className="space-y-3.5">
                {[
                  "Expert fossil hunting guide for your entire trip",
                  "USCG-certified pontoon boat with shade & seating",
                  "Boat ride to remote, boat-access-only barrier island beaches",
                  "Fossil identification — shark species, age, and type",
                  "Collection bags — keep every tooth and fossil you find",
                  "Life jackets for all ages & full safety briefing",
                  "Bottled water on board",
                  "Photography tips for Instagram-worthy shots"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground/90">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5">
              <div className="rounded-2xl overflow-hidden border border-border shadow-xl aspect-[4/3]">
                <img src="/images/kids-teeth.png" alt="Kids holding shark teeth found during a South Carolina barrier island fossil hunt" className="w-full h-full object-cover" />
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 text-center">
                <div className="text-5xl font-serif font-bold text-primary glow-orange-text mb-1">30+</div>
                <div className="text-sm text-muted-foreground">Average shark teeth found per trip on the SC coast</div>
                <div className="mt-4 flex justify-center gap-1">
                  {[1,2,3,4,5].map(s => <Star key={s} className="h-4 w-4 fill-primary text-primary" />)}
                </div>
                <div className="text-xs text-muted-foreground mt-1">4.9 stars · 127 verified Google reviews</div>
              </div>

              <a
                href="tel:+18435550100"
                className="flex items-center justify-center gap-3 w-full py-4 rounded-xl border-2 border-primary/40 bg-primary/5 text-foreground font-bold hover:border-primary hover:bg-primary/10 transition-all"
              >
                <Phone className="h-5 w-5 text-primary" />
                <span>Call or Text: <span className="text-primary">(843) 555-0100</span></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider color="hsl(214 30% 95%)" />

      {/* Social proof / Reviews */}
      <section className="py-20 light-section">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-widest uppercase mb-4">
              <Star className="h-4 w-4" /> Guest Reviews
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-3">
              What Fossil Hunters Say About Our SC Tours
            </h2>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <GoogleG />
              <span>Verified Google reviews — real guests, real trips</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {reviews.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all flex flex-col"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="bg-card border border-border rounded-full p-1.5"><GoogleG /></div>
                  <div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: r.rating }).map((_, s) => <Star key={s} className="h-3.5 w-3.5 fill-primary text-primary" />)}
                    </div>
                    <p className="text-xs text-muted-foreground">{r.date}</p>
                  </div>
                  <div className="ml-auto flex items-center gap-1 text-xs text-primary font-semibold bg-primary/10 border border-primary/20 rounded-full px-2 py-1">
                    <BadgeCheck className="h-3 w-3" /> Verified
                  </div>
                </div>
                <p className="text-sm text-foreground/85 italic leading-relaxed flex-1">"{r.text}"</p>
                <div className="flex items-center justify-between pt-4 mt-4 border-t border-border">
                  <div>
                    <h4 className="font-bold text-sm">{r.name}</h4>
                    <p className="text-xs text-muted-foreground flex items-center gap-1"><MapPin className="h-3 w-3" />{r.location}</p>
                  </div>
                  <div className="bg-secondary/60 text-foreground/80 px-3 py-1 rounded-full text-xs font-medium border border-border">Shark Tooth Tour</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider color="hsl(218 45% 7%)" />

      {/* FAQ — keyword rich long-tail */}
      <section className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-widest uppercase mb-4">
              <Gem className="h-4 w-4" /> Questions
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-3">
              Shark Tooth Hunting Tour FAQ
            </h2>
            <p className="text-muted-foreground">Everything you need to know before booking your SC shark tooth hunting tour.</p>
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
      <section id="lp-cta" className="py-24 light-section text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <Gem className="h-12 w-12 text-primary mx-auto mb-6" style={{ filter: "drop-shadow(0 0 16px hsl(22 95% 52% / 0.6))" }} />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Book Your SC Shark Tooth<br /><span className="text-primary glow-orange-text">Hunting Adventure Today</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-3">
            Find prehistoric megalodon teeth on the South Carolina Lowcountry coast. Spots fill fast — especially weekends and peak season.
          </p>
          <div className="inline-flex items-center gap-2 text-sm text-primary font-semibold bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse inline-block" />
            Weekend spots available now — book before they're gone
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <button
              onClick={openBooking}
              className="bg-primary text-primary-foreground px-10 py-4 rounded-full text-lg font-bold hover:bg-primary/90 transition-all glow-orange inline-flex items-center gap-2 justify-center"
            >
              <Anchor className="h-5 w-5" />
              Check Availability & Book Now
            </button>
            <a
              href="tel:+18435550100"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold border-2 border-border text-foreground hover:border-primary hover:text-primary transition-all"
            >
              <Phone className="h-5 w-5" />
              (843) 555-0100
            </a>
          </div>
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            Instant confirmation · Free cancellation up to 48 hrs · All ages welcome
          </p>
        </div>
      </section>

      <footer className="bg-card border-t border-border py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <Anchor className="h-4 w-4 text-primary" />
            <span>© {new Date().getFullYear()} Low Coastal Country Excursion — SC Lowcountry Boat Tours</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+18435550100" className="text-primary font-semibold hover:underline">(843) 555-0100</a>
            <a href={`${import.meta.env.BASE_URL?.replace(/\/$/, "") || ""}/`} className="hover:text-primary transition-colors">View All Tours</a>
          </div>
        </div>
      </footer>

      <LandingMobileBar onBook={openBooking} />
    </div>
  );
}
