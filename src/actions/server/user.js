"use server";

import { collections } from "@/config/db";
import { RegisterRequestDTO } from "@/DTO";
import { RequestValidation } from "@/lib/requestValidation";
import bcrypt from "bcrypt";

export const registerUser = async (userInfo) => {
  try {
    // Validate the properties
    const { isError, errors } = RequestValidation(userInfo, RegisterRequestDTO);
    if (isError) {
      return {
        success: false,
        message: errors,
      };
    }

    // check user exist or not
    const usersColl = await collections.USERS();
    const existUser = usersColl.findOne({ email: userInfo.email });
    if (existUser) {
      return {
        success: false,
        message: "User already exist",
      };
    }

    // hashed the password
    const hashedPassword = await bcrypt.hash(userInfo.password, 10);
    // create user payload
    const userData = {
      ...userInfo,
      password: hashedPassword,
    };

    // save user in database
    const result = await usersColl.insertOne(userData);
    return {
      success: true,
      message: "User registration successful",
      data: result,
    };
  } catch (err) {
    return {
      success: false,
      message: err?.message || "Registration failed",
    };
  }
};
