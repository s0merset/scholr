"use client";

import { useState } from "react";
import {
  FileText,
  BrainCircuit,
  Quote,
  BarChart3,
  Check,
} from "lucide-react";

export function BentoShowcase() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section className="py-24 md:py-32 bg-primary">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-primary-foreground/50">
              The Platform
            </span>
            <h2 className="mt-3 max-w-lg font-heading text-4xl leading-tight text-primary-foreground md:text-5xl text-balance">
              See it in action
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-primary-foreground/60 md:text-right">
            A preview of the tools that power over 2 million study sessions.
          </p>
        </div>

        <div
          className="mt-6 h-px bg-primary-foreground/10"
          aria-hidden="true"
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Large card - PDF Analyzer */}
          <div
            className={`lg:col-span-2 rounded-sm border p-8 flex flex-col justify-between transition-all duration-700 cursor-default ${
              activeCard === "pdf"
                ? "border-accent bg-primary-foreground/10 shadow-[0_0_60px_-12px] shadow-accent/25 -translate-y-2"
                : activeCard
                  ? "border-primary-foreground/5 bg-primary-foreground/3 opacity-40"
                  : "border-primary-foreground/10 bg-primary-foreground/5"
            }`}
            onMouseEnter={() => setActiveCard("pdf")}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FileText
                  className={`h-4 w-4 transition-all duration-500 ${activeCard === "pdf" ? "text-accent scale-150" : "text-accent"}`}
                />
                <span className="text-[11px] uppercase tracking-[0.2em] text-primary-foreground/50">
                  Document Analysis
                </span>
              </div>
              <h3 className="font-heading text-2xl text-primary-foreground md:text-3xl">
                Intelligent extraction
              </h3>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-primary-foreground/60">
                Upload any PDF, lecture slide, or paper. Our AI reads through
                your documents and surfaces the most important information
                instantly.
              </p>
            </div>
            <div
              className={`mt-8 rounded-sm border p-6 transition-all duration-500 ${
                activeCard === "pdf"
                  ? "border-accent/30 bg-accent/10"
                  : "border-primary-foreground/10 bg-primary-foreground/5"
              }`}
            >
              <div className="space-y-3">
                {[
                  "12 key concepts extracted",
                  "8 definitions identified",
                  "3 important figures found",
                  "Summary generated (420 words)",
                ].map((item, i) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                    style={{
                      transform:
                        activeCard === "pdf"
                          ? "translateX(8px)"
                          : "translateX(0)",
                      opacity: activeCard === "pdf" ? 1 : 0.7,
                      transition: `all 500ms ease ${i * 100}ms`,
                    }}
                  >
                    <Check
                      className={`h-3 w-3 transition-all duration-500 ${activeCard === "pdf" ? "text-accent scale-125" : "text-accent"}`}
                      style={{ transitionDelay: `${i * 100}ms` }}
                    />
                    <span className="text-sm text-primary-foreground/70">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Flashcards card */}
          <div
            className={`rounded-sm border p-8 flex flex-col transition-all duration-700 cursor-default ${
              activeCard === "flash"
                ? "border-accent bg-primary-foreground/10 shadow-[0_0_60px_-12px] shadow-accent/25 -translate-y-2"
                : activeCard
                  ? "border-primary-foreground/5 bg-primary-foreground/3 opacity-40"
                  : "border-primary-foreground/10 bg-primary-foreground/5"
            }`}
            onMouseEnter={() => setActiveCard("flash")}
            onMouseLeave={() => setActiveCard(null)}
          >
            <BrainCircuit
              className={`h-4 w-4 mb-6 transition-all duration-500 ${
                activeCard === "flash"
                  ? "text-accent scale-150 rotate-12"
                  : "text-accent"
              }`}
            />
            <h3 className="font-heading text-xl text-primary-foreground">
              Smart Flashcards
            </h3>
            <p className="mt-2 text-sm text-primary-foreground/60 leading-relaxed">
              AI generates flashcards with adaptive difficulty based on your
              performance.
            </p>
            <div className="mt-auto pt-8">
              <div
                className={`rounded-sm border p-5 transition-all duration-500 ${
                  activeCard === "flash"
                    ? "border-accent/30 bg-accent/10"
                    : "border-primary-foreground/10 bg-primary-foreground/5"
                }`}
              >
                <p className="text-[11px] uppercase tracking-[0.15em] text-primary-foreground/40 mb-2">
                  Question
                </p>
                <p
                  className={`text-sm transition-colors duration-500 ${
                    activeCard === "flash"
                      ? "text-primary-foreground"
                      : "text-primary-foreground/80"
                  }`}
                >
                  What is the primary function of mitochondria in eukaryotic
                  cells?
                </p>
                <div className="mt-4 flex gap-2">
                  <span
                    className={`border px-2 py-0.5 text-[11px] uppercase tracking-wider transition-all duration-500 ${
                      activeCard === "flash"
                        ? "border-accent bg-accent text-accent-foreground"
                        : "border-accent/30 text-accent"
                    }`}
                  >
                    Biology
                  </span>
                  <span className="border border-primary-foreground/10 text-primary-foreground/40 px-2 py-0.5 text-[11px] uppercase tracking-wider">
                    Medium
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Citation card */}
          <div
            className={`rounded-sm border p-8 flex flex-col transition-all duration-700 cursor-default ${
              activeCard === "cite"
                ? "border-accent bg-primary-foreground/10 shadow-[0_0_60px_-12px] shadow-accent/25 -translate-y-2"
                : activeCard
                  ? "border-primary-foreground/5 bg-primary-foreground/3 opacity-40"
                  : "border-primary-foreground/10 bg-primary-foreground/5"
            }`}
            onMouseEnter={() => setActiveCard("cite")}
            onMouseLeave={() => setActiveCard(null)}
          >
            <Quote
              className={`h-4 w-4 mb-6 transition-all duration-500 ${
                activeCard === "cite"
                  ? "text-accent scale-150 -rotate-12"
                  : "text-accent"
              }`}
            />
            <h3 className="font-heading text-xl text-primary-foreground">
              Auto Citations
            </h3>
            <p className="mt-2 text-sm text-primary-foreground/60 leading-relaxed">
              Generate APA, MLA, or Chicago citations instantly from any
              uploaded document.
            </p>
            <div className="mt-auto pt-8">
              <div
                className={`rounded-sm border p-5 text-xs leading-relaxed transition-all duration-500 ${
                  activeCard === "cite"
                    ? "border-accent/30 bg-accent/10 text-primary-foreground/80"
                    : "border-primary-foreground/10 bg-primary-foreground/5 text-primary-foreground/60"
                }`}
              >
                <span className="text-accent text-[11px] uppercase tracking-wider">
                  APA
                </span>
                <span className="mx-2 text-primary-foreground/20">|</span>
                Smith, J. (2024). Advances in neural learning.{" "}
                <span className="italic">Journal of AI Research, 45</span>
                (2), 112-128.
              </div>
            </div>
          </div>

          {/* Analytics card */}
          <div
            className={`lg:col-span-2 rounded-sm border p-8 transition-all duration-700 cursor-default ${
              activeCard === "analytics"
                ? "border-accent bg-primary-foreground/10 shadow-[0_0_60px_-12px] shadow-accent/25 -translate-y-2"
                : activeCard
                  ? "border-primary-foreground/5 bg-primary-foreground/3 opacity-40"
                  : "border-primary-foreground/10 bg-primary-foreground/5"
            }`}
            onMouseEnter={() => setActiveCard("analytics")}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div className="flex items-center gap-3 mb-6">
              <BarChart3
                className={`h-4 w-4 transition-all duration-500 ${activeCard === "analytics" ? "text-accent scale-150" : "text-accent"}`}
              />
              <span className="text-[11px] uppercase tracking-[0.2em] text-primary-foreground/50">
                Progress
              </span>
            </div>
            <h3 className="font-heading text-2xl text-primary-foreground md:text-3xl">
              Track your growth
            </h3>
            <p className="mt-3 max-w-lg text-sm text-primary-foreground/60 leading-relaxed">
              Monitor retention, identify weak spots, and get personalized
              recommendations.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { label: "Retention Rate", value: "87%" },
                { label: "Cards Reviewed", value: "1,234" },
                { label: "Study Streak", value: "14 days" },
                { label: "Topics Mastered", value: "23" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className="text-center rounded-sm p-3 transition-all duration-500 hover:bg-accent/15 cursor-default"
                  style={{
                    transform:
                      activeCard === "analytics"
                        ? `translateY(-${4 + i * 2}px)`
                        : "translateY(0)",
                    transition: `all 600ms ease ${i * 80}ms`,
                  }}
                >
                  <p
                    className={`font-heading text-3xl transition-colors duration-500 ${
                      activeCard === "analytics"
                        ? "text-accent"
                        : "text-primary-foreground"
                    }`}
                  >
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-primary-foreground/40">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
