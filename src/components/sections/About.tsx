import { SectionHeading } from '@/components/SectionHeading'
import { TRANSFERABLE_SKILLS } from '@/lib/site-content'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <SectionHeading
          index="01 — Background"
          title="Bringing professional discipline into a new field"
          description="I'm transitioning into cybersecurity after several years of professional experience in operations, purchasing, and customer-facing environments — work built on documentation, inventory and process management, reporting, and stakeholder coordination. I'm not rebranding that experience as cybersecurity work; I'm applying the habits it built to a field I'm actively training for."
        />

        <div>
          <p className="label-mono text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Transferable capabilities
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {TRANSFERABLE_SKILLS.map((skill) => (
              <li
                key={skill}
                className="rounded-md border border-border bg-card px-3 py-1.5 text-sm text-foreground"
              >
                {skill}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            The goal is straightforward: pair established professional
            discipline with hands-on cybersecurity skill, and document that
            process clearly enough that it speaks for itself.
          </p>
        </div>
      </div>
    </section>
  )
}
