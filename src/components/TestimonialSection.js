import React from 'react'
import TestimonialCard from './TestimonialCard'
import user1 from '../assets/images/user1.jpg'
import user2 from '../assets/images/user2.jpg'
import user3 from '../assets/images/user3.jpg'
import user4 from '../assets/images/user4.jpg'

const TestimonialSection = () => {
  return (
    <div className='testimony'>

      <p className='header'>Your Legal Success, <span className='text-secondary'>In Their Own Words</span></p>

       <div className='horizontal-scrollable'>

        <TestimonialCard
        name="Rhoda A."
        title="Client"
        testimony="Bunde Mangaro truly exceeded my expectations. 
        They guided me through a complex legal process with patience and expertise."
        profileUrl={user1}
        />

        <TestimonialCard
        name="Emily K."
        title="Business owner"
        testimony="As a small business owner, navigating legal matters can be daunting. Bunde Mangaro provided practical advice and strategic solutions."
        profileUrl={user2}
        ratings="half"
        />

        <TestimonialCard
        name="Fred Kiraga"
        title="Client"
        testimony="I was initially overwhelmed by the legal complexities of my situation. Bunde Mangaro simplified the process for my rights."
        profileUrl={user3}
        />

        <TestimonialCard
        name="Jennifer"
        title="Investor"
        testimony="Bunde Mangaro's deep understanding of corporate law and keen attention to detail were invaluable to my investment endeavors."
        profileUrl={user4}
        />

        <TestimonialCard
        name="Norah Mwangi"
        title="Investor"
        testimony="During a difficult time, Bunde Mangaro provided compassionate and effective legal counsel. They guided us through the process like experts."
        profileUrl={user1}
        />

       <TestimonialCard
        name="Deborah H."
        title="Entrepreneur"
        testimony="Bunde Mangaro helped me turn a business idea into a reality. Their legal guidance and support were instrumental in navigating the challenges of starting a new venture."
        profileUrl={user2}
        />

       </div>

    </div>
  )
}

export default TestimonialSection