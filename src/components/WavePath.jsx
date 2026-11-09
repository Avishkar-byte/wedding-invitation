import { useEffect, useRef, useId } from "react";
import { cn } from "../lib/utils";

export function WavePath({ className = "", strokeColor = "#d4af37" }) {
  const filterId = useId().replace(/:/g, "_");
  const pathRef = useRef(null);
  const containerRef = useRef(null);
  const progressRef = useRef(0);
  const xRef = useRef(0.5);
  const timeRef = useRef(Math.PI / 2);
  const reqIdRef = useRef(null);
  const lastYRef = useRef(0);

  const lerp = (a, b, t) => a * (1 - t) + b * t;

  const setPath = (progress, xPos) => {
    if (pathRef.current) {
      const clampedProg = Math.max(-45, Math.min(45, progress));
      pathRef.current.setAttribute(
        "d",
        `M 0 50 Q ${1000 * xPos} ${50 + clampedProg} 1000 50`
      );
    }
  };

  const resetAnimation = () => {
    timeRef.current = Math.PI / 2;
    progressRef.current = 0;
  };

  const animateOut = () => {
    const newProgress = progressRef.current * Math.sin(timeRef.current);
    progressRef.current = lerp(progressRef.current, 0, 0.045);
    timeRef.current += 0.28;
    setPath(newProgress, xRef.current);

    if (Math.abs(progressRef.current) > 0.4) {
      reqIdRef.current = requestAnimationFrame(animateOut);
    } else {
      resetAnimation();
      setPath(0, 0.5);
    }
  };

  useEffect(() => {
    setPath(0, 0.5);
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
    progressRef.current = Math.max(-45, Math.min(45, progressRef.current + e.movementY * 1.2));
    setPath(progressRef.current, xRef.current);
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
    progressRef.current = Math.max(-45, Math.min(45, progressRef.current + dy * 1.5));
    setPath(progressRef.current, xRef.current);
  };

  const handleTouchEnd = () => {
    animateOut();
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative h-14 w-full max-w-4xl mx-auto my-2 overflow-visible select-none touch-none",
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-hidden="true"
    >
      <div className="absolute inset-0 z-10 cursor-grab active:cursor-grabbing" />
      <svg
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
      >
        <defs>
          <filter id={filterId} x="-20%" y="-100%" width="140%" height="300%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          ref={pathRef}
          d="M 0 50 Q 500 50 1000 50"
          fill="none"
          stroke={strokeColor}
          strokeWidth="1.75"
          filter={`url(#${filterId})`}
          className="opacity-80 transition-opacity duration-200"
        />
      </svg>
    </div>
  );
}

