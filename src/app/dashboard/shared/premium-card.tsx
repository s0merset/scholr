import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function PremiumCard({ 
  children, 
  className, 
  title, 
  icon: Icon 
}: { 
  children: React.ReactNode, 
  className?: string, 
  title?: string, 
  icon?: LucideIcon 
}) {
  return (
    <div className={cn(
      "group bg-card rounded-[2.5rem] border border-border/50 p-10 transition-all duration-700",
      "hover:border-accent/30 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.04)]",
      className
    )}>
      {title && (
        <div className="flex items-center justify-between mb-10">
          <h3 className="text-[0.6rem] font-bold uppercase tracking-[0.4em] text-muted-foreground/60">
            {title}
          </h3>
          {Icon && <Icon className="w-4 h-4 text-muted-foreground/20 group-hover:text-accent transition-colors duration-500" />}
        </div>
      )}
      {children}
    </div>
  );
}
