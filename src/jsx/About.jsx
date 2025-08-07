import styles from '../css/About.module.css'

function About() {
  return (
    <div id='about' className={styles.about}>
      <h1 className={styles.title}>About Me</h1>

      <div className={styles.photoContainer}>
        <div className={styles.circle} />
        <div className={styles.profilePhoto} />
      </div>

      <div className={styles.description}>

      </div>
    </div>
  );
}

export default About;
