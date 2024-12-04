import React from 'react'
import appLogo from '../assets/images/court_logo.png'

const FooterSection = () => {
  return (
    <>
    <div className='footer' id="footer">

<div className='inner-container'>

 <div className='app-logo-container' >
  <img className='app-logo' src={appLogo} width="50px" />
 <span className='app-title'>Bunde Mangaro</span>  
 </div>

 <p className='motto'>Empowering Lives, Protecting Rights.</p>
 
 <p className='location'>
 <i class="fas fa-map-marker-alt"></i> Yusufall Mansion Building 2nd Floor.Office No.11B Moi Avenue Mombasa
 </p>

 <div className='contact-address'>
    <p><i class="fas fa-envelope"></i> osmangaro@yahoo.com</p>
    <p><i class="fas fa-phone-square-alt"></i> +254 721 377 396</p>
    <p><i class="fas fa-phone-alt"></i> +254 734 242 409</p>
</div>



</div>


<div className='sitemaps'>

<div className='inner-container'>

<a className='page-links' href='#'>Home</a>
<a className='page-links' href='#'>Our services</a>
<a className='page-links' href='#'>About Us</a>
<a className='page-links' href='#'>Contact Us</a>

</div>

<div className='inner-container'>

<a className='page-links' href='#'>Practise</a>
<a className='page-links' href='#'>Our services</a>
<a className='page-links' href='#'>Blogs</a>
<a className='page-links' href='#'>Careers</a>

</div>

<div className='inner-container'>

<a className='page-links' href='#'>Term of service</a>
<a className='page-links' href='#'>Privacy policy</a>
<a className='page-links' href='#'>Cookies</a>
{/* <a className='page-links' href='#'>Contact Us</a> */}

</div>


</div>




<div className='inner-container'>

<div className='social-links'>
<i class="fab fa-linkedin icon"></i>
<i class="fab fa-instagram-square icon"></i>
<i class="fab fa-facebook-square icon"></i>
<i class="fab fa-twitter-square icon"></i>

</div>

</div>



</div>

<div className='copyright'>

<p className='organization-title'>
&#169;Bunde Mangaro & Company Advocates    
</p>

<div className='contact-address'>
    <p><i class="fas fa-envelope"></i> osmangaro@yahoo.com</p>
    <p>+254 721 377 396</p>
    <p>+254 734 242 409</p>
</div>


</div>
    
    </>
    
  )
}

export default FooterSection