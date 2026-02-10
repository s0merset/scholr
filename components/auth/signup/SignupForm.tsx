"use client";
import * as React from "react";
import { FormInput } from "./FormInput";
import { FormCheckbox } from "./FormCheckbox";
import { SocialLoginSection } from "./SocialLoginSection";

export default function SignupForm() {
  return (
      <div className="w-full max-w-[592px]">
        <header className="mb-10">
          <h1 className="text-5xl font-heading text-accent leading-tight ">
            join
          </h1>
        </header>

        <form>
          <FormInput
            id="email"
            label="Email Address"
            type="email"
            placeholder="e.g. michelle@morph-ui.design"
          />

          <FormInput
            id="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
          />

          <fieldset className="mb-6">
            <legend className="sr-only">Agreement and preferences</legend>
            <div className="mb-4">
              <FormCheckbox id="terms">
                I agree with the{" "}
                <span className="text-orange-400">Terms &amp; Conditions</span>
              </FormCheckbox>
            </div>
            <FormCheckbox id="newsletter">
              I want to subscribe to the Newsletter
            </FormCheckbox>
          </fieldset>

          <button
            type="submit"
            className="px-4 py-3.5 mb-8 w-full text-[13px] leading-snug text-white tracking-[0.12em] uppercase rounded-none cursor-pointer bg-slate-700 border-[nonepx] hover:shadow-[0_8px_30px_-6px] hover:shadow-primary/30 hover:-translate-y-1 hover:gap-4"
          >
            Sign Up
          </button>
        </form>

        <SocialLoginSection />

        <footer className="text-center">
          <p className="text-sm leading-5 text-stone-500">
            Already have an account?{" "}
            <button
              type="button"
              className="font-semibold cursor-pointer text-slate-700 bg-transparent border-none underline"
            >
              Sign in
            </button>
          </p>
        </footer>
      </div>
  );
}
