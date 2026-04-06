import React from 'react';
import { Anchor, ArrowRight, Star, ChevronDown, Menu, Phone } from 'lucide-react';

export function Immersion() {
  return (
    <div className="min-h-screen bg-[#faf8f3] text-[#1a1008] font-sans overflow-x-hidden">
      {/* 1. Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 transition-all duration-300 bg-transparent text-white">
        <div className="flex items-center gap-2">
          <Anchor className="w-6 h-6" />
          <span className="font-['Playfair_Display'] text-xl font-semibold tracking-wide">Low Coastal</span>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm tracking-wider font-medium">
          <a href="#" className="hover:text-white/70 transition-colors">Tours</a>
          <a href="#" className="hover:text-white/70 transition-colors">Gallery</a>
          <a href="#" className="hover:text-white/70 transition-colors">Reviews</a>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>(843) 508-1600</span>
          </div>
          <button className="bg-[#f97316] hover:bg-[#ea580c] text-white px-5 py-2.5 rounded-sm transition-colors uppercase text-xs font-bold tracking-widest">
            Book Now
          </button>
        </div>
        
        {/* Mobile Nav Toggle */}
        <button className="md:hidden text-white">
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* 2. Opening — The Scene */}
      <section className="relative h-screen w-full flex flex-col justify-between p-6 md:p-12 text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/30 z-10" />
          <img 
            src="/__mockup/images/marsh-sunrise.jpg" 
            alt="Sunrise over the marsh" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 mt-20 md:mt-16">
          <span className="font-['Playfair_Display'] text-lg md:text-xl italic text-white/90">5:45 AM</span>
        </div>
        
        <div className="relative z-20 mb-8 max-w-4xl">
          <h1 className="font-['Playfair_Display'] text-4xl md:text-6xl lg:text-7xl font-medium leading-tight">
            The marsh is still.<br />
            Something remarkable is about to happen.
          </h1>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-70 animate-pulse">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </section>

      {/* 3. Moment 1 — 8:15 AM */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
          <div className="w-full md:w-1/2">
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src="/__mockup/images/lccx-dolphin-leap.webp" 
                alt="Dolphin leaping near the boat" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="mb-6">
              <span className="font-['Playfair_Display'] text-xl italic text-gray-500">8:15 AM</span>
              <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl mt-2 mb-8 text-[#1a1008]">Your first dolphin</h2>
            </div>
            
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-12 max-w-lg">
              She surfaces less than 10 feet away. Then another. Then three more, racing the bow wave. This is a Dolphin & Wildlife Tour — and this happens on every single trip.
            </p>
            
            <div className="bg-white p-6 border border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-6 max-w-lg shadow-sm">
              <div>
                <h3 className="font-['Playfair_Display'] text-xl font-medium mb-1">Dolphin & Wildlife Tours</h3>
                <p className="text-sm text-gray-500">From $59/person</p>
              </div>
              <button className="group flex items-center gap-2 text-[#f97316] font-medium hover:text-[#ea580c] transition-colors whitespace-nowrap">
                Join the next tour
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Moment 2 — 10:30 AM */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-[#0d1623] text-[#faf8f3]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse gap-12 md:gap-20 items-center">
          <div className="w-full md:w-1/2">
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src="/__mockup/images/kids-teeth.png" 
                alt="Kids holding fossilized shark teeth" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="mb-6">
              <span className="font-['Playfair_Display'] text-xl italic text-gray-400">10:30 AM</span>
              <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl mt-2 mb-8 text-white leading-tight">You're holding a megalodon tooth</h2>
            </div>
            
            <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-12 max-w-lg">
              It's 65 million years old. A megalodon tooth, the size of your palm, that washed up on a remote barrier island this morning. We got here by boat — there's no road access. You can keep every tooth you find.
            </p>
            
            <div className="bg-[#1a2432] p-6 border border-gray-700 flex flex-col sm:flex-row sm:items-center justify-between gap-6 max-w-lg">
              <div>
                <h3 className="font-['Playfair_Display'] text-xl font-medium text-white mb-1">Shark Tooth Hunting</h3>
                <p className="text-sm text-gray-400">From $65/person</p>
              </div>
              <button className="group flex items-center gap-2 text-[#f97316] font-medium hover:text-[#ea580c] transition-colors whitespace-nowrap">
                Find your own tooth
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Pull Quote */}
      <section className="py-32 px-6 md:px-12 max-w-5xl mx-auto text-center">
        <div className="flex justify-center gap-1 mb-8 text-[#f97316]">
          <Star className="w-6 h-6 fill-current" />
          <Star className="w-6 h-6 fill-current" />
          <Star className="w-6 h-6 fill-current" />
          <Star className="w-6 h-6 fill-current" />
          <Star className="w-6 h-6 fill-current" />
        </div>
        <blockquote className="font-['Playfair_Display'] text-3xl md:text-5xl lg:text-6xl leading-tight text-[#1a1008] mb-12">
          "Best experience of our whole Charleston trip — my kids still talk about it."
        </blockquote>
        <div className="text-gray-500 uppercase tracking-widest text-sm font-medium">
          — Sarah M., Family of 5
        </div>
      </section>

      {/* 6. Moment 3 — 5:30 PM */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
          <div className="w-full md:w-1/2">
            <div className="aspect-[3/4] overflow-hidden">
              <img 
                src="/__mockup/images/lccx-ravenel-bridge.webp" 
                alt="Ravenel Bridge at sunset" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="mb-6">
              <span className="font-['Playfair_Display'] text-xl italic text-gray-500">5:30 PM</span>
              <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl mt-2 mb-8 text-[#1a1008]">The harbor ignites</h2>
            </div>
            
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-12 max-w-lg">
              The bridge goes copper. Dolphins feed in the last warm light. Someone on the boat says nothing for a full minute.
            </p>
            
            <div className="bg-white p-6 border border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-6 max-w-lg shadow-sm">
              <div>
                <h3 className="font-['Playfair_Display'] text-xl font-medium mb-1">Sunset Cruise</h3>
                <p className="text-sm text-gray-500">From $65/person</p>
              </div>
              <button className="group flex items-center gap-2 text-[#f97316] font-medium hover:text-[#ea580c] transition-colors whitespace-nowrap">
                Book a sunset
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Moment 4 — Group */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse gap-12 md:gap-20 items-center">
          <div className="w-full md:w-[55%]">
            <div className="aspect-[16/9] overflow-hidden">
              <img 
                src="/__mockup/images/lccx-bachelorette-boat.webp" 
                alt="Bachelorette party on the boat" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </div>
          <div className="w-full md:w-[45%] flex flex-col justify-center">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl mb-8 text-[#1a1008] leading-tight">Your charter,<br />your rules</h2>
            
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-12 max-w-lg">
              The entire boat to yourselves. Up to 23 guests. BYOB, connect to the Bluetooth stereo, and let us handle the rest. Private bathroom on board.
            </p>
            
            <div className="bg-[#faf8f3] p-6 border border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-6 max-w-lg">
              <div>
                <h3 className="font-['Playfair_Display'] text-xl font-medium mb-1">Bachelorette & Group</h3>
                <p className="text-sm text-gray-500">From $450/boat</p>
              </div>
              <button className="group flex items-center gap-2 text-[#f97316] font-medium hover:text-[#ea580c] transition-colors whitespace-nowrap">
                Plan your charter
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7b. All 7 Experiences — compact access rail */}
      <section className="py-24 md:py-28 px-6 md:px-12 bg-[#faf8f3] border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-['Playfair_Display'] text-sm italic text-gray-500 tracking-wider">All our experiences</span>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl mt-2 text-[#1a1008]">Seven ways to get on the water</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0 border border-gray-200">
            {[
              {
                name: "Dolphin & Wildlife",
                price: "From $59/person",
                tag: "2 hrs · Up to 23",
                note: "Wild dolphins on every trip.",
                img: "/__mockup/images/lccx-dolphin-leap.webp",
              },
              {
                name: "Shark Tooth Hunting",
                price: "From $65/person",
                tag: "3 hrs · Up to 20",
                note: "Keep every fossil you find.",
                img: "/__mockup/images/lccx-img1016.jpg",
              },
              {
                name: "Sunset Cruise",
                price: "From $65/person",
                tag: "2 hrs · Up to 23",
                note: "Golden hour on Charleston Harbor.",
                img: "/__mockup/images/lccx-charleston-sunset.webp",
              },
              {
                name: "Bachelorette & Group",
                price: "From $450/boat",
                tag: "2–4 hrs · Up to 23",
                note: "BYOB, Bluetooth, full boat buyout.",
                img: "/__mockup/images/lccx-bachelorette-boat.webp",
              },
              {
                name: "Birthday Party Cruise",
                price: "From $375/boat",
                tag: "2 hrs · Up to 23",
                note: "Private celebration on the water.",
                img: "/__mockup/images/family-boat.png",
              },
              {
                name: "Group Charter",
                price: "From $375/boat",
                tag: "Flexible · Up to 23",
                note: "Corporate, family, fully custom.",
                img: "/__mockup/images/lccx-group-shot.webp",
              },
              {
                name: "Inshore Fishing",
                price: "From $350/half-day",
                tag: "4 hrs · Up to 4",
                note: "Redfish & trout. All gear included.",
                img: "/__mockup/images/lccx-fishing-redfish.webp",
              },
            ].map((t, i) => (
              <div key={i} className="relative group overflow-hidden border-r border-b border-gray-200 last:border-r-0 bg-white">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={t.img} 
                    alt={t.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <p className="font-['Playfair_Display'] text-lg leading-tight mb-0.5">{t.name}</p>
                  <p className="text-xs text-white/70 mb-1">{t.tag}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold">{t.price}</span>
                    <button className="text-[#f97316] text-xs font-semibold uppercase tracking-wider hover:text-orange-300 transition-colors">
                      Book →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. The Close */}
      <section className="py-32 px-6 md:px-12 bg-[#0d1623] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-['Playfair_Display'] text-5xl md:text-7xl mb-12 leading-tight">
            Ready to write<br />your story?
          </h2>
          
          <div className="flex flex-wrap justify-center gap-6 text-gray-400 mb-16 uppercase tracking-widest text-xs font-semibold">
            <span className="flex items-center gap-2">USCG Certified</span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1">4.9 <Star className="w-3 h-3 fill-current text-[#f97316]" /></span>
            <span className="hidden md:inline">•</span>
            <span>Since 2018</span>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-24">
            <button className="bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-4 rounded-sm transition-colors text-sm font-bold tracking-widest uppercase w-full sm:w-auto">
              Book Now
            </button>
            <button className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-sm transition-colors text-sm font-bold tracking-widest uppercase w-full sm:w-auto">
              Call (843) 508-1600
            </button>
          </div>
        </div>
      </section>
      
      {/* Footer minimal */}
      <footer className="bg-[#0a111a] text-gray-500 py-12 px-6 md:px-12 text-center text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-['Playfair_Display'] text-xl text-white">Low Coastal</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">hello@lowcoastal.com</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
          </div>
          <div>© {new Date().getFullYear()} Low Coastal Expeditions</div>
        </div>
      </footer>
    </div>
  );
}
