import Link from "next/link";
import Image from "next/image";
import { TestimonialSlider } from "@/components/TestimonialSlider";

export default function Home() {
  
  return (
    <div>
      {/* Hero Section mit Video Background */}
      <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          poster="/images/piano-hintergrund-lelia.webp"
        >
          <source src="/videos/piano-background.webm" type="video/webm" />
          <source src="/videos/piano-background.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay mit Blur und Punktmuster gegen Artefakte */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(rgba(216, 190, 190, 0.3) 1px, transparent 1px)',
            backgroundSize: '4px 4px'
          }}
        />

        <div className="mt-5 relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-thin tracking-tight text-white lg:text-7xl drop-shadow-sm">
            Klavierunterricht <br className="block sm:hidden" />  mit Herz.
          </h1>
          
          {/* Extravagante Responsive Trennung: Flexbox mit disappearing separator */}
          <div className="mt-6 flex flex-col items-center gap-y-1 text-xl font-thin tracking-wide text-white/90 sm:flex-row sm:gap-x-4 sm:text-2xl">
            <span className="whitespace-nowrap">Lelia Hernández San Martín</span>
            <span className="hidden h-1 w-1 rounded-full bg-white/60 sm:block" aria-hidden="true" />
            <span className="opacity-80">Hannover</span>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/kontakt"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 sm:text-lg font-light text-zinc-950 transition-all duration-300 hover:bg-zinc-100 hover:scale-105"
            >
              <span>Probestunde</span>
              <svg
                className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <Link
              href="/ueber-mich"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-4 sm:text-lg font-light text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105"
            >
              Mehr erfahren
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/70">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        {/* Modern UX: Subtle Gradient Blob in Background - Adjusted for Dark Mode/Mobile */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] rounded-full bg-rose-50/50 blur-3xl opacity-60 dark:bg-rose-900/20 pointer-events-none" />

        <div className="mx-auto max-w-6xl px-4 relative z-10">
          {/* Modern UX: items-start statt items-center für Sticky-Effekt */}
          {/* Mobile Optimization: Text zuerst (order-1), dann Bild (order-2) */}
          <div className="grid grid-cols-1 gap-12 sm:gap-16 lg:grid-cols-2 lg:gap-24 items-start mb-0">

            {/* Text Bereich */}
            <div className="text-left order-1">
              <h2 className="text-4xl font-thin tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl mb-8">
                Herzlich willkommen.
              </h2>
              <div className="space-y-6 text-xl font-light leading-relaxed text-zinc-600 dark:text-zinc-400">
                <p>
                  Mein Name ist Lelia Hernández. Ich biete individuellen Klavierunterricht in
                  Hannover an. 
                </p>
                <p>
                  Musik ist mehr als nur das Drücken von Tasten – sie ist Ausdruck, Emotion und Handwerk zugleich. 
                  Gemeinsam entwickeln wir Deine musikalischen Fähigkeiten, von den technischen Grundlagen bis hin zur künstlerischen Reife.
                </p>
                {/* Extra Text für Scroll-Länge */}
                <p>
                  Dabei ist es mir besonders wichtig, eine Atmosphäre zu schaffen, in der Du Dich wohlfühlst.
                  Fehler sind keine Hindernisse, sondern Teil des Lernprozesses.
                </p>
              </div>

              {/* Features als Liste statt Grid, integriert in den Textfluss */}
              <div className="mt-12 space-y-8">
                 <div className="flex gap-4">
                    <div className="flex-none pt-1">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                           <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-50">Individueller Unterricht</h3>
                      <p className="mt-1 text-base font-light text-zinc-500 dark:text-zinc-400">Abgestimmt auf Deine Interessen, für jedes Alter & Niveau.</p>
                    </div>
                 </div>

                 <div className="flex gap-4">
                    <div className="flex-none pt-1">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-50">Maximale Flexibilität</h3>
                      <p className="mt-1 text-base font-light text-zinc-500 dark:text-zinc-400">Unterricht bei Dir zu Hause, im Lehrraum oder online.</p>
                    </div>
                 </div>

                 <div className="flex gap-4">
                    <div className="flex-none pt-1">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100">
                         <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                           <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25" />
                         </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-50">Freude an der Musik</h3>
                      <p className="mt-1 text-base font-light text-zinc-500 dark:text-zinc-400">Leidenschaft statt Druck. Technik und Gefühl im Einklang.</p>
                    </div>
                 </div>
              </div>

            </div>
            
            {/* Bild Bereich - Modern UX: Sticky Positioning */}
            <div className="relative order-2 lg:sticky lg:top-32">
               {/* Mobile Aspect Ratio anpassen für weniger Höhe auf kleinen Screens */}
               <div className="relative aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 overflow-hidden rounded-2xl bg-zinc-100 shadow-2xl shadow-zinc-200 dark:shadow-none dark:bg-zinc-800">
                 <Image
                  src="/images/lelia-hernandez-klavier-hannover.webp"
                  alt="Lelia Hernández am Klavier"
                  fill
                  className="object-cover object-center transition-transform hover:scale-105 duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                
                {/* Glassmorphism Badge - Refined for Contrast & Mobile */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 rounded-xl bg-zinc-900/30 backdrop-blur-md border border-white/10 text-white shadow-lg">
                  <p className="text-xs sm:text-sm font-light leading-relaxed italic">
                    &quot;Das Klavier ist mein Instrument, um Geschichten ohne Worte zu erzählen.&quot;
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* NEW: Cinematic Parallax Interlude Section - Optimized for Mobile */}
      <section className="relative w-full py-24 md:py-48 bg-zinc-900 overflow-hidden flex items-center justify-center">
         <div 
           className="absolute inset-0 opacity-40 mix-blend-overlay bg-center bg-cover bg-no-repeat bg-local md:bg-fixed transition-opacity duration-500"
           style={{ backgroundImage: 'url(/images/lelia-hernandez-klavier-hannover.webp)' }} 
         />
         {/* Gradient verstärkt für bessere Textlesbarkeit auf Mobile */}
         <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-zinc-950/80" />
         
         <div className="relative z-10 max-w-4xl px-4 sm:px-6 text-center">
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-thin text-white leading-tight drop-shadow-lg">
              <span className="block mb-3 sm:mb-2 text-sm sm:text-xl font-medium tracking-[0.2em] text-zinc-400 uppercase">Philosophie</span>
              Technik ist wichtig. <br />
              <span className="text-white/90 italic font-serif mt-1 block">Gefühl ist alles.</span>
            </h3>
         </div>
      </section>

      {/* Testimonial Section - Redesigned */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-950/50 overflow-hidden transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-4xl font-thin tracking-tight text-center text-zinc-900 dark:text-zinc-50 mb-16 sm:text-5xl">
            Stimmen meiner Schüler*innen
          </h2>

          {/* Testimonial Slider Navigation */}
          <div className="-mx-4 sm:mx-0">
            <TestimonialSlider />
          </div>

        </div>
      </section>

      {/* Local SEO / Hannover */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-start">
            
            {/* Text Bereich */}
            <div>
              <h2 className="text-4xl font-thin tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl mb-8">
                Klavierunterricht in Hannover.
              </h2>
              <div className="space-y-6 text-xl font-light leading-relaxed text-zinc-600 dark:text-zinc-400">
                <p>
                  Suchst Du modernen, professionellen Klavierunterricht? 
                  Mitten in Hannover-List (30177) oder ganz flexibel bei Dir zu Hause.
                </p>
                <p>
                  Mein Ansatz verbindet technisches Fundament mit der Freude am Spiel – individuell, motivierend und immer ohne Druck.
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-8 py-4 text-lg font-light text-white transition-all hover:bg-zinc-800 hover:scale-[1.02] dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
                >
                  Schnupperstunde anfragen
                </Link>
                <Link
                  href="/ueber-mich"
                  className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-transparent px-8 py-4 text-lg font-light text-zinc-900 transition-all hover:bg-zinc-50 hover:scale-[1.02] dark:border-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-900"
                >
                  Mehr über mich
                </Link>
              </div>
            </div>

            {/* Info Details - Minimalist List */}
            <div className="lg:mt-4 space-y-8 border-l border-zinc-200 pl-8 lg:pl-16 dark:border-zinc-800">
               <div>
                  <h3 className="text-sm font-medium uppercase tracking-widest text-zinc-400 mb-2">Ort</h3>
                  <p className="text-2xl font-light text-zinc-900 dark:text-zinc-50">Hannover (30177)</p>
                  <p className="mt-1 text-lg text-zinc-500 font-light">Zuhause, Lehrraum oder Online</p>
               </div>
               
               <div>
                  <h3 className="text-sm font-medium uppercase tracking-widest text-zinc-400 mb-2">Für Wen</h3>
                  <p className="text-2xl font-light text-zinc-900 dark:text-zinc-50">Kinder & Erwachsene</p>
                  <p className="mt-1 text-lg text-zinc-500 font-light">Vom Anfänger bis zum Fortgeschrittenen</p>
               </div>

               <div>
                  <h3 className="text-sm font-medium uppercase tracking-widest text-zinc-400 mb-2">Stil</h3>
                  <p className="text-2xl font-light text-zinc-900 dark:text-zinc-50">Klassik, Rock & Pop</p>
                  <p className="mt-1 text-lg text-zinc-500 font-light">Und Deine persönlichen Lieblingsstücke</p>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section - Redesigned */}
      <section className="py-12 sm:py-24 px-4">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-zinc-900 px-6 py-20 text-center sm:px-16 sm:py-24 relative">
          
          {/* Subtle Background Element */}
           <div 
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
               backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
               backgroundSize: '32px 32px'
            }}
           />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-thin tracking-tight text-white mb-8">
              Bereit für den ersten Ton?
            </h2>
            <p className="text-md sm:text-2xl font-thin text-zinc-300 mb-12 leading-relaxed">
              Finde heraus, wie viel Freude Musik machen kann. 
              Melde Dich jetzt für Deine günstige Schnupperstunde an.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-full bg-white px-10 py-5 text-lg font-light text-zinc-900 transition-all duration-300 hover:bg-zinc-200 hover:scale-105"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
