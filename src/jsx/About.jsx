function scrollToWork() {
  document.getElementById('work').scrollIntoView({ behavior: 'smooth' })
}

function About() {
  return (
    <div id="about" className='lg:flex lg:items-center lg:justify-center bg-[#0d1b2a] min-h-screen'>
      
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

      {/* ============================== Desktop Layout ============================== */}
        {/* Content Container */}
        <div className='flex items-center justify-center w-[800px] h-[400px]'>
          
          {/* Left Side */}
          <div className='w-[50%] h-full'>

            {/* About Me */}
            <h1 className='text-[#e0e0e0] text-[1.5rem] mb-9 font-bold'>About Me</h1>

            {/* Description 1 */}
            <p className='text-[0.9rem] text-[#b0bec5] pb-5 leading-5'>
              Hi, I'm Miguel. I got into tech because I love to play video games as a kid.
              I had the chance to play "Minecraft" and enjoyed playing multiplayer through servers.
              That's when I explored on how to create my own server.
            </p>

            {/* Description 2 */}
            <p className='text-[0.9rem] text-[#b0bec5] pb-10'>
              Today, I am now a <span className='text-[#00b4d8] font-semibold'>Computer Engineering graduate</span> who specializes in system
              development. I've created projects that serve as solutions to real-world
              problems and <span className='text-[#00b4d8]'>I am excited to learn more and grow</span> as I explore opportunities
              and expand my skills in software development.
            </p>

            {/* Check out my work! Button */}
            <div>
              <a
                href="#" 
                onClick={(e) => { e.preventDefault(); scrollToWork() }}
                className="text-[#00b4d8] bg-transparent text-[0.75rem] pl-4 pr-4 pt-2.5 pb-2.5 border border-[#00b4d8] hover:bg-[#00b4d8] hover:text-white transition-colors duration-300"
              >
                Check out my work!
              </a>
            </div>
          </div>
        
          {/* Right Side */}
          <div className='flex flex-col items-center justify-center w-[50%]'>

            {/* Profile Image with Border */}
            <div className='flex w-[250px] h-[250px] bg-gray-800 mb-10'>

              {/* Profile Photo */}
              <img 
                src="/miguel-portfolio/images/profile-photo.jpg"
                alt="Miguel Ivan Calarde"
                className='w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300 z-1000'
              />

              {/* Border Effect */}
              <div className='absolute ml-5 mt-5 w-[250px] h-[250px] border-[2px] border-[#00b4d8]'></div>

            </div>

            {/* Education Info */}
            <div className='text-right'>
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