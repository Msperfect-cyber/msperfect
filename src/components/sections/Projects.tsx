import { Clock, FileText, Search } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { FEATURED_PROJECT } from '@/lib/site-content'

export function Projects() {
  const p = FEATURED_PROJECT

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        index="03 — Evidence"
        title="Projects"
        description="Practical, documented investigations — not course certificates. Each project is written up honestly, including what's still in progress."
      />

      <div className="mt-12 overflow-hidden rounded-lg border border-border bg-card">
        <div className="flex flex-col gap-4 border-b border-border p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-secondary text-foreground">
              <Search size={18} />
            </div>
            <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
          </div>
          <span className="label-mono inline-flex w-fit items-center gap-1.5 rounded-full border border-status-pending/40 px-3 py-1 text-xs font-medium text-status-pending">
            <Clock size={13} />
            {p.status} — Coming Soon
          </span>
        </div>

        <div className="grid gap-8 p-6 md:grid-cols-2">
          <div>
            <h4 className="label-mono text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Objective
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-foreground">{p.objective}</p>
          </div>
          <div>
            <h4 className="label-mono text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Scenario
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-foreground">{p.scenario}</p>
          </div>
          <div>
            <h4 className="label-mono text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Environment &amp; Tools
            </h4>
            <ul className="mt-2 flex flex-wrap gap-2">
              {p.environment.map((tool) => (
                <li
                  key={tool}
                  className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-foreground"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="label-mono text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Investigation Process
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.process}</p>
          </div>
          <div>
            <h4 className="label-mono text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Findings
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.findings}</p>
          </div>
          <div>
            <h4 className="label-mono text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Outcome &amp; Lessons Learned
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {p.outcome} {p.lessons}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-border bg-secondary/40 p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <FileText size={16} className="shrink-0" />
            {p.evidence}
          </p>
          <span className="label-mono inline-flex w-fit items-center rounded-md border border-dashed border-border px-3 py-1.5 text-xs font-medium text-muted-foreground">
            {p.linkLabel}
          </span>
        </div>
      </div>

      <p className="mt-6 text-sm text-muted-foreground">
        Additional hands-on projects are in progress and will be added here as
        they&rsquo;re completed and documented.
      </p>
    </section>
  )
}
