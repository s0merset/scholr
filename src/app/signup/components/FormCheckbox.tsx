"use client";
import * as React from "react";

interface FormCheckboxProps {
  id: string;
  children: React.ReactNode;
}

export function FormCheckbox({ id, children }: FormCheckboxProps) {
  return (
    <label htmlFor={id} className="flex gap-3 items-start cursor-pointer">
      <input
        id={id}
        type="checkbox"
        className="mt-0.5 w-5 h-5 rounded border-2 border-gray-300 cursor-pointer accent-[#b8834e]"
      />
      <div className="text-sm leading-5 text-zinc-900">
        {children}
      </div>
    </label>
  );
}
