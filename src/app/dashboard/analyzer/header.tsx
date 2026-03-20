import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface PageHeaderProps {
  breadcrumb: {
    label: string;
    href?: string;
    isCurrent?: boolean;
  }[];
  title: React.ReactNode;
  description?: string;
  actions?: React.ReactNode;
  variant?: "editorial" | "tool"; // editorial = massive text, tool = standard workspace
  className?: string;
}

export function PageHeader({
  breadcrumb,
  title,
  description,
  actions,
  variant = "tool",
  className,
}: PageHeaderProps) {
  return (
    <header className={cn("space-y-8 w-full", className)}>
      {/* 1. Breadcrumbs - High Tracking & Bold */}
      <Breadcrumb>
        <BreadcrumbList className="text-[0.6rem] font-bold uppercase tracking-[0.3em] text-muted-foreground/60">
          {breadcrumb.map((item, index) => (
            <React.Fragment key={item.label}>
              <BreadcrumbItem>
                {item.isCurrent || !item.href ? (
                  <BreadcrumbPage className="text-foreground">
                    {item.label}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link
                      href={item.href}
                      className="hover:text-accent transition-colors duration-300"
                    >
                      {item.label}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {index < breadcrumb.length - 1 && (
                <BreadcrumbSeparator className="opacity-20 scale-75" />
              )}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>

      {/* 2. Main Title Section */}
      <div
        className={cn(
          "flex flex-col md:flex-row md:items-end justify-between gap-6",
          variant === "tool" && "border-b border-border/60 pb-10"
        )}
      >
        <div className="space-y-3">
          <h1
            className={cn(
              "font-heading italic tracking-tighter text-foreground leading-[0.9]",
              variant === "editorial" ? "text-8xl" : "text-5xl"
            )}
          >
            {title}
          </h1>
          {description && (
            <p className="text-muted-foreground text-sm max-w-md font-sans leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* 3. Optional Action Buttons (e.g., View Library) */}
        {actions && (
          <div className="flex items-center gap-4 animate-in fade-in slide-in-from-right-4 duration-700">
            {actions}
          </div>
        )}
      </div>
    </header>
  );
}
