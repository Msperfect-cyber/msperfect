import { useState } from 'react'
import { Mail, Send } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { CONTACT_EMAIL } from '@/lib/site-content'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        index="06 — Contact"
        title="Contact"
        description="Have a role, project, or opportunity that fits? I'd like to hear about it."
      />

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <div>
          {submitted ? (
            <div className="rounded-lg border border-border bg-card p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-status-done/10">
                <Mail className="text-status-done" size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                Message sent
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Thanks for reaching out &mdash; I&rsquo;ll get back to you as soon as I
                can.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm font-medium text-foreground underline underline-offset-4"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={(e) => {
                e.preventDefault()
                const form = e.currentTarget
                const formData = new FormData(form)
                fetch('/contact.html', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                  body: new URLSearchParams(
                    formData as unknown as Record<string, string>,
                  ).toString(),
                }).then(() => setSubmitted(true))
              }}
              className="flex flex-col gap-5"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don&rsquo;t fill this out: <input name="bot-field" />
                </label>
              </p>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1.5 w-full rounded-md border border-border bg-card px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1.5 w-full rounded-md border border-border bg-card px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="mt-1.5 w-full resize-none rounded-md border border-border bg-card px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30"
                  placeholder="What you're hiring for, or what you'd like to ask"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-fit items-center gap-2 rounded-md bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
              >
                <Send size={16} />
                Send message
              </button>
            </form>
          )}
        </div>

        <div className="rounded-lg border border-border bg-secondary/40 p-8">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
            Prefer email?
          </h3>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-3 inline-flex items-center gap-2 text-base font-medium text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
          >
            <Mail size={18} />
            {CONTACT_EMAIL}
          </a>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Best for freelance projects, internships, junior security
            operations roles, and remote cybersecurity work. I read every
            message personally.
          </p>
        </div>
      </div>
    </section>
  )
}
