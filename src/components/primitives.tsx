import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

/**
 * The page is one continuous hairline-framed column on a single canvas
 * colour. Sections are separated by rules, never by background changes.
 */
export function Frame({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[1280px] border-hairline sm:border-x">
      {children}
    </div>
  )
}

/** Horizontal padding shared by every block so the grid never drifts. */
export const GUTTER = "px-5 sm:px-8 lg:px-14"

/**
 * Vertical pacing is a decision, not a constant. Dense sections (lists,
 * grids) sit tight; the two sections carrying the argument get room.
 */
const PACE = {
  tight: "py-[clamp(40px,4.5vw,64px)]",
  base: "py-[clamp(56px,7vw,96px)]",
  airy: "py-[clamp(80px,10vw,144px)]",
} as const

export function Section({
  id,
  label,
  pace = "base",
  divide = true,
  className,
  labelledBy,
  children,
}: {
  id?: string
  /**
   * Rail caption. Deliberately the same string as the nav anchor, so on a
   * long page it tells you where you are. No index number: these sections
   * are an argument, not a sequence.
   */
  label?: string
  pace?: keyof typeof PACE
  divide?: boolean
  className?: string
  labelledBy?: string
  children: ReactNode
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        divide && "border-t border-hairline",
        PACE[pace],
        GUTTER,
        className
      )}
    >
      {label ? (
        <div className="grid gap-y-6 lg:grid-cols-[172px_1fr] lg:gap-x-14">
          {/* duplicates the nav label, so it is hidden from screen readers */}
          <p
            aria-hidden="true"
            className="tag self-start text-muted-foreground lg:sticky lg:top-28"
          >
            {label}
          </p>
          <div className="min-w-0">{children}</div>
        </div>
      ) : (
        children
      )}
    </section>
  )
}

export function Heading({
  id,
  size = "md",
  className,
  children,
}: {
  id?: string
  size?: "md" | "lg"
  className?: string
  children: ReactNode
}) {
  return (
    <h2
      id={id}
      className={cn(
        "heading",
        size === "lg" ? "text-h2-lg" : "text-h2",
        className
      )}
    >
      {children}
    </h2>
  )
}

export function Lede({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <p
      className={cn("max-w-[64ch] text-lead text-muted-foreground", className)}
    >
      {children}
    </p>
  )
}

export function Footnote({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <p
      className={cn("max-w-[68ch] text-small text-muted-foreground", className)}
    >
      {children}
    </p>
  )
}
