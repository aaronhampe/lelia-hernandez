"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function TestimonialSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const testimonials = [
    {
      name: "Aaron",
      text: "Toller und herzlicher Klavierunterricht! :) Kann ich jedem empfehlen.",
      initial: "A",
    },
    {
      name: "Lina",
      text: "Ich liebe den Unterricht bei Lelia. Es läuft ohne Druck und trotzdem lerne ich viel.",
      initial: "L",
    },
    {
      name: "Marie",
      text: "Ich kann Lelia jedem weiterempfehlen. Sie ist eine liebe Lehrerin. Der Klavierunterricht macht wirklich Spaß bei ihr.",
      initial: "M",
    },
    {
      name: "Leon",
      text: "Ich habe viel bei Lelia gelernt! Sie macht tollen Klavierunterricht.",
      initial: "L",
    },
    {
      name: "Adrian",
      text: "Netter Unterricht und immer ohne Druck und mit Spaß am Spiel.",
      initial: "A",
    },
  ];

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6 pb-8 px-4 sm:px-0 md:gap-8 md:pb-12">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex-[0_0_85vw] md:flex-[0_0_500px] min-w-0 relative flex flex-col justify-between bg-white dark:bg-zinc-900 p-10 md:p-12 rounded-3xl border border-zinc-100 dark:border-zinc-800 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)] dark:shadow-none transition-all cursor-grab active:cursor-grabbing hover:scale-[1.01]"
            >
              {/* Dekoratives Anführungszeichen im Hintergrund */}
              <div className="absolute top-6 right-8 text-9xl font-serif text-zinc-50 dark:text-zinc-800 pointer-events-none select-none opacity-60">
                &rdquo;
              </div>

              <blockquote className="relative z-10">
                <p className="text-xl md:text-2xl font-thin italic leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {t.text}
                </p>
              </blockquote>

              <div className="mt-8 flex items-center gap-4 border-t border-zinc-50 dark:border-zinc-800 pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 text-zinc-400 dark:text-zinc-300 font-light text-lg">
                  {t.initial}
                </div>
                <div>
                  <cite className="not-italic text-sm font-semibold uppercase tracking-widest text-zinc-900 dark:text-zinc-50">
                    {t.name}
                  </cite>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-2">
        <button
          onClick={scrollPrev}
          className="p-3 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 dark:focus:ring-offset-zinc-950"
          aria-label="Vorherige Bewertung"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={scrollNext}
          className="p-3 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 dark:focus:ring-offset-zinc-950"
          aria-label="Nächste Bewertung"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
