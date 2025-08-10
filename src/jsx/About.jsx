function About() {
  return (
    <div id="about" className='flex h-[100vh] items-center justify-center bg-[#0d1b2a] gap-10'>

      <div className='w-[400px] h-[400px] text-[#e0e0e0] text-[1.5rem]'>
        <h1 className='mb-9 font-bold'>About Me</h1>

        <p className='text-[0.8rem] text-[#b0bec5] pb-5 leading-5'>
          Hi, I'm Miguel. I got into tech because I love to play video games as a kid.
          I got to play "Minecraft" and enjoyed playing with others through servers.
          That's when I explored on how to create my own server.
        </p>

        <p className='text-[0.9rem] text-[#b0bec5] pb-10'>
          Today, I am now a <span className='text-[#cf8115]'>Computer Engineering</span> graduate who specializes in system
          development. I've created projects that serve as solutions to real-world
          problems and I am excited to learn more and grow as I explore opportunities
          and expand my skills in software development.
        </p>

        <p className='text-[0.8rem] text-[#b0bec5] italic'>Polytechnic University of the Philippines</p>
        <p className='text-[0.8rem] text-[#b0bec5] italic'>BS Computer Engineering</p>
        <p className='text-[0.8rem] text-[#b0bec5] italic'>Batch 2025</p>

      </div>

      <div className='w-[250px] h-[250px] bg-gray-800 mr-50 z-1000'>
        <img 
          src="/miguel-portfolio/images/profile-photo.jpg"
          alt="Miguel Ivan Calarde"
          className='w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300'
        />
      </div>

      <div className='absolute w-[250px] h-[250px] bg-gray-800 mt-10 ml-70'>
        <img 
          src="/miguel-portfolio/images/profile-photo.jpg"
          alt="Miguel Ivan Calarde"
          className='w-full h-full object-cover hover:grayscale-0 transition-all duration-300'
        />
      </div>
    </div>
  );
}

export default About;
