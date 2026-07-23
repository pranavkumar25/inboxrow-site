import { Footnote, Heading, Lede, Section } from "@/components/primitives"
import { volume } from "@/content/site"
import { cn } from "@/lib/utils"

export function Volume() {
  return (
    <Section id="volume" pace="airy" label="Volume" labelledBy="volume-heading">
      <Heading id="volume-heading" size="lg" className="max-w-[19ch]">
        {volume.heading}
      </Heading>
      <Lede className="mt-7">
        A warmed mailbox of your own sends at your provider’s real limit. Ours
        is set to a safe{" "}
        <strong className="font-semibold text-foreground">1,500/day</strong>,
        which is 30× what shared-infra tools recommend.
      </Lede>
      <p className="tag mt-5 text-muted-foreground">{volume.eyebrow}</p>
      <DailyLimitChart />
      <MailboxCount />
      <div className="mt-12 overflow-x-auto">
        <table className="w-full min-w-[460px] border-collapse text-left">
          <caption className="tag pb-4 text-left text-muted-foreground">
            {volume.caption}
          </caption>
          <thead>
            <tr className="border-y border-hairline">
              {volume.columns.map((col, i) => (
                <th
                  key={col}
                  scope="col"
                  className={cn(
                    "tag py-3.5 pr-6 font-normal",
                    // the brand column is the wordmark, so keep it lowercase
                    i === 2
                      ? "normal-case text-accent-700"
                      : "text-muted-foreground"
                  )}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {volume.rows.map((row) => (
              <tr key={row.label} className="border-b border-hairline">
                <th
                  scope="row"
                  className="py-4 pr-6 text-body font-semibold text-muted-foreground"
                >
                  {row.label}
                </th>
                <td className="py-4 pr-6 text-body text-muted-foreground">
                  {row.others}
                </td>
                <td className="py-4 pr-6 text-body font-semibold">
                  {row.ours}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Footnote className="mt-6">{volume.footnote}</Footnote>
    </Section>
  )
}

/**
 * The gap is the argument, so draw it to scale: 50 next to 1,500 at the
 * same pixel ratio makes the point faster than the sentence does.
 */
function DailyLimitChart() {
  const bars = [
    { label: "Other tools", value: 50, tone: "muted" as const },
    { label: "inboxrow", value: 1500, tone: "blue" as const },
  ]
  const max = 1500

  return (
    <figure className="mt-14">
      <figcaption className="tag text-muted-foreground">
        Safe sends per mailbox, per day, drawn to scale
      </figcaption>
      <div className="mt-6 flex flex-col gap-5">
        {bars.map((bar) => (
          <div key={bar.label} className="flex flex-col gap-2">
            <div className="flex items-baseline justify-between gap-4">
              <span className="text-body font-semibold">{bar.label}</span>
              <span
                className={cn(
                  "tnum text-body font-semibold",
                  bar.tone === "blue"
                    ? "text-accent-700"
                    : "text-muted-foreground"
                )}
              >
                {bar.value.toLocaleString("en-US")}/day
              </span>
            </div>
            <div className="h-3 w-full overflow-hidden rounded-full bg-secondary">
              <div
                className={cn(
                  "h-full rounded-full",
                  bar.tone === "blue" ? "bg-accent-500" : "bg-[#C9CAD0]"
                )}
                style={{ width: `${Math.max((bar.value / max) * 100, 1.4)}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </figure>
  )
}

/** Same data as "mailboxes needed", rendered as the rows you'd have to run. */
function MailboxCount() {
  const sets = [
    { label: "Other tools", count: 20, tone: "muted" as const },
    { label: "inboxrow", count: 3, tone: "blue" as const },
  ]

  return (
    <figure className="mt-14">
      <figcaption className="tag text-muted-foreground">
        Mailboxes you’d run to send 1,000/day
      </figcaption>
      <div className="mt-6 grid gap-8 sm:grid-cols-2">
        {sets.map((set) => (
          <div key={set.label}>
            <div className="flex items-baseline gap-3">
              <span className="tnum text-stat leading-none font-semibold tracking-[-0.04em]">
                {set.count}
              </span>
              <span className="text-body text-muted-foreground">
                {set.label}
              </span>
            </div>
            <div
              className="mt-4 flex flex-wrap gap-1.5"
              role="img"
              aria-label={`${set.count} mailboxes with ${set.label}`}
            >
              {Array.from({ length: set.count }).map((_, i) => (
                <span
                  key={i}
                  className={cn(
                    "h-6 w-3 rounded-[3px]",
                    set.tone === "blue" ? "bg-accent-500" : "bg-[#DFDFE3]"
                  )}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </figure>
  )
}
