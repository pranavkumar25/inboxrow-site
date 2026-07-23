import { Button } from "@/components/ui/button"
import { Icon, type IconKey } from "@/components/icons"
import { GUTTER } from "@/components/primitives"
import { brand, hero, inboxPreview, valueStrip } from "@/content/site"
import { cn } from "@/lib/utils"

export function Hero() {
  return (
    <section id="top" className={cn("pt-[clamp(56px,8vw,112px)]", GUTTER)}>
      <p className="tag flex items-center gap-2.5 text-muted-foreground">
        <span className="size-1.5 rounded-full bg-accent-500" />
        {hero.eyebrow}
      </p>

      {/* The page's single red moment. The app reserves #FF4835 for the
          wordmark, funnel exits and danger, so it is spent here once and
          nowhere else. */}
      <h1 className="display mt-7 max-w-[15ch] text-display">
        Earn a{" "}
        <span className="relative inline-block">
          <span
            aria-hidden="true"
            className="absolute inset-x-[-0.05em] bottom-[0.09em] h-[0.3em] rounded-[3px] bg-signal"
          />
          <span className="relative">row</span>
        </span>{" "}
        in the inbox.
      </h1>

      <div className="mt-9 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <p className="max-w-[46ch] text-lead leading-[1.55] text-muted-foreground">
          {hero.sub}
        </p>

        <div className="flex shrink-0 flex-col gap-3 min-[420px]:flex-row min-[420px]:items-center">
          <Button
            asChild
            variant="primary"
            size="cta-lg"
            id="hero-cta"
            className="max-[419px]:w-full"
          >
            <a href="#request-access">
              {brand.ctaLabel}
              <Icon name="arrow-right" className="size-4" />
            </a>
          </Button>
          <Button
            asChild
            variant="secondary"
            size="cta-lg"
            className="max-[419px]:w-full"
          >
            <a href="#how-it-works">{hero.secondaryCta}</a>
          </Button>
        </div>
      </div>
      <InboxArtifact />
      <ProofRow />
    </section>
  )
}

/**
 * The product in one frame: a real inbox row is what the whole page is
 * selling, so the hero shows one landing rather than an abstract graphic.
 */
function InboxArtifact() {
  return (
    <div
      aria-hidden="true"
      className="mt-12 overflow-hidden rounded-lg border border-hairline bg-card shadow-raise"
    >
      {/* No fake window chrome: this is a diagram of where mail lands, not a
          screenshot, and it should not pretend otherwise. */}
      <div className="flex items-center gap-1 border-b border-hairline px-3 py-2.5">
        <span className="tag rounded-md bg-secondary px-2 py-1.5 text-foreground">
          Primary
        </span>
        <span className="tag px-2 py-1.5 text-muted-foreground">
          Promotions
        </span>
        <span className="tag ml-auto hidden items-center gap-1.5 text-accent-700 sm:inline-flex">
          <span className="size-1.5 rounded-full bg-accent-500" />
          Delivered
        </span>
      </div>

      <div>
        {inboxPreview.map((row, i) => (
          <div
            key={row.from}
            style={{ animationDelay: `${120 + i * 110}ms` }}
            className={cn(
              "grid animate-in grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-hairline-soft px-4 py-4 duration-[var(--duration-slow)] fill-mode-both fade-in slide-in-from-bottom-1 sm:px-5",
              row.live && "bg-accent-50"
            )}
          >
            <span
              className={cn(
                "grid size-8 shrink-0 place-items-center rounded-full text-caption font-semibold tracking-wider",
                row.live
                  ? "bg-accent-500 text-ink"
                  : "bg-secondary text-muted-foreground"
              )}
            >
              {row.initials}
            </span>
            <span className="flex min-w-0 flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-3">
              <span className="shrink-0 text-body font-semibold tracking-[-0.01em]">
                {row.from}
              </span>
              <span className="truncate text-body text-muted-foreground">
                {row.subject}
              </span>
            </span>
            <span className="tnum shrink-0 text-xs text-muted-foreground">
              {row.time}
            </span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 px-4 py-3.5 sm:px-5">
        <span className="tag text-muted-foreground">
          1 domain · 3 mailboxes
        </span>
        <span className="tag text-muted-foreground">1,500 / day / mailbox</span>
        <span className="tag ml-auto text-muted-foreground">
          {hero.note} · Illustrative
        </span>
      </div>
    </div>
  )
}

/** Three numbers, three rows of the same grid. */
function ProofRow() {
  return (
    <div className="mt-14 grid border-t border-hairline md:grid-cols-3">
      {valueStrip.map((item, i) => (
        <div
          key={item.title}
          className={cn(
            "flex flex-col gap-2 py-7 md:pr-8",
            i > 0 &&
              "border-t border-hairline md:border-t-0 md:border-l md:pl-8"
          )}
        >
          <Icon
            name={item.icon as IconKey}
            className="size-5 text-accent-700"
          />
          <b className="text-h3 font-semibold tracking-[-0.02em]">
            {item.title}
          </b>
          <span className="text-body leading-[1.55] text-muted-foreground">
            {item.body}
          </span>
        </div>
      ))}
    </div>
  )
}
