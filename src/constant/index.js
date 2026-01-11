import { FiClock, FiHeart, FiShield } from "react-icons/fi";

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "My Bookings", path: "/my-bookings" },
];

export const stats = [
  { number: "10K+", label: "Happy Families" },
  { number: "500+", label: "Verified Caregivers" },
  { number: "98%", label: "Satisfaction Rate" },
  { number: "24/7", label: "Support Available" },
];

export const features = [
  {
    icon: FiShield,
    title: "Verified Caregivers",
    description:
      "All our caregivers undergo rigorous background checks and training verification.",
  },
  {
    icon: FiClock,
    title: "Flexible Scheduling",
    description:
      "Book care by the hour or day. We adapt to your schedule, not the other way around.",
  },
  {
    icon: FiHeart,
    title: "Compassionate Care",
    description:
      "Our caregivers are selected for their empathy, patience, and genuine love for helping others.",
  },
];
