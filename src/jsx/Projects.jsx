function Projects() {
  return(
    <div id='projects' className='projects'>

      <div className='project-1'>
        <div className='image-container-p1'></div>
        <h1>TrainIn</h1>
        <p>Automated Attendance System</p>
        <p className='date'>July 2025 - Present</p>
        <p className='description'>
          TrainIn is an automated attendance system designed to record and track
          the attendance of individuals at organized events. It uses NFC cards/chips
          along with an external reader device to provide a seamless and
          efficient check-in and check-out process. The collected data can then
          be compiled into summaries and reports for easy analysis and management.
        </p>
        <div className='tools'>
          <div className="tool-1">
            <image className="react-js" />React Native
          </div>
          <div className="tool-1">
            <image className="js" />JavaScript
          </div>
          <div className="tool-1">
            <image className="ts" />TypeScript
          </div>
          <div className="tool-1">
            <image className="html" />HTML
          </div>
          <div className="tool-1">
            <image className="css" />CSS
          </div>
          <div className="tool-1">
            <image className="sqlite" />SQLite
          </div>
        </div>
      </div>
      
      <div className='project-2'>
        <div className='image-container-p2'></div>
        <h1>InstaPrint</h1>
        <p>Printing Kiosk</p>
        <p className='date'>September 2023 - June 2025</p>
        <p className='description'>
          Developed a full-stack printing kiosk that calculates document pricing
          based on page count, color, and paper size, enabling automated,
          affordable printing for students and faculty. Implemented hardware interaction with
          printers, coin acceptors and change system with cashless payment with
          GCash with integration with PayMongo.
        </p>
        <div className='tools'>
          <div className="tool-1">React Native</div>
          <div className="tool-1">JavaScript</div>
          <div className="tool-1">TypeScript</div>
          <div className="tool-1">React Native</div>
          <div className="tool-1">React Native</div>
          <div className="tool-1">React Native</div>
        </div>
      </div>

      <div className='project-3'>
        <div className='image-container-p3'></div>
        <h1>Project 3</h1>
        <p>Project 3 Subtitle</p>
        <p className='date'>Start Date - End Date</p>
        <p className='description'>
          TrainIn is an automated attendance system designed to record and track
          the attendance of individuals at organized events. It uses NFC cards
          along with an external reader device to provide a seamless and
          efficient check-in and check-out process. The collected data can then
          be compiled into summaries and reports for easy analysis and management.
        </p>
        <div className='tools'>
          <div className="tool-1">React Native</div>
          <div className="tool-1">JavaScript</div>
          <div className="tool-1">TypeScript</div>
          <div className="tool-1">React Native</div>
          <div className="tool-1">React Native</div>
          <div className="tool-1">React Native</div>
        </div>
      </div>

    </div>
  )
}

export default Projects