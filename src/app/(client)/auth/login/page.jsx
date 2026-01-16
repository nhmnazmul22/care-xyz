"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { FiMail, FiLock, FiHeart, FiArrowRight } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const navigate = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Welcome back!", {
        description: "You have successfully signed in.",
      });
      navigate.push("/");
    }, 1500);
  };

  const handleGoogleLogin = () => {
    toast.info("Google Sign-In", {
      description: "Google authentication would be triggered here.",
    });
  };

  return (
    <div>
      <section className="pt-32 pb-20 min-h-screen flex items-center">
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
                Welcome Back
              </h1>
              <p className="text-muted-foreground">
                Sign in to manage your bookings and find caregivers
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border shadow-lg"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm font-medium text-foreground">
                      Password
                    </label>
                    <a
                      href="#"
                      className="text-sm text-primary hover:underline"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="relative">
                    <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className={`input-field pl-11 ${
                        errors.password ? "border-destructive" : ""
                      }`}
                    />
                  </div>
                  {errors.password && (
                    <p className="text-sm text-destructive mt-1">
                      {errors.password}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full btn-primary rounded-xl h-14 text-base"
                >
                  {isLoading ? "Signing in..." : "Sign In"}
                  {!isLoading && <FiArrowRight className="ml-2" />}
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
                onClick={handleGoogleLogin}
                className="w-full rounded-xl h-14 text-base"
              >
                <FcGoogle className="w-5 h-5 mr-2" />
                Sign in with Google
              </Button>

              <p className="text-center text-muted-foreground mt-6">
                {"Don't"} have an account?
                <Link
                  href="/auth/register"
                  className="text-primary hover:underline font-medium"
                >
                  Create one
                </Link>
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
