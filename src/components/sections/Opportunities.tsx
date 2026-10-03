import { ArrowRight } from 'lucide-react'
import { OPPORTUNITIES_TEXT } from '@/lib/site-content'

export function Opportunities() {
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 py-20 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Open to Cybersecurity Opportunities
        </h2>
        <p className="max-w-xl text-muted-foreground">{OPPORTUNITIES_TEXT}</p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-md bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
        >
          Let&rsquo;s Connect
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  )
}
