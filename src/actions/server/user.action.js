"use server";

import { collections } from "@/config/db";
import { LoginRequestDTO, RegisterRequestDTO } from "@/DTO";
import { RequestValidation } from "@/lib/requestValidation";
import { nowDate } from "@/lib/utils";
import bcrypt from "bcrypt";

export const registerUser = async (userInfo) => {
  try {
    // Validate the properties
    const { isError, errors } = RequestValidation(userInfo, RegisterRequestDTO);
    if (isError) {
      return {
        success: false,
        message: "Validation failed",
        errors: errors,
      };
    }

    // check user exist or not
    const usersColl = await collections.USERS();
    const existUser = await usersColl.findOne({ email: userInfo.email });

    if (existUser) {
      return {
        success: false,
        message: "User already exist",
        errors: {
          email: "This email is already registered",
        },
      };
    }

    // hashed the password
    const hashedPassword = await bcrypt.hash(userInfo.password, 10);

    // save user in database
    const result = await usersColl.insertOne({
      ...userInfo,
      password: hashedPassword,
      createdAt: nowDate(),
      updatedAt: nowDate(),
    });

    return {
      success: true,
      message: "User registration successful",
      data: { ...result, insertedId: result?.insertedId.toString() },
    };
  } catch (err) {
    return {
      success: false,
      message: "Registration failed",
      errors: {
        _global: err?.message || "Unexpected server error",
      },
    };
  }
};

export const loginUser = async ({ email, password }) => {
  try {
    // Validate the properties
    const { isError, errors } = RequestValidation(
      { email, password },
      LoginRequestDTO
    );
    if (isError) {
      return {
        success: false,
        message: "Validation failed",
        errors: errors,
      };
    }

    // Check user exist or not
    const usersColl = await collections.USERS();
    const existUser = await usersColl.findOne({ email: email });
    console.log(email);
    if (!existUser) {
      return {
        success: false,
        message: "User not found",
        errors: {
          email: "This email is not registered",
        },
      };
    }

    // Check password correct or not

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existUser.password
    );
    if (!isPasswordCorrect) {
      return {
        success: false,
        message: "Invalid information",
        errors: {
          email: "Please, provide valid information",
        },
      };
    }

    // return the auth user
    return {
      success: true,
      message: "User login successful",
      data: { ...existUser, _id: existUser._id.toString() },
    };
  } catch (err) {
    return {
      success: false,
      message: "Login failed",
      errors: {
        _global: err?.message || "Unexpected server error",
      },
    };
  }
};
