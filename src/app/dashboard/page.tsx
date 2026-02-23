import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"

export default function DashboardPage() {
  return (
    <>

      <div className="flex flex-1 flex-col gap-6 p-6">
        {/* Stats row */}
        <div className="grid gap-4 md:grid-cols-3">
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl bg-muted/50" />
        </div>

        {/* Main content area */}
        <div className="min-h-96 flex-1 rounded-xl bg-muted/50" />
      </div>
    </>
  )
}
