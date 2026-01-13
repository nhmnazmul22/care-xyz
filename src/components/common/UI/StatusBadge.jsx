import { cn } from "@/lib/utils";

const statusConfig = {
  pending: {
    label: "Pending",
    className: "status-pending",
  },
  confirmed: {
    label: "Confirmed",
    className: "status-confirmed",
  },
  completed: {
    label: "Completed",
    className: "status-completed",
  },
  cancelled: {
    label: "Cancelled",
    className: "status-cancelled",
  },
};

const StatusBadge = ({ status, className }) => {
  const config = statusConfig[status];

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium",
        config.className,
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current mr-2" />
      {config.label}
    </span>
  );
};

export default StatusBadge;
