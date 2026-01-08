import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unterricht & Konzept | Klavierunterricht Hannover",
  description: "Erfahren Sie mehr über mein Unterrichtskonzept. Individueller Klavierunterricht in Hannover: Klassik, Pop, Theorie & Gehörbildung für alle Altersgruppen.",
};

export default function UnterrichtPage() {
  const offerings = [
    {
      title: "Klassik bis Pop",
      description: "Von Bach bis zu den Beatles. Wir spielen, was Dich begeistert, ohne die Grundlagen zu vernachlässigen.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      ),
    },
    {
      title: "Gehörbildung & Theorie",
      description: "Musik verstehen lernen. Wir trainieren das Gehör und tauchen spielerisch in die Harmonielehre ein.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      title: "Flexibler Ort",
      description: "Unterricht bei Dir zu Hause in Hannover, in meinem Lehrraum oder bequem online via Zoom/Teams.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-white dark:bg-zinc-950 transition-colors duration-500">
      
      {/* 1. Philosophical Hero */}
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 px-4 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
           <div className="absolute top-0 left-1/4 -translate-x-1/2 -mt-20 h-[600px] w-[600px] rounded-full bg-zinc-100 dark:bg-zinc-900/30 blur-3xl opacity-80" />
        </div>

        <div className="mx-auto max-w-4xl text-center relative z-10">
          <span className="inline-block mb-6 text-sm font-medium tracking-[0.2em] text-zinc-400 uppercase">
            Unterrichtskonzept
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-thin tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight mb-8">
            Das Herz hört mit.
          </h1>
          <p className="text-xl md:text-2xl font-light text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Technik ist das Fundament. Gefühl ist die Architektur. <br className="hidden md:block" />
            Mein Ziel ist es, beides zu vereinen – mit Freude als wichtigstem Baustein.
          </p>
        </div>
      </section>

      {/* 2. Visual Storytelling Section */}
      <section className="py-12 lg:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* Image Side - Editorial Style */}
            <div className="relative order-2 lg:order-1">
               <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900 shadow-2xl shadow-zinc-200 dark:shadow-none">
                 <Image
                    src="/images/lelia-hernandez-klavierunterricht-hannover-mit-schuelerin.webp"
                    alt="Lelia Hernández beim Klavierunterricht mit einer Schülerin"
                    fill
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                 />
                 {/* Decorative Overlay Gradient */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
               </div>
               
               {/* Floating Quote Badge */}
               <div className="absolute -bottom-6 -right-4 md:bottom-12 md:-right-12 max-w-xs p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-xl border border-zinc-100 dark:border-zinc-800">
                  <p className="text-sm md:text-base font-light italic text-zinc-600 dark:text-zinc-300">
                    &quot;Es geht nicht darum, perfekt zu spielen. Es geht darum, authentisch zu fühlen.&quot;
                  </p>
               </div>
            </div>

            {/* Text Side */}
            <div className="order-1 lg:order-2 lg:pl-10">
              <h2 className="text-3xl md:text-4xl font-thin text-zinc-900 dark:text-zinc-50 mb-8">
                So gestalten wir deinen Weg.
              </h2>
              <div className="space-y-6 text-lg font-light text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <p>
                  Jede*r Schüler*in ist einzigartig. Deshalb gibt es bei mir keinen &quot;Unterricht von der Stange&quot;. 
                  Egal ob du Anfänger bist oder schon Erfahrung mitbringst – wir holen dich genau dort ab, wo du stehst.
                </p>
                <p>
                  In meinen Stunden legen wir Wert auf eine entspannte Atmosphäre. Stress und Druck haben hier keinen Platz. 
                  Stattdessen fördern wir Neugierde. Wir experimentieren mit Klängen, verstehen die Musiktheorie durch Praxis 
                  und erarbeiten Stücke, die dir wirklich am Herzen liegen.
                </p>
                <p>
                  Das Wichtigste dabei: Der Spaß an der Sache ist unabdingbar. Denn nur wer Freude empfindet, bleibt motiviert am Ball.
                </p>
              </div>

               <div className="mt-10">
                 <Link 
                   href="/kontakt" 
                   className="inline-flex items-center text-lg font-medium text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
                 >
                   Probestunde vereinbaren
                   <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                   </svg>
                 </Link>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Offerings Grid - Dark Mode Optimized */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900/30 border-y border-zinc-100 dark:border-zinc-800/50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 md:text-center max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-4xl font-thin text-zinc-900 dark:text-zinc-50 mb-6">
                Alles möglich, alles flexibel.
             </h2>
             <p className="text-lg font-light text-zinc-500 dark:text-zinc-400">
               Mein Unterricht richtet sich ganz nach Deinen Lebensumständen.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offerings.map((item, idx) => (
              <div key={idx} className="group p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-none hover:-translate-y-1">
                <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-50 mb-3">
                  {item.title}
                </h3>
                <p className="text-base font-light text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* FAQ / Details Section */}
       <section className="py-24">
          <div className="mx-auto max-w-4xl px-4">
             <div className="rounded-[2rem] bg-zinc-900 dark:bg-zinc-800 p-8 md:p-12 text-center text-white relative overflow-hidden">
                {/* Decorative Background Pattern */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                
                <h2 className="relative z-10 text-3xl font-thin mb-8">Bereit loszulegen?</h2>
                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-8 text-left max-w-2xl mx-auto mb-12">
                   <div>
                      <h4 className="text-zinc-400 text-sm font-bold uppercase tracking-wider mb-2">Dauer</h4>
                      <p className="font-light text-lg">30, 45 oder 60 Minuten</p>
                   </div>
                   <div>
                       <h4 className="text-zinc-400 text-sm font-bold uppercase tracking-wider mb-2">Sprachen</h4>
                      <p className="font-light text-lg">Deutsch & Spanisch</p>
                   </div>
                   <div>
                       <h4 className="text-zinc-400 text-sm font-bold uppercase tracking-wider mb-2">Wo</h4>
                      <p className="font-light text-lg">Hannover (30177) <br/> <span className="text-zinc-500 text-base">oder Online</span></p>
                   </div>
                   <div>
                       <h4 className="text-zinc-400 text-sm font-bold uppercase tracking-wider mb-2">Preise</h4>
                      <p className="font-light text-lg">Auf Anfrage</p>
                   </div>
                </div>

                <Link
                  href="/kontakt"
                  className="relative z-10 inline-flex items-center justify-center rounded-full bg-white text-zinc-900 px-8 py-4 font-medium transition-transform hover:scale-105 active:scale-95"
                >
                  Schnupperstunde buchen
                </Link>
             </div>
          </div>
       </section>

    </div>
  );
}

