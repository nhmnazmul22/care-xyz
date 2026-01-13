import { motion } from "motion/react";
import { FiHome, FiHeart } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import MotionContainer from "@/components/common/motion/MotionContainer";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <MotionContainer
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-primary/10 flex items-center justify-center">
          <FiHeart className="w-10 h-10 text-primary" />
        </div>

        <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Page Not Found
        </h2>
        <p className="text-muted-foreground mb-8">
          Oops! The page {"you're"} looking for {"doesn't"} exist. It might have
          been moved or deleted.
        </p>

        <Link href="/">
          <Button className="btn-primary rounded-xl px-8 h-14 text-base">
            <FiHome className="mr-2" />
            Back to Home
          </Button>
        </Link>
      </MotionContainer>
    </div>
  );
};

export default NotFound;
