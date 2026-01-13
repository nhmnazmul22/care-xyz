"use client";
import { useState } from "react";
import { motion } from "motion/react";
import {
  FiMail,
  FiLock,
  FiHeart,
  FiArrowRight,
  FiUser,
  FiPhone,
  FiCreditCard,
  FiCheck,
  FiX,
} from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const navigate = useRouter();
  const [formData, setFormData] = useState({
    nid: "",
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const passwordRules = [
    { label: "At least 6 characters", test: (p) => p.length >= 6 },
    { label: "One uppercase letter", test: (p) => /[A-Z]/.test(p) },
    { label: "One lowercase letter", test: (p) => /[a-z]/.test(p) },
  ];

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nid.trim()) {
      newErrors.nid = "NID number is required";
    } else if (formData.nid.length < 10) {
      newErrors.nid = "Please enter a valid NID number";
    }

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = "Name must be at least 3 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (!passwordRules.every((rule) => rule.test(formData.password))) {
      newErrors.password = "Password does not meet requirements";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    // Simulate registration
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Account created successfully!", {
        description: "Welcome to Care.xyz. You can now sign in.",
      });
      navigate.push("/auth/login");
    }, 1500);
  };

  const handleGoogleSignup = () => {
    toast.info("Google Sign-Up", {
      description: "Google authentication would be triggered here.",
    });
  };

  return (
    <div>
      <section className="pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <Link href="/" className="inline-flex items-center gap-2 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                  <FiHeart className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-2xl font-bold text-foreground">
                  Care<span className="text-primary">.xyz</span>
                </span>
              </Link>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Create Account
              </h1>
              <p className="text-muted-foreground">
                Join thousands of families trusting Care.xyz
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border shadow-lg"
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    NID Number
                  </label>
                  <div className="relative">
                    <FiCreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="text"
                      name="nid"
                      value={formData.nid}
                      onChange={handleChange}
                      placeholder="Enter your NID number"
                      className={`input-field pl-11 ${
                        errors.nid ? "border-destructive" : ""
                      }`}
                    />
                  </div>
                  {errors.nid && (
                    <p className="text-sm text-destructive mt-1">
                      {errors.nid}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className={`input-field pl-11 ${
                        errors.fullName ? "border-destructive" : ""
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-sm text-destructive mt-1">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`input-field pl-11 ${
                        errors.email ? "border-destructive" : ""
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-sm text-destructive mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Contact Number
                  </label>
                  <div className="relative">
                    <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+880 1234 567890"
                      className={`input-field pl-11 ${
                        errors.phone ? "border-destructive" : ""
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-sm text-destructive mt-1">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Create a password"
                      className={`input-field pl-11 ${
                        errors.password ? "border-destructive" : ""
                      }`}
                    />
                  </div>
                  <div className="mt-3 space-y-1.5">
                    {passwordRules.map((rule) => {
                      const passed = rule.test(formData.password);
                      return (
                        <div
                          key={rule.label}
                          className={`flex items-center gap-2 text-sm ${
                            passed
                              ? "text-emerald-600"
                              : "text-muted-foreground"
                          }`}
                        >
                          {passed ? (
                            <FiCheck className="w-4 h-4" />
                          ) : (
                            <FiX className="w-4 h-4" />
                          )}
                          {rule.label}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full btn-primary rounded-xl h-14 text-base mt-6"
                >
                  {isLoading ? "Creating account..." : "Create Account"}
                  {!isLoading && <FiArrowRight className="ml-2" />}
                </Button>
              </form>

              <div className="relative my-6">
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
                onClick={handleGoogleSignup}
                className="w-full rounded-xl h-14 text-base"
              >
                <FcGoogle className="w-5 h-5 mr-2" />
                Sign up with Google
              </Button>

              <p className="text-center text-muted-foreground mt-6">
                Already have an account?{" "}
                <Link
                  href="/auth/login"
                  className="text-primary hover:underline font-medium"
                >
                  Sign in
                </Link>
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegisterPage;
