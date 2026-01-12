import { FiAward, FiClock, FiHeart, FiMail, FiMapPin, FiPhone, FiShield, FiUsers } from "react-icons/fi";
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
  { name: "Contact", path: "/contact" },
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

export const priceRanges = [
  { label: "All Prices", value: "all" },
  { label: "Under $30/hr", value: "under-30" },
  { label: "$30 - $35/hr", value: "30-35" },
  { label: "Over $35/hr", value: "over-35" },
];

export const sortOptions = [
  { label: "Default", value: "default" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Name: A-Z", value: "name-asc" },
  { label: "Name: Z-A", value: "name-desc" },
];

export const values = [
  {
    icon: FiHeart,
    title: "Compassion First",
    description:
      "We believe in treating every family member with the utmost care, dignity, and respect they deserve.",
  },
  {
    icon: FiShield,
    title: "Trust & Safety",
    description:
      "All caregivers undergo rigorous background checks and continuous training to ensure your loved ones are in safe hands.",
  },
  {
    icon: FiUsers,
    title: "Community Focused",
    description:
      "We build lasting relationships between caregivers and families, creating a supportive community of care.",
  },
  {
    icon: FiAward,
    title: "Excellence",
    description:
      "We strive for excellence in every interaction, continuously improving our services based on feedback.",
  },
];

export const team = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face",
    bio: "15+ years in healthcare management",
  },
  {
    name: "Michael Chen",
    role: "Head of Operations",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    bio: "Former hospital administrator",
  },
  {
    name: "Emily Rodriguez",
    role: "Care Quality Director",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    bio: "Registered nurse with 10+ years experience",
  },
  {
    name: "David Thompson",
    role: "Technology Lead",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    bio: "Building accessible healthcare tech",
  },
];

export const contactInfo = [
  {
    icon: FiMail,
    title: 'Email Us',
    detail: 'support@care.xyz',
    subDetail: "We'll respond within 24 hours",
  },
  {
    icon: FiPhone,
    title: 'Call Us',
    detail: '+1 (555) 123-4567',
    subDetail: 'Mon-Fri, 8am-8pm EST',
  },
  {
    icon: FiMapPin,
    title: 'Visit Us',
    detail: '123 Care Street, Suite 100',
    subDetail: 'New York, NY 10001',
  },
  {
    icon: FiClock,
    title: 'Business Hours',
    detail: 'Monday - Friday',
    subDetail: '8:00 AM - 8:00 PM EST',
  },
];

export const faqs = [
  {
    question: 'How do I find a caregiver?',
    answer: 'Browse our services, select the type of care you need, and book a caregiver based on your preferences and location.',
  },
  {
    question: 'Are caregivers background checked?',
    answer: 'Yes, all caregivers undergo comprehensive background checks, reference verification, and skills assessment.',
  },
  {
    question: 'What if I need to cancel a booking?',
    answer: 'You can cancel or reschedule bookings up to 24 hours in advance through your account dashboard.',
  },
  {
    question: 'How does payment work?',
    answer: 'We accept all major credit cards. Payment is processed securely after the care session is completed.',
  },
]

export { divisions, districtsByDivision, citiesByDistrict, areasByCity };
