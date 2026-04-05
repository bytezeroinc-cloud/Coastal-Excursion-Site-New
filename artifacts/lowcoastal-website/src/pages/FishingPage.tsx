import React, { useState } from "react";
import { useBooking } from "@/components/BookingModal";
import { motion } from "framer-motion";
import {
  Fish, CheckCircle2, ChevronDown, Star, ArrowRight, Anchor, MapPin,
  Clock, Users, BadgeCheck, Camera, ChevronLeft, Trophy, Sparkles, Shield, Sun
} from "lucide-react";
import { SiteNavbar, SiteFooter, WaveDivider, SiteMobileBookingBar } from "@/components/layout";

function GoogleG() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.66 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

const targetSpecies = [
  { name: "Redfish (Red Drum)", season: "Year-Round", difficulty: "Beginner Friendly", icon: "🎣" },
  { name: "Speckled Sea Trout", season: "Spring & Fall Best", difficulty: "Beginner Friendly", icon: "🐟" },
  { name: "Flounder", season: "Summer & Fall", difficulty: "Beginner Friendly", icon: "🐠" },
  { name: "Sheepshead", season: "Winter & Spring", difficulty: "Intermediate", icon: "🎣" },
  { name: "Cobia", season: "Spring Migration", difficulty: "Intermediate", icon: "🐟" },
  { name: "Black Drum", season: "Spring & Fall", difficulty: "Beginner Friendly", icon: "🎣" },
];

const faqs = [
  {
    q: "Do I need a fishing license?",
    a: "No! SC saltwater fishing licenses are included in your charter fee. You arrive ready to fish — we handle all the paperwork."
  },
  {
    q: "Is bait and tackle provided?",
    a: "Yes, everything is provided: rods, reels, terminal tackle, live bait, and artificial lures. You bring yourself — we supply the rest."
  },
  {
    q: "What if I've never fished before?",
    a: "Perfect! Our captains are experienced teachers. We'll walk you through casting, bait presentation, fighting fish, and safe catch-and-release or keep techniques. Many first-timers catch their biggest fish ever on our trips."
  },
  {
    q: "Can we keep our catch?",
    a: "Yes! As long as fish meet SC size and bag limits, you're welcome to keep them. We'll provide filleting guidance or recommendations for local fish cleaning stations."
  },
  {
    q: "What's the best time of year to fish?",
    a: "Inshore fishing is great year-round in SC. Spring and fall offer the most diverse action, while summer sees incredible redfish action in the shallows. Winter is excellent for sheepshead."
  },
  {
    q: "How many people can fish per boat?",
    a: "Up to 6 anglers per boat comfortably. We can arrange multiple boats for larger groups. Private charters mean you'll never be crowded with strangers."
  }
];

const steps = [
  { num: "01", title: "Pre-Trip Briefing", desc: "Meet your captain at the marina. Discuss the conditions, target species, tide timing, and your group's experience levels so we can tailor the day perfectly." },
  { num: "02", title: "Gear Up", desc: "Your captain sets up rods, rigs bait, and walks everyone through the basics — or the finer points for experienced anglers. All tackle is tournament-ready." },
  { num: "03", title: "Head to the Hotspot", desc: "Navigate through winding marsh creeks, tidal flats, and oyster bars to our proven inshore fishing spots. We know the spots the fish are using — not just where they used to be." },
  { num: "04", title: "Fish the Tide", desc: "Inshore fishing is all about timing. We fish the most productive tidal phases — often having non-stop action within the first 30 minutes. Live bait, soft plastics, and topwater lures." },
  { num: "05", title: "Land, Photo & Release (or Keep!)", desc: "Land your fish, get the perfect hero shot, and decide: catch-and-release or take it home? The captain handles fish safely and teaches proper handling throughout." },
];

const reviews = [
  {
    name: "Marcus W.",
    location: "Jacksonville, FL",
    text: "Three keeper redfish within the first hour. The captain knew every productive spot in the marsh. Best money I've spent on a fishing trip in years. We're booking again next fall.",
    date: "November 2024",
    rating: 5
  },
  {
    name: "Brian & Jake T.",
    location: "Columbia, SC",
    text: "My teenage son and I went for his birthday. He caught his first ever redfish — a 28-incher. The captain had incredible patience teaching him. Best dad-son trip I've ever had.",
    date: "August 2024",
    rating: 5
  },
  {
    name: "The Hunt Boys",
    location: "Augusta, GA",
    text: "Four of us on a half-day trip. Caught 8 reds, 4 trout, and 2 flounder between us. Couldn't have asked for better guides. They know where every fish is living in these marshes.",
    date: "October 2024",
    rating: 5
  }
];

export default function FishingPage() {
  const { openBooking } = useBooking();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const base = import.meta.env.BASE_URL?.replace(/\/$/, "") || "";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNavbar />

      {/* Hero */}
      <section id="tour-hero" className="relative h-[80vh] min-h-[560px] overflow-hidden flex items-end pb-10 pt-20">
        <div className="absolute inset-0 z-0">
          <img src="/images/fishing.jpg" alt="Angler with redfish catch in SC marsh" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <a href={`${base}/`} className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-primary transition-colors mb-5">
            <ChevronLeft className="h-4 w-4" /> Back to All Tours
          </a>
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-white px-3 py-1.5 rounded-full text-sm font-medium mb-3"
            style={{ boxShadow: "0 0 16px hsl(22 95% 52% / 0.2)" }}>
            <Fish className="h-4 w-4 text-primary" /> Anglers Choice
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4 leading-tight">
            Inshore<br />
            <span className="text-primary glow-orange-text">Fishing Trips</span>
          </h1>
          <p className="text-xl text-white/85 max-w-2xl mb-5">
            Target trophy redfish, speckled trout, and flounder in the nutrient-rich marsh creeks of the South Carolina Lowcountry. Expert local captains. All skill levels welcome.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-white/70 mb-4">
            <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> 4–8 Hours</span>
            <span className="flex items-center gap-2"><Users className="h-4 w-4 text-primary" /> Up to 6 Anglers</span>
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> SC Lowcountry Marshes</span>
            <span className="flex items-center gap-2"><Shield className="h-4 w-4 text-primary" /> License & Tackle Included</span>
          </div>
          <div className="mb-6">
            <span className="inline-block bg-primary/20 border border-primary/40 text-primary font-bold text-sm px-4 py-1.5 rounded-full">From $350/half-day</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={openBooking}
              className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-bold text-base hover:bg-primary/90 transition-all glow-orange inline-flex items-center gap-2"
            >
              <Anchor className="h-5 w-5" /> Book Now — Private Boat
            </button>
            <div className="flex items-center gap-2 text-white/60 text-sm self-center">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span>4.9 stars · 127 Google reviews</span>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider color="hsl(214 30% 95%)" />

      {/* Included + Species */}
      <section className="py-20 light-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="inline-flex items-center gap-2 text-primary text-sm font-bold tracking-widest uppercase mb-4">
                <Sparkles className="h-4 w-4" /> What's Included
              </div>
              <h2 className="text-4xl font-serif font-bold text-foreground mb-6">Show Up & Fish — We Handle the Rest</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                No gear? No license? No problem. Everything you need is on board. Our captains do the research so you spend every minute with your line in the water.
              </p>
              <ul className="space-y-4">
                {[
                  "All rods, reels, and terminal tackle provided",
                  "Live bait & premium artificial lures",
                  "SC saltwater fishing license included for all guests",
                  "Expert local captain with full tide & location knowledge",
                  "Private boat — your group only",
                  "Fish identification & handling instruction",
                  "Hero shot photography of your best catches",
                  "Catch-and-release or keep guidance",
                  "Cooler & ice for keeping fish on board",
                  "All ages & skill levels welcome — beginners to pros"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground/90">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 text-primary text-sm font-bold tracking-widest uppercase mb-4">
                <Trophy className="h-4 w-4" /> Target Species
              </div>
              <h2 className="text-4xl font-serif font-bold text-foreground mb-6">What's Biting in SC Waters</h2>
              <div className="space-y-3">
                {targetSpecies.map((s, i) => (
                  <div key={i} className="bg-card border border-border rounded-xl px-5 py-4 flex items-center justify-between hover:border-primary/30 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{s.icon}</span>
                      <div>
                        <p className="font-bold text-sm text-foreground">{s.name}</p>
                        <p className="text-xs text-muted-foreground">{s.difficulty}</p>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-primary bg-primary/10 border border-primary/20 rounded-full px-2.5 py-1">{s.season}</span>
                  </div>
                ))}
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
              <Anchor className="h-4 w-4" /> Your Trip
            </div>
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">What to Expect on the Water</h2>
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
          <h2 className="text-4xl font-serif font-bold text-foreground mb-10">Life on the Marsh</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { src: "/images/fishing.jpg", alt: "Angler and son with redfish in the marsh" },
              { src: "/images/redfish-action.jpg", alt: "Redfish leaping from the water" },
              { src: "/images/marsh-sunrise.jpg", alt: "Sunrise over the SC coastal marsh" }
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
              <Star className="h-4 w-4" /> Reviews
            </div>
            <h2 className="text-4xl font-serif font-bold text-foreground mb-3">Anglers Love It Here</h2>
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
                  <div className="bg-secondary/60 text-foreground/80 px-3 py-1 rounded-full text-xs font-medium border border-border">Fishing Trip</div>
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
              <Fish className="h-4 w-4" /> Questions
            </div>
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Fishing Trip FAQs</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-background border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-colors">
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
          <Fish className="h-12 w-12 text-primary mx-auto mb-6" style={{ filter: "drop-shadow(0 0 16px hsl(22 95% 52% / 0.6))" }} />
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Cast Your Line in <span className="text-primary glow-orange-text">SC Waters</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-3">
            Half-day and full-day options available. All experience levels, all ages. Book now — the fish are waiting.
          </p>
          <div className="inline-flex items-center gap-2 text-sm text-primary font-semibold bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
            <Clock className="h-4 w-4" /> Peak tide slots fill quickly — reserve your spot today
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={openBooking} className="bg-primary text-primary-foreground px-10 py-4 rounded-full text-lg font-bold hover:bg-primary/90 transition-all glow-orange inline-flex items-center gap-2 justify-center">
              <Anchor className="h-5 w-5" /> Book This Trip
            </button>
            <a href={`${base}/`} className="bg-card text-foreground px-10 py-4 rounded-full text-lg font-semibold border border-border hover:border-primary/40 transition-all inline-flex items-center gap-2 justify-center">
              View All Tours <ArrowRight className="h-5 w-5" />
            </a>
          </div>
          <p className="text-sm text-muted-foreground mt-6 flex items-center justify-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary" /> License included · Instant confirmation · Free cancellation up to 48 hrs
          </p>
        </div>
      </section>

      <SiteFooter />
      <SiteMobileBookingBar />
    </div>
  );
}
