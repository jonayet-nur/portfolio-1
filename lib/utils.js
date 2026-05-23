import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const getMagneticPosition = (e, element, strength = 40) => {
  const { left, top, width, height } = element.getBoundingClientRect();
  const x = e.clientX - (left + width / 2);
  const y = e.clientY - (top + height / 2);
  return { x: x / strength, y: y / strength };
};
