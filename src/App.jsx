import { useState } from 'react'
import './css/App.css'
import './css/Header.css'
import './css/1-Home.css'
import './css/2-About.css'
import './css/3-Experience.css'
import './css/4-Skills.css'
import './css/5-Education.css'
import './css/6-Certifications.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div class="header">
      <ul class="links">
        <li><a href="home">Home</a></li>
        <li><a href="about">About</a></li>
        <li><a href="experience">Experience</a></li>
        <li><a href="skills">Skills</a></li>
        <li><a href="education">Education</a></li>
        <li><a href="certifications">Certifications</a></li>
      </ul>
    </div>

    <div section="home" class="home">
      <div class="intro">

        <h1 class="intro-name"><b>Hi, I'm</b><b class="intro-name-color"> Miguel</b></h1>
        <p class="intro-description">
          Welcome to my portfolio website.
        </p>
        <button class="get-started">Get Started</button>
      </div>
    </div>

    <div section="about" class="about">About</div>

    <div section="experience" class="experience">Experience</div>

    <div section="skills" class="skills">Skills</div>

    <div section="education" class="education">Education</div>

    <div section="certifications" class="certifications">Certifications</div>

    
    </>
    
  )
}

export default App


