import { FaGithub } from 'react-icons/fa';

function Work() {

  function scrollToExperience() {
    document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div id='work' className='bg-[#0d1b2a] min-h-screen'>
      {/* Mobile Layout */}
      <div className='block lg:hidden px-4 py-8'>
        {/* Section Title */}
        <h1 className='text-[#e0e0e0] text-[1.5rem] font-bold mt-12 mb-8 text-center'>
          What I've worked on
        </h1>

        {/* Project 1 - TrainIn */}
        <div className='mb-12'>
          {/* Project Image */}
          <div className='relative mb-4'>
            <div className='w-full max-w-sm mx-auto h-[200px] bg-[#b0bec5]'>
              <img
                src='/miguel-portfolio/images/trainin-aas.jpg'
                alt='TrainIn'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='absolute inset-0 w-full max-w-sm mx-auto h-[200px] border-[2px] border-[#fff]'></div>
          </div>

          {/* Project Info */}
          <div className='text-center mb-4'>
            <div className='flex items-center justify-center gap-2 mb-2'>
              <h2 className='text-[#e0e0e0] text-[1.25rem] font-semibold'>
                TrainIn
              </h2>
              <a
                href='https://github.com/vnclrd/trainin-aas'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaGithub className='text-white w-6 h-6 opacity-50' />
              </a>
            </div>
            <p className='text-gray-400 text-[0.75rem] mb-4'>
              Automated Attendance System
            </p>
          </div>

          {/* Project Description */}
          <div className='bg-[#000e1e] p-4 mb-4 rounded'>
            <p className='text-[#e0e0e0] text-[0.75rem] text-center'>
              TrainIn is an automated attendance system designed to{' '}
              <span className='text-[#00b4d8] font-semibold'>
                record and track attendance
              </span>{' '}
              before and after a session. It uses NFC chips along with an
              external reader device to provide a seamless and efficient
              check-in and check-out process.
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
        <div className='mb-12'>
          {/* Project Image */}
          <div className='relative mb-4'>
            <div className='w-full max-w-sm mx-auto h-[200px] bg-[#b0bec5]'>
              <img
                src='/miguel-portfolio/images/instaprint.jpg'
                alt='InstaPrint'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='absolute inset-0 w-full max-w-sm mx-auto h-[200px] border-[2px] border-[#90494d]'></div>
          </div>

          {/* Project Info */}
          <div className='text-center mb-4'>
            <div className='flex items-center justify-center gap-2 mb-2'>
              <h2 className='text-[#e0e0e0] text-[1.25rem] font-semibold'>
                InstaPrint
              </h2>
              <a
                href='https://github.com/katrina110/instaprint-flask-'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaGithub className='text-white w-6 h-6 opacity-50' />
              </a>
            </div>
            <p className='text-gray-400 text-[0.75rem] mb-4'>
              Self-Service Printing Kiosk
            </p>
          </div>

          {/* Project Description */}
          <div className='bg-[#000e1e] p-4 mb-4 rounded'>
            <p className='text-[#e0e0e0] text-[0.75rem] text-center'>
              Developed a full-stack printing kiosk that calculates document
              pricing based on page count, color, and paper size. Utilized{' '}
              <span className='text-[#00b4d8] font-semibold'>
                Python + Flask
              </span>{' '}
              and{' '}
              <span className='text-[#00b4d8] font-semibold'>
                WebSocket-based
              </span>{' '}
              payment tracking as well as cashless payments with{' '}
              <span className='text-[#00b4d8] font-semibold'>GCash</span> with
              integration with{' '}
              <span className='text-[#00b4d8] font-semibold'>PayMongo</span>.
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

      {/* ============================== Desktop Layout ============================== */}
      <div className='flex flex-col items-center justify-center bg-[#0d1b2a] min-h-screen'>
        {/* Projects Container */}
        <div className='flex flex-col items-center justify-start text-center w-full h-[600px] gap-12'>
          {/* What I've worked on */}
          <h1 className='text-[#e0e0e0] text-[1.5rem] font-bold'>
            What I've worked on
          </h1>

          {/* Flex Projects */}
          <div className='flex h-full gap-30'>

            {/* TraininIn - Project 1 */}
            <div className='flex flex-col items-center w-[450px] h-[450px] mt-8'>

              {/* Project Title/Subtitle */}
              <div className='flex w-[400px] text-left mb-4'>

                {/* Left Side */}
                <div className='w-[50%]'>

                  {/* Title */}
                  <h2 className='text-[#e0e0e0] text-[1.25rem] font-semibold'>
                    TrainIn
                  </h2>

                  {/* Subtitle */}
                  <p className='text-gray-400 text-[0.75rem]'>
                    Automated Attendance System
                  </p>
                </div>

                {/* Right Side */}
                <div className='flex items-center justify-end w-[50%]'>
                  {/* GitHub Link */}
                  <a
                    href='https://github.com/vnclrd/trainin-aas'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FaGithub className='text-white w-8 h-8 opacity-50 hover:opacity-100 transition-opacity duration-300' />
                  </a>
                </div>
              </div>

              {/* Project 1 Image Holder */}
              <div className='w-[400px] h-[250px]'>

                {/* Project 1 Image */}
                <img
                  src='/miguel-portfolio/images/trainin-aas.jpg'
                  alt='TrainIn'
                  className='w-full h-full object-cover'
                />

              </div>

              {/* Project Description */}
              <div className='absolute flex items-center justify-center w-[350px] h-[120px] bg-[#000e1e] text-justify p-4 mt-70'>
                <p className='text-[#e0e0e0] text-[0.750rem]'>
                  TrainIn is an automated attendance system designed to{' '}
                  <span className='text-[#00b4d8] font-semibold'>
                    record and track attendance
                  </span>{' '}
                  before and after a session. It uses NFC chips along with an
                  external reader device to provide a seamless and efficient
                  check-in and check-out process.
                </p>
              </div>

              {/* Technologies Used */}
              <div className='text-gray-500 text-[0.60rem] mt-25 z-1000'>
                <div className='flex gap-4'>
                  <p>React Native</p>
                  <p>JavaScript</p>
                  <p>TypeScript</p>
                  <p>Tailwind CSS</p>
                  <p>SQLite</p>
                </div>
              </div>
            </div>

            {/* Ulat PH - Project 2 */}
            <div className='flex flex-col items-center w-[450px] h-[450px]'>
              {/* Project Title/Subtitle */}
              <div className='flex w-[400px] text-left mb-4'>
                {/* Left Side */}
                <div className='w-[50%]'>
                  {/* Title */}
                  <h2 className='text-[#e0e0e0] text-[1.25rem] font-semibold'>
                    Ulat PH
                  </h2>

                  {/* Subtitle */}
                  <p className='text-gray-400 text-[0.75rem]'>
                    Reporting Web App
                  </p>
                </div>

                {/* Right Side */}
                <div className='flex items-center justify-end w-[50%]'>
                  {/* GitHub Link */}
                  <a
                    href='https://github.com/vnclrd/ulat-ph'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FaGithub className='text-white w-8 h-8 opacity-50 hover:opacity-100 transition-opacity duration-300' />
                  </a>
                </div>
              </div>

              {/* Project 2 Image Holder */}
              <div className='w-[400px] h-[250px]'>
                {/* Project 2 Image */}
                <img
                  src='/miguel-portfolio/images/ulat-ph.png'
                  alt='TrainIn'
                  className='w-full h-full object-cover'
                />
              </div>

              {/* Project Description */}
              <div className='absolute flex items-center justify-center w-[350px] h-[120px] bg-[#000e1e] text-justify p-4 mt-70'>
                <p className='text-[#e0e0e0] text-[0.750rem]'>
                  Ulat PH is a simple community-driven reporting web app that
                  enables civilians to <span className='text-[#00b4d8] font-semibold'>crowdsource and track</span> local community
                  issues like potholes, broken streetlights, flooding, and more.
                </p>
              </div>

              {/* Technologies Used */}
              <div className='text-gray-500 text-[0.60rem] mt-25 z-1000'>
                <div className='flex gap-4'>
                  <p>Python</p>
                  <p>React</p>
                  <p>JavaScript</p>
                  <p>Tailwind CSS</p>
                  <p>PostgreSQL</p>
                </div>
              </div>
            </div>

            {/* InstaPrint - Project 3 */}
            <div className='flex flex-col items-center w-[450px] h-[450px] mt-8'>
              {/* Project Title/Subtitle */}
              <div className='flex w-[400px] text-left mb-4'>
                {/* Left Side */}
                <div className='w-[50%]'>
                  {/* Title */}
                  <h2 className='text-[#e0e0e0] text-[1.25rem] font-semibold'>
                    InstaPrint
                  </h2>

                  {/* Subtitle */}
                  <p className='text-gray-400 text-[0.75rem]'>
                    Self-service Printing Kiosk
                  </p>
                </div>

                {/* Right Side */}
                <div className='flex items-center justify-end w-[50%]'>
                  {/* GitHub Link */}
                  <a
                    href='https://github.com/katrina110/instaprint-flask-'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FaGithub className='text-white w-8 h-8 opacity-50 hover:opacity-100 transition-opacity duration-300' />
                  </a>
                </div>
              </div>

              {/* Project 3 Image Holder */}
              <div className='w-[400px] h-[250px]'>
                {/* Project 3 Image */}
                <img
                  src='/miguel-portfolio/images/instaprint.jpg'
                  alt='TrainIn'
                  className='w-full h-full object-cover'
                />
              </div>

              {/* Project Description */}
              <div className='absolute flex items-center justify-center w-[350px] h-[120px] bg-[#000e1e] text-justify p-4 mt-70'>
                <p className='text-[#e0e0e0] text-[0.7rem]'>
                  Developed a full-stack printing kiosk that calculates document
                  pricing based on page count, color, and paper size. Utilized{' '}
                  <span className='text-[#00b4d8] font-semibold'>
                    Python + Flask
                  </span>{' '}
                  and{' '}
                  <span className='text-[#00b4d8] font-semibold'>
                    WebSocket-based
                  </span>{' '}
                  payment tracking as well as cashless payments with{' '}
                  <span className='text-[#00b4d8] font-semibold'>GCash</span>{' '}
                  with integration with{' '}
                  <span className='text-[#00b4d8] font-semibold'>PayMongo</span>
                  .
                </p>
              </div>

              {/* Technologies Used */}
              <div className='text-gray-500 text-[0.60rem] mt-25 z-1000'>
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

        </div>

        <a
          href="#" 
          onClick={(e) => { e.preventDefault(); scrollToExperience() }}
          className="text-[#00b4d8] bg-transparent text-[0.75rem] pl-4 pr-4 pt-2.5 pb-2.5 border border-[#00b4d8] hover:bg-[#00b4d8] hover:text-white transition-colors duration-300"
        >
          Know my experiences
        </a>

      </div>

    </div>
  );
}

export default Work;
