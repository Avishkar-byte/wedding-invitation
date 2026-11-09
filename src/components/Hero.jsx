import { site } from "../data/site.config";
import { asset } from "../lib/asset";
import { CornerMandala } from "./Florals";

export function Hero({ isOpen, onOpen }) {
  const { couple, displayDate, city, hero } = site;

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-5 pb-20 pt-12 text-center select-none bg-[#fcf4f6] text-[#2c050e]"
    >
      {/* Background Accent: Visibly distinct couple portrait with soft feathered edge blending */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden flex items-center justify-center">
        <div className="relative w-full h-full max-w-2xl flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_82%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_82%)]">
          <img
            src={asset("couple.jpg")}
            alt="Ayushi & Sanket"
            className="h-full w-full object-cover object-[center_32%] opacity-[0.38] filter blur-[0.8px] mix-blend-multiply scale-105"
          />
        </div>
        {/* Soft atmospheric gradient wash ensuring the photo is visible while keeping text legible */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fcf4f6]/55 via-transparent to-[#fcf4f6]/65 pointer-events-none" />
      </div>

      <CornerMandala className="pointer-events-none absolute left-0 top-0 w-36 max-w-[42vw] md:w-56 opacity-85 z-10" />
      <CornerMandala className="pointer-events-none absolute right-0 top-0 w-36 max-w-[42vw] origin-center scale-x-[-1] md:w-56 opacity-85 z-10" />
      <CornerMandala className="pointer-events-none absolute bottom-12 left-0 w-28 max-w-[36vw] origin-center scale-y-[-1] md:w-44 opacity-70 z-10" />
      <CornerMandala className="pointer-events-none absolute bottom-12 right-0 w-28 max-w-[36vw] origin-center scale-[-1] md:w-44 opacity-70 z-10" />

      {/* Top Header Eyebrow */}
      <p className="relative z-10 font-display text-xs sm:text-sm tracking-[0.3em] text-[#852238] uppercase font-bold mb-2 drop-shadow-xs">
        AN INVITATION TO CELEBRATE
      </p>

      {/* Lord Ganesha Image with Golden Aura & Clean Backdrop */}
      <div className="relative z-10 mx-auto my-3 w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center">
        <div className="absolute inset-0 bg-[#fcf4f6]/85 rounded-full blur-xl pointer-events-none" />
        <div className="absolute inset-0 bg-gold/25 rounded-full blur-md pointer-events-none" />
        <img
          src={asset("ganesha_maroon.png")}
          alt="Lord Shri Ganesh"
          className="relative w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(133,34,56,0.25)]"
        />
      </div>

      {/* Invocation Below Ganesha Image in Middle */}
      <p className="relative z-10 font-display text-base tracking-[0.28em] text-[#852238] font-bold uppercase mt-1 drop-shadow-xs">
        ॥ श्री गणेशाय नमः ॥
      </p>

      {/* Couple Names with Subtle Luminous Halo for Readability */}
      <h1 className="relative z-10 mt-4 font-script text-6xl leading-none text-[#350812] sm:text-7xl md:text-8xl drop-shadow-[0_2px_12px_rgba(252,244,246,0.9)]">
        {couple.partnerA}
        <span className="mx-3 text-gold font-serif text-5xl sm:text-6xl">&amp;</span>
        {couple.partnerB}
      </h1>

      <p className="relative z-10 mt-5 font-display text-2xl text-[#540d1e] md:text-3xl font-bold tracking-wide drop-shadow-[0_1px_6px_rgba(252,244,246,0.9)]">
        {displayDate}
      </p>
      <p className="relative z-10 mt-1 font-display text-base sm:text-lg text-[#7a182d] font-semibold drop-shadow-[0_1px_6px_rgba(252,244,246,0.9)]">
        {city}
      </p>

      {/* Open the Invitation Button - Vanishes when clicked */}
      {!isOpen && (
        <button
          type="button"
          onClick={onOpen}
          className="relative z-10 mt-9 inline-flex min-h-12 items-center justify-center rounded-full bg-[#4a0e1c] hover:bg-[#681428] px-9 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-white shadow-[0_8px_25px_rgba(74,14,28,0.35)] hover:shadow-[0_10px_30px_rgba(74,14,28,0.5)] active:scale-95 transition-all cursor-pointer uppercase animate-pulse border border-gold/40"
        >
          {hero.ctaLabel}
        </button>
      )}
    </section>
  );
}
