import MotionContainer from "@/components/common/motion/MotionContainer";
import { Button } from "@/components/ui/button";
import { stats } from "@/constant";
import Link from "next/link";
import { FiArrowRight, FiAward } from "react-icons/fi";

const HeroInfo = () => {
  return (
    <MotionContainer
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <span
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium
             mb-6 border border-primary/20"
      >
        <FiAward className="w-4 h-4" />
        Trusted by 10,000+ Families
      </span>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
        Compassionate Care for{" "}
        <span className="text-primary">Your Loved Ones</span>
      </h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-xl">
        Professional caregiving services for babies, elderly, and those
        recovering from illness. We bring peace of mind by connecting you with
        verified, compassionate caregivers.
      </p>
      <div className="flex flex-wrap gap-4">
        <Link href="/services">
          <Button
            size="lg"
            className="btn-primary rounded-xl px-8 h-14 text-base max-sm:flex-1"
          >
            Find a Caregiver
            <FiArrowRight className="ml-2" />
          </Button>
        </Link>
        <Link href="/auth/register">
          <Button
            size="lg"
            variant="outline"
            className="rounded-xl px-8 h-14 text-base border-2 border-primary/30 text-primary hover:bg-primary/5 max-sm:flex-1"
          >
            Become a Caregiver
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-border">
        {stats.map((stat, index) => (
          <MotionContainer
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
          >
            <div className="text-3xl font-bold text-primary">{stat.number}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </MotionContainer>
        ))}
      </div>
    </MotionContainer>
  );
};

export default HeroInfo;
