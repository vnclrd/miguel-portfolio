import { FaGithub } from 'react-icons/fa';

function Work() {
  function scrollToExperience() {
    document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div 
      id='work' 
      className='flex flex-col items-center justify-center bg-[#0d1b2a] min-h-screen w-full px-4 py-10 scroll-mt-12 lg:scroll-mt-0 lg:py-26'
    >
      {/* Section Title - Slightly smaller on mobile */}
      <h1 className='text-[#e0e0e0] text-[1.3rem] lg:text-[1.5rem] font-bold mb-8 lg:mb-12 text-center'>
        Featured Projects
      </h1>

      {/* Projects Container: Reduced gap on mobile (gap-10) for a compressed feel */}
      <div className='flex flex-col lg:flex-row lg:flex-wrap justify-center items-center lg:items-start w-full max-w-[1400px] gap-10 lg:gap-12 xl:gap-20'>
        
        {/* ============================== Featured Project 1: Ala ============================== */}
        <div className='flex flex-col items-center w-full max-w-[320px] sm:max-w-sm lg:w-[300px] xl:w-[450px] relative'>
          
          {/* Header: Compressed font sizes for mobile */}
          <div className='flex w-full mb-1.5 text-left px-1 lg:px-0'>
            <div className='w-[75%]'>
              <h2 className='text-[#e0e0e0] text-[1.1rem] lg:text-[1.25rem] font-semibold'>Ala</h2>
              <p className='text-gray-400 text-[0.65rem] lg:text-[0.75rem]'>Photo Compilation App</p>
            </div>
            <div className='flex items-center justify-end w-[25%]'>
              <a href='https://github.com/vnclrd/ulat-ph' target='_blank' rel='noopener noreferrer'>
                <FaGithub className='text-white w-5 h-5 lg:w-8 lg:h-8 opacity-50 hover:opacity-100 transition-opacity' />
              </a>
            </div>
          </div>

          {/* Image Container - Height reduced to 180px on mobile for sleeker look */}
          <div className='relative w-full h-[180px] lg:h-[150px]'>
            <img src='/miguel-portfolio/images/ulat-ph.png' alt='Ulat PH' className='w-full h-full object-cover' />
            <div className='absolute inset-0 border-[1px] border-white/20 lg:hidden'></div>
          </div>

          {/* Technologies - Tighter gap */}
          <div className='flex flex-wrap justify-center gap-1 mt-2 text-gray-500 text-[0.55rem] lg:text-[0.60rem]'>
            <span>TypeScript</span><span>•</span><span>React</span><span>•</span><span>JavaScript</span><span>•</span><span>Tailwind CSS</span><span>•</span><span>PostgreSQL</span>
          </div>

          {/* Description Box - Compressed padding and width */}
          <div className='bg-[#000e1e] p-3 w-full lg:w-[300px] mt-2 border-l border-[#00b4d8] lg:border-none'>
            <p className='text-[#e0e0e0] text-[0.65rem] text-center lg:text-justify leading-relaxed'>
              Ala is a web app that lets event organizers and guests share photos in one place, creating a <span className='text-[#00b4d8] font-semibold'>collective memory wall</span>.
            </p>
          </div>
        </div>

        {/* ============================== Featured Project 2: Ulat PH ============================== */}
        <div className='flex flex-col items-center w-full max-w-[320px] sm:max-w-sm lg:w-[300px] xl:w-[450px] relative'>
          
          <div className='flex w-full mb-1.5 text-left px-1 lg:px-0'>
            <div className='w-[75%]'>
              <h2 className='text-[#e0e0e0] text-[1.1rem] lg:text-[1.25rem] font-semibold'>Ulat PH</h2>
              <p className='text-gray-400 text-[0.65rem] lg:text-[0.75rem]'>Reporting Web App</p>
            </div>
            <div className='flex items-center justify-end w-[25%]'>
              <a href='https://github.com/vnclrd/ulat-ph' target='_blank' rel='noopener noreferrer'>
                <FaGithub className='text-white w-5 h-5 lg:w-8 lg:h-8 opacity-50 hover:opacity-100 transition-opacity' />
              </a>
            </div>
          </div>

          <div className='relative w-full h-[180px] lg:h-[150px]'>
            <img src='/miguel-portfolio/images/ulat-ph.png' alt='Ulat PH' className='w-full h-full object-cover' />
            <div className='absolute inset-0 border-[1px] border-white/20 lg:hidden'></div>
          </div>

          <div className='flex flex-wrap justify-center gap-1 mt-2 text-gray-500 text-[0.55rem] lg:text-[0.60rem]'>
            <span>Python</span><span>•</span><span>React</span><span>•</span><span>JavaScript</span><span>•</span><span>Tailwind CSS</span><span>•</span><span>PostgreSQL</span>
          </div>

          <div className='bg-[#000e1e] p-3 w-full lg:w-[300px] mt-2 border-l border-[#00b4d8] lg:border-none'>
            <p className='text-[#e0e0e0] text-[0.65rem] text-center lg:text-justify leading-relaxed'>
              Ulat PH is a community-driven reporting web app that enables civilians to <span className='text-[#00b4d8] font-semibold'>crowdsource and track</span> local issues like potholes.
            </p>
          </div>
        </div>

        {/* ============================== Featured Project 3: InstaPrint ============================== */}
        <div className='flex flex-col items-center w-full max-w-[320px] sm:max-w-sm lg:w-[300px] xl:w-[450px] relative'>
          
          <div className='flex w-full mb-1.5 text-left px-1 lg:px-0'>
            <div className='w-[75%]'>
              <h2 className='text-[#e0e0e0] text-[1.1rem] lg:text-[1.25rem] font-semibold'>InstaPrint</h2>
              <p className='text-gray-400 text-[0.65rem] lg:text-[0.75rem]'>Self-service Printing Kiosk</p>
            </div>
            <div className='flex items-center justify-end w-[25%]'>
              <a href='https://github.com/katrina110/instaprint-flask-' target='_blank' rel='noopener noreferrer'>
                <FaGithub className='text-white w-5 h-5 lg:w-8 lg:h-8 opacity-50 hover:opacity-100 transition-opacity' />
              </a>
            </div>
          </div>

          <div className='relative w-full h-[180px] lg:h-[150px]'>
            <img src='/miguel-portfolio/images/instaprint.jpg' alt='InstaPrint' className='w-full h-full object-cover' />
            <div className='absolute inset-0 border-[1px] border-white/20 lg:hidden'></div>
          </div>

          <div className='flex flex-wrap justify-center gap-1 mt-2 text-gray-500 text-[0.55rem] lg:text-[0.60rem]'>
            <span>Python</span><span>•</span><span>JavaScript</span><span>•</span><span>HTML</span><span>•</span><span>CSS</span><span>•</span><span>Bootstrap</span><span>•</span><span>MySQL</span>
          </div>

          <div className='bg-[#000e1e] p-3 w-full lg:w-[300px] mt-2 border-l border-[#00b4d8] lg:border-none'>
            <p className='text-[#e0e0e0] text-[0.65rem] text-center lg:text-justify leading-relaxed'>
              Developed a <span className='text-[#00b4d8] font-semibold'>full-stack printing kiosk</span> utilizing Python + Flask and WebSocket payment tracking.
            </p>
          </div>
        </div>

      </div>

      {/* Navigation Button - Tighter margin */}
      <div className='mt-12 lg:mt-32'>
        <a
          href='#' 
          onClick={(e) => { e.preventDefault(); scrollToExperience() }}
          className='text-[#00b4d8] bg-transparent text-[0.7rem] lg:text-[0.75rem] px-6 py-2 border border-[#00b4d8] hover:bg-[#00b4d8] hover:text-white transition-colors duration-300'
        >
          Know my experiences
        </a>
      </div>
    </div>
  )
}

export default Work;