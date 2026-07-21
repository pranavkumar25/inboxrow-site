import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

/**
 * tailwind-merge only knows Tailwind's built-in font sizes. Our type roles
 * (`text-body`, `text-lead`, …) look like colour utilities to it, so in a
 * string such as `cn("text-lead text-muted-foreground")` it treats the two
 * as conflicting and silently drops the size.
 *
 * Registering the roles as font sizes keeps size and colour independent.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "micro",
            "caption",
            "small",
            "body",
            "h3",
            "lead",
            "h2",
            "h2-lg",
            "stat",
            "display",
          ],
        },
      ],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
