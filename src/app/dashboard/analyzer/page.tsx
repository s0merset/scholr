// src/app/dashboard/analyzer/page.tsx
import { AnalyzerBento } from "@/components/dashboard/analyzer/bento-grid";
import { UploadZone } from "@/components/dashboard/analyzer/upload-zone";
import { AIPreview } from "@/components/dashboard/analyzer/ai-preview"; // Similar logic to upload-zone
import { ArrowRight } from "lucide-react";

export default function DocumentAnalyzerPage() {
  return (
    <div className="max-w-[1440px] mx-auto px-12 py-16 space-y-24">
      
      {/* 1. Header Section */}
      <header className="space-y-8">
        <nav className="flex items-center gap-4 text-[0.6rem] font-bold uppercase tracking-[0.3em] text-muted-foreground/60">
          <span>Workspace</span>
          <div className="w-1 h-1 rounded-full bg-border" />
          <span className="text-foreground">Document Analyzer</span>
        </nav>
        <h1 className="text-8xl font-heading italic tracking-tighter text-foreground leading-[0.9]">
          Good morning, <br />
          <span className="text-muted-foreground/20">Researcher.</span>
        </h1>
      </header>

      {/* 2. Top-level Activity & Stats */}
      <AnalyzerBento />

      {/* 3. Main Analyzer Tool */}
      <section className="space-y-16">
        <div className="flex items-end justify-between border-b border-border pb-10">
          <div className="space-y-3">
            <h2 className="text-4xl font-heading italic tracking-tight">Document Analyzer</h2>
            <p className="text-muted-foreground text-sm max-w-md font-sans leading-relaxed">
              Transform dense academic literature into structured semantic insights using our neural engine.
            </p>
          </div>
          <button className="group flex items-center gap-4 text-[0.65rem] font-bold uppercase tracking-[0.25em] hover:text-accent transition-all">
            View Library 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <UploadZone />
          </div>
          <div className="lg:col-span-3">
            <AIPreview />
          </div>
        </div>
      </section>

      {/* 4. Footer Meta */}
      <footer className="pt-20 border-t border-border/40 flex justify-between opacity-30 grayscale text-[0.55rem] font-bold uppercase tracking-[0.3em]">
        <div className="flex gap-10">
          <span>EST. 2024</span>
          <span>Neural Engine v4.2</span>
        </div>
        <span>Secure Academic Vault</span>
      </footer>
    </div>
  );
}
