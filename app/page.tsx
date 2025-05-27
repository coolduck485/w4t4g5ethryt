import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { PaymentMethods } from "@/components/payment"
import { NotificationBox } from "@/components/noti"
import StickyNotification from "@/components/sticky-notification"

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Projects />
      <Skills />
      <PaymentMethods />
      <Contact />
      <NotificationBox
        id="bookings"
        // title="🎉 Available for work 🎉"
        // description="I'm currently available for freelance work. If you're interested, please reach out to me via the contact methods."
        title="New Discord Server"
        description="Server link: https://discord.gg/xGddZfzd"
        />
    </main>
  )
}

