import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Wordmark } from "@/components/icons"
import { Frame, GUTTER, Lede } from "@/components/primitives"
import { SiteFooter } from "@/components/sections/site-footer"
import { brand } from "@/content/site"
import { lastUpdated, type LegalDoc } from "@/content/legal"

/**
 * Shared layout for /privacy and /terms. Same frame and type system as the
 * landing page, but a static header: nav anchors and the hero-CTA handoff
 * only make sense on the home page.
 */
export function LegalPage({ doc }: { doc: LegalDoc }) {
  useEffect(() => {
    document.title = `${doc.title} · ${brand.name}`
  }, [doc.title])

  return (
    <>
      <header className="sticky top-0 z-40">
        <div className="mx-auto w-full max-w-[1280px] border-b border-hairline bg-background/90 backdrop-blur-xl sm:border-x">
          <div className={`flex h-16 items-center gap-6 ${GUTTER}`}>
            <a
              href="/"
              aria-label={`${brand.name} home`}
              className="inline-flex min-h-11 shrink-0 items-center"
            >
              <Wordmark className="h-[18px] w-auto" />
            </a>
            <Button asChild variant="secondary" size="cta" className="ml-auto">
              <a href="/#request-access">{brand.ctaLabel}</a>
            </Button>
          </div>
        </div>
      </header>

      <Frame>
        <main id="main" className={`py-[clamp(56px,7vw,96px)] ${GUTTER}`}>
          <div className="grid gap-y-6 lg:grid-cols-[172px_1fr] lg:gap-x-14">
            <p className="tag self-start text-muted-foreground lg:sticky lg:top-28">
              {doc.tag}
            </p>

            <article className="min-w-0 max-w-[68ch]">
              <h1 className="heading text-h2">{doc.title}</h1>
              <p className="tag mt-4 normal-case text-muted-foreground">
                Last updated: {lastUpdated}
              </p>
              <Lede className="mt-6">{doc.intro}</Lede>

              {doc.sections.map((section) => (
                <section key={section.heading} className="mt-12">
                  <h2 className="heading text-[1.25rem] leading-snug">
                    {section.heading}
                  </h2>
                  {section.blocks.map((block, i) =>
                    typeof block === "string" ? (
                      <p
                        key={i}
                        className="mt-4 text-body leading-[1.7] text-muted-foreground"
                      >
                        {block}
                      </p>
                    ) : (
                      <ul key={i} className="mt-4 space-y-2.5">
                        {block.map((item) => (
                          <li
                            key={item}
                            className="flex gap-3 text-body leading-[1.7] text-muted-foreground"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-[0.7em] size-1 shrink-0 rounded-full bg-accent-500"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )
                  )}
                </section>
              ))}
            </article>
          </div>
        </main>
        <SiteFooter />
      </Frame>
    </>
  )
}
