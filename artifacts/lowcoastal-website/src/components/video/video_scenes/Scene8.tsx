import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Scene8() {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const t = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 1100),
      setTimeout(() => setPhase(3), 2200),
    ];
    return () => t.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 1.0 }}
    >
      {/* Dramatic sunset sky */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(180deg, #0B1F3E 0%, #1A3A6E 15%, #C4306B 35%, #E87C3E 55%, #D4A843 70%, #2A7D8C 85%, #0B1F3E 100%)"
      }} />

      {/* Marsh golden hour image */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08, opacity: 0 }}
        animate={phase >= 1 ? { scale: 1, opacity: 1 } : { scale: 1.08, opacity: 0 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src="/images/marsh-sunrise.png"
          alt="Golden hour sunset over SC Lowcountry coastal marsh"
          className="w-full h-full object-cover"
          style={{ opacity: 0.85 }}
        />
      </motion.div>

      {/* Gradient overlay to deepen drama */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(180deg, rgba(11,31,62,0.65) 0%, rgba(11,31,62,0.0) 45%, rgba(11,31,62,0.75) 100%)"
      }} />

      {/* Sun rays */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute origin-bottom"
          style={{
            bottom: "35%",
            left: "50%",
            width: "2px",
            height: "30vh",
            background: "linear-gradient(180deg, rgba(212,168,67,0.5), transparent)",
            transform: `rotate(${-90 + i * 25}deg)`,
            transformOrigin: "50% 100%",
          }}
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
        />
      ))}

      {/* Boat silhouette at bottom center */}
      <motion.div
        className="absolute bottom-[18%] left-1/2 -translate-x-1/2"
        style={{ opacity: 0.85 }}
        initial={{ opacity: 0, y: 20 }}
        animate={phase >= 2 ? { opacity: 0.85, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src="/images/hero-boat.png"
          alt="Boat silhouette at golden hour"
          style={{ width: "45vw", maxWidth: "500px", objectFit: "contain", opacity: 0.7, mixBlendMode: "luminosity" }}
        />
      </motion.div>

      {/* Text */}
      <div className="absolute inset-x-0 top-[10%] flex flex-col items-center z-10">
        <motion.div
          className="text-xs tracking-[0.3em] uppercase font-bold mb-4"
          style={{ color: "rgba(212,168,67,0.9)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          initial={{ opacity: 0 }}
          animate={phase >= 1 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          Sunset Cruises · Shem Creek
        </motion.div>

        <motion.div
          className="text-center"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.8rem, 7vw, 6.5rem)",
            fontWeight: 700,
            color: "#F5EED7",
            lineHeight: 1,
            letterSpacing: "-0.03em",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          Golden Hour<br />
          <span style={{ color: "#D4A843", fontStyle: "italic" }}>On the Water</span>
        </motion.div>

        <motion.p
          className="text-center mt-5"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
            color: "rgba(245,238,215,0.75)",
          }}
          initial={{ opacity: 0 }}
          animate={phase >= 3 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          Shared sunset cruise — $65/person · Private charter from $375
        </motion.p>
      </div>
    </motion.div>
  );
}
