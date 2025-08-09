import '../css/Projects.css'

function Projects() {
  return(
    <div id='projects' className='projects-container'>

      <div className='project-1'>
        <div className='project-image-container-p1'></div>
        <h1>TrainIn</h1>
        <p>Automated Attendance System App</p>
        <p className='project-date'>July 2025 - Present</p>
        <p className='project-description'>
          TrainIn is an automated attendance system designed to record and track
          the attendance of individuals at organized events. It uses NFC cards/chips
          along with an external reader device to provide a seamless and
          efficient check-in and check-out process. The collected data can then
          be compiled into summaries and reports for easy analysis and management.
        </p>
        <div className='project-tools-container'>
          <div className='project-tools'>
            <image className='project-react' />React Native
          </div>
          <div className='project-tools'>
            <image className='project-js' />JavaScript
          </div>
          <div className='project-tools'>
            <image className='project-ts' />TypeScript
          </div>
          <div className='project-tools'>
            <image className='project-html' />HTML
          </div>
          <div className='project-tools'>
            <image className='project-css' />CSS
          </div>
          <div className='project-tools'>
            <image className='project-sqlite' />SQLite
          </div>
        </div>
      </div>
      
      <div className='project-2'>
        <div className='project-image-container-p2'></div>
        <h1>InstaPrint</h1>
        <p>Self-Service Printing Kiosk</p>
        <p className='project-date'>September 2023 - June 2025</p>
        <p className='project-description'>
          Developed a full-stack printing kiosk that calculates document pricing
          based on page count, color, and paper size, enabling automated,
          affordable printing for students and faculty. Implemented hardware
          interaction with printers, coin acceptors and change system with cashless
          payment with GCash with integration with PayMongo.
        </p>
        <div className='project-tools-container'>
          <div className='project-tools'>
            <image className='project-python' />Python
          </div>
          <div className='project-tools'>
            <image className='project-js' />JavaScript
          </div>
          <div className='project-tools'>
            <image className='project-react' />React JS
          </div>
          <div className='project-tools'>
            <image className='project-html' />HTML
          </div>
          <div className='project-tools'>
            <image className='project-css' />CSS
          </div>
          <div className='project-tools'>
            <image className='project-mysql' />MySQL
          </div>
        </div>
      </div>

      <div className='project-3'>
        <div className='project-image-container-p3'></div>
        <h1>ShouldU</h1>
        <p>Summarization App</p>
        <p className='project-date'>July 2023 - August 2023</p>
        <p className='project-description'>
          ShouldU is a simple and straightforward application that helps you make
          up your mind on something you want to do. It summarizes all related
          information that you give to the application with simple questions that
          can be answered with "yes" and "no" and compiles the information into a
          downloadable text file to easily view the summary the your answers.
        </p>
        <div className='project-tools-container'>
          <div className='project-tools-apache-cordova'>
            <image className='project-apache-cordova' />Apache Cordova
          </div>
          <div className='project-tools'>
            <image className='project-js' />JavaScript
          </div>
          <div className='project-tools'>
            <image className='project-html' />HTML
          </div>
          <div className='project-tools'>
            <image className='project-css' />CSS
          </div>
          <div className='project-tools'>
            <image className='project-mysql' />MySQL
          </div>
        </div>
      </div>

    </div>
  )
}

export default Projects