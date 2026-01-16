"use client";

import PasswordShowButton from "@/components/common/Buttons/PasswordShowButton";
import MotionContainer from "@/components/common/motion/MotionContainer";
import ErrorMessages from "@/components/common/UI/ErrorMessages";
import InputBox from "@/components/common/UI/InputBox";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FiArrowRight, FiLock, FiMail } from "react-icons/fi";
import { toast } from "sonner";

const LoginForm = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();
  const router = useRouter();

  const handleLogin = async (data) => {
    const result = await signIn("credentials", {
      redirect: false,
      email: data?.email,
      password: data?.password,
    });

    if (!result.ok) {
      const errorData = JSON.parse(result.error);
      toast.error(errorData?.message || "Sign in failed. Please, try again.", {
        description: <ErrorMessages errors={errorData?.errors} />,
      });
      return;
    }
    toast.success("Sing in successful");
    router.push("/");
  };

  return (
    <MotionContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="p-8 rounded-2xl bg-card border border-border shadow-lg sm:w-lg"
    >
      <form onSubmit={handleSubmit(handleLogin)} className="space-y-6">
        <InputBox
          label="Email Address"
          Icon={FiMail}
          type="email"
          name="email"
          placeholder="you@example.com"
          error={errors.email ? errors.email.message : null}
          {...register("email", { required: "Email is required" })}
        />

        <div className="relative!">
          <InputBox
            label="Password"
            Icon={FiLock}
            type={isShowPassword ? "text" : "password"}
            name="password"
            placeholder="*********"
            error={errors.password ? errors.password.message : null}
            {...register("password", {
              required: "Password is required",
              pattern: {
                value: /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/,
                message:
                  "At least 6 characters, one uppercase & one lowercase letter",
              },
            })}
          />
          <PasswordShowButton
            isShowPassword={isShowPassword}
            setIsShowPassword={setIsShowPassword}
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary rounded-xl h-14 text-base"
        >
          {isSubmitting ? (
            "Signing in..."
          ) : (
            <>
              Sing in <FiArrowRight className="ml-2" />
            </>
          )}
        </Button>
      </form>

      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-card text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      <Button
        type="button"
        variant="outline"
        className="w-full rounded-xl h-14 text-base"
      >
        <FcGoogle className="w-5 h-5 mr-2" />
        Sign in with Google
      </Button>

      <p className="text-center text-muted-foreground mt-6">
        {"Don't"} have an account?
        <Link
          href="/auth/register"
          className="text-primary hover:underline font-medium ms-1"
        >
          Create one
        </Link>
      </p>
    </MotionContainer>
  );
};

export default LoginForm;
