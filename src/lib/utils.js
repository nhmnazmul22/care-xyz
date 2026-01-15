import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const nowDate = () => {
  return new Date(Date.now()).toLocaleDateString();
};
