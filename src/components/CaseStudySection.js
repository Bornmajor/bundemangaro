import React from 'react'
import CaseStudyCard from './CaseStudyCard'

const CaseStudySection = () => {
  return (
    <div className='case-study' id="case-study">

    <p className='header'>A Legacy of <span className='text-secondary'>Legal Excellence</span></p>

 

    <div className='large-viewport container-inline-flex'>

        <CaseStudyCard
        noCase="01"
        caseTitle="Winning Justice for an Injured Client in a Car Accident Case"
        caseChallenge="The client faced severe injuries, mounting medical bills, and loss of income while the insurance company refused fair compensation."
        caseSolution="Our team gathered evidence, consulted with medical experts, and negotiated aggressively with the insurance company."
        />

        <CaseStudyCard
        noCase="02"
        caseTitle="Helping a Startup Resolve a Shareholder Dispute"
        caseChallenge="Disagreements over equity distribution and decision-making threatened the company’s operations."
        caseSolution="We mediated the conflict, reviewed the shareholder agreement, and drafted amendments to ensure fairness and clarity."
        />

        <CaseStudyCard
        noCase="03"
        caseTitle="Ensuring Fair Custody Arrangements in a Divorce Case"
        caseChallenge="The opposing party sought full custody despite a history of neglect."
        caseSolution="We presented evidence of our client’s active parenting role, worked with child psychologists, and emphasized the child’s best interests in court."
        />

    </div>

    <div className='small-viewport'>
         <div className=' horizontal-scrollable'>

<CaseStudyCard
noCase="01"
caseTitle="Winning Justice for an Injured Client in a Car Accident Case"
caseChallenge="The client faced severe injuries, mounting medical bills, and loss of income while the insurance company refused fair compensation."
caseSolution="Our team gathered evidence, consulted with medical experts, and negotiated aggressively with the insurance company."
/>

<CaseStudyCard
noCase="02"
caseTitle="Helping a Startup Resolve a Shareholder Dispute"
caseChallenge="Disagreements over equity distribution and decision-making threatened the company’s operations."
caseSolution="We mediated the conflict, reviewed the shareholder agreement, and drafted amendments to ensure fairness and clarity."
/>

<CaseStudyCard
noCase="03"
caseTitle="Ensuring Fair Custody Arrangements in a Divorce Case"
caseChallenge="The opposing party sought full custody despite a history of neglect."
caseSolution="We presented evidence of our client’s active parenting role, worked with child psychologists, and emphasized the child’s best interests in court."
/>

</div> 
    </div>

        
    </div>
  )
}

export default CaseStudySection