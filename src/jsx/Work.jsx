import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "TrainIn",
    subtitle: "Automated Attendance System",
    desc: "Automated attendance system using NFC chips for seamless check-in/out.",
    tech: ["React Native", "JavaScript", "TypeScript", "Tailwind CSS", "SQLite"],
    image: "/miguel-portfolio/images/trainin-aas.jpg",
    link: "https://github.com/vnclrd/trainin-aas"
  },
  // ... Add your other projects here following this structure
];

function Work() {
  return (
    <section id='work' className='bg-[#0d1b2a] min-h-screen w-full py-20 px-6'>
      <div className='max-w-6xl mx-auto'>
        <h1 className='text-[#e0e0e0] text-3xl font-bold mb-12 text-center lg:text-left'>
          What I've worked on
        </h1>

        {/* Responsive Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <div key={index} className='bg-[#000e1e] rounded-lg overflow-hidden flex flex-col'>
              <div className='h-48 overflow-hidden relative group'>
                <img src={project.image} alt={project.title} className='w-full h-full object-cover transition-transform group-hover:scale-105' />
              </div>
              
              <div className='p-6 flex-grow'>
                <div className='flex justify-between items-start mb-4'>
                  <div>
                    <h2 className='text-[#e0e0e0] text-xl font-bold'>{project.title}</h2>
                    <p className='text-gray-400 text-xs'>{project.subtitle}</p>
                  </div>
                  <a href={project.link} target='_blank' rel='noreferrer'>
                    <FaGithub className='text-white w-6 h-6 opacity-60 hover:opacity-100' />
                  </a>
                </div>
                <p className='text-[#e0e0e0] text-sm leading-relaxed mb-6'>{project.desc}</p>
                <div className='flex flex-wrap gap-2'>
                  {project.tech.map(t => <span key={t} className='text-[#00b4d8] text-[10px] uppercase font-mono'>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Work;