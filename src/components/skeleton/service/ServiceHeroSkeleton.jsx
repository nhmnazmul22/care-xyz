import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const ServiceHeroSkeleton = () => {
  return (
    <section className="relative pt-32 pb-20 bg-background overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="mb-8">
          <Skeleton className="h-5 w-40" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Skeleton className="w-16 h-16 rounded-2xl mb-6" />
            <Skeleton className="h-10 w-3/4 mb-4" />
            <Skeleton className="h-10 w-1/2 mb-6" />
            <div className="space-y-3 mb-8">
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-5/6" />
            </div>

            <div className="flex flex-wrap gap-4">
              <Skeleton className="h-10 w-36 rounded-full" />
              <Skeleton className="h-10 w-44 rounded-full" />
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            <Skeleton className="w-full h-105 md:h-125" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHeroSkeleton;
