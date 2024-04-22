import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Get the element type of an array.
 */
export type ElementOf<T> = T extends readonly (infer E)[] ? E : never

export const envVarsPresent = () => {
  const gigsProject = process.env.GIGS_PROJECT
  const gigsAPIKey = process.env.GIGS_API_KEY

  return !!gigsProject && !!gigsAPIKey
}
