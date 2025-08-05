import { useEffect, useState } from 'react'

function Header() {   

  // scrolled = where page is scrolled (true/false)
  // setScrolled = function to update state
  const [scrolled, setScrolled] = useState(false);

  // useEffect() runs code when browser is loaded
  // empty [] means it will only run once
  useEffect(() => {
    
    // function that checks how far the user has scrolled
    // setScrolled(window.scrollY > 10) checks if scroll is more than 10px
    // if yes, setScrolled(true), otherwise setScrolled(false)
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    // tells browser to run handleScroll function when user scrolls
    window.addEventListener("scroll", handleScroll)
    
    // cleanup function
    // removes scroll listener when components are removed.
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToProjects() {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })
  }

  // elements of the header
  return (
    // style={} applies inline styles directly to the element
    // 0.7 (true), 1 (false)
    <div className="header"
        style={{
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        minHeight: '7vh',
        opacity: scrolled ? '0.75' : '1',
        borderRadius: scrolled ? 25 : 0,
        marginTop: scrolled ? '25px' : '0px',
        width: scrolled ? '45%' : '100%',
        filter: scrolled
            ? 'drop-shadow(0 0 10px rgba(0, 0, 0, 1))'
            : 'drop-shadow(0 0 25px rgba(0, 0, 0, 0.50))',
        position: 'fixed',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        transition: 'all 0.3s ease'
    }}>
      <ul className="header-ul">
        <li className="header-li">
          <a href="home" className="header-a">Home</a>
        </li>
        <li className="header-li">
          <a href="about" className="header-a">About</a>
        </li>
        <li className="header-li">
          <a href="#" onClick={scrollToProjects} className="header-a">Projects</a>
        </li>
        <li className="header-li">
          <a href="experience" className="header-a">Experience</a>
        </li>
        <li className="header-li">
          <a href="skills" className="header-a">Skills</a>
        </li>
        <li className="header-li">
          <a href="education" className="header-a">Education</a>
        </li>
        <li className="header-li">
          <a href="certifications" className="header-a">Certifications</a>
        </li>
      </ul>
    </div>
  );
}

export default Header
