import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CoursesSection from './components/CoursesSection'

const App = () => {
  return (
    <div className="min-h-screen bg-[#020811]">
      <Navbar />

      <div className='pt-20'>
      <CoursesSection />
      </div>
      <Footer />
    </div>
  )
}

export default App