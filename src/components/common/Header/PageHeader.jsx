import React from "react";
import MotionContainer from "../motion/MotionContainer";

const PageHeader = ({ title = "", subTitle = "" }) => {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-coral/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <MotionContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {title}
          </h1>
          <p className="text-lg text-muted-foreground">{subTitle}</p>
        </MotionContainer>
      </div>
    </section>
  );
};

export default PageHeader;
