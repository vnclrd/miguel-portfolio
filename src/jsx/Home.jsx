import '../css/Home.css'
import linkedinLogo from '/images/logos/linkedin.png'
import githubLogo from '/images/logos/github.png'

function Home() {
  return (
    <div id="home" className="home">
      <div>
        <h1 className="intro-name"><b>Hi, I'm Miguel.</b></h1>
        <p className="profession">I'm a Developer</p>
        <a href='https://www.linkedin.com/in/vnclrd/'>
          <img src={linkedinLogo} className='logo-container' />
        </a>
        <a href='https://github.com/vnclrd'>
          <img src={githubLogo} className='logo-container' />
        </a>
      </div>
    </div>
  )
}

export default Home
