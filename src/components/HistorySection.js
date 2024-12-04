import React, { useContext } from 'react'
import histCoverImg from '../assets/images/Blacklawyersarticle_main-image.jpg'
import MyContext from '../context/context'
import AttorneyProfile from './AttorneyProfile';
import attorney1 from '../assets/images/attorney1.jpeg'
import attorney2 from '../assets/images/user2.jpg'
import attorney3 from '../assets/images/attorney3.jpg'
import attorney4 from '../assets/images/attorney4.jpg'
import attorney5 from '../assets/images/attorney5.jpg'
import attorney6 from '../assets/images/attorney6.jpg'

const HistorySection = () => {
  const {uiTheme} = useContext(MyContext);

  return (
    <div className='history' id="history">

<p className='header'>A Legacy of <span className='text-secondary'>Justice</span> </p>

      <div className='inner-container'>

      <img src={histCoverImg} className='cover-img'/>

      <div className='text-content'>
      Bunde Mangaro isn't just a law firm – we're your trusted legal partner. Founded in 2018, we've built a reputation for excellence
      by combining extensive experience with a relentless pursuit of successful outcomes.
      Our attorneys boast a combined <span className='text-secondary'>20 years of experience</span>, successfully dismissing countless cases across various legal disciplines.
      They are highly regarded for their:

      <div className='attributes'>
      <p> <span><i class="fas fa-star text-secondary" ></i></span> In-depth legal knowledge</p>
      <p> <span><i class="fas fa-star text-secondary" ></i></span> Strategic approach </p>
      <p> <span><i class="fas fa-star text-secondary" ></i></span> Relentless advocacy </p>
      </div>
      
      <button className='btn btn-secondary mt-3'>Book an appointment</button>
      
      

      </div>

      </div>
      
      <div className='pt-3' id="our-team">
       <p className='header'>Our <span className='text-secondary'>Team</span>  </p>

      <div className='horizontal-scrollable'>

        <AttorneyProfile
        profileUrl={attorney1}
        name="Mr. John"
        practise="Criminal defense"
        abouts="Graduated with honors from Harvard Law School. Successfully defended over 200 high-profile cases. Recognized as 'Top Criminal Lawyer' by National Bar Association in 2022"
        />

        <AttorneyProfile
        profileUrl={attorney2}
        name="Rachel Kadzo"
        practise="Family law"
        abouts="Studied at Stanford Law School, focusing on family and child custody law. Known for her empathetic yet firm approach. Helped establish equitable custody arrangements for over 300 families. Received 'Advocate of the Year' in 2021."
        />

       <AttorneyProfile
        profileUrl={attorney3}
        name="Samuel Kazungu"
        practise="Corporate Law"
        abouts="A graduate of Columbia Law School with a focus on mergers and acquisitions. Played a pivotal role in negotiating contracts for Fortune 500 companies. Awarded 'Rising Star in Corporate Law' by Global Legal Forum."
        />

       <AttorneyProfile
        profileUrl={attorney4}
        name="George Geji"
        practise="Intellectual Property Law"
        abouts="Earned her JD from Kenya Law School with a concentration in IP law. Helped clients secure patents for groundbreaking technologies. Published in the Journal of Intellectual Property Law."
        />

        <AttorneyProfile
        profileUrl={attorney6}
        name="Amos Mjomba"
        practise="Environmental Law"
        abouts="Graduated from the University of California, Berkeley. Played a key role in landmark environmental protection cases. Successfully litigated against major corporations to enforce stricter sustainability practices."
        />




      </div>  
      </div>
     

      

      
        
    </div>
  )
}

export default HistorySection