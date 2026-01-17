import MotionContainer from "@/components/common/motion/MotionContainer";
import Image from "next/image";
import React from "react";
import { FiStar } from "react-icons/fi";

const StorySection = () => {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <MotionContainer
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Care.xyz was born from a personal experience. When our founder,
                Sarah, struggled to find reliable care for her aging mother, she
                realized how fragmented and stressful the process could be for
                families.
              </p>
              <p>
                In 2020, she assembled a team of healthcare professionals,
                technologists, and caregivers to build a platform that would
                transform how families find and connect with caregivers.
              </p>
              <p>
                Today, {"we've"} helped thousands of families find peace of mind
                knowing their loved ones are in caring, capable hands. Our
                commitment to quality, transparency, and compassion drives
                everything we do.
              </p>
            </div>
          </MotionContainer>

          <MotionContainer
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/assets/hero-bg.jpeg"
                alt="Caregiver with elderly person"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <FiStar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    Trusted by Families
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Since 2020
                  </div>
                </div>
              </div>
            </div>
          </MotionContainer>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
