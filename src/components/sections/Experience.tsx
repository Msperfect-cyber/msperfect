import { CheckCircle2, Clock } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { CREDENTIALS, EXPERIENCE } from '@/lib/site-content'

export function Experience() {
  return (
    <section id="experience" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          index="04 — Experience"
          title="Professional experience & credentials"
          description="Years of operations experience in another field, now paired with cybersecurity training — shown here as evidence of professional discipline, not prior security work."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="flex flex-col gap-6 lg:col-span-2">
            {EXPERIENCE.map((job) => (
              <div key={job.role} className="rounded-lg border border-border bg-card p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {job.role}
                    </h3>
                    <p className="text-sm text-muted-foreground">{job.company}</p>
                  </div>
                  <div className="flex flex-col items-start gap-1 sm:items-end">
                    <span className="label-mono rounded-full bg-secondary px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                      {job.type}
                    </span>
                    <span className="text-xs text-muted-foreground">{job.period}</span>
                  </div>
                </div>
                <ul className="mt-4 flex flex-col gap-2">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-2 text-sm leading-relaxed text-foreground"
                    >
                      <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="label-mono text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Certifications &amp; Training
            </h3>
            <ul className="mt-4 flex flex-col gap-4">
              {CREDENTIALS.map((c) => (
                <li key={c.name} className="flex items-start gap-3">
                  {c.status === 'done' ? (
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-status-done" />
                  ) : (
                    <Clock size={18} className="mt-0.5 shrink-0 text-status-pending" />
                  )}
                  <div>
                    <p className="text-sm font-medium text-foreground">{c.name}</p>
                    <p className="text-xs text-muted-foreground">{c.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
