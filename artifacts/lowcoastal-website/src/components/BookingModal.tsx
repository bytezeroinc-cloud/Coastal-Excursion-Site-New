import React, { createContext, useContext, useState, useCallback } from "react";
import { X } from "lucide-react";

const FH_BOOKING_URL = "https://fareharbor.com/lowcountrycoastalexcursions/items/";

interface BookingContextType {
  openBooking: () => void;
}

const BookingContext = createContext<BookingContextType>({ openBooking: () => {} });

export function useBooking() {
  return useContext(BookingContext);
}

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openBooking = useCallback(() => setIsOpen(true), []);
  const closeBooking = useCallback(() => setIsOpen(false), []);

  return (
    <BookingContext.Provider value={{ openBooking }}>
      {children}
      {isOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center"
          onClick={closeBooking}
          aria-modal="true"
          role="dialog"
          aria-label="Book your tour"
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <div
            className="relative z-10 w-full max-w-4xl mx-4 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            style={{ height: "85vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between bg-[hsl(218,42%,11%)] px-5 py-3 border-b border-white/10 flex-shrink-0">
              <span className="text-white font-semibold text-base tracking-wide">Book Your Excursion</span>
              <button
                onClick={closeBooking}
                className="text-white/70 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
                aria-label="Close booking modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <iframe
              src={FH_BOOKING_URL}
              title="FareHarbor Booking"
              className="flex-1 w-full bg-white"
              allow="payment"
            />
          </div>
        </div>
      )}
    </BookingContext.Provider>
  );
}
