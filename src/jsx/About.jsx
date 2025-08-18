function scrollToWork() {
  document.getElementById('work').scrollIntoView({ behavior: 'smooth' })
}

function About() {
  return (
    <div id="about" className='flex flex-col lg:flex-row lg:min-h-screen bg-[#0d1b2a]'>

      {/* Left Panel (70%) */}
      <div
        className="
          flex items-center justify-center bg-[#0d1b2a] px-4
          w-full lg:w-[70%] min-h-screen
          "
        >

        <div className='w-[400px] h-[400px] lg:ml-40'>

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

          <li className="inline-block bg-transparent mt-5">
            <a
              href="#" onClick={(e) => { e.preventDefault(); scrollToWork() }}
              className="text-[#00b4d8] bg-transparent text-[0.75rem] pl-4 pr-4 pt-2.5 pb-2.5 border"
            >
              Check out my work!
            </a>
          </li>
        
        </div>

        <div className='absolute w-[250px] h-[250px] bg-gray-800 mr-50 z-1000 lg:ml-190'>
          <img 
            src="/miguel-portfolio/images/profile-photo.jpg"
            alt="Miguel Ivan Calarde"
            className='w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300'
          />
        </div>

        <div className='absolute text-right lg:ml-150 lg:mt-100'>
          <p className='text-[0.8rem] text-[#b0bec5] italic'>Polytechnic University of the Philippines</p>
          <p className='text-[0.8rem] text-[#b0bec5] italic'>BS Computer Engineering</p>
          <p className='text-[0.8rem] text-[#b0bec5] italic'>Batch 2025</p>
        </div>

        <div className='absolute w-[250px] h-[250px] border-[2px] border-[#00b4d8] mt-10 ml-70 lg:ml-150'>

        </div>

        {/* Right Panel (30%) */}
        <div 
          className="
            flex items-center justify-center px-4
            w-full lg:w-[30%] lg:min-h-screen
          "
        ></div>

      </div>
      
    </div>
  );
}

export default About;
