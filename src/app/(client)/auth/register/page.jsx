import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import RegisterHeader from "@/components/pages/Register/RegisterHeader";
import MotionContainer from "@/components/common/motion/MotionContainer";
import RegisterForm from "@/components/pages/Register/RegisterForm";

const RegisterPage = () => {
  return (
    <div>
      <section className="pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-md mx-auto">
            <RegisterHeader />

            <MotionContainer
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border shadow-lg"
            >
              <RegisterForm />

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
            </MotionContainer>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegisterPage;
