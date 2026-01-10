import React from "react";
import HeroInfo from "./HeroInfo";
import HeroImg from "./HeroImg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-125 h-125 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-100 h-100 bg-coral/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 right-1/3 w-75 h-75 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <HeroInfo />
          <HeroImg />
        </div>
      </div>
    </section>
  );
};

export default Hero;
