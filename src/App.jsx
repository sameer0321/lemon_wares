import './App.css'
import HeroSection from './components/HeroSection'
import WebHostingSection from './components/WebHostingSection'
import Footer from './components/Footer'
import ServicesSection from './components/ServicesSection'
import PlansSection from './components/PlansSection'
import Stories from './components/Stories'
import WeServeSection from './components/WeServeSection'
import GetInTouchSection from './components/GetInTouchSection'
import Preloader from './components/Preloader'
import BackToTop from './components/BackToTop'

function App() {

  return (
    <>
      <Preloader />
      <HeroSection />
      <WebHostingSection />
      <ServicesSection />
      <PlansSection />
      <Stories />
      <WeServeSection />
      <GetInTouchSection />
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
