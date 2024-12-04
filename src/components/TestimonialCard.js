import React from 'react'

const TestimonialCard = ({name,title,profileUrl,testimony,ratings}) => {
  return (
    <div className='testimonial-card'>

        <div className='profile-img-title-container '>
       <img src={profileUrl} className='profile-img' />

       <div className='profile-attributes'>
        <p className='name'>{name}</p>
        <p className='title text-muted'>{title}</p>
        <div className='ratings'>
        <i class="fas fa-star rating-icon"></i>
        <i class="fas fa-star rating-icon"></i>
        <i class="fas fa-star rating-icon" ></i>
        <i class="fas fa-star rating-icon" ></i>
        <i class="fas fa-star rating-icon" style={{color: ratings == 'half' ? 'white':'' }}></i>
        </div>
       </div>
           
        </div>

        <p className='desc'>"{testimony}"</p>
        

        
    </div>
  )
}

export default TestimonialCard