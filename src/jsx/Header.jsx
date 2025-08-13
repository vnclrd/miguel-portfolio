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

  return (
    <div
      className={`
        flex flex-row flex-nowrap items-center space-x-4
        h-10 fixed top-[20px] z-[1000] shadow-lg
        justify-center

        md:w-[100%]
        
        // For screen sizes other than lg and md
        left-1/2 -translate-x-1/2 transform

        md:left-1/2
        md:-translate-x-1/2
        md:transform

        lg:w-[25%]
        lg:left-[85%]
        lg:transform-none
        lg:border transition-[border-color,box-shadow] duration-500 ease-in-out
        lg:shadow-none
        
        ${scrolled 
          ? 'lg:border-[#e0e0e0] ' 
          : 'border-transparent'
        }
      `}
    >
      <ul className="flex flex-row flex-nowrap items-center space-x-2 bg-transparent text-[0.75rem]">
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
          <a href="#" className="no-underline text-[#e0e0e0] m-5 bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Header
