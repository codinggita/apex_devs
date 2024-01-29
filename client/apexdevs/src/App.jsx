import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar />
      <div className="content">
        {/* Other content goes here */}
        <h1>Welcome to my website!</h1>
        <p>This is the main content of your application.</p>
      </div>
    </div>
  )
}

export default App
