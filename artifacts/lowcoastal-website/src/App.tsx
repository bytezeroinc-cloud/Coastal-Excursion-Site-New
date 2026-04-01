import React, { useState, useEffect } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";
const SharkToothPage = lazy(() => import("@/pages/SharkToothPage"));
const DolphinPage = lazy(() => import("@/pages/DolphinPage"));
const GroupCharterPage = lazy(() => import("@/pages/GroupCharterPage"));
const FishingPage = lazy(() => import("@/pages/FishingPage"));
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Anchor, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2, 
  ChevronDown, 
  Star, 
  ArrowRight,
  Fish,
  Sun,
  ShieldCheck,
  Users,
  Clock,
  Instagram,
  Facebook,
  Menu,
  X,
  Compass,
  Trophy,
  Heart,
  Binoculars,
  Award,
  Waves,
  Sparkles,
  BadgeCheck,
  Camera,
  Gem,
  ThumbsUp,
  Sailboat
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const queryClient = new QueryClient();

function WaveDivider({ flip = false, color = "hsl(218 42% 11%)" }: { flip?: boolean; color?: string }) {
  return (
    <div className={`relative w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""}`} style={{ height: 72 }}>
      <svg
        viewBox="0 0 1440 72"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 w-full h-full"
        style={{ fill: color }}
      >
        <path d="M0,36 C240,72 480,0 720,36 C960,72 1200,0 1440,36 L1440,72 L0,72 Z" />
      </svg>
    </div>
  );
}

function WaveDividerTop({ color = "hsl(218 45% 7%)" }: { color?: string }) {
  return (
    <div className="relative w-full overflow-hidden leading-none" style={{ height: 72 }}>
      <svg
        viewBox="0 0 1440 72"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 w-full h-full"
        style={{ fill: color }}
      >
        <path d="M0,36 C240,0 480,72 720,36 C960,0 1200,72 1440,36 L1440,0 L0,0 Z" />
      </svg>
    </div>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-border/60" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} data-testid="nav-logo">
            <Anchor className="h-6 w-6 text-primary" style={{ filter: "drop-shadow(0 0 8px hsl(22 95% 52% / 0.6))" }} />
            <span className="font-serif font-bold text-xl tracking-tight text-foreground">Low Coastal</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('experiences')} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Experiences</button>
            <button onClick={() => scrollTo('why-us')} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Why Us</button>
            <button onClick={() => scrollTo('gallery')} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Gallery</button>
            <button onClick={() => scrollTo('reviews')} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Reviews</button>
            <button onClick={() => scrollTo('faq')} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">FAQ</button>
            <button 
              onClick={() => scrollTo('booking')} 
              className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-semibold hover:bg-primary/90 transition-all glow-orange-sm hover:glow-orange hover:-translate-y-0.5 active:translate-y-0"
              data-testid="nav-book-btn"
            >
              Book Now
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-foreground" aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur border-b border-border p-4 flex flex-col gap-4">
          <button onClick={() => scrollTo('experiences')} className="text-left font-medium py-2 text-foreground/80 hover:text-primary transition-colors">Experiences</button>
          <button onClick={() => scrollTo('why-us')} className="text-left font-medium py-2 text-foreground/80 hover:text-primary transition-colors">Why Us</button>
          <button onClick={() => scrollTo('gallery')} className="text-left font-medium py-2 text-foreground/80 hover:text-primary transition-colors">Gallery</button>
          <button onClick={() => scrollTo('reviews')} className="text-left font-medium py-2 text-foreground/80 hover:text-primary transition-colors">Reviews</button>
          <button onClick={() => scrollTo('faq')} className="text-left font-medium py-2 text-foreground/80 hover:text-primary transition-colors">FAQ</button>
          <button onClick={() => scrollTo('booking')} className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold text-center w-full mt-2 glow-orange-sm">
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
}

const heroSlides = [
  { src: "/images/hero-boat.png", alt: "Aerial view of tour boat on beautiful teal coastal waters" },
  { src: "/images/kids-teeth.png", alt: "Kids excitedly holding shark teeth they found on the beach" },
  { src: "/images/dolphins.png", alt: "Dolphins leaping near a tour boat on the SC coast" },
  { src: "/images/marsh-sunrise.png", alt: "Golden hour over the stunning South Carolina coastal marshes" },
  { src: "/images/bachelorette.png", alt: "Bachelorette group celebrating on a boat on the water" },
  { src: "/images/couple-beach.png", alt: "Couple finding shark teeth together on a pristine barrier island beach" },
];

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);
      setPrevSlide(currentSlide);
      setCurrentSlide(prev => (prev + 1) % heroSlides.length);
      const timer = setTimeout(() => {
        setPrevSlide(null);
        setTransitioning(false);
      }, 1200);
      return () => clearTimeout(timer);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className="relative h-[100dvh] min-h-[600px] w-full overflow-hidden flex items-center justify-center pt-20" aria-label="Hero Section">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        {prevSlide !== null && (
          <img
            key={`prev-${prevSlide}`}
            src={heroSlides[prevSlide].src}
            alt={heroSlides[prevSlide].alt}
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ opacity: transitioning ? 0 : 1, transition: "opacity 1.2s ease-in-out" }}
          />
        )}
        <img
          key={`current-${currentSlide}`}
          src={heroSlides[currentSlide].src}
          alt={heroSlides[currentSlide].alt}
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ opacity: 1, transition: "opacity 1.2s ease-in-out" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(218,45%,7%)]/70 via-[hsl(218,45%,7%)]/40 to-[hsl(218,45%,7%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(218,45%,7%)]/30 via-transparent to-[hsl(218,45%,7%)]/20"></div>
      </motion.div>

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setPrevSlide(currentSlide); setCurrentSlide(i); }}
            className={`h-2 rounded-full transition-all duration-300 ${i === currentSlide ? "bg-primary w-6" : "bg-white/40 w-2"}`}
            style={i === currentSlide ? { boxShadow: "0 0 8px hsl(22 95% 52% / 0.7)" } : {}}
            aria-label={`Go to slide ${i + 1}`}
            data-testid={`hero-slide-dot-${i}`}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-10">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-[1.1] tracking-tight"
        >
          Find Your Megalodon.<br />
          <span className="text-primary glow-orange-text">Make Your Memory.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-2xl text-white/85 max-w-2xl mx-auto mb-10 font-light"
        >
          Premium boat tours specializing in prehistoric shark tooth hunting, dolphin watching, and authentic coastal adventures on the SC Lowcountry.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex items-center justify-center gap-6 text-white/80 text-sm"
        >
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-primary" />
            <span>USCG Certified</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Star className="h-4 w-4 text-primary fill-primary" />
            <span>4.9 Google Rating</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Heart className="h-4 w-4 text-primary fill-primary" />
            <span>Family Friendly</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="flex items-center justify-center"
        >
          <button 
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary text-primary-foreground px-10 py-4 rounded-full text-lg font-bold hover:bg-primary/90 transition-all glow-orange hover:scale-105 active:scale-100 flex items-center justify-center gap-2"
            data-testid="hero-book-btn"
          >
            <Anchor className="h-5 w-5" />
            Book Your Adventure
          </button>
        </motion.div>
      </div>

      <button
        onClick={() => document.getElementById('experiences')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce text-primary/80 hover:text-primary transition-colors"
        aria-label="Scroll to experiences"
        data-testid="hero-scroll-down"
        style={{ filter: "drop-shadow(0 0 6px hsl(22 95% 52% / 0.5))" }}
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
}

const experiences = [
  {
    id: "shark-teeth",
    path: "/shark-tooth-hunting",
    title: "Shark Tooth Hunting",
    desc: "Our hero experience. We take you to remote, boat-access-only barrier island beaches where prehistoric megalodon teeth wash ashore. Perfect for all ages — every fossil hunter's dream.",
    image: "/images/kids-teeth.png",
    icon: <Gem className="h-6 w-6" />,
    badge: "Most Popular",
    features: ["Remote beach access", "Fossil identification guide", "Keep everything you find", "Expert tide timing"]
  },
  {
    id: "dolphins",
    path: "/dolphin-wildlife",
    title: "Dolphin & Wildlife Tours",
    desc: "Cruise the pristine estuarine waters and winding creeks to witness Atlantic bottlenose dolphins feeding and playing in their natural habitat, alongside eagles and pelicans.",
    image: "/images/dolphins.png",
    icon: <Waves className="h-6 w-6" />,
    badge: "Family Favorite",
    features: ["Golden hour options", "Bird & dolphin watching", "Ecological insights", "Photography spots"]
  },
  {
    id: "groups",
    path: "/group-charters",
    title: "Bachelorette & Group Charters",
    desc: "Celebrate on the water! A private charter for your bachelorette party, family reunion, or corporate retreat. Bring your drinks, play your music, and let us handle the rest.",
    image: "/images/bachelorette.png",
    icon: <Sparkles className="h-6 w-6" />,
    badge: "Private Charter",
    features: ["Fully private boat", "Customizable itinerary", "Bluetooth sound system", "BYOB welcome"]
  },
  {
    id: "fishing",
    path: "/inshore-fishing",
    title: "Inshore Fishing Trips",
    desc: "Target redfish, trout, and flounder in the nutrient-rich marshes. Whether you're a seasoned angler or teaching the kids to cast, our captains know exactly where the fish are biting.",
    image: "/images/fishing.png",
    icon: <Fish className="h-6 w-6" />,
    badge: "Anglers Choice",
    features: ["Bait & tackle provided", "Licenses included", "Expert local guidance", "All skill levels"]
  }
];

function Experiences() {
  return (
    <section id="experiences" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-bold tracking-widest uppercase mb-3">
            <Compass className="h-4 w-4" />
            <span>Our Excursions</span>
            <Compass className="h-4 w-4" />
          </div>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Choose Your Adventure</h3>
          <p className="text-lg text-muted-foreground">
            From the thrill of finding prehistoric fossils to relaxing sunset cruises, we offer experiences tailored for families, groups, and wildlife enthusiasts along the SC Lowcountry coast.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden border border-border shadow-lg hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={exp.image} 
                  alt={exp.title} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4 bg-background/90 backdrop-blur rounded-full p-3 text-primary shadow-sm" style={{ boxShadow: "0 0 12px hsl(22 95% 52% / 0.3)" }}>
                  {exp.icon}
                </div>
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full" style={{ boxShadow: "0 0 12px hsl(22 95% 52% / 0.4)" }}>
                  {exp.badge}
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-serif font-bold mb-3 text-card-foreground">{exp.title}</h4>
                <p className="text-muted-foreground mb-6 leading-relaxed">{exp.desc}</p>
                <ul className="space-y-2 mb-8">
                  {exp.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-foreground/90">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3">
                  <a
                    href={`${import.meta.env.BASE_URL?.replace(/\/$/, "") || ""}${exp.path}`}
                    className="flex-1 py-3 rounded-lg border border-border text-foreground/80 font-semibold hover:border-primary/40 hover:text-primary transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    Learn More <ArrowRight className="h-4 w-4" />
                  </a>
                  <button 
                    onClick={() => {
                      const select = document.getElementById('tourType') as HTMLSelectElement;
                      if(select) select.value = exp.id;
                      document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex-1 py-3 rounded-lg bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all hover:glow-orange-sm flex items-center justify-center gap-2 text-sm"
                    data-testid={`book-${exp.id}-btn`}
                  >
                    <Anchor className="h-4 w-4" />
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const features = [
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "USCG Certified",
      desc: "Top-tier safety standards. Expert captains who know these waters like the back of their hand.",
    },
    {
      icon: <Sailboat className="h-6 w-6" />,
      title: "Immaculate Boats",
      desc: "Spacious, clean pontoons designed for comfort. Plenty of shade, comfortable seating, and a smooth ride.",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "All Ages Welcome",
      desc: "From toddlers discovering their first shell to grandparents enjoying the breeze. Safe and accessible for everyone.",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Local Secrets",
      desc: "We take you to the hidden beaches and pristine marshlands that the crowded commercial tours miss.",
    },
    {
      icon: <Camera className="h-6 w-6" />,
      title: "Instagram-Worthy",
      desc: "Every trip is a photo story. Stunning coastal scenery, wildlife moments, and fossil finds for unforgettable shots.",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Top-Rated Locally",
      desc: "Consistently rated #1 shark tooth hunting tour on Google and TripAdvisor across the South Carolina coast.",
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-muted relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-5/12 relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-black/40 relative z-10 border border-border/50">
              <img src="/images/family-boat.png" alt="Happy family enjoying a boat tour" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-56 h-56 bg-primary/15 rounded-full blur-3xl z-0" />
            <div className="absolute -top-8 -left-8 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl z-0" />
            <div className="absolute bottom-8 left-8 z-20 bg-card/90 backdrop-blur-sm border border-border rounded-2xl px-5 py-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="bg-primary/20 rounded-full p-2">
                  <Trophy className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-sm text-foreground">#1 Rated Tour</p>
                  <p className="text-xs text-muted-foreground">South Carolina Lowcountry</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="w-full lg:w-7/12">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-bold tracking-widest uppercase mb-3">
              <Sparkles className="h-4 w-4" />
              <span>The Low Coastal Difference</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Safe. Clean. Unforgettable.</h3>
            <p className="text-lg text-muted-foreground mb-10">
              We're not just another boat ride. We're a premium coastal experience built on safety, comfort, and local expertise. When you step onto our boats, you're family.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex gap-4 items-start group"
                >
                  <div className="bg-card w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-sm text-primary border border-border group-hover:border-primary/50 group-hover:shadow-primary/20 group-hover:shadow-md transition-all">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-bold mb-1 text-foreground">{f.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const images = [
    { src: "/images/teeth-close.png", alt: "Close up of fossilized shark teeth on sand", span: "" },
    { src: "/images/couple-beach.png", alt: "Couple walking on beach finding teeth", span: "" },
    { src: "/images/marsh-sunrise.png", alt: "Beautiful coastal marsh at golden hour", span: "" },
    { src: "/images/dolphins.png", alt: "Dolphins leaping beside the tour boat", span: "md:col-span-2" },
    { src: "/images/fishing.png", alt: "Angler and son with redfish catch", span: "" },
    { src: "/images/hero-boat.png", alt: "Aerial view of boat on coastal waters", span: "" },
  ];

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-bold tracking-widest uppercase mb-3">
              <Camera className="h-4 w-4" />
              <span>The Gallery</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Glimpses of the Coast</h2>
            <p className="text-lg text-muted-foreground">Follow us <a href="#" className="text-primary hover:underline font-medium">@LowCoastalExcursion</a> for daily adventures and trip highlights.</p>
          </div>
          <button className="flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors shrink-0">
            <Instagram className="h-5 w-5" />
            View Full Gallery <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`rounded-2xl overflow-hidden group cursor-pointer aspect-[4/3] border border-border/50 ${img.span}`}
            >
              <div className="relative w-full h-full">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-primary/90 backdrop-blur-sm rounded-full p-1.5" style={{ boxShadow: "0 0 10px hsl(22 95% 52% / 0.5)" }}>
                    <Instagram className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GoogleG() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

function Testimonials() {
  const reviews = [
    {
      name: "Sarah M.",
      location: "Atlanta, GA",
      text: "The absolute highlight of our Edisto vacation! Captain John was amazing with our 6 and 8-year-olds. We found over 30 shark teeth including a Megalodon fragment. The boat was spotless and comfortable. We'll be back every single year!",
      type: "Family Trip",
      rating: 5,
      date: "March 2025",
      tour: "Shark Tooth Hunting"
    },
    {
      name: "Jessica T.",
      location: "Charlotte, NC",
      text: "Booked this for my sister's bachelorette party and it was INCREDIBLE. We brought champagne, cruised the gorgeous waterways, saw dolphins up close, and had a blast on the private beach. Way better than just sitting at a bar in Charleston!",
      type: "Bachelorette",
      rating: 5,
      date: "February 2025",
      tour: "Group Charter"
    },
    {
      name: "David L.",
      location: "Columbus, OH",
      text: "I've been on many coastal excursions, but this was top tier. True professionals who know exactly when the tides are right for fossil hunting. My teenage sons were thrilled with what they found. A premium experience from start to finish.",
      type: "Shark Tooth Tour",
      rating: 5,
      date: "January 2025",
      tour: "Shark Tooth Hunting"
    },
    {
      name: "Karen & Tom B.",
      location: "Nashville, TN",
      text: "Our grandkids (ages 5, 8, and 11) had the time of their lives! The captain was patient, knowledgeable, and so good with children. We spotted dolphins, found shark teeth, and the sunset over the marsh was breathtaking. 10/10!",
      type: "Family Trip",
      rating: 5,
      date: "December 2024",
      tour: "Family Dolphin + Teeth Tour"
    },
    {
      name: "Marcus W.",
      location: "Jacksonville, FL",
      text: "Went on the inshore fishing trip and caught three keeper redfish. The captain knew every single productive spot in the marsh. We were on fish within 10 minutes of arriving. Best money I've spent on a fishing trip in years.",
      type: "Fishing Trip",
      rating: 5,
      date: "November 2024",
      tour: "Inshore Fishing"
    },
    {
      name: "Amy S.",
      location: "Raleigh, NC",
      text: "Surprised my husband with this for his birthday and he couldn't stop talking about it. Clean boats, knowledgeable guide, and we literally found a beautiful 2-inch shark tooth within the first 20 minutes. Absolutely magical experience!",
      type: "Birthday Trip",
      rating: 5,
      date: "October 2024",
      tour: "Shark Tooth Hunting"
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-muted relative overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-bold tracking-widest uppercase mb-4">
            <ThumbsUp className="h-4 w-4" />
            <span>Real Guest Reviews</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">Loved by Families & Groups</h2>

          {/* GBP Review Summary Badge */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-card border border-border rounded-2xl px-6 py-5 shadow-xl shadow-black/20 mb-4">
            <div className="flex items-center gap-3">
              <GoogleG />
              <div className="text-left">
                <p className="text-xs text-muted-foreground font-medium">Google Business Profile</p>
                <p className="font-bold text-foreground text-sm">Low Coastal Country Excursion</p>
              </div>
            </div>
            <div className="w-px h-8 bg-border hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-primary" style={{ textShadow: "0 0 16px hsl(22 95% 52% / 0.5)" }}>4.9</span>
              <div>
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">127 verified reviews</p>
              </div>
            </div>
            <div className="w-px h-8 bg-border hidden sm:block" />
            <a 
              href="#" 
              className="flex items-center gap-1.5 text-primary text-sm font-semibold hover:underline"
            >
              <BadgeCheck className="h-4 w-4" />
              View on Google
            </a>
          </div>

          {/* Rating breakdown */}
          <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
            <div className="flex gap-1">
              {[1,2,3,4,5].map(i => <Star key={i} className="h-5 w-5 fill-primary text-primary" />)}
            </div>
            <span className="font-bold text-foreground">Rated 5 stars</span>
            <span>by 127 real Google guests</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 flex flex-col"
            >
              {/* Card header: Google badge + stars */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="bg-card border border-border rounded-full p-1.5">
                    <GoogleG />
                  </div>
                  <div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: review.rating }).map((_, s) => (
                        <Star key={s} className="h-3.5 w-3.5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">{review.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-primary font-semibold bg-primary/10 border border-primary/20 rounded-full px-2.5 py-1">
                  <BadgeCheck className="h-3 w-3" />
                  Verified
                </div>
              </div>

              <p className="text-sm text-foreground/85 leading-relaxed mb-4 flex-1 italic">"{review.text}"</p>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <h4 className="font-bold text-sm text-foreground">{review.name}</h4>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                    <MapPin className="h-3 w-3" />
                    {review.location}
                  </p>
                </div>
                <div className="bg-secondary/60 text-foreground/80 px-3 py-1 rounded-full text-xs font-medium border border-border">
                  {review.type}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a 
            href="#"
            className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-6 py-3 text-sm font-semibold text-foreground hover:border-primary/40 hover:shadow-md hover:shadow-primary/10 transition-all"
          >
            <GoogleG />
            Read all 127 reviews on Google
            <ArrowRight className="h-4 w-4 text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Audience() {
  const groups = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Families with Kids",
      desc: "Safe, engaging, and hands-on. Watch their faces light up when they pull a fossil from the sand.",
      color: "text-rose-400"
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Wedding Parties",
      desc: "The perfect pre-wedding day out. Sun, sand, and celebrating on the water with your best friends.",
      color: "text-primary"
    },
    {
      icon: <Binoculars className="h-8 w-8" />,
      title: "Coastal Tourists",
      desc: "Visiting Charleston, Edisto, or Beaufort? Escape the city heat and experience the wild barrier islands.",
      color: "text-blue-400"
    },
    {
      icon: <Fish className="h-8 w-8" />,
      title: "Anglers & Sportsmen",
      desc: "Expert local knowledge for inshore fishing. We know where the redfish run in the winding marsh creeks.",
      color: "text-teal-400"
    }
  ];

  return (
    <section className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-bold tracking-widest uppercase mb-3">
            <Users className="h-4 w-4" />
            <span>Who We Serve</span>
          </div>
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Who Hunts With Us?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Every trip is custom-built for your group. Here's who joins us most often on the water.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl text-center p-8 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
            >
              <div className={`${g.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-card border border-border group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                {g.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{g.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{g.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocalSEO() {
  const areas = ["Charleston", "Edisto Beach", "Beaufort", "Hunting Island", "Hilton Head", "Myrtle Beach"];

  return (
    <section className="py-16 bg-muted relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,200 C100,100 300,300 400,200" stroke="hsl(22 95% 52%)" strokeWidth="2" fill="none" />
          <path d="M0,150 C100,50 300,250 400,150" stroke="hsl(22 95% 52%)" strokeWidth="1.5" fill="none" />
          <path d="M0,250 C100,150 300,350 400,250" stroke="hsl(22 95% 52%)" strokeWidth="1.5" fill="none" />
        </svg>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 text-primary text-sm font-bold tracking-widest uppercase mb-4">
          <MapPin className="h-4 w-4" />
          <span>Our Service Area</span>
        </div>
        <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Your Premier South Carolina Coastal Excursion</h2>
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {areas.map((a, i) => (
            <span key={i} className="inline-flex items-center gap-1.5 text-sm font-medium bg-card border border-border rounded-full px-3 py-1.5 text-foreground/80">
              <MapPin className="h-3 w-3 text-primary" />
              {a}, SC
            </span>
          ))}
        </div>
        <p className="text-muted-foreground leading-loose">
          Discover the hidden gems of the Lowcountry with the top-rated <strong className="text-foreground">shark tooth hunting tours in South Carolina</strong>. Whether you're staying in Charleston, exploring Edisto Beach, or visiting historic Beaufort, our coastal excursions offer unmatched access to secluded barrier islands. Our expert guides specialize in <strong className="text-foreground">shark teeth tours near Charleston</strong>, wildlife viewing, and unforgettable boat tours throughout the Edisto and Hunting Island area. Experience the authentic salt-air freedom of a true <strong className="text-foreground">Low Country boat tour</strong>.
        </p>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      icon: <Sun className="h-4 w-4 text-primary shrink-0 mt-0.5" />,
      q: "What should we bring?",
      a: "Sunscreen, sunglasses, hats, towels, and water shoes or sandals for beach walking. Feel free to bring a cooler with your own drinks and snacks!"
    },
    {
      icon: <Heart className="h-4 w-4 text-primary shrink-0 mt-0.5" />,
      q: "Are there age restrictions?",
      a: "No! Our tours are family-friendly and safe for all ages, from infants to grandparents. The boat is stable and the beaches are easy to walk."
    },
    {
      icon: <Sailboat className="h-4 w-4 text-primary shrink-0 mt-0.5" />,
      q: "What kind of boat is it?",
      a: "We operate modern, clean, Coast Guard-certified pontoon boats designed for maximum stability, comfort, and shade in the shallow coastal waters."
    },
    {
      icon: <Gem className="h-4 w-4 text-primary shrink-0 mt-0.5" />,
      q: "Will we definitely find shark teeth?",
      a: "While nature makes no guarantees, our expert guides know the tides and secret spots. Almost every trip finds teeth, and we'll teach you exactly how to spot them."
    },
    {
      icon: <ShieldCheck className="h-4 w-4 text-primary shrink-0 mt-0.5" />,
      q: "Is the trip safe for non-swimmers?",
      a: "Absolutely. Life jackets are provided for all guests and we never enter deep water. Beach areas are in shallow tidal zones safe for all ages."
    },
    {
      icon: <Clock className="h-4 w-4 text-primary shrink-0 mt-0.5" />,
      q: "How long are the tours?",
      a: "Most tours run 2.5 to 3.5 hours. Group charters can be customized in length. Half-day and full-day options are available on request."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-bold tracking-widest uppercase mb-3">
            <Binoculars className="h-4 w-4" />
            <span>Need Answers?</span>
          </div>
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">Everything you need to know before you book.</p>
        </div>
        
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer font-bold text-base text-foreground list-none">
                <span className="flex items-start gap-3">
                  {faq.icon}
                  {faq.q}
                </span>
                <ChevronDown className="h-5 w-5 text-primary transition-transform group-open:rotate-180 shrink-0 ml-4" />
              </summary>
              <div className="mt-4 text-muted-foreground leading-relaxed text-sm pl-7">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Booking() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Request Received!",
        description: "We'll be in touch shortly to confirm your adventure.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="booking" className="py-24 bg-muted relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/8 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-5/12">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-bold tracking-widest uppercase mb-3">
              <Anchor className="h-4 w-4" />
              <span>Book Your Trip</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Ready for the water?</h2>
            <p className="text-lg text-muted-foreground mb-10">
              Fill out the form to request your dates, or give us a call directly. We customize every trip to make sure you have the perfect day on the water.
            </p>
            
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="bg-card w-12 h-12 rounded-full flex items-center justify-center shadow-sm text-primary border border-border">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Call or Text Us</p>
                  <p className="text-xl font-bold text-foreground">(843) 555-0100</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-card w-12 h-12 rounded-full flex items-center justify-center shadow-sm text-primary border border-border">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Email</p>
                  <p className="text-xl font-bold text-foreground">hello@lowcoastal.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-card w-12 h-12 rounded-full flex items-center justify-center shadow-sm text-primary border border-border">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Departure Location</p>
                  <p className="text-lg font-bold text-foreground">Low Country Coast, SC</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-card w-12 h-12 rounded-full flex items-center justify-center shadow-sm text-primary border border-border">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Tour Duration</p>
                  <p className="text-lg font-bold text-foreground">2.5 – 3.5 Hours</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-7/12">
            <div className="bg-card rounded-3xl p-8 md:p-10 shadow-2xl shadow-black/30 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <Anchor className="h-6 w-6 text-primary" style={{ filter: "drop-shadow(0 0 6px hsl(22 95% 52% / 0.5))" }} />
                <h3 className="text-2xl font-serif font-bold text-card-foreground">Request a Booking</h3>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                    <input required id="name" type="text" className="w-full bg-background border border-input rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow text-foreground placeholder:text-muted-foreground" placeholder="Your Name" data-testid="input-name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone</label>
                    <input required id="phone" type="tel" className="w-full bg-background border border-input rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow text-foreground placeholder:text-muted-foreground" placeholder="(843) 555-0100" data-testid="input-phone" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                    <input required id="email" type="email" className="w-full bg-background border border-input rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow text-foreground placeholder:text-muted-foreground" placeholder="you@example.com" data-testid="input-email" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="date" className="text-sm font-medium text-foreground">Requested Date</label>
                    <input required id="date" type="date" className="w-full bg-background border border-input rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow text-foreground" data-testid="input-date" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="party" className="text-sm font-medium text-foreground">Party Size</label>
                    <select required id="party" className="w-full bg-background border border-input rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow appearance-none text-foreground" data-testid="input-party">
                      <option value="">Select size</option>
                      <option value="1-2">1-2 People</option>
                      <option value="3-4">3-4 People</option>
                      <option value="5-6">5-6 People</option>
                      <option value="7+">7+ People (Group)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="tourType" className="text-sm font-medium text-foreground">Tour Type</label>
                    <select required id="tourType" className="w-full bg-background border border-input rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow appearance-none text-foreground" data-testid="input-tour">
                      <option value="">Select tour</option>
                      <option value="shark-teeth">Shark Tooth Hunting</option>
                      <option value="dolphins">Dolphin & Wildlife Tour</option>
                      <option value="groups">Bachelorette/Group Charter</option>
                      <option value="fishing">Inshore Fishing Trip</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="notes" className="text-sm font-medium text-foreground">Special Requests / Notes</label>
                  <textarea id="notes" rows={3} className="w-full bg-background border border-input rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow resize-none text-foreground placeholder:text-muted-foreground" placeholder="Any kids in the group? Celebrating a special occasion?" data-testid="input-notes"></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all glow-orange hover:glow-orange flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  data-testid="submit-booking"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Clock className="animate-spin h-5 w-5" /> Sending...
                    </span>
                  ) : (
                    <>
                      <Anchor className="h-5 w-5" />
                      Submit Booking Request
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-card text-foreground py-16 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Anchor className="h-8 w-8 text-primary" style={{ filter: "drop-shadow(0 0 8px hsl(22 95% 52% / 0.5))" }} />
              <span className="font-serif font-bold text-2xl tracking-tight">Low Coastal</span>
            </div>
            <p className="text-muted-foreground max-w-sm mb-8 leading-relaxed text-sm">
              Premium boat tours specializing in shark tooth hunting, dolphin watching, and authentic South Carolina coastal adventures. Making memories that last a lifetime.
            </p>
            <div className="flex gap-3 mb-6">
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hover:glow-orange-sm border border-border">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hover:glow-orange-sm border border-border">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <GoogleG />
              <span>4.9 ★ on Google Business (127 reviews)</span>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-base mb-6 flex items-center gap-2">
              <Compass className="h-4 w-4 text-primary" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li><button onClick={() => document.getElementById('experiences')?.scrollIntoView({behavior:'smooth'})} className="text-muted-foreground hover:text-primary transition-colors text-sm">Our Tours</button></li>
              <li><button onClick={() => document.getElementById('why-us')?.scrollIntoView({behavior:'smooth'})} className="text-muted-foreground hover:text-primary transition-colors text-sm">Why Choose Us</button></li>
              <li><button onClick={() => document.getElementById('gallery')?.scrollIntoView({behavior:'smooth'})} className="text-muted-foreground hover:text-primary transition-colors text-sm">Gallery</button></li>
              <li><button onClick={() => document.getElementById('reviews')?.scrollIntoView({behavior:'smooth'})} className="text-muted-foreground hover:text-primary transition-colors text-sm">Reviews</button></li>
              <li><button onClick={() => document.getElementById('faq')?.scrollIntoView({behavior:'smooth'})} className="text-muted-foreground hover:text-primary transition-colors text-sm">FAQ</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-base mb-6 flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              Service Area
            </h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              {["Charleston", "Edisto Beach", "Beaufort", "Hunting Island", "Hilton Head", "Myrtle Beach"].map(loc => (
                <li key={loc} className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-primary inline-block" />
                  {loc}, SC
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Low Coastal Country Excursion. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen w-full bg-background selection:bg-primary/30">
      <Navbar />
      <Hero />
      <div className="relative bg-muted">
        <WaveDivider color="hsl(218 45% 7%)" />
      </div>
      <Experiences />
      <div className="relative bg-background">
        <WaveDivider color="hsl(218 40% 13%)" />
      </div>
      <WhyUs />
      <div className="relative bg-muted">
        <WaveDivider color="hsl(218 45% 7%)" />
      </div>
      <Gallery />
      <div className="relative bg-background">
        <WaveDivider color="hsl(218 40% 13%)" />
      </div>
      <Testimonials />
      <div className="relative bg-muted">
        <WaveDivider color="hsl(218 45% 7%)" />
      </div>
      <Audience />
      <div className="relative bg-background">
        <WaveDivider color="hsl(218 40% 13%)" />
      </div>
      <LocalSEO />
      <FAQ />
      <div className="relative bg-background">
        <WaveDivider color="hsl(218 40% 13%)" />
      </div>
      <Booking />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL?.replace(/\/$/, "") || ""}>
          <Switch>
            <Route path="/" component={LandingPage} />
            <Route path="/shark-tooth-hunting">
              <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center"><div className="text-primary text-lg font-serif">Loading...</div></div>}>
                <SharkToothPage />
              </Suspense>
            </Route>
            <Route path="/dolphin-wildlife">
              <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center"><div className="text-primary text-lg font-serif">Loading...</div></div>}>
                <DolphinPage />
              </Suspense>
            </Route>
            <Route path="/group-charters">
              <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center"><div className="text-primary text-lg font-serif">Loading...</div></div>}>
                <GroupCharterPage />
              </Suspense>
            </Route>
            <Route path="/inshore-fishing">
              <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center"><div className="text-primary text-lg font-serif">Loading...</div></div>}>
                <FishingPage />
              </Suspense>
            </Route>
            <Route>
              <div className="min-h-screen flex items-center justify-center bg-background">
                <div className="text-center">
                  <h1 className="text-4xl font-serif font-bold mb-4 text-foreground">404 - Not Found</h1>
                  <a href="/" className="text-primary hover:underline">Return home</a>
                </div>
              </div>
            </Route>
          </Switch>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
