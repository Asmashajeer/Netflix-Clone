import React from 'react'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import WatchListPage from './components/WatchList/WatchListPage'
import { BrowserRouter as Router,Routes,Route,Navigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'
import {lazy,Suspense} from 'react'

function ProtectedRoute({ children }) {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/login" replace />;
}



function App() {
  const {user}=useContext(AuthContext);
 
  return (
    <div className='App'>
      <ToastContainer  theme='dark'/>   
      <Router>      
        <Routes>
                 
            <Route path="/" element={user?<Home />:<Login />} /> 
          
           <Route path='/watchList' element={ <ProtectedRoute><WatchListPage/> </ProtectedRoute>}/>         
           <Route path='/login' element ={<Login />}/>
          </Routes>       
    </Router>
     
    </div>
  )
}

export default App
