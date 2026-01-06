import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Wo findet der Klavierunterricht statt?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Der Unterricht ist flexibel möglich: bei Ihnen zuhause in Hannover, in meinem Lehrraum oder online.",
        },
      },
      {
        "@type": "Question",
        name: "Ist der Unterricht für Anfänger geeignet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja. Ich unterrichte Kinder und Erwachsene – von Anfängerinnen und Anfängern bis Fortgeschrittene.",
        },
      },
      {
        "@type": "Question",
        name: "Gibt es eine Schnupperstunde?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja – Sie können eine kostenlose Schnupperstunde vereinbaren.",
        },
      },
      {
        "@type": "Question",
        name: "Welche Musikrichtungen werden unterrichtet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Je nach Ziel: Klassik sowie Rock & Pop – wir arbeiten an Technik und musikalischem Ausdruck und an Ihren Lieblingsstücken.",
        },
      },
      {
        "@type": "Question",
        name: "Wie kann ich Kontakt aufnehmen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Am schnellsten über die Kontaktseite oder telefonisch.",
        },
      },
    ],
  };
  
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Section mit Video Background */}
      <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          poster="/images/lelia-hernandez-klavier-hannover.webp"
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
            Klavierunterricht mit Herz.
          </h1>
          <p className="mt-6 text-xl text-white/90 sm:text-2xl font-thin tracking-wide">
            Lelia Hernández San Martín • Hannover
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/kontakt"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 sm:text-lg font-light text-zinc-950 transition-all duration-300 hover:bg-zinc-100 hover:scale-105"
            >
              <span>Kostenlose Schnupperstunde</span>
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
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center mb-24">
            
            {/* Bild Bereich */}
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 overflow-hidden rounded-2xl bg-zinc-100">
               <Image
                src="/images/lelia-hernandez-klavier-hannover.webp"
                alt="Lelia Hernández am Klavier"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {/* Optional: Design-Element für mehr Tiefe */}
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl" />
            </div>

            {/* Text Bereich */}
            <div className="text-left">
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
                  Gemeinsam entwickeln wir Ihre musikalischen Fähigkeiten, von den technischen Grundlagen bis hin zur künstlerischen Reife.
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
                      <p className="mt-1 text-base font-light text-zinc-500 dark:text-zinc-400">Abgestimmt auf Ihre Interessen, für jedes Alter & Niveau.</p>
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
                      <p className="mt-1 text-base font-light text-zinc-500 dark:text-zinc-400">Unterricht bei Ihnen zu Hause, im Lehrraum oder online.</p>
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
          </div>
        </div>
      </section>

      {/* Local SEO / Hannover */}
      <section className="mt-16 pb-6 sm:pb-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                Klavierunterricht in Hannover
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
                Sie suchen modernen, professionellen Klavierunterricht in
                Hannover? Ich unterrichte in Hannover (30177) und flexibel nach
                Absprache – individuell, motivierend und ohne Druck.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-zinc-800 transition-colors dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
                >
                  Schnupperstunde anfragen
                </Link>
                <Link
                  href="/ueber-mich"
                  className="inline-flex items-center justify-center rounded-full bg-white/70 px-6 py-3 text-base font-semibold text-zinc-900 ring-1 ring-black/10 backdrop-blur hover:bg-white transition-colors dark:bg-zinc-900/60 dark:text-zinc-50 dark:ring-white/10 dark:hover:bg-zinc-900"
                >
                  Mehr über mich
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-white/70 p-6 ring-1 ring-black/5 backdrop-blur dark:bg-zinc-900/50 dark:ring-white/10">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                      Ort
                    </p>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                      Hannover (30177) • Zuhause / Lehrraum / online
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                      Für wen
                    </p>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                      Kinder & Erwachsene • Anfänger & Fortgeschrittene
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                      Stil
                    </p>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                      Klassik • Rock & Pop • Lieblingsstücke
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Testimonial Section */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl bg-white/70 p-8 sm:p-10 ring-1 ring-black/5 backdrop-blur dark:bg-zinc-900/50 dark:ring-white/10">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 mb-8 text-center">
              Das sagen meine Schüler*innen
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <figure className="group relative rounded-2xl bg-white/70 p-6 ring-1 ring-black/5 backdrop-blur transition-all duration-300 hover:shadow-lg hover:shadow-zinc-900/5 dark:bg-zinc-950/30 dark:ring-white/10">
                <svg
                  className="absolute top-4 right-4 h-8 w-8 text-zinc-200 dark:text-zinc-700"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                ></svg>
                <blockquote className="text-base italic leading-relaxed text-zinc-700 dark:text-zinc-200">
                  „Toller und herzlicher Klavierunterricht! :) Kann ich jedem
                  empfehlen.“
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                    <span className="text-sm font-semibold text-zinc-600 dark:text-zinc-300">
                      A
                    </span>
                  </div>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-50">
                    Aaron
                  </span>
                </figcaption>
              </figure>

              <figure className="group relative rounded-2xl bg-white/70 p-6 ring-1 ring-black/5 backdrop-blur transition-all duration-300 hover:shadow-lg hover:shadow-zinc-900/5 dark:bg-zinc-950/30 dark:ring-white/10">
                <svg
                  className="absolute top-4 right-4 h-8 w-8 text-zinc-200 dark:text-zinc-700"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                ></svg>
                <blockquote className="text-base italic leading-relaxed text-zinc-700 dark:text-zinc-200">
                  „Ich liebe den Unterricht bei Lelia. Es läuft ohne Druck und
                  trotzdem lerne ich viel.“
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                    <span className="text-sm font-semibold text-zinc-600 dark:text-zinc-300">
                      L
                    </span>
                  </div>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-50">
                    Lina
                  </span>
                </figcaption>
              </figure>

              <figure className="group relative rounded-2xl bg-white/70 p-6 ring-1 ring-black/5 backdrop-blur transition-all duration-300 hover:shadow-lg hover:shadow-zinc-900/5 dark:bg-zinc-950/30 dark:ring-white/10">
                <svg
                  className="absolute top-4 right-4 h-8 w-8 text-zinc-200 dark:text-zinc-700"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                ></svg>
                <blockquote className="text-base italic leading-relaxed text-zinc-700 dark:text-zinc-200">
                  „Ich kann Lelia jedem weiterempfehlen. Sie ist eine liebe
                  Lehrerin. Der Klavierunterricht macht wirklich Spaß bei ihr.“
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                    <span className="text-sm font-semibold text-zinc-600 dark:text-zinc-300">
                      M
                    </span>
                  </div>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-50">
                    Marie
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl bg-white/70 p-8 sm:p-10 ring-1 ring-black/5 backdrop-blur dark:bg-zinc-900/50 dark:ring-white/10">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
              Häufige Fragen
            </h2>

            <dl className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-white/70 p-6 ring-1 ring-black/5 backdrop-blur dark:bg-zinc-950/30 dark:ring-white/10">
                <dt className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                  Wo findet der Klavierunterricht statt?
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                  Flexibel: bei Ihnen zuhause in Hannover, in meinem Lehrraum
                  oder online.
                </dd>
              </div>

              <div className="rounded-2xl bg-white/70 p-6 ring-1 ring-black/5 backdrop-blur dark:bg-zinc-950/30 dark:ring-white/10">
                <dt className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                  Ist der Unterricht für Anfänger geeignet?
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                  Ja. Ich unterrichte Kinder und Erwachsene – vom Einstieg bis
                  fortgeschrittenes Niveau.
                </dd>
              </div>

              <div className="rounded-2xl bg-white/70 p-6 ring-1 ring-black/5 backdrop-blur dark:bg-zinc-950/30 dark:ring-white/10">
                <dt className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                  Gibt es eine Schnupperstunde?
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                  Ja – Sie können eine kostenlose Schnupperstunde vereinbaren.
                  Am besten direkt über{" "}
                  <Link
                    href="/kontakt"
                    className="font-semibold text-zinc-900 underline underline-offset-4 hover:text-zinc-700 transition-colors dark:text-zinc-50 dark:hover:text-zinc-200"
                  >
                    Kontakt
                  </Link>
                  .
                </dd>
              </div>

              <div className="rounded-2xl bg-white/70 p-6 ring-1 ring-black/5 backdrop-blur dark:bg-zinc-950/30 dark:ring-white/10">
                <dt className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                  Welche Musikrichtungen werden unterrichtet?
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                  Klassik sowie Rock &amp; Pop – wir arbeiten an Technik,
                  Ausdruck und Ihren Lieblingsstücken.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl bg-zinc-950 px-8 py-12 text-center text-white shadow-xl dark:bg-white dark:text-zinc-950">
            <h2 className="text-3xl font-semibold tracking-tight mb-3">
              Bereit für die erste Stunde?
            </h2>
            <p className="text-lg text-white/80 dark:text-zinc-600 mb-8 max-w-xl mx-auto">
              Melden Sie sich jetzt für eine kostenlose Schnupperstunde an und
              entdecken Sie Ihre Leidenschaft für das Klavier.
            </p>
            <Link
              href="/kontakt"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-base font-semibold text-zinc-900 hover:bg-zinc-100 transition-all duration-200 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
            >
              <span>Kontakt aufnehmen</span>
              <svg
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
