"use client";

import { useState } from "react";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { Features } from "./components/features";
import { BentoShowcase } from "./components/bento-showcase";
import { HowItWorks } from "./components/how-it-works";
import { Pricing } from "./components/pricing";
import { FAQ } from "./components/faq";
import { CTA } from "./components/cta";
import { Footer } from "./components/footer";
import LoginModal from "../login/components/LoginMoodal";
import SignupModal from "../signup/components/SignupModal";

export function LandingPage() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  return (
    <>
      {/* Navbar receives a function to open the login modal */}
      <Navbar 
	openLogin={() => setLoginOpen(true)} 
	openSignup={() => setSignupOpen(true)}	
      />

      {/* Landing page sections */}
      <main>
        <Hero openSignup={() => setSignupOpen(true)}/>
        <Features />
        <BentoShowcase />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <CTA openSignup={() => setSignupOpen(true)} />
        <Footer />
      </main>

      {/* Modal rendered at the top level of this page */}
      <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
      <SignupModal isOpen={signupOpen} onClose={() => setSignupOpen(false)}/>
    </>
  );
}

