import styles from '../css/About.module.css'

function About() {
  return (
    <div id='about' className={styles.about}>
      <h1 className={styles.title}>Something About Me</h1>

      <div className={styles.photoContainer}>
        <div className={styles.circle} />
        <div className={styles.profilePhoto} />
      </div>

      <div className={styles.descriptionContainer}>
          <p className={styles.description1}>
            "I'm excited to learn and grow as I explore opportunities
            to apply and expand my skills in software development.
            Currently, I’m sharpening my abilities through hands-on
            projects and coding practice, while staying open to
            collaborating with like-minded professionals."
          </p>
          <p className={styles.description2}>
            Hi, I’m Miguel — a passionate developer who creates clean,
            functional, and engaging digital experiences. I build
            responsive websites and impactful mobile apps, focusing
            on intuitive design and seamless performance. With practical
            experiences in JavaScript, React, and modern tools, I
            continually sharpen my skills through personal projects
            and coding challenges. Beyond my profession, I love running,
            music, sneakers, keyboards, and more. Feel free to check out
            my projects below or get in touch if you'd like to collaborate!
          </p>
      </div>
    </div>
  );
}

export default About;
