import React from 'react'
import HeroSection from '../components/HeroSection'
import PractiseAreaSection from '../components/PractiseAreaSection'
import HistorySection from '../components/HistorySection'
import TestimonialSection from '../components/TestimonialSection'
import CaseStudySection from '../components/CaseStudySection'
import ContactSection from '../components/ContactSection'
import FooterSection from '../components/FooterSection'

const Home = () => {
  return (
    <div  className='main-container'>

    <HeroSection />
    <PractiseAreaSection />
    <HistorySection />
    <TestimonialSection />
    <CaseStudySection />
    <ContactSection />
    <FooterSection />
        
    </div>
  )
}

export default Home