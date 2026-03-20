"use client";

import { Upload, ShieldCheck, Zap } from "lucide-react";

export function UploadZone() {
  return (
    <div className="group relative h-[450px] flex flex-col items-center justify-center bg-card rounded-[2.5rem] border border-dashed border-border/60 hover:border-accent/40 transition-all duration-700 ease-in-out overflow-hidden cursor-pointer">
      
      {/* Neural Scan Line Animation */}
      <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-accent/50 to-transparent top-0 opacity-0 group-hover:animate-[scan_3s_linear_infinite]" />
      
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative">
          <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-150" />
          <div className="relative w-24 h-24 rounded-full bg-background flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
            <Upload className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
          </div>
        </div>
        
        <div className="text-center space-y-2">
          <h3 className="font-heading text-2xl italic tracking-tight text-foreground group-hover:text-accent transition-colors duration-500">
            Drop manuscripts here
          </h3>
          <div className="flex items-center justify-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
          </div>
        </div>
        
        <button className="mt-10 px-12 py-4 bg-primary text-primary-foreground rounded-full text-[0.6rem] font-bold uppercase tracking-[0.25em] hover:bg-black hover:scale-105 transition-all duration-300 active:scale-95">
          Browse Archive
        </button>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { top: 0% }
          100% { top: 100% }
        }
      `}</style>
    </div>
  );
}
