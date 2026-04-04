import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Gem, CheckCircle2, ChevronDown, Star, ArrowRight, Anchor, MapPin,
  Clock, Users, BadgeCheck, Shield, Sun, Waves, ChevronLeft, Camera, Sparkles
} from "lucide-react";
import { SiteNavbar, SiteFooter, WaveDivider } from "@/components/layout";

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
    q: "What kinds of shark teeth will we find?",
    a: "You'll most commonly find teeth from ancient sand sharks, mako sharks, and tiger sharks — from 1/2 inch to 3 inches. Megalodon fragments are rarer but real: our guides know exactly which tides and beaches give the best odds."
  },
  {
    q: "Can my toddler come on the tooth hunt?",
    a: "Absolutely! Kids as young as 2–3 years old love the beach exploration, and parents hold toddlers in the shallow tidal zones. Our guides help little ones know exactly what to look for."
  },
  {
    q: "Do we keep everything we find?",
    a: "Yes! Every tooth, shell, and fossil fragment belongs to you. We even provide small collection bags. Many guests leave with 20–40+ teeth in a single 2.5-hour trip."
  },
  {
    q: "When is the best time of year to find teeth?",
    a: "Year-round! South Carolina's barrier islands continually replenish with tidal activity. Spring and fall offer the best combination of mild weather and productive tides."
  },
  {
    q: "What if it's windy or rainy?",
    a: "Light rain often improves fossil visibility as it washes the sand. We monitor conditions closely and will reschedule in the rare case of unsafe weather with full flexibility."
  }
];

const steps = [
  {
    num: "01",
    title: "Meet at the Marina",
    desc: "Arrive at our departure point where your captain will brief the group, fit everyone with life jackets, and share what to expect on the water."
  },
  {
    num: "02",
    title: "Boat Ride to the Island",
    desc: "Cruise 15–25 minutes through winding tidal creeks and open estuaries to reach our boat-access-only barrier island beaches — totally inaccessible to the public without a boat."
  },
  {
    num: "03",
    title: "Expert Fossil Hunting Lesson",
    desc: "Your guide walks the group through the terrain, explains what fossilized teeth look and feel like versus shells and rocks, and shows you the most productive tidal zones."
  },
  {
    num: "04",
    title: "Open Hunt Time",
    desc: "Spread out across the beach and hunt freely! Guides circulate to help anyone who needs it. Most guests find their first tooth within the first 10 minutes."
  },
  {
    num: "05",
    title: "Celebrate & Head Back",
    desc: "Share your best finds with the group, get the captain's ID on your teeth, and enjoy the scenic cruise back through the marsh. Every tooth is yours to keep!"
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
    text: "My teenage sons were absolutely thrilled. True professionals who know exactly when the tides are right. We found teeth within 5 minutes of hitting the beach.",
    date: "January 2025",
    rating: 5
  },
  {
    name: "Amy S.",
    location: "Raleigh, NC",
    text: "Found a beautiful 2-inch shark tooth within 20 minutes. Absolutely magical experience. Our guide was so knowledgeable about prehistoric ocean life.",
    date: "October 2024",
    rating: 5
  }
];

export default function SharkToothPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const base = import.meta.env.BASE_URL?.replace(/\/$/, "") || "";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNavbar />

      {/* Hero */}
      <section className="relative h-[80vh] min-h-[560px] overflow-hidden flex items-end pb-20 pt-20">
        <div className="absolute inset-0 z-0">
          <img src="/images/kids-teeth.jpg" alt="Kids finding shark teeth on South Carolina beach" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <a href={`${base}/`} className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-primary transition-colors mb-6">
            <ChevronLeft className="h-4 w-4" /> Back to All Tours
          </a>
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-white px-3 py-1.5 rounded-full text-sm font-medium mb-4"
            style={{ boxShadow: "0 0 16px hsl(22 95% 52% / 0.2)" }}>
            <Gem className="h-4 w-4 text-primary" /> Most Popular Tour
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4 leading-tight">
            Shark Tooth<br />
            <span className="text-primary glow-orange-text">Hunting Tours</span>
          </h1>
          <p className="text-xl text-white/85 max-w-2xl mb-8">
            Discover prehistoric megalodon teeth and ancient shark fossils on remote, boat-access-only South Carolina barrier island beaches. The ultimate coastal treasure hunt.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-white/70">
            <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> 2.5–3.5 Hours</span>
            <span className="flex items-center gap-2"><Users className="h-4 w-4 text-primary" /> All Ages Welcome</span>
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Edisto, Beaufort, Hunting Island SC</span>
            <span className="flex items-center gap-2"><Shield className="h-4 w-4 text-primary" /> USCG Certified</span>
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
              <h2 className="text-4xl font-serif font-bold text-foreground mb-6">Everything You Need to Hunt Like a Pro</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                No experience required. Our expert guides turn first-timers into confident fossil hunters in minutes. We handle the logistics — you focus on the thrill of discovery.
              </p>
              <ul className="space-y-4">
                {[
                  "USCG-certified clean pontoon boat with shade & seating",
                  "Professional fossil hunting guide for the entire trip",
                  "Fossil & species identification at the beach",
                  "Collection bags — keep every single tooth you find",
                  "Life jackets for all ages & safety briefing",
                  "Scenic tidal creek & estuarine boat ride",
                  "Bottled water provided on board",
                  "Photography tips & assistance for Instagram-worthy shots"
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
                <img src="/images/teeth-display.jpg" alt="Collection of fossilized shark teeth" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-5 shadow-xl max-w-[200px]">
                <div className="text-3xl font-bold text-primary glow-orange-text mb-1">30+</div>
                <div className="text-sm text-muted-foreground">Average teeth found per trip</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider color="hsl(218 45% 7%)" />

      {/* What to Expect (Steps) */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-bold tracking-widest uppercase mb-4">
              <Anchor className="h-4 w-4" /> Your Experience
            </div>
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">What to Expect on Your Trip</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">A step-by-step look at what makes every Low Coastal shark tooth tour unforgettable.</p>
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
                <div className="text-4xl font-serif font-bold text-primary/30 shrink-0 leading-none glow-orange-text w-14 text-center">
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
          <h2 className="text-4xl font-serif font-bold text-foreground mb-10">The Hunt in Pictures</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { src: "/images/teeth-close.jpg", alt: "Close-up of fossilized shark teeth found on the beach" },
              { src: "/images/family-teeth.jpg", alt: "Family showing off their shark tooth finds" },
              { src: "/images/barrier-island.jpg", alt: "Remote barrier island beach accessible only by boat" }
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
            <h2 className="text-4xl font-serif font-bold text-foreground mb-3">What Fossil Hunters Say</h2>
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
                      <div className="flex gap-0.5">
                        {Array.from({ length: r.rating }).map((_, s) => <Star key={s} className="h-3.5 w-3.5 fill-primary text-primary" />)}
                      </div>
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
                  <div className="bg-secondary/60 text-foreground/80 px-3 py-1 rounded-full text-xs font-medium border border-border">Shark Tooth Tour</div>
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
              <Gem className="h-4 w-4" /> Questions
            </div>
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Shark Tooth FAQs</h2>
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
      <section className="py-24 bg-background text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <Gem className="h-12 w-12 text-primary mx-auto mb-6" style={{ filter: "drop-shadow(0 0 16px hsl(22 95% 52% / 0.6))" }} />
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Ready to Find Your <span className="text-primary glow-orange-text">Megalodon?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Spots fill fast — especially on weekends and during peak season. Book your shark tooth hunting adventure today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://fareharbor.com/lowcountrycoastalexcursions/items/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-10 py-4 rounded-full text-lg font-bold hover:bg-primary/90 transition-all glow-orange inline-flex items-center gap-2 justify-center"
            >
              <Anchor className="h-5 w-5" /> Book This Tour
            </a>
            <a
              href={`${base}/`}
              className="bg-card text-foreground px-10 py-4 rounded-full text-lg font-semibold border border-border hover:border-primary/40 transition-all inline-flex items-center gap-2 justify-center"
            >
              View All Tours <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
