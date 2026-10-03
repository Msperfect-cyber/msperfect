import { createFileRoute } from '@tanstack/react-router'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Projects } from '@/components/sections/Projects'
import { Skills } from '@/components/sections/Skills'
import { Experience } from '@/components/sections/Experience'
import { Writing } from '@/components/sections/Writing'
import { Opportunities } from '@/components/sections/Opportunities'
import { Contact } from '@/components/sections/Contact'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Writing />
        <Opportunities />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
