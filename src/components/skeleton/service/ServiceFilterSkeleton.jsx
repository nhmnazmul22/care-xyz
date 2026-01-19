import { Skeleton } from "@/components/ui/skeleton";

const ServiceFilterSkeleton = () => {
  return (
    <section className="py-8 border-b border-border bg-card/50">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          <div className="relative w-full lg:w-96">
            <Skeleton className="h-12 w-full rounded-md" />
          </div>

          <div className="flex flex-wrap gap-3 items-center w-full lg:w-auto">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-10 w-40 rounded-md" />
            <Skeleton className="h-10 w-44 rounded-md" />
            <Skeleton className="h-8 w-20 rounded-md" />
          </div>
        </div>

        <div className="mt-4">
          <Skeleton className="h-4 w-48" />
        </div>
      </div>
    </section>
  );
};

export default ServiceFilterSkeleton;
