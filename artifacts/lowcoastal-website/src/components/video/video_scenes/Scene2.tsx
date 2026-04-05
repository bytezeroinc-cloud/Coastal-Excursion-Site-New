import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Scene2() {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const t = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 1000),
      setTimeout(() => setPhase(3), 2000),
    ];
    return () => t.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden"
      initial={{ opacity: 0, x: "5%" }}
      animate={{ opacity: 1, x: "0%" }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Deep ocean background */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(160deg, #061830 0%, #0B2A4A 35%, #14466B 60%, #0B3A5C 100%)"
      }} />

      {/* Bridge silhouette — using CSS to create a bridge-like shape */}
      <motion.div
        className="absolute bottom-0 left-0 right-0"
        style={{ height: "60%", pointerEvents: "none" }}
        initial={{ opacity: 0, y: 30 }}
        animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 1.2 }}
      >
        {/* Bridge cables - CSS */}
        {[...Array(12)].map((_, i) => (
          <div key={i} className="absolute bottom-[30%]" style={{
            left: `${20 + i * 5}%`,
            width: "1px",
            height: `${20 + Math.sin(i * 0.5) * 10}%`,
            background: "rgba(212,168,67,0.25)",
            transformOrigin: "bottom center",
            transform: `rotate(${(i - 6) * 2}deg)`,
          }} />
        ))}
        {/* Bridge deck */}
        <div className="absolute bottom-[28%] left-0 right-0" style={{
          height: "3px",
          background: "linear-gradient(90deg, transparent, rgba(212,168,67,0.4) 20%, rgba(212,168,67,0.6) 50%, rgba(212,168,67,0.4) 80%, transparent)",
        }} />
        {/* Bridge towers */}
        {[35, 65].map((pos, i) => (
          <div key={i} className="absolute bottom-[28%]" style={{
            left: `${pos}%`,
            width: "4px",
            height: "50%",
            background: "rgba(212,168,67,0.35)",
          }} />
        ))}
      </motion.div>

      {/* Water reflection */}
      <motion.div
        className="absolute bottom-0 left-0 right-0"
        style={{ height: "28%", background: "linear-gradient(180deg, rgba(42,141,160,0.2) 0%, rgba(11,31,62,0.8) 100%)" }}
        animate={{ opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Atmospheric glow at bridge */}
      <motion.div
        className="absolute rounded-full blur-3xl"
        style={{
          width: "60%", height: "30%",
          left: "20%", top: "30%",
          background: "radial-gradient(ellipse, rgba(212,168,67,0.12) 0%, transparent 70%)"
        }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* City lights along bottom */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
            left: `${Math.random() * 100}%`,
            bottom: `${5 + Math.random() * 20}%`,
            background: i % 3 === 0 ? "rgba(212,168,67,0.8)" : "rgba(255,255,255,0.5)",
          }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
        />
      ))}

      {/* Foreground text — left-aligned */}
      <div className="absolute inset-0 flex flex-col justify-center pl-[8%] z-10">
        <motion.div
          className="text-xs tracking-[0.3em] uppercase font-bold mb-4"
          style={{ color: "rgba(212,168,67,0.8)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          initial={{ opacity: 0, x: -30 }}
          animate={phase >= 1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6 }}
        >
          Arthur Ravenel Jr. Bridge · Charleston, SC
        </motion.div>

        <motion.div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
            fontWeight: 700,
            color: "#F5EED7",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Cruise Under<br />
          <span style={{ color: "#E87C3E" }}>Charleston's</span><br />
          Iconic Bridge
        </motion.div>

        <motion.p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "clamp(0.85rem, 1.5vw, 1.1rem)",
            color: "rgba(245,238,215,0.65)",
            marginTop: "1.5rem",
            maxWidth: "40vw",
          }}
          initial={{ opacity: 0 }}
          animate={phase >= 3 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          Every tour offers stunning views of Charleston Harbor,<br />the Ravenel Bridge, and miles of pristine SC coastline.
        </motion.p>
      </div>
    </motion.div>
  );
}
