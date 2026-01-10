import { navLinks } from "@/constant";
import Link from "next/link";
import React from "react";

const NavLinks = () => {
  return navLinks.map((link) => (
    <Link
      key={link.name}
      href={link.path}
      className={`text-sm font-medium transition-colors text-foreground/80 hover:text-primary`}
    >
      {link.name}
    </Link>
  ));
};

export default NavLinks;
