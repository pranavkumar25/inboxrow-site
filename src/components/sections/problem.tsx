import { Heading, Lede, Section } from "@/components/primitives"
import { Icon, type IconKey } from "@/components/icons"
import { problem } from "@/content/site"

export function Problem() {
  return (
    <Section
      id="problem"
      pace="airy"
      label={problem.eyebrow}
      labelledBy="problem-heading"
    >
      <Heading id="problem-heading" size="lg" className="max-w-[18ch]">
        {problem.heading}
      </Heading>
      <Lede className="mt-7">{problem.body}</Lede>

      {/* The status quo, itemised as rows: the same atom the product sells. */}
      <ul className="mt-12 border-t border-hairline">
        {problem.points.map((point) => (
          <li
            key={point.title}
            className="grid gap-x-8 gap-y-1 border-b border-hairline py-5 sm:grid-cols-[minmax(0,24ch)_1fr]"
          >
            <b className="flex items-baseline gap-2.5 text-h3 font-semibold tracking-[-0.02em]">
              <Icon
                name={point.icon as IconKey}
                className="size-4 shrink-0 translate-y-0.5 text-danger-text"
              />
              {point.title}
            </b>
            <span className="text-body leading-[1.6] text-muted-foreground">
              {point.body}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
