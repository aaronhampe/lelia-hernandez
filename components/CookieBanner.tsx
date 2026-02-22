"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Cookie } from "lucide-react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    Cookies.set("cookie-consent", "granted", { expires: 365 });
    setShowBanner(false);
    // Reload to inject Google Analytics script immediately
    window.location.reload();
  };

  const declineCookies = () => {
    Cookies.set("cookie-consent", "denied", { expires: 365 });
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 pb-safe sm:pb-6">
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-zinc-200 dark:bg-zinc-900 dark:ring-zinc-800">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4 sm:items-center">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800">
              <Cookie className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                Wir verwenden Cookies
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Diese Website nutzt Cookies, um Ihnen das bestmögliche Erlebnis zu bieten. 
                Dazu gehören funktionale Cookies sowie Cookies für Google Analytics, um die Nutzung zu analysieren.
              </p>
            </div>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <button
              onClick={declineCookies}
              className="rounded-lg px-4 py-2.5 text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800 transition-colors"
            >
              Nur notwendige
            </button>
            <button
              onClick={acceptCookies}
              className="rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors"
            >
              Alle akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
