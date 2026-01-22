import {FiShoppingBag,} from "react-icons/fi";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import BookingsEmptyState from "@/components/pages/MyBookings/BookingsEmptyState.jsx";
import Bookings from "@/components/pages/MyBookings/Bookings.jsx";
import MotionContainer from "@/components/common/motion/MotionContainer.jsx";
import {getBookings} from "@/actions/server/booking.action.js";

const MyBookingPage = async () => {
    const {data: bookings} = await getBookings()

    return (
        <div>
            <section className="pt-32 pb-20">
                <div className="container-custom">
                    <MotionContainer
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                    >
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h1 className="text-3xl font-bold text-foreground mb-2">
                                    My Bookings
                                </h1>
                                <p className="text-muted-foreground">
                                    Manage and track all your caregiving bookings
                                </p>
                            </div>
                            <Link href="/services">
                                <Button className="btn-primary rounded-xl">
                                    <FiShoppingBag className="mr-2"/>
                                    Book New Service
                                </Button>
                            </Link>
                        </div>

                        {bookings?.length === 0 ? (
                            <BookingsEmptyState/>
                        ) : (
                            <Bookings bookings={bookings}/>
                        )}
                    </MotionContainer>
                </div>
            </section>
        </div>
    );
};

export default MyBookingPage;
