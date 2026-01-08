import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Häufige Fragen | Lelia Hernández Klavierunterricht",
  description:
    "Antworten auf Fragen zu Ort, Kosten, Schnupperstunden und Unterrichtsinhalten.",
};

export default function FAQPage() {
  const faqs = [
    {
      question: "Wo findet der Klavierunterricht statt?",
      answer:
        "Der Unterricht ist flexibel möglich: bei Dir zuhause in Hannover (30177), in meinem Lehrraum oder online.",
    },
    {
      question: "Ist der Unterricht für Anfänger geeignet?",
      answer:
        "Ja. Ich unterrichte Kinder und Erwachsene – von Anfängerinnen und Anfängern bis zu fortgeschrittenem Niveau.",
    },
    {
      question: "Wie viel kostet der Unterricht?",
      answer:
        "Die Preise richten sich nach dem gewählten Unterrichtsmodell (z.B. Dauer, Häufigkeit). Bitte schreibe mir oder rufe mich an für ein individuelles Angebot – Preis auf Anfrage.",
    },
    {
      question: "Gibt es eine Schnupperstunde?",
      answer: (
        <>
          Ich biete eine Probestunde an. Diese ist deutlich günstiger als
          normale Stunden. Kostenlose Schnupperstunden biete ich leider nicht
          mehr an - Es ist zu häufig ausgenutzt worden. Eine Probestunde buchen geht am besten über das{" "}
          <Link
            href="/kontakt"
            className="underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-900 transition-all dark:decoration-zinc-600 dark:hover:decoration-zinc-300"
          >
            Kontaktformular
          </Link>
          .
        </>
      ),
    },
    {
      question: "Welche Musikrichtungen werden unterrichtet?",
      answer:
        "Je nach Ziel: Klassik sowie Rock & Pop. Wir arbeiten an Technik, musikalischem Ausdruck und an Deinen Lieblingsstücken.",
    },
    {
      question: "Wie kann ich Kontakt aufnehmen?",
      answer: "Am schnellsten über die Kontaktseite oder telefonisch.",
    },
  ];

  return (
    <main className="bg-white min-h-screen pt-32 pb-24 dark:bg-zinc-950 transition-colors duration-300">
      <div className="mx-auto max-w-4xl px-4">
        {/* Header */}
        <div className="text-center mb-20 sm:mb-24">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-thin tracking-tight text-zinc-900 dark:text-zinc-50 mb-6">
            Häufige Fragen.
          </h1>
          <p className="text-xl font-light text-zinc-500 leading-relaxed max-w-2xl mx-auto dark:text-zinc-400">
            Hier findest Du Antworten auf die wichtigsten Fragen rund um den
            Klavierunterricht.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="rounded-3xl bg-zinc-50 p-8 sm:p-10 border border-zinc-100 transition-all hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:border-zinc-200/50 dark:bg-zinc-900/50 dark:border-zinc-800 dark:hover:border-zinc-700 dark:hover:shadow-none"
            >
              <h3 className="text-lg font-medium text-zinc-900 mb-3 dark:text-zinc-50">
                {item.question}
              </h3>
              <div className="text-base font-light leading-relaxed text-zinc-600 dark:text-zinc-300">
                {item.answer}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-24 text-center">
          <p className="text-lg font-light text-zinc-500 mb-8 dark:text-zinc-400">
            Deine Frage war nicht dabei?
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-10 py-4 text-lg font-light text-white transition-all hover:bg-zinc-800 hover:scale-105 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Frage stellen
          </Link>
        </div>
      </div>
    </main>
  );
}
