import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum | Lelia Hernández - Klavierunterricht Hannover',
  description: 'Impressum von Lelia Hernández San Martín, Klavierlehrerin aus Hannover.',
};

export default function ImpressumPage() {
  return (
    <main className="bg-white min-h-screen pt-32 sm:pt-40 pb-24 dark:bg-zinc-950 transition-colors duration-300">
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="text-3xl sm:text-4xl font-thin tracking-tight text-zinc-900 dark:text-zinc-50 mb-12">
          Impressum
        </h1>

        <div className="prose prose-zinc dark:prose-invert font-light">
          <section className="mb-8">
            <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-50 mb-4">Angaben gemäß § 5 TMG</h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Lelia Hernández San Martín<br />
              Klavierunterricht<br />
              30177 Hannover
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-50 mb-4">Kontakt</h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Telefon: <a href="tel:0511629305" className="hover:text-zinc-900 dark:hover:text-zinc-200">0511 / 629305</a><br />
              E-Mail: <a href="mailto:info@beispiel.de" className="hover:text-zinc-900 dark:hover:text-zinc-200">lelia_hernandez@web.de</a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-50 mb-4">Redaktionell verantwortlich</h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Lelia Hernández San Martín<br />
              30177 Hannover
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-50 mb-4">Verbraucherstreitbeilegung</h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
