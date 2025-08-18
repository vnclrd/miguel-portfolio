function Experience() {
  return(
    <div id="experience" className='bg-[#0d1b2a] min-h-screen'>

      {/* Mobile Layout */}
      <div className="block lg:hidden px-4 py-8">
        
        {/* Section Title */}
        <h1 className='text-[#e0e0e0] text-[1.5rem] font-bold mt-12 mb-8 text-center'>
          Where I've Worked
        </h1>

        {/* Experience 1 */}
        <div className="mb-6">
          {/* Project Image */}
          <div className='relative mb-4 w-full max-w-sm mx-auto h-[250px] bg-[#000e1e]'>
            <h1 className='text-[#e0e0e0] text-[1rem] font-semibold text-left ml-5 mt-5 pt-5'>Full Stack WordPress Developer Intern</h1>
              <p className='text-[#e0e0e0] text-[0.8rem] text-left ml-5 mt-0.5'>ROC.PH Digital Marketing Services</p>
              <p className='text-[#e0e0e0] text-[0.75rem] italic text-left ml-5 mt-0.5'>August 2024 - October 2024</p>
              <p className='text-[#e0e0e0] text-[0.8rem] text-left ml-5 mr-5 mt-5 pb-2.5'>
                Developed and optimized ROC.PH Digital Marketing Services' website on WordPress,
                translating CEO design recommendations into a high-quality, functional platform.
                Collaborated with other departments to integrate web solutions and
                ensure cohesive project execution.
              </p>
          </div>
        </div>

        {/* Experience 1 */}
        <div className="mb-12">
          {/* Project Image */}
          <div className='relative mb-4 w-full max-w-sm mx-auto h-[250px] bg-[#000e1e]'>
            <h1 className='text-[#e0e0e0] text-[1rem] font-semibold text-left ml-5 mt-5 pt-3'>Front-End Developer Intern</h1>
              <p className='text-[#e0e0e0] text-[0.8rem] text-left ml-5 mt-0.5'>LexMeet, Inc.</p>
              <p className='text-[#e0e0e0] text-[0.75rem] italic text-left ml-5 mt-0.5'>August 2023 - October 2023</p>
              <p className='text-[#e0e0e0] text-[0.8rem] text-left ml-5 mr-5 mt-5 pb-2.5'>
                Developed new features and determined the structure and design of web pages.
                Demonstrated strong problem-solving skills, decision-making, and logical thinking
                for simple problems. Exhibited initiative and perseverance and maintained a responsive
                work attitude, immediately completing assigned tasks.
              </p>
          </div>
        </div>

      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex lg:flex-row lg:min-h-screen">

        {/* Left Panel (70%) */}
        <div className="flex items-center bg-[#0d1b2a] w-[70%] min-h-screen relative -translate-y-[2.5%] -translate-x-[-2%]">
          
          <h1 className='absolute w-[400px] h-[400px] top-20 left-45 text-[#e0e0e0] text-[1.5rem] font-bold'>
            Where I've Worked
          </h1>

          <div className='grid grid-cols-2 gap-2 ml-45 mt-25'>

            {/* Experience 1 */}
            <div className='w-[400px] h-[250px] bg-[#000e1e] z-20'>
              <h1 className='text-[#e0e0e0] text-[1rem] font-semibold text-left ml-5 mt-5'>Full Stack WordPress Developer Intern</h1>
              <p className='text-[#e0e0e0] text-[0.8rem] text-left ml-5 mt-0.5'>ROC.PH Digital Marketing Services</p>
              <p className='text-[#e0e0e0] text-[0.75rem] italic text-left ml-5 mt-0.5'>August 2024 - October 2024</p>
              <p className='text-[#e0e0e0] text-[0.8rem] text-left ml-5 mr-5 mt-5'>
                Developed and optimized ROC.PH Digital Marketing Services' website on WordPress,
                translating CEO design recommendations into a high-quality, functional platform.
                Collaborated with other departments to integrate web solutions and
                ensure cohesive project execution.
              </p>
            </div>

            {/* Experience 2 */}
            <div className='w-[400px] h-[250px] bg-[#000e1e] z-20'>
              <h1 className='text-[#e0e0e0] text-[1rem] font-semibold text-left ml-5 mt-5'>Front-End Developer Intern</h1>
              <p className='text-[#e0e0e0] text-[0.8rem] text-left ml-5 mt-0.5'>LexMeet, Inc.</p>
              <p className='text-[#e0e0e0] text-[0.75rem] italic text-left ml-5 mt-0.5'>August 2023 - October 2023</p>
              <p className='text-[#e0e0e0] text-[0.8rem] text-left ml-5 mr-5 mt-5'>
                Developed new features and determined the structure and design of web pages.
                Demonstrated strong problem-solving skills, decision-making, and logical thinking
                for simple problems. Exhibited initiative and perseverance and maintained a responsive
                work attitude, immediately completing assigned tasks.
              </p>
            </div>

            {/* Experience 3 */}
            <div className='w-[400px] h-[250px] bg-[#09131f] z-20'></div>

            {/* Experience 4 */}
            <div className='w-[400px] h-[250px] bg-[#09131f] z-20'></div>

          </div>

        </div>

        {/* Right Panel (30%) */}
        <div className="flex items-center justify-center px-4 w-[30%] lg:min-h-screen">
        </div>

      </div>
    </div>
  )
}

export default Experience