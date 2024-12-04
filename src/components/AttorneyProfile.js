import React, { useState } from 'react'
import practiseIcon from '../assets/images/icons8-law-30.png'
import achievementIcon from '../assets/images/icons8-achievement-30.png'


const AttorneyProfile = ({name,yearOfexperience,abouts,profileUrl,practise}) => {

    const [showDetails, setShowDetails] = useState(false);

  return (
    <div className='attorney-card'
    onMouseEnter={() => setShowDetails(true)}
    onMouseLeave={() => setShowDetails(false)}
    onClick={() => setShowDetails(!showDetails)}
    >

        <img src={profileUrl} className='attorney-photo'  />
        <div className={`overlay`} style={{opacity:showDetails ? 1:0}}>
          <p className='name'>{name}</p>  
          {/* <p className='years'>Experience  <span className=''>{yearOfexperience}</span></p> */}
          <p> <img src={practiseIcon} width="20px" /> <span>{practise}</span></p>
          <p className='abouts'> <img src={achievementIcon} width="20px" /> <span>{abouts}</span></p>
        </div>
        
        
    </div>
  )
}

export default AttorneyProfile