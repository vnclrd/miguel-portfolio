import { useState } from 'react'
import './css/App.css'
import './css/Header.css'
import './css/1-Home.css'
import './css/2-Experience.css'
import './css/3-Skills.css'
import './css/4-Education.css'
import './css/5-Certifications.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div class="header">
      <ul class="links">
        <li><a href="home">Home</a></li>
        <li><a href="experience">Experience</a></li>
        <li><a href="skills">Skills</a></li>
        <li><a href="education">Education</a></li>
        <li><a href="certifications">Certifications</a></li>
        <li><a href="about">About</a></li>
      </ul>
    </div>

    <div section="home" class="home">
      <div class="intro">
        <h1 class="intro-name"><b class="intro-name">Hi, I'm Miguel</b></h1>
        <p class="intro-description">
          Welcome to my portfolio website.
        </p>
      </div>
    </div>

    <div section="experience" class="experience">Experience</div>

    <div section="skills" class="skills">Skills</div>

    <div section="education" class="education">Education</div>

    <div section="certifications" class="certifications">Certifications</div>

    <div section="about" class="about"></div>
    </>
    
  )
}

export default App


