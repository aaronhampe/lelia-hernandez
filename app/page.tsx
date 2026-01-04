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
            backgroundImage: 'radial-gradient(rgba(61, 56, 56, 0.3) 1px, transparent 1px)',
            backgroundSize: '4px 4px'
          }}
        />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className="text-5xl font-thin tracking-tight text-white sm:text-7xl lg:text-8xl drop-shadow-sm">
            Klavierunterricht mit Herz.
          </h1>
          <p className="mt-6 text-xl text-white/90 sm:text-2xl font-thin tracking-wide">
            Lelia Hernández San Martín • Hannover
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/kontakt"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-light text-zinc-950 transition-all duration-300 hover:bg-zinc-100 hover:scale-105"
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
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <Link
              href="/ueber-mich"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-4 text-lg font-light text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105"
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
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
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

      {/* Introduction Section */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 mb-4">
              Herzlich willkommen
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto">
              Mein Name ist Lelia Hernández und ich erteile Klavierunterricht in
              Hannover. Egal ob Klassik, Rock, Pop... Gemeinsam bringen wir Ihre
              Lieblingssongs auf das Klavier!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group rounded-2xl bg-white/70 p-6 ring-1 ring-black/5 backdrop-blur transition-all duration-300 hover:shadow-lg hover:shadow-zinc-900/5 hover:-translate-y-1 dark:bg-zinc-900/50 dark:ring-white/10 dark:hover:shadow-white/5">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-zinc-600 transition-colors group-hover:bg-zinc-900 group-hover:text-white dark:bg-zinc-800 dark:text-zinc-300 dark:group-hover:bg-white dark:group-hover:text-zinc-900">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-zinc-900 dark:text-zinc-50">
                Individueller Unterricht
              </h3>
              <p className="text-zinc-600 dark:text-zinc-300">
                Seit einigen Jahren erteile ich Einzelunterricht für
                Schülerinnen und Schüler jeder Altersstufe. Der Unterricht wird
                individuell an Ihre Interessen angepasst.
              </p>
            </div>
            <div className="group rounded-2xl bg-white/70 p-6 ring-1 ring-black/5 backdrop-blur transition-all duration-300 hover:shadow-lg hover:shadow-zinc-900/5 hover:-translate-y-1 dark:bg-zinc-900/50 dark:ring-white/10 dark:hover:shadow-white/5">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-zinc-600 transition-colors group-hover:bg-zinc-900 group-hover:text-white dark:bg-zinc-800 dark:text-zinc-300 dark:group-hover:bg-white dark:group-hover:text-zinc-900">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-zinc-900 dark:text-zinc-50">
                Flexibler Ort
              </h3>
              <p className="text-zinc-600 dark:text-zinc-300">
                Gerne komme ich persönlich zu Ihnen nach Hause. Alternativ
                unterrichte ich in meinem Lehrraum mit Flügel, Klavier und
                E-Piano oder online via Skype.
              </p>
            </div>
            <div className="group rounded-2xl bg-white/70 p-6 ring-1 ring-black/5 backdrop-blur transition-all duration-300 hover:shadow-lg hover:shadow-zinc-900/5 hover:-translate-y-1 dark:bg-zinc-900/50 dark:ring-white/10 dark:hover:shadow-white/5">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-zinc-600 transition-colors group-hover:bg-zinc-900 group-hover:text-white dark:bg-zinc-800 dark:text-zinc-300 dark:group-hover:bg-white dark:group-hover:text-zinc-900">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-zinc-900 dark:text-zinc-50">
                Spaß am Spiel
              </h3>
              <p className="text-zinc-600 dark:text-zinc-300">
                Meiner Ansicht nach ist es von höchster Wichtigkeit, dass
                Schülerinnen und Schüler Spaß an dem Klavierspiel haben, um
                erfolgreich zu werden.
              </p>
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
