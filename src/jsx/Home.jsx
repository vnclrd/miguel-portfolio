function scrollToAbout() {
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' })
}

function Home() {
  return (
    <div id="home" className='flex flex-col lg:flex-row lg:min-h-screen bg-[#0d1b2a]'>

      {/* Left Panel (70%) */}
      <div 
        className="
          flex items-center justify-center bg-[#0d1b2a] px-4
          w-full lg:w-[70%] min-h-screen
          "
        >
        <div
          className="
            w-full max-w-2xl flex flex-col  
            items-center text-center
            lg:items-start lg:text-left lg:ml-50
          "
        >
          <p className="text-[#00b4d8] ml-0.5 pb-5 text-sm sm:text-base">
            Hi, I am
          </p>

          <h1 className="text-[#00ffff] whitespace-nowrap text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-poppins pb-5">
            Miguel Ivan Calarde.
          </h1>

          <p className="text-[#e0e0e0] ml-0.5 leading-7 text-sm sm:text-base">
            I'm a developer specializing in{" "}
            <span className="text-[#00b4d8]">designing</span> and{" "}
            <span className="text-[#00b4d8]">building</span> systems that deliver
            convenience and value to the people who use them.
          </p>
          <li className="inline-block mt-8 ml-0.5 list-none">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                scrollToAbout()
              }}
              className="text-[#00b4d8] text-xs sm:text-sm border border-[#00b4d8] px-4 py-2 hover:bg-[#00b4d8] hover:text-[#0d1b2a] transition-colors"
            >
              Get started!
            </a>
          </li>
        </div>
      </div>

      {/* Right Panel (30%) */}
      <div 
        className="
          flex items-center justify-center px-4
          w-full lg:w-[30%] lg:min-h-screen
        "
      >
      </div>
    </div>
  )
}

export default Home
