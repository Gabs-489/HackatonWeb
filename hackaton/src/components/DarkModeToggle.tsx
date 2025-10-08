'use client';
import React from "react";

/**
 * DarkModeToggle
 * - Tailwind required with `darkMode: "class"` in tailwind.config.js
 * - Persists choice in localStorage (key: "theme")
 * - Initializes from system preference if no stored choice
 * - Accessible: role="switch", aria-checked, focus styles, keyboard/Pointer friendly
 * - Animations: smooth translate, subtle glow
 */
export default function DarkModeToggle() {
  const [isDark, setIsDark] = React.useState<boolean | null>(null);

  // Initialize from localStorage or system preference
  React.useEffect(() => {
    const root = document.documentElement;
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") {
      const dark = stored === "dark";
      setIsDark(dark);
      root.classList.toggle("dark", dark);
      return;
    }
    const prefersDark =
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDark(prefersDark);
    root.classList.toggle("dark", prefersDark);
  }, []);

  // Optional: react to system changes IF the user hasn't chosen manually yet
  React.useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e: MediaQueryListEvent) => {
      const stored = localStorage.getItem("theme");
      if (!stored) {
        setIsDark(e.matches);
        document.documentElement.classList.toggle("dark", e.matches);
      }
    };
    try {
      media.addEventListener("change", onChange);
      return () => media.removeEventListener("change", onChange);
    } catch {
      // Safari <14 fallback
      media.addListener(onChange);
      return () => media.removeListener(onChange);
    }
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  if (isDark === null) return null; // avoid hydration mismatch

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggle}
      className="group inline-flex items-center rounded-full p-1 transition-[box-shadow] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
      style={{ boxShadow: isDark ? "0 0 0 0 rgba(0,0,0,0)" : "0 0 0 0 rgba(0,0,0,0)" }}
    >
      {/* Track */}
      <span
        className="relative h-10 w-20 rounded-full bg-neutral-200 dark:bg-neutral-700 shadow-inner transition-colors"
        aria-hidden
      >
        {/* Inner soft light */}
        <span className="absolute inset-0 rounded-full bg-gradient-to-b from-white/60 to-white/0 dark:from-white/5 dark:to-black/20" />

        {/* Knob */}
        <span
          className={
            "absolute top-1 left-1 h-8 w-8 rounded-full bg-white dark:bg-neutral-800 shadow-sm ring-1 ring-black/5 transition-transform duration-300 will-change-transform " +
            (isDark ? "translate-x-10" : "translate-x-0")
          }
        >
          {/* Sun / Moon icons */}
          <span className="absolute inset-0 grid place-items-center">
            {/* Sun */}
            <svg
              className={
                "h-5 w-5 text-amber-400 transition-opacity duration-300 " +
                (isDark ? "opacity-0" : "opacity-100")
              }
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0-16a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Zm0 18a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1ZM3 11h1a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2Zm17 0h1a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2ZM5.05 5.05a1 1 0 0 1 1.41 0l.71.71a1 1 0 1 1-1.41 1.41l-.71-.71a1 1 0 0 1 0-1.41Zm11.37 11.37a1 1 0 0 1 1.41 0l.71.71a1 1 0 0 1-1.41 1.41l-.71-.71a1 1 0 0 1 0-1.41ZM18.95 5.05a1 1 0 0 1 0 1.41l-.71.71a1 1 0 1 1-1.41-1.41l.71-.71a1 1 0 0 1 1.41 0ZM6.46 17.54a1 1 0 0 1 0 1.41l-.71.71a1 1 0 0 1-1.41-1.41l.71-.71a1 1 0 0 1 1.41 0Z" />
            </svg>
            {/* Moon */}
            <svg
              className={
                "h-5 w-5 text-neutral-100 transition-opacity duration-300 " +
                (isDark ? "opacity-100" : "opacity-0")
              }
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 1 0 9.79 9.79Z" />
            </svg>
          </span>
        </span>
      </span>
    </button>
  );
}

