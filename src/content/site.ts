/**
 * Single source of truth for landing-page copy.
 * Mirrors InboxRow-Landing-Copy.md. Edit here, not in the components.
 *
 * Copy rules carried over from the brief:
 *  · Every CTA is "Request access" (invite-only, never "Sign up").
 *  · No open/click/reply stats anywhere; volume + cost numbers are the pitch.
 *  · Never imply warm-up can be skipped.
 */

export const meta = {
  title: "inboxrow: cold email that lands in the inbox",
  description:
    "Send cold email from your own mailboxes at real volume. Better inbox placement, a fraction of the domains, a fraction of the cost. Request access.",
} as const

export const brand = {
  name: "inboxrow",
  tagline: "Earn a row in the inbox.",
  ctaLabel: "Request access",
  loginLabel: "Log in",
} as const

/**
 * Where the "Log in" link sends existing users. Placeholder for now — change
 * this one line to your real app URL when it's live.
 */
export const loginUrl = "https://app.inboxrow.com"

/**
 * Form → email delivery, via Web3Forms (no backend needed).
 *
 * Submissions are emailed to BOTH inboxes below. Web3Forms' free plan sends
 * to the single address tied to each access key, so multi-recipient here works
 * by giving each inbox its OWN free key — the form is submitted once per key.
 * (Web3Forms' built-in CC is a paid Pro feature; two free keys avoids that.)
 *
 * SETUP (a couple of minutes, one time) — for EACH recipient below:
 *   1. Go to https://web3forms.com, enter that recipient's email address, and
 *      copy the access key they send to it.
 *   2. Paste it as that recipient's `accessKey`, replacing the placeholder.
 * After that, every "Request access" submission is emailed to both inboxes
 * with the person's name, work email, company, and what they're sending.
 *
 * The access keys are safe to keep in client code (that's how Web3Forms is
 * designed); a key only lets a form email its own chosen inbox.
 */
export const forms = {
  subject: "New inboxrow access request",
  recipients: [
    {
      email: "pranav.kumar@inboxrow.com",
      accessKey: "YOUR_WEB3FORMS_ACCESS_KEY_FOR_INBOXROW",
    },
    {
      email: "pk@pranavkumar.co",
      accessKey: "YOUR_WEB3FORMS_ACCESS_KEY_FOR_PRANAVKUMAR",
    },
  ],
} as const

export const nav = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Volume", href: "#volume" },
  { label: "Cost", href: "#cost" },
  { label: "Features", href: "#features" },
  { label: "FAQ", href: "#faq" },
] as const

export const hero = {
  eyebrow: "Cold email, done right",
  headline: ["Earn a row in the", "inbox."],
  sub: "Cold email from your own mailboxes. Real inbox placement, real volume, without a rack of domains and tools.",
  secondaryCta: "See how it works",
  note: "Runs on warmed domains you control.",
} as const

/** Fake inbox rows for the hero visual. Decorative only, so aria-hidden. */
export const inboxPreview = [
  {
    initials: "IR",
    from: "You (via your own mailbox)",
    subject: "Quick question about your Q3 outbound plan",
    time: "9:02",
    live: true,
  },
  {
    initials: "MK",
    from: "Maya K.",
    subject: "Re: Quick question / yes, let’s talk Thursday",
    time: "9:14",
    live: false,
  },
  {
    initials: "DR",
    from: "Dan R.",
    subject: "Re: Quick question / send over the details?",
    time: "9:31",
    live: false,
  },
  {
    initials: "SP",
    from: "Sofia P.",
    subject: "Re: Quick question / forwarding to our lead",
    time: "10:06",
    live: false,
  },
] as const

export const valueStrip = [
  {
    icon: "mail",
    title: "Native sending, from your email",
    body: "Your mailbox, your reputation. Not a shared relay.",
  },
  {
    icon: "zap",
    title: "1,500 emails/day per mailbox",
    body: "Not the ~50/day other tools cap you at.",
  },
  {
    icon: "globe",
    title: "1 domain, not 7",
    body: "Same volume, far less to buy and warm.",
  },
] as const

export const problem = {
  eyebrow: "The problem",
  heading: "Great copy is worthless in the spam folder.",
  body: "Most tools relay your mail through shared infrastructure, so they cap you at ~50 sends a day to stay safe. Real volume then means a dozen domains and dozens of inboxes to buy, warm, and babysit. And one flag burns a domain for good.",
  points: [
    {
      icon: "triangle-alert",
      title: "Shared relay, shared reputation.",
      body: "Someone else’s bad list throttles your mail.",
    },
    {
      icon: "clock",
      title: "~50 sends a day.",
      body: "To hit real numbers you buy your way out with more domains.",
    },
    {
      icon: "layers",
      title: "A dozen domains to babysit.",
      body: "Buy, warm, monitor, repeat. Every quarter.",
    },
    {
      icon: "x",
      title: "One flag and it’s gone.",
      body: "A burned domain doesn’t come back.",
    },
  ],
} as const

export const different = {
  eyebrow: "Send cold email from your own mailbox",
  heading: "inboxrow sends the way a person sends.",
  body: "Native, from your own warmed mailbox, so it lands in the inbox, at volume your provider actually allows.",
  cards: [
    {
      icon: "shield-check",
      title: "Real deliverability",
      body: "Mail leaves your own mailbox, not a shared pool. Your domain, your sending history, your reputation.",
    },
    {
      icon: "bar-chart",
      title: "Real volume",
      body: "Up to 1,500/day per warmed mailbox, versus roughly 50 elsewhere. Same day, same list, 30× the reach.",
    },
    {
      icon: "sliders",
      title: "Less to manage",
      body: "Fewer domains and inboxes to warm and watch. One setup you can actually keep an eye on.",
    },
  ],
} as const

export const volume = {
  eyebrow: "Cold email volume",
  heading: "Deliverability gets you opened. Volume gets you pipeline.",
  body: "A warmed mailbox of your own sends at your provider’s real limit. Ours is set to a safe 1,500/day, which is 30× what shared-infra tools recommend.",
  emphasis: "1,500/day",
  caption: "What it takes to send 1,000 emails a day",
  columns: ["To send 1,000/day", "Other tools", "inboxrow"],
  rows: [
    { label: "Safe per mailbox", others: "~50/day", ours: "1,500/day" },
    { label: "Mailboxes needed", others: "~20", ours: "3" },
    { label: "Domains needed", others: "~7", ours: "1" },
  ],
  footnote:
    "Per-mailbox limit (per user, not per domain). New mailboxes start ~500/day and ramp with warm-up.",
} as const

export const cost = {
  eyebrow: "Cold email cost",
  heading: "Same volume. A fraction of the setup.",
  body: "To send 30,000 emails a month (1,000/day):",
  emphasis: "30,000 emails a month",
  pullquote: "One domain. Three inboxes. Done.",
  columns: ["30,000 emails / month", "Other cold-email tools", "inboxrow"],
  // The headline stat visitors get for free is the *saving* (~90% less). The
  // exact dollar figure is invite-only, so it never ships in the bundle — a
  // "reveal" prompts them to request access instead. That's the lead.
  reveal: {
    savings: "~90% less",
    caption: "infrastructure per year. The software rides on your own email setup.",
    locked: "Request access to see your exact number",
    cta: "Reveal your cost",
  },
  rows: [
    { label: "Domains", others: "~7", ours: "1", locked: false },
    { label: "Mailboxes", others: "~20", ours: "3", locked: false },
    {
      label: "Infra / year",
      others: "~$1,500",
      ours: "~90% less",
      locked: true,
    },
    {
      label: "Software fee",
      others: "On top, per mailbox",
      ours: "Rides on your own email setup",
      locked: false,
    },
  ],
  footnote:
    "Your only spend is domains and mailbox hosting — no per-mailbox software fee stacked on top. We'll price your exact setup when you request access.",
} as const

export const howItWorks = {
  eyebrow: "How it works",
  heading: "List to inbox in five steps.",
  body: "No relay to configure, no deliverability consultant on retainer. Connect the mailboxes you already warmed and go.",
  steps: [
    {
      title: "Details",
      body: "From-name, timezone, send window, daily cap.",
    },
    { title: "Contacts", body: "Upload your list, map merge fields." },
    { title: "Compose", body: "Write it personal, with variables." },
    {
      title: "Follow-ups",
      body: "A sequence that stops the moment they reply.",
    },
    { title: "Review & launch", body: "Preview, send, on pace." },
  ],
} as const

export const features = {
  eyebrow: "Inbox placement",
  heading: "Controls that keep you inside your provider’s limits.",
  items: [
    {
      icon: "mail",
      title: "Sends from your own email",
      body: "Your own mailbox, best inbox placement.",
    },
    {
      icon: "zap",
      title: "Full mailbox limit",
      body: "Send at 1,500/day, not a throttled ~50.",
    },
    {
      icon: "at-sign",
      title: "Send-as aliases",
      body: "Send from a verified alias on your domain.",
    },
    {
      icon: "clock",
      title: "Send windows & timezones",
      body: "Only sends in the business hours you set.",
    },
    {
      icon: "gauge",
      title: "Daily caps + auto-stop",
      body: "Never blows past your mailbox limit.",
    },
    {
      icon: "message-square",
      title: "Smart follow-ups",
      body: "Stop instantly on reply. No awkward double-sends.",
    },
    {
      icon: "eye-off",
      title: "Tracking toggle",
      body: "Turn off pixels and redirects when placement matters more.",
    },
    {
      icon: "layout-dashboard",
      title: "Dashboard + reports",
      body: "Sends, replies and status per contact, in one view.",
    },
  ],
} as const

export const audience = {
  eyebrow: "Who it’s for",
  heading: "Built for teams sending from a few warmed mailboxes.",
  items: [
    {
      icon: "users",
      title: "Founders & sales teams",
      body: "Who can’t afford the spam folder on a pipeline-critical quarter.",
    },
    {
      icon: "briefcase",
      title: "Agencies",
      body: "Sending from client mailboxes, with every campaign kept separate.",
    },
    {
      icon: "heart-handshake",
      title: "Recruiters & partnerships",
      body: "Doing personal, high-intent outreach where every send counts.",
    },
  ],
  footnote:
    "Built for real outbound volume from a few warmed mailboxes, not million-send newsletters.",
  whyKicker: "Why we built it",
  why: "We were tired of good campaigns dying in spam and paying ESP prices for it. So we built inboxrow to send from our own mailboxes, kept using it because it worked, and now we’re opening it to a few teams who send the way we do.",
} as const

export const faq = {
  eyebrow: "FAQ",
  heading: "Questions we get before setup.",
  body: "Still unsure? Ask us directly. We answer every request personally.",
  items: [
    {
      q: "Is this a SaaS I can sign up for?",
      a: "Not yet. Invite-only, so request access and we’ll set you up.",
    },
    {
      q: "Do I send from my main company domain?",
      a: "No. You use dedicated sending domains, separate from your primary, so your main reputation is never at risk. Don’t have them? We’ll help you set them up.",
    },
    {
      q: "Do I need to warm up the mailboxes?",
      a: "Yes. Warm-up is essential for any cold email, and inboxrow expects warmed mailboxes. You ramp volume gradually before sending at full scale.",
    },
    {
      q: "Will my domain get flagged?",
      a: "Nothing’s risk-free, but native sending from a warmed mailbox at a controlled pace is the safest way, and with far fewer domains, there’s far less to burn.",
    },
    {
      q: "How many emails a day?",
      a: "Up to 1,500/day per warmed mailbox (safe side of your provider’s limit). New accounts start lower and ramp up.",
    },
    {
      q: "Can I turn off tracking?",
      a: "Yes, per campaign, when inbox placement matters more than open data.",
    },
    {
      q: "What do I need to start?",
      a: "Dedicated sending domains (warmed, or ready to warm), your list, and your copy. We’ll walk you through setup on a quick call.",
    },
  ],
} as const

export const finalCta = {
  eyebrow: "Request access",
  heading: "Ready to earn a row in the inbox?",
  body: "Tell us what you’re sending and we’ll get you access.",
  walkthrough: "Prefer a walkthrough? Book 15 min.",
  reassurance: "Invite-only. We reply within one business day.",
  successTitle: "Request received.",
  successBody: "We’ll email you shortly to set up your mailboxes.",
  errorTitle: "That didn’t go through.",
  errorBody: "Something went wrong sending your request. Please try again, or email us directly.",
} as const

export const footer = {
  blurb: "Earn a row in the inbox. Cold email from your own mailboxes.",
  // "/#anchor" instead of "#anchor" so links also work from /privacy and /terms.
  links: [
    { label: "How it works", href: "/#how-it-works" },
    { label: "Volume", href: "/#volume" },
    { label: "Cost", href: "/#cost" },
    { label: "FAQ", href: "/#faq" },
    { label: "Request access", href: "/#request-access" },
    { label: brand.loginLabel, href: loginUrl },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
} as const
