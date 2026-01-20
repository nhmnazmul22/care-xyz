"use client";
import { AnimatePresence } from "motion/react";
import { FiCheck, FiClock, FiMapPin } from "react-icons/fi";
import useBookingStore from "@/stores/useBookingStore";
import DurationType from "./DurationType";
import LocationStep from "./LocationStep";
import Confirmation from "./Confirmation";

const steps = [
  { number: 1, title: "Duration", icon: FiClock },
  { number: 2, title: "Location", icon: FiMapPin },
  { number: 3, title: "Confirm", icon: FiCheck },
];

const BookingForm = ({ service }) => {
  const { step } = useBookingStore();

  return (
    <div className="lg:col-span-2">
      <h1 className="text-3xl font-bold text-foreground mb-2">
        Book {service.title}
      </h1>
      <p className="text-muted-foreground mb-8">
        Complete the steps below to book your caregiver
      </p>

      <div className="flex items-center mb-10">
        {steps.map((s, index) => (
          <div key={s.number} className="flex items-center">
            <div
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                step >= s.number
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              <s.icon className="w-4 h-4" />
              <span className="text-sm font-medium hidden sm:inline">
                {s.title}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`w-12 h-0.5 mx-2 ${
                  step > s.number ? "bg-primary" : "bg-muted"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && <DurationType service={service} />}
        {step === 2 && <LocationStep />}
        {step === 3 && <Confirmation service={service} />}
      </AnimatePresence>
    </div>
  );
};

export default BookingForm;
