"use server";

import {collections} from "@/config/db";
import {bookServiceDTO} from "@/DTO";
import {RequestValidation} from "@/lib/requestValidation";
import {nowDate} from "@/lib/utils";
import {getServerSession} from "next-auth";
import {sendEmail} from "@/lib/sendEmail.js";

export const bookService = async (payload) => {
    try {
        const {user} = await getServerSession();

        if (!user) {
            return {
                success: false,
                message: "Forbidden",
                errors: {
                    unauthorized: "You are not allowed for this operation"
                },
            }
        }


        const {isError, errors} = RequestValidation(payload, bookServiceDTO);
        if (isError) {
            return {
                success: false,
                message: "Validation failed",
                errors: errors,
            };
        }

        const servicesColl = await collections.SERVICES();
        const service = await servicesColl.findOne({_id: payload.serviceId})


        if (!service) {
            return {
                success: false,
                message: "Service not found",
                errors: {
                    service: "This service not available at this moment."
                }
            }
        }

        const totalPrice = payload.durationType === "hours" ? service.pricePerHour * payload.duration : service.pricePerDay * payload.duration;

        const bookingInfo = {
            ...payload,
            totalPrice,
            status: "pending",
            customerName: user.name,
            customerEmail: user.email,
            createdAt: nowDate(),
            updatedAt: nowDate(),
        }

        const bookingsColl = await collections.BOOKINGS();
        const result = await bookingsColl.insertOne(bookingInfo);


        if (result.insertedId) {
            await sendEmail({
                to: bookingInfo.customerEmail,
                subject: "Booking Confirmation",
                html: `
                    <h2>Booking Confirmed 🎉</h2>
                    <p>Your service <strong>${bookingInfo.serviceName}</strong> has been booked successfully.</p>
                    <ul>
                      <li><strong>Duration:</strong> ${bookingInfo.duration} ${bookingInfo.durationType}</li>
                      <li><strong>Total Price:</strong> $${bookingInfo.totalPrice}</li>
                      <li><strong>Status:</strong> ${bookingInfo.status}</li>
                    </ul>
                    <p>Thank you for choosing our service.</p>
                  `,
            });
        }

        return {
            success: true,
            message: "Service booking successful",
            data: {...result, insertedId: result?.insertedId.toString()},
        };
    } catch (err) {
        return {
            success: false,
            message: "Service booking failed",
            errors: {
                _global: err?.message || "Unexpected server error",
            },
        };
    }
};

export const getBookings = async () => {
    try {
        const {user} = await getServerSession();

        if (!user) {
            return {
                success: false,
                message: "Forbidden",
                errors: {
                    unauthorized: "You are not allowed for this operation"
                },
            }
        }

        const bookingsColl = await collections.BOOKINGS();
        const bookings = await bookingsColl.find({customerEmail: user.email}).toArray();

        const formattedBookings = bookings.map((booking) => ({...booking, _id: booking._id.toString()}))

        return {
            success: true,
            message: "Service booking successful",
            data: formattedBookings,
        };
    } catch (err) {
        return {
            success: false,
            message: "Bookings retrieved failed",
            errors: {
                _global: err?.message || "Unexpected server error",
            },
        };
    }
}