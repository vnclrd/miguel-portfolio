import '../css/Home.css'
import linkedinLogo from '/images/logos/linkedin.png'
import githubLogo from '/images/logos/github.png'

function Home() {
  return (
    <div id="home" className='home-container'>    
      <div>
        <h1 className='home-intro-name'><b>Hi, I'm Miguel.</b></h1>
        <p className='home-profession'>I'm a <b>Computer Engineer</b>, a <b>Developer</b>, a <b>Graphic Designer</b>, <br></br>and an <b>Aspiring Software Engineer</b></p>
        <a href='https://www.linkedin.com/in/vnclrd/'>
          <img src={linkedinLogo} className='home-logo-container' />
        </a>
        <a href='https://github.com/vnclrd'>
          <img src={githubLogo} className='home-logo-container' />
        </a>
      </div>
    </div>
  )
}

export default Home
