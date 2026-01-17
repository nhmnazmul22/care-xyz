import MotionContainer from "@/components/common/motion/MotionContainer";
import { stats } from "@/constant";
import React from "react";

const StatsSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <MotionContainer
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </MotionContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
