"use client";
import React from "react";
import LoginForm from "./LoginForm";

type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose} // click on backdrop closes modal
    >
      <div
        className="relative w-full max-w-lg mx-4"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking modal itself
      >
        <button
          className="absolute top-2 right-2 text-foreground text-xl font-bold"
          onClick={onClose}
        >
          ✕
        </button>
        <div className="bg-background rounded-lg shadow-lg p-6">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginModal;

