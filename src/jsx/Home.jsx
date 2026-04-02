function Home() {
  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id='home' className='flex items-center justify-center bg-[#0d1b2a] min-h-screen w-full px-6 mt-8'>
      {/* Reduced max-width slightly for better line-length on laptops */}
      <div className='w-full max-w-3xl flex flex-col items-center text-center'>
        
        <p className='text-[#00b4d8] text-xl md:text-2xl font-medium tracking-wide mb-1'>
          Hi, I am
        </p>
        
        {/* Adjusted Font Scaling: 3xl(mobile) -> 5xl(tablet) -> 6xl(laptop) -> 7xl(large desktop) */}
        <h1 className='text-[#00ffff] text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-7xl font-bold pb-4 md:pb-4 leading-tight'>
          Miguel Ivan Calarde
        </h1>

        {/* Balanced the max-width and font size for better readability */}
        <p className='text-[#e0e0e0] leading-relaxed text-sm md:text-sm lg:text-sm max-w-xl'>
          I'm a developer passionate about <span className='text-[#00b4d8]'>creating web apps</span> that
          go beyond functionality and provide meaningful solutions that make a positive impact. 
        </p>

        {/* Responsive button padding and margin */}
        <button
          onClick={scrollToAbout}
          className='mt-8 md:mt-6 text-[#00b4d8] text-xs md:text-sm border border-[#00b4d8] px-6 py-2.5 md:px-4 md:py-2 hover:bg-[#00b4d8] hover:text-[#0d1b2a] transition-all cursor-pointer'
        >
          Get started!
        </button>
        
      </div>
    </section>
  )
}
export default Home;