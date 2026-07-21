import { GUTTER } from "@/components/primitives"
import { Wordmark } from "@/components/icons"
import { brand, footer } from "@/content/site"
import { cn } from "@/lib/utils"

export function SiteFooter() {
  return (
    <footer className={cn("border-t border-hairline pt-12 pb-14", GUTTER)}>
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-[34ch]">
          <a
            href="#top"
            aria-label={`${brand.name} home`}
            className="inline-flex min-h-11 shrink-0 items-center"
          >
            <Wordmark className="h-5 w-auto" />
          </a>
          <p className="mt-4 text-body leading-[1.6] text-muted-foreground">
            {footer.blurb}
          </p>
        </div>

        <nav
          aria-label="Footer"
          className="grid grid-cols-2 gap-x-10 gap-y-1 sm:grid-cols-3 md:gap-x-14"
        >
          {footer.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="inline-flex min-h-11 items-center text-body text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-7">
        <p className="tag normal-case text-muted-foreground">
          © {new Date().getFullYear()} {brand.name}
        </p>
        <p className="tag text-muted-foreground">{brand.tagline}</p>
      </div>
    </footer>
  )
}
