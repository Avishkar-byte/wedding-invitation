import { site } from "../data/site.config";
import { MarigoldGarland } from "./Florals";

export function Invitation() {
  const { invitation, couple } = site;

  return (
    <section id="invitation" className="scroll-mt-6 px-4 sm:px-6 py-16 sm:py-20 bg-[#fcf4f6] text-[#2c050e]">
      <div className="mx-auto max-w-2xl text-center">
        <MarigoldGarland className="mx-auto mb-10 w-full max-w-lg" />

        <div className="inline-block px-4 py-1 rounded-full bg-[#fae8ee] border border-[#ebd6de] text-[#7a182d] text-xs font-bold tracking-[0.25em] uppercase mb-4">
          SHUBH VIVAH
        </div>

        <p className="font-display text-xs sm:text-sm tracking-[0.28em] text-[#852238] uppercase font-semibold">
          {invitation.eyebrow}
        </p>

        <h2 className="mt-2.5 font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#350812]">
          {invitation.heading}
        </h2>

        {invitation.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 24)} className="mt-4 text-xs sm:text-sm md:text-base leading-relaxed text-[#540d1e]">
            {paragraph}
          </p>
        ))}

        {/* Auspicious Date Box - Kept as striking maroon card box */}
        <div className="mt-8 rounded-3xl border border-gold/40 bg-[#480c1a] p-6 sm:p-7 shadow-[0_12px_35px_rgba(56,8,20,0.15)] max-w-lg mx-auto text-center text-white">
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-gold">
            AUSPICIOUS DATE
          </p>
          <p className="mt-1.5 font-display text-2xl sm:text-3xl font-bold text-white">
            Saturday, 12th December 2026
          </p>
          <div className="mt-4 pt-3.5 border-t border-white/15 text-xs sm:text-sm text-pink-100/90 leading-relaxed">
            <p className="font-semibold text-gold tracking-widest uppercase text-[11px]">
              CEREMONY TIMINGS
            </p>
            <p className="mt-1 text-sm font-medium">Barat Swagat &amp; Varmala at 07:00 PM Onwards</p>
            <p className="mt-0.5 text-xs text-pink-200/80">Dinner &amp; Celebrations to follow</p>
          </div>
        </div>

        <p className="mt-8 font-script text-4xl text-[#852238]">
          {invitation.signOff}
        </p>
        <p className="mt-1 font-display text-xl font-bold text-[#350812]">
          {couple.partnerA} &amp; {couple.partnerB}
        </p>
      </div>
    </section>
  );
}
