import { useEffect, useState } from 'react'

function Header() {   
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll)
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

  function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div
      className={`
        flex flex-row flex-nowrap items-center space-x-4
        h-15 w-[100%] fixed z-[1000]
        justify-center bg-[#0d1b2a]
        
        // For screen sizes below 1200px (minimized/smaller screens)
        left-1/2 -translate-x-1/2 transform

        min-[1400px]:w-[25%]
        min-[1400px]:h-[7.5%]
        min-[1400px]:left-[85%]
        min-[1400px]:transform-none
        min-[1400px]:shadow-none
        min-[1400px]:top-5
        min-[1400px]:bg-transparent
        
        ${scrolled 
          ? 'max-[1199px]:shadow-lg max-[1199px]:transition-shadow max-[1199px]:duration-500 max-[1199px]:ease-in-out min-[1200px]:border-[#e0e0e0]' 
          : 'min-[1200px]:border-transparent'
        }
      `}
    >
      <ul className="flex flex-row flex-nowrap items-center space-x-2 text-[0.75rem]">
        <li className="inline-block">
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToAbout() }} className="no-underline text-[#e0e0e0] m-5 bg-transparent">About</a>
        </li>
        <li className="inline-block">
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToWork() }} className="no-underline text-[#e0e0e0] m-5 bg-transparent">Work</a>
        </li>
        <li className="inline-block">
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToExperience() }} className="no-underline text-[#e0e0e0] m-5 bg-transparent">Experience</a>
        </li>
        <li className="inline-block">
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToContact() }} className="no-underline text-[#e0e0e0] m-5 bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Header
