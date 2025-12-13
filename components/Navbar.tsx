"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="w-full sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-zinc-950/60">
      <div className="mx-auto max-w-6xl px-4 min-[851px]:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-base font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
              Lelia Hernández
            </Link>
          </div>
          <div className="hidden min-[851px]:ml-6 min-[851px]:flex min-[851px]:space-x-8 items-center">
            <ThemeToggle className="hidden min-[851px]:inline-flex" />
            <Link href="/" className={`relative text-sm font-medium transition-colors duration-200 ${isActive('/') ? 'text-zinc-900 dark:text-white' : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white'}`}>
              Startseite
              {isActive('/') && <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-zinc-900 dark:bg-white rounded-full" />}
            </Link>
            <Link href="/ueber-mich" className={`relative text-sm font-medium transition-colors duration-200 ${isActive('/ueber-mich') ? 'text-zinc-900 dark:text-white' : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white'}`}>
              Über mich
              {isActive('/ueber-mich') && <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-zinc-900 dark:bg-white rounded-full" />}
            </Link>
            <Link href="/kontakt" className={`relative text-sm font-medium transition-colors duration-200 ${isActive('/kontakt') ? 'text-zinc-900 dark:text-white' : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white'}`}>
              Kontakt
              {isActive('/kontakt') && <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-zinc-900 dark:bg-white rounded-full" />}
            </Link>
            <Link href="/kontakt" className="group inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 hover:shadow-md transition-all duration-200 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100">
              <span>Probestunde vereinbaren</span>
              <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="-mr-2 flex items-center gap-2 min-[851px]:hidden">
            <ThemeToggle className="inline-flex" />
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-full p-2 text-zinc-600 hover:bg-black/5 hover:text-zinc-900 transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-zinc-900/30 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white dark:focus:ring-white/20"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div 
        className={`min-[851px]:hidden overflow-hidden transition-all duration-300 ease-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        id="mobile-menu"
      >
          <div className="mx-auto max-w-6xl px-4 pb-4">
            <div className="mt-2 space-y-1 rounded-2xl bg-white/70 p-2 ring-1 ring-black/5 backdrop-blur dark:bg-zinc-950/60 dark:ring-white/10 shadow-lg">
            <Link href="/" onClick={() => setIsOpen(false)} className={`block rounded-xl px-3 py-2 text-base font-medium transition-colors ${isActive('/') ? 'bg-black/5 text-zinc-950 dark:bg-white/10 dark:text-white' : 'text-zinc-800 hover:bg-black/5 hover:text-zinc-950 dark:text-zinc-200 dark:hover:bg-white/10 dark:hover:text-white'}`}>
              Startseite
            </Link>
            <Link href="/ueber-mich" onClick={() => setIsOpen(false)} className={`block rounded-xl px-3 py-2 text-base font-medium transition-colors ${isActive('/ueber-mich') ? 'bg-black/5 text-zinc-950 dark:bg-white/10 dark:text-white' : 'text-zinc-800 hover:bg-black/5 hover:text-zinc-950 dark:text-zinc-200 dark:hover:bg-white/10 dark:hover:text-white'}`}>
              Über mich
            </Link>
            <Link href="/kontakt" onClick={() => setIsOpen(false)} className={`block rounded-xl px-3 py-2 text-base font-medium transition-colors ${isActive('/kontakt') ? 'bg-black/5 text-zinc-950 dark:bg-white/10 dark:text-white' : 'text-zinc-800 hover:bg-black/5 hover:text-zinc-950 dark:text-zinc-200 dark:hover:bg-white/10 dark:hover:text-white'}`}>
              Kontakt
            </Link>
            <Link href="/kontakt" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2 rounded-xl bg-zinc-900 px-3 py-2.5 text-base font-semibold text-white hover:bg-zinc-800 transition-colors dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100">
              <span>Probestunde vereinbaren</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            </div>
          </div>
        </div>
    </nav>
  );
};

export default Navbar;
