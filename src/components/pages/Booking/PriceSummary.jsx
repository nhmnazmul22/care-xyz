import Image from "next/image";
import React from "react";
import { FiDollarSign } from "react-icons/fi";

const PriceSummary = ({ service }) => {
  return (
    <div>
      <div className="sticky top-28 p-6 rounded-2xl bg-card border border-border shadow-lg">
        <h3 className="text-lg font-semibold text-foreground mb-6">
          Price Summary
        </h3>

        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-4">
            <Image
              src={service.image}
              alt={service.title}
              className="w-16 h-16 rounded-xl object-cover"
              width={600}
              height={600}
            />
            <div>
              <div className="font-medium text-foreground">{service.title}</div>
              <div className="text-sm text-muted-foreground">
                ${pricePerUnit}/{durationType === "hours" ? "hr" : "day"}
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">
                {durationType === "hours" ? "Hourly" : "Daily"} rate
              </span>
              <span className="text-foreground">${pricePerUnit}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Duration</span>
              <span className="text-foreground">× {duration}</span>
            </div>
          </div>

          <div className="border-t border-border pt-4">
            <div className="flex justify-between">
              <span className="font-semibold text-foreground">Total</span>
              <span className="text-2xl font-bold text-primary">
                ${totalCost}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <FiDollarSign className="w-4 h-4" />
          <span>Payment collected after service</span>
        </div>
      </div>
    </div>
  );
};

export default PriceSummary;
