/**
 * Copy for the legal pages (/privacy and /terms), same pattern as site.ts:
 * edit here, not in the components.
 *
 * Written deliberately in plain English — our customers are small teams,
 * not legal departments. Keep it that way when editing.
 */

/** Where privacy / legal questions should land. */
export const contactEmail = "pranav.kumar@inboxrow.com"

/** Bump this whenever either document materially changes. */
export const lastUpdated = "July 23, 2026"

/**
 * A legal doc is a list of sections. Each section body is a list of blocks:
 * a string renders as a paragraph, a string[] renders as a bullet list.
 */
export type LegalBlock = string | readonly string[]

export interface LegalSection {
  readonly heading: string
  readonly blocks: readonly LegalBlock[]
}

export interface LegalDoc {
  readonly path: string
  readonly tag: string
  readonly title: string
  readonly intro: string
  readonly sections: readonly LegalSection[]
}

export const privacy: LegalDoc = {
  path: "/privacy",
  tag: "Privacy",
  title: "Privacy Policy",
  intro:
    "inboxrow is a tool for sending cold email from your own mailboxes. This page explains, in plain English, what information we collect, why, and what we do with it.",
  sections: [
    {
      heading: "The short version",
      blocks: [
        [
          "We collect the details you give us when you request access, and the data you bring into the product to run your campaigns.",
          "We use it to run inboxrow for you — nothing else.",
          "We never sell your data, and we never use your contact lists or email content for anything except sending your campaigns.",
          "Ask us to delete your data and we will.",
        ],
      ],
    },
    {
      heading: "What we collect on this website",
      blocks: [
        "When you fill in the “Request access” form, we collect your name, work email, company, and what you plan to send. That's it — we use it to reply to you and set up your access.",
        "The form is delivered to our inbox by Web3Forms, a form-to-email service, which processes your submission for that one purpose.",
        "This website doesn't use analytics or advertising trackers, and doesn't set tracking cookies. The page loads its font from a third-party host (rsms.me), which sees a standard web request (like your IP address) when the font loads.",
      ],
    },
    {
      heading: "What we collect when you use inboxrow",
      blocks: [
        "If you become a customer, we handle:",
        [
          "Account details — your name, email, and login information.",
          "Mailbox connections — the authorization you grant so inboxrow can send from your own mailboxes. We store the connection credentials securely and use them only to send and manage your campaigns.",
          "Campaign data — the contact lists you upload, the emails you write, and your sending settings.",
          "Activity data — sends, replies, and delivery status, so your dashboard and reports work.",
        ],
      ],
    },
    {
      heading: "Your contacts' data",
      blocks: [
        "The contact lists you upload belong to you. You decide who is on them; we process that data only on your instructions, to run your campaigns.",
        "We don't use your contacts for our own marketing, don't share them with other customers, and don't sell them to anyone. When you delete a list or close your account, we delete it.",
        "You're responsible for having a lawful basis to email the people on your lists — see our Terms of Service for what that means.",
      ],
    },
    {
      heading: "What we never do",
      blocks: [
        [
          "Sell or rent your data. To anyone, ever.",
          "Read your mailbox beyond what's needed to send campaigns and detect replies.",
          "Use your lists, copy, or results to benefit other customers.",
        ],
      ],
    },
    {
      heading: "Who we share data with",
      blocks: [
        "Only the service providers we need to run inboxrow — such as hosting, form delivery, and your own email provider (which necessarily processes the mail you send through it). They may only use your data to provide their service to us.",
        "Beyond that, we'd only disclose data if the law genuinely requires it.",
      ],
    },
    {
      heading: "How long we keep it",
      blocks: [
        "Access requests: as long as needed to respond and set you up. Customer data: for as long as you have an account. When you close your account — or just ask — we delete your data within 30 days, except the minimum we must keep for legal or accounting reasons.",
      ],
    },
    {
      heading: "Security",
      blocks: [
        "We keep the surface area small on purpose: few systems, few providers, credentials stored encrypted, and access limited to the people who run the service. No system is perfectly secure, but less infrastructure means less to go wrong — that's the whole idea behind inboxrow.",
      ],
    },
    {
      heading: "Your rights",
      blocks: [
        "You can ask us at any time to show you the data we hold about you, correct it, export it, or delete it. Email us and we'll sort it out — no forms, no runaround. Depending on where you live (for example the EU/UK under GDPR, or California under CCPA), these rights are also guaranteed by law.",
      ],
    },
    {
      heading: "Changes to this policy",
      blocks: [
        "If we change this policy in a way that matters, we'll update the date at the top and let active customers know by email.",
      ],
    },
    {
      heading: "Contact",
      blocks: [
        `Questions about your data? Email us at ${contactEmail}. A real person reads it.`,
      ],
    },
  ],
} as const

export const terms: LegalDoc = {
  path: "/terms",
  tag: "Terms",
  title: "Terms of Service",
  intro:
    "These are the terms for using inboxrow. We've kept them short and readable on purpose. By requesting access or using the service, you agree to them.",
  sections: [
    {
      heading: "The short version",
      blocks: [
        [
          "inboxrow sends cold email from your own mailboxes. Your domains, your reputation, your responsibility to use them lawfully.",
          "Send honest, legal email to people you're allowed to contact, and honor opt-outs.",
          "You own your lists and your copy. We just run the software.",
          "Deliverability is never guaranteed — by us or anyone. We give you the safest setup we know.",
        ],
      ],
    },
    {
      heading: "The service",
      blocks: [
        "inboxrow is software for sending cold email campaigns natively from mailboxes you own and control, with sending limits, schedules, follow-ups, and reporting. It is currently invite-only: we approve each account, and we may decline a request at our discretion.",
        "Warm-up matters. The service is built around warmed mailboxes and gradual ramp-up, and we expect you to follow the sending practices we set up with you.",
      ],
    },
    {
      heading: "Your account",
      blocks: [
        "Keep your login credentials safe — you're responsible for what happens under your account. Give us accurate information when you request access and keep it up to date. If you're an agency sending from client mailboxes, you're responsible for having your clients' permission to do so.",
      ],
    },
    {
      heading: "Acceptable use — the important part",
      blocks: [
        "Cold email is legal when done right, and inboxrow only works if everyone on it does it right. You agree to:",
        [
          "Comply with the email laws that apply to you and your recipients — such as CAN-SPAM (US), GDPR and PECR (EU/UK), and CASL (Canada).",
          "Only email people you have a lawful basis to contact, from lists you built legitimately.",
          "Identify yourself honestly — real name, real company, no fake or misleading sender details or subject lines.",
          "Honor opt-outs promptly and include a way to opt out or reply in your emails.",
          "Never send illegal, deceptive, or harmful content — no phishing, scams, malware, or harassment.",
        ],
        "If your sending draws serious spam complaints or breaks these rules, we may pause your campaigns or suspend your account — usually after talking to you first, immediately if it's serious.",
      ],
    },
    {
      heading: "Your mailboxes and email provider",
      blocks: [
        "inboxrow sends through mailboxes and domains that you own, on accounts you hold with your email provider. That means:",
        [
          "You authorize inboxrow to connect to those mailboxes to send campaigns and detect replies. You can revoke that access at any time.",
          "Your provider's own terms and sending limits apply to you. inboxrow's controls are designed to keep you inside them, but staying in good standing with your provider is your responsibility.",
          "If your provider throttles, flags, or suspends a mailbox or domain, that's between you and them — we'll help where we can, but we can't control it.",
        ],
      ],
    },
    {
      heading: "Your content and data",
      blocks: [
        "Your contact lists, email copy, and campaign data are yours. You give us permission to store and process them only as needed to run the service for you. How we handle data is covered in our Privacy Policy.",
      ],
    },
    {
      heading: "Fees",
      blocks: [
        "inboxrow is priced per setup, agreed with you when you get access. We'll always tell you the price before you owe anything, and give you notice before any price change. Costs you pay third parties — domains, mailbox hosting — are separate and yours.",
      ],
    },
    {
      heading: "No deliverability guarantees",
      blocks: [
        "Nothing in email is risk-free. Native sending from warmed mailboxes at a controlled pace is the safest approach we know, but we can't and don't guarantee inbox placement, reply rates, or that a domain or mailbox will never be flagged. Any numbers on our website describe how the product is configured, not a promised outcome.",
      ],
    },
    {
      heading: "Ending things",
      blocks: [
        "You can stop using inboxrow and close your account at any time. We can suspend or close accounts that break these terms, put other users or the service at risk, or don't pay. If we discontinue the service, we'll give you reasonable notice and a way to export your data.",
      ],
    },
    {
      heading: "Liability, plainly",
      blocks: [
        "inboxrow is provided “as is.” To the maximum extent the law allows: we're not liable for indirect losses (like lost profits, lost deals, or a burned domain), and our total liability to you is capped at what you paid us in the 12 months before the claim. You're responsible for the campaigns you send — if your sending breaks the law and someone comes after us for it, that's on you.",
        "Nothing here limits liability that can't legally be limited, or your rights as a consumer where those apply.",
      ],
    },
    {
      heading: "Changes to these terms",
      blocks: [
        "If we change these terms in a way that matters, we'll update the date at the top and notify active customers by email before the changes take effect. Continuing to use inboxrow after that means you accept the new terms.",
      ],
    },
    {
      heading: "Contact",
      blocks: [
        `Questions about these terms? Email ${contactEmail} — we answer every message personally.`,
      ],
    },
  ],
} as const
