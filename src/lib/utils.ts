import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function projectAnchorId(name: string): string {
  return `project-${name.toLowerCase().replace(/\s+/g, "-")}`;
}
