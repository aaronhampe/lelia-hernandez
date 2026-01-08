import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | Lelia Hernández - Klavierunterricht Hannover',
  description: 'Informationen zum Datenschutz auf der Webseite von Lelia Hernández.',
};

export default function DatenschutzPage() {
  return (
    <main className="bg-white min-h-screen pt-32 sm:pt-40 pb-24 dark:bg-zinc-950 transition-colors duration-300">
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="text-3xl sm:text-4xl font-thin tracking-tight text-zinc-900 dark:text-zinc-50 mb-12">
          Datenschutzerklärung
        </h1>

        <div className="space-y-12 text-zinc-600 dark:text-zinc-400 font-light">
          
          <section>
            <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-50 mb-4">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-200 mb-2 mt-6">Allgemeine Hinweise</h3>
            <p className="mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
            <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-200 mb-2 mt-6">Datenerfassung auf dieser Website</h3>
            <p className="mb-2"><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong></p>
            <p className="mb-4">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>
            <p className="mb-2"><strong>Wie erfassen wir Ihre Daten?</strong></p>
            <p className="mb-4">
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
            </p>
            <p className="mb-4">
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-50 mb-4">2. Hosting</h2>
            <p className="mb-4">
              Wir hosten die Inhalte unserer Website bei einem externen Anbieter (Host). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosts gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Webseitenzugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
            </p>
            <p className="mb-4">
              Der Einsatz des Hosts erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-50 mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-200 mb-2 mt-6">Datenschutz</h3>
            <p className="mb-4">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-200 mb-2 mt-6">Hinweis zur verantwortlichen Stelle</h3>
            <p className="mb-4">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="mb-4">
              Lelia Hernández San Martín<br />
              Musterstraße 1<br />
              30177 Hannover
            </p>
            <p className="mb-4">
              Telefon: 0511 / 629305<br />
              E-Mail: info@beispiel.de
            </p>
            <p className="mb-4">
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-50 mb-4">4. Datenerfassung auf dieser Website</h2>
            <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-200 mb-2 mt-6">Kontaktformular per Formspree</h3>
            <p className="mb-4">
              Soweit Sie das auf unserer Website angebotene Kontaktformular nutzen, erfolgt die Übermittlung der dort eingegebenen Daten über den Dienstleister Formspree, Inc., 21750 Hardy Oak Blvd San Antonio, TX 78258, USA. Wir haben mit Formspree einen Vertrag zur Auftragsverarbeitung abgeschlossen.
            </p>
            <p className="mb-4">
              Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
            </p>
            <p className="mb-4">
              Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt somit ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns.
            </p>
            <p className="mb-4">
              Weitere Informationen zum Datenschutz bei Formspree finden Sie unter: <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline hover:text-zinc-900 dark:hover:text-zinc-200">https://formspree.io/legal/privacy-policy</a>
            </p>

            <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-200 mb-2 mt-6">Anfrage per E-Mail, Telefon oder Telefax</h3>
            <p className="mb-4">
              Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
