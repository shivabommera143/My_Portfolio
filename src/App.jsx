import Achievements from './Achievements'
import Contact from './Contact'
import EducationCard from './Education_card'
import Experience from './Experience'
import Header from './Header'
import ProjectCard from './Project_card'
import SkillCard from './Skill_card'
import about from './data/about'
import achievements from './data/achievements'
import education from './data/education'
import experiences from './data/experience'
import projects from './data/projects'
import skills from './data/skills'
import './index.css'
import Navig from './Navig'
import aboutBg from './assets/about_bg.webp'
import projectsBg from './assets/projects_bg.webp'
import skillsBg from './assets/skills_bg.webp'
import experienceBg from './assets/experience_bg.webp'
import achievementsBg from './assets/achievements_bg.webp'
import contactBg from './assets/contact_bg.webp'

function App() {
  return (
    <div className="App">
      <Navig />
      <Header />
      <section
        id="about"
        className="min-h-screen px-6 py-14 reveal"
        style={{ backgroundImage: `url(${aboutBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <p className="p-4 text-center text-cyan-300"> - ABOUT ME -</p>
        <h2 className="pb-8 text-center text-3xl font-bold text-white">Introduction</h2>

        <div className="mx-auto flex max-w-6xl flex-col items-start justify-center gap-8 md:flex-row">
          <div className="w-full md:w-1/2 reveal">
            <div className="max-w-[600px] whitespace-pre-wrap rounded-lg border border-cyan-300/50 bg-slate-950/40 p-8 text-sm font-light leading-loose tracking-wide text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              {about}
            </div>
          </div>

          <div id="education" className="w-full md:w-2/5 reveal">
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-cyan-300/50 bg-slate-950/40 p-6 shadow-md backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="text-center text-4xl font-extrabold text-cyan-300">250+</div>
                  <div className="mt-1 text-center text-sm text-slate-200">DSA Problems Solved</div>
                </div>

                <div className="rounded-lg border border-cyan-300/50 bg-slate-950/40 p-6 shadow-md backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="text-center text-4xl font-extrabold text-cyan-300">5+</div>
                  <div className="mt-1 text-center text-sm text-slate-200">Projects Built</div>
                </div>
              </div>

              <div className="rounded-lg border border-cyan-300/50 bg-slate-950/40 p-4 shadow-md backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-cyan-300">Education</h3>
                <div className="mt-4 grid grid-cols-1 gap-3">
                  {education.map((item) => (
                    <EducationCard
                      key={`${item.degree}-${item.institution}`}
                      degree={item.degree}
                      institution={item.institution}
                      year={item.year}
                      grade={item.grade}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section id="projects" className='min-h-screen px-6 py-12 reveal' style={{ backgroundImage: `url(${projectsBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <p className="p-4 text-center text-cyan-300"> - MY WORK - </p>
        <h2 className="pb-5 text-center text-3xl font-bold text-white">Projects I've built with passion</h2>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              link={project.link}
              demo={project.demo}
              category={project.category}
              techStack={project.techStack}
              className="reveal"
              style={{ ['--delay']: `${index * 0.08}s` }}
            />
          ))}
        </div>
      </section>

      <section
        id="skills"
        className="min-h-screen px-6 py-16 reveal"
        style={{ backgroundImage: `url(${skillsBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="mx-auto max-w-6xl">
          <p className="p-4 text-center text-cyan-300"> - SKILLS - </p>
          <h2 className="pb-3 text-center text-3xl font-bold text-white">Tech Stack and Strengths</h2>
          <p className="mx-auto max-w-2xl pb-10 text-center text-sm leading-relaxed text-slate-300">
            A focused mix of frontend, backend, data, and collaboration skills I use across projects.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skillGroup) => (
            <SkillCard
              key={skillGroup.title}
              title={skillGroup.title}
              skills={skillGroup.skills}
              level={skillGroup.level}
              className="reveal"
            />
          ))}
        </div>
      </section>

      <div style={{ backgroundImage: `url(${experienceBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Experience experiences={experiences} />
      </div>



      <div style={{ backgroundImage: `url(${achievementsBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Achievements achievements={achievements} />
      </div>

      <div style={{ backgroundImage: `url(${contactBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Contact />
      </div>
      <footer className="border-t border-cyan-300/10 bg-slate-950 px-6 py-6 text-center text-sm text-slate-400">
        <p>Built with React + Tailwind CSS</p>
        <p className="mt-1">&copy; 2026 Shiva Bommera</p>
      </footer>
    </div>
  )
}

export default App
