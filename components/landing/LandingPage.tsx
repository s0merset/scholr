"use client";

import { useState } from "react";
import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { BentoShowcase } from "@/components/landing/bento-showcase";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Pricing } from "@/components/landing/pricing";
import { FAQ } from "@/components/landing/faq";
import { CTA } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";
import LoginModal from "@/components/auth/login/LoginModal";

export function LandingPage() {
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <>
      {/* Navbar receives a function to open the login modal */}
      <Navbar openLogin={() => setLoginOpen(true)} />

      {/* Landing page sections */}
      <main>
        <Hero />
        <Features />
        <BentoShowcase />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <CTA />
        <Footer />
      </main>

      {/* Modal rendered at the top level of this page */}
      <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  );
}

