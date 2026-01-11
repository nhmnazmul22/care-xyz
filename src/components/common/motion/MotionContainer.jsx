"use client";
import { motion } from "motion/react";

const MotionContainer = ({
  children,
  initial = {},
  animate = {},
  transition = {},
  whileInView = {},
  whileFocus = {},
  viewport = {},
  className = "",
}) => {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      whileInView={whileInView}
      whileFocus={whileFocus}
      viewport={viewport}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionContainer;
