"use client";

import { useState } from "react";
import { 
  History, Activity, Target, ArrowUpRight, 
  Quote, Zap, BookOpen, Layers, 
  Database, ShieldCheck 
} from "lucide-react";
import { cn } from "@/lib/utils";

export function KnowledgePulse() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const cards = [
    { id: 0, title: "Momentum", icon: Zap, size: "md:col-span-4 md:row-span-2", variant: "hero" },
    { id: 1, title: "Recent Archives", icon: History, size: "md:col-span-5 md:row-span-2", variant: "default" },
    { id: 2, title: "Activity Pulse", icon: Activity, size: "md:col-span-3 md:row-span-1", variant: "default" },
    { id: 3, title: "Citations", icon: Quote, size: "md:col-span-1 md:row-span-1", variant: "stat" },
    { id: 4, title: "Concepts", icon: Layers, size: "md:col-span-1 md:row-span-1", variant: "stat" },
    { id: 5, title: "Vault", icon: Database, size: "md:col-span-1 md:row-span-1", variant: "stat" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[130px]">
      {cards.map((card, idx) => {
        const isActive = activeIndex === idx;
        const isFaded = activeIndex !== null && !isActive;
        const Icon = card.icon;

        return (
          <div
            key={card.id}
            onMouseEnter={() => setActiveIndex(idx)}
            onMouseLeave={() => setActiveIndex(null)}
            className={cn(
              "group relative rounded-[2rem] border p-6 transition-all duration-700 ease-in-out cursor-default overflow-hidden",
              card.size,
              card.variant === "hero" ? "bg-primary text-primary-foreground border-none" : "bg-card border-border/40",
              isActive && card.variant !== "hero" && "border-accent shadow-xl shadow-accent/5 -translate-y-1",
              isActive && card.variant === "hero" && "shadow-2xl shadow-primary/30 scale-[1.01]",
              isFaded && "opacity-40 grayscale-[0.5] scale-[0.98]"
            )}
          >
            {/* Header logic */}
            <div className="flex justify-between items-start mb-4">
              <span className={cn(
                "text-[0.55rem] font-bold uppercase tracking-[0.3em] transition-colors duration-500",
                isActive ? "text-accent" : "text-muted-foreground/50",
                card.variant === "hero" && "text-white/50"
              )}>
                {card.title}
              </span>
              <Icon className={cn(
                "w-3.5 h-3.5 transition-all duration-500",
                isActive ? "text-accent scale-125" : "text-muted-foreground/20"
              )} />
            </div>

            {/* Content Switcher based on Variant */}
            <div className="h-full">
              {card.variant === "hero" && (
                <div className="flex flex-col justify-between h-[150px]">
                  <h3 className="text-4xl font-heading italic leading-none">Academic Momentum</h3>
                  <div className="space-y-4">
                    <div className="flex items-end gap-2">
                      <span className="text-6xl font-heading leading-none">84</span>
                      <span className="text-lg font-heading text-accent">+12%</span>
                    </div>
                    <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-accent w-[84%]" />
                    </div>
                  </div>
                </div>
              )}

              {card.variant === "default" && card.id === 1 && (
                <div className="space-y-4 pt-2">
                  {[
                    { t: "Neural Ethics.pdf", d: "2h ago", c: "bg-accent" },
                    { t: "Narrative Theory", d: "5h ago", c: "bg-primary" },
                    { t: "Global Trends Q4", d: "1d ago", c: "bg-stone-300" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between group/item">
                      <div className="flex items-center gap-3">
                        <div className={cn("w-1 h-6 rounded-full", item.c)} />
                        <div>
                          <p className="font-heading italic text-lg leading-none">{item.t}</p>
                          <p className="text-[0.6rem] uppercase tracking-widest text-muted-foreground mt-1">{item.d}</p>
                        </div>
                      </div>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </div>
              )}

              {card.variant === "default" && card.id === 2 && (
                <div className="flex items-end gap-1 h-12 pt-2">
                  {[30, 60, 40, 80, 50, 90, 45].map((h, i) => (
                    <div key={i} className="flex-1 bg-accent/20 rounded-t-[2px]" style={{ height: `${h}%` }} />
                  ))}
                </div>
              )}

              {card.variant === "stat" && (
                <div className="flex flex-col items-center justify-center pt-2">
                  <span className="text-3xl font-heading">{card.id === 3 ? "12" : card.id === 4 ? "48" : "2GB"}</span>
                </div>
              )}

            </div>
          </div>
        );
      })}
    </div>
  );
}
