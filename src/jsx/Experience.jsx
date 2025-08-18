function Experience() {
  return(
    <div id="experience" className='bg-[#0d1b2a] min-h-screen'>

      {/* Mobile Layout */}
      <div className="block lg:hidden px-4 py-8">
        
        {/* Section Title */}
        <h1 className='text-[#e0e0e0] text-[1.5rem] font-bold mb-8 text-center'>
          Where I've Worked
        </h1>

        {/* Project 1 - TrainIn */}
        <div className="mb-12">
          
          {/* Project Image */}
          <div className='relative mb-4'>
            <div className='w-full max-w-sm mx-auto h-[200px] bg-[#b0bec5]'>
              <img 
                src="/miguel-portfolio/images/trainin-aas.jpg"
                alt="TrainIn"
                className='w-full h-full object-cover'
              />
            </div>
            <div className='absolute inset-0 w-full max-w-sm mx-auto h-[200px] border-[2px] border-[#fff]'></div>
          </div>

          {/* Project Info */}
          <div className='text-center mb-4'>
            <div className='flex items-center justify-center gap-2 mb-2'>
              <h2 className='text-[#e0e0e0] text-[1.25rem] font-semibold'>TrainIn</h2>
              <a href="https://github.com/vnclrd/trainin-aas" target="_blank" rel="noopener noreferrer" className='w-[20px] h-[20px]'>
                <img src="/miguel-portfolio/images/logos/github.png" alt="GitHub" />
              </a>
            </div>
            <p className='text-gray-400 text-[0.75rem] mb-4'>Automated Attendance System</p>
          </div>

          {/* Project Description */}
          <div className='bg-[#000e1e] p-4 mb-4 rounded'>
            <p className='text-[#e0e0e0] text-[0.75rem] text-center'>
              TrainIn is an automated attendance system designed to <span className='text-[#00b4d8] font-semibold'>record and track attendance</span> before and after a session.
              It uses NFC chips along with an external reader device to provide a seamless and efficient check-in and check-out process.
            </p>
          </div>

          {/* Technologies */}
          <div className='text-center'>
            <div className='flex flex-wrap justify-center gap-2 text-gray-500 text-[0.60rem]'>
              <span>React Native</span>
              <span>•</span>
              <span>JavaScript</span>
              <span>•</span>
              <span>TypeScript</span>
              <span>•</span>
              <span>Tailwind CSS</span>
              <span>•</span>
              <span>SQLite</span>
            </div>
          </div>
        </div>

        {/* Project 2 - InstaPrint */}
        <div className="mb-12">
          
          {/* Project Image */}
          <div className='relative mb-4'>
            <div className='w-full max-w-sm mx-auto h-[200px] bg-[#b0bec5]'>
              <img 
                src="/miguel-portfolio/images/instaprint.jpg"
                alt="InstaPrint"
                className='w-full h-full object-cover'
              />
            </div>
            <div className='absolute inset-0 w-full max-w-sm mx-auto h-[200px] border-[2px] border-[#90494d]'></div>
          </div>

          {/* Project Info */}
          <div className='text-center mb-4'>
            <div className='flex items-center justify-center gap-2 mb-2'>
              <h2 className='text-[#e0e0e0] text-[1.25rem] font-semibold'>InstaPrint</h2>
              <a href="https://github.com/katrina110/instaprint-flask-" target="_blank" rel="noopener noreferrer" className='w-[20px] h-[20px]'>
                <img src="/miguel-portfolio/images/logos/github.png" alt="GitHub" />
              </a>
            </div>
            <p className='text-gray-400 text-[0.75rem] mb-4'>Self-Service Printing Kiosk</p>
          </div>

          {/* Project Description */}
          <div className='bg-[#000e1e] p-4 mb-4 rounded'>
            <p className='text-[#e0e0e0] text-[0.75rem] text-center'>
              Developed a full-stack printing kiosk that calculates document pricing
              based on page count, color, and paper size. Utilized <span className='text-[#00b4d8] font-semibold'>Python + Flask</span> and <span className='text-[#00b4d8] font-semibold'>WebSocket-based</span> payment
              tracking as well as cashless payments with <span className='text-[#00b4d8] font-semibold'>GCash</span> with integration with <span className='text-[#00b4d8] font-semibold'>PayMongo</span>.
            </p>
          </div>

          {/* Technologies */}
          <div className='text-center'>
            <div className='flex flex-wrap justify-center gap-2 text-gray-500 text-[0.60rem]'>
              <span>Python</span>
              <span>•</span>
              <span>JavaScript</span>
              <span>•</span>
              <span>HTML</span>
              <span>•</span>
              <span>CSS</span>
              <span>•</span>
              <span>Bootstrap</span>
              <span>•</span>
              <span>MySQL</span>
            </div>
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