import type * as React from "react"

import logoUrl from "@/assets/logo.svg"
import markUrl from "@/assets/mark.svg"
import {
  AdjustmentsHorizontalIcon,
  ArrowDownIcon,
  ArrowRightIcon,
  AtSymbolIcon,
  BoltIcon,
  BriefcaseIcon,
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ClockIcon,
  EnvelopeIcon,
  ExclamationTriangleIcon,
  EyeSlashIcon,
  GlobeAltIcon,
  HandRaisedIcon,
  LockClosedIcon,
  ShieldCheckIcon,
  StopCircleIcon,
  Squares2X2Icon,
  SquaresPlusIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline"

/** Any Heroicons component, matching the app's own IconType. */
type IconType = React.ForwardRefExoticComponent<
  Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
    title?: string
    titleId?: string
  } & React.RefAttributes<SVGSVGElement>
>

/**
 * Heroicons 24/outline, the same family and stroke the app uses, so a glyph
 * means the same thing on the site as it does inside the product. Content
 * files reference icons by key, never by import.
 */
export const iconMap = {
  "arrow-down": ArrowDownIcon,
  "arrow-right": ArrowRightIcon,
  "at-sign": AtSymbolIcon,
  "bar-chart": ChartBarIcon,
  briefcase: BriefcaseIcon,
  "check-circle": CheckCircleIcon,
  clock: ClockIcon,
  "eye-off": EyeSlashIcon,
  gauge: StopCircleIcon,
  globe: GlobeAltIcon,
  "heart-handshake": HandRaisedIcon,
  layers: SquaresPlusIcon,
  "layout-dashboard": Squares2X2Icon,
  lock: LockClosedIcon,
  mail: EnvelopeIcon,
  "message-square": ChatBubbleLeftRightIcon,
  "shield-check": ShieldCheckIcon,
  sliders: AdjustmentsHorizontalIcon,
  "triangle-alert": ExclamationTriangleIcon,
  users: UsersIcon,
  x: XMarkIcon,
  zap: BoltIcon,
} satisfies Record<string, IconType>

export type IconKey = keyof typeof iconMap

export function Icon({
  name,
  className,
}: {
  name: IconKey
  className?: string
}) {
  const Cmp = iconMap[name]
  return <Cmp className={className} aria-hidden="true" />
}

/**
 * The supplied brand wordmark. Imported (not referenced from /public) so the
 * bundler fingerprints it and nothing else can shadow the filename.
 * Decorative: the wrapping link carries the accessible name.
 */
export function Wordmark({ className }: { className?: string }) {
  return <img src={logoUrl} alt="" aria-hidden="true" className={className} />
}

/** The supplied icon mark, for tight spaces. */
export function Mark({ className }: { className?: string }) {
  return <img src={markUrl} alt="" aria-hidden="true" className={className} />
}
