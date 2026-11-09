import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { navItems } from "../data/site.config";
import { Icon } from "./Icon";
import { cn } from "../lib/utils";

export function BottomNav() {
  const [activeTab, setActiveTab] = useState(navItems[0]?.id || "invitation");

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;

        // If near bottom of the page, activate the last nav item (rsvp)
        if (scrollY + windowHeight >= docHeight - 140) {
          if (navItems.length > 0) {
            setActiveTab(navItems[navItems.length - 1].id);
          }
          ticking = false;
          return;
        }

        // Detect which section is currently centered or closest to top
        let current = navItems[0]?.id;
        for (const item of navItems) {
          const el = document.getElementById(item.id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= windowHeight * 0.45 && rect.bottom > 90) {
              current = item.id;
            }
          }
        }

        if (current) {
          setActiveTab(current);
        }
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    setActiveTab(id);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className="fixed bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 overflow-visible w-auto max-w-[calc(100vw-1.25rem)]"
      aria-label="Page navigation"
    >
      <div className="flex items-center gap-0.5 sm:gap-1.5 md:gap-2 bg-[#faf1f4]/95 border border-[#ebd6de] backdrop-blur-xl py-1 px-1 sm:px-1.5 rounded-full shadow-[0_10px_35px_-5px_rgba(56,8,20,0.35)]">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className={cn(
                "relative cursor-pointer text-xs sm:text-sm font-semibold px-2.5 sm:px-4 py-1.5 rounded-full transition-colors select-none",
                "text-[#6b162a]/75 hover:text-[#380814]",
                isActive && "text-[#380814] font-bold"
              )}
            >
              <div className="flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1.5">
                <Icon name={item.icon} className="h-4 w-4 shrink-0" />
                <span className="text-[10px] sm:text-xs md:text-sm tracking-wide leading-tight whitespace-nowrap">
                  {item.label}
                </span>
              </div>

              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-[#4a0e1c]/12 border border-[#852238]/30 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 320,
                    damping: 28,
                  }}
                >
                  {/* Tubelight top lamp glow */}
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-7 sm:w-9 h-1 bg-[#d4af37] rounded-t-full shadow-[0_0_8px_#d4af37]">
                    <div className="absolute w-12 h-5 bg-[#d4af37]/35 rounded-full blur-md -top-2 -left-2.5 pointer-events-none" />
                    <div className="absolute w-8 h-4 bg-[#d4af37]/45 rounded-full blur-sm -top-1 -left-0.5 pointer-events-none" />
                    <div className="absolute w-4 h-3 bg-[#4a0e1c]/30 rounded-full blur-xs top-0 left-1.5 pointer-events-none" />
                  </div>
                </motion.div>
              )}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
