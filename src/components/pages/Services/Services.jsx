import React from "react";
import EmptyState from "./EmptyState";
import { services } from "@/constant";
import ServiceCard from "@/components/service/ServiceCard";

const Services = () => {
  return (
    <section className="py-16">
      <div className="container-custom">
        {services.length > 0 ? (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={service._id} service={service} />
              ))}
            </div>
          </>
        ) : (
          <EmptyState />
        )}
      </div>
    </section>
  );
};

export default Services;
