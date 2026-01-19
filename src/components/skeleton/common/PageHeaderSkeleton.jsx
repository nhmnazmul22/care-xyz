import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const PageHeaderSkeleton = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <Skeleton className="h-9 w-48 rounded-full" />
          </div>

          <div className="space-y-4 mb-6">
            <Skeleton className="h-10 md:h-12 lg:h-14 w-full" />
            <Skeleton className="h-10 md:h-12 lg:h-14 w-2/3 mx-auto" />
          </div>
          <div className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-11/12 mx-auto" />
            <Skeleton className="h-4 w-9/12 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeaderSkeleton;
