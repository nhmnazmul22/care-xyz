import { services } from "@/constant";
import EmptyState from "@/components/pages/ServiceDetails/EmptyState";
import Hero from "@/components/pages/ServiceDetails/Hero";
import Details from "@/components/pages/ServiceDetails/Details";

const ServiceDetailsPage = () => {
  const service = services[0];

  if (!service) {
    return <EmptyState />;
  }

  return (
    <div>
      <Hero service={service} />
      <Details service={service} />
    </div>
  );
};

export default ServiceDetailsPage;
