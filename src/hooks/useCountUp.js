import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

/**
 * Animates a number from 0 to `end` when the returned ref enters the viewport.
 * Returns [ref, displayValue] where displayValue is a formatted string.
 */
export default function useCountUp(end, { duration = 1.6, decimals = 0, prefix = "", suffix = "" } = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, end, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(v),
    });
    return () => controls.stop();
  }, [isInView, end, duration]);

  const formatted =
    prefix +
    value.toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }) +
    suffix;

  return [ref, formatted];
}
