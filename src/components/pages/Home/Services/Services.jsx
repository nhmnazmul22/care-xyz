import SectionTitle from "@/components/common/Section/SectionTitle";
import ServiceCard from "@/components/Service/ServiceCard";
import { services } from "@/constant";
import React from "react";

const Services = () => {
  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="container-custom">
        <SectionTitle
          subtitle="Our Services"
          title="Professional Care Services"
          description="From infant care to elderly assistance, our trained caregivers provide compassionate support tailored to your needs."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services?.map((service, index) => (
            <ServiceCard key={service._id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
