import React from "react";
import MotionContainer from "../motion/MotionContainer";
import Link from "next/link";

const PageHeader = ({
  badgeLabel,
  badgeIcon,
  title,
  subTitle,
  description,
}) => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <MotionContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            {badgeIcon}
            {badgeLabel}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            {title}
            <span className="text-primary"> {subTitle} </span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
        </MotionContainer>
      </div>
    </section>
  );
};

export default PageHeader;
