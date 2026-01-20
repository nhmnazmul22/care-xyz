import { create } from "zustand";

const useBookingStore = create((set, get) => ({
  step: 1,
  bookingAddress: {
    division: "",
    district: "",
    city: "",
    area: "",
    fullAddress: "",
  },
  duration: 1,
  durationType: "hours",

  setStep: (step) => set({ step }),

  setDuration: (type) =>
    set((state) => ({
      duration: type === "add" ? state.duration + 1 : state.duration - 1,
    })),

  setDurationType: (type) =>
    set({
      durationType: type,
    }),

  setBookingAddress: (key, value) =>
    set((state) => ({
      bookingAddress: { ...state.bookingAddress, [key]: value },
    })),
}));

export default useBookingStore;
