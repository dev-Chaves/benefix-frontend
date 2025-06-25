import NavBar from "../components/NavBar"
import Hero from "../components/Hero"
import Slogan from "../components/Slogan"
const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar/>
      <Slogan/>
      <Hero/>
    </div>
  )
}

export default LandingPage


