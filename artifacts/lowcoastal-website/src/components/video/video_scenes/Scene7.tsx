import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Scene7() {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const t = [
      setTimeout(() => setPhase(1), 200),
      setTimeout(() => setPhase(2), 800),
      setTimeout(() => setPhase(3), 1600),
    ];
    return () => t.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden"
      initial={{ opacity: 0, scale: 1.04 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Vibrant party sunset background */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(180deg, #1A0A3E 0%, #6B1A5A 20%, #C4306B 40%, #E87C3E 60%, #D4A843 80%, #F5EED7 100%)"
      }} />

      {/* Marsh/sunset image */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={phase >= 1 ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 0 }}
        transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src="/images/marsh-sunrise.png"
          alt="Sunset boat party cruise on the Lowcountry waters"
          className="w-full h-full object-cover"
          style={{ opacity: 0.7 }}
        />
      </motion.div>

      {/* Party overlay — warm glow */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(180deg, rgba(107,26,90,0.6) 0%, rgba(200,48,107,0.2) 40%, rgba(11,31,62,0.7) 100%)"
      }} />

      {/* Celebratory sparkle particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${2 + Math.random() * 5}px`,
            height: `${2 + Math.random() * 5}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 60}%`,
            background: i % 2 === 0 ? "#D4A843" : "#F5EED7",
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Foreground — centered */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-8">
        <motion.div
          className="text-xs tracking-[0.3em] uppercase font-bold mb-5"
          style={{ color: "rgba(212,168,67,0.9)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          initial={{ opacity: 0, y: 15 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.5 }}
        >
          Bachelorette & Private Party Charters
        </motion.div>

        <motion.div
          className="text-center"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
            fontWeight: 700,
            color: "#F5EED7",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
          initial={{ opacity: 0, y: 35 }}
          animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          Party Where the<br />
          <span style={{ color: "#E87C3E", fontStyle: "italic" }}>Sky Meets the Sea</span>
        </motion.div>

        <motion.p
          className="text-center mt-4"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "clamp(0.85rem, 1.4vw, 1rem)",
            color: "rgba(245,238,215,0.75)",
            maxWidth: "45vw",
          }}
          initial={{ opacity: 0 }}
          animate={phase >= 3 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          Private charters for bachelorettes, birthdays, and corporate groups.<br />
          Up to 23 guests on our luxury 30-ft Roamer IV. BYOB welcome.
        </motion.p>

        {/* Amenities */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mt-6"
          initial={{ opacity: 0, y: 10 }}
          animate={phase >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {["Full Bathroom Onboard", "BYOB Welcome", "Custom Itinerary", "Up to 23 Guests"].map((s, i) => (
            <div key={i} style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(0.65rem, 0.95vw, 0.78rem)",
              color: "#F5EED7",
              background: "rgba(107,26,90,0.5)",
              border: "1px solid rgba(212,168,67,0.4)",
              backdropFilter: "blur(8px)",
              padding: "0.3rem 0.9rem",
              borderRadius: "99px",
            }}>{s}</div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
