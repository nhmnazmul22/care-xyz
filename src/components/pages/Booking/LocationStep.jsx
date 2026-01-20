"use client";
import MotionContainer from "@/components/common/motion/MotionContainer";
import useBookingStore from "@/stores/useBookingStore";
import {
  areasByCity,
  citiesByDistrict,
  districtsByDivision,
  divisions,
} from "@/constant";
import { Button } from "@/components/ui/button";
import SelectBox from "@/components/common/UI/SelectBox";

const LocationStep = () => {
  const { setStep, bookingAddress, setBookingAddress } = useBookingStore();

  const districts = bookingAddress.division
    ? districtsByDivision[bookingAddress.division] || []
    : [];
  const cities = bookingAddress.district
    ? citiesByDistrict[bookingAddress.district]
    : [];
  const areas = bookingAddress.city ? areasByCity[bookingAddress.city] : [];

  const canProceedToStep3 =
    bookingAddress.division &&
    bookingAddress.district &&
    bookingAddress.city &&
    bookingAddress.fullAddress.trim().length > 5;

  return (
    <MotionContainer
      key="step2"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="p-6 rounded-2xl bg-card border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Service Location
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <SelectBox
            triggerLabel="Division"
            placeholder="Select Division"
            keyToChange="division"
            value={bookingAddress.division}
            onValueChange={setBookingAddress}
            options={divisions}
          />
          <SelectBox
            triggerLabel="District"
            placeholder="Select Division"
            keyToChange="district"
            value={bookingAddress.district}
            onValueChange={setBookingAddress}
            options={districts}
            disabled={!bookingAddress.division}
          />

          <SelectBox
            triggerLabel="City"
            placeholder="Select City"
            keyToChange="city"
            value={bookingAddress.city}
            onValueChange={setBookingAddress}
            options={cities}
            disabled={!bookingAddress.district}
          />

          <SelectBox
            triggerLabel="Area"
            placeholder="Select Area"
            keyToChange="area"
            value={bookingAddress.area}
            onValueChange={setBookingAddress}
            options={areas}
            disabled={!bookingAddress.city}
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-foreground mb-2">
            Full Address
          </label>
          <textarea
            value={bookingAddress.fullAddress}
            onChange={(e) => setBookingAddress("fullAddress", e.target.value)}
            placeholder="Enter your complete address including house/apartment number..."
            rows={3}
            className="input-field resize-none"
          />
        </div>
      </div>

      <div className="flex gap-4">
        <Button
          variant="outline"
          onClick={() => setStep(1)}
          className="flex-1 rounded-xl h-14"
        >
          Back
        </Button>
        <Button
          onClick={() => setStep(3)}
          disabled={!canProceedToStep3}
          className="flex-1 btn-primary rounded-xl h-14 text-base"
        >
          Continue to Confirm
        </Button>
      </div>
    </MotionContainer>
  );
};

export default LocationStep;
