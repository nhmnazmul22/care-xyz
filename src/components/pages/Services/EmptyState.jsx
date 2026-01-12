import MotionContainer from "@/components/common/motion/MotionContainer";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import React from "react";

const EmptyState = () => {
  return (
    <MotionContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center py-20"
    >
      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
        <Search className="w-8 h-8 text-muted-foreground" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2">
        No services found
      </h3>
      <p className="text-muted-foreground mb-6">
        Try adjusting your search or filter criteria
      </p>
      <Button variant="outline">Clear Filters</Button>
    </MotionContainer>
  );
};

export default EmptyState;
