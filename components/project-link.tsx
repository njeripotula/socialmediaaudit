import { ArrowUpRight } from 'lucide-react'

export function ProjectLink({ url }: { url: string }) {
  return (
    <section aria-labelledby="read-more-heading" className="flex flex-col gap-4">
      <h2 id="read-more-heading" className="text-2xl font-semibold tracking-tight">
        Where to see it:
      </h2>
      <p className="leading-relaxed text-black">
        View the full portfolio on Adobe Express.
      </p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-fit items-center gap-2 rounded-full border-2 border-black px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-[#c9a8f0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        View the portfolio
        <ArrowUpRight className="size-4" aria-hidden="true" />
        <span className="sr-only">(opens in a new tab)</span>
      </a>
      <p className="break-all font-mono text-xs text-black">
        new.express.adobe.com/webpage/pX86CG3RDsl2k
      </p>
    </section>
  )
}
