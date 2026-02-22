"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function Analytics() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("cookie-consent");
    if (consent === "granted") {
      setHasConsent(true);
    }
  }, []);

  if (!hasConsent) return null;

  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  if (!GA_ID) {
    console.warn(
      "Google Analytics is ready to track, but the tracking ID is missing. " +
      "Please set NEXT_PUBLIC_GA_ID in your environment variables (.env.local)."
    );
    return null;
  }

  return <GoogleAnalytics gaId={GA_ID} />;
}
