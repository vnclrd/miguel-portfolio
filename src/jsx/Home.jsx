function scrollToAbout() {
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' })
}

function Home() {
  return (
    <div id='home' className='flex flex-col lg:flex-row lg:min-h-screen bg-[#0d1b2a]'>

      {/* Page Background */}
      <div 
        className='
          flex items-center justify-center bg-[#0d1b2a]
          w-full min-h-screen
          '
        >

        {/* Hero Container */}
        <div className='w-full max-w-2xl flex flex-col items-center text-center'>

          <p className='text-[#00b4d8] ml-0.5 pb-5 text-sm sm:text-base'>
            Hi, I am
          </p>

          {/* Miguel Ivan Calarde */}
          <h1 className='text-[#00ffff] whitespace-nowrap text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-poppins pb-5'>
            Miguel Ivan Calarde
          </h1>

          {/* Description */}
          <p className='text-[#e0e0e0] ml-0.5 leading-7 text-sm sm:text-base'>
            I'm a developer passionate about {' '}
            <span className='text-[#00b4d8]'>creating apps</span> that
            go beyond functionality and provide meaningful solutions
            that make a positive impact. 
          </p>

          {/* Button to About */}
          <li className='inline-block mt-8 ml-0.5 list-none'>

            {/* Link to About Section */}
            <a
              href='#'
              onClick={(e) => {
                e.preventDefault()
                scrollToAbout()
              }}
              className='text-[#00b4d8] text-xs sm:text-sm border border-[#00b4d8] px-4 py-2 hover:bg-[#00b4d8] hover:text-[#0d1b2a] transition-colors'
            >
              Get started!
            </a>
            
          </li>
          
        </div>
      </div>
    </div>
  )
}

export default Home
