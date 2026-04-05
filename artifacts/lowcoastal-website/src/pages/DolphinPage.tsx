import React, { useState } from "react";
import { useBooking } from "@/components/BookingModal";
import { motion } from "framer-motion";
import {
  Waves, CheckCircle2, ChevronDown, Star, ArrowRight, Anchor, MapPin,
  Clock, Users, BadgeCheck, Shield, Sun, Camera, ChevronLeft, Binoculars, Sparkles, Heart
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
    q: "Will we definitely see dolphins?",
    a: "Dolphins are extremely common in these waters year-round. Sightings happen on nearly every single trip — often multiple pods. Our captains know exactly where they feed and socialize."
  },
  {
    q: "What other wildlife might we see?",
    a: "Beyond dolphins, you may see brown pelicans diving, ospreys fishing, great blue herons, wood storks, bald eagles, bottlenose dolphin calves, and loggerhead sea turtles depending on the season."
  },
  {
    q: "Can I bring my camera / drone?",
    a: "Absolutely! Bring your best camera setup. Our guides help position the boat for the best shots. Drone use is at the captain's discretion in some wildlife areas."
  },
  {
    q: "What time of day is best for dolphins?",
    a: "Early morning and golden hour (1–2 hours before sunset) are most active for dolphins. We offer both morning and afternoon departures — ask about golden hour sunset tours!"
  },
  {
    q: "Is the tour narrated?",
    a: "Yes! Our guides provide ecological narration throughout — explaining dolphin behavior, ecosystem health, local history, and pointing out every species of bird and marine life we encounter."
  }
];

const steps = [
  {
    num: "01",
    title: "Board & Safety Briefing",
    desc: "Meet your captain and naturalist guide at the marina. Everyone gets fitted with life jackets and receives a brief on what to watch for and how to interact respectfully with wildlife."
  },
  {
    num: "02",
    title: "Cruise the Tidal Creeks",
    desc: "Glide through winding Spartina grass creeks and open estuaries. Your guide narrates the ecology of the Lowcountry estuary — one of the most productive marine ecosystems on the East Coast."
  },
  {
    num: "03",
    title: "Dolphin Encounter",
    desc: "Spot your first fins breaking the surface. Our captains know the feeding corridors. Dolphins often ride the bow wave and come within just a few feet of the boat."
  },
  {
    num: "04",
    title: "Open Water & Bird Watching",
    desc: "Cruise into wider estuarine waters to spot pelicans, herons, ospreys, and eagles. The guide identifies every species and shares fascinating natural history insights."
  },
  {
    num: "05",
    title: "Sunset Return",
    desc: "Head back through golden-lit tidal creeks as the sky turns pink and orange over the marsh. One of the most photographed sunsets in all of South Carolina."
  }
];

const wildlife = [
  { name: "Atlantic Bottlenose Dolphins", icon: <Waves className="h-5 w-5" />, chance: "Near Daily" },
  { name: "Brown Pelicans", icon: <Binoculars className="h-5 w-5" />, chance: "Every Trip" },
  { name: "Great Blue Herons", icon: <Binoculars className="h-5 w-5" />, chance: "Every Trip" },
  { name: "Bald Eagles", icon: <Binoculars className="h-5 w-5" />, chance: "Seasonal" },
  { name: "Loggerhead Sea Turtles", icon: <Heart className="h-5 w-5" />, chance: "Summer" },
  { name: "Osprey", icon: <Binoculars className="h-5 w-5" />, chance: "Every Trip" },
];

const reviews = [
  {
    name: "Karen & Tom B.",
    location: "Nashville, TN",
    text: "We spotted two full pods of dolphins and they came right up to the boat! Our grandkids couldn't stop screaming with excitement. The marsh sunset was breathtaking.",
    date: "December 2024",
    rating: 5
  },
  {
    name: "Rachel P.",
    location: "Atlanta, GA",
    text: "The wildlife narration made this so much more than just a boat ride. We saw dolphins, a bald eagle, and a loggerhead turtle all in one 3-hour trip. Unbelievable.",
    date: "August 2024",
    rating: 5
  },
  {
    name: "Mike D.",
    location: "Charlotte, NC",
    text: "Took my wildlife photography group and every single person got incredible shots. The captain is incredibly skilled at positioning the boat for perfect dolphin photos.",
    date: "September 2024",
    rating: 5
  }
];

export default function DolphinPage() {
  const { openBooking } = useBooking();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const base = import.meta.env.BASE_URL?.replace(/\/$/, "") || "";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNavbar />

      {/* Hero */}
      <section id="tour-hero" className="relative h-[80vh] min-h-[560px] overflow-hidden flex items-end pb-10 pt-20">
        <div className="absolute inset-0 z-0">
          <img src="/images/dolphins.jpg" alt="Dolphins leaping in South Carolina coastal waters" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <a href={`${base}/`} className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-primary transition-colors mb-5">
            <ChevronLeft className="h-4 w-4" /> Back to All Tours
          </a>
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-white px-3 py-1.5 rounded-full text-sm font-medium mb-3"
            style={{ boxShadow: "0 0 16px hsl(22 95% 52% / 0.2)" }}>
            <Waves className="h-4 w-4 text-primary" /> Family Favorite
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4 leading-tight">
            Dolphin &<br />
            <span className="text-primary glow-orange-text">Wildlife Tours</span>
          </h1>
          <p className="text-xl text-white/85 max-w-2xl mb-5">
            Cruise the pristine estuaries of the South Carolina Lowcountry and come face-to-face with wild Atlantic bottlenose dolphins, sea birds, and breathtaking coastal landscapes.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-white/70 mb-4">
            <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> 2.5–3 Hours</span>
            <span className="flex items-center gap-2"><Users className="h-4 w-4 text-primary" /> All Ages</span>
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Edisto Island & Beaufort, SC</span>
            <span className="flex items-center gap-2"><Sun className="h-4 w-4 text-primary" /> Morning & Sunset Options</span>
          </div>
          <div className="mb-6">
            <span className="inline-block bg-primary/20 border border-primary/40 text-primary font-bold text-sm px-4 py-1.5 rounded-full">From $59/person</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={openBooking}
              className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-bold text-base hover:bg-primary/90 transition-all glow-orange inline-flex items-center gap-2"
            >
              <Anchor className="h-5 w-5" /> Book Now — Limited Spots
            </button>
            <div className="flex items-center gap-2 text-white/60 text-sm self-center">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span>4.9 stars · 127 Google reviews</span>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider color="hsl(214 30% 95%)" />

      {/* Included + Wildlife */}
      <section className="py-20 light-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="inline-flex items-center gap-2 text-primary text-sm font-bold tracking-widest uppercase mb-4">
                <Sparkles className="h-4 w-4" /> What's Included
              </div>
              <h2 className="text-4xl font-serif font-bold text-foreground mb-6">A True Wildlife Encounter</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                More than a sightseeing cruise — our naturalist guides turn every trip into a living documentary. Come eye-to-eye with wild dolphins in their natural habitat.
              </p>
              <ul className="space-y-4">
                {[
                  "Naturalist guide with full ecological narration",
                  "USCG-certified pontoon boat with shade & comfort seating",
                  "Winding tidal creek & open estuary cruise",
                  "Dolphin behavior observation & education",
                  "Bird & marine wildlife identification guide",
                  "Photography positioning assistance",
                  "Bottled water on board",
                  "Morning & golden hour sunset departures available"
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
                <Binoculars className="h-4 w-4" /> Wildlife You May See
              </div>
              <h2 className="text-4xl font-serif font-bold text-foreground mb-6">The SC Coast is Alive</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {wildlife.map((w, i) => (
                  <div key={i} className="bg-card border border-border rounded-xl p-4 flex items-center gap-3 hover:border-primary/30 transition-colors">
                    <div className="text-primary shrink-0">{w.icon}</div>
                    <div>
                      <p className="font-semibold text-sm text-foreground">{w.name}</p>
                      <p className="text-xs text-primary font-medium">{w.chance}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-2xl overflow-hidden border border-border shadow-xl aspect-[16/9]">
                <img src="/images/dolphin-guide.jpg" alt="Guide pointing out dolphins to guests" className="w-full h-full object-cover" />
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
              <Anchor className="h-4 w-4" /> Your Journey
            </div>
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">What to Expect</h2>
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
          <h2 className="text-4xl font-serif font-bold text-foreground mb-10">Life on the Water</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { src: "/images/dolphins.jpg", alt: "Dolphins leaping beside the tour boat" },
              { src: "/images/marsh-sunrise.jpg", alt: "Golden hour over the SC coastal marsh" },
              { src: "/images/hero-boat.png", alt: "Aerial view of pontoon boat in coastal waters" }
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
            <h2 className="text-4xl font-serif font-bold text-foreground mb-3">What Our Guests Say</h2>
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
                  <div className="bg-secondary/60 text-foreground/80 px-3 py-1 rounded-full text-xs font-medium border border-border">Wildlife Tour</div>
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
              <Binoculars className="h-4 w-4" /> Questions
            </div>
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Wildlife Tour FAQs</h2>
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
          <Waves className="h-12 w-12 text-primary mx-auto mb-6" style={{ filter: "drop-shadow(0 0 16px hsl(22 95% 52% / 0.6))" }} />
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Meet the <span className="text-primary glow-orange-text">Dolphins</span> Up Close
          </h2>
          <p className="text-lg text-muted-foreground mb-3">
            Limited spots per departure. Book your dolphin & wildlife tour today and prepare to be amazed.
          </p>
          <div className="inline-flex items-center gap-2 text-sm text-primary font-semibold bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
            <Clock className="h-4 w-4" /> Sunrise & sunset slots go first — book early
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={openBooking} className="bg-primary text-primary-foreground px-10 py-4 rounded-full text-lg font-bold hover:bg-primary/90 transition-all glow-orange inline-flex items-center gap-2 justify-center">
              <Anchor className="h-5 w-5" /> Book This Tour
            </button>
            <a href={`${base}/`} className="bg-card text-foreground px-10 py-4 rounded-full text-lg font-semibold border border-border hover:border-primary/40 transition-all inline-flex items-center gap-2 justify-center">
              View All Tours <ArrowRight className="h-5 w-5" />
            </a>
          </div>
          <p className="text-sm text-muted-foreground mt-6 flex items-center justify-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary" /> Instant confirmation · Free cancellation up to 48 hrs
          </p>
        </div>
      </section>

      <SiteFooter />
      <SiteMobileBookingBar />
    </div>
  );
}
