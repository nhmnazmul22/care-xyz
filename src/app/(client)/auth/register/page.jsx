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
                        <RegisterHeader/>

                        <MotionContainer
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: 0.1}}
                            className="p-8 rounded-2xl bg-card border border-border shadow-lg"
                        >
                            <RegisterForm/>

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
