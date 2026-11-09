import { Icon } from "./Icon";

export function Rsvp() {
  const rsvpMembers = [
    {
      name: "Rajesh Kumar Jaiswal & Sunita Jaiswal",
      phone: null,
    },
    {
      name: "Dinesh Kumar Jaiswal & Rekha Jaiswal",
      phone: "+91 6386181333",
      tel: "+916386181333",
      displayPhone: "+91 63861 81333",
    },
    {
      name: "Bhupesh Kumar Jaiswal",
      phone: null,
    },
    {
      name: "Devesh Kumar Jaiswal & Sudha Jaiswal",
      phone: null,
    },
    {
      name: "Abhinav Jaiswal & Nidhi Jaiswal",
      phone: null,
    },
  ];

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
          For travel, accommodation or celebration assistance, please feel welcome to connect directly with our family.
        </p>

        {/* Card Box: Bride's Family - Layered Glass Card with Portfolio-style Hover Effects */}
        <div className="relative mt-8 mb-12 rounded-[1.75rem] sm:rounded-[2.25rem] p-2 sm:p-2.5 bg-gradient-to-b from-white via-white/80 to-[#fae8ee]/80 border border-gold/30 shadow-[0_16px_45px_rgba(133,34,56,0.08)] backdrop-blur-xl text-left">
          <div className="relative rounded-[1.4rem] sm:rounded-[1.9rem] bg-white/95 p-5 sm:p-7 border border-[#f2dee5] shadow-xs">
            {/* Header with Glowing Status Dot */}
            <div className="flex items-center justify-between mb-5 pb-4 border-b border-[#f4e2e8]">
              <span className="inline-flex items-center gap-2.5 font-display text-lg sm:text-xl font-bold text-[#350812]">
                <span className="text-[#852238] drop-shadow-xs">✦</span> Bride's Family
              </span>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fae8ee] border border-[#f0d0db] shadow-2xs">
                <div className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_8px_#d4af37] animate-pulse" />
                <span className="text-[10px] sm:text-xs tracking-wider uppercase font-semibold text-[#7a182d]">
                  TO RSVP &amp; FOR ASSISTANCE
                </span>
              </div>
            </div>

            {/* Member Cards with Smooth Lift, Glow, & Gradient Reveal */}
            <div className="space-y-3.5">
              {rsvpMembers.map((member) => (
                <div
                  key={member.name}
                  className="group relative overflow-hidden rounded-2xl border border-[#ebd2dc] bg-[#fdf8fa]/90 p-4 sm:p-5 flex items-center justify-between backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_10px_28px_rgba(133,34,56,0.12)] cursor-default"
                >
                  {/* Subtle Gradient Reveal sweep on hover (Portfolio signature) */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-gold/15 via-[#852238]/6 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Left accent indicator line */}
                  <div className="absolute left-0 top-3 bottom-3 w-1 rounded-r-full bg-[#852238]/20 group-hover:bg-gold transition-colors duration-300" />

                  <div className="relative z-10 pl-2">
                    <h4 className="font-display text-base sm:text-lg font-bold text-[#2d050f] group-hover:text-[#852238] transition-colors duration-300">
                      {member.name}
                    </h4>
                    {member.phone && (
                      <a
                        href={`tel:${member.tel}`}
                        className="inline-flex items-center gap-1.5 mt-1 text-xs sm:text-sm font-mono text-[#540d1e] group-hover:text-[#852238] font-semibold transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#852238] group-hover:bg-gold transition-colors inline-block" />
                        {member.displayPhone}
                      </a>
                    )}
                  </div>

                  {/* Only Dinesh Kumar Jaiswal & Rekha Jaiswal has Call icon button */}
                  {member.phone && (
                    <div className="relative z-10 flex items-center shrink-0 ml-3">
                      <a
                        href={`tel:${member.tel}`}
                        aria-label={`Call ${member.name}`}
                        className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-[#4a0e1c] to-[#681428] text-gold group-hover:text-white border border-gold/40 shadow-xs flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_16px_rgba(212,175,55,0.45)] group-hover:border-gold active:scale-95"
                        title="Call"
                      >
                        <Icon name="phone" className="h-5 w-5" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
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
