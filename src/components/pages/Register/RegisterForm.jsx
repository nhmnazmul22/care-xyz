"use client";
import {registerUser} from "@/actions/server/user.action.js";
import PasswordShowButton from "@/components/common/Buttons/PasswordShowButton";
import ErrorMessages from "@/components/common/UI/ErrorMessages";
import InputBox from "@/components/common/UI/InputBox";
import {Button} from "@/components/ui/button";
import {useState} from "react";
import {useForm, useWatch} from "react-hook-form";
import {FiArrowRight, FiCheck, FiCreditCard, FiLock, FiMail, FiPhone, FiUser, FiX,} from "react-icons/fi";
import {toast} from "sonner";

const passwordRules = [
    {label: "At least 6 characters", test: (p) => p.length >= 6},
    {label: "One uppercase letter", test: (p) => /[A-Z]/.test(p)},
    {label: "One lowercase letter", test: (p) => /[a-z]/.test(p)},
];

const RegisterForm = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const {
        register,
        handleSubmit,
        control,
        formState: {isSubmitting, errors},
    } = useForm();

    const passwordValue = useWatch({
        control,
        name: "password",
        defaultValue: "",
    });

    const handleRegistration = async (data) => {
        const result = await registerUser(data);
        if (!result.success) {
            toast.error(result.message, {
                description: <ErrorMessages errors={result.errors}/>,
            });
            return;
        }
        return toast.success(result.message);
    };

    return (
        <form onSubmit={handleSubmit(handleRegistration)} className="space-y-5">
            <InputBox
                label="NID Number"
                Icon={FiCreditCard}
                type="text"
                name="nid"
                placeholder="Enter your NID number"
                error={errors.nid ? errors.nid.message : null}
                {...register("nid", {
                    required: true,
                    minLength: {value: 10, message: "NID must be at least 10 digits"},
                    maxLength: {value: 16, message: "NID cannot exceed 16 digits"},
                })}
            />

            <InputBox
                label="Full Name"
                Icon={FiUser}
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                error={errors.fullName ? errors.fullName.message : null}
                {...register("fullName", {
                    required: "Full name is required",
                })}
            />

            <InputBox
                label="Contact Number"
                Icon={FiPhone}
                type="tel"
                name="phone"
                placeholder="+880 1234 567890"
                error={errors.phone ? errors.phone.message : null}
                {...register("phone")}
            />

            <InputBox
                label="Email Address"
                Icon={FiMail}
                type="email"
                name="email"
                placeholder="you@example.com"
                error={errors.email ? errors.email.message : null}
                {...register("email", {required: "Email is required"})}
            />

            <div className="relative!">
                <InputBox
                    label="Password"
                    Icon={FiLock}
                    type={isShowPassword ? "text" : "password"}
                    name="password"
                    placeholder="*********"
                    error={null}
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
            <div className="mt-3 space-y-1.5">
                {passwordRules.map((rule) => {
                    const passed = rule.test(passwordValue);
                    return (
                        <div
                            key={rule.label}
                            className={`flex items-center gap-2 text-sm ${
                                passed
                                    ? "text-emerald-600"
                                    : errors.password
                                        ? "text-red-600"
                                        : "text-muted-foreground"
                            }`}
                        >
                            {passed ? (
                                <FiCheck className="w-4 h-4"/>
                            ) : (
                                <FiX className="w-4 h-4"/>
                            )}
                            {rule.label}
                        </div>
                    );
                })}
            </div>

            <Button
                type="submit"
                className="w-full btn-primary rounded-xl h-14 text-base mt-6"
            >
                {isSubmitting ? (
                    <span>Creating Account...</span>
                ) : (
                    <>
                        <FiArrowRight className="ml-2"/> Create Account
                    </>
                )}
            </Button>
        </form>
    );
};

export default RegisterForm;
