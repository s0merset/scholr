"use client";

import { useState } from "react";
import { Sparkles, CheckCircle2, MoreHorizontal, Brain } from "lucide-react";
import { cn } from "@/lib/utils";

export function AIPreview() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  return (
    <div 
      className={cn(
        "group bg-card rounded-[2.5rem] border border-border/50 p-10 transition-all duration-700 min-h-[600px] flex flex-col",
        isAnalyzing ? "border-accent/40 shadow-2xl shadow-accent/5" : ""
      )}
      onClick={() => setIsAnalyzing(!isAnalyzing)}
    >
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-4">
          <div className={cn(
            "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-700",
            isAnalyzing ? "bg-accent text-white rotate-180" : "bg-accent/10 text-accent"
          )}>
            <Brain className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[0.6rem] font-bold uppercase tracking-[0.15em] text-accent">AI Analysis Engine</p>
            <p className="text-xs italic text-muted-foreground transition-all">
              {isAnalyzing ? "Deep-layer synthesis active..." : "Awaiting manuscript..."}
            </p>
          </div>
        </div>
        <Sparkles className={cn("w-5 h-5 transition-all", isAnalyzing ? "text-accent animate-pulse" : "text-muted-foreground/20")} />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6 relative overflow-hidden">
        {/* Animated Background Text Skeletons */}
        <div className={cn(
          "absolute inset-0 p-10 space-y-4 opacity-[0.03] transition-all duration-1000",
          isAnalyzing ? "scale-110 opacity-[0.07] blur-none" : "scale-100 blur-sm"
        )}>
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="h-4 bg-foreground rounded-full w-full animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
          ))}
        </div>

        <div className="relative z-10 space-y-4">
          <h3 className="font-heading text-3xl italic text-muted-foreground/40 transition-colors duration-700 group-hover:text-muted-foreground/60">
            {isAnalyzing ? "Mapping Concept Networks" : "Select a document to begin"}
          </h3>
          {!isAnalyzing && (
            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground/30 animate-bounce">
              Click to simulate analysis
            </p>
          )}
        </div>
      </div>

      <div className="mt-10 pt-10 border-t border-border/60 flex items-center justify-between">
        <div className="flex gap-6">
          {["Abstract", "Claims", "Theories"].map((tag, i) => (
            <div 
              key={tag} 
              className={cn(
                "flex items-center gap-2 text-[0.6rem] font-bold uppercase tracking-tighter transition-all duration-500",
                isAnalyzing ? "opacity-100 translate-y-0" : "opacity-30 translate-y-2"
              )}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <CheckCircle2 className="w-3 h-3 text-accent" /> {tag}
            </div>
          ))}
        </div>
        
        <button className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-accent hover:text-primary transition-colors underline underline-offset-8 decoration-accent/20">
          Settings
        </button>
      </div>
    </div>
  );
}
