import { FaGit, FaGithub } from 'react-icons/fa'

function Footer() {
  return(
    <div className="flex w-full h-[120px] justify-center bg-[#000e1e]">
      <div className="flex flex-col items-center justify-center">
        <p className="text-[#e0e0e0] leading-4 mb-3 text-[0.6rem] font-thin text-center">
          This website was developed with React and Tailwind CSS
          <br/>
          by Miguel Ivan Calarde
        </p>

        <a
          href="https://github.com/vnclrd/miguel-portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub
            className="
              text-white w-6 h-6 opacity-50
              hover:opacity-100 transition-opacity duration-300
              "
            />
        </a>
      </div>
    </div>
  )
}

export default Footer
