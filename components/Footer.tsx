import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-t border-black/5 bg-white/60 backdrop-blur dark:border-white/10 dark:bg-zinc-950/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <h3 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">
                Lelia Hernández
              </h3>
            </Link>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Professioneller Klavierunterricht in Hannover für alle Altersstufen und Niveaus.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://www.facebook.com/lelia.hernandez.9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/70 ring-1 ring-black/5 backdrop-blur transition-all duration-200 hover:bg-zinc-900 hover:ring-zinc-900 dark:bg-zinc-900/60 dark:ring-white/10 dark:hover:bg-white dark:hover:ring-white"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5 text-zinc-600 transition-colors group-hover:text-white dark:text-zinc-300 dark:group-hover:text-zinc-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="tel:0511629305"
                className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/70 ring-1 ring-black/5 backdrop-blur transition-all duration-200 hover:bg-zinc-900 hover:ring-zinc-900 dark:bg-zinc-900/60 dark:ring-white/10 dark:hover:bg-white dark:hover:ring-white"
                aria-label="Telefon"
              >
                <svg className="h-5 w-5 text-zinc-600 transition-colors group-hover:text-white dark:text-zinc-300 dark:group-hover:text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-950 dark:text-zinc-50">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <svg className="h-5 w-5 text-zinc-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">30177 Hannover</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="h-5 w-5 text-zinc-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:0511629305" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors dark:text-zinc-300 dark:hover:text-white">
                  0511 / 629305
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-950 dark:text-zinc-50">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="group inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 transition-colors dark:text-zinc-300 dark:hover:text-white">
                  <svg className="h-4 w-4 text-zinc-400 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Startseite
                </Link>
              </li>
              <li>
                <Link href="/ueber-mich" className="group inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 transition-colors dark:text-zinc-300 dark:hover:text-white">
                  <svg className="h-4 w-4 text-zinc-400 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Über mich
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="group inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 transition-colors dark:text-zinc-300 dark:hover:text-white">
                  <svg className="h-4 w-4 text-zinc-400 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-black/5 pt-8 dark:border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              © {new Date().getFullYear()} Lelia Hernández. Alle Rechte vorbehalten.
            </p>
            <Link 
              href="/kontakt" 
              className="group inline-flex items-center gap-2 text-xs font-medium text-zinc-600 hover:text-zinc-900 transition-colors dark:text-zinc-400 dark:hover:text-white"
            >
              Kostenlose Schnupperstunde anfragen
              <svg className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
