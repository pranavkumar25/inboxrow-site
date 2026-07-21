import { Heading, Section } from "@/components/primitives"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faq } from "@/content/site"

export function Faq() {
  return (
    <Section id="faq" pace="tight" label="FAQ" labelledBy="faq-heading">
      <Heading id="faq-heading" size="lg" className="max-w-[16ch]">
        {faq.heading}
      </Heading>
      <Accordion
        type="single"
        collapsible
        className="mt-12 border-t border-hairline"
      >
        {faq.items.map((item) => (
          <AccordionItem
            key={item.q}
            value={item.q}
            className="border-b border-hairline"
          >
            <AccordionTrigger className="items-baseline gap-6 py-6 text-left text-h3 font-semibold tracking-[-0.025em] hover:no-underline sm:text-h3 [&>svg]:mt-1 [&>svg]:size-4 [&>svg]:text-muted-foreground">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="pb-7">
              <p className="max-w-[62ch] text-body leading-[1.65] text-muted-foreground">
                {item.a}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <p className="mt-8 text-body text-muted-foreground">
        Still unsure?{" "}
        <a
          href="#request-access"
          className="font-semibold text-accent-700 underline decoration-accent-500/40 underline-offset-4 transition-colors hover:decoration-accent-500"
        >
          Ask us directly
        </a>
        {". We answer every request personally."}
      </p>
    </Section>
  )
}
