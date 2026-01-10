import { FiX } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ThemeToggle from "../../Theme/ThemeToggle";
import Logo from "@/components/common/Logo/Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import MotionContainer from "@/components/common/motion/MotionContainer";
import MobileMenuButtons from "./MobileMenuButtons";

const Navbar = () => {
  return (
    <MotionContainer>
      <div className="container-custom">
        <div className="flex items-center justify-between h-18">
          <Logo />
          <div className="hidden md:flex items-center gap-8">
            <NavLinks />
          </div>

          {/* Auth Buttons + Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Link href="/auth/login">
              <Button variant="ghost">
                Sign In
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button className="btn-primary">Get Started</Button>
            </Link>
          </div>

          <MobileMenuButtons />
        </div>
      </div>

      <MobileMenu />
    </MotionContainer>
  );
};

export default Navbar;
