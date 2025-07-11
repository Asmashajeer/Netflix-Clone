import React from 'react'
import './Login.css'
import { useState,useEffect } from 'react';
import logo from '../../assets/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Login() {

  const navigate=useNavigate();
  const {user, login, logout, signup,}=useContext(AuthContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');  
  const[signState,setSignState]=useState("Sign In")
  const[error,setError]=useState("");





 const user_auth = (e) => {
  e.preventDefault();
  
    if (signState === "Sign In") {
      const success = login(email, password);
        if (success) {
          navigate('/');
        } else {
          setError("Invalid credentials");
        }
    }
    if(signState === "Sign Up"){
      const success = signup(email, password);
        if (success) {
          navigate('/');
        }else{
          setError("User already exists");
        }
    }
};



  return (
    <div className="login">
      <img src={logo} className='login-logo' alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState==="Sign Up"?<input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Your Name" />:<></>}
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  placeholdar="Email" />
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder='Password' />
          <button onClick={user_auth} type ='submit'>{signState}</button>
          <p style={{color:'red'}}>{error}</p>
          
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label  htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState==="Sign In"?<p>New to Netflix?<span onClick={()=>{setSignState("Sign Up"),setError("")}}>Sign Up Now</span></p>
          : <p>Already have an account?<span onClick={()=>{setSignState("Sign In")}}>Sign In Now</span>
          </p>}
        </div>
      </div>
    </div>
  )    
}

export default Login
