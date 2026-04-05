import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Scene1() {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const t = [
      setTimeout(() => setPhase(1), 200),
      setTimeout(() => setPhase(2), 900),
      setTimeout(() => setPhase(3), 1800),
      setTimeout(() => setPhase(4), 4000),
    ];
    return () => t.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden"
      initial={{ clipPath: "circle(0% at 50% 50%)" }}
      animate={{ clipPath: "circle(150% at 50% 50%)" }}
      exit={{ opacity: 0, scale: 1.08 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Background — aerial water and sky */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(180deg, #0B2A4A 0%, #1A5C7A 30%, #2A8DA0 55%, #1A4A6B 80%, #0B1F3E 100%)"
      }} />

      {/* Animated water shimmer */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{ background: "repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(212,168,67,0.15) 80px, rgba(212,168,67,0.15) 82px)" }}
        animate={{ backgroundPositionX: ["0px", "160px"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />

      {/* Boat image — hero */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={phase >= 1 ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 0 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src="/images/hero-boat.png"
          alt="Roamer IV departing Shem Creek"
          className="w-full h-full object-cover"
          style={{ mixBlendMode: "luminosity", opacity: 0.75 }}
        />
      </motion.div>

      {/* Warm golden overlay */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(180deg, rgba(11,31,62,0.6) 0%, rgba(11,31,62,0.1) 40%, rgba(11,31,62,0.5) 100%)"
      }} />

      {/* Golden sun halo */}
      <motion.div
        className="absolute top-[15%] left-1/2 -translate-x-1/2 rounded-full blur-3xl"
        style={{ width: "40vw", height: "25vw", background: "radial-gradient(circle, rgba(212,168,67,0.35) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Foreground text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-8">
        {/* Location tag */}
        <motion.div
          className="text-xs tracking-[0.3em] uppercase font-bold mb-6"
          style={{ color: "rgba(212,168,67,0.9)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Shem Creek · Mt. Pleasant · South Carolina
        </motion.div>

        {/* Main headline */}
        <div style={{ perspective: "800px" }}>
          {"YOUR ADVENTURE".split("").map((char, i) => (
            <motion.span
              key={i}
              style={{
                display: "inline-block",
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(3rem, 8vw, 7rem)",
                fontWeight: 700,
                color: "#F5EED7",
                letterSpacing: "-0.02em",
                lineHeight: 1,
              }}
              initial={{ opacity: 0, y: 60, rotateX: -50 }}
              animate={phase >= 2
                ? { opacity: 1, y: 0, rotateX: 0 }
                : { opacity: 0, y: 60, rotateX: -50 }}
              transition={{ type: "spring", stiffness: 380, damping: 28, delay: phase >= 2 ? i * 0.035 : 0 }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </div>

        {/* Sub-headline */}
        <motion.div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1.8rem, 4vw, 3.5rem)",
            fontWeight: 400,
            color: "#E87C3E",
            fontStyle: "italic",
            letterSpacing: "0.02em",
          }}
          initial={{ opacity: 0, filter: "blur(12px)" }}
          animate={phase >= 3 ? { opacity: 1, filter: "blur(0px)" } : { opacity: 0, filter: "blur(12px)" }}
          transition={{ duration: 0.9 }}
        >
          Awaits on the Water
        </motion.div>

        {/* Divider line */}
        <motion.div
          className="mt-6"
          style={{ height: "1px", background: "rgba(212,168,67,0.6)" }}
          initial={{ width: "0%", opacity: 0 }}
          animate={phase >= 3 ? { width: "20vw", opacity: 1 } : { width: "0%", opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        />
      </div>
    </motion.div>
  );
}
