import { FaBriefcase } from 'react-icons/fa'

function Experience({ experiences }) {
  return (
    <section id="experience" className="min-h-screen px-6 py-14">
      <p className="p-4 text-center text-cyan-300"> - EXPERIENCE - </p>
      <h2 className="pb-10 text-center text-3xl font-bold text-white">Where I've learned and worked</h2>

      <div className="mx-auto max-w-3xl space-y-6">
        {experiences.map((experience, index) => (
          <div key={`${experience.role}-${experience.company}`} className="relative reveal">
            {/* Timeline dot and line */}
            <div className="absolute left-0 top-0 flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-cyan-400 border-2 border-slate-950 z-10"></div>
              {index !== experiences.length - 1 && (
                <div className="w-1 h-24 bg-gradient-to-b from-cyan-400 to-slate-800 mt-2"></div>
              )}
            </div>

            {/* Content card */}
            <article
              className="ml-8 rounded-xl border border-cyan-300/40 bg-slate-950/55 p-6 text-white shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-cyan-300/60 hover:shadow-cyan-500/20"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-3">
                  <FaBriefcase className="text-cyan-300 text-lg flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-white">{experience.role}</h3>
                    <p className="text-cyan-200 font-semibold text-sm">{experience.company}</p>
                  </div>
                </div>
                <p className="rounded-full border border-cyan-300/50 bg-white/10 px-4 py-2 text-xs font-bold text-cyan-100 whitespace-nowrap">
                  {experience.duration}
                </p>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">{experience.description}</p>
              {experience.points && experience.points.length > 0 && (
                <ul className="mt-3 ml-4 space-y-1 text-xs text-slate-400">
                  {experience.points.map((point, i) => (
                    <li key={i} className="list-disc">{point}</li>
                  ))}
                </ul>
              )}
            </article>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
