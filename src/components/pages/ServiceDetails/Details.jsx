import MotionContainer from "@/components/common/motion/MotionContainer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { FiArrowRight, FiCheck } from "react-icons/fi";

const Details = ({ service }) => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-3 gap-12">
          <MotionContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <h2 className="text-2xl font-bold text-foreground mb-6">
              {"What's Included"}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {service.features.map((feature, index) => (
                <MotionContainer
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <FiCheck className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </MotionContainer>
              ))}
            </div>
          </MotionContainer>

          <MotionContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="sticky top-28 p-8 rounded-2xl bg-card border border-border shadow-lg">
              <h3 className="text-lg font-semibold text-foreground mb-6">
                Pricing Options
              </h3>

              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-xl bg-muted/50">
                  <div className="text-sm text-muted-foreground mb-1">
                    Hourly Rate
                  </div>
                  <div className="text-3xl font-bold text-foreground">
                    ${service.pricePerHour}
                    <span className="text-base font-normal text-muted-foreground">
                      /hour
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-muted-foreground">
                      Daily Rate
                    </span>
                    <span className="text-xs text-primary font-medium">
                      Best Value
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-primary">
                    ${service.pricePerDay}
                    <span className="text-base font-normal text-muted-foreground">
                      /day
                    </span>
                  </div>
                </div>
              </div>

              <Link href={`/booking/${service._id}`}>
                <Button className="w-full btn-primary rounded-xl h-14 text-base font-semibold">
                  Book This Service
                  <FiArrowRight className="ml-2" />
                </Button>
              </Link>

              <p className="text-xs text-muted-foreground text-center mt-4">
                Free cancellation up to 24 hours before
              </p>
            </div>
          </MotionContainer>
        </div>
      </div>
    </section>
  );
};

export default Details;
