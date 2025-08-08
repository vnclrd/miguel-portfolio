import styles from '../css/Projects.module.css'

function Projects() {
  return(
    <div id='projects' className={styles.projects}>

      <div className={styles.project1}>
        <div className={styles.imageContainerP1}></div>
        <h1>TrainIn</h1>
        <p>Automated Attendance System App</p>
        <p className={styles.date}>July 2025 - Present</p>
        <p className={styles.description}>
          TrainIn is an automated attendance system designed to record and track
          the attendance of individuals at organized events. It uses NFC cards/chips
          along with an external reader device to provide a seamless and
          efficient check-in and check-out process. The collected data can then
          be compiled into summaries and reports for easy analysis and management.
        </p>
        <div className={styles.toolsContainer}>
          <div className={styles.tools}>
            <image className={styles.react} />React Native
          </div>
          <div className={styles.tools}>
            <image className={styles.js} />JavaScript
          </div>
          <div className={styles.tools}>
            <image className={styles.ts} />TypeScript
          </div>
          <div className={styles.tools}>
            <image className={styles.html} />HTML
          </div>
          <div className={styles.tools}>
            <image className={styles.css} />CSS
          </div>
          <div className={styles.tools}>
            <image className={styles.sqlite} />SQLite
          </div>
        </div>
      </div>
      
      <div className={styles.project2}>
        <div className={styles.imageContainerP2}></div>
        <h1>InstaPrint</h1>
        <p>Self-Service Printing Kiosk</p>
        <p className={styles.date}>September 2023 - June 2025</p>
        <p className={styles.description}>
          Developed a full-stack printing kiosk that calculates document pricing
          based on page count, color, and paper size, enabling automated,
          affordable printing for students and faculty. Implemented hardware
          interaction with printers, coin acceptors and change system with cashless
          payment with GCash with integration with PayMongo.
        </p>
        <div className={styles.toolsContainer}>
          <div className={styles.tools}>
            <image className={styles.python} />Python
          </div>
          <div className={styles.tools}>
            <image className={styles.js} />JavaScript
          </div>
          <div className={styles.tools}>
            <image className={styles.react} />React JS
          </div>
          <div className={styles.tools}>
            <image className={styles.html} />HTML
          </div>
          <div className={styles.tools}>
            <image className={styles.css} />CSS
          </div>
          <div className={styles.tools}>
            <image className={styles.mysql} />MySQL
          </div>
        </div>
      </div>

      <div className={styles.project3}>
        <div className={styles.imageContainerP3}></div>
        <h1>ShouldU</h1>
        <p>Summarization App</p>
        <p className={styles.date}>July 2023 - August 2023</p>
        <p className={styles.description}>
          ShouldU is a simple and straightforward application that helps you make
          up your mind on something you want to do. It summarizes all related
          information that you give to the application with simple questions that
          can be answered with "yes" and "no" and compiles the information into a
          downloadable text file to easily view the summary the your answers.
        </p>
        <div className={styles.toolsContainer}>
          <div className={styles.toolsApacheCordova}>
            <image className={styles.ApacheCordova} />Apache Cordova
          </div>
          <div className={styles.tools}>
            <image className={styles.js} />JavaScript
          </div>
          <div className={styles.tools}>
            <image className={styles.html} />HTML
          </div>
          <div className={styles.tools}>
            <image className={styles.css} />CSS
          </div>
          <div className={styles.tools}>
            <image className={styles.mysql} />MySQL
          </div>
        </div>
      </div>

    </div>
  )
}

export default Projects