import React from 'react'
import challengeIcon from '../assets/images/icons8-challenge-30.png'
import solutionIcon from '../assets/images/icons8-solution-30.png'

const CaseStudyCard = ({noCase,caseTitle,caseChallenge,caseSolution}) => {
  return (
    <div className='case-study-card'>

      <p className='no-case'>Case Study {noCase}</p>
      <p className='case-title'>{caseTitle}</p>

      <div className='challenge'>
        <img src={challengeIcon} width="20px" height="20px"/>
       <p>{caseChallenge}</p> 
      </div>

      <div className='solution'>
        <img src={solutionIcon} width="20px" height="20px"/>
       <p>{caseSolution}</p> 
      </div>

      <button className='btn btn-secondary'>Know More</button>
      

    
      
    </div>
  )
}

export default CaseStudyCard