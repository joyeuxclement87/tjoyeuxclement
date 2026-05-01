'use client';

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "motion/react";

interface CounterProps {
  value: number;
  delay?: number;
  padZero?: boolean;
}

export default function Counter({ value, delay = 0, padZero = false }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        motionValue.set(value);
      }, delay * 1000);
      return () => clearTimeout(timeout);
    }
  }, [motionValue, isInView, delay, value]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        const rounded = Math.round(latest);
        ref.current.textContent = padZero && rounded < 10 
          ? `0${rounded}` 
          : Intl.NumberFormat("en-US").format(rounded);
      }
    });
  }, [springValue, padZero]);

  return <span ref={ref}>{padZero ? "00" : "0"}</span>;
}
