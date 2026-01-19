import ServiceCardSkeleton from "./ServiceCardSkeleton";

const ServicesSkeleton = () => {
  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <ServiceCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSkeleton;
