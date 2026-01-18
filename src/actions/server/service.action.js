"use server";

import {collections} from "@/config/db.js";

export const getServices = async () => {
    try {
        const serviceColl = await collections.SERVICES();
        const services = await serviceColl.find({}).toArray();
        const formattedServices = services.map((service) => {
            return {...service, _id: service._id.toString()}
        })
        return {
            success: true,
            message: "Services retrieved successful",
            data: formattedServices
        }
    } catch (err) {
        return {
            success: false,
            message: err?.message || "Failed to retrieved services data"
        }
    }
}