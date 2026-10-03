import { SectionHeading } from '@/components/SectionHeading'
import { SKILL_CATEGORIES } from '@/lib/site-content'

const levelStyles: Record<string, string> = {
  'Hands-on': 'border-status-done/40 text-status-done',
  'Currently learning': 'border-status-pending/40 text-status-pending',
  Developing: 'border-status-pending/40 text-status-pending',
}

export function Skills() {
  return (
    <section id="skills" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          index="02 — Capabilities"
          title="Skills"
          description="Developed through structured coursework and hands-on lab practice. Labels reflect where each skill currently stands, not a formal rating."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((group) => (
            <div
              key={group.category}
              className="rounded-lg border border-border bg-card p-6"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center justify-between gap-3"
                  >
                    <span className="text-sm text-foreground">{item.name}</span>
                    <span
                      className={
                        'label-mono rounded-full border px-2 py-0.5 text-[11px] font-medium ' +
                        (levelStyles[item.level] ?? 'border-border text-muted-foreground')
                      }
                    >
                      {item.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
