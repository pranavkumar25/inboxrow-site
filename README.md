# inboxrow landing page

Single-page marketing site for inboxrow, built from `InboxRow-Landing-Copy.md`.

**Stack:** React 19 · TypeScript · Vite · Tailwind CSS v4 · shadcn/ui (Radix) · Heroicons

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # tsc -b && vite build → dist/
```

## The design idea

The tagline is "earn a row in the inbox," so **the row is the atomic unit**.
Inbox rows, mailbox counts, volume bars, steps, features and FAQ entries are
all the same horizontal element at different scales.

Every section shares one canvas colour (`#FCFCFC`). Nothing is separated by a
background change. Structure comes from hairline rules, a continuous framed
column, and a sticky label rail running down the left that mirrors the nav
anchors. The only contrast moment on the page is the ink request-access panel.

## Brand

The wordmark is **always lowercase**: `inboxrow`, never `InboxRow`. Labels
carry `text-transform: uppercase`, so anywhere the brand name appears inside
one it opts out with `normal-case` (see `site-footer.tsx`, the table headers).

Logo and mark live in `src/assets/` and are imported as modules, not served
from `/public`, so the bundler fingerprints them and no stray file can shadow
the name. The favicon is inlined as a data URI in `index.html` for the same
reason.

Colour **roles are inherited from the product** (`~/inboxrow/src/app/tokens.css`)
so a visitor who becomes a user never has to relearn what a colour means.

| Token | Value | Used for |
| --- | --- | --- |
| `--accent-500` | `#35ABFF` | the interface accent: primary CTA, focus, state, links |
| `--accent-700` | `#1478C4` | accent as text (4.7:1 on canvas) |
| `--signal-500` | `#FF4835` | the wordmark, the one hero moment, and danger |
| `--danger-text` | `#BA200F` | the status-quo failures in the problem list |
| `--canvas` | `#FCFCFC` | the single background colour for every section |
| `--ink` | `#101014` | body text, the CTA panel, and CTA labels |

Two deliberate departures from the app, both to fix contrast rather than to
differ:

- The app pairs `accent-500` with **white** on its primary button, which
  measures **2.5:1**. The site keeps the identical fill and sets the label in
  near-black instead: **7.6:1**. Worth fixing in the app too.
- Red is *not* a general accent. In the product it encodes "exited the funnel"
  and "danger", so spending it on eyebrows and links would have made the
  marketing site say "error" in the brand's friendliest moments. It appears
  exactly twice: the wordmark, and the highlight behind "row".

Matched to the app as-is: focus ring (`accent-600` at 55%, 2px, 2px offset),
`10px` control radius, Heroicons 24/outline at their native 1.5 stroke,
`120ms`/`160ms` motion on `cubic-bezier(0.2, 0, 0, 1)`, `::selection` in
`accent-200`, the `0.06em` eyebrow tracking, and thin scrollbars.

Type is **Inter only**, via the `rsms.me` CDN, with `InterVariable` behind an
`@supports (font-variation-settings: normal)` check. There is no second
typeface: the technical feel of the `.tag` labels comes from letter-spacing
and case, not from a monospace font.

### Type scale

Every size on the page is one of these roles. No component reaches for an
arbitrary `text-[…]` value.

| Role | Size | Job |
| --- | --- | --- |
| `text-micro` | 11px | eyebrows, rail labels, field labels |
| `text-caption` | 12px | meta, avatar initials |
| `text-small` | 13px | secondary body, nav, table cells, buttons |
| `text-body` | 15px | default body |
| `text-h3` | 17px | card and row titles |
| `text-lead` | 17→19px | section ledes |
| `text-h2` / `text-h2-lg` | fluid | section headings |
| `text-stat` / `text-display` | fluid | the cost numbers, the hero |

**Two weights, each with one job:** `400` for running text, `600` for
headings, UI labels and emphasis. Inter Variable will happily render 540 or
590; picking a different one per component is how a page stops looking
decided.

> **Gotcha:** these roles are custom theme values, so `tailwind-merge` reads
> `text-lead` as a *colour* utility and will silently drop it when a class
> string also contains `text-muted-foreground`. `src/lib/utils.ts` registers
> them via `extendTailwindMerge` to prevent that. Add any new role there too.

### Motion

`--duration-fast` 120ms (hover, press) · `--duration-base` 160ms (overlays,
disclosure) · `--duration-slow` 400ms (the one orchestrated mount), all on
`cubic-bezier(0.2, 0, 0, 1)`. Components reference the tokens
(`duration-[var(--duration-base)]`) rather than hardcoding milliseconds.

> **Gotcha:** Tailwind v4 has no `--duration-*` theme namespace, so
> `duration-fast` compiles to nothing at all. The `var()` form is required.

### Focus

One ring everywhere: the accent at 55%, 2px, 2px offset. The rule is
deliberately **unlayered** at the bottom of `index.css`. shadcn ships
`outline-none` as a utility, and utilities live in a cascade layer, so the
same rule inside `@layer base` loses and the ring silently disappears.

All tokens live in `src/index.css`. `:root` defines brand primitives plus
shadcn's semantic variables; `@theme inline` exposes them to Tailwind as
utilities (`bg-ink`, `text-accent-700`, `border-hairline`, …). A full `.dark`
theme is defined so the page can be flipped without re-auditing contrast.

## Structure

```
src/
  content/site.ts          all copy; edit here, not in components
  assets/                  logo.svg + mark.svg (imported, not /public)
  components/
    primitives.tsx         Frame / Section / Heading / Lede / Footnote
    icons.tsx              Heroicons map + Wordmark + Mark
    sections/              one file per page section, composed in App.tsx
    ui/                    shadcn components
```

`src/content/site.ts` is the single source of truth for copy. The brief's rules
are encoded there as comments: every CTA is *Request access* (invite-only), no
open/click/reply stats anywhere, and nothing implies warm-up can be skipped.

## Copy conventions

- The brand name is lowercase everywhere.
- **No em dashes or en dashes.** The source copy used them heavily; each one was
  rewritten into a real sentence, comma, or colon rather than swapped for
  another glyph. Worth keeping in mind when editing `site.ts`.

## Not wired up yet

- **The access form has no backend.** `src/components/sections/request-access.tsx`
  fakes a 650ms round-trip, then shows the success panel. Point it at your form
  endpoint or Calendly handoff (marked with a `// No backend wired up yet` comment).
- `#privacy` and `#contact` in the footer, and the "Book 15 min" link, are placeholders.
- The "~85% less" badge in the cost section is derived from your own $1,500 vs
  $230 figures. It is not in the source copy, so check you're happy claiming it.
- Numbers to verify before publishing (from the brief): Google Workspace price
  per seat, domain cost, the 1,500/day safe cap, and inboxrow's own price,
  which the copy doesn't state yet.
- `public/` contains `favicon.svg` and `icons.svg` belonging to another project;
  they arrived from outside this repo and nothing here references them.

## Accessibility notes

- Skip link, one `<h1>`, sequential headings, labelled `<nav>` landmarks.
- Form validates on blur (not per keystroke), renders errors below the field
  with `role="alert"`, and moves focus to the first invalid field on submit.
- Comparison tables use real `<th scope="row">` and stay readable via a scroll
  region rather than shrinking below a legible size.
- The volume charts are decorative duplicates of data that is also present as
  text in the tables, and the mailbox glyph rows carry an `aria-label` count.
- There are no scroll-triggered reveals: content is never gated on JS or
  motion. The only animation is the hero rows landing, disabled under
  `prefers-reduced-motion`.
