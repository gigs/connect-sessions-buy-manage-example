import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Get the element type of an array.
 */
export type ElementOf<T> = T extends readonly (infer E)[] ? E : never;
