interface SectionHeadingProps {
  index: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  index,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'text-center' : 'text-left'}>
      <p className="label-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        {index}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p
          className={
            'mt-4 max-w-2xl text-muted-foreground ' +
            (align === 'center' ? 'mx-auto' : '')
          }
        >
          {description}
        </p>
      )}
    </div>
  )
}
