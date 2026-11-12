import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

// Counts the numeric part of a value like "3.5+", "~100", "250/mo" or "100K+" up from 0
// the first time it scrolls into view. Prefix/suffix stay fixed; reduced-motion users see the final value.
const parse = (value) => {
  const m = String(value).match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
  if (!m) return null;
  const decimals = m[2].includes(".") ? m[2].split(".")[1].length : 0;
  return { prefix: m[1], target: parseFloat(m[2]), suffix: m[3], decimals };
};

const CountUp = ({ value, duration = 1.4 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const parsed = parse(value);
  const [n, setN] = useState(parsed && !reduce ? 0 : parsed?.target);

  useEffect(() => {
    if (!parsed || reduce || !inView) return;
    const controls = animate(0, parsed.target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: setN,
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduce, value]);

  if (!parsed) return <span>{value}</span>;

  return (
    <span ref={ref} aria-label={value}>
      <span aria-hidden="true">
        {parsed.prefix}
        {n.toFixed(parsed.decimals)}
        {parsed.suffix}
      </span>
    </span>
  );
};

export default CountUp;
