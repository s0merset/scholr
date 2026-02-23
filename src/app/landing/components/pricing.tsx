"use client";

import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started with AI-powered studying.",
    features: [
      "5 PDF uploads per month",
      "Basic AI summaries",
      "25 flashcards per document",
      "APA & MLA citations",
      "Community support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    id: "pro",
    name: "Pro",
    price: "$12",
    period: "per month",
    description: "For serious students who want to maximize their grades.",
    features: [
      "Unlimited PDF uploads",
      "Advanced AI analysis",
      "Unlimited flashcards & quizzes",
      "All citation formats",
      "Spaced repetition planner",
      "Progress analytics",
      "Priority support",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    id: "team",
    name: "Team",
    price: "$8",
    period: "per user / month",
    description: "For study groups, labs, and academic teams.",
    features: [
      "Everything in Pro",
      "Shared document library",
      "Collaborative notes",
      "Team analytics",
      "Admin dashboard",
      "SSO & API access",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export function Pricing() {
  const [activePlan, setActivePlan] = useState<string | null>(null);

  return (
    <section id="pricing" className="py-24 md:py-32 bg-secondary/60">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent">
              Pricing
            </span>
            <h2 className="mt-3 max-w-md font-heading text-4xl leading-tight text-foreground md:text-5xl text-balance">
              Transparent and fair
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground md:text-right">
            Start free. Upgrade when you need more power. Cancel anytime.
          </p>
        </div>

        <div className="mt-6 h-px bg-border" aria-hidden="true" />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => {
            const isActive = activePlan === plan.id;
            const isFaded = activePlan !== null && !isActive;

            return (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-sm p-8 transition-all duration-700 cursor-default ${
                  plan.highlighted
                    ? isActive
                      ? "bg-primary text-primary-foreground scale-[1.06] shadow-[0_20px_60px_-15px] shadow-primary/40 -translate-y-3 z-10"
                      : isFaded
                        ? "bg-primary text-primary-foreground opacity-40 scale-[0.97]"
                        : "bg-primary text-primary-foreground scale-[1.02] shadow-xl"
                    : isActive
                      ? "border-2 border-accent bg-card shadow-[0_20px_60px_-15px] shadow-accent/15 -translate-y-3 scale-[1.04]"
                      : isFaded
                        ? "border border-border/30 bg-card opacity-40 scale-[0.97]"
                        : "border border-border bg-card"
                }`}
                onMouseEnter={() => setActivePlan(plan.id)}
                onMouseLeave={() => setActivePlan(null)}
              >
                {plan.highlighted && (
                  <span
                    className={`absolute top-0 right-0 px-3 py-1 text-[10px] uppercase tracking-[0.15em] transition-all duration-500 ${
                      isActive
                        ? "bg-accent text-accent-foreground"
                        : "bg-accent text-accent-foreground"
                    }`}
                  >
                    Popular
                  </span>
                )}

                <div>
                  <span
                    className={`text-[11px] uppercase tracking-[0.2em] ${plan.highlighted ? "text-primary-foreground/50" : "text-muted-foreground"}`}
                  >
                    {plan.name}
                  </span>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span
                      className={`font-heading text-5xl transition-all duration-500 ${
                        isActive ? "text-accent scale-110 origin-left" : ""
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span
                      className={`text-sm ${plan.highlighted ? "text-primary-foreground/50" : "text-muted-foreground"}`}
                    >
                      /{plan.period}
                    </span>
                  </div>
                  <p
                    className={`mt-3 text-sm ${plan.highlighted ? "text-primary-foreground/60" : "text-muted-foreground"}`}
                  >
                    {plan.description}
                  </p>
                </div>

                <div
                  className={`my-8 h-px transition-all duration-500 ${
                    isActive
                      ? "bg-accent/50"
                      : plan.highlighted
                        ? "bg-primary-foreground/10"
                        : "bg-border"
                  }`}
                  aria-hidden="true"
                />

                <ul className="flex-1 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3"
                      style={{
                        transform: isActive
                          ? "translateX(6px)"
                          : "translateX(0)",
                        transition: `all 500ms ease ${i * 60}ms`,
                      }}
                    >
                      <Check
                        className={`mt-0.5 h-3.5 w-3.5 shrink-0 transition-all duration-500 ${
                          isActive ? "text-accent scale-125" : "text-accent"
                        }`}
                        style={{ transitionDelay: `${i * 60}ms` }}
                      />
                      <span
                        className={`text-sm transition-colors duration-500 ${
                          plan.highlighted
                            ? isActive
                              ? "text-primary-foreground"
                              : "text-primary-foreground/70"
                            : isActive
                              ? "text-foreground"
                              : "text-muted-foreground"
                        }`}
                        style={{ transitionDelay: `${i * 60}ms` }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`group/btn mt-8 w-full gap-2 rounded-none text-[13px] uppercase tracking-[0.12em] transition-all duration-500 ${
                    plan.highlighted
                      ? isActive
                        ? "bg-accent text-accent-foreground shadow-lg hover:bg-accent/90"
                        : "bg-accent text-accent-foreground hover:bg-accent/90"
                      : isActive
                        ? "bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 border-primary"
                        : "bg-transparent border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary"
                  }`}
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  {plan.cta}
                  <ArrowRight
                    className={`h-3.5 w-3.5 transition-all duration-500 ${
                      isActive ? "translate-x-2" : ""
                    } group-hover/btn:translate-x-1`}
                  />
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
