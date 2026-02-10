"use client";
import * as React from "react";

interface FormInputProps {
  label: string;
  type: string;
  placeholder: string;
  id: string;
}

export function FormInput({ label, type, placeholder, id }: FormInputProps) {
  return (
    <div className="mb-6">
      <label htmlFor={id} className="mb-2 text-sm font-semibold leading-5 text-zinc-900 block">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="px-4 py-3 w-full text-base bg-white rounded-lg border border-neutral-200 text-zinc-900"
      />
    </div>
  );
}
