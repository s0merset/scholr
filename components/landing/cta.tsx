"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-24 md:py-32 bg-secondary/60">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <span className="text-[11px] uppercase tracking-[0.2em] text-accent">
          Get Started
        </span>

        <h2 className="mx-auto mt-6 max-w-3xl font-heading text-4xl leading-tight text-foreground md:text-5xl lg:text-6xl text-balance">
          {"Ready to transform the way you study?".split(" ").map((word, i) => (
            <span
              key={`cta-${i}`}
              className="inline-block transition-all duration-500 hover:text-accent hover:-translate-y-1 hover:scale-105 cursor-default mr-[0.25em]"
            >
              {word}
            </span>
          ))}
        </h2>

        <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
          Join thousands of students who are studying smarter with Scholr. Start
          for free, no credit card required.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="group gap-3 rounded-none px-10 text-[13px] uppercase tracking-[0.12em] transition-all duration-500 hover:shadow-[0_12px_40px_-8px] hover:shadow-primary/30 hover:-translate-y-2 hover:gap-5 hover:scale-105"
          >
            Get Started for Free
            <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-2" />
          </Button>
        </div>

        <div
          className="mx-auto mt-16 h-px max-w-xs bg-border"
          aria-hidden="true"
        />

        <p className="mt-6 text-[12px] uppercase tracking-[0.15em] text-muted-foreground">
          Trusted by researchers at Stanford, MIT, Harvard, Oxford, and Yale
        </p>
      </div>
    </section>
  );
}
