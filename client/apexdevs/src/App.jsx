import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/dashboard/Navbar';
import Footer from './components/dashboard/Footer';
import HomePage from './components/dashboard/HomePage';
// import SuperNav from './components/SuperNav';
import Community from './components/dashboard/Community';

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/community" element={<Community />} />
        </Routes>
        <Footer/>
      </>

  )
}

export default App
