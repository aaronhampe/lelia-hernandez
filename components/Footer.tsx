import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-zinc-100 pt-16 pb-12 dark:bg-zinc-950 dark:border-zinc-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Brand Section */}
          <div className="md:col-span-5 space-y-6">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-thin tracking-tight text-zinc-900 dark:text-zinc-50">
                Lelia Hernández
              </span>
            </Link>
            <p className="text-sm font-light text-zinc-500 max-w-sm leading-relaxed dark:text-zinc-400">
              Professioneller Klavierunterricht in Hannover. Individuell, mit Herz und technischer Raffinesse – für jedes Alter.
            </p>
            
            {/* Minimalist Social Icons */}
            <div className="flex items-center gap-5 pt-2">
              <a 
                href="https://www.facebook.com/lelia.hernandez.9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-white"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
               <a 
                href="tel:0511629305"
                className="text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-white"
                aria-label="Telefon"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="md:col-span-3 space-y-6">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-900 dark:text-zinc-50">
              Menü
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm font-light text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">
                  Startseite
                </Link>
              </li>
              <li>
                <Link href="/ueber-mich" className="text-sm font-light text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">
                  Über mich
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-sm font-light text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4 space-y-6">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-900 dark:text-zinc-50">
              Kontakt
            </h3>
            <div className="space-y-4">
              <p className="text-sm font-light text-zinc-600 dark:text-zinc-400">
                Lelia Hernández<br />
                30177 Hannover
              </p>
              <p className="text-sm font-light text-zinc-600 dark:text-zinc-400">
                <a href="tel:0511629305" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                  0511 / 629305
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Minimal */}
        <div className="mt-16 pt-8 border-t border-zinc-100 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <p className="text-xs font-light text-zinc-400">
                © {new Date().getFullYear()} Lelia Hernández San Martín.
              </p>
              <span className="hidden md:inline text-zinc-300 dark:text-zinc-700 mx-2">|</span>
              <a 
                href="https://aaronhampe.de" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs font-light text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors"
              >
                Webdesign von Aaron Hampe
              </a>
            </div>
            <div className="flex gap-6">
               <Link href="/impressum" className="text-xs font-light text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200">
                  Impressum
               </Link>
               <Link href="/datenschutz" className="text-xs font-light text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200">
                  Datenschutz
               </Link>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
