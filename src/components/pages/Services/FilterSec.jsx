import {priceRanges, sortOptions} from "@/constant";
import React from "react";
import {Filter, Search} from "lucide-react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select";

const FilterSec = ({services}) => {


    return (
        <section className="py-8 border-b border-border bg-card/50">
            <div className="container-custom">
                <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
                    <div className="relative w-full lg:w-96">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"/>
                        <Input
                            type="text"
                            placeholder="Search services..."
                            className="pl-10 h-12 bg-background"
                        />
                    </div>

                    <div className="flex flex-wrap gap-3 items-center w-full lg:w-auto">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Filter className="w-4 h-4"/>
                            <span>Filters:</span>
                        </div>

                        <Select>
                            <SelectTrigger className="w-40 h-10 bg-background">
                                <SelectValue placeholder="Price Range"/>
                            </SelectTrigger>
                            <SelectContent>
                                {priceRanges.map((range) => (
                                    <SelectItem key={range.value} value={range.value}>
                                        {range.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        <Select>
                            <SelectTrigger className="w-44 h-10 bg-background">
                                <SelectValue placeholder="Sort By"/>
                            </SelectTrigger>
                            <SelectContent>
                                {sortOptions.map((option) => (
                                    <SelectItem key={option.value} value={option.value}>
                                        {option.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        <Button
                            variant="ghost"
                            size="sm"
                            className="text-muted-foreground hover:text-foreground"
                        >
                            Clear All
                        </Button>
                    </div>
                </div>

                <div className="mt-4 text-sm text-muted-foreground">
                    Showing {services.length} of {services.length} services
                </div>
            </div>
        </section>
    );
};

export default FilterSec;
