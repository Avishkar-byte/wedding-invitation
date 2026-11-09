import { site } from "../data/site.config";
import { MarigoldGarland } from "./Florals";
import { Icon } from "./Icon";

export function Footer() {
  const { couple, footer } = site;

  return (
    <footer className="relative px-5 pb-32 pt-8 text-center bg-[#28040d] text-white overflow-hidden">
      {/* Background Watermark Monogram */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center font-display text-[140px] sm:text-[200px] font-bold text-white/[0.04] select-none leading-none -translate-y-4"
        aria-hidden="true"
      >
        A &amp; S
      </div>

      <div className="relative z-10 max-w-lg mx-auto">
        <MarigoldGarland className="mx-auto mb-8 w-full max-w-md" />

        <div className="mx-auto w-10 h-10 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center text-gold mb-4 shadow-sm">
          <Icon name="heart" className="h-4 w-4 fill-gold text-gold" />
        </div>

        <p className="font-display italic text-lg sm:text-xl text-pink-100/90 leading-relaxed max-w-sm mx-auto">
          &ldquo;{footer.closing}&rdquo;
        </p>

        <p className="mt-4 font-display text-xs tracking-[0.25em] uppercase text-gold font-semibold">
          WITH LOVE · THE JAISWAL &amp; SANKET FAMILIES
        </p>

        <p className="mt-2 font-display text-xs tracking-widest text-pink-200/75 uppercase font-medium">
          {couple.partnerA} &amp; {couple.partnerB} · 12 . 12 . 2026
        </p>

        {/* Highlighted tribute */}
        <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-white/[0.08] border border-gold/40 shadow-[0_2px_12px_rgba(0,0,0,0.3)] text-xs sm:text-sm text-pink-100 font-medium tracking-wide">
          <span>Crafted with</span>
          <span className="text-red-400 inline-block animate-pulse text-sm sm:text-base" aria-label="love">❤️</span>
          <span>by</span>
          <span className="text-gold font-bold tracking-wider">Avishkar</span>
          <span>for</span>
          <span className="text-pink-200 font-semibold">Ayushi Didi &amp; Sanket Jija Ji</span>
        </div>
      </div>
    </footer>
  );
}
