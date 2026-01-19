import { Link } from "lucide-react";
import React from "react";

const EmptyState = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-foreground mb-4">
          Service Not Found
        </h1>
        <Link href="/services" className="text-primary hover:underline">
          Go back Services
        </Link>
      </div>
    </div>
  );
};

export default EmptyState;
