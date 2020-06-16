import React from 'react';
import Home from './components/home/Home'
import AboutUs from './components/about_us/AboutUs'
import HeroSection from './components/hero_section/HeroSection'
import Information from './components/information/Information'
import OurServices from './components/our_services/OurServices'
import Testimonails from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <Home />
      <AboutUs />
      <HeroSection />
      <Information />
      <OurServices />
      <Testimonails />
      <Contact />
      <Footer />
    </>
  )
}

export default App;
