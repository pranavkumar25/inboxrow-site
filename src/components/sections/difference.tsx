import { Heading, Lede, Section } from "@/components/primitives"
import { Icon, type IconKey } from "@/components/icons"
import { different } from "@/content/site"
import { cn } from "@/lib/utils"

export function Difference() {
  return (
    <Section
      id="difference"
      label="The difference"
      labelledBy="difference-heading"
    >
      <Heading id="difference-heading" size="lg" className="max-w-[18ch]">
        {different.heading}
      </Heading>
      <Lede className="mt-7">{different.body}</Lede>
      <p className="tag mt-5 text-muted-foreground">{different.eyebrow}</p>
      <div className="mt-12 grid rounded-xl border border-hairline bg-card md:grid-cols-3">
        {different.cards.map((card, i) => (
          <article
            key={card.title}
            className={cn(
              "p-7 lg:p-8",
              i > 0 && "border-t border-hairline md:border-t-0 md:border-l"
            )}
          >
            <h3 className="flex items-baseline gap-2.5 text-h3 font-semibold tracking-[-0.02em]">
              <Icon
                name={card.icon as IconKey}
                className="size-5 shrink-0 translate-y-0.5 text-accent-700"
              />
              {card.title}
            </h3>
            <p className="mt-2.5 text-body leading-[1.6] text-muted-foreground">
              {card.body}
            </p>
          </article>
        ))}
      </div>
    </Section>
  )
}
