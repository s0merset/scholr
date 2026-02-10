"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
    openLogin: () => void;
    openSignup: () => void;
}

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar({openLogin, openSignup}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="group flex items-center gap-3">
          <span className="font-heading text-2xl italic text-foreground transition-colors duration-300 group-hover:text-accent">
            Scholr
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="group relative text-[13px] uppercase tracking-[0.12em] text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
	    <Link
		href='#'
		onClick={(e) => {
		    e.preventDefault();
		    openLogin();
		}}
		className="group relative text-[13px] uppercase tracking-[0.12em] text-muted-foreground transition-colors duration-300 hover:text-foreground"
	    >
            Log in
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
	    </Link>
          <Button
            size="sm"
	    onClick={openSignup}
            className="rounded-none px-6 text-[13px] uppercase tracking-[0.12em] transition-all duration-300 hover:shadow-lg hover:-translate-y-px"
          >
            Get Started
          </Button>
        </div>

        <button
          type="button"
          className="text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      <div className="mx-6 h-px bg-border" aria-hidden="true" />

      {mobileOpen && (
        <div className="bg-background md:hidden">
          <div className="flex flex-col gap-6 px-6 py-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[13px] uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="h-px bg-border" />
            <Link
              href="#"
              className="text-[13px] uppercase tracking-[0.12em] text-muted-foreground"
            >
              Log in
            </Link>
            <Button className="rounded-none text-[13px] uppercase tracking-[0.12em]">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
