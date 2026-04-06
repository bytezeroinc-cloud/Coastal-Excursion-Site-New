import React, { useState, useEffect } from "react";
import { 
  Anchor, 
  Menu, 
  X, 
  Phone, 
  Star, 
  ShieldCheck, 
  Instagram, 
  Facebook, 
  ChevronRight,
  Clock,
  Users,
  MapPin,
  CheckCircle2
} from "lucide-react";

type Occasion = "family" | "date" | "party" | "fishing" | "exploring" | "celebration";

interface Tour {
  title: string;
  price: string;
  image: string;
  features: string[];
}

export function Concierge() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeOccasion, setActiveOccasion] = useState<Occasion>("family");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const occasions: { id: Occasion; label: string; desc: string; image: string }[] = [
    {
      id: "family",
      label: "Family Adventure",
      desc: "Fossils, dolphins, memories made",
      image: "/__mockup/images/kids-teeth.png"
    },
    {
      id: "date",
      label: "Date Night / Romance",
      desc: "Golden hour, just the two of you",
      image: "/__mockup/images/lccx-charleston-sunset.webp"
    },
    {
      id: "party",
      label: "Group Party / Bachelorette",
      desc: "Private boat, your crew, BYOB",
      image: "/__mockup/images/lccx-bachelorette-boat.webp"
    },
    {
      id: "fishing",
      label: "Fishing Adventure",
      desc: "Trophy redfish in the Lowcountry",
      image: "/__mockup/images/lccx-fishing-redfish.webp"
    },
    {
      id: "exploring",
      label: "Just Exploring",
      desc: "Dolphins, eagles, open water",
      image: "/__mockup/images/lccx-dolphin-leap.webp"
    },
    {
      id: "celebration",
      label: "Special Celebration",
      desc: "Birthdays, anniversaries, milestones",
      image: "/__mockup/images/couple-beach.jpg"
    }
  ];

  const toursByOccasion: Record<Occasion, Tour[]> = {
    family: [
      {
        title: "Shark Tooth Hunting",
        price: "$65/person",
        image: "/__mockup/images/scene6-teeth.png",
        features: ["2-3 Hours", "Kid Friendly", "Keep what you find"]
      },
      {
        title: "Dolphin & Wildlife",
        price: "$59/person",
        image: "/__mockup/images/dolphins.png",
        features: ["2 Hours", "Guaranteed Sightings", "Educational"]
      }
    ],
    date: [
      {
        title: "Sunset Cruise",
        price: "$65/person",
        image: "/__mockup/images/lccx-sunset-tour.jpg",
        features: ["2 Hours", "BYOB Allowed", "Romantic Views"]
      },
      {
        title: "Dolphin & Wildlife",
        price: "$59/person",
        image: "/__mockup/images/dolphins.png",
        features: ["2 Hours", "Relaxing Pace", "Scenic Marshes"]
      }
    ],
    party: [
      {
        title: "Bachelorette Charters",
        price: "$450/boat",
        image: "/__mockup/images/bachelorette.png",
        features: ["Up to 6 Guests", "Bluetooth Audio", "Cooler Provided"]
      },
      {
        title: "Group Charters",
        price: "$375/boat",
        image: "/__mockup/images/charter-party.png",
        features: ["Custom Itinerary", "Sandbar Stops", "Private Experience"]
      }
    ],
    fishing: [
      {
        title: "Inshore Fishing",
        price: "$350/half-day",
        image: "/__mockup/images/fishing.png",
        features: ["Gear Included", "Expert Guide", "Catch & Release"]
      }
    ],
    exploring: [
      {
        title: "Dolphin & Wildlife",
        price: "$59/person",
        image: "/__mockup/images/dolphins.png",
        features: ["2 Hours", "Guaranteed Sightings", "Educational"]
      },
      {
        title: "Sunset Cruise",
        price: "$65/person",
        image: "/__mockup/images/lccx-sunset-tour.jpg",
        features: ["2 Hours", "BYOB Allowed", "Scenic Views"]
      }
    ],
    celebration: [
      {
        title: "Birthday Cruises",
        price: "$375/boat",
        image: "/__mockup/images/charter-party.png",
        features: ["Up to 6 Guests", "Custom Route", "Party Atmosphere"]
      },
      {
        title: "Sunset Cruise",
        price: "$65/person",
        image: "/__mockup/images/lccx-sunset-tour.jpg",
        features: ["2 Hours", "BYOB Allowed", "Romantic Views"]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#0d1b35] text-white font-sans selection:bg-orange-500/30">
      {/* Navbar */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#0d1b35]/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Anchor className="h-6 w-6 text-orange-500" />
              <span className="font-['Playfair_Display'] text-xl font-bold tracking-wide">
                Low Coastal
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-sm font-medium hover:text-orange-400 transition-colors">Tours</a>
              <a href="#" className="text-sm font-medium hover:text-orange-400 transition-colors">Why Us</a>
              <a href="#" className="text-sm font-medium hover:text-orange-400 transition-colors">Gallery</a>
              <a href="#" className="text-sm font-medium hover:text-orange-400 transition-colors">Reviews</a>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <a href="tel:8435081600" className="flex items-center gap-2 text-sm font-medium hover:text-orange-400 transition-colors">
                <Phone className="h-4 w-4" />
                (843) 508-1600
              </a>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded font-medium transition-colors shadow-[0_0_15px_rgba(249,115,22,0.3)] hover:shadow-[0_0_20px_rgba(249,115,22,0.5)]">
                Book Now
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#0d1b35] border-t border-white/10 p-4 shadow-xl">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-base font-medium p-2 hover:bg-white/5 rounded">Tours</a>
              <a href="#" className="text-base font-medium p-2 hover:bg-white/5 rounded">Why Us</a>
              <a href="#" className="text-base font-medium p-2 hover:bg-white/5 rounded">Gallery</a>
              <a href="#" className="text-base font-medium p-2 hover:bg-white/5 rounded">Reviews</a>
              <div className="pt-4 border-t border-white/10 flex flex-col gap-4">
                <a href="tel:8435081600" className="flex items-center gap-2 text-base font-medium p-2">
                  <Phone className="h-4 w-4 text-orange-500" />
                  (843) 508-1600
                </a>
                <button className="bg-orange-500 hover:bg-orange-600 text-white w-full py-3 rounded font-medium transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/__mockup/images/lccx-img8589.webp" 
            alt="Charleston waterway at sunset" 
            className="w-full h-full object-cover"
          />
          {/* Elegant gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b35]/80 via-[#0d1b35]/60 to-[#0d1b35]"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
          <span className="inline-block text-orange-400 font-medium tracking-widest uppercase text-sm mb-4">
            SC Lowcountry · Est. 2018
          </span>
          <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            What brings you to the water?
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light mb-10 max-w-2xl mx-auto">
            Tell us your vibe — we'll find your perfect adventure.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
            <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
              <Star className="h-5 w-5 fill-orange-500 text-orange-500" />
              <span className="font-medium">4.9★ Google Rating</span>
            </div>
            <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
              <ShieldCheck className="h-5 w-5 text-orange-500" />
              <span className="font-medium">USCG Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* Occasion Tiles */}
      <section className="py-20 relative z-10 bg-[#0d1b35]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold mb-4">Select Your Experience</h2>
            <p className="text-white/60 max-w-2xl mx-auto">Choose the occasion that brings you to Charleston, and we'll recommend the perfect itinerary.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {occasions.map((occ) => (
              <button
                key={occ.id}
                onClick={() => setActiveOccasion(occ.id)}
                className={`relative group overflow-hidden rounded-xl aspect-[4/3] transition-all duration-300 text-left ${
                  activeOccasion === occ.id 
                    ? "ring-4 ring-orange-500 ring-offset-4 ring-offset-[#0d1b35] scale-[1.02]" 
                    : "hover:scale-[1.02] hover:ring-2 hover:ring-white/30"
                }`}
              >
                <img 
                  src={occ.image} 
                  alt={occ.label} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-300 ${
                  activeOccasion === occ.id
                    ? "from-[#0d1b35] via-[#0d1b35]/60 to-transparent opacity-90"
                    : "from-[#0d1b35]/90 via-[#0d1b35]/40 to-transparent group-hover:opacity-80"
                }`}></div>
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="font-['Playfair_Display'] text-2xl font-bold text-white mb-2 leading-tight">
                    {occ.label}
                  </h3>
                  <p className="text-white/80 text-sm font-medium">
                    {occ.desc}
                  </p>
                  
                  <div className={`mt-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeOccasion === occ.id ? "bg-orange-500 text-white" : "bg-white/20 text-white opacity-0 group-hover:opacity-100"
                  }`}>
                    <ChevronRight className="h-5 w-5" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Tours */}
      <section className="py-16 bg-[#0a1529]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-[1px] flex-1 bg-white/10"></div>
              <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl font-bold text-center">
                Recommended for <span className="text-orange-400 italic">{occasions.find(o => o.id === activeOccasion)?.label}</span>
              </h2>
              <div className="h-[1px] flex-1 bg-white/10"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center">
              {toursByOccasion[activeOccasion].map((tour, idx) => (
                <div key={idx} className="bg-[#122345] rounded-xl overflow-hidden flex flex-col sm:flex-row border border-white/5 hover:border-white/10 transition-colors group">
                  <div className="w-full sm:w-2/5 h-64 sm:h-auto relative overflow-hidden">
                    <img 
                      src={tour.image} 
                      alt={tour.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-['Playfair_Display'] text-2xl font-bold">{tour.title}</h3>
                      </div>
                      <div className="text-orange-400 font-semibold mb-6">{tour.price}</div>
                      
                      <ul className="space-y-3 mb-8">
                        {tour.features.map((feat, i) => (
                          <li key={i} className="flex items-center gap-2 text-white/70 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-orange-500/80" />
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button className="w-full bg-white/10 hover:bg-orange-500 text-white py-3 rounded font-medium transition-all duration-300 border border-white/10 hover:border-orange-500">
                      View Details & Book
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-12 border-y border-white/5 bg-[#0d1b35]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-8 w-8 text-orange-500" />
              <span className="font-['Playfair_Display'] text-lg font-bold tracking-wide">USCG Certified Captains</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-white/10"></div>
            <div className="flex items-center gap-3">
              <Star className="h-8 w-8 text-orange-500 fill-orange-500" />
              <span className="font-['Playfair_Display'] text-lg font-bold tracking-wide">4.9★ Google Rating</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-white/10"></div>
            <div className="flex items-center gap-3">
              <Users className="h-8 w-8 text-orange-500" />
              <span className="font-['Playfair_Display'] text-lg font-bold tracking-wide">All Ages Welcome</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#0a1529] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-3xl md:text-5xl font-bold mb-4">Memories on the Water</h2>
            <p className="text-orange-400 font-medium">Hear from our recent guests</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-[#122345] p-8 md:p-10 rounded-2xl border border-white/5 relative">
              <div className="text-6xl text-orange-500/20 font-serif absolute top-6 left-6 leading-none">"</div>
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-orange-400 fill-orange-400" />
                ))}
              </div>
              <p className="text-xl md:text-2xl font-['Playfair_Display'] text-white/90 leading-relaxed mb-8 relative z-10">
                Best experience of our whole Charleston trip! The kids found 12 shark teeth.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-bold">
                  S
                </div>
                <div>
                  <div className="font-bold">Sarah M.</div>
                  <div className="text-sm text-white/50">Family of 5</div>
                </div>
              </div>
            </div>

            <div className="bg-[#122345] p-8 md:p-10 rounded-2xl border border-white/5 relative mt-0 md:mt-12">
              <div className="text-6xl text-orange-500/20 font-serif absolute top-6 left-6 leading-none">"</div>
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-orange-400 fill-orange-400" />
                ))}
              </div>
              <p className="text-xl md:text-2xl font-['Playfair_Display'] text-white/90 leading-relaxed mb-8 relative z-10">
                We did the sunset cruise for our anniversary — absolutely magical. Will do it again.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-bold">
                  J
                </div>
                <div>
                  <div className="font-bold">James & Priya</div>
                  <div className="text-sm text-white/50">Anniversary Trip</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0d1b35] border-t border-white/10 pt-20 pb-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Anchor className="h-8 w-8 text-orange-500" />
                <span className="font-['Playfair_Display'] text-3xl font-bold tracking-wide">
                  Low Coastal
                </span>
              </div>
              <p className="text-white/60 mb-8 max-w-md text-lg leading-relaxed">
                Boutique private boat charters in Charleston, SC. Specializing in family adventures, shark tooth hunting, and sunset cruises.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded font-bold transition-colors text-lg shadow-[0_0_20px_rgba(249,115,22,0.2)]">
                Book Your Adventure
              </button>
            </div>

            <div>
              <h4 className="font-['Playfair_Display'] text-xl font-bold mb-6">Contact</h4>
              <ul className="space-y-4">
                <li>
                  <a href="tel:8435081600" className="flex items-center gap-3 text-white/70 hover:text-orange-400 transition-colors">
                    <Phone className="h-5 w-5" />
                    (843) 508-1600
                  </a>
                </li>
                <li>
                  <a href="mailto:lowcountrycoastalexcursions@gmail.com" className="flex items-start gap-3 text-white/70 hover:text-orange-400 transition-colors">
                    <div className="mt-1">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    </div>
                    <span className="break-all">lowcountrycoastalexcursions@gmail.com</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3 text-white/70">
                    <MapPin className="h-5 w-5 mt-1" />
                    <span>Departing from Charleston area marinas</span>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-['Playfair_Display'] text-xl font-bold mb-6">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-white/40 text-sm gap-4">
            <p>© {new Date().getFullYear()} Lowcountry Coastal Excursions. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
