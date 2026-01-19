import ServiceHeroSkeleton from "@/components/skeleton/service/ServiceHeroSkeleton";
import React from "react";

const ServiceDetailLoading = () => {
  return (
    <div className="">
      <ServiceHeroSkeleton />
      <ServiceHeroSkeleton />
    </div>
  );
};

export default ServiceDetailLoading;
