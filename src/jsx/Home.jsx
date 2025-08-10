function Home() {
  return (
    <div id="home" className='flex h-[100vh] items-center justify-center bg-[#0d1b2a]'>   

      <div className='w-[600px] flex flex-col items-left justify-center'>

        <p className='text-[#00b4d8] pb-3'>Hi, my name is</p>

        <h1 className='text-[#00b4d8] text-[3.5rem] font-bold font-poppins ml-[-3px] pb-2'>Miguel Ivan Calarde.</h1>

        <p className='text-[#e0e0e0] leading-7'>
          I'm a developer specializing in designing and building systems
          <br />
          that deliver convenience and value to the people who use them.
        </p>

        <button className='border w-30 h-10 mt-5 text-[#e0e0e0]'>Get Started!</button>

      </div>

    </div>
  )
}
export default Home
