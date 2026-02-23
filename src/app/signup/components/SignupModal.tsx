"use client";

import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import SignupForm from "./SignupForm";

type SignupModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const SignupModal: React.FC<SignupModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose} // click on backdrop closes modal
        >
          <motion.div
            className="relative w-full max-w-lg mx-4"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking modal
          >
            {/* Close button */}
            <button
              className="absolute top-2 right-2 text-foreground text-xl font-bold"
              onClick={onClose}
            >
              ✕
            </button>

            {/* Modal content */}
            <div className="bg-background rounded-lg shadow-lg p-6">
              <SignupForm />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SignupModal;


