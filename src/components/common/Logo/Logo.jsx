import Link from "next/link";
import React from "react";
import { FiHeart } from "react-icons/fi";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div
        className={`w-10 h-10 rounded-md flex items-center justify-center group-hover:scale-105 transition-all bg-primary`}
      >
        <FiHeart className={`w-5 h-5 text-primary-foreground`} />
      </div>
      <span className={`text-xl font-extrabold transition-colors text-foreground`}>
        Care
        <span className="text-primary">.xyz</span>
      </span>
    </Link>
  );
};

export default Logo;
