import MotionContainer from "@/components/common/motion/MotionContainer";
import { team } from "@/constant";
import Image from "next/image";
import React from "react";

const TeamSection = () => {
  return (
    <section className="py-20">
      <div className="container-custom">
        <MotionContainer
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Our Team
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate professionals dedicated to transforming care services.
          </p>
        </MotionContainer>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <MotionContainer
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="relative mb-4 mx-auto w-40 h-40 rounded-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {member.name}
              </h3>
              <p className="text-primary text-sm font-medium mb-1">
                {member.role}
              </p>
              <p className="text-muted-foreground text-sm">{member.bio}</p>
            </MotionContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
