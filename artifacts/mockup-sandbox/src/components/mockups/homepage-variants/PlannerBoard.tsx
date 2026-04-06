import React, { useState } from "react";
import { Anchor, Phone, Star, Clock, Users, Target, CheckCircle2, ChevronDown, ChevronUp, Instagram, Facebook, Twitter, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function PlannerBoard() {
  const [activeFilter, setActiveFilter] = useState("All Tours");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filters = ["All Tours", "Family", "Private Charter", "Romantic", "Adventure", "Fishing"];

  const tours = [
    {
      id: 1,
      name: "Shark Tooth Hunting",
      price: "From $65/person",
      duration: "3 hrs",
      groupSize: "Up to 20",
      bestFor: "All ages",
      highlight: "Fossils",
      desc: "Boat out to a remote barrier island and hunt for megalodon teeth. Keep every tooth you find — there's no road access to this beach.",
      perks: ["Keep all teeth you find", "Remote island access by boat only", "Family friendly", "All equipment provided"],
      image: "/__mockup/images/lccx-img1016.jpg",
      categories: ["Family", "Adventure"],
    },
    {
      id: 2,
      name: "Dolphin & Wildlife",
      price: "From $59/person",
      duration: "2 hrs",
      groupSize: "Up to 23",
      bestFor: "All ages",
      highlight: "Wildlife",
      desc: "Wild dolphin encounters in Charleston Harbor and Shem Creek. Expect close-range sightings on every trip — these are wild dolphins, not trained performers.",
      perks: ["Wild dolphins on every trip", "Charleston Harbor & Shem Creek", "Family friendly", "Captain narrates wildlife"],
      image: "/__mockup/images/lccx-dolphin-leap.webp",
      categories: ["Family", "Adventure"],
    },
    {
      id: 3,
      name: "Sunset Cruise",
      price: "From $65/person",
      duration: "2 hrs",
      groupSize: "Up to 23",
      bestFor: "Couples & groups",
      highlight: "Views",
      desc: "Golden hour on Charleston Harbor with dolphins in the last warm light. Ravenel Bridge, marsh, and a sky that will stop conversation entirely.",
      perks: ["Golden hour timing", "Dolphin sightings", "Ravenel Bridge views", "BYOB welcome"],
      image: "/__mockup/images/lccx-charleston-sunset.webp",
      categories: ["Romantic"],
    },
    {
      id: 4,
      name: "Bachelorette & Group Charter",
      price: "From $450/boat",
      duration: "2–4 hrs",
      groupSize: "Up to 23",
      bestFor: "Private group",
      highlight: "Party",
      desc: "The whole boat is yours. Bring your crew, your music, and your drinks. Private bathroom on board. We handle the rest.",
      perks: ["Full boat buyout", "BYOB welcome", "Bluetooth stereo", "Private restroom on board"],
      image: "/__mockup/images/lccx-bachelorette-boat.webp",
      categories: ["Private Charter"],
    },
    {
      id: 5,
      name: "Birthday Party Cruise",
      price: "From $375/boat",
      duration: "2 hrs",
      groupSize: "Up to 23",
      bestFor: "Private celebration",
      highlight: "Celebrate",
      desc: "Private boat for your birthday celebration. Decorate the boat, bring your guests and a cooler — celebrate on the water.",
      perks: ["Private boat", "Decorate the vessel", "BYOB coolers welcome", "Up to 23 guests"],
      image: "/__mockup/images/family-boat.png",
      categories: ["Private Charter", "Family"],
    },
    {
      id: 6,
      name: "Group Charter",
      price: "From $375/boat",
      duration: "Flexible",
      groupSize: "Up to 23",
      bestFor: "Corporate & family",
      highlight: "Custom",
      desc: "Fully custom for corporate events, family reunions, or any large group. You pick the experience — we design the trip around you.",
      perks: ["Fully customizable itinerary", "Corporate & family groups", "BYOB coolers welcome", "Up to 23 guests"],
      image: "/__mockup/images/lccx-group-shot.webp",
      categories: ["Private Charter"],
    },
    {
      id: 7,
      name: "Inshore Fishing",
      price: "From $350/half-day",
      duration: "4 hrs",
      groupSize: "Up to 4",
      bestFor: "Anglers",
      highlight: "Redfish & Trout",
      desc: "Trophy redfish and speckled trout in the SC Lowcountry back country. All gear included, USCG certified captain, fish cleaning available.",
      perks: ["All rods, tackle & gear included", "USCG certified captain", "Redfish & speckled trout", "Fish cleaning available"],
      image: "/__mockup/images/lccx-fishing-redfish.webp",
      categories: ["Fishing", "Adventure"],
    },
  ];

  const filteredTours = activeFilter === "All Tours" 
    ? tours 
    : tours.filter(tour => tour.categories.includes(activeFilter));

  return (
    <div className="min-h-screen bg-[#f8f9fb] font-sans text-[#0d1b35]">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Anchor className="h-6 w-6 text-[#0d1b35]" />
            <span className="font-bold text-xl tracking-tight text-[#0d1b35]">Low Coastal</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:8435081600" className="hidden sm:flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity">
              <Phone className="h-4 w-4" />
              (843) 508-1600
            </a>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 font-medium">
              Book Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0d1b35] leading-tight">
                7 ways to see the SC Lowcountry
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-lg">
                All tours depart from Shem Creek. USCG certified captains. Family friendly.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
                <div className="flex text-amber-400">
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                </div>
                <span className="text-sm font-medium">4.9 Google</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm text-sm font-medium">
                <CheckCircle2 className="h-4 w-4 text-blue-600" />
                USCG Certified
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm text-sm font-medium text-slate-600">
                Since 2018
              </div>
            </div>
          </div>
          
          <div className="relative h-[400px] hidden lg:block">
            <img 
              src="/__mockup/images/lccx-dolphin-leap.webp" 
              alt="Dolphin leaping" 
              className="absolute top-0 right-12 w-64 h-64 object-cover rounded-2xl shadow-xl z-10 border-4 border-[#f8f9fb]"
            />
            <img 
              src="/__mockup/images/lccx-img1016.jpg" 
              alt="Shark tooth finding" 
              className="absolute bottom-4 right-0 w-72 h-56 object-cover rounded-2xl shadow-xl z-20 border-4 border-[#f8f9fb]"
            />
            <img 
              src="/__mockup/images/lccx-charleston-sunset.webp" 
              alt="Sunset cruise" 
              className="absolute top-24 left-0 w-64 h-56 object-cover rounded-2xl shadow-xl z-0 border-4 border-[#f8f9fb]"
            />
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-16 z-40 bg-[#f8f9fb]/90 backdrop-blur-md py-4 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 hide-scrollbar">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "whitespace-nowrap px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border",
                  activeFilter === filter 
                    ? "bg-orange-500 text-white border-orange-500 shadow-sm" 
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[50vh]">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTours.map((tour) => {
            const isExpanded = expandedId === tour.id;
            return (
              <div 
                key={tour.id} 
                className={cn(
                  "bg-white rounded-2xl border overflow-hidden transition-all duration-300 flex flex-col group",
                  isExpanded ? "border-orange-400 shadow-lg ring-1 ring-orange-400/30" : "border-slate-200 hover:shadow-md"
                )}
              >
                <div className="relative aspect-video overflow-hidden bg-slate-100">
                  <img 
                    src={tour.image} 
                    alt={tour.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-[#0d1b35] shadow-sm">
                    {tour.price}
                  </div>
                </div>
                
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-bold text-lg mb-3 text-[#0d1b35]">{tour.name}</h3>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 text-xs font-medium text-slate-700">
                      <Clock className="w-3.5 h-3.5" /> {tour.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 text-xs font-medium text-slate-700">
                      <Users className="w-3.5 h-3.5" /> {tour.groupSize}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 text-xs font-medium text-slate-700">
                      <Star className="w-3.5 h-3.5" /> {tour.bestFor}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 text-xs font-medium text-slate-700">
                      <Target className="w-3.5 h-3.5" /> {tour.highlight}
                    </span>
                  </div>
                  
                  <p className="text-slate-600 text-sm mb-4 flex-grow">
                    {tour.desc}
                  </p>

                  {/* Expanded detail panel */}
                  {isExpanded && (
                    <div className="mb-4 bg-slate-50 rounded-xl p-4 border border-slate-200 animate-in slide-in-from-top-1 duration-200">
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">What's included</p>
                      <ul className="space-y-2">
                        {tour.perks.map((perk, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                            {perk}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-2 gap-3 mt-auto">
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : tour.id)}
                      className={cn(
                        "flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg border text-sm font-semibold transition-all duration-200",
                        isExpanded
                          ? "border-orange-400 text-orange-600 bg-orange-50 hover:bg-orange-100"
                          : "border-slate-300 text-[#0d1b35] hover:bg-slate-50"
                      )}
                    >
                      {isExpanded ? (
                        <><ChevronUp className="w-4 h-4" /> Hide</>
                      ) : (
                        <><ChevronDown className="w-4 h-4" /> Details</>
                      )}
                    </button>
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white shadow-sm">
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Build Your Day */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-[#0d1b35] mb-3">Build Your Day</h2>
            <p className="text-slate-600 text-lg">Popular combinations for the perfect Lowcountry experience.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#f8f9fb] rounded-2xl p-8 border border-slate-200">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-bold text-xl text-[#0d1b35] mb-1">Full Day Adventure</h3>
                  <p className="text-slate-600 text-sm">Morning + Afternoon</p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-2xl text-orange-500">$124</div>
                  <div className="text-xs text-slate-500">per person</div>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0">
                    <img src="/__mockup/images/lccx-img1016.jpg" alt="Shark tooth" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Morning Shark Tooth Hunt</div>
                    <div className="text-xs text-slate-500">9:00 AM - 12:00 PM</div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-px h-4 bg-slate-300"></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0">
                    <img src="/__mockup/images/lccx-dolphin-leap.webp" alt="Dolphin" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Afternoon Dolphin Tour</div>
                    <div className="text-xs text-slate-500">2:00 PM - 4:00 PM</div>
                  </div>
                </div>
              </div>
              
              <Button className="w-full bg-[#0d1b35] hover:bg-[#1a2d52] text-white">Book Both</Button>
            </div>
            
            <div className="bg-[#f8f9fb] rounded-2xl p-8 border border-slate-200">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-bold text-xl text-[#0d1b35] mb-1">Romantic Evening</h3>
                  <p className="text-slate-600 text-sm">Sunset + Dinner</p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-2xl text-orange-500">$65</div>
                  <div className="text-xs text-slate-500">tour only</div>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0">
                    <img src="/__mockup/images/lccx-charleston-sunset.webp" alt="Sunset" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Sunset Dolphin Cruise</div>
                    <div className="text-xs text-slate-500">Golden hour departure</div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-px h-4 bg-slate-300"></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-slate-200 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-slate-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Shem Creek Dining</div>
                    <div className="text-xs text-slate-500">We drop you off at the restaurants</div>
                  </div>
                </div>
              </div>
              
              <Button className="w-full bg-[#0d1b35] hover:bg-[#1a2d52] text-white">Book Tour</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Strip */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex text-amber-400 mb-3">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <p className="text-slate-700 font-medium italic mb-4">"The best part of our Charleston trip. Capt. Sarah found us dolphins immediately and the kids loved the shark teeth."</p>
              <div className="text-sm text-slate-500 font-semibold">— Michael T.</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex text-amber-400 mb-3">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <p className="text-slate-700 font-medium italic mb-4">"Super organized, clean boat, and beautiful views. The sunset cruise was perfectly timed."</p>
              <div className="text-sm text-slate-500 font-semibold">— Jessica R.</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex text-amber-400 mb-3">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <p className="text-slate-700 font-medium italic mb-4">"Booked the bachelorette charter. Everything was easy, communication was great, and we had a blast."</p>
              <div className="text-sm text-slate-500 font-semibold">— Amanda W.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#0d1b35] py-16 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8">Ready to get on the water?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold w-full sm:w-auto px-8 h-14 text-lg rounded-full">
              Book Now
            </Button>
            <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-white/10 w-full sm:w-auto px-8 h-14 text-lg rounded-full font-medium">
              <Phone className="w-5 h-5 mr-2" /> (843) 508-1600
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Anchor className="h-6 w-6 text-[#0d1b35]" />
              <span className="font-bold text-xl tracking-tight text-[#0d1b35]">Low Coastal</span>
            </div>
            
            <div className="flex gap-6 text-sm font-medium text-slate-600">
              <a href="#" className="hover:text-orange-500 transition-colors">About</a>
              <a href="#" className="hover:text-orange-500 transition-colors">FAQ</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Contact</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Waiver</a>
            </div>
            
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-[#0d1b35] transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-[#0d1b35] transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-[#0d1b35] transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-slate-500">
            © {new Date().getFullYear()} Low Coastal Expeditions. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
