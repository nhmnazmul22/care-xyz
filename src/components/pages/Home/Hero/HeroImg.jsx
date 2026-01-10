import MotionContainer from "@/components/common/motion/MotionContainer";
import Image from "next/image";
import React from "react";
import { FiStar } from "react-icons/fi";

const HeroImg = () => {
  return (
    <MotionContainer
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative hidden lg:block"
    >
      <div className="relative rounded-3xl overflow-hidden">
        <Image
          src="/assets/hero-bg.jpeg"
          alt="Caregiver with elderly person"
          width={600}
          height={600}
          className="w-full h-150 object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent" />
      </div>

      <MotionContainer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-6 max-w-xs"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="flex -space-x-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border-2 border-card bg-muted overflow-hidden"
              >
                <Image
                  src={"/assets/avatar.jpeg"}
                  alt="Caregiver"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="text-sm">
            <div className="font-semibold text-foreground">500+ Caregivers</div>
            <div className="text-muted-foreground">Available now</div>
          </div>
        </div>
        <div className="flex items-center gap-1 text-amber-500">
          {[1, 2, 3, 4, 5].map((i) => (
            <FiStar key={i} className="w-4 h-4 fill-current" />
          ))}
          <span className="text-foreground font-medium ml-2">4.9/5</span>
        </div>
      </MotionContainer>
    </MotionContainer>
  );
};

export default HeroImg;
