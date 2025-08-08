import styles from '../css/About.module.css'

function About() {
  return (
    <div id='about' className={styles.about}>
      <h1 className={styles.title}>About Me</h1>

      <div className={styles.photoContainer}>
        <div className={styles.circle} />
        <div className={styles.profilePhoto} />
      </div>

      <div className={styles.descriptionContainer}>
          <p className={styles.description}>
            "I'm excited to learn and grow as I explore opportunities
            to apply and expand my skills in software development.
            Currently, I’m sharpening my abilities through hands-on
            projects and coding practice, while staying open to
            collaborating with like-minded professionals."
          </p>
      </div>
    </div>
  );
}

export default About;
