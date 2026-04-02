function scrollToWork() {
  document.getElementById('work').scrollIntoView({ behavior: 'smooth' })
}

function About() {
  return (
    <div id="about" className='flex items-center justify-center bg-[#0d1b2a] min-h-screen px-4 py-8 lg:p-0'>
      
      {/* Main Container: Stacked on mobile, Side-by-side on desktop */}
      <div className='flex flex-col lg:flex-row items-center justify-center max-w-md lg:max-w-[800px] lg:h-[400px] gap-8 lg:gap-0'>
        
        {/* Left Side (Content) */}
        <div className='w-full lg:w-[50%] flex flex-col'>
          <h1 className='text-[#e0e0e0] text-[1.5rem] font-bold text-center lg:text-left mb-6 lg:mb-9'>
            About Me
          </h1>

          <p className='text-[0.75rem] lg:text-[0.9rem] text-[#b0bec5] leading-5 pb-4 lg:pb-5 text-center lg:text-left'>
            Hi, I'm Miguel. I got into tech because I love to play video games as a kid. 
            I enjoyed playing multiplayer games and eventually wondered how it works.
            That's when I explored on how to create my own server.
          </p>

          <p className='text-[0.75rem] lg:text-[0.9rem] text-[#b0bec5] leading-5 pb-6 lg:pb-10 text-center lg:text-left'>
            Today, I am now a <span className='text-[#00b4d8] font-semibold'>Computer Engineering graduate</span> who specializes in system 
            development. I've created projects that serve as solutions to real-world 
            problems and <span className='text-[#00b4d8]'>I am excited to learn more and grow</span> as I explore opportunities 
            and expand my skills in software development.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center lg:justify-start">
            <a
              href="#" 
              onClick={(e) => { e.preventDefault(); scrollToWork() }}
              className="text-[#00b4d8] bg-transparent text-[0.75rem] px-4 py-2.5 border border-[#00b4d8] hover:bg-[#00b4d8] hover:text-white transition-colors duration-300"
            >
              Check out my work!
            </a>
          </div>
        </div>

        {/* Right Side (Image & Education) */}
        <div className='w-full lg:w-[50%] flex flex-col items-center lg:items-end justify-center'>
          
          {/* Image Container with Border Effect */}
          <div className='relative mb-6 lg:mb-10'>
            <div className='w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] bg-gray-800 relative z-10'>
              <img 
                src="/miguel-portfolio/images/profile-photo.jpg"
                alt="Miguel Ivan Calarde"
                className='w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300'
              />
            </div>
            {/* The Border Box */}
            <div className='absolute top-2 left-2 lg:top-5 lg:left-5 w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] border-[2px] border-[#00b4d8] z-0'></div>
          </div>

          {/* Education Info */}
          <div className='text-center lg:text-right'>
            <p className='text-[0.8rem] text-[#b0bec5] italic'>Polytechnic University of the Philippines</p>
            <p className='text-[0.8rem] text-[#b0bec5] italic'>BS Computer Engineering</p>
            <p className='text-[0.8rem] text-[#b0bec5] italic'>Batch 2025</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About;