import { About } from "@/components/sections/about"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"
import { Hero } from "@/components/sections/hero"
import { Navbar } from "@/components/sections/navbar"
import { Portfolio } from "@/components/sections/portfolio"
import { Reviews } from "@/components/sections/reviews"
import { Services } from "@/components/sections/services"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Reviews />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
