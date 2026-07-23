import { Footnote, Heading, Lede, Section } from "@/components/primitives"
import { cost } from "@/content/site"
import { cn } from "@/lib/utils"

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
          <p className="tnum mt-4 flex flex-wrap items-baseline gap-x-4 text-stat leading-none font-semibold tracking-[-0.045em]">
            ~$150
            <span className="tag rounded-full border border-accent-500/40 px-2.5 py-1.5 text-accent-700">
              ~90% less
            </span>
          </p>
          <p className="mt-3 text-body text-muted-foreground">
            infrastructure per year. The software rides on your own email setup.
          </p>
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
                  {row.ours}
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
