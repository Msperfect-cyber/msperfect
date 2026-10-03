import { Linkedin, Newspaper } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { WRITING_INTRO, WRITING_LINKS } from '@/lib/site-content'

const icons: Record<string, typeof Linkedin> = {
  LinkedIn: Linkedin,
  Medium: Newspaper,
}

export function Writing() {
  return (
    <section id="writing" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        index="05 — Writing"
        title="Writing"
        description={WRITING_INTRO}
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {WRITING_LINKS.map((link) => {
          const Icon = icons[link.platform] ?? Linkedin
          const content = (
            <>
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-secondary text-foreground">
                <Icon size={18} />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{link.platform}</p>
                <p className="text-xs text-muted-foreground">
                  {link.href ? 'View articles' : 'Link coming soon'}
                </p>
              </div>
            </>
          )

          return link.href ? (
            <a
              key={link.platform}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-lg border border-border bg-card p-6 transition-colors hover:border-accent"
            >
              {content}
            </a>
          ) : (
            <div
              key={link.platform}
              className="flex items-center gap-4 rounded-lg border border-dashed border-border bg-card/60 p-6"
            >
              {content}
            </div>
          )
        })}
      </div>
    </section>
  )
}
