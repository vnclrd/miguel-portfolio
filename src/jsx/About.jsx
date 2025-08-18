function scrollToWork() {
  document.getElementById('work').scrollIntoView({ behavior: 'smooth' })
}

function About() {
  return (
    <div id="about" className='bg-[#0d1b2a] min-h-screen'>
      
      {/* Mobile Layout */}
      <div className="block lg:hidden px-4 py-8">
        
        {/* Content Section */}
        <div className='max-w-md mx-auto'>
          <h1 className='text-[#e0e0e0] text-[1.5rem] mt-12 mb-6 font-bold text-center'>About Me</h1>

          <p className='text-[0.75rem] text-[#b0bec5] pb-4 leading-5'>
            Hi, I'm Miguel. I got into tech because I love to play video games as a kid.
            I had the chance to play "Minecraft" and enjoyed playing multiplayer through servers.
            That's when I explored on how to create my own server.
          </p>

          <p className='text-[0.75rem] text-[#b0bec5] pb-6'>
            Today, I am now a <span className='text-[#00b4d8] font-semibold'>Computer Engineering graduate</span> who specializes in system
            development. I've created projects that serve as solutions to real-world
            problems and <span className='text-[#00b4d8]'>I am excited to learn more and grow</span> as I explore opportunities
            and expand my skills in software development.
          </p>
        </div>

        {/* Image Section */}
        <div className='flex flex-col items-center mb-6'>
          <div className='relative'>
            <div className='w-[200px] h-[200px] bg-gray-800'>
              <img 
                src="/miguel-portfolio/images/profile-photo.jpg"
                alt="Miguel Ivan Calarde"
                className='w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300'
              />
            </div>
            <div className='absolute inset-0 w-[200px] h-[200px] border-[2px] border-[#00b4d8] translate-x-2 translate-y-2 -z-10'></div>
          </div>
        </div>

        {/* Education Info */}
        <div className='text-center mb-6'>
          <p className='text-[0.8rem] text-[#b0bec5] italic'>Polytechnic University of the Philippines</p>
          <p className='text-[0.8rem] text-[#b0bec5] italic'>BS Computer Engineering</p>
          <p className='text-[0.8rem] text-[#b0bec5] italic'>Batch 2025</p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <a
            href="#" 
            onClick={(e) => { e.preventDefault(); scrollToWork() }}
            className="text-[#00b4d8] bg-transparent text-[0.75rem] px-4 py-2.5 border border-[#00b4d8] hover:bg-[#00b4d8] hover:text-white transition-colors duration-300"
          >
            Check out my work!
          </a>
        </div>

      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex lg:flex-row lg:min-h-screen">
        
        {/* Left Panel (70%) */}
        <div className="flex items-center bg-[#0d1b2a] px-4 w-[70%] min-h-screen">
          
          <div className='w-[400px] h-[400px] ml-55'>
            <h1 className='text-[#e0e0e0] text-[1.5rem] mb-9 font-bold'>About Me</h1>

            <p className='text-[0.9rem] text-[#b0bec5] pb-5 leading-5'>
              Hi, I'm Miguel. I got into tech because I love to play video games as a kid.
              I had the chance to play "Minecraft" and enjoyed playing multiplayer through servers.
              That's when I explored on how to create my own server.
            </p>

            <p className='text-[0.9rem] text-[#b0bec5] pb-10'>
              Today, I am now a <span className='text-[#00b4d8] font-semibold'>Computer Engineering graduate</span> who specializes in system
              development. I've created projects that serve as solutions to real-world
              problems and <span className='text-[#00b4d8]'>I am excited to learn more and grow</span> as I explore opportunities
              and expand my skills in software development.
            </p>

            <div className="mt-5">
              <a
                href="#" 
                onClick={(e) => { e.preventDefault(); scrollToWork() }}
                className="text-[#00b4d8] bg-transparent text-[0.75rem] pl-4 pr-4 pt-2.5 pb-2.5 border border-[#00b4d8] hover:bg-[#00b4d8] hover:text-white transition-colors duration-300"
              >
                Check out my work!
              </a>
            </div>
          </div>

          {/* Profile Image with Border */}
          <div className='absolute w-[250px] h-[250px] bg-gray-800 z-10 ml-175'>
            <img 
              src="/miguel-portfolio/images/profile-photo.jpg"
              alt="Miguel Ivan Calarde"
              className='w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300'
            />
          </div>

          {/* Border Effect */}
          <div className='absolute w-[250px] h-[250px] border-[2px] border-[#00b4d8] mt-10 ml-180'></div>

          {/* Education Info */}
          <div className='absolute text-right mt-100 ml-180'>
            <p className='text-[0.8rem] text-[#b0bec5] italic'>Polytechnic University of the Philippines</p>
            <p className='text-[0.8rem] text-[#b0bec5] italic'>BS Computer Engineering</p>
            <p className='text-[0.8rem] text-[#b0bec5] italic'>Batch 2025</p>
          </div>

        </div>
        
        {/* Right Panel (30%) */}
        <div className="flex items-center justify-center px-4 w-[30%] min-h-screen"></div>

      </div>
      
    </div>
  );
}

export default About;