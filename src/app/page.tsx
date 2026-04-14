import { About } from "@/components/sections/about"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"
import { Hero } from "@/components/sections/hero"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Navbar } from "@/components/sections/navbar"
import { Portfolio } from "@/components/sections/portfolio"
import { Pricing } from "@/components/sections/pricing"
import { Problems } from "@/components/sections/problems"
import { Services } from "@/components/sections/services"
import { WhoIsFor } from "@/components/sections/who-is-for"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Problems />
        <Services />
        <WhoIsFor />
        <Pricing />
        <HowItWorks />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
