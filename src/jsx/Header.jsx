import { useEffect, useState } from 'react'
import webIcon from "/images/web-icon.png";

<img src={webIcon} alt="Home" className="w-8 h-8" />


function Header() {   
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function scrollToAbout() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' })
  }

  function scrollToWork() {
    document.getElementById('work').scrollIntoView({ behavior: 'smooth' })
  }

  function scrollToHome() {
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' })
  }

  function scrollToExperience() {
    document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })
  }

  function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div
      className={`
        flex flex-row flex-nowrap items-center
        h-15 w-[100%] fixed z-1000
        justify-center bg-[#0d1b2a] lg:bg-amber-500
        transform-none shadow-none
      `}
    >
      
      <ul className='flex flex-row flex-nowrap items-center space-x-2 text-[0.75rem]'>

        {/* About Link 
        <li className='inline-block'>
          <a href='about' onClick={(e) => { e.preventDefault(); scrollToAbout() }}
            className='
              no-underline text-[#e0e0e0] m-5 bg-transparent opacity-75
              hover:opacity-100 transition-opacity duration-300
              '
            >
              About
          </a>
        </li>
        */}

        {/* Work Link
        <li className='inline-block'>
          <a href='#' onClick={(e) => { e.preventDefault(); scrollToWork() }}
            className='
              no-underline text-[#e0e0e0] m-5 bg-transparent opacity-75
              hover:opacity-100 transition-opacity duration-300
              '
            >
              Work
          </a>
        </li>
        */}

        {/* Home Link */}
        <li className='inline-block'>
          <a href='#' onClick={(e) => { e.preventDefault(); scrollToHome() }}
            className='
              no-underline text-[#e0e0e0] m-5 bg-transparent opacity-75
              hover:opacity-100 transition-opacity duration-300
              '
            >
              <img src={webIcon} alt="Web Icon" className='w-10 h-10 ' />
          </a>
        </li>

        {/* Experience Link
        <li className='inline-block'>
          <a href='#' onClick={(e) => { e.preventDefault(); scrollToExperience() }}
            className='
              no-underline text-[#e0e0e0] m-5 bg-transparent opacity-75
              hover:opacity-100 transition-opacity duration-300
              '
            >
              Experience
          </a>
        </li>
        */}
        
        {/* Contact Link
        <li className='inline-block'>
          <a href='#' onClick={(e) => { e.preventDefault(); scrollToContact() }}
            className='
              no-underline text-[#e0e0e0] m-5 bg-transparent opacity-75
              hover:opacity-100 transition-opacity duration-300
              '
            >
              Contact
          </a>
        </li>
        */}
      </ul>

      <div className='w-full h-15 bg-amber-50'>

      </div>

    </div>
  );
}

export default Header
