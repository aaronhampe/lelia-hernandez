import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Lelia Hernández</h3>
            <p className="text-gray-300">
              Professioneller Klavierunterricht in Hannover für alle Altersstufen und Niveaus.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <p className="text-gray-300">30177 Hannover</p>
            <p className="text-gray-300">Tel: 0511/629305</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white">Startseite</Link></li>
              <li><Link href="/ueber-mich" className="text-gray-300 hover:text-white">Über mich</Link></li>
              <li><Link href="/kontakt" className="text-gray-300 hover:text-white">Kontakt</Link></li>
              <li><a href="https://www.facebook.com/lelia.hernandez.9" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Lelia Hernández. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
