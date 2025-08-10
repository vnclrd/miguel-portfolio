function About() {
  return (
    <div id="about" className='flex h-[100vh] items-center justify-center bg-[#0d1b2a] gap-10'>

      <div className='w-[400px] h-[400px] text-[#e0e0e0] text-[1.5rem]'>
        <h1 className='mb-9 font-bold'>About Me</h1>
        {/* <p className='text-[0.75rem] italic'>
          "I'm excited to learn and grow as I explore opportunities
          to apply and expand my skills in software development.
          Currently, I’m sharpening my abilities through hands-on
          projects and coding practice, while staying open to
          collaborating with like-minded professionals."
        </p> */}

        <p className='text-[0.8rem] text-[#b0bec5] pb-5 pt-4 leading-5'>
          Hi, I'm Miguel. I got into tech because I love to play video games as a kid.
          I got to play "Minecraft" and enjoyed playing with others through servers.
          That's when I explored on how to create my own server.
        </p>

        <p className='text-[0.9rem] text-[#b0bec5]'>
          Today, I am now a <span className='text-[#cf8115]'>Computer Engineering</span> graduate who specializes in system
          development. I've created projects that serve as a solution to real-world
          problems and I am excited to learn more and grow as I explore opportunities
          and expand my skills in software development.
        </p>

      </div>



      <div className='w-[250px] h-[250px] bg-gray-800'>
        <img 
          src="/miguel-portfolio/images/profile-photo.jpg"
          alt="Miguel Ivan Calarde"
          className='w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300'
        />
      </div>

      {/* <div className='about-description-container'>
          <p className='about-description-1'>
            "I'm excited to learn and grow as I explore opportunities
            to apply and expand my skills in software development.
            Currently, I’m sharpening my abilities through hands-on
            projects and coding practice, while staying open to
            collaborating with like-minded professionals."
          </p>
          <p className='about-description-2'>
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
      </div> */}

    </div>
  );
}

export default About;
