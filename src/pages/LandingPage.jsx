import NavBar from "../components/NavBar"
import Hero from "../components/Hero"
import Slogan from "../components/Slogan"
import HowItWorks from "../components/HowItWorks"
import Benefits from "../components/Benefits"
import Statistics from "../components/Statistics"
import Testimonials from "../components/Testimonials"
import FAQ from "../components/FAQ"
import CallToAction from "../components/CallToAction"
import Footer from "../components/Footer"

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar/>
      <Slogan/>
      <Hero/>
      <Benefits/>
      <Statistics/>
      <HowItWorks/>
      <Testimonials/>
      <FAQ/>
      <CallToAction/>
      <Footer/>
    </div>
  )
}

export default LandingPage