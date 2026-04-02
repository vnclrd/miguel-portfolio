import { FaGithub } from 'react-icons/fa';

function Work() {
  function scrollToExperience() {
    document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div 
      id='work' 
      className='flex flex-col items-center justify-center bg-[#0d1b2a] min-h-screen w-full px-4 py-12 lg:py-24'
    >
      {/* Section Title */}
      <h1 className='text-[#e0e0e0] text-[1.5rem] font-bold lg:mb-8 text-center'>
        Featured Projects
      </h1>

      {/* Projects Container: Vertical on mobile, Wrapping Row on desktop */}
      <div className='flex flex-col lg:flex-row lg:flex-wrap justify-center items-center lg:items-start w-full max-w-[1400px] gap-16 lg:gap-12 xl:gap-20'>
        
        {/* ============================== Project 1: Ala ============================== */}
        <div className='flex flex-col items-center w-full max-w-sm lg:w-[300px] xl:w-[450px] relative'>
          
          {/* Header: Info & Github */}
          <div className='flex w-full mb-2 text-left px-2 lg:px-0'>
            <div className='w-[70%]'>
              <h2 className='text-[#e0e0e0] text-[1.25rem] font-semibold'>Ala</h2>
              <p className='text-gray-400 text-[0.75rem]'>Photo Compilation App</p>
            </div>
            <div className='flex items-center justify-end w-[30%]'>
              <a href='https://github.com/vnclrd/ulat-ph' target='_blank' rel='noopener noreferrer'>
                <FaGithub className='text-white w-6 h-6 lg:w-8 lg:h-8 opacity-50 hover:opacity-100 transition-opacity' />
              </a>
            </div>
          </div>

          {/* Image Container */}
          <div className='relative w-full h-[200px] lg:h-[150px]'>
            <img src='/miguel-portfolio/images/ulat-ph.png' alt='Ulat PH' className='w-full h-full object-cover' />
            {/* Mobile-only Border */}
            <div className='absolute inset-0 border-[2px] border-[#fff] lg:hidden'></div>
          </div>

          {/* Technologies */}
          <div className='flex flex-wrap justify-center gap-1 mt-2 lg:mt-2 text-gray-500 text-[0.60rem]'>
            <span>Python</span><span>•</span><span>React</span><span>•</span><span>JavaScript</span><span>•</span><span>Tailwind CSS</span><span>•</span><span>PostgreSQL</span>
          </div>

          {/* Description Box: Relative on mobile, Absolute overlap on desktop */}
          <div className='bg-[#000e1e] p-2 lg:w-[300px] mt-2 lg:mt-2'>
            <p className='text-[#e0e0e0] text-[0.6rem] text-center lg:text-justify'>
              Ala is a web app that lets event organizers and guests capture and share photos in one place, <span className='text-[#00b4d8] font-semibold'>creating a collective memory wall</span> that everyone can relive together.
            </p>
          </div>
        </div>

        {/* ============================== Project 2: Ulat PH ============================== */}
        <div className='flex flex-col items-center w-full max-w-sm lg:w-[300px] xl:w-[450px] relative'>
          
          {/* Header: Info & Github */}
          <div className='flex w-full mb-2 text-left px-2 lg:px-0'>
            <div className='w-[70%]'>
              <h2 className='text-[#e0e0e0] text-[1.25rem] font-semibold'>Ulat PH</h2>
              <p className='text-gray-400 text-[0.75rem]'>Reporting Web App</p>
            </div>
            <div className='flex items-center justify-end w-[30%]'>
              <a href='https://github.com/vnclrd/ulat-ph' target='_blank' rel='noopener noreferrer'>
                <FaGithub className='text-white w-6 h-6 lg:w-8 lg:h-8 opacity-50 hover:opacity-100 transition-opacity' />
              </a>
            </div>
          </div>

          {/* Image Container */}
          <div className='relative w-full h-[200px] lg:h-[150px]'>
            <img src='/miguel-portfolio/images/ulat-ph.png' alt='Ulat PH' className='w-full h-full object-cover' />
            {/* Mobile-only Border */}
            <div className='absolute inset-0 border-[2px] border-[#fff] lg:hidden'></div>
          </div>

          {/* Technologies */}
          <div className='flex flex-wrap justify-center gap-1 mt-2 lg:mt-2 text-gray-500 text-[0.60rem]'>
            <span>Python</span><span>•</span><span>React</span><span>•</span><span>JavaScript</span><span>•</span><span>Tailwind CSS</span><span>•</span><span>PostgreSQL</span>
          </div>

          {/* Description Box: Relative on mobile, Absolute overlap on desktop */}
          <div className='bg-[#000e1e] p-2 lg:w-[300px] mt-2 lg:mt-2'>
            <p className='text-[#e0e0e0] text-[0.6rem] text-center lg:text-justify'>
              Ulat PH is a community-driven reporting web app that enables civilians to <span className='text-[#00b4d8] font-semibold'>crowdsource and track</span> local issues like potholes and flooding.
            </p>
          </div>
        </div>

        {/* ============================== Project 3: TrainIn ============================== */}
        <div className='flex flex-col items-center w-full max-w-sm lg:w-[300px] xl:w-[450px] relative'>
          
          {/* Header: Info & Github */}
          <div className='flex w-full mb-2 text-left px-2 lg:px-0'>
            <div className='w-[70%]'>
              <h2 className='text-[#e0e0e0] text-[1.25rem] font-semibold'>TrainIn</h2>
              <p className='text-gray-400 text-[0.75rem]'>Automated Attendance System</p>
            </div>
            <div className='flex items-center justify-end w-[30%]'>
              <a href='https://github.com/vnclrd/trainin-aas' target='_blank' rel='noopener noreferrer'>
                <FaGithub className='text-white w-6 h-6 lg:w-8 lg:h-8 opacity-50 hover:opacity-100 transition-opacity' />
              </a>
            </div>
          </div>

          {/* Image Container */}
          <div className='relative w-full h-[200px] lg:h-[150px]'>
            <img src='/miguel-portfolio/images/trainin-aas.jpg' alt='TrainIn' className='w-full h-full object-cover' />
            {/* Mobile-only Border */}
            <div className='absolute inset-0 border-[2px] border-[#fff] lg:hidden'></div>
          </div>

          {/* Technologies */}
          <div className='flex flex-wrap justify-center gap-1 mt-2 lg:mt-2 text-gray-500 text-[0.60rem]'>
            <span>React Native</span><span>•</span><span>JavaScript</span><span>•</span><span>TypeScript</span><span>•</span><span>Tailwind CSS</span><span>•</span><span>SQLite</span>
          </div>

          {/* Description Box: Relative on mobile, Absolute overlap on desktop */}
          <div className='bg-[#000e1e] p-2 lg:w-[300px] mt-2 lg:mt-2'>
            <p className='text-[#e0e0e0] text-[0.6rem] text-center lg:text-justify'>
              TrainIn is an automated attendance system designed to <span className='text-[#00b4d8] font-semibold'>record and track attendance</span> before and after a session. It uses NFC chips for a seamless process.
            </p>
          </div>
        </div>

        

        {/* ============================== Project 4: InstaPrint ============================== */}
        <div className='flex flex-col items-center w-full max-w-sm lg:w-[400px] xl:w-[450px] lg:mt-8 relative'>
          
          <div className='flex w-full mb-4 text-left px-2 lg:px-0'>
            <div className='w-[70%]'>
              <h2 className='text-[#e0e0e0] text-[1.25rem] font-semibold'>InstaPrint</h2>
              <p className='text-gray-400 text-[0.75rem]'>Self-service Printing Kiosk</p>
            </div>
            <div className='flex items-center justify-end w-[30%]'>
              <a href='https://github.com/katrina110/instaprint-flask-' target='_blank' rel='noopener noreferrer'>
                <FaGithub className='text-white w-6 h-6 lg:w-8 lg:h-8 opacity-50 hover:opacity-100 transition-opacity' />
              </a>
            </div>
          </div>

          <div className='relative w-full h-[200px] lg:h-[250px]'>
            <img src='/miguel-portfolio/images/instaprint.jpg' alt='InstaPrint' className='w-full h-full object-cover' />
            {/* Mobile-only Border */}
            <div className='absolute inset-0 border-[2px] border-[#90494d] lg:hidden'></div>
          </div>

          <div className='w-full lg:absolute lg:top-[220px] lg:left-1/2 lg:-translate-x-1/2 bg-[#000e1e] p-4 z-20 shadow-xl lg:w-[350px] mt-4 lg:mt-0'>
            <p className='text-[#e0e0e0] text-[0.7rem] lg:text-[0.75rem] text-center lg:text-justify'>
              Developed a full-stack printing kiosk utilizing <span className='text-[#00b4d8] font-semibold'>Python + Flask</span> and WebSocket-based payment tracking with PayMongo integration.
            </p>
          </div>

          <div className='flex flex-wrap justify-center gap-3 lg:gap-4 mt-6 lg:mt-32 text-gray-500 text-[0.60rem]'>
            <span>Python</span><span>•</span><span>JavaScript</span><span>•</span><span>HTML</span><span>•</span><span>CSS</span><span>•</span><span>Bootstrap</span><span>•</span><span>MySQL</span>
          </div>
        </div>

      </div>

      {/* Navigation Button */}
      <div className='mt-20 lg:mt-32'>
        <a
          href='#' 
          onClick={(e) => { e.preventDefault(); scrollToExperience() }}
          className='text-[#00b4d8] bg-transparent text-[0.75rem] px-8 py-2.5 border border-[#00b4d8] hover:bg-[#00b4d8] hover:text-white transition-colors duration-300'
        >
          Know my experiences
        </a>
      </div>
    </div>
  )
}

export default Work;