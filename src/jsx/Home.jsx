function scrollToAbout() {
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' })
}

function Home() {
  return (
    <div id="home" className='flex h-[100vh] items-center justify-center bg-[#0d1b2a]'>   
      <div className='w-[600px] h-[300px] flex flex-col items-left justify-center mr-[25vh]'>
        <p className='text-[#00b4d8] pb-3'>Hi, my name is</p>
        <h1 className='text-[#00ffff] text-[3.5rem] font-bold font-poppins ml-[-3px] pb-2'>Miguel Ivan Calarde.</h1>
        <p className='text-[#e0e0e0] leading-7'>
          I'm a developer specializing in designing and building systems
          <br />
          that deliver convenience and value to the people who use them.
        </p>
        <li className="inline-block bg-transparent mt-10">
          <a
            href="#" onClick={(e) => { e.preventDefault(); scrollToAbout() }}
            className="text-[#00b4d8] bg-transparent text-[0.75rem] pl-4 pr-4 pt-2.5 pb-2.5 border"
          >
            Get Started!
          </a>
        </li>
      </div>
    </div>
  )
}

export default Home
