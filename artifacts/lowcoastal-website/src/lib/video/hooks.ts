import { useEffect, useRef, useState } from "react";

type SceneDurations = Record<string, number>;

export function useVideoPlayer({ durations }: { durations: SceneDurations }) {
  const keys = Object.keys(durations);
  const [currentScene, setCurrentScene] = useState(0);
  const passedRef = useRef(false);

  useEffect(() => {
    (window as any).startRecording?.();

    let idx = 0;
    let totalMs = 0;

    const timers: ReturnType<typeof setTimeout>[] = [];

    const schedule = (startIdx: number) => {
      let offset = 0;
      for (let i = startIdx; i < keys.length; i++) {
        const dur = durations[keys[i]];
        const captured = i;
        const t = setTimeout(() => {
          if (captured + 1 < keys.length) {
            setCurrentScene(captured + 1);
          } else {
            if (!passedRef.current) {
              passedRef.current = true;
              (window as any).stopRecording?.();
            }
            setCurrentScene(0);
          }
        }, offset + dur);
        timers.push(t);
        offset += dur;
      }
    };

    schedule(0);

    return () => timers.forEach(clearTimeout);
  }, []);

  return { currentScene };
}
