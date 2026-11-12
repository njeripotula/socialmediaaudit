export function ProjectHero() {
  return (
    <header className="flex flex-col gap-6 text-black">
      <p className="text-sm font-medium uppercase tracking-widest text-black">
        Project by Natasharaj Jeripotula
      </p>
      <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-6xl">
        Social Media Strategist
      </h1>
      <p className="max-w-2xl text-pretty text-lg leading-relaxed text-black">
        Social Media Audit for the senior organization{' '}
        <mark className="rounded-sm bg-[#c9a8f0] px-1 font-medium text-black">
          San Ramon Valley Village
        </mark>
        .
      </p>
    </header>
  )
}
