"use client";

import { useState } from "react";
import {
  FileText,
  BookOpen,
  Quote,
  BrainCircuit,
  CalendarCheck,
  Network,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    number: "01",
    title: "PDF & Document Analyzer",
    description:
      "Upload PDFs, lecture slides, or research papers. AI extracts key concepts, definitions, summaries, and important figures automatically.",
  },
  {
    icon: BookOpen,
    number: "02",
    title: "Literature Review Helper",
    description:
      "Generate summaries across multiple papers. Highlight similarities, differences, and recurring themes for research papers and thesis prep.",
  },
  {
    icon: Quote,
    number: "03",
    title: "Citation & Reference Manager",
    description:
      "Auto-generate citations in APA, MLA, Chicago, or custom formats. Maintain a personal reference library and export with one click.",
  },
  {
    icon: BrainCircuit,
    number: "04",
    title: "Flashcard & Quiz Generator",
    description:
      "Turn AI-generated notes into interactive flashcards. Generate multiple-choice, short-answer, and cloze-deletion quizzes with adaptive difficulty.",
  },
  {
    icon: CalendarCheck,
    number: "05",
    title: "Active Recall & Study Planner",
    description:
      "Track weak topics, get personalized spaced repetition plans, and monitor your progress with an analytics dashboard.",
  },
  {
    icon: Network,
    number: "06",
    title: "Cross-PDF Concept Mapping",
    description:
      "Automatically map relationships between concepts across PDFs. Visualize dependencies and hierarchies for complex subjects.",
  },
];

export function Features() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="features" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent">
              Capabilities
            </span>
            <h2 className="mt-3 max-w-md font-heading text-4xl leading-tight text-foreground md:text-5xl text-balance">
              Six tools, one workflow
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground md:text-right">
            Every feature is designed to eliminate friction between reading and
            retaining academic material.
          </p>
        </div>

        <div className="mt-6 h-px bg-border" aria-hidden="true" />

        {/* Feature list */}
        <div className="mt-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isActive = activeIndex === index;
            const isFaded = activeIndex !== null && !isActive;

            return (
              <div key={feature.title}>
                <div
                  className={`flex cursor-default flex-col gap-6 py-8 md:flex-row md:items-start md:gap-12 transition-all duration-500 ${
                    isActive
                      ? "pl-6 bg-primary text-primary-foreground -mx-6 px-6 md:-mx-8 md:px-8"
                      : isFaded
                        ? "opacity-30"
                        : ""
                  }`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  {/* Number + icon */}
                  <div className="flex items-center gap-4 md:w-48 md:shrink-0">
                    <span
                      className={`font-heading text-3xl transition-colors duration-300 ${
                        isActive ? "text-accent" : "text-border"
                      }`}
                    >
                      {feature.number}
                    </span>
                    <Icon
                      className={`h-5 w-5 transition-all duration-500 ${
                        isActive
                          ? "text-accent scale-125 rotate-6"
                          : "text-muted-foreground"
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 items-start justify-between gap-4">
                    <div>
                      <h3
                        className={`font-heading text-xl md:text-2xl transition-colors duration-300 ${
                          isActive ? "text-accent" : "text-foreground"
                        }`}
                      >
                        {feature.title}
                      </h3>
                      <div
                        className={`overflow-hidden transition-all duration-700 ease-in-out ${
                          isActive
                            ? "max-h-32 opacity-100 mt-3"
                            : "max-h-0 opacity-0 mt-0"
                        }`}
                      >
                        <p
                          className={`max-w-lg text-sm leading-relaxed ${
                            isActive
                              ? "text-primary-foreground/70"
                              : "text-muted-foreground"
                          }`}
                        >
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    {/* Arrow */}
                    <ArrowUpRight
                      className={`mt-1 h-5 w-5 shrink-0 transition-all duration-500 ${
                        isActive
                          ? "opacity-100 text-accent translate-x-1 -translate-y-1"
                          : "opacity-0"
                      }`}
                    />
                  </div>
                </div>
                {index < features.length - 1 && (
                  <div
                    className={`h-px transition-colors duration-300 ${
                      isActive || activeIndex === index + 1
                        ? "bg-transparent"
                        : "bg-border/60"
                    }`}
                    aria-hidden="true"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
