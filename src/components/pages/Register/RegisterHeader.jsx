import MotionContainer from "@/components/common/motion/MotionContainer";
import Link from "next/link";
import React from "react";
import { FiHeart } from "react-icons/fi";

const RegisterHeader = () => {
  return (
    <MotionContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-8"
    >
      <Link href="/" className="inline-flex items-center gap-2 mb-8">
        <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
          <FiHeart className="w-6 h-6 text-primary-foreground" />
        </div>
        <span className="text-2xl font-bold text-foreground">
          Care<span className="text-primary">.xyz</span>
        </span>
      </Link>
      <h1 className="text-3xl font-bold text-foreground mb-2">
        Create Account
      </h1>
      <p className="text-muted-foreground">
        Join thousands of families trusting Care.xyz
      </p>
    </MotionContainer>
  );
};

export default RegisterHeader;
