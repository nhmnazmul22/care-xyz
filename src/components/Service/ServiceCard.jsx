import Image from "next/image";
import MotionContainer from "../common/motion/MotionContainer";
import Link from "next/link";
import { ArrowRight, Clock, DollarSign } from "lucide-react";

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;

  return (
    <MotionContainer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          width={600}
          height={600}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent" />
        <div className="absolute top-4 left-4">
          <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
            <Icon className="w-6 h-6 text-primary-foreground" />
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {service.shortDescription}
        </p>

        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1.5 text-sm">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-foreground font-medium">
              ${service.pricePerHour}
            </span>
            <span className="text-muted-foreground">/hr</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm">
            <DollarSign className="w-4 h-4 text-coral" />
            <span className="text-foreground font-medium">
              ${service.pricePerDay}
            </span>
            <span className="text-muted-foreground">/day</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {service.features.slice(0, 2).map((feature) => (
            <span
              key={feature}
              className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
            >
              {feature.length > 25 ? feature.slice(0, 25) + "..." : feature}
            </span>
          ))}
          {service.features.length > 2 && (
            <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
              +{service.features.length - 2} more
            </span>
          )}
        </div>

        <Link
          href={`/services/${service._id}`}
          className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
        >
          View Details
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </MotionContainer>
  );
};

export default ServiceCard;
