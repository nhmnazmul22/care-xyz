import { FiClock, FiHeart, FiShield } from "react-icons/fi";
import { FaBaby, FaUserNurse, FaHeartbeat } from "react-icons/fa";
import {
  divisions,
  districtsByDivision,
  citiesByDistrict,
  areasByCity,
} from "./locations";

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

export const services = [
  {
    _id: "baby-care",
    title: "Baby Care",
    shortDescription:
      "Professional and loving care for your little ones with trained caregivers.",
    fullDescription:
      "Our baby care service provides professional, attentive, and loving care for infants and toddlers. Our caregivers are trained in child development, safety protocols, and first aid. We ensure your baby receives the best care while you focus on your responsibilities.",
    icon: FaBaby,
    pricePerHour: 25,
    pricePerDay: 180,
    features: [
      "Certified infant care specialists",
      "Age-appropriate activities and stimulation",
      "Feeding and diaper changing",
      "Sleep schedule maintenance",
      "Daily activity reports",
      "Emergency first aid certified",
    ],
    image:
      "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&auto=format&fit=crop&q=80",
    color: "coral",
  },
  {
    _id: "elderly-care",
    title: "Elderly Care",
    shortDescription:
      "Compassionate support for seniors to maintain their independence and dignity.",
    fullDescription:
      "Our elderly care service provides compassionate, respectful assistance to seniors who need help with daily activities. Our caregivers are trained to support elderly individuals while promoting their independence and maintaining their dignity.",
    icon: FaUserNurse,
    pricePerHour: 30,
    pricePerDay: 220,
    features: [
      "Medication reminders and management",
      "Mobility assistance",
      "Meal preparation and nutrition",
      "Companionship and social engagement",
      "Light housekeeping",
      "Transportation to appointments",
    ],
    image:
      "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&auto=format&fit=crop&q=80",
    color: "primary",
  },
  {
    _id: "sick-care",
    title: "Sick People Care",
    shortDescription:
      "Specialized care for recovery and medical support at home.",
    fullDescription:
      "Our sick care service provides specialized support for individuals recovering from illness, surgery, or managing chronic conditions. Our caregivers work alongside medical professionals to ensure optimal recovery in the comfort of your home.",
    icon: FaHeartbeat,
    pricePerHour: 35,
    pricePerDay: 260,
    features: [
      "Post-surgery recovery support",
      "Medication administration",
      "Vital signs monitoring",
      "Wound care assistance",
      "Physical therapy exercises",
      "Coordination with healthcare providers",
    ],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80",
    color: "secondary",
  },
];

export { divisions, districtsByDivision, citiesByDistrict, areasByCity };
