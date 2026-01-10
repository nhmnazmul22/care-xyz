"use client";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import React from "react";
import NavLinks from "./NavLinks";
import useMobileMenu from "@/stores/useMobileMenu";

const MobileMenu = () => {
  const { isMobileMenuOpen } = useMobileMenu();

  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background border-t border-border shadow-lg"
        >
          <div className="container-custom py-6 space-y-4">
            <div className="flex flex-col gap-2 items-start">
              <NavLinks />
            </div>
            <div className="pt-4 space-y-3 border-t border-border">
              <Link href="/auth/login" className="block">
                <Button variant="outline" className="w-full">
                  Sign In
                </Button>
              </Link>
              <Link href="/auth/register" className="block">
                <Button className="w-full btn-primary">Get Started</Button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
