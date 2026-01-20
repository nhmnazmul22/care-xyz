"use client";
import MotionContainer from "@/components/common/motion/MotionContainer";
import { Button } from "@/components/ui/button";
import useBookingStore from "@/stores/useBookingStore";
import React from "react";

const DurationType = ({ service }) => {
  const { setStep, duration, setDuration, setDurationType, durationType } =
    useBookingStore();

  const canProceedToStep2 = duration > 0;
  return (
    <MotionContainer
      key="step1"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="p-6 rounded-2xl bg-card border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Select Duration Type
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => setDurationType("hours")}
            className={`p-4 rounded-xl border-2 transition-all ${
              durationType === "hours"
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/50"
            }`}
          >
            <div className="font-semibold text-foreground">Hourly</div>
            <div className="text-sm text-muted-foreground">
              ${service.pricePerHour}/hour
            </div>
          </button>
          <button
            onClick={() => setDurationType("days")}
            className={`p-4 rounded-xl border-2 transition-all ${
              durationType === "days"
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/50"
            }`}
          >
            <div className="font-semibold text-foreground">Daily</div>
            <div className="text-sm text-muted-foreground">
              ${service.pricePerDay}/day
            </div>
          </button>
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-card border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          How many {durationType}?
        </h3>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setDuration("remove")}
            className="w-12 h-12 rounded-xl bg-muted text-foreground hover:bg-muted/80 transition-colors text-xl font-bold"
          >
            -
          </button>
          <div className="flex-1 text-center">
            <div className="text-4xl font-bold text-foreground">{duration}</div>
            <div className="text-sm text-muted-foreground">{durationType}</div>
          </div>
          <button
            onClick={() => setDuration("add")}
            className="w-12 h-12 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity
                            text-xl font-bold"
          >
            +
          </button>
        </div>
      </div>

      <Button
        onClick={() => setStep(2)}
        disabled={!canProceedToStep2}
        className="w-full btn-primary rounded-xl h-14 text-base"
      >
        Continue to Location
      </Button>
    </MotionContainer>
  );
};

export default DurationType;
