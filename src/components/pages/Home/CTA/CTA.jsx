import MotionContainer from "@/components/common/motion/MotionContainer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { FiArrowRight, FiUsers } from "react-icons/fi";

const CTA = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <MotionContainer
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden p-12 md:p-20 text-center bg-gradient-primary"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>
          <div className="relative z-10">
            <FiUsers className="w-16 h-16 mx-auto mb-6 text-white/80" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Find the Perfect Caregiver?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Join thousands of families who have found peace of mind with
              Care.xyz. Your loved ones deserve the best care possible.
            </p>
            <Link href="/auth/register">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 rounded-xl px-8 h-14 text-base font-semibold"
              >
                Get Started Today
                <FiArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </MotionContainer>
      </div>
    </section>
  );
};

export default CTA;
