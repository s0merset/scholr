"use client"

import Link from "next/link"
import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "user",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Document Analyzer",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Literature Review",
      url: "#",
      icon: Bot,
    },
    {
      title: "Citations",
      url: "#",
      icon: BookOpen,
    },
    {
      title: "Flashcards & Quizzes",
      url: "#",
      icon: Settings2,
    },
    {
      title: "Study Planner",
      url: "#",
      icon: Settings2,
    },

    {
      title: "Concept Maps",
      url: "#",
      icon: Settings2,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
		<Link href="/" className="flex items-center gap-2 px-2 py-2">
    <GalleryVerticalEnd className="h-5 w-5 shrink-0" />
    <span className="text-sm font-semibold truncate group-data-[collapsible=icon]:hidden">
      Scholr
    </span>
  </Link>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
