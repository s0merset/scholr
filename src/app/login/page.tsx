"use client";

import { useState } from "react";
import LoginModal from "./components/LoginMoodal";


export default function Page() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <LoginModal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
    />
  );
}
