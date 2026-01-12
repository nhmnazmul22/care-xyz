import PageHeader from "@/components/common/Header/PageHeader";
import FilterSec from "@/components/pages/Services/FilterSec";
import Services from "@/components/pages/Services/Services";

const ServicesPage = () => {
  return (
    <>
      <PageHeader
        title="Our Services"
        subTitle="Browse our comprehensive range of professional caregiving services
            tailored to your needs"
      />
      <FilterSec />
      <Services />
    </>
  );
};

export default ServicesPage;
