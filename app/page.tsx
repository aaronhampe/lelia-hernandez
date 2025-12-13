import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
           {/* Placeholder for a piano image */}
           <div className="w-full h-full bg-gradient-to-r from-gray-800 to-gray-900"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Klavierunterricht in Hannover
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Lelia Hernández San Martín
          </p>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            "Man irrt, wenn man denkt, dass mir meine Kunst so leicht geworden ist. Es gibt nicht leicht einen berühmtem Meister in der Musik, den ich nicht fleißig, oft mehrmals, studiert hatte." - Wolfgang Amadeus Mozart
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/kontakt" className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors">
              Kostenlose Schnupperstunde
            </Link>
            <Link href="/ueber-mich" className="bg-transparent border border-white text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-white hover:text-gray-900 transition-colors">
              Mehr erfahren
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Herzlich Willkommen</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Mein Name ist Lelia Hernández und ich erteile Klavierunterricht in Hannover. Egal ob Klassik, Rock, Pop... Gemeinsam bringen wir Ihre Lieblingssongs auf das Klavier!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Individueller Unterricht</h3>
              <p className="text-gray-600">
                Seit einigen Jahren erteile ich Einzelunterricht für Schülerinnen und Schüler jeder Altersstufe. Der Unterricht wird individuell an Ihre Interessen angepasst.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Flexibler Ort</h3>
              <p className="text-gray-600">
                Gerne komme ich persönlich zu Ihnen nach Hause. Alternativ unterrichte ich in meinem Lehrraum mit Flügel, Klavier und E-Piano oder online via Skype.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Spaß am Spiel</h3>
              <p className="text-gray-600">
                Meiner Ansicht nach ist es von höchster Wichtigkeit, dass Schülerinnen und Schüler Spaß an dem Klavierspiel haben, um erfolgreich zu werden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Das sagen meine Schüler</h2>
          <blockquote className="text-xl italic text-gray-700">
            "Toller und herzlicher Klavierunterricht! :) Kann ich jedem empfehlen."
          </blockquote>
          <p className="mt-4 font-semibold text-gray-900">- Aaron</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Bereit für die erste Stunde?</h2>
        <p className="text-xl mb-8">Melden Sie sich jetzt für eine kostenlose Schnupperstunde an.</p>
        <Link href="/kontakt" className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors">
          Kontakt aufnehmen
        </Link>
      </section>
    </div>
  );
}
