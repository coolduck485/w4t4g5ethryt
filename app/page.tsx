import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  )
}

