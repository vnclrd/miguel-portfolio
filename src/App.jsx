import { useState } from 'react'
import './css/App.css'
import './css/Header.css'
import './css/Body1.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div class="header">
      <ul class="links">
        <li><a href="home">Home</a></li>
        <li><a href="home">Experience</a></li>
        <li><a href="home">Skills</a></li>
        <li><a href="home">Education</a></li>
        <li><a href="home">Certification</a></li>
        <li><a href="home">About</a></li>
      </ul>
    </div>

    <div class="body1">
      <div class="intro">
        <h1 class="intro-name"><b class="intro-name">Hi, I'm Miguel</b></h1>
        <p class="intro-description">
          Welcome to my portfolio website.
        </p>
      </div>
    </div>

    




    </>
    
  )
}

export default App


