import { CONTACT_EMAIL, NAV_LINKS, SITE_NAME } from '@/lib/site-content'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="label-mono text-sm font-semibold uppercase tracking-widest text-foreground">
            {SITE_NAME}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Cybersecurity portfolio &mdash; built while learning, in public.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-sm font-medium text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
        >
          {CONTACT_EMAIL}
        </a>
      </div>
    </footer>
  )
}
