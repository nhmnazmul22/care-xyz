import {  FiX } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ThemeToggle from "../../Theme/ThemeToggle";
import Logo from "@/components/common/Logo/Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import MotionContainer from "@/components/common/motion/MotionContainer";

const Navbar = () => {
  return (
    <MotionContainer>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Logo />
          <div className="hidden md:flex items-center gap-8">
            <NavLinks />
          </div>

          {/* Auth Buttons + Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Link href="/auth/login">
              <Button
                variant="ghost"
                className={`transition-colors text-foreground/80 hover:text-foreground`}
              >
                Sign In
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button className="btn-primary rounded-xl px-6">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button className={`p-2 transition-colors text-foreground`}>
              <FiX size={24} />
            </button>
          </div>
        </div>
      </div>

      <MobileMenu />
    </MotionContainer>
  );
};

export default Navbar;
