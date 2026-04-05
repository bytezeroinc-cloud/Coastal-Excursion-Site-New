import React, { useState, useEffect, useRef } from "react";
import {
  Anchor, MapPin, Phone, Mail, Instagram, Facebook, Menu, X, Compass, Waves,
  Clock, ChevronDown, Fish, Gem, Binoculars, Users, Sun
} from "lucide-react";
import { useBooking } from "@/components/BookingModal";

export function WaveDivider({ color = "hsl(218 42% 11%)" }: { color?: string }) {
  return (
    <div className="relative w-full overflow-hidden leading-none" style={{ height: 72 }}>
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

const TOURS = [
  { label: "Shark Tooth Hunting", href: "/shark-tooth-hunting", icon: Gem },
  { label: "Dolphin & Wildlife", href: "/dolphin-wildlife", icon: Binoculars },
  { label: "Sunset Cruise", href: "/sunset-cruise", icon: Sun },
  { label: "Bachelorette & Bachelor Charters", href: "/bachelorette-party-cruise", icon: Users },
  { label: "Group Charters", href: "/group-charters", icon: Users },
  { label: "Inshore Fishing", href: "/inshore-fishing", icon: Fish },
];

export function SiteNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [toursOpen, setToursOpen] = useState(false);
  const [mobileToursOpen, setMobileToursOpen] = useState(false);
  const toursRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (toursRef.current && !toursRef.current.contains(e.target as Node)) {
        setToursOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const base = import.meta.env.BASE_URL?.replace(/\/$/, "") || "";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-border/60" : "bg-background/80 backdrop-blur-md border-b border-border/30"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href={`${base}/`} className="flex items-center gap-2 cursor-pointer" data-testid="nav-logo">
            <Anchor className="h-6 w-6 text-primary" style={{ filter: "drop-shadow(0 0 8px hsl(22 95% 52% / 0.6))" }} />
            <span className="font-serif font-bold text-xl tracking-tight text-foreground">Low Coastal</span>
          </a>
          
          <div className="hidden md:flex items-center gap-5">
            {/* Our Tours dropdown */}
            <div ref={toursRef} className="relative">
              <button
                onClick={() => setToursOpen(v => !v)}
                className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                Our Tours <ChevronDown className={`h-3.5 w-3.5 mt-0.5 transition-transform ${toursOpen ? "rotate-180" : ""}`} />
              </button>
              {toursOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-background/98 backdrop-blur-md border border-border rounded-2xl shadow-2xl shadow-black/40 p-2 z-50">
                  {TOURS.map(({ label, href, icon: Icon }) => (
                    <a
                      key={href}
                      href={`${base}${href}`}
                      onClick={() => setToursOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm text-foreground/80 hover:text-primary hover:bg-primary/8 transition-all"
                    >
                      <Icon className="h-4 w-4 text-primary shrink-0" />
                      {label}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a href={`${base}/#why-us`} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Why Us</a>
            <a href={`${base}/#gallery`} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Gallery</a>
            <a href={`${base}/#reviews`} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Reviews</a>
            <a href={`${base}/#faq`} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">FAQ</a>
            <a
              href="tel:+18435081600"
              className="hidden md:flex items-center gap-1.5 text-sm font-semibold text-foreground/80 hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4 text-primary" />
              (843) 508-1600
            </a>
            <a 
              href={`${base}/#booking`}
              className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-semibold hover:bg-primary/90 transition-all glow-orange-sm hover:glow-orange hover:-translate-y-0.5 active:translate-y-0"
            >
              Book Now
            </a>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <a
              href="tel:+18435081600"
              className="flex items-center gap-1.5 text-sm font-semibold text-primary"
              aria-label="Call us"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-foreground" aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur border-b border-border p-4 flex flex-col gap-1">
          {/* Mobile Our Tours */}
          <button
            className="flex items-center justify-between w-full text-left font-medium py-2 text-foreground/80 hover:text-primary transition-colors"
            onClick={() => setMobileToursOpen(v => !v)}
          >
            Our Tours
            <ChevronDown className={`h-4 w-4 text-primary transition-transform ${mobileToursOpen ? "rotate-180" : ""}`} />
          </button>
          {mobileToursOpen && (
            <div className="ml-4 flex flex-col gap-1 pb-1 border-l border-border pl-3">
              {TOURS.map(({ label, href, icon: Icon }) => (
                <a
                  key={href}
                  href={`${base}${href}`}
                  onClick={() => { setIsOpen(false); setMobileToursOpen(false); }}
                  className="flex items-center gap-2 py-1.5 text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  <Icon className="h-3.5 w-3.5 text-primary shrink-0" />
                  {label}
                </a>
              ))}
            </div>
          )}
          <a href={`${base}/#why-us`} className="text-left font-medium py-2 text-foreground/80 hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Why Us</a>
          <a href={`${base}/#gallery`} className="text-left font-medium py-2 text-foreground/80 hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Gallery</a>
          <a href={`${base}/#reviews`} className="text-left font-medium py-2 text-foreground/80 hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Reviews</a>
          <a href={`${base}/#faq`} className="text-left font-medium py-2 text-foreground/80 hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>FAQ</a>
          <div className="border-t border-border pt-3 mt-1 flex flex-col gap-2">
            <a
              href="tel:+18435081600"
              className="flex items-center gap-2 font-bold py-2 text-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4 text-primary" />
              (843) 508-1600 — Call or Text
            </a>
            <a href={`${base}/#booking`} className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold text-center w-full mt-1 glow-orange-sm block" onClick={() => setIsOpen(false)}>
              Book Now — Check Availability
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export function SiteMobileBookingBar() {
  const { openBooking } = useBooking();
  const [heroPassed, setHeroPassed] = useState(false);
  const [ctaNear, setCtaNear] = useState(false);

  useEffect(() => {
    const heroEl = document.getElementById("tour-hero");
    if (!heroEl) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHeroPassed(!entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const ctaEl = document.getElementById("tour-cta") || document.getElementById("booking");
    if (!ctaEl) return;
    const observer = new IntersectionObserver(
      ([entry]) => setCtaNear(entry.isIntersecting),
      { rootMargin: "0px 0px -50px 0px", threshold: 0.1 }
    );
    observer.observe(ctaEl);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-300 ${heroPassed && !ctaNear ? "translate-y-0" : "translate-y-full"}`}
    >
      <div className="bg-background/95 backdrop-blur-md border-t border-border px-4 py-3 flex gap-3 items-center shadow-2xl shadow-black/40">
        <a
          href="tel:+18435081600"
          className="flex items-center justify-center gap-2 flex-1 py-3 rounded-full border border-border font-semibold text-sm text-foreground hover:border-primary/40 transition-all"
        >
          <Phone className="h-4 w-4 text-primary" />
          Call / Text
        </a>
        <button
          onClick={openBooking}
          className="flex-1 py-3 rounded-full bg-primary text-primary-foreground font-bold text-sm glow-orange hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
        >
          <Anchor className="h-4 w-4" />
          Book Now
        </button>
      </div>
    </div>
  );
}

export function LandingNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const base = import.meta.env.BASE_URL?.replace(/\/$/, "") || "";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-border/60" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16 py-4">
          <a href={`${base}/`} className="flex items-center gap-2" aria-label="Low Coastal home">
            <Anchor className="h-6 w-6 text-primary" style={{ filter: "drop-shadow(0 0 8px hsl(22 95% 52% / 0.6))" }} />
            <span className="font-serif font-bold text-xl tracking-tight text-foreground">Low Coastal</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export function LandingMobileBar() {
  return (
    <div className="fixed top-16 left-0 right-0 z-40 md:hidden">
      <a
        href="tel:+18435081600"
        className="flex items-center justify-center gap-2 w-full py-2.5 bg-primary text-primary-foreground font-bold text-sm glow-orange shadow-lg shadow-black/30"
      >
        <Phone className="h-4 w-4" />
        Tap to Call or Text — (843) 508-1600
      </a>
    </div>
  );
}

export function SiteFooter() {
  const base = import.meta.env.BASE_URL?.replace(/\/$/, "") || "";
  return (
    <footer className="bg-card text-foreground py-16 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

          {/* Brand — spans 2 cols on lg */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <Anchor className="h-8 w-8 text-primary" style={{ filter: "drop-shadow(0 0 8px hsl(22 95% 52% / 0.5))" }} />
              <span className="font-serif font-bold text-2xl tracking-tight">Low Coastal</span>
            </div>
            <p className="text-muted-foreground max-w-sm mb-6 leading-relaxed text-sm">
              Premium boat tours specializing in shark tooth hunting, dolphin watching, and authentic South Carolina coastal adventures. Making memories that last a lifetime.
            </p>
            <div className="flex gap-3 mb-5">
              <a href="https://www.instagram.com/lowcountry_coastal_excursions/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hover:glow-orange-sm border border-border">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/lowcountrycoastalexcursions" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hover:glow-orange-sm border border-border">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <GoogleG />
              <span>4.9 ★ on Google Business (127 reviews)</span>
            </div>
          </div>

          {/* Our Tours */}
          <div>
            <h4 className="font-bold text-base mb-5 flex items-center gap-2">
              <Compass className="h-4 w-4 text-primary" />
              Our Tours
            </h4>
            <ul className="space-y-3">
              <li><a href={`${base}/shark-tooth-hunting`} className="text-muted-foreground hover:text-primary transition-colors text-sm">Shark Tooth Hunting</a></li>
              <li><a href={`${base}/dolphin-wildlife`} className="text-muted-foreground hover:text-primary transition-colors text-sm">Dolphin & Wildlife</a></li>
              <li><a href={`${base}/sunset-cruise`} className="text-muted-foreground hover:text-primary transition-colors text-sm">Sunset Cruise</a></li>
              <li><a href={`${base}/group-charters`} className="text-muted-foreground hover:text-primary transition-colors text-sm">Group Charters</a></li>
              <li><a href={`${base}/inshore-fishing`} className="text-muted-foreground hover:text-primary transition-colors text-sm">Inshore Fishing</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-base mb-5 flex items-center gap-2">
              <Waves className="h-4 w-4 text-primary" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li><a href={`${base}/#why-us`} className="text-muted-foreground hover:text-primary transition-colors text-sm">Why Choose Us</a></li>
              <li><a href={`${base}/#gallery`} className="text-muted-foreground hover:text-primary transition-colors text-sm">Photo Gallery</a></li>
              <li><a href={`${base}/#reviews`} className="text-muted-foreground hover:text-primary transition-colors text-sm">Guest Reviews</a></li>
              <li><a href={`${base}/#faq`} className="text-muted-foreground hover:text-primary transition-colors text-sm">FAQ</a></li>
              <li><a href={`${base}/#booking`} className="text-muted-foreground hover:text-primary transition-colors text-sm">Book a Tour</a></li>
            </ul>
          </div>

          {/* Find Us — pickup location */}
          <div>
            <h4 className="font-bold text-base mb-5 flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              Pick-Up Location
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>100 Church St.<br />Mt. Pleasant, SC 29464</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a href="tel:+18435081600" className="hover:text-primary transition-colors">(843) 508-1600</a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>Mon – Sun<br />8:00 am – 8:00 pm</span>
              </li>
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
