import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="header">
      <ul class="links">
        <li><a href="home">HOME</a></li>
        <li><a href="home">EXPERIENCE</a></li>
        <li><a href="home">SKILLS</a></li>
        <li><a href="home">EDUCATION</a></li>
        <li><a href="home">CERTIFICATIONS</a></li>
        <li><a href="home">ABOUT</a></li>
      </ul>
    </div>
  )
}

export default App


