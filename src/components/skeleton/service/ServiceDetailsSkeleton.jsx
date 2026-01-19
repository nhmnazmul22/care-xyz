import React from "react";

const ServiceDetailsSkeleton = () => {
  return (
    <section className="section-padding animate-pulse">
      <div className="container-custom">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="h-7 w-48 bg-muted rounded mb-6" />
            <div className="grid sm:grid-cols-2 gap-4">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border"
                >
                  <div className="w-6 h-6 rounded-full bg-muted shrink-0 mt-0.5" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-muted rounded w-full" />
                    <div className="h-4 bg-muted rounded w-3/4" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="sticky top-28 p-8 rounded-2xl bg-card border border-border shadow-lg">
              <div className="h-5 w-40 bg-muted rounded mb-6" />
              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-xl bg-muted/50 space-y-2">
                  <div className="h-3 w-24 bg-muted rounded" />
                  <div className="h-8 w-32 bg-muted rounded" />
                </div>
                <div className="p-4 rounded-xl bg-muted/50 space-y-2">
                  <div className="flex justify-between">
                    <div className="h-3 w-20 bg-muted rounded" />
                    <div className="h-3 w-16 bg-muted rounded" />
                  </div>
                  <div className="h-8 w-36 bg-muted rounded" />
                </div>
              </div>

              <div className="h-14 w-full bg-muted rounded-xl" />
              <div className="h-3 w-48 bg-muted rounded mx-auto mt-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsSkeleton;
