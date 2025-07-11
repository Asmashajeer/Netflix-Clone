import React from 'react'
import './EmailRegister.css'
function EmailRegister() {
  return (
    <div className="emailRegister">
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                <div className='email-register'>
                    <input type="text"  placeholder='"Email address'/>
                    <button className='email-button'>Get Started<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg></button>
                </div>
            </div> 
  )
}

export default EmailRegister
