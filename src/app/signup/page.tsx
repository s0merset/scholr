"use client";

import { useState } from "react";
import SignupModal from "./components/SignupModal";

export default function Page() {
    const [isOpen, setIsOpen] = useState(false);

    return <SignupModal isOpen={isOpen} onClose={() => setIsOpen(false)}/>
}
