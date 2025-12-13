"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
}

function readThemeFromDom(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function getInitialTheme(): Theme {
  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return readThemeFromDom();
}

export default function ThemeToggle({
  className,
}: {
  className?: string;
}) {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const initial = getInitialTheme();
    applyTheme(initial);

    const schedule = (fn: () => void) => {
      if (typeof queueMicrotask === "function") return queueMicrotask(fn);
      return Promise.resolve().then(fn);
    };

    schedule(() => setTheme(initial));

    const onStorage = (event: StorageEvent) => {
      if (event.key !== "theme") return;
      if (event.newValue !== "light" && event.newValue !== "dark") return;
      setTheme(event.newValue);
      applyTheme(event.newValue);
    };

    const onThemeChange = (event: Event) => {
      const next = (event as CustomEvent).detail as Theme | undefined;
      if (next !== "light" && next !== "dark") return;
      setTheme(next);
    };

    window.addEventListener("storage", onStorage);
    window.addEventListener("themechange", onThemeChange as EventListener);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("themechange", onThemeChange as EventListener);
    };
  }, []);

  const toggle = () => {
    if (!theme) return;
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    window.localStorage.setItem("theme", next);
    applyTheme(next);

    window.dispatchEvent(new CustomEvent("themechange", { detail: next }));
  };

  const label = theme === "dark" ? "Dunkel" : "Hell";
  const icon = theme === "dark" ? "🌙" : "☀️";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Theme umschalten (aktuell: ${label})`}
      aria-pressed={theme === "dark"}
      className={`inline-flex items-center justify-center rounded-full bg-white/70 px-3 py-2 text-sm font-semibold text-zinc-900 ring-1 ring-black/10 backdrop-blur hover:bg-white transition-colors dark:bg-zinc-900/60 dark:text-zinc-50 dark:ring-white/10 dark:hover:bg-zinc-900 ${className ?? ""}`}
    >
      {theme ? icon : "…"}
    </button>
  );
}
