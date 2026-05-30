import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import WhatOffering from './components/WhatOffering.jsx'
import FeaturedModels from './components/FeaturedModels.jsx'
import ReimaginedFuture from './components/ReimaginedFuture.jsx'
import ExperienceInnovation from './components/ExperienceInnovation.jsx'
import LegacyTimeline from './components/LegacyTimeline.jsx'
import CustomerExperience from './components/CustomerExperience.jsx'
import NewsletterCTA from './components/NewsletterCTA.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="min-h-screen bg-page text-white">
      <Navbar />
      <main>
        <Hero />
        <WhatOffering />
        <FeaturedModels />
        <ReimaginedFuture />
        <ExperienceInnovation />
        <LegacyTimeline />
        <CustomerExperience />
        <NewsletterCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
