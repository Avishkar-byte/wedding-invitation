import { useEffect, useRef, useState } from "react";
import { site } from "../data/site.config";
import { asset } from "../lib/asset";
import { Icon } from "./Icon";

export function MusicToggle() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const { music } = site;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
    };
  }, []);

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }

    audio.play().then(
      () => setPlaying(true),
      () => {
        setPlaying(false);
      },
    );
  }

  return (
    <div className="fixed right-4 bottom-24 z-40">
      <audio ref={audioRef} src={asset(music.src)} preload="none" loop />
      <button
        type="button"
        onClick={toggle}
        className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition-all active:scale-95 cursor-pointer ${
          playing ? "bg-[#4a0e1c] text-gold border-gold/70 animate-pulse shadow-[0_0_15px_rgba(212,175,55,0.4)]" : "bg-white/90 text-[#4a0e1c] border-[#ebd6de] shadow-md"
        }`}
        aria-pressed={playing}
        aria-label={playing ? music.labelPause : music.labelPlay}
        title={playing ? music.labelPause : music.labelPlay}
      >
        <Icon name={playing ? "pause" : "music"} />
      </button>
    </div>
  );
}
