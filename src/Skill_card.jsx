import { FaCode, FaDatabase, FaBrain, FaLightbulb, FaReact } from 'react-icons/fa'

const skillIcons = {
  'Frontend': FaReact,
  'Backend': FaDatabase,
  'AI/ML & Data': FaBrain,
  'Soft Skills': FaLightbulb,
}


function SkillCard({ title, skills, level, className = '' }) {
  const IconComponent = skillIcons[title] || FaCode

  return (
    <article className={`flex h-full flex-col rounded-lg border border-cyan-300/35 bg-slate-950/65 p-5 text-white shadow-lg shadow-black/20 backdrop-blur-md transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-cyan-300/70 hover:bg-slate-950/80 hover:shadow-cyan-500/20 ${className}`}>
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-lg border border-cyan-300/40 bg-cyan-300/10 text-xl text-cyan-200">
            <IconComponent />
          </div>
          <div>
            <h3 className="text-lg font-bold leading-tight text-white">{title}</h3>
            {level && <p className="mt-1 text-xs font-semibold text-cyan-200/80">{level}</p>}
          </div>
        </div>
        <div className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-slate-200">
          {skills.length}
        </div>
      </div>

      <div className="grid gap-2">
        {skills.map((skill) => (
          <div
            key={skill}
            className="flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-slate-100 transition-all duration-300 hover:border-cyan-300/50 hover:bg-cyan-300/10"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300"></span>
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </article>
  )
}

export default SkillCard
