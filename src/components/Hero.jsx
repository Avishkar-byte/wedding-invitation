import { site } from "../data/site.config";
import { asset } from "../lib/asset";
import { CornerMandala } from "./Florals";

export function Hero({ isOpen, onOpen }) {
  const { couple, displayDate, city, hero } = site;

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-4 pb-12 sm:pb-16 pt-4 sm:pt-6 text-center select-none bg-[#fcf4f6] text-[#2c050e]"
    >
      {/* Background Accent: Divine Shiv Parvati transparent illustration - soft and light, fits without cropping */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden flex items-center justify-center p-4">
        <div className="relative w-full h-full max-w-xl max-h-[68vh] flex items-center justify-center translate-y-8 sm:translate-y-10">
          <img
            src={asset("shiv_parvati.png")}
            alt="Lord Shiva & Goddess Parvati"
            className="max-h-full max-w-full w-auto h-auto object-contain opacity-[0.20] filter drop-shadow-[0_4px_16px_rgba(133,34,56,0.10)] pointer-events-none select-none"
          />
        </div>
      </div>

      <CornerMandala className="pointer-events-none absolute left-0 top-0 w-32 max-w-[38vw] md:w-52 opacity-85 z-10" />
      <CornerMandala className="pointer-events-none absolute right-0 top-0 w-32 max-w-[38vw] origin-center scale-x-[-1] md:w-52 opacity-85 z-10" />
      <CornerMandala className="pointer-events-none absolute bottom-12 left-0 w-28 max-w-[36vw] origin-center scale-y-[-1] md:w-44 opacity-70 z-10" />
      <CornerMandala className="pointer-events-none absolute bottom-12 right-0 w-28 max-w-[36vw] origin-center scale-[-1] md:w-44 opacity-70 z-10" />

      {/* Top Header Block: Ganesh Ji + Shree Ganeshay Namah + An Invitation to Celebrate (Pushed higher up) */}
      <div className="relative z-10 -mt-6 sm:-mt-10 md:-mt-14 mb-3 sm:mb-4 flex flex-col items-center">
        {/* 1. Lord Ganesha Image on ABSOLUTE TOP: Without background, clean maroon color */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center mb-0.5">
          <img
            src={asset("ganesha_maroon.png")}
            alt="Lord Shri Ganesh"
            className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(133,34,56,0.18)]"
          />
        </div>

        {/* 2. Below Ganesh Ji: Shree Ganeshay Namah */}
        <p className="font-display text-sm sm:text-base md:text-lg tracking-[0.26em] text-[#852238] font-bold uppercase mt-0.5 mb-1 drop-shadow-xs">
          ॥ श्री गणेशाय नमः ॥
        </p>

        {/* 3. Below that: An Invitation to Celebrate */}
        <p className="font-display text-[10.5px] sm:text-xs md:text-sm tracking-[0.3em] text-[#852238] uppercase font-bold drop-shadow-xs">
          AN INVITATION TO CELEBRATE
        </p>
      </div>

      {/* 4. Couple Names with Prominent Capital 'A' in Ayushi & Sanket */}
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="font-script text-6xl leading-none text-[#350812] sm:text-7xl md:text-8xl drop-shadow-[0_2px_12px_rgba(252,244,246,0.95)]">
          <span className="font-['Alex_Brush'] text-[1.14em] inline-block -mr-1">A</span>yushi
          <span className="mx-3 text-gold font-serif text-5xl sm:text-6xl">&amp;</span>
          {couple.partnerB}
        </h1>

        <p className="mt-4 sm:mt-5 font-display text-2xl text-[#540d1e] md:text-3xl font-bold tracking-wide drop-shadow-[0_1px_6px_rgba(252,244,246,0.95)]">
          {displayDate}
        </p>
        <p className="mt-1 font-display text-base sm:text-lg text-[#7a182d] font-semibold drop-shadow-[0_1px_6px_rgba(252,244,246,0.95)]">
          {city}
        </p>

        {/* Open the Invitation Button - Vanishes when clicked */}
        {!isOpen && (
          <button
            type="button"
            onClick={onOpen}
            className="mt-7 sm:mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[#4a0e1c] hover:bg-[#681428] px-9 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-white shadow-[0_8px_25px_rgba(74,14,28,0.35)] hover:shadow-[0_10px_30px_rgba(74,14,28,0.5)] active:scale-95 transition-all cursor-pointer uppercase animate-pulse border border-gold/40"
          >
            {hero.ctaLabel}
          </button>
        )}
      </div>
    </section>
  );
}
