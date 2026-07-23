import { useRef, useState, type FormEvent } from "react"
import { GUTTER } from "@/components/primitives"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Icon } from "@/components/icons"
import { brand, finalCta, forms } from "@/content/site"
import { cn } from "@/lib/utils"

type FieldName = "name" | "email" | "company"
type Errors = Partial<Record<FieldName, string>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(name: FieldName, value: string): string | undefined {
  const v = value.trim()
  if (name === "email") {
    if (!v) return "Enter your work email so we can reply."
    if (!EMAIL_RE.test(v))
      return "That doesn’t look like a valid email address."
    return
  }
  if (v.length < 2) {
    return name === "name"
      ? "Please enter your name."
      : "Please tell us where you work."
  }
}

const inputTone =
  "h-12 rounded-lg border-white/12 bg-white/6 text-canvas placeholder:text-white/35 " +
  "transition-colors hover:border-white/20 focus-visible:border-accent-500 " +
  "focus-visible:ring-accent-500/30 aria-invalid:border-signal aria-invalid:ring-signal/25"

export function RequestAccess() {
  const formRef = useRef<HTMLFormElement>(null)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle")

  /** Validate on blur, then live once a field is already showing an error. */
  const handleBlur =
    (name: FieldName) => (e: { target: { value: string } }) => {
      if (!e.target.value) return
      setErrors((prev) => ({
        ...prev,
        [name]: validate(name, e.target.value),
      }))
    }

  const handleChange =
    (name: FieldName) => (e: { target: { value: string } }) => {
      setErrors((prev) =>
        prev[name] ? { ...prev, [name]: validate(name, e.target.value) } : prev
      )
    }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)

    const next: Errors = {}
    for (const field of ["name", "email", "company"] as const) {
      const msg = validate(field, String(data.get(field) ?? ""))
      if (msg) next[field] = msg
    }
    setErrors(next)

    const firstInvalid = (Object.keys(next) as FieldName[])[0]
    if (firstInvalid) {
      formRef.current
        ?.querySelector<HTMLInputElement>(`[name="${firstInvalid}"]`)
        ?.focus()
      return
    }

    setStatus("sending")

    // Delivered by Web3Forms (no backend). One submission per recipient key,
    // so every inbox in forms.recipients gets a copy. Config: content/site.ts.
    const form = e.currentTarget
    const payloads = forms.recipients.map((recipient) => {
      const body = new FormData(form)
      body.append("access_key", recipient.accessKey)
      body.append("subject", forms.subject)
      body.append("from_name", `${brand.name} — request access`)
      return body
    })

    const results = await Promise.all(
      payloads.map((body) =>
        fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { Accept: "application/json" },
          body,
        })
          .then((res) => res.json())
          .then((json: { success?: boolean }) => json.success === true)
          .catch(() => false)
      )
    )

    setStatus(results.every(Boolean) ? "sent" : "error")
  }

  return (
    <section
      id="request-access"
      aria-labelledby="request-heading"
      className={cn(
        "border-t border-hairline py-[clamp(80px,10vw,144px)]",
        GUTTER
      )}
    >
      {/* The page's one moment of contrast: the canvas stays constant, the
            ask does not. */}
      <div className="overflow-hidden rounded-xl bg-ink text-canvas">
        <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16 lg:p-14">
          <div>
            <p className="tag flex items-center gap-2.5 text-accent-500">
              <span className="size-1.5 rounded-full bg-accent-500" />
              {finalCta.eyebrow}
            </p>
            <h2
              id="request-heading"
              className="display mt-7 max-w-[13ch] text-h2-lg"
            >
              {finalCta.heading}
            </h2>
            <p className="mt-6 max-w-[36ch] text-h3 leading-[1.55] text-white/60">
              {finalCta.body}
            </p>
            <a
              href="#request-access"
              className="group mt-8 inline-flex min-h-11 items-center gap-2 text-body font-semibold text-white/60 transition-colors hover:text-canvas"
            >
              {finalCta.walkthrough}
              <Icon
                name="arrow-right"
                className="size-4 transition-transform group-hover:translate-x-0.5"
              />
            </a>
          </div>

          {status === "sent" ? (
            <div
              role="status"
              aria-live="polite"
              className="flex h-fit items-start gap-3.5 self-center rounded-[10px] border border-accent-500/35 bg-accent-500/10 p-6"
            >
              <Icon
                name="check-circle"
                className="mt-0.5 size-5 shrink-0 text-accent-500"
              />
              <span>
                <b className="block text-body font-semibold">
                  {finalCta.successTitle}
                </b>
                <span className="mt-1.5 block text-body text-white/60">
                  {finalCta.successBody}
                </span>
              </span>
            </div>
          ) : (
            <form
              ref={formRef}
              onSubmit={onSubmit}
              noValidate
              className="grid gap-4 self-center"
            >
              {/* Honeypot: real users never see or fill this; bots that tick
                  it are silently dropped by Web3Forms. */}
              <input
                type="checkbox"
                name="botcheck"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  name="name"
                  label="Name"
                  placeholder="Jordan Ellis"
                  autoComplete="name"
                  error={errors.name}
                  onBlur={handleBlur("name")}
                  onChange={handleChange("name")}
                />
                <Field
                  name="email"
                  label="Work email"
                  type="email"
                  inputMode="email"
                  placeholder="jordan@company.com"
                  autoComplete="email"
                  error={errors.email}
                  onBlur={handleBlur("email")}
                  onChange={handleChange("email")}
                />
              </div>

              <Field
                name="company"
                label="Company"
                placeholder="Company name"
                autoComplete="organization"
                error={errors.company}
                onBlur={handleBlur("company")}
                onChange={handleChange("company")}
              />

              <div>
                <Label
                  htmlFor="what"
                  className="tag mb-2.5 text-micro text-white/45"
                >
                  What are you sending?
                </Label>
                <Textarea
                  id="what"
                  name="what"
                  rows={3}
                  placeholder="Who you’re reaching out to, roughly how many per day, and what the offer is."
                  className={cn(inputTone, "h-auto min-h-[88px] resize-y py-3")}
                />
              </div>

              {status === "error" ? (
                <div
                  role="alert"
                  className="flex items-start gap-3 rounded-[10px] border border-signal/40 bg-signal/10 p-4"
                >
                  <Icon
                    name="triangle-alert"
                    className="mt-0.5 size-4 shrink-0 text-signal"
                  />
                  <span className="text-small text-white/75">
                    {finalCta.errorBody}
                  </span>
                </div>
              ) : null}

              <div className="mt-1 flex flex-wrap items-center gap-4">
                <Button
                  type="submit"
                  variant="primary"
                  size="cta"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending…" : brand.ctaLabel}
                  {status === "sending" ? null : (
                    <Icon name="arrow-right" className="size-4" />
                  )}
                </Button>
                <span className="text-small text-white/45">
                  {finalCta.reassurance}
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Field({
  name,
  label,
  error,
  ...props
}: React.ComponentProps<typeof Input> & {
  name: FieldName
  label: string
  error?: string
}) {
  const errorId = `${name}-error`
  return (
    <div>
      <Label htmlFor={name} className="tag mb-2.5 text-micro text-white/45">
        {label}
      </Label>
      <Input
        id={name}
        name={name}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={inputTone}
        {...props}
      />
      {error ? (
        <p id={errorId} role="alert" className="mt-2 text-xs text-signal">
          {error}
        </p>
      ) : null}
    </div>
  )
}
