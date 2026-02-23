import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt | Lelia Hernández - Klavierunterricht Hannover",
  description: "Kontaktieren Sie Lelia Hernández für eine kostenlose Schnupperstunde oder weitere Informationen.",
};

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen pt-32 sm:pt-40 pb-24 dark:bg-zinc-950 transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-4">
        
        {/* Header */}
        <div className="text-center mb-16 sm:mb-24 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-thin tracking-tight text-zinc-900 dark:text-zinc-50 mb-8">
            Kontakt.
          </h1>
          <p className="text-xl font-light text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Hast Du Fragen oder möchtest Du eine günstige Schnupperstunde vereinbaren? 
            Ich freue mich darauf, von Dir zu hören.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Contact Info */}
          <div className="space-y-12">
            
            {/* Direct Contact */}
            <section>
              <h2 className="text-2xl font-thin tracking-tight text-zinc-900 dark:text-zinc-50 mb-6">
                Auf einen Blick
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                   <div className="mt-1 flex-shrink-0 text-zinc-400">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                   </div>
                   <div>
                      <p className="text-lg font-medium text-zinc-900 dark:text-zinc-50">Standort</p>
                      <p className="text-lg font-light text-zinc-600 dark:text-zinc-400">Hannover (30177)</p>
                   </div>
                </div>

                <div className="flex items-start gap-4">
                   <div className="mt-1 flex-shrink-0 text-zinc-400">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                   </div>
                   <div>
                      <p className="text-lg font-medium text-zinc-900 dark:text-zinc-50">Telefon</p>
                      <a href="tel:0511629305" className="text-lg font-light text-zinc-600 hover:text-zinc-900 transition-colors dark:text-zinc-400 dark:hover:text-zinc-200">
                        0511 / 629305
                      </a>
                   </div>
                </div>
              </div>
            </section>
            
            {/* Quick Info Box */}
            <div className="rounded-3xl bg-zinc-50 p-8 border border-zinc-100 dark:bg-zinc-900/50 dark:border-zinc-800">
              <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-50 mb-4">
                Günstige Probestunde
              </h3>
              <p className="text-base font-light text-zinc-600 dark:text-zinc-300 mb-6 leading-relaxed">
                Lerne mich und meinen Unterrichtsstil in einer unverbindlichen Probestunde kennen.
                Völlig risikofrei und günstig.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm font-light text-zinc-600 dark:text-zinc-400">
                   <span className="h-1.5 w-1.5 rounded-full bg-zinc-400"></span>
                   Unverbindlich
                </li>
                <li className="flex items-center gap-3 text-sm font-light text-zinc-600 dark:text-zinc-400">
                   <span className="h-1.5 w-1.5 rounded-full bg-zinc-400"></span>
                   Flexible Terminfindung
                </li>
                <li className="flex items-center gap-3 text-sm font-light text-zinc-600 dark:text-zinc-400">
                   <span className="h-1.5 w-1.5 rounded-full bg-zinc-400"></span>
                   Bei Dir, vor Ort oder Online
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.05)] border border-zinc-100 dark:bg-zinc-900 dark:border-zinc-800 dark:shadow-none">
            <h2 className="text-2xl font-thin tracking-tight text-zinc-900 dark:text-zinc-50 mb-8">
              Schreib mir
            </h2>
            <form className="space-y-6" method="POST" action="https://formspree.io/f/xojnpywz">
              <input 
                type="hidden" 
                name="_next" 
                value={`${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/danke`} 
              />
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-zinc-900 dark:text-zinc-200 ml-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="Dein Name"
                    className="w-full rounded-xl border-0 bg-zinc-50 px-4 py-3.5 text-zinc-900 placeholder:text-zinc-400 focus:ring-1 focus:ring-inset focus:ring-zinc-900 sm:text-sm sm:leading-6 dark:bg-zinc-800 dark:text-white dark:focus:ring-white transition-all"
                  />
                </div>
                <div className="space-y-2">
                   <label htmlFor="email" className="text-sm font-medium text-zinc-900 dark:text-zinc-200 ml-1">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="name@beispiel.de"
                    className="w-full rounded-xl border-0 bg-zinc-50 px-4 py-3.5 text-zinc-900 placeholder:text-zinc-400 focus:ring-1 focus:ring-inset focus:ring-zinc-900 sm:text-sm sm:leading-6 dark:bg-zinc-800 dark:text-white dark:focus:ring-white transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-zinc-900 dark:text-zinc-200 ml-1">
                  Telefon (optional)
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Für Rückfragen"
                  className="w-full rounded-xl border-0 bg-zinc-50 px-4 py-3.5 text-zinc-900 placeholder:text-zinc-400 focus:ring-1 focus:ring-inset focus:ring-zinc-900 sm:text-sm sm:leading-6 dark:bg-zinc-800 dark:text-white dark:focus:ring-white transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-zinc-900 dark:text-zinc-200 ml-1">
                  Nachricht
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  placeholder="Wie kann ich Dir helfen?"
                  className="w-full resize-y rounded-xl border-0 bg-zinc-50 px-4 py-3.5 text-zinc-900 placeholder:text-zinc-400 focus:ring-1 focus:ring-inset focus:ring-zinc-900 sm:text-sm sm:leading-6 dark:bg-zinc-800 dark:text-white dark:focus:ring-white transition-all"
                ></textarea>
              </div>

              <div className="flex items-start gap-3">
                <input
                  id="privacy"
                  name="privacy"
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:ring-offset-zinc-900 dark:focus:ring-white accent-zinc-900 dark:accent-white"
                />
                <label htmlFor="privacy" className="text-sm font-light text-zinc-600 dark:text-zinc-400">
                  Ich habe die <a href="/datenschutz" className="underline hover:text-zinc-900 dark:hover:text-zinc-300">Datenschutzerklärung</a> zur Kenntnis genommen. Ich stimme zu, dass meine Angaben und Daten zur Beantwortung meiner Anfrage elektronisch erhoben und gespeichert werden.
                  <br />
                  <span className="text-xs text-zinc-500 dark:text-zinc-500 block mt-1">
                    Hinweis: Du kannst Deine Einwilligung jederzeit für die Zukunft per E-Mail an mich widerrufen.
                  </span>
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full rounded-full bg-zinc-900 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 dark:focus-visible:outline-white transition-all duration-200 hover:scale-[1.01]"
                >
                  Nachricht senden
                </button>
              </div>
              
              <p className="text-xs text-center text-zinc-400 font-light mt-4 dark:text-zinc-500">
                Ich melde mich schnellstmöglich bei Dir zurück.
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
