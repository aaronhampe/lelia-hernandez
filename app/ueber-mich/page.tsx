import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über mich | Lelia Hernández - Klavierunterricht Hannover",
  description: "Erfahren Sie mehr über Lelia Hernández San Martín, ihre Ausbildung und Erfahrung als Klavierlehrerin und Konzertpianistin.",
};

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 mb-8 text-center">Über mich</h1>
        
        <div className="prose prose-lg mx-auto text-zinc-600 dark:text-zinc-300">
          <p className="mb-6">
            Mein Name ist <strong>Lelia Hernández San Martín</strong>. Ich bin in Santiago de Chile geboren und aufgewachsen. Seit 1988 lebe ich in Hannover und erteile mit Freude freiberuflichen Klavierunterricht.
          </p>

          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 mt-8 mb-4">Mein musikalischer Werdegang</h2>
          <p className="mb-4">
            Im Alter von vier Jahren erhielt ich die ersten Klavierstunden von meiner Mutter, die selbst Konzertpianistin war. Zwei Jahre später unterrichtete mich eine Schülerin des bekannten Pianisten Claudio Arrau. Kurz darauf entdeckte ich meine große Leidenschaft für das Klavierspielen.
          </p>
          <p className="mb-4">
            Ich hatte einige Auftritte im chilenischen Fernsehen und gewann Preise bei Klavierwettbewerben. Mit 17 Jahren begann ich mein Studium als Pianistin an der katholischen Universität Santiago de Chile.
          </p>
          <p className="mb-4">
            Mit 18 Jahren erhielt ich ein Stipendium in Spanien, an der Universidad Internacional Menéndez Pelayo.
          </p>
          <p className="mb-4">
            Im Rahmen von Master-Kursen von Pianisten und Professoren, z. B. Lev Vlasenco, Joaquín Soriano, Roberto Bravo, Edith Fischer, Alicia de Larrocha, erweiterte ich meine Fähigkeiten und mein Wissen über das Klavier.
          </p>

          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 mt-8 mb-4">Unterrichtserfahrung</h2>
          <p className="mb-4">
            Meine freiberufliche Tätigkeit als Klavierlehrerin begann zeitgleich mit meinem Studium an der Hochschule für Musik und Theater in Hannover. Nach langjähriger Unterrichtspraxis habe ich jede Menge Erfahrung mit beginnenden, als auch mit fortgeschrittenen Schülern jeder Altersstufe gesammelt.
          </p>

          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 mt-8 mb-4">Meine Philosophie</h2>
          <p className="mb-6">
            Meiner Ansicht nach ist es von höchster Wichtigkeit, dass Schülerinnen und Schüler Spaß an dem Klavierspiel haben, um erfolgreich zu werden, oder die eigenen Lieblingsstücke auf das Klavier zu bringen. Vor dem Hintergrund verläuft mein Unterricht angepasst an das individuelle Interesse der Schülerin und des Schülers.
          </p>
        </div>
      </div>
    </div>
  );
}
