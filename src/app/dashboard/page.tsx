import { PageHeader } from "./analyzer/header";
import { KnowledgePulse } from "./analyzer/bento-grid";
import { UploadZone } from "./analyzer/upload-zone";
import { AIPreview } from "./analyzer/ai-preview";

export default function DocumentAnalyzerPage() {
  return (
    <div className="max-w-[1600px] mx-auto px-8 py-16 space-y-24 selection:bg-accent/10">
      
      {/* 1. Page Header */}
      <PageHeader
        variant="editorial"
        breadcrumb={[{ label: "Workspace", href: "/dashboard" }, { label: "Analyzer", isCurrent: true }]}
        title={<>Good morning, <br /><span className="text-muted-foreground/30 font-heading italic">Researcher.</span></>}
      />

      {/* 2. Knowledge Pulse - Smaller Cards Section */}
      <section className="space-y-10">
        <div className="flex items-center gap-6">
          <h2 className="text-[0.6rem] font-bold uppercase tracking-[0.4em] text-muted-foreground/40 whitespace-nowrap">Knowledge Pulse</h2>
          <div className="h-px w-full bg-border/40" />
        </div>
        <KnowledgePulse />
      </section>

      {/* 3. Workstation */}
      <section className="space-y-16">
        <div className="flex items-center gap-6">
          <h2 className="text-[0.6rem] font-bold uppercase tracking-[0.4em] text-muted-foreground/40 whitespace-nowrap">Active Workstation</h2>
          <div className="h-px w-full bg-border/40" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 xl:col-span-4 sticky top-24">
            <UploadZone />
          </div>
          <div className="lg:col-span-7 xl:col-span-8">
            <AIPreview />
          </div>
        </div>
      </section>
    </div>
  );
}
