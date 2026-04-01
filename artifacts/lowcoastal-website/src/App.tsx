import React, { useState, useEffect } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
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
  X
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const queryClient = new QueryClient();

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} data-testid="nav-logo">
            <Anchor className="h-6 w-6 text-primary" />
            <span className="font-serif font-bold text-xl tracking-tight text-foreground">Low Coastal</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('experiences')} className="text-sm font-medium hover:text-primary transition-colors">Experiences</button>
            <button onClick={() => scrollTo('why-us')} className="text-sm font-medium hover:text-primary transition-colors">Why Us</button>
            <button onClick={() => scrollTo('gallery')} className="text-sm font-medium hover:text-primary transition-colors">Gallery</button>
            <button onClick={() => scrollTo('reviews')} className="text-sm font-medium hover:text-primary transition-colors">Reviews</button>
            <button onClick={() => scrollTo('faq')} className="text-sm font-medium hover:text-primary transition-colors">FAQ</button>
            <button onClick={() => scrollTo('booking')} className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-semibold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0" data-testid="nav-book-btn">
              Book Now
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2" aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border p-4 flex flex-col gap-4">
          <button onClick={() => scrollTo('experiences')} className="text-left font-medium py-2">Experiences</button>
          <button onClick={() => scrollTo('why-us')} className="text-left font-medium py-2">Why Us</button>
          <button onClick={() => scrollTo('gallery')} className="text-left font-medium py-2">Gallery</button>
          <button onClick={() => scrollTo('reviews')} className="text-left font-medium py-2">Reviews</button>
          <button onClick={() => scrollTo('faq')} className="text-left font-medium py-2">FAQ</button>
          <button onClick={() => scrollTo('booking')} className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold text-center w-full mt-2">
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background"></div>
      </motion.div>

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setPrevSlide(currentSlide); setCurrentSlide(i); }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentSlide ? "bg-white w-6" : "bg-white/40"}`}
            aria-label={`Go to slide ${i + 1}`}
            data-testid={`hero-slide-dot-${i}`}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6"
        >
          <MapPin className="h-4 w-4" />
          <span>South Carolina Lowcountry</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-[1.1] tracking-tight drop-shadow-lg"
        >
          Find Your Megalodon.<br />Make Your Memory.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto mb-10 font-light drop-shadow-md"
        >
          Premium boat tours specializing in prehistoric shark tooth hunting, dolphin watching, and authentic coastal adventures.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button 
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-bold hover:bg-primary/90 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2"
            data-testid="hero-book-btn"
          >
            Book Your Adventure <ArrowRight className="h-5 w-5" />
          </button>
          <button 
            onClick={() => document.getElementById('experiences')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-2"
          >
            Explore Tours
          </button>
        </motion.div>
      </div>

      <button
        onClick={() => document.getElementById('experiences')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce text-white/70 hover:text-white transition-colors"
        aria-label="Scroll to experiences"
        data-testid="hero-scroll-down"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
}

const experiences = [
  {
    id: "shark-teeth",
    title: "Shark Tooth Hunting",
    desc: "Our hero experience. We take you to remote, boat-access-only barrier island beaches where prehistoric megalodon teeth wash ashore. Perfect for all ages—every fossil hunter's dream.",
    image: "/images/kids-teeth.png",
    icon: <Anchor className="h-6 w-6" />,
    features: ["Remote beach access", "Fossil identification", "Keep what you find"]
  },
  {
    id: "dolphins",
    title: "Dolphin & Wildlife Tours",
    desc: "Cruise the pristine estuarine waters and winding creeks to witness Atlantic bottlenose dolphins feeding and playing in their natural habitat, alongside eagles and pelicans.",
    image: "/images/dolphins.png",
    icon: <Sun className="h-6 w-6" />,
    features: ["Golden hour options", "Bird watching", "Ecological insights"]
  },
  {
    id: "groups",
    title: "Bachelorette & Group Charters",
    desc: "Celebrate on the water! A private charter for your bachelorette party, family reunion, or corporate retreat. Bring your drinks, play your music, and let us handle the rest.",
    image: "/images/bachelorette.png",
    icon: <Users className="h-6 w-6" />,
    features: ["Private boat", "Customizable itinerary", "Bluetooth sound system"]
  },
  {
    id: "fishing",
    title: "Inshore Fishing Trips",
    desc: "Target redfish, trout, and flounder in the nutrient-rich marshes. Whether you're a seasoned angler or teaching the kids to cast, our captains know exactly where the fish are biting.",
    image: "/images/fishing.png",
    icon: <Fish className="h-6 w-6" />,
    features: ["Bait & tackle provided", "Licenses included", "Expert guidance"]
  }
];

function Experiences() {
  return (
    <section id="experiences" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Our Excursions</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Choose Your Adventure</h3>
          <p className="text-lg text-muted-foreground">
            From the thrill of finding prehistoric fossils to relaxing sunset cruises, we offer experiences tailored for families, groups, and wildlife enthusiasts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={exp.image} 
                  alt={exp.title} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-background/90 backdrop-blur rounded-full p-3 text-primary shadow-sm">
                  {exp.icon}
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-serif font-bold mb-3 text-card-foreground">{exp.title}</h4>
                <p className="text-muted-foreground mb-6 leading-relaxed">{exp.desc}</p>
                <ul className="space-y-2 mb-8">
                  {exp.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-foreground">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => {
                    const select = document.getElementById('tourType') as HTMLSelectElement;
                    if(select) select.value = exp.id;
                    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-3 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary hover:text-primary-foreground transition-colors"
                  data-testid={`book-${exp.id}-btn`}
                >
                  Book This Tour
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-muted relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10">
              <img src="/images/family-boat.png" alt="Happy family enjoying a boat tour" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary/10 rounded-full blur-3xl z-0"></div>
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-secondary/10 rounded-full blur-3xl z-0"></div>
          </motion.div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">The Low Coastal Difference</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Safe. Clean. Unforgettable.</h3>
            <p className="text-lg text-muted-foreground mb-10">
              We're not just another boat ride. We're a premium coastal experience built on safety, comfort, and local expertise. When you step onto our boats, you're family.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <div className="bg-background w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm text-primary">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h4 className="text-xl font-bold mb-2">USCG Certified</h4>
                <p className="text-muted-foreground text-sm">Top-tier safety standards. Expert captains who know these waters like the back of their hand.</p>
              </div>
              <div>
                <div className="bg-background w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm text-primary">
                  <Sun className="h-6 w-6" />
                </div>
                <h4 className="text-xl font-bold mb-2">Immaculate Boats</h4>
                <p className="text-muted-foreground text-sm">Spacious, clean pontoons designed for comfort. Plenty of shade, comfortable seating, and a smooth ride.</p>
              </div>
              <div>
                <div className="bg-background w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm text-primary">
                  <Users className="h-6 w-6" />
                </div>
                <h4 className="text-xl font-bold mb-2">All Ages Welcome</h4>
                <p className="text-muted-foreground text-sm">From toddlers discovering their first shell to grandparents enjoying the breeze. Safe and accessible for everyone.</p>
              </div>
              <div>
                <div className="bg-background w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <h4 className="text-xl font-bold mb-2">Local Secrets</h4>
                <p className="text-muted-foreground text-sm">We take you to the hidden beaches and pristine marshlands that the crowded commercial tours miss.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const images = [
    { src: "/images/teeth-close.png", alt: "Close up of fossilized shark teeth on sand", aspect: "aspect-square" },
    { src: "/images/couple-beach.png", alt: "Couple walking on beach finding teeth", aspect: "aspect-[16/9]" },
    { src: "/images/marsh-sunrise.png", alt: "Beautiful coastal marsh at golden hour", aspect: "aspect-[16/9]" },
  ];

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Glimpses of the Coast</h2>
            <p className="text-lg text-muted-foreground">Follow us <a href="#" className="text-primary hover:underline font-medium">@LowCoastalExcursion</a> for more daily adventures.</p>
          </div>
          <button className="flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors">
            View Full Gallery <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-2xl overflow-hidden group cursor-pointer ${img.aspect} ${i === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    {
      name: "Sarah M.",
      location: "Atlanta, GA",
      text: "The absolute highlight of our Edisto vacation! Captain John was amazing with our 6 and 8-year-olds. We found over 30 shark teeth, including a piece of a Megalodon. The boat was spotless and comfortable. We'll be back every year!",
      type: "Family Trip"
    },
    {
      name: "Jessica T.",
      location: "Charlotte, NC",
      text: "Booked this for my sister's bachelorette party and it was INCREDIBLE. We brought champagne, cruised the gorgeous waterways, saw dolphins up close, and had a blast on the private beach. Way better than just sitting at a bar in Charleston.",
      type: "Bachelorette"
    },
    {
      name: "David L.",
      location: "Columbus, OH",
      text: "I've been on many coastal excursions, but this was top tier. True professionals who know exactly when the tides are right for fossil hunting. My teenage sons were thrilled. A premium experience from start to finish.",
      type: "Shark Tooth Tour"
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center gap-1 mb-6">
            {[1,2,3,4,5].map(i => <Star key={i} className="h-6 w-6 fill-primary text-primary" />)}
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Loved by Families & Groups</h2>
          <p className="text-xl text-secondary-foreground/80">Don't just take our word for it.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8"
            >
              <p className="text-lg italic mb-6 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold">{review.name}</h4>
                  <p className="text-sm text-secondary-foreground/60">{review.location}</p>
                </div>
                <div className="bg-primary/20 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium border border-primary/30">
                  {review.type}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Audience() {
  return (
    <section className="py-24 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Who Hunts With Us?</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6">
            <div className="bg-muted w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Families with Kids</h3>
            <p className="text-sm text-muted-foreground">Safe, engaging, and hands-on. Watch their faces light up when they pull a fossil from the sand.</p>
          </div>
          <div className="text-center p-6">
            <div className="bg-muted w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
              <Anchor className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Wedding Parties</h3>
            <p className="text-sm text-muted-foreground">The perfect pre-wedding day out. Sun, sand, and celebrating on the water with your best friends.</p>
          </div>
          <div className="text-center p-6">
            <div className="bg-muted w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
              <MapPin className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Coastal Tourists</h3>
            <p className="text-sm text-muted-foreground">Visiting Charleston, Edisto, or Beaufort? Escape the city heat and experience the wild barrier islands.</p>
          </div>
          <div className="text-center p-6">
            <div className="bg-muted w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
              <Fish className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Anglers & Sportsmen</h3>
            <p className="text-sm text-muted-foreground">Expert local knowledge for inshore fishing. We know where the redfish run in the winding marsh creeks.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function LocalSEO() {
  return (
    <section className="py-16 bg-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl font-serif font-bold mb-6">Your Premier South Carolina Coastal Excursion</h2>
        <p className="text-muted-foreground leading-loose">
          Discover the hidden gems of the Lowcountry with the top-rated <strong>shark tooth hunting tours in South Carolina</strong>. Whether you're staying in Charleston, exploring Edisto Beach, or visiting historic Beaufort, our coastal excursions offer unmatched access to secluded barrier islands. Our expert guides specialize in <strong>shark teeth tours near Charleston</strong>, wildlife viewing, and unforgettable boat tours throughout the Edisto and Hunting Island area. Experience the authentic salt-air freedom of a true <strong>Low Country boat tour</strong>.
        </p>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "What should we bring?",
      a: "Sunscreen, sunglasses, hats, towels, and water shoes or sandals for beach walking. Feel free to bring a cooler with your own drinks and snacks!"
    },
    {
      q: "Are there age restrictions?",
      a: "No! Our tours are family-friendly and safe for all ages, from infants to grandparents. The boat is stable and the beaches are easy to walk."
    },
    {
      q: "What kind of boat is it?",
      a: "We operate modern, clean, Coast Guard-certified pontoon boats designed for maximum stability, comfort, and shade in the shallow coastal waters."
    },
    {
      q: "Will we definitely find shark teeth?",
      a: "While nature makes no guarantees, our expert guides know the tides and secret spots. Almost every trip finds teeth, and we'll teach you exactly how to spot them."
    },
    {
      q: "Is there a restroom on board?",
      a: "Our vessels are open-deck pontoons without enclosed restrooms to access shallow tidal areas, but we are never far from facilities at the marina."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Frequently Asked Questions</h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-card border border-border rounded-xl p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer font-bold text-lg text-foreground">
                {faq.q}
                <ChevronDown className="h-5 w-5 text-primary transition-transform group-open:rotate-180" />
              </summary>
              <div className="mt-4 text-muted-foreground leading-relaxed">
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
    <section id="booking" className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-5/12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Ready for the water?</h2>
            <p className="text-lg text-muted-foreground mb-10">
              Fill out the form to request your dates, or give us a call directly. We customize every trip to make sure you have the perfect day on the water.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-background w-12 h-12 rounded-full flex items-center justify-center shadow-sm text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Call or Text Us</p>
                  <p className="text-xl font-bold text-foreground">(843) 555-0100</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-background w-12 h-12 rounded-full flex items-center justify-center shadow-sm text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Email</p>
                  <p className="text-xl font-bold text-foreground">hello@lowcoastal.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-background w-12 h-12 rounded-full flex items-center justify-center shadow-sm text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Departure Location</p>
                  <p className="text-lg font-bold text-foreground">Low Country Coast, SC</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-7/12">
            <div className="bg-card rounded-3xl p-8 md:p-10 shadow-xl border border-border">
              <h3 className="text-2xl font-serif font-bold mb-6 text-card-foreground">Request a Booking</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                    <input required id="name" type="text" className="w-full bg-background border border-input rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" placeholder="Your Name" data-testid="input-name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone</label>
                    <input required id="phone" type="tel" className="w-full bg-background border border-input rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" placeholder="(843) 555-0100" data-testid="input-phone" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                    <input required id="email" type="email" className="w-full bg-background border border-input rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" placeholder="you@example.com" data-testid="input-email" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="date" className="text-sm font-medium text-foreground">Requested Date</label>
                    <input required id="date" type="date" className="w-full bg-background border border-input rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" data-testid="input-date" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="party" className="text-sm font-medium text-foreground">Party Size</label>
                    <select required id="party" className="w-full bg-background border border-input rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow appearance-none" data-testid="input-party">
                      <option value="">Select size</option>
                      <option value="1-2">1-2 People</option>
                      <option value="3-4">3-4 People</option>
                      <option value="5-6">5-6 People</option>
                      <option value="7+">7+ People (Group)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="tourType" className="text-sm font-medium text-foreground">Tour Type</label>
                    <select required id="tourType" className="w-full bg-background border border-input rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow appearance-none" data-testid="input-tour">
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
                  <textarea id="notes" rows={3} className="w-full bg-background border border-input rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none" placeholder="Any kids in the group? Celebrating a special occasion?" data-testid="input-notes"></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all shadow-md flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  data-testid="submit-booking"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Clock className="animate-spin h-5 w-5" /> Sending...
                    </span>
                  ) : (
                    "Submit Booking Request"
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
    <footer className="bg-secondary text-secondary-foreground py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Anchor className="h-8 w-8 text-primary" />
              <span className="font-serif font-bold text-2xl tracking-tight">Low Coastal</span>
            </div>
            <p className="text-secondary-foreground/70 max-w-sm mb-8 leading-relaxed">
              Premium boat tours specializing in shark tooth hunting, dolphin watching, and authentic South Carolina coastal adventures. Making memories that last a lifetime.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><button onClick={() => document.getElementById('experiences')?.scrollIntoView({behavior:'smooth'})} className="text-secondary-foreground/70 hover:text-primary transition-colors">Our Tours</button></li>
              <li><button onClick={() => document.getElementById('why-us')?.scrollIntoView({behavior:'smooth'})} className="text-secondary-foreground/70 hover:text-primary transition-colors">Why Choose Us</button></li>
              <li><button onClick={() => document.getElementById('gallery')?.scrollIntoView({behavior:'smooth'})} className="text-secondary-foreground/70 hover:text-primary transition-colors">Gallery</button></li>
              <li><button onClick={() => document.getElementById('faq')?.scrollIntoView({behavior:'smooth'})} className="text-secondary-foreground/70 hover:text-primary transition-colors">FAQ</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Service Area</h4>
            <ul className="space-y-3 text-secondary-foreground/70 text-sm">
              <li>Charleston, SC</li>
              <li>Edisto Beach, SC</li>
              <li>Beaufort, SC</li>
              <li>Hunting Island, SC</li>
              <li>Hilton Head, SC</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/50">
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
      <Experiences />
      <WhyUs />
      <Gallery />
      <Testimonials />
      <Audience />
      <LocalSEO />
      <FAQ />
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
            <Route>
              <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-4xl font-serif font-bold mb-4">404 - Not Found</h1>
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
