import { Footnote, Heading, Lede, Section } from "@/components/primitives"
import { Icon } from "@/components/icons"
import { cost } from "@/content/site"
import { cn } from "@/lib/utils"

/**
 * The exact cost is invite-only: a blurred, unreadable figure sits behind a
 * lock that scrolls to the request-access form. Curiosity → a lead.
 */
function LockedCost() {
  return (
    <a
      href="#request-access"
      className="group mt-5 inline-flex items-center gap-3 rounded-full border border-hairline bg-background py-2 pr-4 pl-2.5 transition-colors hover:border-accent-500/50"
    >
      <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-500/10 px-2.5 py-1 text-accent-700">
        <Icon name="lock" className="size-3.5" />
        {/* A real-looking but deliberately unreadable figure — you can tell a
            number is there, you just can't read it without asking. */}
        <span
          aria-hidden="true"
          className="tnum select-none text-body font-semibold blur-[5px]"
        >
          ~$1XX
        </span>
      </span>
      <span className="text-small font-semibold text-foreground">
        {cost.reveal.cta}
      </span>
      <Icon
        name="arrow-right"
        className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5"
      />
    </a>
  )
}

export function Cost() {
  return (
    <Section id="cost" label="Cost" labelledBy="cost-heading">
      <Heading id="cost-heading" size="lg" className="max-w-[16ch]">
        {cost.heading}
      </Heading>
      <Lede className="mt-7">
        To send{" "}
        <strong className="font-semibold text-foreground">
          30,000 emails a month
        </strong>{" "}
        (1,000/day):
      </Lede>
      <p className="tag mt-5 text-muted-foreground">{cost.eyebrow}</p>

      {/* The headline number, before the breakdown that justifies it. */}
      <div className="mt-12 grid rounded-xl border border-hairline bg-card sm:grid-cols-2">
        <div className="p-7 lg:p-9">
          <p className="tag text-muted-foreground">Other cold-email tools</p>
          <p className="tnum mt-4 text-stat leading-none font-semibold tracking-[-0.045em] text-muted-foreground">
            ~$1,500
          </p>
          <p className="mt-3 text-body text-muted-foreground">
            infrastructure per year, before the software fee
          </p>
        </div>
        <div className="relative border-t border-hairline p-7 sm:border-t-0 sm:border-l lg:p-9">
          <p className="tag normal-case text-accent-700">inboxrow</p>
          <p className="tnum mt-4 flex flex-wrap items-baseline gap-x-4 text-stat leading-none font-semibold tracking-[-0.045em] text-accent-700">
            {cost.reveal.savings}
          </p>
          <p className="mt-3 text-body text-muted-foreground">
            {cost.reveal.locked}.
          </p>
          <LockedCost />
        </div>
      </div>
      <div className="mt-12 overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left">
          <thead>
            <tr className="border-y border-hairline">
              {cost.columns.map((col, i) => (
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
            {cost.rows.map((row) => (
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
                  {row.locked ? (
                    <a
                      href="#request-access"
                      className="inline-flex items-center gap-1.5 rounded-full bg-accent-500/10 px-2.5 py-1 text-accent-700 transition-colors hover:bg-accent-500/20"
                    >
                      <Icon name="lock" className="size-3.5" />
                      {row.ours}
                    </a>
                  ) : (
                    row.ours
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-10 flex items-center gap-4 text-h3 font-semibold tracking-[-0.03em]">
        <span
          aria-hidden="true"
          className="h-6 w-1 rounded-full bg-accent-500"
        />
        {cost.pullquote}
      </p>

      <Footnote className="mt-8">{cost.footnote}</Footnote>
    </Section>
  )
}
