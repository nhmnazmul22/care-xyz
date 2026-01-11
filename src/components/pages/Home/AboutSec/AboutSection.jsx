import MotionContainer from "@/components/common/motion/MotionContainer";
import SectionTitle from "@/components/common/Section/SectionTitle";
import { features } from "@/constant";
import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <SectionTitle
          subtitle="Why Choose Us"
          title="Care You Can Trust"
          description="We understand that entrusting someone with the care of your loved ones is a significant decision. That's why we've built a platform focused on trust, quality, and peace of mind."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <MotionContainer
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover-lift"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </MotionContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
