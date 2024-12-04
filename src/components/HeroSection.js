import React from 'react'
import lineImg from '../assets/images/graphic1.png'

const HeroSection = () => {
  return (
    <div className='hero-section'>



    <div className='text-content'>
     <p className='mute-header'>Home of law & Order</p>
     
     <p className='main-header'>Your <span className='text-secondary'>Trusted Legal Partner</span> every Step of the Way</p>

     <p className='sub-header'>
      At Bunde Mangaro Law Firm, we protect your rights with personalized solutions.
       Let our experienced attorneys guide you through every legal challenge.
     </p>
     <button className='btn btn-secondary mt-3'>Free consultation</button>


    </div>

    
     <img src={lineImg} className='line-graphic' width="200px" />

     <div className='company-stats'>

        <div className='stat'>
            <p className='title'>1500+</p>
            <p>Happy clients</p>
        </div>
        <div className='stat'>
            <p className='title'>150+</p>
            <p>Attorneys</p>
        </div>

        <div className='stat'>
            <p className='title'>2000+</p>
            <p>Cases dismiss</p>
        </div>

        <div className='stat'>
            <p className='title'>500+</p>
            <p>Practice Area</p>
        </div>

     </div>

    {/* <img src={coverImg} className='hero-right-image' /> */}

    
     

  </div>
  )
}

export default HeroSection