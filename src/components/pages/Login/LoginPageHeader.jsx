import Logo from "@/components/common/Logo/Logo";
import MotionContainer from "@/components/common/motion/MotionContainer";
import React from "react";

const LoginPageHeader = () => {
  return (
    <MotionContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-8"
    >
      <div className="mx-auto w-fit mb-3">
        <Logo />
      </div>
      <h1 className="text-3xl font-bold text-foreground mb-2">Welcome Back</h1>
      <p className="text-muted-foreground">
        Sign in to manage your bookings and find caregivers
      </p>
    </MotionContainer>
  );
};

export default LoginPageHeader;
