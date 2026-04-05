import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Scene3() {
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: "-3%" }}
      transition={{ duration: 0.7 }}
    >
      {/* Ocean background */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(180deg, #1A6B8A 0%, #2A8DA0 25%, #1E7090 55%, #0E3A5C 85%, #0B1F3E 100%)"
      }} />

      {/* Boat image — large and prominent */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.15, opacity: 0 }}
        animate={phase >= 1 ? { scale: 1, opacity: 1 } : { scale: 1.15, opacity: 0 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src="/images/hero-boat.png"
          alt="Roamer IV on open water"
          className="w-full h-full object-cover"
          style={{ opacity: 0.85 }}
        />
      </motion.div>

      {/* Overlay for text legibility */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(90deg, rgba(11,31,62,0.8) 0%, rgba(11,31,62,0.1) 60%, transparent 100%)"
      }} />

      {/* Animated wake lines */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            bottom: `${15 + i * 8}%`,
            right: "0%",
            width: "50%",
            height: "2px",
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3))",
          }}
          animate={{ opacity: [0, 0.6, 0], x: ["0%", "-10%"] }}
          transition={{ duration: 3 + i, repeat: Infinity, delay: i * 1.2, ease: "easeOut" }}
        />
      ))}

      {/* Foreground text — right side */}
      <div className="absolute inset-0 flex flex-col justify-center pl-[6%] z-10" style={{ maxWidth: "55%" }}>
        <motion.div
          className="text-xs tracking-[0.3em] uppercase font-bold mb-5"
          style={{ color: "rgba(232,124,62,0.9)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          initial={{ opacity: 0 }}
          animate={phase >= 1 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          The Roamer IV · 30-ft Luxury Cruiser
        </motion.div>

        <motion.div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.8rem, 6.5vw, 6rem)",
            fontWeight: 700,
            color: "#F5EED7",
            lineHeight: 1,
            letterSpacing: "-0.02em",
          }}
          initial={{ opacity: 0, x: -40 }}
          animate={phase >= 2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          Open Water.<br />
          <span style={{ color: "#E87C3E", fontStyle: "italic" }}>Open Hearts.</span>
        </motion.div>

        <motion.div
          className="mt-6 flex gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          {["Up to 23 Guests", "Full Bathroom", "Private Charter"].map((stat, i) => (
            <div key={i} className="text-center">
              <div style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(0.75rem, 1.2vw, 0.95rem)",
                color: "rgba(245,238,215,0.7)",
                borderTop: "1px solid rgba(212,168,67,0.4)",
                paddingTop: "0.5rem",
              }}>{stat}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
