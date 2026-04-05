import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Anchor } from "lucide-react";

export function Scene10() {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const t = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 1000),
      setTimeout(() => setPhase(3), 1800),
      setTimeout(() => setPhase(4), 2800),
      setTimeout(() => setPhase(5), 4200),
    ];
    return () => t.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ clipPath: "circle(0% at 50% 50%)" }}
      transition={{ duration: 1.0 }}
    >
      {/* Deep coastal night bg with ocean image */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(180deg, #04111F 0%, #0B2A4A 30%, #1A4A6B 55%, #0B3A5C 75%, #04111F 100%)"
      }} />

      {/* Boat hero in background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{ filter: "saturate(0.5)" }}
        initial={{ scale: 1.2 }}
        animate={phase >= 1 ? { scale: 1.0 } : { scale: 1.2 }}
        transition={{ duration: 8, ease: "linear" }}
      >
        <img src="/images/hero-boat.png" alt="" className="w-full h-full object-cover" />
      </motion.div>

      {/* Radial glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(232,124,62,0.2) 0%, transparent 70%)", width: "80vw", height: "60vh" }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Stars */}
      {[...Array(40)].map((_, i) => (
        <div key={i} className="absolute rounded-full bg-white" style={{
          width: `${1 + Math.random() * 2}px`,
          height: `${1 + Math.random() * 2}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 50}%`,
          opacity: 0.3 + Math.random() * 0.5,
        }} />
      ))}

      {/* Center brand lockup */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-8">
        {/* Anchor icon */}
        <motion.div
          initial={{ scale: 0, opacity: 0, rotate: -30 }}
          animate={phase >= 1 ? { scale: 1, opacity: 1, rotate: 0 } : { scale: 0, opacity: 0, rotate: -30 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          style={{ color: "#E87C3E", filter: "drop-shadow(0 0 20px rgba(232,124,62,0.7))" }}
        >
          <Anchor size="5vw" style={{ minWidth: 40, maxWidth: 80 }} />
        </motion.div>

        {/* Brand name */}
        <motion.div
          className="text-center mt-5 mb-2"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 5vw, 4.5rem)",
            fontWeight: 700,
            color: "#F5EED7",
            letterSpacing: "0.03em",
            lineHeight: 1.1,
          }}
          initial={{ opacity: 0, y: 25 }}
          animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          LowCountry<br />
          <span style={{ color: "#E87C3E" }}>Coastal Excursions</span>
        </motion.div>

        {/* Tagline */}
        <motion.div
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "clamp(0.75rem, 1.5vw, 1rem)",
            color: "rgba(212,168,67,0.85)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
          initial={{ opacity: 0 }}
          animate={phase >= 3 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          Premium Boat Tours · Shem Creek, SC
        </motion.div>

        {/* Divider */}
        <motion.div
          style={{ height: "1px", background: "rgba(212,168,67,0.4)", marginTop: "2rem", marginBottom: "2rem" }}
          initial={{ width: 0, opacity: 0 }}
          animate={phase >= 3 ? { width: "30vw", opacity: 1 } : { width: 0, opacity: 0 }}
          transition={{ duration: 0.8 }}
        />

        {/* Contact info */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 15 }}
          animate={phase >= 4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.7 }}
        >
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1.6rem, 3vw, 2.5rem)",
            fontWeight: 600,
            color: "#F5EED7",
          }}>(843) 508-1600</div>
          <div style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "clamp(0.7rem, 1.1vw, 0.85rem)",
            color: "rgba(245,238,215,0.6)",
            marginTop: "0.25rem",
          }}>lowcountrycoastalexcursions.com</div>
        </motion.div>

        {/* Instagram handle */}
        <motion.div
          className="mt-4"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "clamp(0.65rem, 1vw, 0.8rem)",
            color: "rgba(212,168,67,0.75)",
            letterSpacing: "0.1em",
          }}
          initial={{ opacity: 0 }}
          animate={phase >= 5 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          @lowcountry_coastal_excursions
        </motion.div>
      </div>
    </motion.div>
  );
}
