import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Scene9() {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const t = [
      setTimeout(() => setPhase(1), 200),
      setTimeout(() => setPhase(2), 900),
      setTimeout(() => setPhase(3), 1700),
      setTimeout(() => setPhase(4), 2800),
    ];
    return () => t.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Fishing scene */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(180deg, #0B2A4A 0%, #0E4060 30%, #1A6B5A 60%, #0B3A30 100%)"
      }} />

      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={phase >= 1 ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 0 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src="/images/fishing.png"
          alt="Inshore fishing charter from Shem Creek, Mt. Pleasant SC"
          className="w-full h-full object-cover"
          style={{ opacity: 0.9 }}
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(90deg, rgba(11,31,62,0.8) 0%, rgba(11,31,62,0.2) 50%, transparent 100%)"
      }} />

      {/* Water ripple animation */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-teal-400/20"
          style={{ left: "70%", top: "65%" }}
          initial={{ width: 0, height: 0, x: "-50%", y: "-50%", opacity: 0 }}
          animate={{ width: "15vw", height: "7vw", x: "-50%", y: "-50%", opacity: [0, 0.4, 0] }}
          transition={{ duration: 2.5, delay: i * 0.9, repeat: Infinity, ease: "easeOut" }}
        />
      ))}

      <div className="absolute inset-0 flex flex-col justify-center pl-[7%] z-10" style={{ maxWidth: "50%" }}>
        <motion.div
          className="text-xs tracking-[0.3em] uppercase font-bold mb-5"
          style={{ color: "rgba(42,212,140,0.85)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          initial={{ opacity: 0, x: -20 }}
          animate={phase >= 1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.6 }}
        >
          Inshore Fishing Charters
        </motion.div>

        <motion.div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.5rem, 5.5vw, 5rem)",
            fontWeight: 700,
            color: "#F5EED7",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
          initial={{ opacity: 0, y: 35 }}
          animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          Cast Into the<br />
          <span style={{ color: "#E87C3E", fontStyle: "italic" }}>Lowcountry Wild</span>
        </motion.div>

        <motion.p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "clamp(0.82rem, 1.3vw, 0.95rem)",
            color: "rgba(245,238,215,0.7)",
            marginTop: "1.5rem",
          }}
          initial={{ opacity: 0 }}
          animate={phase >= 3 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          Redfish, flounder, trout, and more.<br />
          Half-day from $350 · Full-day from $575<br />
          All tackle & bait included.
        </motion.p>

        <motion.div
          className="flex gap-4 mt-6"
          initial={{ opacity: 0, y: 12 }}
          animate={phase >= 4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.6 }}
        >
          {["Redfish", "Flounder", "Speckled Trout"].map((f, i) => (
            <div key={i} style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(0.65rem, 0.9vw, 0.75rem)",
              color: "#F5EED7",
              background: "rgba(14,64,96,0.6)",
              border: "1px solid rgba(42,212,140,0.3)",
              backdropFilter: "blur(8px)",
              padding: "0.3rem 0.8rem",
              borderRadius: "99px",
            }}>{f}</div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
