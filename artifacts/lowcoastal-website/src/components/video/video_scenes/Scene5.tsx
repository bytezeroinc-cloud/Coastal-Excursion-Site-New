import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Scene5() {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const t = [
      setTimeout(() => setPhase(1), 200),
      setTimeout(() => setPhase(2), 900),
      setTimeout(() => setPhase(3), 1700),
    ];
    return () => t.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden"
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Warm daylight background */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(180deg, #2A6B8A 0%, #4A9BB5 25%, #6AB5C8 50%, #3A7A9A 80%, #1A4A6B 100%)"
      }} />

      {/* Family boat image */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={phase >= 1 ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 0 }}
        transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src="/images/family-boat.png"
          alt="Happy family enjoying boat tour on Shem Creek"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Warm overlay */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(135deg, rgba(232,124,62,0.15) 0%, transparent 60%, rgba(11,31,62,0.6) 100%)"
      }} />

      {/* Text overlay — top right */}
      <div className="absolute top-[12%] right-[6%] flex flex-col items-end z-10" style={{ maxWidth: "45vw" }}>
        <motion.div
          className="text-xs tracking-[0.3em] uppercase font-bold mb-4 text-right"
          style={{ color: "rgba(212,168,67,0.9)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          initial={{ opacity: 0, x: 20 }}
          animate={phase >= 1 ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.6 }}
        >
          Family Adventures
        </motion.div>

        <motion.div
          className="text-right"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
            fontWeight: 700,
            color: "#F5EED7",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
          initial={{ opacity: 0, x: 40 }}
          animate={phase >= 2 ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          Memories Made<br />
          <span style={{ color: "#E87C3E", fontStyle: "italic" }}>Out Here</span>
        </motion.div>

        <motion.p
          className="text-right mt-4"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "clamp(0.8rem, 1.3vw, 0.95rem)",
            color: "rgba(245,238,215,0.7)",
          }}
          initial={{ opacity: 0 }}
          animate={phase >= 3 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          Kids under 5 ride free.<br />Captain Brian and crew make every guest<br />feel like family on the water.
        </motion.p>
      </div>

      {/* Bottom stats bar */}
      <motion.div
        className="absolute bottom-[8%] left-0 right-0 flex justify-center gap-12 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={phase >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7 }}
      >
        {[
          { n: "4.9★", label: "Google Rating" },
          { n: "500+", label: "Families Served" },
          { n: "Kids Free", label: "Under 5 Years Old" },
        ].map((s, i) => (
          <div key={i} className="text-center">
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.3rem, 2.5vw, 2rem)",
              fontWeight: 700,
              color: "#D4A843",
            }}>{s.n}</div>
            <div style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(0.6rem, 0.9vw, 0.75rem)",
              color: "rgba(245,238,215,0.6)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}>{s.label}</div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
