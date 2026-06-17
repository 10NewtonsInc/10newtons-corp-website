import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Pillars from './components/Pillars'
import HowItWorks from './components/HowItWorks'
import Science from './components/Science'
import Platform from './components/Platform'
import Team from './components/Team'
import ContactCTA from './components/ContactCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Pillars />
        <HowItWorks />
        <Science />
        <Platform />
        <Team />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
