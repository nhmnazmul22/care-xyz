import { FiArrowLeft } from "react-icons/fi";
import Link from "next/link";
import EmptyState from "@/components/pages/Booking/EmptyState";
import DecorativeBg from "@/components/common/Header/DecorativeBg";
import MotionContainer from "@/components/common/motion/MotionContainer";
import BookingForm from "@/components/pages/Booking/BookingForm";
import PriceSummary from "@/components/pages/Booking/PriceSummary";
import { getService } from "@/actions/server/service.action";

const BookingPage = async ({ params }) => {
  const serviceId = (await params).serviceId;
  const { data: service } = await getService(serviceId);

  if (!service) {
    return <EmptyState />;
  }

  return (
    <div>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <DecorativeBg />

        <div className="container-custom relative z-10">
          <MotionContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href={`/services/${service._id}`}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <FiArrowLeft />
              Back to Service Details
            </Link>
            <div className="grid lg:grid-cols-3 gap-12">
              <BookingForm service={service} />
              <PriceSummary service={service} />
            </div>
          </MotionContainer>
        </div>
      </section>
    </div>
  );
};

export default BookingPage;
