import { Frame } from "@/components/primitives"
import { SiteHeader } from "@/components/sections/site-header"
import { Hero } from "@/components/sections/hero"
import { Problem } from "@/components/sections/problem"
import { Difference } from "@/components/sections/difference"
import { Volume } from "@/components/sections/volume"
import { Cost } from "@/components/sections/cost"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Features } from "@/components/sections/features"
import { Audience } from "@/components/sections/audience"
import { Faq } from "@/components/sections/faq"
import { RequestAccess } from "@/components/sections/request-access"
import { SiteFooter } from "@/components/sections/site-footer"
import { LegalPage } from "@/components/legal-page"
import { privacy, terms } from "@/content/legal"

export default function App() {
  /**
   * The site is one landing page plus two legal pages, so a pathname check
   * beats a router dependency. Requires the host to serve index.html for
   * unknown paths (see public/_redirects and vercel.json).
   */
  const path = window.location.pathname.replace(/\/+$/, "") || "/"
  if (path === privacy.path) return <LegalPage doc={privacy} />
  if (path === terms.path) return <LegalPage doc={terms} />

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2.5 focus:text-small focus:font-semibold focus:text-canvas"
      >
        Skip to content
      </a>

      <SiteHeader />

      <Frame>
        <main id="main">
          <Hero />
          <Problem />
          <Difference />
          <Volume />
          <Cost />
          <HowItWorks />
          <Features />
          <Audience />
          <Faq />
          <RequestAccess />
        </main>
        <SiteFooter />
      </Frame>
    </>
  )
}
