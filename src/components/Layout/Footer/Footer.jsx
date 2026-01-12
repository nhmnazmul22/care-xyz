import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Link from "next/link";
import Logo from "@/components/common/Logo/Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Logo />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Making caregiving easy, secure, and accessible. Your trusted
              partner in finding compassionate care for your loved ones.
            </p>
            <div className="flex gap-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
                (Icon, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center
                     hover:bg-primary hover:text-primary-foreground transition-colors text-foreground"
                  >
                    <Icon className="w-4 h-4" />
                  </Link>
                )
              )}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "About Us", "Services", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-foreground">
              Our Services
            </h4>
            <ul className="space-y-2">
              {[
                "Baby Care",
                "Elderly Care",
                "Sick People Care",
                "Emergency Care",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-foreground">
              Contact Us
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <FiMapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  123 Care Street, Gulshan, Dhaka 1212, Bangladesh
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground text-sm">
                  +880 1234 567890
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground text-sm">
                  hello@care.xyz
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Care.xyz. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
