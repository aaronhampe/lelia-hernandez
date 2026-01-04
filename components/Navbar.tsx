"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const items = [
    { href: "/#ueber-mich", label: "Über Mich" },
    { href: "/#preise", label: "Preise" },
    { href: "/#haeufige-fragen", label: "Häufige Fragen" },
    { href: "/#kontakt", label: "Kontakt" },
  ] as const;

  useEffect(() => {
    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      if (!open) return;
      const target = e.target as Node | null;
      if (target && menuRef.current && !menuRef.current.contains(target)) setOpen(false);
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown, { passive: true });
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={[
          "fixed inset-0 z-40 bg-black/35 backdrop-blur-[1px]",
          "transition-opacity duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
      />

      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center items-start pointer-events-none">
        <div className="w-full flex items-start justify-center pointer-events-auto">
          {/* Left Bar */}
          <div className="flex-1 h-12 bg-white/100 backdrop-blur-md border-b border-black/5 dark:bg-zinc-950/90 dark:border-white/10"></div>

          {/* Center Shape */}
          <div className="relative z-10 flex flex-col items-center">
              {/* The top part that aligns with side bars (visually merged) */}
              <div className="h-12 w-46 bg-white/100 backdrop-blur-md border-b-0 dark:bg-zinc-950/90"></div>
              
              {/* The bottom protruding part */}
              <div className="absolute top-0 h-16 w-48 bg-white/100 border-black/5 dark:bg-zinc-950/90 dark:border-white/10 rounded-b-[2rem] flex items-center justify-center after:content-[''] after:absolute after:left-4 after:right-4 after:bottom-1 after:h-6 after:rounded-b-[2rem] after:shadow-[0_4px_20px_rgba(0,0,0,0.18)] after:-z-10">
                  <Link href="/" className="text-3xl font-thin tracking-[0.3em] text-zinc-950 dark:text-zinc-50 pt-3 uppercase">
                    Lelia
                  </Link>
              </div>
              
             
          </div>

          {/* Right Bar */}
          <div className="flex-1 h-12 bg-white/100 backdrop-blur-md border-b border-black/5 dark:bg-zinc-950/90 dark:border-white/10">
            <div className="h-full flex items-center justify-end pr-4">
              <div ref={menuRef} className="relative">
                <button
                  type="button"
                  onClick={() => setOpen((v) => !v)}
                  aria-haspopup="menu"
                  aria-expanded={open}
                  aria-label="Menü"
                  className="group inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/60 backdrop-blur-md hover:bg-white/80 dark:bg-zinc-950/40 dark:border-white/15 dark:hover:bg-zinc-950/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900/30 dark:focus-visible:ring-zinc-50/30"
                >
                  <span className="sr-only">Menü öffnen</span>
                  <span className="relative flex h-4 w-4 flex-col justify-between">
                    <span
                      className={[
                        "h-[1.5px] w-4 bg-zinc-900 dark:bg-zinc-50 origin-center transition-transform duration-200 ease-out",
                        open ? "translate-y-[7.00px] rotate-45" : "translate-y-0 rotate-0",
                      ].join(" ")}
                    />
                    <span
                      className={[
                        "h-[1.5px] w-4 bg-zinc-900 dark:bg-zinc-50 transition-[opacity,transform] duration-200 ease-out",
                        open ? "opacity-0 scale-x-75" : "opacity-100 scale-x-100",
                      ].join(" ")}
                    />
                    <span
                      className={[
                        "h-[1.5px] w-4 bg-zinc-900 dark:bg-zinc-50 origin-center transition-transform duration-200 ease-out",
                        open ? "-translate-y-[7.00px] -rotate-45" : "translate-y-0 rotate-0",
                      ].join(" ")}
                    />
                  </span>
                </button>

                <div
                  role="menu"
                  aria-label="Navigation"
                  aria-hidden={!open}
                  className={[
                    "absolute right-4 mt-8 w-60 overflow-hidden rounded-2xl",
                    "border border-black/10 bg-white/95 backdrop-blur-md backdrop-saturate-150",
                    "shadow-[0_16px_50px_rgba(0,0,0,0.14)] ring-1 ring-black/5",
                    "dark:bg-zinc-950/90 dark:border-white/10 dark:ring-white/10",
                    "origin-top-right transform-gpu will-change-transform",
                    "transition-[opacity,transform,filter] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none",
                    open
                      ? "opacity-100 translate-y-0 scale-100 blur-0 pointer-events-auto"
                      : "opacity-0 -translate-y-1 scale-[0.98] blur-[1px] pointer-events-none",
                  ].join(" ")}
                >
                  <div className="px-4 pt-3 pb-2">
                    <div className="text-[11px] font-medium tracking-[0.22em] uppercase text-zinc-500 dark:text-zinc-400">
                      Navigation
                    </div>
                  </div>

                  <div className="h-px bg-black/5 dark:bg-white/10" />

                  <nav className="py-2">
                    {items.map((item) => (
                      <Link
                        key={item.href}
                        role="menuitem"
                        href={item.href}
                        tabIndex={open ? 0 : -1}
                        onClick={() => setOpen(false)}
                        className={[
                          "group flex items-center justify-between gap-3 px-4 py-2.5",
                          "text-sm font-light tracking-wide text-zinc-900 dark:text-zinc-50",
                          "hover:bg-zinc-900/5 dark:hover:bg-white/5",
                          "focus:outline-none focus-visible:bg-zinc-900/5 dark:focus-visible:bg-white/5",
                        ].join(" ")}
                      >
                        <span className="flex items-center gap-3">
                          <span className="h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                          <span>{item.label}</span>
                        </span>

                        <svg
                          aria-hidden="true"
                          viewBox="0 0 20 20"
                          className="h-4 w-4 text-zinc-400 dark:text-zinc-500 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 motion-reduce:transition-none"
                          fill="none"
                        >
                          <path
                            d="M7.5 4.5L13 10l-5.5 5.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
