import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt | Lelia Hernández - Klavierunterricht Hannover",
  description: "Kontaktieren Sie Lelia Hernández für eine kostenlose Schnupperstunde oder weitere Informationen.",
};

export default function ContactPage() {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">Kontakt</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Kontaktdaten</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                <strong className="block text-gray-900">Lelia Hernández San Martín</strong>
              </p>
              <p>
                30177 Hannover
              </p>
              <p>
                <strong className="text-gray-900">Telefon:</strong> 0511/629305
              </p>
              <p className="pt-4">
                Ich freue mich auf Sie!
              </p>
              <p>
                Für weitere Nachfragen oder Informationen, kontaktieren Sie mich gerne mithilfe des Formulars.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Schreiben Sie mir</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  E-Mail-Adresse *
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Telefon
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Nachricht *
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Nachricht senden
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                * Pflichtfelder. Mit dem Absenden erklären Sie sich mit der Speicherung Ihrer Daten zur Kontaktaufnahme einverstanden.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
