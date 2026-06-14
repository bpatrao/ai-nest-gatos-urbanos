import type { ReactNode } from "react";

export function PageHeader({ eyebrow, title, lead, children }: { eyebrow?: string; title: string; lead?: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blush/60 via-cream to-blush/30 px-5 pt-16 pb-12 lg:px-8 lg:pt-24 lg:pb-20">
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" aria-hidden />
      <div className="absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-terracotta/15 blur-3xl" aria-hidden />
      <div className="relative mx-auto max-w-5xl text-center">
        {eyebrow && (
          <span className="inline-flex items-center rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">{title}</h1>
        {lead && <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">{lead}</p>}
        {children && <div className="mt-7">{children}</div>}
      </div>
    </section>
  );
}
