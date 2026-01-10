"use client";
import { motion } from "motion/react";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = () => {
  const isDark = false;

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative w-10 h-10 rounded-xl bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: isDark ? 0 : 180,
          scale: isDark ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <FiMoon className="w-5 h-5 text-foreground" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          rotate: isDark ? -180 : 0,
          scale: isDark ? 0 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <FiSun className="w-5 h-5 text-foreground" />
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
