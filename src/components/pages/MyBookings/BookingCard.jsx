"use client";
import React from 'react';
import MotionContainer from "@/components/common/motion/MotionContainer.jsx";
import StatusBadge from "@/components/common/UI/StatusBadge.jsx";
import {FiCalendar, FiClock, FiEye, FiMapPin, FiX} from "react-icons/fi";
import {Button} from "@/components/ui/button.jsx";
import Image from "next/image";
import {toast} from "sonner";
import Swal from "sweetalert2";

const BookingCard = ({booking, index,}) => {

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

    const handleViewDetails = async (booking) => {
        Swal.fire({
            title: booking.serviceName,
            html: `
            <div style="text-align: left; padding: 1rem 0;">
              <div style="margin-bottom: 1rem;">
                <strong style="color: #6b7280;">Duration</strong>
                <p style="margin: 0.25rem 0;">
                    ${booking.duration} ${booking.durationType}
                </p>
              </div>
              <div style="margin-bottom: 1rem;">
                <strong style="color: #6b7280;">Location</strong>
                <p style="margin: 0.25rem 0;">${booking.bookingAddress?.area}, ${
                booking.bookingAddress?.city
            }</p>
                <p style="margin: 0; font-size: 0.875rem; color: #9ca3af;">${
                booking.bookingAddress?.district
            }, ${booking.bookingAddress?.division}</p>
                <p style="margin: 0.25rem 0; font-size: 0.875rem;">${
                booking.bookingAddress?.fullAddress
            }</p>
              </div>
              <div style="margin-bottom: 1rem;">
                <strong style="color: #6b7280;">Total Cost</strong>
                <p style="margin: 0.25rem 0; font-size: 1.25rem; font-weight: bold; color: #2a9d8f;">$${
                booking.totalPrice
            }</p>
              </div>
              <div>
                <strong style="color: #6b7280;">Booked On</strong>
                <p style="margin: 0.25rem 0;">${new Date(
                booking.createdAt
            ).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
            })}</p>
              </div>
            </div>
          `,
            confirmButtonText: "Close",
            confirmButtonColor: "#2a9d8f",
            imageUrl: booking?.serviceImage,
            imageHeight: 150,
        });
    };

    return (
        <MotionContainer
            key={booking.id}
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.3, delay: index * 0.05}}
            className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
        >
            <div className="flex flex-col md:flex-row  gap-6">
                <div className="w-full md:w-32 h-24 rounded-xl overflow-hidden shrink-0">
                    <Image
                        src={booking.serviceImage || ""}
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
                                ${booking.totalPrice}
                            </div>
                            <div className="text-sm text-muted-foreground">
                                Total
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                            <FiClock className="w-4 h-4"/>
                            {booking.duration} {booking.durationType}
                        </div>
                        <div className="flex items-center gap-1">
                            <FiMapPin className="w-4 h-4"/>
                            {booking.bookingAddress?.area}, {booking.bookingAddress?.city}
                        </div>
                        <div className="flex items-center gap-1">
                            <FiCalendar className="w-4 h-4"/>
                            {new Date(booking.createdAt).toLocaleDateString()}
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 ">
                    <Button
                        variant="outline"
                        size="lg"
                        onClick={() => handleViewDetails(booking)}
                        className="rounded-lg flex-1"
                    >
                        <FiEye className="w-6 h-6"/>
                    </Button>
                    {booking.status === "pending" && (
                        <Button
                            variant="destructive"
                            size='lg'
                            onClick={() =>
                                handleCancelBooking(
                                    booking._id,
                                    booking.serviceName
                                )
                            }
                            className="rounded-lg flex-1"
                        >
                            <FiX className="w-6 h-6"/>
                        </Button>
                    )}
                </div>
            </div>
        </MotionContainer>
    );
};

export default BookingCard;