import { site } from "../data/site.config";
import { asset } from "../lib/asset";
import { CornerMandala } from "./Florals";

export function Hero({ isOpen, onOpen }) {
  const { couple, displayDate, city, hero } = site;

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-5 pb-20 pt-10 text-center select-none bg-[#fcf4f6] text-[#2c050e]"
    >
      {/* Background Accent: Divine Shiv Parvati transparent illustration - scaled to fit without cropping on mobile or desktop */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden flex items-center justify-center p-4">
        <div className="relative w-full h-full max-w-xl max-h-[68vh] flex items-center justify-center">
          <img
            src={asset("shiv_parvati.png")}
            alt="Lord Shiva & Goddess Parvati"
            className="max-h-full max-w-full w-auto h-auto object-contain opacity-40 filter drop-shadow-[0_4px_16px_rgba(133,34,56,0.15)] pointer-events-none select-none"
          />
        </div>
      </div>

      <CornerMandala className="pointer-events-none absolute left-0 top-0 w-36 max-w-[42vw] md:w-56 opacity-85 z-10" />
      <CornerMandala className="pointer-events-none absolute right-0 top-0 w-36 max-w-[42vw] origin-center scale-x-[-1] md:w-56 opacity-85 z-10" />
      <CornerMandala className="pointer-events-none absolute bottom-12 left-0 w-28 max-w-[36vw] origin-center scale-y-[-1] md:w-44 opacity-70 z-10" />
      <CornerMandala className="pointer-events-none absolute bottom-12 right-0 w-28 max-w-[36vw] origin-center scale-[-1] md:w-44 opacity-70 z-10" />

      {/* 1. Lord Ganesha Image on ABSOLUTE TOP: Without background, clean maroon color */}
      <div className="relative z-10 mx-auto w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center mb-1">
        <img
          src={asset("ganesha_maroon.png")}
          alt="Lord Shri Ganesh"
          className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(133,34,56,0.2)]"
        />
      </div>

      {/* 2. Below Ganesh Ji: Shree Ganeshay Namah */}
      <p className="relative z-10 font-display text-base sm:text-lg md:text-xl tracking-[0.28em] text-[#852238] font-bold uppercase mt-1 mb-2 drop-shadow-xs">
        ॥ श्री गणेशाय नमः ॥
      </p>

      {/* 3. Below that: An Invitation to Celebrate */}
      <p className="relative z-10 font-display text-xs sm:text-sm tracking-[0.3em] text-[#852238] uppercase font-bold mb-3 drop-shadow-xs">
        AN INVITATION TO CELEBRATE
      </p>

      {/* 4. Couple Names with Prominent Capital 'A' in Ayushi & Sanket */}
      <h1 className="relative z-10 mt-2 font-script text-6xl leading-none text-[#350812] sm:text-7xl md:text-8xl drop-shadow-[0_2px_12px_rgba(252,244,246,0.95)]">
        <span className="font-['Alex_Brush'] text-[1.14em] inline-block -mr-1">A</span>yushi
        <span className="mx-3 text-gold font-serif text-5xl sm:text-6xl">&amp;</span>
        {couple.partnerB}
      </h1>

      <p className="relative z-10 mt-5 font-display text-2xl text-[#540d1e] md:text-3xl font-bold tracking-wide drop-shadow-[0_1px_6px_rgba(252,244,246,0.95)]">
        {displayDate}
      </p>
      <p className="relative z-10 mt-1 font-display text-base sm:text-lg text-[#7a182d] font-semibold drop-shadow-[0_1px_6px_rgba(252,244,246,0.95)]">
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
