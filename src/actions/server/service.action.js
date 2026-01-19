"use server";

import { collections } from "@/config/db.js";

export const getServices = async () => {
  try {
    const serviceColl = await collections.SERVICES();
    const services = await serviceColl.find({}).toArray();
    const formattedServices = services.map((service) => {
      return { ...service, _id: service._id.toString() };
    });
    return {
      success: true,
      message: "Services retrieved successful",
      data: formattedServices,
    };
  } catch (err) {
    return {
      success: false,
      message: err?.message || "Failed to retrieved services data",
    };
  }
};

export const getService = async (serviceId) => {
  try {
    const serviceColl = await collections.SERVICES();
    const service = await serviceColl.findOne({ _id: serviceId });

    if (!service) {
      return {
        success: false,
        message: "Service retrieved failed",
        data: null,
      };
    }
    return {
      success: true,
      message: "Service retrieved successful",
      data: { ...service, _id: service._id.toString() },
    };
  } catch (err) {
    return {
      success: false,
      message: err?.message || "Failed to retrieved service data",
    };
  }
};
