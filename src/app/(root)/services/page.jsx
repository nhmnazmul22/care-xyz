import PageHeader from "@/components/common/Header/PageHeader";
import FilterSec from "@/components/pages/Services/FilterSec";
import Services from "@/components/pages/Services/Services";
import { BaggageClaim } from "lucide-react";

const ServicesPage = () => {
  return (
    <>
      <PageHeader
        badgeLabel="Our Services"
        badgeIcon={<BaggageClaim className="w-4 h-4" />}
        title="Our Services"
        description="Browse our comprehensive range of professional caregiving services
            tailored to your needs"
      />
      <FilterSec />
      <Services />
    </>
  );
};

export default ServicesPage;
