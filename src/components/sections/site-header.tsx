import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Wordmark } from "@/components/icons"
import { brand, loginUrl, nav } from "@/content/site"
import { GUTTER } from "@/components/primitives"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [stuck, setStuck] = useState(false)
  /**
   * One primary action per screen. While the hero's own CTA is on screen the
   * header keeps a quiet bordered style; it only takes over as the primary
   * once the hero button has scrolled away.
   */
  const [heroCtaVisible, setHeroCtaVisible] = useState(true)

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })

    const heroCta = document.getElementById("hero-cta")
    if (!heroCta) return () => window.removeEventListener("scroll", onScroll)

    const observer = new IntersectionObserver(
      ([entry]) => setHeroCtaVisible(entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(heroCta)

    return () => {
      window.removeEventListener("scroll", onScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <header className="sticky top-0 z-40">
      <div
        className={cn(
          "mx-auto w-full max-w-[1280px] border-hairline backdrop-blur-xl transition-colors duration-[var(--duration-base)] sm:border-x",
          stuck
            ? "border-b bg-background/90"
            : "border-b border-b-transparent bg-background/70"
        )}
      >
        <div className={cn("flex h-16 items-center gap-6", GUTTER)}>
          <a
            href="#top"
            aria-label={`${brand.name} home`}
            className="inline-flex min-h-11 shrink-0 items-center"
          >
            <Wordmark className="h-[18px] w-auto" />
          </a>

          {/* invite-only is the whole positioning, so state it in the chrome.
              Hidden once the nav appears (md) so the two never crowd the bar. */}
          <span className="tag hidden items-center gap-1.5 rounded-full border border-hairline px-2.5 py-1.5 text-muted-foreground sm:inline-flex md:hidden lg:inline-flex">
            <span className="size-1.5 rounded-full bg-accent-500" />
            Invite&nbsp;only
          </span>

          <nav
            aria-label="Primary"
            className="hidden items-center md:ml-auto md:flex"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="inline-flex min-h-11 items-center rounded-md px-3 text-small font-normal text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Existing users log in; everyone else requests access. */}
          <div className="ml-auto flex items-center gap-1 sm:gap-3 md:ml-5">
            <a
              href={loginUrl}
              className="inline-flex min-h-11 items-center rounded-md px-2.5 text-small font-normal whitespace-nowrap text-muted-foreground transition-colors hover:text-foreground sm:px-3"
            >
              {brand.loginLabel}
            </a>
            <Button
              asChild
              variant={heroCtaVisible ? "secondary" : "primary"}
              size="cta"
            >
              <a href="#request-access">{brand.ctaLabel}</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
