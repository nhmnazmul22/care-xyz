"use client";
import NavLink from "@/components/common/UI/NavLink";
import { navLinks } from "@/constant";
import React from "react";

const NavLinks = () => {
  return navLinks.map((link) => <NavLink key={link.name} link={link} />);
};

export default NavLinks;
