import { Icon } from "./Icon";

export function Rsvp() {
  return (
    <section id="rsvp" className="relative scroll-mt-6 pt-12 pb-0 bg-[#fcf4f6] text-[#2c050e]">
      <div className="mx-auto max-w-2xl text-center px-4 sm:px-6">
        <p className="font-display text-xs sm:text-sm tracking-[0.28em] text-[#852238] uppercase font-semibold">
          WARM ATTENTIONS &amp; INQUIRIES
        </p>
        <h2 className="mt-2.5 font-display text-3xl sm:text-4xl font-bold text-[#350812]">
          Family RSVP Concierge
        </h2>
        <p className="mx-auto mt-2.5 max-w-md text-xs sm:text-sm text-[#7a182d] leading-relaxed">
          For travel, accommodation or celebration assistance, please feel welcome to connect directly with our families.
        </p>

        {/* Card Box 1: Bride's Family */}
        <div className="mt-8 rounded-3xl bg-white p-5 sm:p-7 shadow-[0_12px_35px_rgba(56,8,20,0.07)] border border-[#ebd6de] text-left">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#f4e2e8]">
            <span className="inline-flex items-center gap-2 font-display text-lg sm:text-xl font-bold text-[#350812]">
              <span className="text-[#852238]">✦</span> Bride's Family
            </span>
            <span className="text-[10px] sm:text-xs tracking-wider uppercase font-semibold px-3 py-1 rounded-full bg-[#fae8ee] text-[#7a182d] border border-[#f0d0db]">
              TO RSVP &amp; FOR ASSISTANCE
            </span>
          </div>

          <div className="space-y-3">
            {/* Row 1: Parents */}
            <div className="rounded-2xl bg-[#fbf3f5] p-4 sm:p-5 flex items-center justify-between border border-[#f2dee5] hover:border-gold/50 transition-all">
              <div>
                <h4 className="font-display text-base sm:text-lg font-bold text-[#2d050f]">
                  Dinesh Kumar Jaiswal &amp; Rekha Jaiswal
                </h4>
                <p className="text-xs text-[#7a182d] font-medium mt-0.5">
                  Parents of the Bride
                </p>
                <a
                  href="tel:+919811234567"
                  className="inline-block mt-1 text-xs font-mono text-[#540d1e] hover:underline"
                >
                  +91 98112 34567
                </a>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href="https://wa.me/919811234567?text=Namaste%2C%20heartiest%20congratulations%20for%20Ayushi%20and%20Sanket%27s%20wedding!"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp Dinesh & Rekha Jaiswal"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#4a0e1c] hover:bg-[#6e162b] text-white flex items-center justify-center transition-all transform hover:scale-110 shadow-sm"
                  title="WhatsApp"
                >
                  <Icon name="chat" className="h-5 w-5" />
                </a>
                <a
                  href="tel:+919811234567"
                  aria-label="Call Dinesh & Rekha Jaiswal"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#4a0e1c] hover:bg-[#6e162b] text-white flex items-center justify-center transition-all transform hover:scale-110 shadow-sm"
                  title="Call"
                >
                  <Icon name="phone" className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Row 2: Siblings (Avishkar removed for now) */}
            <div className="rounded-2xl bg-[#fbf3f5] p-4 sm:p-5 flex items-center justify-between border border-[#f2dee5] hover:border-gold/50 transition-all">
              <div>
                <h4 className="font-display text-base sm:text-lg font-bold text-[#2d050f]">
                  Abhinav - Nidhi
                </h4>
                <p className="text-xs text-[#7a182d] font-medium mt-0.5">
                  Brother &amp; Bhabhi
                </p>
                <a
                  href="tel:+919811234567"
                  className="inline-block mt-1 text-xs font-mono text-[#540d1e] hover:underline"
                >
                  +91 98112 34567
                </a>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href="https://wa.me/919811234567?text=Namaste%20Abhinav%20%26%20Nidhi%2C%20excited%20to%20attend%20the%20wedding!"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp Abhinav & Nidhi"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#4a0e1c] hover:bg-[#6e162b] text-white flex items-center justify-center transition-all transform hover:scale-110 shadow-sm"
                  title="WhatsApp"
                >
                  <Icon name="chat" className="h-5 w-5" />
                </a>
                <a
                  href="tel:+919811234567"
                  aria-label="Call Abhinav & Nidhi"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#4a0e1c] hover:bg-[#6e162b] text-white flex items-center justify-center transition-all transform hover:scale-110 shadow-sm"
                  title="Call"
                >
                  <Icon name="phone" className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Card Box 2: Groom's Family */}
        <div className="mt-6 mb-12 rounded-3xl bg-white p-5 sm:p-7 shadow-[0_12px_35px_rgba(56,8,20,0.07)] border border-[#ebd6de] text-left">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#f4e2e8]">
            <span className="inline-flex items-center gap-2 font-display text-lg sm:text-xl font-bold text-[#350812]">
              <span className="text-[#852238]">✦</span> Groom's Family
            </span>
            <span className="text-[10px] sm:text-xs tracking-wider uppercase font-semibold px-3 py-1 rounded-full bg-[#fae8ee] text-[#7a182d] border border-[#f0d0db]">
              CONFIRMATION ASSIST
            </span>
          </div>

          <div className="space-y-3">
            {/* Row 1 */}
            <div className="rounded-2xl bg-[#fbf3f5] p-4 sm:p-5 flex items-center justify-between border border-[#f2dee5] hover:border-gold/50 transition-all">
              <div>
                <h4 className="font-display text-base sm:text-lg font-bold text-[#2d050f]">
                  Mr. &amp; Mrs. Jaiswal
                </h4>
                <p className="text-xs text-[#7a182d] font-medium mt-0.5">
                  Parents of the Groom
                </p>
                <a
                  href="tel:+919876543210"
                  className="inline-block mt-1 text-xs font-mono text-[#540d1e] hover:underline"
                >
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href="https://wa.me/919876543210?text=Namaste%2C%20heartiest%20congratulations%20on%20Sanket%20and%20Ayushi%27s%20wedding!"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp Groom's Parents"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#4a0e1c] hover:bg-[#6e162b] text-white flex items-center justify-center transition-all transform hover:scale-110 shadow-sm"
                  title="WhatsApp"
                >
                  <Icon name="chat" className="h-5 w-5" />
                </a>
                <a
                  href="tel:+919876543210"
                  aria-label="Call Groom's Parents"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#4a0e1c] hover:bg-[#6e162b] text-white flex items-center justify-center transition-all transform hover:scale-110 shadow-sm"
                  title="Call"
                >
                  <Icon name="phone" className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Row 2 */}
            <div className="rounded-2xl bg-[#fbf3f5] p-4 sm:p-5 flex items-center justify-between border border-[#f2dee5] hover:border-gold/50 transition-all">
              <div>
                <h4 className="font-display text-base sm:text-lg font-bold text-[#2d050f]">
                  Sanket &amp; Family Concierge
                </h4>
                <p className="text-xs text-[#7a182d] font-medium mt-0.5">
                  Groom's Family
                </p>
                <a
                  href="tel:+919876543210"
                  className="inline-block mt-1 text-xs font-mono text-[#540d1e] hover:underline"
                >
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href="https://wa.me/919876543210?text=Namaste%20Sanket%2C%20excited%20to%20attend%20the%20wedding!"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp Sanket Family Concierge"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#4a0e1c] hover:bg-[#6e162b] text-white flex items-center justify-center transition-all transform hover:scale-110 shadow-sm"
                  title="WhatsApp"
                >
                  <Icon name="chat" className="h-5 w-5" />
                </a>
                <a
                  href="tel:+919876543210"
                  aria-label="Call Sanket Family Concierge"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#4a0e1c] hover:bg-[#6e162b] text-white flex items-center justify-center transition-all transform hover:scale-110 shadow-sm"
                  title="Call"
                >
                  <Icon name="phone" className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Organic Wave Divider Transitioning Down to Deep Velvet Maroon Footer */}
      <div className="w-full overflow-hidden leading-none -mb-px">
        <svg
          viewBox="0 0 1440 70"
          fill="none"
          className="w-full h-10 sm:h-14 md:h-16 block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C320,60 540,70 720,40 C940,10 1200,60 1440,20 L1440,70 L0,70 Z"
            fill="#28040d"
          />
        </svg>
      </div>
    </section>
  );
}
