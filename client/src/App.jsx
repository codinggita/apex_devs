import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/dashboard/Navbar';
import HomePage from './components/dashboard/HomePage';
import Community from './components/dashboard/Community';
import About from './components/dashboard/About';
import Profile from './components/dashboard/Profile'
import LogIn from './components/dashboard/LogIn';
import SignUp from './components/dashboard/SignUp';
import Project from './components/dashboard/Project';
import UploadProject from './components/microComponent/UploadProject';


function App() {
  const [count, setCount] = useState(0)

  return (
      <>
        <div className="super-nav-bar">
          <Navbar/>
        </div>  
        <Routes>
          <Route path="/" element={<><HomePage /></>} />
          <Route path="/community" element={<Community />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/log_in" element={<LogIn/>}/>
          <Route path='/sign_up' element={<SignUp/>}/>
          <Route path='/project/:projectId' element={<Project/>}/>
          <Route path='/upload' element={<UploadProject/>}/>         
        </Routes>
      </>

  )
}

export default App
