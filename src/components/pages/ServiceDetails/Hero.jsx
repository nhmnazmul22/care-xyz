import DecorativeBg from "@/components/common/Header/DecorativeBg";
import MotionContainer from "@/components/common/motion/MotionContainer";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiArrowLeft, FiClock, FiDollarSign } from "react-icons/fi";

const Hero = ({ service }) => {
  const Icon = service.icon;
  return (
    <section className="relative pt-32 pb-20 bg-background overflow-hidden">
      <DecorativeBg />
      <div className="container-custom relative z-10">
        <MotionContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <FiArrowLeft />
            Back to Services
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6">
                <Icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {service.title}
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                {service.fullDescription}
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                  <FiClock className="text-primary" />
                  <span className="text-foreground text-sm">
                    Flexible Hours
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-coral/10 border border-coral/20">
                  <FiDollarSign className="text-coral" />
                  <span className="text-foreground text-sm">
                    From ${service.pricePerHour}/hr
                  </span>
                </div>
              </div>
            </div>

            <MotionContainer
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden shadow-xl"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={800}
                height={800}
                className="w-full h-100 object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-foreground/30 to-transparent" />
            </MotionContainer>
          </div>
        </MotionContainer>
      </div>
    </section>
  );
};

export default Hero;
