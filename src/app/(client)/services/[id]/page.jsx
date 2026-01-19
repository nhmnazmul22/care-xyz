import EmptyState from "@/components/pages/ServiceDetails/EmptyState";
import Hero from "@/components/pages/ServiceDetails/Hero";
import Details from "@/components/pages/ServiceDetails/Details";
import { getService } from "@/actions/server/service.action";

const ServiceDetailsPage = async ({ params }) => {
  const serviceId = (await params).id;
  const { data: service } = await getService(serviceId);

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
