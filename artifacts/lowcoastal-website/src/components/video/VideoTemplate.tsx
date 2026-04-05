import { motion, AnimatePresence } from "framer-motion";
import { useVideoPlayer } from "@/lib/video";
import { Scene1 } from "./video_scenes/Scene1";
import { Scene2 } from "./video_scenes/Scene2";
import { Scene3 } from "./video_scenes/Scene3";
import { Scene4 } from "./video_scenes/Scene4";
import { Scene5 } from "./video_scenes/Scene5";
import { Scene6 } from "./video_scenes/Scene6";
import { Scene7 } from "./video_scenes/Scene7";
import { Scene8 } from "./video_scenes/Scene8";
import { Scene9 } from "./video_scenes/Scene9";
import { Scene10 } from "./video_scenes/Scene10";

const SCENE_DURATIONS = {
  aerialOpener: 5500,
  bridgePassage: 5000,
  openWater: 5000,
  dolphinEncounter: 5500,
  familyJoy: 5000,
  sharkToothHunt: 5500,
  bacheloretteBash: 5000,
  goldenHour: 5500,
  fishingCharter: 5000,
  brandReveal: 7000,
};

const persistentBlobPositions = [
  { x: "20vw", y: "20vh", scale: 1.8, opacity: 0.4 },
  { x: "70vw", y: "60vh", scale: 1.2, opacity: 0.3 },
  { x: "45vw", y: "70vh", scale: 2.0, opacity: 0.35 },
  { x: "10vw", y: "50vh", scale: 1.0, opacity: 0.5 },
  { x: "80vw", y: "20vh", scale: 1.5, opacity: 0.3 },
  { x: "30vw", y: "40vh", scale: 0.9, opacity: 0.4 },
  { x: "60vw", y: "30vh", scale: 1.6, opacity: 0.25 },
  { x: "15vw", y: "75vh", scale: 1.3, opacity: 0.45 },
  { x: "55vw", y: "15vh", scale: 1.0, opacity: 0.3 },
  { x: "85vw", y: "50vh", scale: 1.8, opacity: 0.35 },
];

const accentLinePositions = {
  left: ["5%", "60%", "10%", "55%", "5%", "65%", "8%", "50%", "12%", "30%"],
  width: ["35%", "25%", "45%", "30%", "40%", "20%", "35%", "28%", "42%", "15%"],
  top: ["15%", "85%", "50%", "20%", "70%", "35%", "88%", "55%", "25%", "60%"],
  opacity: [0.6, 0.4, 0.7, 0.5, 0.6, 0.4, 0.5, 0.7, 0.6, 0.3],
};

export default function VideoTemplate() {
  const { currentScene } = useVideoPlayer({ durations: SCENE_DURATIONS });
  const pos = persistentBlobPositions[currentScene] ?? persistentBlobPositions[0];

  return (
    <div
      className="relative overflow-hidden bg-black"
      style={{ width: "100vw", height: "100vh" }}
    >
      {/* Persistent glow blob — transforms across scenes */}
      <motion.div
        className="absolute rounded-full pointer-events-none blur-3xl"
        style={{ width: "30vw", height: "30vw", background: "radial-gradient(circle, rgba(232,124,62,0.25) 0%, transparent 70%)" }}
        animate={{ x: pos.x, y: pos.y, scale: pos.scale, opacity: pos.opacity }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Persistent teal accent blob */}
      <motion.div
        className="absolute rounded-full pointer-events-none blur-3xl"
        style={{ width: "20vw", height: "20vw", background: "radial-gradient(circle, rgba(42,125,140,0.3) 0%, transparent 70%)" }}
        animate={{
          x: persistentBlobPositions[(currentScene + 3) % 10].x,
          y: persistentBlobPositions[(currentScene + 3) % 10].y,
          scale: persistentBlobPositions[(currentScene + 3) % 10].scale,
        }}
        transition={{ duration: 2.0, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Persistent accent line — repositions across scenes */}
      <motion.div
        className="absolute pointer-events-none"
        style={{ height: "2px", background: "linear-gradient(90deg, transparent, rgba(212,168,67,0.5), transparent)" }}
        animate={{
          left: accentLinePositions.left[currentScene],
          width: accentLinePositions.width[currentScene],
          top: accentLinePositions.top[currentScene],
          opacity: accentLinePositions.opacity[currentScene],
        }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Persistent corner brand mark — top right, fades per scene */}
      <motion.div
        className="absolute top-6 right-6 z-50 pointer-events-none"
        animate={{ opacity: currentScene === 9 ? 0 : 0.6 }}
        transition={{ duration: 0.5 }}
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: "clamp(0.55rem, 0.8vw, 0.7rem)",
          color: "rgba(212,168,67,0.8)",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
        }}
      >
        LowCountry Coastal Excursions
      </motion.div>

      {/* Scene indicator dots — bottom center */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-50 pointer-events-none">
        {Object.keys(SCENE_DURATIONS).map((_, i) => (
          <motion.div
            key={i}
            className="rounded-full"
            animate={{
              width: i === currentScene ? "1.5rem" : "0.4rem",
              background: i === currentScene ? "rgba(212,168,67,0.9)" : "rgba(245,238,215,0.3)",
            }}
            style={{ height: "0.35rem" }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>

      {/* Scene content */}
      <AnimatePresence mode="popLayout">
        {currentScene === 0 && <Scene1 key="aerialOpener" />}
        {currentScene === 1 && <Scene2 key="bridgePassage" />}
        {currentScene === 2 && <Scene3 key="openWater" />}
        {currentScene === 3 && <Scene4 key="dolphinEncounter" />}
        {currentScene === 4 && <Scene5 key="familyJoy" />}
        {currentScene === 5 && <Scene6 key="sharkToothHunt" />}
        {currentScene === 6 && <Scene7 key="bacheloretteBash" />}
        {currentScene === 7 && <Scene8 key="goldenHour" />}
        {currentScene === 8 && <Scene9 key="fishingCharter" />}
        {currentScene === 9 && <Scene10 key="brandReveal" />}
      </AnimatePresence>
    </div>
  );
}
