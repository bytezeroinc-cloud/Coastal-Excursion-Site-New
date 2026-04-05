import React, { useState } from "react";
import { useBooking } from "@/components/BookingModal";
import { motion } from "framer-motion";
import {
  Sun, CheckCircle2, ChevronDown, Star, Anchor, MapPin,
  Clock, Users, ChevronLeft, Sparkles, Waves, Camera, Heart
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
    q: "What time does the sunset cruise depart?",
    a: "Departure time changes with the seasons — we time it so you arrive at Charleston Harbor and the Ravenel Bridge right as the sun drops below the horizon. We'll share the exact departure time when you book, typically 1.5–2 hours before sunset."
  },
  {
    q: "What's the difference between a shared and private sunset cruise?",
    a: "Our shared sunset cruise ($65/person) runs with a small group of up to 12 guests — perfect for couples or solo travelers. Our private sunset charter ($375 for 1–4, +$50/guest) means the entire boat is yours. BYOB welcome on private charters."
  },
  {
    q: "Will we see dolphins during the sunset cruise?",
    a: "Almost always! Golden hour is one of the most active feeding times for dolphins. Our captains specifically target dolphin feeding areas so you're likely to see pods of bottlenose dolphins as the sky turns orange and pink."
  },
  {
    q: "Can we bring food and drinks?",
    a: "On private sunset charters — absolutely. BYOB is fully welcome and we provide a large cooler with ice (no glass on deck, please). On shared cruises, snacks and non-alcoholic drinks are fine."
  },
  {
    q: "Is the sunset cruise good for a date night?",
    a: "It's one of the most romantic experiences in Charleston. Many couples book the private 2-person charter — just you, your partner, a USCG captain, and the entire Lowcountry sky to yourselves."
  },
  {
    q: "What if it's cloudy?",
    a: "Cloudy sunsets on the Lowcountry can be even more stunning — dramatic colors and moody skies over the marsh grass. We only cancel for severe weather (lightning/high winds). Light clouds are never a reason to cancel."
  }
];

const steps = [
  {
    num: "01",
    title: "Board at Shem Creek, Mt. Pleasant",
    desc: "Arrive at Tavern & Table dock (100 Church St., Mt. Pleasant, SC 29464) about 15 minutes before departure. Meet your USCG-certified captain, get settled, and set up your cooler if you're on a private charter."
  },
  {
    num: "02",
    title: "Cruise Through Golden Shem Creek",
    desc: "The marsh grass is already glowing gold as you depart. Blue herons and ospreys are fishing from the banks. Dolphins are often spotted right here in the creek within the first few minutes."
  },
  {
    num: "03",
    title: "Under the Ravenel Bridge at Dusk",
    desc: "Pass under the iconic Arthur Ravenel Jr. Bridge as Charleston's skyline silhouettes against the deepening sky. This is the money shot — have your camera ready. The light is indescribable."
  },
  {
    num: "04",
    title: "Golden Hour on the Harbor",
    desc: "Drift through Charleston Harbor as the sun melts into the horizon, turning the water every shade of orange, coral, and violet. Dolphins frequently feed in the harbor at this exact time each evening."
  },
  {
    num: "05",
    title: "Return Under the Stars",
    desc: "Glide back to Shem Creek as the first stars appear over the marsh. The city lights of Charleston glow behind you. It's the perfect ending to any day in the Lowcountry."
  }
];

const highlights = [
  { icon: <Sun className="h-6 w-6" />, title: "Golden Hour Colors", desc: "The SC Lowcountry produces some of the most vivid sunsets on the East Coast — endless sky, marsh, and water lit up like fire." },
  { icon: <Waves className="h-6 w-6" />, title: "Dolphin Feeding Hour", desc: "Bottlenose dolphins are most active at dusk. Our captains know the feeding corridors and you'll almost always see them at golden hour." },
  { icon: <Camera className="h-6 w-6" />, title: "The Ravenel Bridge at Dusk", desc: "Passing under or near Charleston's iconic cable-stayed bridge as the sky burns orange is genuinely one of the most photographed moments in the Lowcountry." },
  { icon: <Heart className="h-6 w-6" />, title: "Couples & Date Night", desc: "Private sunset charters are one of Charleston's most unforgettable date experiences. Just you, your partner, and the magic of the marsh." },
  { icon: <Sparkles className="h-6 w-6" />, title: "Small Group Feel", desc: "Shared cruises max out at 12 guests so it always feels intimate. Private charters are 100% exclusive — just your crew." },
  { icon: <MapPin className="h-6 w-6" />, title: "Shem Creek to Harbor Route", desc: "Our route covers iconic Shem Creek, the Ravenel Bridge, and Charleston Harbor — the most scenic 2-hour loop in all of Mt. Pleasant." },
];

const reviews = [
  {
    name: "Amanda R.",
    location: "Charlotte, NC",
    text: "My boyfriend proposed during our private sunset cruise and it was absolutely perfect. The captain timed everything so the sky was on fire when he got down on one knee. We'll never forget it.",
    rating: 5,
    date: "September 2024",
  },
  {
    name: "The Kowalski Family",
    location: "Columbus, OH",
    text: "We booked the sunset cruise for our last night in Charleston. Total perfection — dolphins showed up right on schedule, the Ravenel Bridge looked unreal in the light, and we got about 200 incredible photos.",
    rating: 5,
    date: "August 2024",
  },
  {
    name: "Brooke & Danielle",
    location: "Atlanta, GA",
    text: "Girls trip tradition — we do the sunset cruise every time we come to Charleston now. The shared cruise is perfect for just two people and the other guests were lovely. SO worth every penny.",
    rating: 5,
    date: "June 2024",
  }
];

export default function SunsetPage() {
  const { openBooking } = useBooking();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const base = import.meta.env.BASE_URL?.replace(/\/$/, "") || "";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNavbar />

      {/* Hero */}
      <section id="tour-hero" className="relative h-[90vh] min-h-[600px] overflow-hidden flex items-center pt-24 pb-12">
        <div className="absolute inset-0 z-0">
          <img src="/images/marsh-sunrise.png" alt="Golden sunset over Shem Creek and Charleston Harbor SC" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/55 via-background/20 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <a href={`${base}/`} className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-primary transition-colors mb-5">
            <ChevronLeft className="h-4 w-4" /> Back to All Tours
          </a>
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-white px-3 py-1.5 rounded-full text-sm font-medium mb-3"
            style={{ boxShadow: "0 0 16px hsl(22 95% 52% / 0.2)" }}>
            <Sun className="h-4 w-4 text-primary" /> Charleston's Most Romantic Boat Experience
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4 leading-tight">
            Sunset<br />
            <span className="text-primary glow-orange-text">Cruise</span>
          </h1>
          <p className="text-xl text-white/85 max-w-2xl mb-5">
            Watch Charleston's legendary Lowcountry sky explode in color from the water. Bottlenose dolphins feed at golden hour, the Ravenel Bridge glows against an orange sky, and marsh grass turns to pure gold. The most beautiful 2 hours in all of South Carolina.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-white/70 mb-4">
            <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> 2 Hours</span>
            <span className="flex items-center gap-2"><Users className="h-4 w-4 text-primary" /> Shared (up to 12) or Private (up to 23)</span>
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Shem Creek, Mt. Pleasant, SC</span>
            <span className="flex items-center gap-2"><Sun className="h-4 w-4 text-primary" /> Daily — Seasonal Departure Times</span>
          </div>
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="inline-block bg-primary/20 border border-primary/40 text-primary font-bold text-sm px-4 py-1.5 rounded-full">Shared: $65/person</span>
            <span className="inline-block bg-primary/20 border border-primary/40 text-primary font-bold text-sm px-4 py-1.5 rounded-full">Private: $375 for 1–4 · +$50/guest up to 23</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={openBooking}
              className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-bold text-base hover:bg-primary/90 transition-all glow-orange inline-flex items-center gap-2"
            >
              <Anchor className="h-5 w-5" /> Book Your Sunset Cruise
            </button>
            <div className="flex items-center gap-2 text-white/60 text-sm self-center">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span>4.9 stars · 127 Google reviews</span>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider color="hsl(214 30% 95%)" />

      {/* Highlights Grid */}
      <section className="py-20 light-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-bold tracking-widest uppercase mb-3">
              <Sun className="h-4 w-4" /> Why Sunset on the Water
            </div>
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Magic Hour. Every Single Night.</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The SC Lowcountry at golden hour is unlike anywhere else on earth — and we know exactly where to be when the sky ignites.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {h.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">{h.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider color="hsl(218 45% 7%)" />

      {/* What's included */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-primary text-sm font-bold tracking-widest uppercase mb-4">
                <Sparkles className="h-4 w-4" /> What's Included
              </div>
              <h2 className="text-4xl font-serif font-bold text-foreground mb-6">Everything You Need for the Perfect Evening</h2>
              <ul className="space-y-4">
                {[
                  "2-hour guided sunset cruise with USCG-certified captain",
                  "Prime positioning on the Ravenel Bridge and Charleston Harbor at magic hour",
                  "Bottlenose dolphin spotting at peak golden-hour feeding time",
                  "Ecological narration — dolphin behavior, marsh birds, local history",
                  "Life jackets for all guests · safety briefing included",
                  "Shared cruise: intimate small groups of up to 12 guests total",
                  "Private charter: entire boat is yours — BYOB fully welcome",
                  "Cooler with ice provided on private charters (no glass on deck)",
                  "Bluetooth stereo on private charters — play your playlist",
                  "100% private experience on charter option — no strangers, ever",
                  "Free cancellation 48 hours before departure"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground/90">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
                <img src="/images/marsh-sunrise.png" alt="Stunning sunset over SC Lowcountry marsh from a boat" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-card border border-border rounded-2xl p-5 shadow-xl max-w-[240px]">
                <div className="flex items-center gap-1.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-foreground/90 italic">"The most beautiful thing I've ever seen. The sky, the dolphins, the bridge... I cried."</p>
                <p className="text-xs text-muted-foreground mt-2 font-medium">— Amanda R., Charlotte NC</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider color="hsl(214 30% 95%)" />

      {/* How it works */}
      <section className="py-20 light-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-bold tracking-widest uppercase mb-3">
              <Anchor className="h-4 w-4" /> How It Works
            </div>
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Your Evening, Step by Step</h2>
          </div>
          <div className="space-y-8 max-w-3xl mx-auto">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-6 items-start"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                  <span className="font-serif font-bold text-primary text-lg">{step.num}</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-1">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider color="hsl(218 45% 7%)" />

      {/* Pricing CTA */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-bold tracking-widest uppercase mb-4">
            <Sun className="h-4 w-4" /> Pricing & Booking
          </div>
          <h2 className="text-4xl font-serif font-bold text-foreground mb-10">Choose Your Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-card border border-border rounded-2xl p-8 text-left hover:border-primary/40 transition-colors">
              <div className="text-primary font-bold uppercase text-xs tracking-widest mb-2">Shared Cruise</div>
              <div className="text-4xl font-serif font-bold text-foreground mb-1">$65 <span className="text-lg font-normal text-muted-foreground">/ person</span></div>
              <div className="text-sm text-muted-foreground mb-5">2 hours · Max 12 guests total</div>
              <ul className="space-y-2.5 mb-6">
                {["Small intimate group", "Expert captain & naturalist narration", "Dolphin spotting at golden hour", "Ravenel Bridge & Harbor views", "Snacks welcome"].map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <button onClick={openBooking} className="w-full border border-primary text-primary font-bold py-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                Book Shared Cruise
              </button>
            </div>
            <div className="bg-card border-2 border-primary rounded-2xl p-8 text-left relative" style={{ boxShadow: "0 0 30px hsl(22 95% 52% / 0.15)" }}>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">MOST POPULAR</div>
              <div className="text-primary font-bold uppercase text-xs tracking-widest mb-2">Private Charter</div>
              <div className="text-4xl font-serif font-bold text-foreground mb-1">$375 <span className="text-lg font-normal text-muted-foreground">for 1–4</span></div>
              <div className="text-sm text-muted-foreground mb-5">+$50/guest up to 23 · 2 hours minimum</div>
              <ul className="space-y-2.5 mb-6">
                {["Entire boat is 100% yours", "BYOB welcome — cooler with ice included", "Bluetooth stereo — play your playlist", "Custom route options", "Roamer IV: full bathroom, 30-ft luxury cruiser", "Perfect for couples, groups & special occasions"].map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <button onClick={openBooking} className="w-full bg-primary text-primary-foreground font-bold py-3 rounded-full hover:bg-primary/90 transition-all glow-orange">
                Book Private Charter
              </button>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">Kids under 5 ride free · Free cancellation 48 hours before departure · (843) 508-1600</p>
        </div>
      </section>

      <WaveDivider color="hsl(214 30% 95%)" />

      {/* Reviews */}
      <section className="py-20 light-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-bold tracking-widest uppercase mb-3">
              <Star className="h-4 w-4 fill-primary" /> Guest Reviews
            </div>
            <h2 className="text-4xl font-serif font-bold text-foreground mb-3">Words from the Water</h2>
            <div className="flex items-center justify-center gap-2">
              <GoogleG />
              <span className="text-foreground font-bold">4.9</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-muted-foreground text-sm">on Google Business</span>
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
                className="bg-card border border-border rounded-2xl p-6"
              >
                <div className="flex mb-3">
                  {[...Array(r.rating)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/85 italic mb-4 text-sm leading-relaxed">"{r.text}"</p>
                <div>
                  <div className="font-bold text-sm text-foreground">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.location} · {r.date}</div>
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
            <div className="inline-flex items-center gap-2 text-primary text-sm font-bold tracking-widest uppercase mb-3">
              <Sun className="h-4 w-4" /> FAQ
            </div>
            <h2 className="text-4xl font-serif font-bold text-foreground mb-3">Common Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl overflow-hidden">
                <button
                  className="w-full text-left flex items-center justify-between gap-4 p-6 hover:bg-muted/30 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-bold text-foreground">{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 text-primary shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-muted-foreground leading-relaxed border-t border-border pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider color="hsl(218 40% 13%)" />

      {/* Final CTA */}
      <section className="py-20 bg-[hsl(218_40%_13%)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-bold tracking-widest uppercase mb-4">
            <Anchor className="h-4 w-4" /> Book Your Sunset Cruise
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-5">
            Tonight Could Be<br />
            <span className="text-primary glow-orange-text">Unforgettable</span>
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Sunset spots book fast — especially on weekends and in peak season (April–September). Secure your evening on the water today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openBooking}
              className="bg-primary text-primary-foreground px-10 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all glow-orange inline-flex items-center gap-2"
            >
              <Anchor className="h-5 w-5" /> Book Sunset Cruise
            </button>
            <a href="tel:+18435081600" className="border border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all inline-flex items-center gap-2">
              (843) 508-1600
            </a>
          </div>
          <p className="text-white/40 text-sm mt-5">Free cancellation 48 hours before · Kids under 5 ride free</p>
        </div>
      </section>

      <SiteFooter />
      <SiteMobileBookingBar />
    </div>
  );
}
