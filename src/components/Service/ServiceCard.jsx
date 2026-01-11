import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import MotionContainer from "../common/motion/MotionContainer";
import Link from "next/link";

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;

  return (
    <MotionContainer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="card-service h-full flex flex-col">
        <div className="relative h-48 rounded-xl overflow-hidden mb-6">
          <Image
            src={service.image}
            alt={service.title}
            width={600}
            height={600}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
              <Icon className="w-6 h-6 text-primary-foreground" />
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-foreground mb-3">
            {service.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-6 flex-1">
            {service.shortDescription}
          </p>

          <div className="flex items-center justify-between mb-6 p-4 rounded-xl bg-muted/50">
            <div>
              <span className="text-sm text-muted-foreground">
                Starting from
              </span>
              <div className="text-2xl font-bold text-primary">
                ${service.pricePerHour}/hr
              </div>
            </div>
            <div className="text-right">
              <span className="text-sm text-muted-foreground">Or daily</span>
              <div className="text-lg font-semibold text-foreground">
                ${service.pricePerDay}/day
              </div>
            </div>
          </div>

          <Link
            href={`/service/${service.id}`}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary text-primary-foreground font-medium
             hover:opacity-90 transition-all group-hover:gap-4"
          >
            View Details
            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </MotionContainer>
  );
};

export default ServiceCard;
