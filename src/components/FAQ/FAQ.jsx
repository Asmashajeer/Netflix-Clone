import React, { useState } from 'react'
import FAQdata from './FAQdata'
import './FAQ.css'

function FAQ() {
    const [activeIndex,setActiveIndex]=useState(null);
    const [show,setShow]=useState(false);
    const handlePlusClick=(index)=>{
        setActiveIndex(index);        
    }
     const handleCloseClick=(index)=>{
        setActiveIndex(null);        
    }
  return (
    <div className='faq-container'>
      <h2>Frequently Asked Questions</h2>     
        <ul className='faqs'>
            {FAQdata.map((faq,index)=>(
            <li key={index} >
                <div className='question' onClick={()=>index!==activeIndex?handlePlusClick(index):handleCloseClick(index)}><p>{faq.question}</p>{activeIndex===index?<svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#FFFFFF"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>:<svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#FFFFFF"><path d="M440-120v-320H120v-80h320v-320h80v320h320v80H520v320h-80Z"/></svg>}</div>
                {activeIndex===index && <div className='answer'  ><p>{faq.ans}</p></div> }
            </li>
            ))}
        </ul>    
      
    </div>
  )
}

export default FAQ
