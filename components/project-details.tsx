const highlights = [
  'Strategized for senior organization “San Ramon Valley Village”.',
  'Presented my Portfolio on Adobe Express at San Jose State University.',
  'Created content for client’s digital relevance.',
]

export function ProjectDetails() {
  return (
    <div className="flex flex-col gap-12">
      <section aria-labelledby="what-heading" className="flex flex-col gap-6">
        <h2 id="what-heading" className="text-2xl font-semibold tracking-tight">
          What it is
        </h2>
        <ol className="flex flex-col divide-y divide-neutral-300 border-y border-neutral-300">
          {highlights.map((item, index) => (
            <li key={item} className="flex gap-6 py-5">
              <span className="font-mono text-sm text-neutral-500" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ol>
      </section>

      <section
        aria-labelledby="why-heading"
        className="flex flex-col gap-4 rounded-xl bg-neutral-200 p-8"
      >
        <h2 id="why-heading" className="text-2xl font-semibold tracking-tight">
          Why it matters
        </h2>
        <p className="text-pretty text-lg leading-relaxed text-neutral-800">
          It shows my social media auditing skills to tech writing employers.
        </p>
      </section>
    </div>
  )
}
