import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seite nicht gefunden | Lelia Hernández",
  description: "Die gewünschte Seite konnte leider nicht gefunden werden.",
};

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center bg-white px-4 text-center dark:bg-zinc-950">
      <h1 className="mb-4 text-9xl font-thin tracking-tighter text-zinc-200 dark:text-zinc-800">
        404
      </h1>
      <h2 className="mb-6 text-3xl font-light text-zinc-900 dark:text-zinc-50">
        Seite nicht gefunden
      </h2>
      <p className="mb-10 max-w-md text-lg font-light text-zinc-500 dark:text-zinc-400">
        Entschuldigung, die gesuchte Seite existiert nicht oder wurde verschoben.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-8 py-4 text-lg font-light text-white transition-all hover:bg-zinc-800 hover:scale-105 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
      >
        Zurück zur Startseite
      </Link>
    </main>
  );
}
