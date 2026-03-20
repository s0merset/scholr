import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="bg-background">
        {/* Persistent Top Header */}
        <header className="flex h-16 shrink-0 items-center gap-2 border-b border-border/40 px-6 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4 opacity-20" />
          <div className="flex-1" />
          <div className="text-[0.55rem] font-bold uppercase tracking-[0.3em] opacity-30">
            Neural Engine v4.2
          </div>
        </header>

        {/* This is where the specific pages (Overview or Analyzer) render */}
        <main className="flex flex-1 flex-col">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
