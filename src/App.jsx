import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Interior from './components/Interior'
import Gallery from './components/Gallery'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Locations from './components/Locations'
import Booking from './components/Booking'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Interior />
        <Gallery />
        <Pricing />
        <Testimonials />
        <Locations />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
