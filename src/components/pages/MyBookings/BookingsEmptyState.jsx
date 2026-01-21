import React from 'react';
import {FiCalendar} from "react-icons/fi";
import Link from "next/link";
import {Button} from "@/components/ui/button.jsx";
import MotionContainer from "@/components/common/motion/MotionContainer.jsx";

const BookingsEmptyState = () => {
    return (
        <MotionContainer
            initial={{opacity: 0, scale: 0.95}}
            animate={{opacity: 1, scale: 1}}
            className="text-center py-20"
        >
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
                <FiCalendar className="w-10 h-10 text-muted-foreground"/>
            </div>
            <h2 className="text-xl font-semibold text-foreground mb-2">
                No bookings yet
            </h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                You {"haven't"} made any bookings yet. Browse our services and
                book your first caregiver.
            </p>
            <Link href="/services">
                <Button className="btn-primary rounded-xl px-8">
                    Browse Services
                </Button>
            </Link>
        </MotionContainer>
    );
};

export default BookingsEmptyState;