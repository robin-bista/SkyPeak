import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Experiences from './components/Experiences'
import PlanVisit from './components/PlanVisit'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Experiences />
        <PlanVisit />
        <Gallery />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App
