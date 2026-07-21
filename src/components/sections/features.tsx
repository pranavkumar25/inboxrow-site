import { Heading, Section } from "@/components/primitives"
import { Icon, type IconKey } from "@/components/icons"
import { features } from "@/content/site"
import { cn } from "@/lib/utils"

export function Features() {
  return (
    <Section
      id="features"
      pace="tight"
      label="Features"
      labelledBy="features-heading"
    >
      <Heading id="features-heading" size="lg" className="max-w-[16ch]">
        {features.heading}
      </Heading>
      <p className="tag mt-6 text-muted-foreground">{features.eyebrow}</p>

      {/* Hairline grid, no gaps. The page's structure carries the design
          instead of eight floating cards. */}
      <div className="mt-12 grid border-t border-l border-hairline sm:grid-cols-2 lg:grid-cols-4">
        {features.items.map((item) => (
          <article
            key={item.title}
            className={cn(
              "group border-r border-b border-hairline p-6 transition-colors hover:bg-card lg:p-7"
            )}
          >
            <Icon
              name={item.icon as IconKey}
              className="size-5 text-accent-700 transition-transform duration-[var(--duration-fast)] group-hover:-translate-y-0.5"
            />
            <h3 className="mt-5 text-body font-semibold tracking-[-0.015em]">
              {item.title}
            </h3>
            <p className="mt-2 text-small leading-[1.6] text-muted-foreground">
              {item.body}
            </p>
          </article>
        ))}
      </div>
    </Section>
  )
}
