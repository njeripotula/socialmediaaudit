import type { ReactNode } from 'react'

const highlights: { id: string; content: ReactNode }[] = [
  {
    id: 'strategy',
    content: (
      <>
        Strategized for senior organization{' '}
        <mark className="rounded-sm bg-[#c9a8f0] px-1 text-black">
          “San Ramon Valley Village”
        </mark>
      </>
    ),
  },
  {
    id: 'presented',
    content: 'Presented my Portfolio on Adobe Express at San Jose State University',
  },
  {
    id: 'content',
    content: 'Created content for client’s digital relevance',
  },
]

export function ProjectDetails() {
  return (
    <section aria-labelledby="what-heading" className="flex flex-col gap-6">
      <h2 id="what-heading" className="text-2xl font-semibold tracking-tight text-black">
        What it is
      </h2>
      <ol className="flex flex-col divide-y divide-black/15 border-y border-black/15">
        {highlights.map((item, index) => (
          <li key={item.id} className="flex gap-6 py-5 text-black">
            <span className="font-mono text-sm text-black" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="leading-relaxed">{item.content}</span>
          </li>
        ))}
      </ol>
    </section>
  )
}
