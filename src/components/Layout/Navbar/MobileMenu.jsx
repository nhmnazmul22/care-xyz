"use client";
import { Button } from "@/components/ui/button";
import { AnimatePresence } from "motion/react";
import Link from "next/link";
import React from "react";
import NavLinks from "./NavLinks";
import useMobileMenu from "@/stores/useMobileMenu";
import { useSession } from "next-auth/react";
import NavLink from "@/components/common/UI/NavLink";
import MotionContainer from "@/components/common/motion/MotionContainer";
import { Separator } from "@/components/ui/separator";

const MobileMenu = () => {
  const { isMobileMenuOpen } = useMobileMenu();
  const { status } = useSession();

  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <MotionContainer
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background border-t border-border shadow-lg"
        >
          <div className="container-custom py-6 space-y-4">
            <div className="flex flex-col gap-2 items-start">
              <NavLinks />
              <Separator />
              {status === "authenticated" && (
                <>
                  <NavLink link={{ name: "Profile", path: "/profile" }} />
                  <NavLink link={{ name: "My Booking", path: "/my-booking" }} />
                </>
              )}
            </div>

            {status !== "authenticated" && (
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
            )}
          </div>
        </MotionContainer>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
