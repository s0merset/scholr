"use client";

import { useState } from "react";
import { Upload, Cpu, Layers, Rocket } from "lucide-react";

const steps = [
  {
    icon: Upload,
    number: "I",
    title: "Upload your documents",
    description:
      "Drag and drop PDFs, lecture slides, or research papers. Scholr accepts all major document formats.",
  },
  {
    icon: Cpu,
    number: "II",
    title: "AI processes everything",
    description:
      "Our AI reads, analyzes, and extracts key concepts, definitions, summaries, and citations from your materials.",
  },
  {
    icon: Layers,
    number: "III",
    title: "Choose your study mode",
    description:
      "Get structured notes, generate flashcards, take quizzes, or build a complete citation library.",
  },
  {
    icon: Rocket,
    number: "IV",
    title: "Study & retain more",
    description:
      "Use spaced repetition and active recall features to track progress and master every concept efficiently.",
  },
];

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section id="how-it-works" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent">
              Process
            </span>
            <h2 className="mt-3 max-w-md font-heading text-4xl leading-tight text-foreground md:text-5xl text-balance">
              Four steps to mastery
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground md:text-right">
            A simple, repeatable workflow that turns any document into deep
            understanding.
          </p>
        </div>

        <div className="mt-6 h-px bg-border" aria-hidden="true" />

        {/* Steps */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isActive = activeStep === i;
            const isFaded = activeStep !== null && !isActive;

            return (
              <div
                key={step.title}
                className={`flex gap-6 rounded-sm border p-6 cursor-default transition-all duration-700 ${
                  isActive
                    ? "border-accent bg-accent/5 shadow-[0_8px_40px_-12px] shadow-accent/15 -translate-y-2 scale-[1.02]"
                    : isFaded
                      ? "border-border/30 opacity-30 scale-[0.98]"
                      : "border-transparent"
                }`}
                onMouseEnter={() => setActiveStep(i)}
                onMouseLeave={() => setActiveStep(null)}
              >
                {/* Roman numeral */}
                <div className="flex flex-col items-center">
                  <span
                    className={`font-heading text-4xl transition-all duration-500 ${
                      isActive ? "text-accent scale-110" : "text-border"
                    }`}
                  >
                    {step.number}
                  </span>
                  <div
                    className={`mt-3 h-full w-px transition-all duration-500 ${
                      isActive ? "bg-accent/50 scale-y-110" : "bg-border/40"
                    }`}
                    aria-hidden="true"
                  />
                </div>

                <div className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon
                      className={`h-4 w-4 transition-all duration-500 ${
                        isActive
                          ? "text-accent scale-125 rotate-12"
                          : "text-accent"
                      }`}
                    />
                    <span className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                      Step {step.number}
                    </span>
                  </div>
                  <h3
                    className={`font-heading text-xl md:text-2xl transition-colors duration-500 ${
                      isActive ? "text-accent" : "text-foreground"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`mt-2 text-sm leading-relaxed transition-colors duration-500 ${
                      isActive ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
