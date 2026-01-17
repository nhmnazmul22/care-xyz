"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ link = { path: "", name: "" } }) => {
  const pathname = usePathname();
  const isActive = pathname === link.path;

  return (
    <Link
      key={link.name}
      href={link.path}
      className={`text-sm font-medium transition-colors text-foreground/80 hover:text-primary ${
        isActive && "text-primary"
      }`}
    >
      {link.name}
    </Link>
  );
};

export default NavLink;
