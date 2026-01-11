"use client";

import ThemeToggle from "@/components/theme/ThemeToggle";
import useMobileMenu from "@/stores/useMobileMenu";
import React from "react";
import { FiX } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

const MobileMenuButtons = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useMobileMenu();

  return (
    <div className="flex items-center gap-2 md:hidden">
      <ThemeToggle />
      <button
        className={`p-2 transition-colors text-foreground`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <FiX size={24} /> : <GiHamburgerMenu size={24} />}
      </button>
    </div>
  );
};

export default MobileMenuButtons;
