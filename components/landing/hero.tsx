"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "10k+", label: "Active Students" },
  { value: "2.1M", label: "Documents Analyzed" },
  { value: "95%", label: "Accuracy Rate" },
  { value: "4.9/5", label: "User Rating" },
];

export function Hero() {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  return (
    <section className="relative pt-36 pb-24 md:pt-48 md:pb-36 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        {/* Editorial-style label */}
        <div className="mb-8 flex items-center gap-4">
          <div className="h-px flex-1 max-w-16 bg-accent" aria-hidden="true" />
          <span className="text-[11px] uppercase tracking-[0.2em] text-accent">
            AI-Powered Academic Research
          </span>
        </div>

        {/* Oversized headline with word-level hover */}
        <h1 className="max-w-4xl font-heading text-5xl leading-[1.1] tracking-tight text-foreground md:text-7xl lg:text-[5.5rem]">
          {"Study with".split(" ").map((word, i) => (
            <span
              key={`w1-${i}`}
              className="inline-block transition-all duration-500 hover:text-accent hover:-translate-y-1 cursor-default mr-[0.3em]"
            >
              {word}
            </span>
          ))}
          <br />
          <span className="group/precision inline-block italic text-accent cursor-default relative">
            <span className="inline-block transition-all duration-700 group-hover/precision:tracking-[0.08em] group-hover/precision:scale-105 origin-left">
              precision
            </span>
            <span className="absolute -bottom-2 left-0 h-[3px] w-0 bg-accent transition-all duration-700 group-hover/precision:w-full" />
          </span>
          ,
          <br className="hidden md:block" />
          {" not with effort.".split(" ").filter(Boolean).map((word, i) => (
            <span
              key={`w2-${i}`}
              className="inline-block transition-all duration-500 hover:text-accent hover:-translate-y-1 cursor-default mr-[0.3em]"
            >
              {word}
            </span>
          ))}
        </h1>

        {/* Description */}
        <div className="mt-12 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-base leading-relaxed text-muted-foreground md:ml-auto md:text-right">
            Upload your PDFs and research papers. Scholr reads, analyzes, and
            transforms them into structured notes, flashcards, quizzes, and
            perfectly formatted citations.
          </p>
        </div>

        {/* CTAs */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button
            size="lg"
            className="group gap-3 rounded-none px-8 text-[13px] uppercase tracking-[0.12em] transition-all duration-500 hover:shadow-[0_8px_30px_-6px] hover:shadow-primary/30 hover:-translate-y-1 hover:gap-4"
          >
            Start for Free
            <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-2" />
          </Button>
          <span
            className="hidden h-4 w-px bg-border sm:block"
            aria-hidden="true"
          />
          <span className="text-[13px] text-muted-foreground">
            No credit card required
          </span>
        </div>

        {/* Decorative divider */}
        <div className="mt-20 flex items-center gap-6">
          <div className="h-px flex-1 bg-border" aria-hidden="true" />
        </div>

        {/* Stats with active highlight */}
        <div className="mt-8 grid grid-cols-2 gap-0 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`cursor-default p-6 transition-all duration-500 border border-transparent ${
                hoveredStat === i
                  ? "bg-primary text-primary-foreground scale-[1.02] shadow-lg -translate-y-1 border-primary"
                  : hoveredStat !== null
                    ? "opacity-50"
                    : ""
              }`}
              onMouseEnter={() => setHoveredStat(i)}
              onMouseLeave={() => setHoveredStat(null)}
            >
              <p
                className={`font-heading text-3xl md:text-4xl transition-colors duration-300 ${
                  hoveredStat === i ? "text-accent" : "text-foreground"
                }`}
              >
                {stat.value}
              </p>
              <p
                className={`mt-1 text-[12px] uppercase tracking-[0.15em] transition-colors duration-300 ${
                  hoveredStat === i
                    ? "text-primary-foreground/70"
                    : "text-muted-foreground"
                }`}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
