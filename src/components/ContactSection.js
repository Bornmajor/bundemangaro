import React, { useContext, useEffect, useState } from 'react'
import coverImg from '../assets/images/contact-us-cover-img.png'
import MyContext from '../context/context';

const ContactSection = () => {

  const [email,setEmail] = useState('');
  const [subject,setSubject] = useState('');
  const [message,setMessage]= useState('');
  const  {successFeedback,contextHolder } = useContext(MyContext);
  const [isSubmitting,setIsSubmitting] = useState(false);


  const submitForm = (e) =>{
    e.preventDefault();
 
    setEmail('');
    setSubject('');
    setMessage('');
      
 
 console.log(email,subject,message);
    setTimeout(() => {
       successFeedback('Message has been sent');
      // setIsSubmitting(false);
    }, 3000);
  }


  
 

  return (
    <div className='contact-us'>
      {contextHolder}

<div className='inner-container'>

<form className='form-setup' onSubmit={submitForm}>

    <p className='header-1'>Let's Connect</p>
    
    <p className='text-secondary mb-3'>Ready to discuss your case? Seek Justice, find solutions</p>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" 
    class="form-control"
     id="exampleInputEmail1" aria-describedby="emailHelp"
     value={email}
     onChange={(e) => setEmail(e.target.value)}
     required/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Subject matter</label>
    <input
     type="text"
      class="form-control"
      value={subject}
      onChange={(e) => setSubject(e.target.value)} 
      required />
 
  </div>
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label" >Message</label>
  <textarea class="form-control"
  id="exampleFormControlTextarea1" 
  rows="3" style={{resize:'none'}} 
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  required></textarea>
</div>
 
  <button type="submit" class="btn btn-primary">

     Send Message</button>
</form>


<img src={coverImg} className='cover-img' />

</div>


    </div>
  )
}

export default ContactSection