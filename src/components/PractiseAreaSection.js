import React,{useState} from 'react'
import PresenterCard from './PresenterCard'
import personalDark from '../assets/images/personal-dark.png'
import personalWhite from '../assets/images/personal-white.png'
import family1 from '../assets/images/family-white.png'
import family2 from '../assets/images/family-dark.png'
import cuffDark from '../assets/images/cuff-dark.png'
import cuffWhite from '../assets/images/cuff-white.png'
import corporateDark from '../assets/images/corporate-dark.png'
import corporateWhite from '../assets/images/corporate-white.png'
import workerDark from '../assets/images/worker-dark.png'
import workerWhite from '../assets/images/worker-white.png'
import estateDark from '../assets/images/real-estate-dark.png'
import estateWhite from '../assets/images/real-estate-white.png'

const PractiseAreaSection = () => {



  return (
    <div className='practise-area' id="practise-area">

        <p className='header'>Our Practise <span className='text-secondary'>Area</span> </p>
        <p className='sub-header'>Explore our comprehensive range of legal services tailored to meet your needs.</p>

        <div className='practise-card-container py-2'>

            <div className='large-viewport container-inline-flex'>

            <PresenterCard 
            title="Personal Injury" 
            desc="Fighting for the compensation you deserve after an accident or injury."
            primaryIcon={personalWhite}
            secondaryIcon={personalDark}
            width="20px"
            height="20px"
           
            />

           <PresenterCard 
            title="Family Law" 
            desc="Providing compassionate and effective solutions for your family’s legal challenges."
             primaryIcon={family1}
            secondaryIcon={family2}
            
            />

           <PresenterCard 
            title="Criminal Defense" 
            desc="Protecting your rights with skilled and assertive defense strategies."
            primaryIcon={cuffWhite}
            secondaryIcon={cuffDark}
             width="25px"
            height="25px"
            />


            </div>

            <div className='large-viewport container-inline-flex'>
             
            <PresenterCard 
            title="Corporate Law" 
            desc="Empowering businesses with expert legal advice and strategic counsel."
            primaryIcon={corporateWhite}
            secondaryIcon={corporateDark}
             width="20px"
            height="20px"
            />

           <PresenterCard 
            title="Real Estate Law" 
            desc="Navigating property transactions and disputes with precision and expertise."
            primaryIcon={estateWhite}
            secondaryIcon={estateDark}
            width="35px"
            height="35px"
            
            
          
            />

            <PresenterCard 
            title="Employment Law" 
            desc="Advocating for fairness in the workplace for employers and employees."
            primaryIcon={workerWhite}
            secondaryIcon={workerDark}
              width="25px"
            height="25px"
            />



            </div>


        </div>

        <div className='small-viewport '>
   <div className='horizontal-scrollable'>
            <PresenterCard 
            title="Personal Injury" 
            desc="Fighting for the compensation you deserve after an accident or injury."
            primaryIcon={personalWhite}
            secondaryIcon={personalDark}
            width="20px"
            height="20px"
           
            />

           <PresenterCard 
            title="Family Law" 
            desc="Providing compassionate and effective solutions for your family’s legal challenges."
             primaryIcon={family1}
            secondaryIcon={family2}
            
            />

           <PresenterCard 
            title="Criminal Defense" 
            desc="Protecting your rights with skilled and assertive defense strategies."
            primaryIcon={cuffWhite}
            secondaryIcon={cuffDark}
             width="25px"
            height="25px"
            />

<PresenterCard 
            title="Corporate Law" 
            desc="Empowering businesses with expert legal advice and strategic counsel."
            primaryIcon={corporateWhite}
            secondaryIcon={corporateDark}
             width="20px"
            height="20px"
            />

           <PresenterCard 
            title="Real Estate Law" 
            desc="Navigating property transactions and disputes with precision and expertise."
            primaryIcon={estateWhite}
            secondaryIcon={estateDark}
            width="35px"
            height="35px"
            
            
          
            />

            <PresenterCard 
            title="Employment Law" 
            desc="Advocating for fairness in the workplace for employers and employees."
            primaryIcon={workerWhite}
            secondaryIcon={workerDark}
              width="25px"
            height="25px"
            />



            </div>
        </div>
     
        

    </div>
  )
}

export default PractiseAreaSection