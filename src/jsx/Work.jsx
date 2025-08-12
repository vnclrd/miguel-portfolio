function Work() {
  return(
    <div id="work" className='flex h-[100vh] bg-[#0d1b2a]'>

        <div className='flex items-center gap-10'>

          <div className='absolute w-[400px] h-[400px] mb-40 ml-50'>
            <h1 className='text-[#e0e0e0] text-[1.5rem] font-bold'>What I've worked on</h1>
          </div>
          
          <div className='w-[400px] h-[250px] mb-50 ml-50 bg-[#b0bec5] z-1000'>
            <img 
              src="/miguel-portfolio/images/trainin-aas.jpg"
              alt="TrainIn"
              className='w-full h-full object-cover'
            />
          </div>
          <div className='absolute w-[375px] h-[250px] mb-40 ml-45 bg-none border-[2px] border-[#fff]'></div>

          <h1 className='absolute mb-107 ml-160 text-[#e0e0e0] text-[1.25rem] font-semibold'>TrainIn</h1>
          <h1 className='absolute mb-96 ml-160 text-gray-400 text-[0.75rem]'>Automated Attendance System</h1>

          <div className='absolute w-[400px] h-[120px] bg-[#000e1e] text-justify ml-145 mb-60 p-3.5 z-1000'>
            <p className='flex text-[#e0e0e0] text-[0.750rem]'>
              TrainIn is an automated attendance system designed to record and track the attendance
              of individuals at organized events. It uses NFC cards along with an external reader
              device to provide a seamless and efficient check-in and check-out process.
            </p>
          </div>

          <a href="https://github.com/vnclrd/trainin-aas" target="_blank" rel="noopener noreferrer" className='absolute w-[25px] mb-102 ml-235'>
            <img src="/miguel-portfolio/images/logos/github.png" alt="GitHub" />
          </a>

          <div className='absolute text-gray-500 text-[0.60rem] ml-160 mb-22 gap-10'>
            <div className='flex gap-4'>
              <p>React Native</p>
              <p>JavaScript</p>
              <p>TypeScript</p>
              <p>Tailwind CSS</p>
              <p>SQLite</p>
            </div>
          </div>

          <h1 className='absolute mt-37 ml-125 text-[#e0e0e0] text-[1.25rem] font-semibold'>InstaPrint</h1>
          <h1 className='absolute mt-48 ml-111 text-gray-400 text-[0.75rem]'>Self-Service Printing Kiosk</h1>

          <div className='w-[400px] h-[250px] mt-60 bg-[#b0bec5] z-1000'>
            <img 
              src="/miguel-portfolio/images/instaprint.jpg"
              alt="TrainIn"
              className='w-full h-full object-cover'
            />
          </div>

          <a href="https://github.com/katrina110/instaprint-flask-" target="_blank" rel="noopener noreferrer" className='absolute w-[25px] mt-42 ml-68.5'>
            <img src="/miguel-portfolio/images/logos/github.png" alt="GitHub" />
          </a>

          <div className='absolute w-[375px] h-[250px] mt-70 ml-171 bg-none border-[2px] border-[#90494d]'></div>
          <div className='absolute w-[400px] h-[120px] bg-[#000e1e] text-justify ml-65 mt-85 p-3.5 z-1000'>
            <p className='flex text-[#e0e0e0] text-[0.75rem]'>
              Developed a full-stack printing kiosk that calculates document pricing
              based on page count, color, and paper size. Utilized Python + Flask for
              back-end and utilized WebSocket-based payment tracking as well as cashless
              payment with GCash with integration with PayMongo.
            </p>
          </div>

          <div className='absolute text-gray-500 text-[0.60rem] ml-68.5 mt-123 gap-10'>
            <div className='flex gap-4'>
              <p>Python</p>
              <p>JavaScript</p>
              <p>HTML</p>
              <p>CSS</p>
              <p>Bootstrap</p>
              <p>MySQL</p>
            </div>
          </div>

        </div>
        
    </div>
  )
}

export default Work