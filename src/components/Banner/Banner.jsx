import React, { useEffect,useState } from 'react'
import './Banner.css'
import EmailRegister from '../EmailRegister/EmailRegister'


function Banner() { 
      
  return (
    <div className="banner">
        
        <div className="banner-content">

            <div className="banner-text">
                <h1>Unlimited movies, TV shows, and more</h1>
                <p>Starts at AED 35. Cancel anytime.</p>
            </div>
           <EmailRegister />         
       
        </div>
    </div>
  )
}

export default Banner
