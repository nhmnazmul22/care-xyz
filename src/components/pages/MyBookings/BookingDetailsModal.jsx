"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import Image from "next/image";
import {FiEye} from "react-icons/fi";
import React from "react";
import StatusBadge from "@/components/common/UI/StatusBadge.jsx";

const BookingDetailsModal = ({booking}) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant="outline"
                    size="lg"
                    className="rounded-lg flex-1 border-border"
                >
                    <FiEye className="w-6 h-6"/>
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg border-border">
                <DialogHeader>
                    <DialogTitle className="text-xl">
                        {booking.serviceName}
                    </DialogTitle>
                </DialogHeader>

                <div className="relative h-40 w-full overflow-hidden rounded-lg">
                    <Image
                        src={booking.serviceImage}
                        alt={booking.serviceName}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="space-y-4 text-sm">
                    <div>
                        <p className="text-muted-foreground">Duration</p>
                        <p className="font-medium">
                            {booking.duration} {booking.durationType}
                        </p>
                    </div>

                    <div>
                        <p className="text-muted-foreground">Location</p>
                        <p className="font-medium">
                            {booking.bookingAddress?.area},{" "}
                            {booking.bookingAddress?.city}
                        </p>
                        <p className="text-xs text-muted-foreground">
                            {booking.bookingAddress?.district},{" "}
                            {booking.bookingAddress?.division}
                        </p>
                        <p className="text-xs">
                            {booking.bookingAddress?.fullAddress}
                        </p>
                    </div>

                    <Separator/>

                    {/* Price + Status */}
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-muted-foreground">Total Cost</p>
                            <p className="text-lg font-semibold text-primary">
                                ${booking.totalPrice}
                            </p>
                        </div>

                        <StatusBadge status={booking.status}/>
                    </div>

                    {/* Date */}
                    <div>
                        <p className="text-muted-foreground">Booked On</p>
                        <p>
                            {new Date(booking.createdAt).toLocaleDateString("en-US", {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </p>
                    </div>
                </div>

                <Button className="w-full">
                    Close
                </Button>
            </DialogContent>
        </Dialog>
    );
};

export default BookingDetailsModal;