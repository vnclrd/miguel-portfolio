function Home() {
  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id='home' className='flex items-center justify-center bg-[#0d1b2a] min-h-screen w-full px-4'>
      <div className='w-full max-w-4xl flex flex-col items-center text-center'>
        <p className='text-[#00b4d8] pb-4 text-sm sm:text-base'>Hi, I am</p>
        
        <h1 className='text-[#00ffff] text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold pb-6'>
          Miguel Ivan Calarde
        </h1>

        <p className='text-[#e0e0e0] leading-relaxed text-sm sm:text-lg max-w-2xl'>
          I'm a developer passionate about <span className='text-[#00b4d8]'>creating apps</span> that
          go beyond functionality and provide meaningful solutions that make a positive impact. 
        </p>

        <button
          onClick={scrollToAbout}
          className='mt-10 text-[#00b4d8] text-sm sm:text-base border border-[#00b4d8] px-8 py-3 hover:bg-[#00b4d8] hover:text-[#0d1b2a] transition-all'
        >
          Get started!
        </button>
      </div>
    </section>
  )
}
export default Home;