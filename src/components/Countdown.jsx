import { useEffect, useState } from "react";
import { site } from "../data/site.config";

function remaining(iso) {
  const target = new Date(iso).getTime();
  const now = Date.now();
  const diff = target - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function Countdown() {
  const { countdown, weddingDateIso } = site;
  const [parts, setParts] = useState(() => remaining(weddingDateIso));

  useEffect(() => {
    const id = setInterval(() => {
      setParts(remaining(weddingDateIso));
    }, 1000);
    return () => clearInterval(id);
  }, [weddingDateIso]);

  return (
    <section id="countdown" className="scroll-mt-6 bg-[#fcf4f6] px-5 py-16 text-[#2c050e] border-y border-[#ebd6de]">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-bold md:text-4xl text-[#350812]">
          {countdown.heading}
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-[#7a182d] font-medium">
          Counting down every moment to Saturday, 12th December 2026, 7:00 PM
        </p>

        {/* Countdown Boxes - Kept as striking maroon boxes with gold text */}
        <div className="mt-8 grid grid-cols-4 gap-2.5 sm:gap-4 max-w-lg mx-auto">
          {[
            { key: "days", label: countdown.labels.days },
            { key: "hours", label: countdown.labels.hours },
            { key: "minutes", label: countdown.labels.minutes },
            { key: "seconds", label: countdown.labels.seconds },
          ].map(({ key, label }) => (
            <div
              key={key}
              className="rounded-2xl border border-gold/40 bg-[#480c1a] px-2 py-4 shadow-[0_8px_25px_rgba(56,8,20,0.18)] backdrop-blur-sm"
            >
              <p className="font-display text-3xl font-semibold tabular-nums sm:text-5xl text-gold">
                {String(parts ? parts[key] : 0).padStart(2, "0")}
              </p>
              <p className="mt-1 text-[0.65rem] tracking-widest uppercase sm:text-xs text-pink-100/80 font-bold">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
