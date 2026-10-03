import { ArrowRight, CheckCircle2, Clock } from 'lucide-react'
import { CREDENTIALS } from '@/lib/site-content'

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-border bg-foreground text-background"
    >
      <img
        src="/.netlify/images?url=/img/hero-texture.png&w=2400&fm=webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/70 to-foreground/40" />

      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <p className="label-mono text-xs font-semibold uppercase tracking-[0.25em] text-background/70">
          Cybersecurity &mdash; Early Career
        </p>

        <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Trained to notice what others walk past.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-background/80">
          I&rsquo;m transitioning into cybersecurity, building hands-on skills in
          security monitoring and investigation while bringing several years
          of professional experience in operations, documentation, and
          stakeholder communication. Careful observation and clear
          documentation are the habits I&rsquo;m bringing with me.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-background px-6 py-3 text-sm font-semibold text-foreground transition-opacity hover:opacity-90"
          >
            View Security Projects
            <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-background/30 px-6 py-3 text-sm font-semibold text-background transition-colors hover:border-background/60"
          >
            Let&rsquo;s Connect
          </a>
        </div>

        <ul className="mt-14 flex flex-col gap-3 border-t border-background/15 pt-6 sm:flex-row sm:flex-wrap sm:gap-8">
          {CREDENTIALS.map((c) => (
            <li key={c.name} className="flex items-center gap-2 text-sm text-background/75">
              {c.status === 'done' ? (
                <CheckCircle2 size={16} className="shrink-0 text-status-done" />
              ) : (
                <Clock size={16} className="shrink-0 text-status-pending" />
              )}
              <span>
                <span className="font-medium text-background">{c.name}</span>
                {' — '}
                {c.detail}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
