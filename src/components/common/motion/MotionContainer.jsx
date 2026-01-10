"use client";
import { motion } from "motion/react";

const MotionContainer = ({
  children,
  initial = {},
  animate = {},
  transition = {},
  className,
}) => {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionContainer;
