import { Heading, Lede, Section } from "@/components/primitives"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/icons"
import { brand, howItWorks } from "@/content/site"

export function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      pace="tight"
      label={howItWorks.eyebrow}
      labelledBy="how-heading"
    >
      <Heading id="how-heading" size="lg" className="max-w-[16ch]">
        {howItWorks.heading}
      </Heading>
      <Lede className="mt-7">{howItWorks.body}</Lede>

      {/* Five rows, one per step, numbered and tracked by a rule. */}
      <ol className="mt-12 border-t border-hairline">
        {howItWorks.steps.map((step, i) => (
          <li
            key={step.title}
            className="group grid grid-cols-[auto_1fr] items-baseline gap-x-5 gap-y-1.5 border-b border-hairline py-6 transition-colors sm:grid-cols-[auto_minmax(0,20ch)_1fr] sm:gap-x-10"
          >
            <span className="tag tnum text-accent-700">
              {String(i + 1).padStart(2, "0")}
            </span>
            <b className="text-h3 font-semibold tracking-[-0.025em]">
              {step.title}
            </b>
            <span className="col-start-2 text-body leading-[1.6] text-muted-foreground sm:col-start-3">
              {step.body}
            </span>
          </li>
        ))}
      </ol>
      <Button asChild variant="primary" size="cta" className="mt-10">
        <a href="#request-access">
          {brand.ctaLabel}
          <Icon name="arrow-right" className="size-4" />
        </a>
      </Button>
    </Section>
  )
}
