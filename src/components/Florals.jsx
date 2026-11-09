import { useEffect, useRef, useId } from "react";
import { motion, useReducedMotion } from "motion/react";

export function CornerMandala({ className = "" }) {
  const reduce = useReducedMotion();

  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="20" cy="20" r="14" className="fill-gold/30" />
      <motion.path
        d="M20 20 C60 20 90 40 110 70 C130 100 150 140 180 180"
        className="stroke-gold"
        strokeWidth="1.5"
        initial={{ pathLength: reduce ? 1 : 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.2, ease: "easeInOut" }}
      />
      <motion.path
        d="M20 48 C55 48 88 72 108 102"
        className="stroke-gold/60"
        strokeWidth="1.2"
        initial={{ pathLength: reduce ? 1 : 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.4, delay: 0.15, ease: "easeInOut" }}
      />
      <motion.path
        d="M48 20 C48 55 72 88 102 108"
        className="stroke-gold/60"
        strokeWidth="1.2"
        initial={{ pathLength: reduce ? 1 : 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.4, delay: 0.2, ease: "easeInOut" }}
      />
      <motion.circle
        cx="110"
        cy="70"
        r="18"
        className="stroke-gold"
        strokeWidth="1.1"
        initial={{ pathLength: reduce ? 1 : 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.8, delay: 0.4 }}
      />
      <motion.path
        d="M110 52 C118 62 118 78 110 88 C102 78 102 62 110 52 Z"
        className="stroke-gold/80"
        strokeWidth="1.1"
        initial={{ pathLength: reduce ? 1 : 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.6, delay: 0.55 }}
      />
      <motion.path
        d="M92 70 C102 62 118 62 128 70 C118 78 102 78 92 70 Z"
        className="stroke-gold"
        strokeWidth="1.1"
        initial={{ pathLength: reduce ? 1 : 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.6, delay: 0.65 }}
      />
      <circle cx="110" cy="70" r="4" className="fill-gold" />
    </svg>
  );
}

// Blooms positioned mathematically on the wavy draped line
const BLOOM_DATA = [
  { x: 45, baseY: 34.6 },
  { x: 105, baseY: 33.6 },
  { x: 165, baseY: 27.8 },
  { x: 230, baseY: 24.6 },
  { x: 295, baseY: 28.3 },
  { x: 355, baseY: 36.9 },
  { x: 420, baseY: 39.9 },
  { x: 480, baseY: 36.7 },
  { x: 545, baseY: 31.2 },
  { x: 600, baseY: 31.2 },
];

/**
 * Interactive Marigold Garland with wavy draped pattern and tingling plucked-string physics
 */
export function MarigoldGarland({ className = "" }) {
  const rawId = useId();
  const filterId = `garland_glow_${rawId.replace(/[^a-zA-Z0-9]/g, "")}`;
  const containerRef = useRef(null);
  const pathRef = useRef(null);
  const bloomRefs = useRef([]);
  const progressRef = useRef(0);
  const xRef = useRef(0.5);
  const timeRef = useRef(Math.PI / 2);
  const reqIdRef = useRef(null);
  const lastYRef = useRef(0);

  const lerp = (a, b, t) => a * (1 - t) + b * t;

  const updatePositions = (prog, xPos) => {
    const clampedProg = Math.max(-40, Math.min(40, prog));

    // Dynamic deflection across the wavy curve
    const getDeflection = (xCoord) => {
      const t = xCoord / 640;
      const baseWeight = Math.sin(Math.PI * t);
      const localFactor = 1 - 0.45 * Math.abs(t - xPos);
      return clampedProg * baseWeight * Math.max(0.2, localFactor);
    };

    const dyC1 = getDeflection(90);
    const dyC2 = getDeflection(180);
    const dyMid = getDeflection(320);
    const dyC3 = getDeflection(460);
    const dyC4 = getDeflection(540);

    // Update String Path following the graceful wavy pattern
    if (pathRef.current) {
      pathRef.current.setAttribute(
        "d",
        `M 8 28 C 90 ${52 + dyC1}, 180 ${8 + dyC2}, 320 ${32 + dyMid} C 460 ${56 + dyC3}, 540 ${16 + dyC4}, 632 36`
      );
    }

    // Update Blooms along the deflected wavy string
    BLOOM_DATA.forEach((b, i) => {
      const el = bloomRefs.current[i];
      if (!el) return;
      const dy = getDeflection(b.x);
      el.setAttribute("transform", `translate(${b.x} ${b.baseY + dy})`);
    });
  };

  const resetAnimation = () => {
    timeRef.current = Math.PI / 2;
    progressRef.current = 0;
  };

  const animateOut = () => {
    const newProgress = progressRef.current * Math.sin(timeRef.current);
    progressRef.current = lerp(progressRef.current, 0, 0.045);
    timeRef.current += 0.28;
    updatePositions(newProgress, xRef.current);

    if (Math.abs(progressRef.current) > 0.3) {
      reqIdRef.current = requestAnimationFrame(animateOut);
    } else {
      resetAnimation();
      updatePositions(0, 0.5);
    }
  };

  useEffect(() => {
    updatePositions(0, 0.5);
    return () => {
      if (reqIdRef.current) cancelAnimationFrame(reqIdRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (reqIdRef.current) {
      cancelAnimationFrame(reqIdRef.current);
      resetAnimation();
    }
  };

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    xRef.current = Math.max(0.05, Math.min(0.95, (e.clientX - rect.left) / rect.width));
    progressRef.current = Math.max(-40, Math.min(40, progressRef.current + e.movementY * 1.25));
    updatePositions(progressRef.current, xRef.current);
  };

  const handleMouseLeave = () => {
    animateOut();
  };

  const handleTouchStart = (e) => {
    if (reqIdRef.current) {
      cancelAnimationFrame(reqIdRef.current);
      resetAnimation();
    }
    if (e.touches && e.touches[0]) {
      lastYRef.current = e.touches[0].clientY;
    }
  };

  const handleTouchMove = (e) => {
    if (!containerRef.current || !e.touches || !e.touches[0]) return;
    const touch = e.touches[0];
    const rect = containerRef.current.getBoundingClientRect();
    xRef.current = Math.max(0.05, Math.min(0.95, (touch.clientX - rect.left) / rect.width));
    const dy = touch.clientY - lastYRef.current;
    lastYRef.current = touch.clientY;
    progressRef.current = Math.max(-40, Math.min(40, progressRef.current + dy * 1.5));
    updatePositions(progressRef.current, xRef.current);
  };

  const handleTouchEnd = () => {
    animateOut();
  };

  return (
    <div
      ref={containerRef}
      className={`relative select-none touch-none cursor-grab active:cursor-grabbing ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 640 76"
        fill="none"
        className="w-full h-auto overflow-visible pointer-events-none"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <filter id={filterId} x="-20%" y="-100%" width="140%" height="300%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Wavy Draped String Line with Tingling Plucked Animation */}
        <path
          ref={pathRef}
          d="M 8 28 C 90 52, 180 8, 320 32 C 460 56, 540 16, 632 36"
          stroke="#d4af37"
          strokeWidth="1.6"
          filter={`url(#${filterId})`}
          className="stroke-gold/85 transition-opacity"
        />

        {/* Marigold Blooms positioned along the wavy draped curve */}
        {BLOOM_DATA.map((b, i) => (
          <g
            key={b.x}
            ref={(el) => (bloomRefs.current[i] = el)}
            transform={`translate(${b.x} ${b.baseY})`}
          >
            <circle r="11" fill="#9b1d2a" />
            <circle r="5" fill="#d4af37" />
            <circle cx="-7" cy="-6" r="6" fill="#4a0e1c" fillOpacity="0.85" />
            <circle cx="8" cy="-4" r="6" fill="#c9a227" fillOpacity="0.9" />
          </g>
        ))}
      </svg>
    </div>
  );
}

const PETALS = [
  { left: "5%", delay: "0s", dur: "14s", drift: "20px", size: 16, color: "fill-amber-300/40" },
  { left: "14%", delay: "2.5s", dur: "17s", drift: "-24px", size: 14, color: "fill-rose-300/35" },
  { left: "24%", delay: "1.2s", dur: "15s", drift: "26px", size: 19, color: "fill-amber-400/45" },
  { left: "35%", delay: "4.5s", dur: "19s", drift: "-18px", size: 15, color: "fill-gold/45" },
  { left: "46%", delay: "2.1s", dur: "16s", drift: "22px", size: 20, color: "fill-rose-200/40" },
  { left: "56%", delay: "6.0s", dur: "18s", drift: "-25px", size: 14, color: "fill-amber-300/50" },
  { left: "67%", delay: "0.8s", dur: "13s", drift: "16px", size: 18, color: "fill-gold/40" },
  { left: "76%", delay: "3.7s", dur: "20s", drift: "-14px", size: 16, color: "fill-rose-300/40" },
  { left: "86%", delay: "5.2s", dur: "15s", drift: "24px", size: 19, color: "fill-amber-300/45" },
  { left: "94%", delay: "7.1s", dur: "18s", drift: "-20px", size: 13, color: "fill-gold/50" },
  { left: "10%", delay: "8.2s", dur: "21s", drift: "18px", size: 15, color: "fill-amber-400/35" },
  { left: "40%", delay: "9.5s", dur: "17s", drift: "-16px", size: 18, color: "fill-rose-200/35" },
  { left: "60%", delay: "10.4s", dur: "16s", drift: "20px", size: 16, color: "fill-gold/45" },
  { left: "82%", delay: "11.8s", dur: "19s", drift: "-22px", size: 17, color: "fill-amber-300/40" },
];

/**
 * Falling petals animation fixed across the viewport throughout the entire website
 */
export function FallingPetals() {
  return (
    <div
      className="falling-petals pointer-events-none fixed inset-0 z-30 overflow-hidden"
      aria-hidden="true"
    >
      {PETALS.map((petal, index) => (
        <span
          key={index}
          className="petal absolute top-[-10%] block"
          style={{
            left: petal.left,
            "--delay": petal.delay,
            "--dur": petal.dur,
            "--drift": petal.drift,
          }}
        >
          <svg
            width={petal.size}
            height={petal.size * 1.25}
            viewBox="0 0 18 22"
            className={`${petal.color} filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]`}
          >
            <ellipse cx="9" cy="11" rx="6" ry="10" />
          </svg>
        </span>
      ))}
    </div>
  );
}
