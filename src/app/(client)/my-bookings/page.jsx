"use client";
import { motion } from "motion/react";
import {
  FiCalendar,
  FiMapPin,
  FiClock,
  FiEye,
  FiX,
  FiShoppingBag,
} from "react-icons/fi";
import Swal from "sweetalert2";
import StatusBadge from "@/components/common/UI/StatusBadge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/constant";

const MyBookingPage = () => {
  const bookings = [];

  const handleCancelBooking = async (bookingId, serviceName) => {
    const result = await Swal.fire({
      title: "Cancel Booking?",
      html: `<p>Are you sure you want to cancel your booking for <strong>${serviceName}</strong>?</p>`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Cancel It",
      cancelButtonText: "Keep Booking",
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#6b7280",
    });

    if (result.isConfirmed) {
      toast.success("Booking cancelled successfully");
    }
  };

  const handleViewDetails = (booking) => {
    const service = services[0];
    // Swal.fire({
    //   title: booking.serviceName,
    //   html: `
    //     <div style="text-align: left; padding: 1rem 0;">
    //       <div style="margin-bottom: 1rem;">
    //         <strong style="color: #6b7280;">Duration</strong>
    //         <p style="margin: 0.25rem 0;">${booking.duration} ${
    //     booking.durationType
    //   }</p>
    //       </div>
    //       <div style="margin-bottom: 1rem;">
    //         <strong style="color: #6b7280;">Location</strong>
    //         <p style="margin: 0.25rem 0;">${booking.location.area}, ${
    //     booking.location.city
    //   }</p>
    //         <p style="margin: 0; font-size: 0.875rem; color: #9ca3af;">${
    //           booking.location.district
    //         }, ${booking.location.division}</p>
    //         <p style="margin: 0.25rem 0; font-size: 0.875rem;">${
    //           booking.location.address
    //         }</p>
    //       </div>
    //       <div style="margin-bottom: 1rem;">
    //         <strong style="color: #6b7280;">Total Cost</strong>
    //         <p style="margin: 0.25rem 0; font-size: 1.25rem; font-weight: bold; color: #2a9d8f;">$${
    //           booking.totalCost
    //         }</p>
    //       </div>
    //       <div>
    //         <strong style="color: #6b7280;">Booked On</strong>
    //         <p style="margin: 0.25rem 0;">${new Date(
    //           booking.createdAt
    //         ).toLocaleDateString("en-US", {
    //           weekday: "long",
    //           year: "numeric",
    //           month: "long",
    //           day: "numeric",
    //         })}</p>
    //       </div>
    //     </div>
    //   `,
    //   confirmButtonText: "Close",
    //   confirmButtonColor: "#2a9d8f",
    //   imageUrl: service?.image,
    //   imageHeight: 150,
    // });
  };

  return (
    <div>
      <section className="pt-32 pb-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">
                  My Bookings
                </h1>
                <p className="text-muted-foreground">
                  Manage and track all your caregiving bookings
                </p>
              </div>
              <Link href="/services">
                <Button className="btn-primary rounded-xl">
                  <FiShoppingBag className="mr-2" />
                  Book New Service
                </Button>
              </Link>
            </div>

            {bookings.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
                  <FiCalendar className="w-10 h-10 text-muted-foreground" />
                </div>
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  No bookings yet
                </h2>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  You {"haven't"} made any bookings yet. Browse our services and
                  book your first caregiver.
                </p>
                <Link href="/services">
                  <Button className="btn-primary rounded-xl px-8">
                    Browse Services
                  </Button>
                </Link>
              </motion.div>
            ) : (
              <div className="space-y-4">
                {bookings.map((booking, index) => {
                  const service = getServiceById(booking.serviceId);
                  return (
                    <motion.div
                      key={booking.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
                    >
                      <div className="flex flex-col md:flex-row md:items-center gap-6">
                        {/* Service Image */}
                        <div className="w-full md:w-32 h-24 rounded-xl overflow-hidden shrink-0">
                          <Image
                            src={service?.image || ""}
                            alt={booking.serviceName}
                            width={500}
                            height={600}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Details */}
                        <div className="flex-1 space-y-2">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <h3 className="text-lg font-semibold text-foreground">
                                {booking.serviceName}
                              </h3>
                              <StatusBadge
                                status={booking.status}
                                className="mt-1"
                              />
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-primary">
                                ${booking.totalCost}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                Total
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <FiClock className="w-4 h-4" />
                              {booking.duration} {booking.durationType}
                            </div>
                            <div className="flex items-center gap-1">
                              <FiMapPin className="w-4 h-4" />
                              {booking.location.area}, {booking.location.city}
                            </div>
                            <div className="flex items-center gap-1">
                              <FiCalendar className="w-4 h-4" />
                              {new Date(booking.createdAt).toLocaleDateString()}
                            </div>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex md:flex-col gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleViewDetails(booking)}
                            className="rounded-lg flex-1"
                          >
                            <FiEye className="w-4 h-4 mr-1" />
                            View
                          </Button>
                          {booking.status === "pending" && (
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={() =>
                                handleCancelBooking(
                                  booking.id,
                                  booking.serviceName
                                )
                              }
                              className="rounded-lg flex-1"
                            >
                              <FiX className="w-4 h-4 mr-1" />
                              Cancel
                            </Button>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MyBookingPage;
