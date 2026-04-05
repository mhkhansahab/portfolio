"use client";

import { MoonIcon, SunIcon } from "@/components/portfolio/icons";

export function ThemeToggle() {
  const playToggleSound = () => {
    if (typeof window === "undefined") return;
    const AudioContextClass = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;

    const ctx = new AudioContextClass();
    const now = ctx.currentTime;
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain = ctx.createGain();

    osc1.type = "triangle";
    osc2.type = "sine";
    osc1.frequency.setValueAtTime(880, now);
    osc2.frequency.setValueAtTime(1320, now + 0.03);

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.08, now + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.13);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(ctx.destination);

    osc1.start(now);
    osc2.start(now + 0.02);
    osc1.stop(now + 0.12);
    osc2.stop(now + 0.14);

    window.setTimeout(() => void ctx.close(), 220);
  };

  const applyTheme = (nextDark: boolean) => {
    document.documentElement.classList.toggle("dark", nextDark);
    localStorage.setItem("theme", nextDark ? "dark" : "light");
  };

  const onToggle = () => {
    const next = !document.documentElement.classList.contains("dark");
    const supportsTransition = typeof document !== "undefined" && "startViewTransition" in document;

    if (supportsTransition) {
      const transitionDoc = document as Document & {
        startViewTransition: (update: () => void) => { ready?: Promise<void> };
      };
      transitionDoc.startViewTransition(() => applyTheme(next));
    } else {
      applyTheme(next);
    }

    playToggleSound();
  };

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      className="size-10 cursor-pointer rounded-full p-0 transition-all duration-300 active:scale-95 [&_svg]:size-4"
      onClick={onToggle}
    >
      <span className="sr-only">Toggle theme</span>
      <MoonIcon className="size-4 dark:hidden" />
      <SunIcon className="hidden size-4 dark:block" />
    </button>
  );
}
