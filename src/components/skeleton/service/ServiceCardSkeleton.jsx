import { Skeleton } from "@/components/ui/skeleton";

const ServiceCardSkeleton = () => {
  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      <Skeleton className="h-52 w-full" />

      <div className="p-6 space-y-4">
        <Skeleton className="h-6 w-3/4" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
        <div className="flex justify-between items-center pt-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-9 w-28 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default ServiceCardSkeleton;
