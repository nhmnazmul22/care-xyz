import { bookService } from "@/actions/server/booking.action";
import MotionContainer from "@/components/common/motion/MotionContainer";
import ErrorMessages from "@/components/common/UI/ErrorMessages";
import { Button } from "@/components/ui/button";
import { ICON_CATALOG } from "@/constant/serviceIcons";
import useBookingStore from "@/stores/useBookingStore";
import React from "react";
import { FiMapPin } from "react-icons/fi";
import { toast } from "sonner";
import Swal from "sweetalert2";

const Confirmation = ({ service }) => {
  const { setStep, duration, durationType, bookingAddress } = useBookingStore();

  const pricePerUnit =
    durationType === "hours" ? service.pricePerHour : service.pricePerDay;
  const totalCost = pricePerUnit * duration;

  const handleConfirmBooking = async () => {
    const payload = {
      serviceId: service._id,
      bookingAddress,
      duration,
      durationType,
    };
    const result = await Swal.fire({
      title: "Confirm Booking",
      html: `
        <div style="text-align: left; padding: 1rem 0;">
          <p style="margin-bottom: 0.5rem;"><strong>Service:</strong> ${service.title}</p>
          <p style="margin-bottom: 0.5rem;"><strong>Duration:</strong> ${duration} ${durationType}</p>
          <p style="margin-bottom: 0.5rem;"><strong>Location:</strong> ${bookingAddress.area}, ${bookingAddress.city}</p>
          <p style="margin-bottom: 0.5rem;"><strong>Total Cost:</strong> $${totalCost}</p>
        </div>
      `,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Confirm Booking",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#2a9d8f",
      cancelButtonColor: "#6b7280",
    });

    if (result.isConfirmed) {
      const data = await bookService(payload);
      if (!data.success) {
        toast.error(result.message, {
          description: data.errors && <ErrorMessages errors={result.errors} />,
        });
        return;
      }
      return toast.success(result.message);
    }
  };

  const Icon = ICON_CATALOG[service.iconKey];
  return (
    <MotionContainer
      key="step3"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="p-6 rounded-2xl bg-card border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-6">
          Booking Summary
        </h3>

        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Icon.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <div className="font-semibold text-foreground">
                {service.title}
              </div>
              <div className="text-sm text-muted-foreground">
                {duration} {durationType}
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-muted/50">
            <div className="flex items-start gap-3">
              <FiMapPin className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <div className="font-medium text-foreground">
                  {bookingAddress.area}, {bookingAddress.city}
                </div>
                <div className="text-sm text-muted-foreground">
                  {bookingAddress.district}, {bookingAddress.division}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {bookingAddress.fullAddress}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <Button
          variant="outline"
          onClick={() => setStep(2)}
          className="flex-1 rounded-xl h-14 border-slate-300 dark:border-neutral-900"
        >
          Back
        </Button>
        <Button
          onClick={handleConfirmBooking}
          className="flex-1 btn-primary rounded-xl h-14 text-base"
        >
          Confirm Booking
        </Button>
      </div>
    </MotionContainer>
  );
};

export default Confirmation;
