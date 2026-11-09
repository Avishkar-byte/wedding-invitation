import { useState } from "react";
import { site } from "../data/site.config";
import { asset } from "../lib/asset";
import { Icon } from "./Icon";

export function Venue() {
  const { venue } = site;
  const [showMap, setShowMap] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const fullText = `${venue.name}, ${venue.addressLines.join(", ")}`;
    navigator.clipboard.writeText(fullText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <section id="venue" className="scroll-mt-6 px-4 sm:px-6 py-16 sm:py-20 bg-[#fcf4f6] text-[#2c050e]">
      <div className="mx-auto max-w-4xl text-center mb-10">
        <p className="font-display text-xs sm:text-sm tracking-[0.28em] text-[#852238] uppercase font-semibold">
          VENUE &amp; DESTINATION
        </p>
        <h2 className="mt-2.5 font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#350812]">
          {venue.name}
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-[#7a182d] font-medium tracking-wide">
          {venue.subtitle || "CIVIL LINES · PRAYAGRAJ"}
        </p>
      </div>

      <div className="mx-auto max-w-2xl bg-white rounded-3xl p-5 sm:p-7 shadow-[0_12px_40px_rgba(56,8,20,0.08)] border border-[#ebd6de]">
        {/* Venue Photo / Interactive Map Container */}
        <div className="overflow-hidden rounded-2xl border border-[#ebd6de] bg-[#fbf3f5] aspect-[16/9] w-full relative mb-6 shadow-sm">
          {showMap ? (
            <div className="relative h-full w-full">
              <iframe
                title={venue.mapTitle}
                src={venue.embedUrl}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <button
                type="button"
                onClick={() => setShowMap(false)}
                className="absolute top-3 right-3 rounded-full bg-[#350812]/90 hover:bg-[#350812] text-white text-xs px-3.5 py-1.5 backdrop-blur-md shadow-md cursor-pointer transition-all"
              >
                ← View Photo
              </button>
            </div>
          ) : (
            <div className="relative h-full w-full group">
              <img
                src={asset("venue.jpg")}
                alt="Welcomhotel by ITC Hotels, Prayagraj"
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              {/* Dark Gradient Overlay with Title */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-4 sm:p-6 text-white text-left">
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <span className="text-[10px] sm:text-xs tracking-[0.2em] font-semibold text-amber-300 uppercase block mb-1">
                      VENUE FOR WEDDING FESTIVITIES
                    </span>
                    <h3 className="font-display text-lg sm:text-2xl font-bold text-white drop-shadow-md">
                      {venue.name}, Prayagraj
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowMap(true)}
                    className="shrink-0 h-10 w-10 rounded-full bg-white/20 hover:bg-white/35 backdrop-blur-md text-white flex items-center justify-center transition-all shadow-md cursor-pointer"
                    title="Open Map Preview"
                  >
                    <Icon name="place" className="h-5 w-5 text-amber-300" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Address and Parking Details */}
        <div className="space-y-4 text-left">
          <div className="flex items-start gap-3.5">
            <div className="h-9 w-9 rounded-full bg-[#fae8ee] text-[#4a0e1c] flex items-center justify-center shrink-0 mt-0.5">
              <Icon name="place" className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs tracking-wider uppercase font-bold text-[#852238]">
                FULL ADDRESS
              </p>
              <p className="mt-0.5 text-xs sm:text-sm text-[#350812] leading-relaxed font-medium">
                {venue.name}, {venue.addressLines.join(", ")}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 pt-3.5 border-t border-[#f4e2e8]">
            <div className="h-9 w-9 rounded-full bg-[#fae8ee] text-[#4a0e1c] flex items-center justify-center shrink-0 mt-0.5">
              <Icon name="map" className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs tracking-wider uppercase font-bold text-[#852238]">
                ARRIVAL &amp; PARKING
              </p>
              <p className="mt-0.5 text-xs sm:text-sm text-[#540d1e] leading-relaxed">
                {venue.directions}
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-7 pt-5 border-t border-[#f4e2e8] flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={venue.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#4a0e1c] hover:bg-[#681428] px-8 text-xs sm:text-sm font-bold tracking-wider text-white shadow-md transition-all active:scale-95 uppercase"
          >
            <span>{venue.mapsCta}</span>
            <span className="text-amber-300 font-bold">→</span>
          </a>

          <button
            type="button"
            onClick={() => setShowMap(!showMap)}
            className="w-full sm:w-auto inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#ebd6de] bg-[#fbf3f5] hover:bg-[#faebee] px-5 text-xs sm:text-sm font-semibold text-[#4a0e1c] transition-all cursor-pointer"
          >
            <Icon name="place" className="h-4 w-4" />
            <span>{showMap ? "Show Photo" : "Interactive Map"}</span>
          </button>

          <button
            type="button"
            onClick={handleCopy}
            className="w-full sm:w-auto inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#ebd6de] bg-white hover:bg-[#fbf3f5] px-5 text-xs sm:text-sm font-semibold text-[#681628] transition-all cursor-pointer"
          >
            <span>{copied ? "Address Copied!" : "Copy Address"}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
