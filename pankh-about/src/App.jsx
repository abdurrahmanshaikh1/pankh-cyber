import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AboutSection from './components/AboutSection'
import FounderSection from './components/FounderSection'
import MissionVision from './components/MissionVision'
import JourneyData from './components/JourneyData '

const App = () => {
  return (
    <div>
         <Navbar />
        <AboutSection />
        <FounderSection />
        <MissionVision  />
        <JourneyData  />
        <Footer />
    </div>
  )
}

export default App