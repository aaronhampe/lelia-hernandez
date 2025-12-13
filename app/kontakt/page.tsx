import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt | Lelia Hernández - Klavierunterricht Hannover",
  description: "Kontaktieren Sie Lelia Hernández für eine kostenlose Schnupperstunde oder weitere Informationen.",
};

export default function ContactPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="inline-flex items-center rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-zinc-700 ring-1 ring-black/5 backdrop-blur dark:bg-zinc-900/60 dark:text-zinc-200 dark:ring-white/10 mb-4">
            Jetzt Kontakt aufnehmen
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">Kontakt</h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
            Haben Sie Fragen oder möchten Sie eine kostenlose Schnupperstunde vereinbaren? Ich freue mich auf Ihre Nachricht!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="rounded-3xl bg-white/70 p-8 ring-1 ring-black/5 backdrop-blur dark:bg-zinc-900/50 dark:ring-white/10">
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 mb-6">Kontaktdaten</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800">
                    <svg className="h-6 w-6 text-zinc-600 dark:text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-900 dark:text-zinc-50">Lelia Hernández San Martín</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-300">Klavierlehrerin</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800">
                    <svg className="h-6 w-6 text-zinc-600 dark:text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-900 dark:text-zinc-50">Standort</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-300">30177 Hannover</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <a href="tel:0511629305" className="group flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-zinc-100 transition-colors hover:bg-zinc-900 dark:bg-zinc-800 dark:hover:bg-white">
                    <svg className="h-6 w-6 text-zinc-600 transition-colors group-hover:text-white dark:text-zinc-300 dark:group-hover:text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </a>
                  <div>
                    <p className="font-semibold text-zinc-900 dark:text-zinc-50">Telefon</p>
                    <a href="tel:0511629305" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors dark:text-zinc-300 dark:hover:text-white">
                      0511 / 629305
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Info Card */}
            <div className="rounded-3xl bg-zinc-950 p-8 text-white dark:bg-white dark:text-zinc-950">
              <h3 className="text-lg font-semibold mb-3">Kostenlose Schnupperstunde</h3>
              <p className="text-sm text-white/80 dark:text-zinc-600 mb-4">
                Lernen Sie mich und meinen Unterrichtsstil in einer unverbindlichen Probestunde kennen.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-white/60 dark:text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Unverbindlich & kostenlos
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-white/60 dark:text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Flexible Terminvereinbarung
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-white/60 dark:text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Vor Ort, bei Ihnen oder online
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl bg-white/70 p-8 ring-1 ring-black/5 backdrop-blur dark:bg-zinc-900/50 dark:ring-white/10">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 mb-6">Schreiben Sie mir</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-200">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="mt-1 block w-full rounded-2xl border border-black/10 bg-white/80 p-3 text-zinc-900 shadow-sm outline-none transition focus:border-zinc-900/30 focus:ring-4 focus:ring-zinc-900/10 dark:border-white/10 dark:bg-zinc-950/40 dark:text-zinc-50 dark:focus:border-white/20 dark:focus:ring-white/10"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-200">
                  E-Mail-Adresse *
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 block w-full rounded-2xl border border-black/10 bg-white/80 p-3 text-zinc-900 shadow-sm outline-none transition focus:border-zinc-900/30 focus:ring-4 focus:ring-zinc-900/10 dark:border-white/10 dark:bg-zinc-950/40 dark:text-zinc-50 dark:focus:border-white/20 dark:focus:ring-white/10"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 dark:text-zinc-200">
                  Telefon
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="mt-1 block w-full rounded-2xl border border-black/10 bg-white/80 p-3 text-zinc-900 shadow-sm outline-none transition focus:border-zinc-900/30 focus:ring-4 focus:ring-zinc-900/10 dark:border-white/10 dark:bg-zinc-950/40 dark:text-zinc-50 dark:focus:border-white/20 dark:focus:ring-white/10"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-200">
                  Nachricht *
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="mt-1 block w-full resize-y rounded-2xl border border-black/10 bg-white/80 p-3 text-zinc-900 shadow-sm outline-none transition focus:border-zinc-900/30 focus:ring-4 focus:ring-zinc-900/10 dark:border-white/10 dark:bg-zinc-950/40 dark:text-zinc-50 dark:focus:border-white/20 dark:focus:ring-white/10"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="group w-full inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-zinc-900/10 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 dark:focus:ring-white/10"
                >
                  <span>Nachricht senden</span>
                  <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-4">
                * Pflichtfelder. Mit dem Absenden erklären Sie sich mit der Speicherung Ihrer Daten zur Kontaktaufnahme einverstanden.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
