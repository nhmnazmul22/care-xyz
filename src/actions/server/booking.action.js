"use server";

import { collections } from "@/config/db";
import { bookServiceDTO } from "@/DTO";
import { RequestValidation } from "@/lib/requestValidation";
import { nowDate } from "@/lib/utils";
import { getServerSession } from "next-auth";

export const bookService = async (payload) => {
  try {
    const { user } = await getServerSession();
    const { isError, errors } = RequestValidation(payload, bookServiceDTO);
    if (isError) {
      return {
        success: false,
        message: "Validation failed",
        errors: errors,
      };
    }

    const bookingsColl = await collections.BOOKINGS();
    const result = await bookingsColl.insertOne({
      ...payload,
      customerName: user.name,
      customerEmail: user.email,
      createdAt: nowDate(),
      updatedAt: nowDate(),
    });

    return {
      success: true,
      message: "Service booking successful",
      data: { ...result, insertedId: result?.insertedId.toString() },
    };
  } catch (err) {
    return {
      success: false,
      message: err?.message || "Service booking failed",
    };
  }
};
