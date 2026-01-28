import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dankeschön! | Lelia Hernández - Klavierunterricht Hannover",
  description: "Vielen Dank für Ihre Nachricht.",
};

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-4 dark:bg-zinc-950 transition-colors duration-300">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="mb-8 text-4xl font-thin tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl md:text-6xl">
          Dankeschön!
        </h1>
        <p className="mb-12 text-xl font-light leading-relaxed text-zinc-500 dark:text-zinc-400">
          Vielen Dank für deine Nachricht. Ich habe sie erhalten und werde mich in spätestens drei Tagen bei dir melden.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-8 py-3 text-lg font-medium text-white transition-transform hover:bg-zinc-800 hover:scale-105 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Zurück zur Startseite
        </Link>
      </div>
    </main>
  );
}
