import { ProjectHero } from '@/components/project-hero'
import { ProjectDetails } from '@/components/project-details'
import { ProjectLink } from '@/components/project-link'
import { SiteFooter } from '@/components/site-footer'

const PORTFOLIO_URL = 'https://new.express.adobe.com/webpage/pX86CG3RDsl2k'

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto flex max-w-3xl flex-col gap-16 px-6 py-16 md:py-24">
        <ProjectHero />
        <ProjectDetails />
        <ProjectLink url={PORTFOLIO_URL} />
      </main>
      <SiteFooter />
    </div>
  )
}
