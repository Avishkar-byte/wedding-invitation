import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { site } from "../data/site.config";
import { Icon } from "./Icon";

export function Lineup() {
  const { lineup, events } = site;
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        setHeight(ref.current.getBoundingClientRect().height);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 75%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <section id="lineup" className="relative scroll-mt-6 pt-16 sm:pt-20 bg-[#fcf4f6] text-[#2c050e]" ref={containerRef}>
      <div className="mx-auto max-w-4xl text-center mb-8 px-4">
        <p className="font-display text-xs sm:text-sm tracking-[0.28em] text-[#852238] uppercase font-semibold">
          {lineup.eyebrow}
        </p>
        <h2 className="mt-2.5 font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#350812]">
          {lineup.heading}
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-[#7a182d] font-medium max-w-md mx-auto">
          Two sacred moments of celebration and blessings.
        </p>
      </div>

      <div ref={ref} className="relative max-w-3xl mx-auto pb-16 px-4 sm:px-6">
        {events.map((event, index) => (
          <motion.div
            key={event.id || index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-start pt-8 md:pt-14"
          >
            {/* Sticky Milestone Pin - Perfectly centered at left-6 sm:left-10 */}
            <div className="sticky top-32 self-start z-20">
              <div className="h-10 w-10 absolute left-6 sm:left-10 top-1 -translate-x-1/2 rounded-full bg-white flex items-center justify-center border-2 border-gold shadow-[0_0_14px_rgba(212,175,55,0.45)]">
                <div className="h-4 w-4 rounded-full bg-[#480c1a] border border-gold animate-pulse" />
              </div>
            </div>

            {/* Event Details Card - Kept as striking maroon card box */}
            <div className="relative pl-14 sm:pl-20 pr-1 sm:pr-2 w-full">
              <h3 className="text-xl sm:text-2xl mb-3 text-left font-display font-bold text-[#350812]">
                {event.title}
              </h3>

              <div className="rounded-3xl border border-gold/40 bg-[#480c1a] p-5 sm:p-7 shadow-[0_10px_30px_rgba(56,8,20,0.18)] backdrop-blur-md text-white">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold">
                  <span className="inline-flex items-center gap-1.5 bg-black/30 text-gold px-3.5 py-1 rounded-full border border-gold/30">
                    <Icon name="calendar" className="h-4 w-4 text-gold" />
                    {event.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-gold/15 text-pink-100 px-3.5 py-1 rounded-full border border-gold/30">
                    <Icon name="clock" className="h-4 w-4 text-gold" />
                    {event.time}
                  </span>
                </div>

                <div className="mt-4 flex items-start gap-2 text-pink-200/90">
                  <Icon name="place" className="h-4 w-4 mt-0.5 text-gold shrink-0" />
                  <span className="text-xs sm:text-sm font-medium">{event.venue}</span>
                </div>

                <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-pink-100/90">
                  {event.note}
                </p>

                <div className="mt-5 pt-4 border-t border-white/10">
                  <a
                    href={event.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/15 hover:bg-gold hover:text-[#2a050d] px-5 py-2 text-xs sm:text-sm font-semibold text-gold transition-all shadow-xs"
                  >
                    <Icon name="place" className="h-4 w-4" />
                    {lineup.mapsLabel}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Vertical beam background line - Passing exactly through middle of circle (left-6 sm:left-10) */}
        <div
          style={{ height: height + "px" }}
          className="absolute left-6 sm:left-10 top-0 overflow-hidden w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-gold/40 to-transparent"
        >
          {/* Glowing vertical beam fill tracking scroll */}
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-amber-400 via-gold to-transparent from-[0%] via-[20%] rounded-full shadow-[0_0_12px_#d4af37]"
          />
        </div>
      </div>
    </section>
  );
}
