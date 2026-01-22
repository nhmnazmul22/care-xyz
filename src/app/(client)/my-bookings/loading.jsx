import React from 'react';
import {Skeleton} from "@/components/ui/skeleton.jsx";

const MyBookingPageLoading = () => {
    return (
        <section className="pt-32 pb-20 min-h-screen">
            <div className="container-custom">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <Skeleton className="h-8 w-48 mb-2"/>
                        <Skeleton className="h-4 w-72"/>
                    </div>

                    <Skeleton className="h-11 w-44 rounded-xl"/>
                </div>

                {/* Booking cards */}
                <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map((item) => (
                        <div
                            key={item}
                            className="rounded-xl space-y-3"
                        >
                            <Skeleton className="h-5 w-1/3"/>
                            <Skeleton className="h-4 w-1/2"/>
                            <Skeleton className="h-4 w-1/4"/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MyBookingPageLoading;