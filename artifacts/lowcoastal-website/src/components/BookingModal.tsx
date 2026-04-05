import React, { createContext, useContext, useCallback } from "react";

declare global {
  interface Window {
    FH?: {
      open: (options: { shortname: string; view?: string | object; full_items?: string }) => boolean;
      close: () => boolean;
    };
  }
}

const FH_SHORTNAME = "lowcountrycoastalexcursions";

interface BookingContextType {
  openBooking: () => void;
}

const BookingContext = createContext<BookingContextType>({ openBooking: () => {} });

export function useBooking() {
  return useContext(BookingContext);
}

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const openBooking = useCallback(() => {
    if (window.FH) {
      window.FH.open({ shortname: FH_SHORTNAME });
    } else {
      window.open(`https://fareharbor.com/embeds/book/${FH_SHORTNAME}/`, "_blank");
    }
  }, []);

  return (
    <BookingContext.Provider value={{ openBooking }}>
      {children}
    </BookingContext.Provider>
  );
}
