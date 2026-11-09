import { useEffect, useState } from "react";
import { site } from "./data/site.config";
import { scrollToHash } from "./lib/scrollToHash";
import { Hero } from "./components/Hero";
import { Invitation } from "./components/Invitation";
import { Countdown } from "./components/Countdown";
import { Lineup } from "./components/Lineup";
import { Venue } from "./components/Venue";
import { Rsvp } from "./components/Rsvp";
import { Footer } from "./components/Footer";
import { BottomNav } from "./components/BottomNav";
import { MusicToggle } from "./components/MusicToggle";
import { FallingPetals } from "./components/Florals";

export function App() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => scrollToHash(), 50);
    return () => window.clearTimeout(id);
  }, []);

  const handleOpen = () => {
    setIsOpen(true);

    // Try playing background music on user gesture
    setTimeout(() => {
      const audio = document.querySelector("audio");
      if (audio) {
        audio.play().catch(() => {});
      }
    }, 100);

    // Smooth scroll down to invitation section
    setTimeout(() => {
      const el = document.getElementById("invitation");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 200);
  };

  return (
    <>
      <a className="skip-link" href="#invitation">
        {site.skipLink}
      </a>
      {/* Falling Petals Animation Throughout the Whole Website */}
      <FallingPetals />

      <Hero isOpen={isOpen} onOpen={handleOpen} />

      {isOpen && (
        <>
          <main className="animate-fadeIn">
            <Invitation />
            <Countdown />
            <Lineup />
            <Venue />
            <Rsvp />
          </main>
          <Footer />
          <BottomNav />
        </>
      )}

      <MusicToggle />
    </>
  );
}

export default App;
