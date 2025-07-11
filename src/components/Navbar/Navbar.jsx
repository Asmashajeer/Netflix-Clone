import React from 'react' 
import './Navbar.css'
import { useContext } from 'react';
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { WatchListContext } from '../../context/WatchListContext';
function Navbar() {
  const { isLoggedIn,signOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const {watchList}=useContext(WatchListContext);
  const signInClickHandler=()=>{
        navigate('/login');
  }


  const handleList=()=>{
      navigate('/watchList');
  }
  return (
    <div className='navbar'>
      <div className="navbar-left">          
            <img className='navbar-logo' src={logo} alt="Logo" />          
      </div>
      <div className="navbar-right">
            <div className="language-dropdown">
             <div><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FFFFFF"><path d="m488-96 171-456h82L912-96h-79l-41-117H608L567-96h-79ZM169-216l-50-51 192-190q-36-38-67-79t-54-89h82q18 32 36 54.5t52 60.5q38-42 70-87.5t52-98.5H48v-72h276v-96h72v96h276v72H558q-21 69-61 127.5T409-457l91 90-28 74-112-112-191 189Zm463-63h136l-66-189-70 189Z"/></svg></div> 
              <div className='language-select' >     
                <span >English</span>
              </div>
              <div><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-360 280-560h400L480-360Z"/></svg></div>
            </div>
            {!isLoggedIn &&
            <div className="signIn">
               <button className='signIn-btn' onClick={signInClickHandler}>Sign In</button>
            </div>}
            <div className="navbar-profile">
              <img src={profile_img} alt=""  className='profile'/>
              <img src={caret_icon} alt="" />
              {isLoggedIn  &&<div className="dropdown">
                  <p onClick={watchList.length !== 0 ? handleList : undefined}>MyList</p>
                  
                 <p onClick={signOut}>Sign Out Of Netflix</p>

               </div>}
            </div>
      </div>
      
    </div>
  )
}

export default Navbar
