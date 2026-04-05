import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Scene6() {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const t = [
      setTimeout(() => setPhase(1), 100),
      setTimeout(() => setPhase(2), 700),
      setTimeout(() => setPhase(3), 1500),
      setTimeout(() => setPhase(4), 2500),
    ];
    return () => t.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: "5%" }}
      transition={{ duration: 0.8 }}
    >
      {/* Sandy beach background */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(180deg, #87CEEB 0%, #B8E4F2 20%, #D4A843 50%, #C4904A 75%, #8B6914 100%)"
      }} />

      {/* Teeth close-up image — left side */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-1/2"
        initial={{ x: "-10%", opacity: 0 }}
        animate={phase >= 1 ? { x: "0%", opacity: 1 } : { x: "-10%", opacity: 0 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src="/images/teeth-close.png"
          alt="Fossilized shark teeth found on South Carolina barrier island beach"
          className="w-full h-full object-cover"
          style={{ opacity: 0.95 }}
        />
      </motion.div>

      {/* Couple beach image — right side */}
      <motion.div
        className="absolute right-0 top-0 bottom-0 w-1/2"
        initial={{ x: "10%", opacity: 0 }}
        animate={phase >= 1 ? { x: "0%", opacity: 1 } : { x: "10%", opacity: 0 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src="/images/couple-beach.png"
          alt="Guests finding shark teeth on a South Carolina beach"
          className="w-full h-full object-cover"
          style={{ opacity: 0.9 }}
        />
      </motion.div>

      {/* Center split vignette */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(90deg, rgba(11,31,62,0.35) 0%, rgba(11,31,62,0.0) 30%, rgba(11,31,62,0.0) 70%, rgba(11,31,62,0.35) 100%)"
      }} />
      <div className="absolute inset-0" style={{
        background: "linear-gradient(180deg, rgba(11,31,62,0.5) 0%, transparent 30%, transparent 70%, rgba(11,31,62,0.6) 100%)"
      }} />

      {/* Center divider + text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        {/* Animated divider line */}
        <motion.div
          style={{ height: "2px", background: "rgba(212,168,67,0.8)" }}
          initial={{ width: 0 }}
          animate={phase >= 2 ? { width: "clamp(60px, 8vw, 100px)" } : { width: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />

        <motion.div
          className="text-center mt-4 mb-4 px-6"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 4.5vw, 4rem)",
            fontWeight: 700,
            color: "#F5EED7",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            textShadow: "0 2px 20px rgba(11,31,62,0.8)",
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={phase >= 2 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Find a Piece of<br />
          <span style={{ color: "#D4A843" }}>Prehistoric History</span>
        </motion.div>

        <motion.div
          style={{ height: "2px", background: "rgba(212,168,67,0.8)" }}
          initial={{ width: 0 }}
          animate={phase >= 2 ? { width: "clamp(60px, 8vw, 100px)" } : { width: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        />

        <motion.p
          className="text-center mt-5 px-8"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "clamp(0.8rem, 1.4vw, 1rem)",
            color: "rgba(245,238,215,0.8)",
            textShadow: "0 1px 8px rgba(0,0,0,0.5)",
          }}
          initial={{ opacity: 0 }}
          animate={phase >= 3 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          SC barrier island beaches are covered in fossilized shark teeth.<br />
          Kids (and adults) can't stop smiling when they find their first Megalodon.
        </motion.p>

        {/* Excitement badges */}
        <motion.div
          className="flex gap-3 mt-6"
          initial={{ opacity: 0, y: 10 }}
          animate={phase >= 4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6 }}
        >
          {["Megalodon Fragments", "Kids Love It", "Keep What You Find"].map((s, i) => (
            <div key={i} style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(0.6rem, 0.9vw, 0.75rem)",
              color: "#F5EED7",
              background: "rgba(11,31,62,0.6)",
              border: "1px solid rgba(212,168,67,0.5)",
              backdropFilter: "blur(8px)",
              padding: "0.3rem 0.8rem",
              borderRadius: "99px",
            }}>{s}</div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
