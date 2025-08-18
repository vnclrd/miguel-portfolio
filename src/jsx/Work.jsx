import { FaGithub } from 'react-icons/fa'

function Work() {
  return(
    <div id="work" className='bg-[#0d1b2a] min-h-screen'>
      
      {/* Mobile Layout */}
      <div className="block lg:hidden px-4 py-8">
        
        {/* Section Title */}
        <h1 className='text-[#e0e0e0] text-[1.5rem] font-bold mt-12 mb-8 text-center'>
          What I've worked on
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
              <a href="https://github.com/vnclrd/trainin-aas" target="_blank" rel="noopener noreferrer">
                <FaGithub className='text-white w-6 h-6 opacity-50' />
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
            <div className='flex flex-wrap justify-center gap-2 mt-5 text-gray-500 text-[0.60rem]'>
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
              <a href="https://github.com/katrina110/instaprint-flask-" target="_blank" rel="noopener noreferrer">
                <FaGithub className='text-white w-6 h-6 opacity-50' />
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
            <div className='flex flex-wrap justify-center gap-2 mt-5 text-gray-500 text-[0.60rem]'>
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
          
          <h1 className='absolute w-[400px] h-[400px] top-20 left-44 text-[#e0e0e0] text-[1.5rem] font-bold'>
            What I've worked on
          </h1>

          {/* Project 1 */}
          {/* Image Holder for Project 1 */}
          <div className='w-[400px] h-[250px] ml-44 mb-40 bg-[#b0bec5] z-20'>
            <img 
              src="/miguel-portfolio/images/trainin-aas.jpg"
              alt="TrainIn"
              className='w-full h-full object-cover'
            />
          </div>

          {/* Image Border */}
          <div className='absolute w-[400px] h-[250px] transform -translate-y-1/2 mt-32.5 left-38.5 bg-none border-[2px] border-[#fff] z-10'></div>

          {/* Project Title/Subtitle */}
          <h2 className='absolute top-[22.5%] left-[38rem] text-[#e0e0e0] text-[1.25rem] font-semibold'>TrainIn</h2>
          <p className='absolute top-[26.5%] left-[38rem] text-gray-400 text-[0.75rem]'>Automated Attendance System</p>

          {/* GitHub Link */}
          <a href="https://github.com/vnclrd/trainin-aas" target="_blank" rel="noopener noreferrer" className='absolute w-[25px] top-[24.5%] left-[57rem] z-40'>
            <FaGithub
              className='
                text-white w-6 h-6 opacity-50
                hover:opacity-100 transition-opacity duration-300
                '
            />
          </a>

          {/* Project Description */}
          <div className='absolute w-[400px] h-[120px] bg-[#000e1e] text-justify left-[35rem] top-[30%] p-3.5 z-30'>
            <p className='text-[#e0e0e0] text-[0.750rem]'>
              TrainIn is an automated attendance system designed to <span className='text-[#00b4d8] font-semibold'>record and track attendance</span> before and after a session.
              It uses NFC chips along with an external reader device to provide a seamless and efficient check-in and check-out process.
            </p>
          </div>

          {/* Technologies Used */}
          <div className='absolute text-gray-500 text-[0.60rem] left-[38rem] mb-1 z-1000'>
            <div className='flex gap-4'>
              <p>React Native</p>
              <p>JavaScript</p>
              <p>TypeScript</p>
              <p>Tailwind CSS</p>
              <p>SQLite</p>
            </div>
          </div>

          {/* Project 2 */}
          {/* Image Holder for Project 2 */}
          <div className='absolute w-[400px] h-[250px] top-[55%] left-[38rem] bg-[#b0bec5] z-20'>
            <img 
              src="/miguel-portfolio/images/instaprint.jpg"
              alt="InstaPrint"
              className='w-full h-full object-cover'
            />
          </div>
          {/* Image Border */}
          <div className='absolute w-[400px] h-[250px] top-[58%] left-[39.25rem] bg-none border-[2px] border-[#90494d] z-10'></div>

          {/* Project Title/Subtitle */}
          <h2 className='absolute top-[62%] left-[30rem] text-[#e0e0e0] text-[1.25rem] font-semibold'>InstaPrint</h2>
          <p className='absolute top-[66%] left-[26.5rem] text-gray-400 text-[0.75rem]'>Self-Service Printing Kiosk</p>

          {/* GitHub Link */}
          <a href="https://github.com/katrina110/instaprint-flask-" target="_blank" rel="noopener noreferrer" className='absolute w-[25px] top-[64%] left-61.5 z-40'>
            <FaGithub
              className='
                text-white w-6 h-6 opacity-50
                hover:opacity-100 transition-opacity duration-300
                '
              />
          </a>

          {/* Project Description */}
          <div className='absolute w-[400px] h-[120px] bg-[#000e1e] text-justify left-56 top-[69.5%] p-3.5 z-30'>
            <p className='text-[#e0e0e0] text-[0.75rem]'>
              Developed a full-stack printing kiosk that calculates document pricing
              based on page count, color, and paper size. Utilized <span className='text-[#00b4d8] font-semibold'>Python + Flask</span> and <span className='text-[#00b4d8] font-semibold'>WebSocket-based</span> payment
              tracking as well as cashless payments with <span className='text-[#00b4d8] font-semibold'>GCash</span> with integration with <span className='text-[#00b4d8] font-semibold'>PayMongo</span>.
            </p>
          </div>

          {/* Technologies Used */}
          <div className='absolute text-gray-500 text-[0.60rem] left-[16rem] mt-138 z-1000'>
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

        {/* Right Panel (30%) */}
        <div className="flex items-center justify-center px-4 w-[30%] lg:min-h-screen">
        </div>

      </div>
    </div>
  )
}

export default Work