import PageHeader from "@/components/common/Header/PageHeader";
import StatsSection from "@/components/pages/About/StatsSec/StatsSection";
import StorySection from "@/components/pages/About/StorySec/StorySection";
import TeamSection from "@/components/pages/About/TeamSec/TeamSection";
import ValueSection from "@/components/pages/About/ValueSec/ValueSection";
import { FiTarget } from "react-icons/fi";

const AboutPage = () => {
  return (
    <div>
      <PageHeader
        badgeLabel="Our Mission"
        badgeIcon={<FiTarget />}
        title="Caring for Those Who"
        subTitle=" Matter Most"
        description="At Care.xyz, we're dedicated to connecting families with compassionate, qualified caregivers who provide exceptional
        care for your loved ones. Our platform makes finding trusted care simple, safe, and stress-free."
      />
      <StatsSection />
      <StorySection />
      <ValueSection />
      <TeamSection />
    </div>
  );
};

export default AboutPage;
