import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Scene4() {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const t = [
      setTimeout(() => setPhase(1), 150),
      setTimeout(() => setPhase(2), 700),
      setTimeout(() => setPhase(3), 1500),
      setTimeout(() => setPhase(4), 2800),
    ];
    return () => t.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden"
      initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
      animate={{ clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)" }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Ocean background */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(180deg, #0E4F6E 0%, #1A7A90 30%, #2A9DB5 50%, #1A6A85 75%, #0B2A42 100%)"
      }} />

      {/* Dolphin image — full bleed */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={phase >= 1 ? { scale: 1, opacity: 1 } : { scale: 1.2, opacity: 0 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src="/images/dolphins.png"
          alt="Dolphins leaping beside the boat"
          className="w-full h-full object-cover"
          style={{ opacity: 0.9 }}
        />
      </motion.div>

      {/* Teal overlay */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(180deg, rgba(14,79,110,0.5) 0%, rgba(14,79,110,0.0) 50%, rgba(11,31,62,0.7) 100%)"
      }} />

      {/* Animated splash rings */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-white/20"
          style={{ left: `${30 + i * 5}%`, top: `${55 + i * 3}%` }}
          initial={{ width: 0, height: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ width: "20vw", height: "10vw", opacity: [0, 0.5, 0], x: "-50%", y: "-50%" }}
          transition={{ duration: 2, delay: i * 0.7, repeat: Infinity, ease: "easeOut" }}
        />
      ))}

      {/* Text — center */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-[12%] z-10">
        <motion.div
          className="text-xs tracking-[0.3em] uppercase font-bold mb-4"
          style={{ color: "rgba(212,168,67,0.9)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          initial={{ opacity: 0, y: 15 }}
          animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.6 }}
        >
          Dolphin & Wildlife Tours
        </motion.div>

        <motion.div
          className="text-center"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.5rem, 5.5vw, 5rem)",
            fontWeight: 700,
            color: "#F5EED7",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          They Come to You
        </motion.div>

        <motion.p
          className="text-center mt-3"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "clamp(0.85rem, 1.4vw, 1rem)",
            color: "rgba(245,238,215,0.7)",
            maxWidth: "45vw",
          }}
          initial={{ opacity: 0 }}
          animate={phase >= 3 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          Bottlenose dolphins are regular companions on our tours — swimming, leaping, and playing just feet from the boat.
        </motion.p>

        {/* Stat badges */}
        <motion.div
          className="flex gap-4 mt-5"
          initial={{ opacity: 0, y: 15 }}
          animate={phase >= 4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.6 }}
        >
          {["100% Encounter Rate", "USCG Certified", "Eco-Friendly"].map((s, i) => (
            <div key={i} style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(0.65rem, 1vw, 0.8rem)",
              color: "#F5EED7",
              background: "rgba(42,141,160,0.35)",
              border: "1px solid rgba(212,168,67,0.3)",
              backdropFilter: "blur(8px)",
              padding: "0.35rem 0.9rem",
              borderRadius: "99px",
            }}>{s}</div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
