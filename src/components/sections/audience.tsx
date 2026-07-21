import { Footnote, Heading, Section } from "@/components/primitives"
import { Icon, type IconKey } from "@/components/icons"
import { audience } from "@/content/site"

export function Audience() {
  return (
    <Section
      id="who-its-for"
      label={audience.eyebrow}
      labelledBy="audience-heading"
    >
      <Heading id="audience-heading" size="lg" className="max-w-[20ch]">
        {audience.heading}
      </Heading>

      {/* Rows, not a third identical card triad. Three audiences is a list of
          three things, and the page already reads lists as rows. */}
      <ul className="mt-10 border-t border-hairline">
        {audience.items.map((item) => (
          <li
            key={item.title}
            className="grid gap-x-8 gap-y-1 border-b border-hairline py-5 sm:grid-cols-[minmax(0,26ch)_1fr]"
          >
            <b className="flex items-baseline gap-2.5 text-h3 font-semibold tracking-[-0.02em]">
              <Icon
                name={item.icon as IconKey}
                className="size-5 shrink-0 translate-y-0.5 text-accent-700"
              />
              {item.title}
            </b>
            <span className="text-body leading-[1.6] text-muted-foreground">
              {item.body}
            </span>
          </li>
        ))}
      </ul>
      <Footnote className="mt-6">{audience.footnote}</Footnote>

      {/* Founder note, set as a statement rather than a testimonial:
          the brief forbids inventing customers. */}
      <div className="mt-16 border-t border-hairline pt-10">
        <p className="tag text-muted-foreground">{audience.whyKicker}</p>
        <p className="mt-6 max-w-[42ch] text-h3 leading-[1.35] font-semibold tracking-[-0.032em]">
          {audience.why}
        </p>
      </div>
    </Section>
  )
}
