"use client";
import * as React from "react";

interface SocialLoginButtonProps {
  svgContent: string;
  ariaLabel: string;
}

export function SocialLoginButton({ svgContent, ariaLabel }: SocialLoginButtonProps) {
  return (
    <button
      className="cursor-pointer"
      aria-label={ariaLabel}
      type="button"
    >
      <div
        dangerouslySetInnerHTML={{
          __html: svgContent,
        }}
      />
    </button>
  );
}
