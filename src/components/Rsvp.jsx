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

        {/* Card Box: Bride's Family */}
        <div className="mt-8 mb-12 rounded-3xl bg-white p-5 sm:p-7 shadow-[0_12px_35px_rgba(56,8,20,0.07)] border border-[#ebd6de] text-left">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#f4e2e8]">
            <span className="inline-flex items-center gap-2 font-display text-lg sm:text-xl font-bold text-[#350812]">
              <span className="text-[#852238]">✦</span> Bride's Family
            </span>
            <span className="text-[10px] sm:text-xs tracking-wider uppercase font-semibold px-3 py-1 rounded-full bg-[#fae8ee] text-[#7a182d] border border-[#f0d0db]">
              TO RSVP &amp; FOR ASSISTANCE
            </span>
          </div>

          <div className="space-y-3">
            {rsvpMembers.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl bg-[#fbf3f5] p-4 sm:p-5 flex items-center justify-between border border-[#f2dee5] hover:border-gold/50 transition-all"
              >
                <div>
                  <h4 className="font-display text-base sm:text-lg font-bold text-[#2d050f]">
                    {member.name}
                  </h4>
                  {member.phone && (
                    <a
                      href={`tel:${member.tel}`}
                      className="inline-block mt-1 text-xs sm:text-sm font-mono text-[#540d1e] hover:underline font-semibold"
                    >
                      {member.displayPhone}
                    </a>
                  )}
                </div>

                {/* Only Dinesh Kumar Jaiswal & Rekha Jaiswal has Call icon button */}
                {member.phone && (
                  <div className="flex items-center shrink-0 ml-3">
                    <a
                      href={`tel:${member.tel}`}
                      aria-label={`Call ${member.name}`}
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#4a0e1c] hover:bg-[#6e162b] text-white flex items-center justify-center transition-all transform hover:scale-110 shadow-sm"
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
