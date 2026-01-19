import PageHeaderSkeleton from "@/components/skeleton/common/PageHeaderSkeleton";
import ServiceFilterSkeleton from "@/components/skeleton/service/ServiceFilterSkeleton";
import ServicesSkeleton from "@/components/skeleton/service/ServicesSkeleton";
import React from "react";

const ServiceLoading = () => {
  return (
    <div>
      <PageHeaderSkeleton />
      <ServiceFilterSkeleton />
      <ServicesSkeleton />
    </div>
  );
};

export default ServiceLoading;
