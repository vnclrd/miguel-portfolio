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

  function scrollToAbout() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' })
  }

  function scrollToWork() {
    document.getElementById('work').scrollIntoView({ behavior: 'smooth' })
  }

  function scrollToExperience() {
    document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div 
        className={`
          flex justify-center items-center h-10 opacity-100 
          fixed top-[35px] left-[75%]
          z-[1000] border
          transition-[border-color,box-shadow] duration-500 ease-in-out
          ${scrolled 
            ? 'w-[22.5%] drop-shadow-[0_0_15px_rgba(0,0,0,0.25)] border-[#e0e0e0]' 
            : 'w-[22.5%] drop-shadow-[0_0_0_rgba(0,0,0,0.50)] border-transparent'
          }
        `}
      >
      <ul className="text-[0.75rem] bg-transparent">
        <li className="inline-block bg-transparent">
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToAbout() }} className="no-underline text-[#e0e0e0] m-5 bg-transparent">About</a>
        </li>
        <li className="inline-block bg-transparent">
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToWork() }} className="no-underline text-[#e0e0e0] m-5 bg-transparent">Work</a>
        </li>
        <li className="inline-block bg-transparent">
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToExperience() }} className="no-underline text-[#e0e0e0] m-5 bg-transparent">Experience</a>
        </li>
        <li className="inline-block bg-transparent">
          <a href="#" className="no-underline text-[#e0e0e0] m-5 bg-transparent">Skills</a>
        </li>
      </ul>
    </div>
  );
}

export default Header
