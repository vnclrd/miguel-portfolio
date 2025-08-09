import '../css/Experience.css'

function Experience() {
  return(
    <div id='experience' className='experience-container'>

      <h1 className='experience-title'>Experience</h1>

      <div className='experiences'>
        <div className='experience'>
          <h1 className='experience-h1'>Full Stack WordPress Developer Intern</h1>
          <p className='experience-p'>ROC.PH Digital Marketing Services</p>
          <p className='experience-date'>August 2024 - October 2024</p>
          <p className='experience-description'>
            Earned commendation for leadership and key contributions as
            Department Team Leader, starting from Full Stack WordPress Developer role.
            Reported directly to the CEO on team performance, milestones, and
            challenges and worked with cross-functional teams to deliver integrated web solutions.
          </p>
        </div>

        <div className='experience'>
          <h1 className='experience-h1'>Front-End Developer Intern</h1>
          <br />
          <p className='experience-p'>LexMeet, Inc.</p>
          <p className='experience-date'>August 2023 - October 2023</p>
          <p className='experience-description'>
            Developed and designed user-facing features, applying logical reasoning to
            effectively solve problems, while consistently demonstrating initiative, a
            strong work ethic, and timely task completion; throughout the role, was
            trusted with confidential information and remained resilient and reliable,
            particularly in high-pressure and critical situations.
          </p>
        </div>
      </div>

      

    </div>
  )
}

export default Experience