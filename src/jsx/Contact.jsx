import { FaLinkedin, FaFacebook, FaFacebookMessenger, FaInstagram } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

function Contact() {
  return (
    <div id="contact" className='flex flex-col lg:flex-row lg:min-h-screen bg-[#0d1b2a]'>

      {/* Left Panel (70%) */}
      <div 
        className='
          flex items-center justify-center bg-[#0d1b2a] px-4
          w-full lg:w-[70%] min-h-screen
          '
        >

        <div
          className="
            w-full max-w-2xl flex flex-col  
            items-center text-center
            lg:items-start lg:text-left lg:ml-40
          "
        >

          <h1 className="text-[#00ffff] whitespace-nowrap text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-poppins pb-5">
            I Am Open To Collaborations.
          </h1>

          <p className="text-[#e0e0e0] ml-0.5 leading-6 mb-5 lg:text-[0.95rem] lg:font-thin sm:text-[base]">
            I am currently employed, but I am still eager to work on projects and collaborations.
          </p>

          <p className="text-[#e0e0e0] ml-0.5 leading-6 lg:text-[0.95rem] lg:font-thin sm:text-base">
            If you have any{' '}
            <span className="text-[#00b4d8] font-semibold">ideas</span> or{' '}
            <span className="text-[#00b4d8] font-semibold">want to collaborate</span>{' '}
            on a project with me, you may contact me through these links
            and I will get back to you as soon as possible!
          </p>

          <div
            className="
              flex w-[250px] h-[50px] mt-8 gap-6
              justify-center
              lg:justify-start
              items-center
            "
          >
            <a
              href="https://www.linkedin.com/in/vnclrd/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                className="
                  text-white w-10 h-10 opacity-50
                  hover:opacity-100 transition duration-300
                  "
                />
            </a>
            <a
              href="mailto:miguel.calarde@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGmail
                className="
                  text-white w-10 h-10 opacity-50
                  hover:opacity-100 transition duration-300
                  "
                />
            </a>
          </div>
        </div>
      </div>

      {/* Right Panel (30%) */}
      <div 
        className="
          flex items-center justify-center px-4
          w-full lg:w-[30%] lg:min-h-screen
        "
      >
      </div>
    </div>
  )
}

export default Contact
