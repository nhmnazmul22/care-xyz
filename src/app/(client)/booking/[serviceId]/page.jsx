"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FiArrowLeft,
  FiCheck,
  FiClock,
  FiMapPin,
  FiDollarSign,
} from "react-icons/fi";
import Swal from "sweetalert2";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import {
  areasByCity,
  citiesByDistrict,
  districtsByDivision,
  divisions,
  services,
} from "@/constant";
import Link from "next/link";
import Image from "next/image";

const BookingPage = () => {
  const service = services[0];
  const [step, setStep] = useState(1);
  const [duration, setDuration] = useState(1);
  const [durationType, setDurationType] = useState("hours");
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [address, setAddress] = useState("");
  const pricePerUnit =
    durationType === "hours" ? service.pricePerHour : service.pricePerDay;
  const totalCost = pricePerUnit * duration;

  const districts = division ? districtsByDivision[division] || [] : [];
  const cities = district ? citiesByDistrict[district] : [];
  const areas = city ? areasByCity[city] : [];

  const canProceedToStep2 = duration > 0;
  const canProceedToStep3 =
    division && district && city && area && address.trim().length > 5;

  const handleConfirmBooking = async () => {
    const result = await Swal.fire({
      title: "Confirm Booking",
      html: `
        <div style="text-align: left; padding: 1rem 0;">
          <p style="margin-bottom: 0.5rem;"><strong>Service:</strong> ${service.title}</p>
          <p style="margin-bottom: 0.5rem;"><strong>Duration:</strong> ${duration} ${durationType}</p>
          <p style="margin-bottom: 0.5rem;"><strong>Location:</strong> ${area}, ${city}</p>
          <p style="margin-bottom: 0.5rem;"><strong>Total Cost:</strong> $${totalCost}</p>
        </div>
      `,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Confirm Booking",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#2a9d8f",
      cancelButtonColor: "#6b7280",
    });
  };

  const steps = [
    { number: 1, title: "Duration", icon: FiClock },
    { number: 2, title: "Location", icon: FiMapPin },
    { number: 3, title: "Confirm", icon: FiCheck },
  ];

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

  return (
    <div>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/8 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-coral/8 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href={`/service/${service.id}`}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <FiArrowLeft />
              Back to Service Details
            </Link>

            <div className="grid lg:grid-cols-3 gap-12">
              {/* Form */}
              <div className="lg:col-span-2">
                <h1 className="text-3xl font-bold text-foreground mb-2">
                  Book {service.title}
                </h1>
                <p className="text-muted-foreground mb-8">
                  Complete the steps below to book your caregiver
                </p>

                {/* Steps */}
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
                  {/* Step 1: Duration */}
                  {step === 1 && (
                    <motion.div
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
                            <div className="font-semibold text-foreground">
                              Hourly
                            </div>
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
                            <div className="font-semibold text-foreground">
                              Daily
                            </div>
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
                            onClick={() =>
                              setDuration(Math.max(1, duration - 1))
                            }
                            className="w-12 h-12 rounded-xl bg-muted text-foreground hover:bg-muted/80 transition-colors text-xl font-bold"
                          >
                            -
                          </button>
                          <div className="flex-1 text-center">
                            <div className="text-4xl font-bold text-foreground">
                              {duration}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {durationType}
                            </div>
                          </div>
                          <button
                            onClick={() => setDuration(duration + 1)}
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
                    </motion.div>
                  )}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="p-6 rounded-2xl bg-card border border-border">
                        <h3 className="text-lg font-semibold text-foreground mb-4">
                          Service Location
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                              Division
                            </label>
                            <select
                              value={division}
                              onChange={(e) => {
                                setDivision(e.target.value);
                                setDistrict("");
                                setCity("");
                                setArea("");
                              }}
                              className="input-field"
                            >
                              <option value="">Select Division</option>
                              {divisions.map((d) => (
                                <option key={d} value={d}>
                                  {d}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                              District
                            </label>
                            <select
                              value={district}
                              onChange={(e) => {
                                setDistrict(e.target.value);
                                setCity("");
                                setArea("");
                              }}
                              disabled={!division}
                              className="input-field disabled:opacity-50"
                            >
                              <option value="">Select District</option>
                              {districts.map((d) => (
                                <option key={d} value={d}>
                                  {d}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                              City
                            </label>
                            <select
                              value={city}
                              onChange={(e) => {
                                setCity(e.target.value);
                                setArea("");
                              }}
                              disabled={!district}
                              className="input-field disabled:opacity-50"
                            >
                              <option value="">Select City</option>
                              {cities.map((c) => (
                                <option key={c} value={c}>
                                  {c}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                              Area
                            </label>
                            <select
                              value={area}
                              onChange={(e) => setArea(e.target.value)}
                              disabled={!city}
                              className="input-field disabled:opacity-50"
                            >
                              <option value="">Select Area</option>
                              {areas.map((a) => (
                                <option key={a} value={a}>
                                  {a}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="mt-4">
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Full Address
                          </label>
                          <textarea
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="Enter your complete address including house/apartment number..."
                            rows={3}
                            className="input-field resize-none"
                          />
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <Button
                          variant="outline"
                          onClick={() => setStep(1)}
                          className="flex-1 rounded-xl h-14"
                        >
                          Back
                        </Button>
                        <Button
                          onClick={() => setStep(3)}
                          disabled={!canProceedToStep3}
                          className="flex-1 btn-primary rounded-xl h-14 text-base"
                        >
                          Continue to Confirm
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Confirm */}
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="p-6 rounded-2xl bg-card border border-border">
                        <h3 className="text-lg font-semibold text-foreground mb-6">
                          Booking Summary
                        </h3>

                        <div className="space-y-4">
                          <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                              <service.icon className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <div className="font-semibold text-foreground">
                                {service.title}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {duration} {durationType}
                              </div>
                            </div>
                          </div>

                          <div className="p-4 rounded-xl bg-muted/50">
                            <div className="flex items-start gap-3">
                              <FiMapPin className="w-5 h-5 text-primary mt-0.5" />
                              <div>
                                <div className="font-medium text-foreground">
                                  {area}, {city}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  {district}, {division}
                                </div>
                                <div className="text-sm text-muted-foreground mt-1">
                                  {address}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <Button
                          variant="outline"
                          onClick={() => setStep(2)}
                          className="flex-1 rounded-xl h-14"
                        >
                          Back
                        </Button>
                        <Button
                          onClick={handleConfirmBooking}
                          className="flex-1 btn-primary rounded-xl h-14 text-base"
                        >
                          Confirm Booking
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Price Summary */}
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
                        <div className="font-medium text-foreground">
                          {service.title}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          ${pricePerUnit}/
                          {durationType === "hours" ? "hr" : "day"}
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
                        <span className="font-semibold text-foreground">
                          Total
                        </span>
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
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BookingPage;
