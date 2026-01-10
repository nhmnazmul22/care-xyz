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
    <MotionContainer
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/95 backdrop-blur-lg
        dark:shadow-sm dark:border-b border-border`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-18">
          <Logo />
          <div className="hidden md:flex items-center gap-8">
            <NavLinks />
          </div>

          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Link href="/auth/login">
              <Button variant="ghost">Sign In</Button>
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
