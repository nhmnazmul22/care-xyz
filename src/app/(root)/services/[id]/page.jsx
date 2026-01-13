"use client";
import { motion } from "motion/react";
import {
  FiArrowLeft,
  FiCheck,
  FiClock,
  FiDollarSign,
  FiArrowRight,
} from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { services } from "@/constant";
import Link from "next/link";
import Image from "next/image";

const ServiceDetailsPage = () => {
  const service = services[0];

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Service Not Found
          </h1>
          <Link href="/" className="text-primary hover:underline">
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-background overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-coral/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <FiArrowLeft />
              Back to Services
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  {service.title}
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  {service.fullDescription}
                </p>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                    <FiClock className="text-primary" />
                    <span className="text-foreground text-sm">
                      Flexible Hours
                    </span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-coral/10 border border-coral/20">
                    <FiDollarSign className="text-coral" />
                    <span className="text-foreground text-sm">
                      From ${service.pricePerHour}/hr
                    </span>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative rounded-3xl overflow-hidden shadow-xl"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={800}
                  height={800}
                  className="w-full h-100 object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-foreground/30 to-transparent" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Details */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Features */}
            <motion.div
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
                  <motion.div
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
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Pricing Card */}
            <motion.div
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
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailsPage;
