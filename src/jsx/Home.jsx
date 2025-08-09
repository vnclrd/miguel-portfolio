import styles from '../css/Home.module.css'
import linkedinLogo from '/images/logos/linkedin.png'
import githubLogo from '/images/logos/github.png'

function Home() {
  return (
    <div id="home" className={styles.home}>    
      <div>
        <h1 className={styles.introName}><b>Hi, I'm Miguel.</b></h1>
        <p className={styles.profession}>I'm a <b>Computer Engineer</b>, a <b>Developer</b>, a <b>Graphic Designer</b>, <br></br>and an <b>Aspiring Software Engineer</b></p>
        <a href='https://www.linkedin.com/in/vnclrd/'>
          <img src={linkedinLogo} className={styles.logoContainer} />
        </a>
        <a href='https://github.com/vnclrd'>
          <img src={githubLogo} className={styles.logoContainer} />
        </a>
      </div>
    </div>
  )
}

export default Home
