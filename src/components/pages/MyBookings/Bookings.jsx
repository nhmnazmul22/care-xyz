import React from 'react';
import BookingCard from "@/components/pages/MyBookings/BookingCard.jsx";

const Bookings = ({bookings = []}) => {
    return (
        <div className="space-y-4">
            {bookings?.map((booking, index) => (
                <BookingCard
                    key={booking._id}
                    index={index}
                    booking={booking}
                />
            ))}
        </div>
    );
};

export default Bookings;