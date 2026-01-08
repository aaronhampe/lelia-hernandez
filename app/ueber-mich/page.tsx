import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Über mich | Lelia Hernández - Klavierunterricht Hannover",
  description: "Erfahren Sie mehr über Lelia Hernández San Martín, ihre Ausbildung und Erfahrung als Klavierlehrerin und Konzertpianistin.",
};

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen pt-32 sm:pt-40 pb-24 dark:bg-zinc-950 transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-4">
        
        {/* Intro Header */}
        <div className="mb-16 sm:mb-24 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-thin tracking-tight text-zinc-900 dark:text-zinc-50 mb-8">
            Über mich.
          </h1>
          <p className="text-xl font-light text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Musik begleitet mich seit meiner Kindheit. Erfahre mehr über meinen Weg von Santiago de Chile nach Hannover.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
           
           {/* Image Section - Sticky auf Desktop */}
           <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl bg-zinc-100 shadow-xl shadow-zinc-200/50 dark:bg-zinc-900 dark:shadow-none lg:sticky lg:top-40">
             <Image
                src="/images/lelia-hernandez-klavierunterricht-hannover.webp"
                alt="Lelia Hernández - Klavierunterricht in Hannover"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
             />
             {/* Overlay for depth */}
             <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl pointer-events-none" />
           </div>

           {/* Content Section */}
           <div className="space-y-12">
              
              {/* Werdegang */}
              <section>
                <h2 className="text-2xl font-thin tracking-tight text-zinc-900 dark:text-zinc-50 mb-6">
                  Mein musikalischer Werdegang
                </h2>
                <div className="space-y-4 text-lg font-light leading-relaxed text-zinc-600 dark:text-zinc-300">
                  <p>
                    Mein Name ist Lelia Hernández San Martín. Ich bin in Santiago de Chile geboren und aufgewachsen. Seit 1988 lebe ich in Hannover und erteile mit Freude freiberuflichen Klavierunterricht.
                  </p>
                  <p>
                    Schon mit vier Jahren erhielt ich die ersten Klavierstunden von meiner Mutter, die selbst Konzertpianistin war. Später wurde ich von einer Schülerin des bekannten Pianisten Claudio Arrau unterrichtet, was meine Leidenschaft für das Instrument endgültig entfachte.
                  </p>
                  <p>
                    Es folgten Auftritte im chilenischen Fernsehen und Preise bei Wettbewerben. Mit 17 Jahren begann ich mein Klavierstudium an der katholischen Universität Santiago de Chile und erhielt später ein Stipendium für die Universidad Internacional Menéndez Pelayo in Spanien.
                  </p>
                  <p>
                     Im Rahmen von Master-Kursen renommierter Pianisten wie Lev Vlasenco, Joaquín Soriano oder Alicia de Larrocha konnte ich meine künstlerischen Fähigkeiten stetig erweitern.
                  </p>
                </div>
              </section>

              {/* Erfahrung */}
              <section>
                <h2 className="text-2xl font-thin tracking-tight text-zinc-900 dark:text-zinc-50 mb-6">
                  Erfahrung & Praxis
                </h2>
                <div className="space-y-4 text-lg font-light leading-relaxed text-zinc-600 dark:text-zinc-300">
                  <p>
                    Meine Tätigkeit als Klavierlehrerin begann bereits während meines Studiums an der Hochschule für Musik und Theater in Hannover. 
                  </p>
                  <p>
                     Durch langjährige Unterrichtspraxis habe ich viel Erfahrung gesammelt – sowohl mit Kindern, die ihre allerersten Töne spielen, als auch mit fortgeschrittenen Erwachsenen, die ihre Technik verfeinern möchten.
                  </p>
                </div>
              </section>

               {/* Philosophie Box */}
              <section className="bg-zinc-50 rounded-3xl p-8 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800">
                <h2 className="text-2xl font-thin tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
                  Meine Philosophie
                </h2>
                <p className="text-lg font-light leading-relaxed text-zinc-600 dark:text-zinc-300 italic">
                  „Meiner Ansicht nach ist es von höchster Wichtigkeit, dass Schülerinnen und Schüler Spaß am Spiel haben. Nur so stellt sich Erfolg ein und nur so gelingt es, die eigenen Lieblingsstücke zum Klingen zu bringen.“
                </p>
              </section>

           </div>
        </div>
      </div>
    </main>
  );
}
