import InputBox from "@/components/common/UI/InputBox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  FiMail,
  FiLock,
  FiArrowRight,
  FiUser,
  FiPhone,
  FiCreditCard,
  FiCheck,
  FiX,
} from "react-icons/fi";

const RegisterForm = () => {
  const passwordRules = [
    { label: "At least 6 characters", test: (p) => p.length >= 6 },
    { label: "One uppercase letter", test: (p) => /[A-Z]/.test(p) },
    { label: "One lowercase letter", test: (p) => /[a-z]/.test(p) },
  ];

  return (
    <form className="space-y-5">
      <InputBox
        label="NID Number"
        Icon={FiCreditCard}
        type="text"
        name="nid"
        placeholder="Enter your NID number"
        error={null}
      />

      <InputBox
        label="Full Name"
        Icon={FiUser}
        type="text"
        name="fullName"
        placeholder="Enter your full name"
        error={null}
      />

      <InputBox
        label="Email Address"
        Icon={FiUser}
        type="email"
        name="email"
        placeholder="you@example.com"
        error={null}
      />

      <InputBox
        label="Contact Number"
        Icon={FiPhone}
        type="tel"
        name="phone"
        placeholder="+880 1234 567890"
        error={null}
      />

      <InputBox
        label="Password"
        Icon={FiLock}
        type="password"
        name="password"
        placeholder="Create a password"
        error={null}
      />
      <div className="mt-3 space-y-1.5">
          {passwordRules.map((rule) => {
            const passed = rule.test("abeceadfsa44");
            return (
              <div
                key={rule.label}
                className={`flex items-center gap-2 text-sm ${
                  passed ? "text-emerald-600" : "text-red-600"
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

      <Button
        type="submit"
        className="w-full btn-primary rounded-xl h-14 text-base mt-6"
      >
        <FiArrowRight className="ml-2" /> Create Account
      </Button>
    </form>
  );
};

export default RegisterForm;
