import React from 'react'
import './Row2.css'
function Row2() {
  return (
    
      <div className='container'>
              <h3 className="title">More Reason to join</h3>          
              <div className='cards' >             
                  <ul className="list">
                    <li className="card" >                        
                        <div  className="box" >
                            <h2>Enjoy on your TV</h2>
                            <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                            <img className="overlay-img"src="src/assets/s1.png" alt="" />                            
                        </div>                        
                    </li> 
                        <li className="card" >                           
                          <div  className="box" >
                            <h3>Download your shows to watch offline</h3>
                            <p>Save your favorites easily and always have something to watch..</p>
                            <img className="overlay-img"src="src/assets/s2.png" alt="" />                            
                        </div>                        
                     </li>
                         <li className="card" >                        
                          <div  className="box" >
                            <h3>Watch everywhere</h3>
                            <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV..</p>
                            <img className="overlay-img"src="src/assets/s3.png" alt="" />                            
                        </div>                        
                     </li>
                         <li className="card" >                         
                          <div  className="box" >
                            <h3>Create profiles for kids    </h3>
                            <p>Send kids on adventures with their favorite characters in a space made just for them — free with your membership.e.</p>
                            <img className="overlay-img"src="src/assets/s4.png" alt="" />                            
                        </div>                        
                     </li>                    
                  </ul>  
              </div>
        </div>
   
  )
}

export default Row2
