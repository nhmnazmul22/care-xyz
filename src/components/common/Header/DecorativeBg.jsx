import React from "react";

const DecorativeBg = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
    </div>
  );
};

export default DecorativeBg;
