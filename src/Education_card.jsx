import { FaGraduationCap, FaCalendar, FaMedal } from 'react-icons/fa'

function EducationCard({ degree, institution, year, grade }) {
  return (
    <article className="w-full p-5 rounded-lg bg-gradient-to-b from-slate-950/50 to-slate-900/20 border border-cyan-300/30 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300/60 hover:shadow-xl hover:shadow-cyan-500/10 card-hover-shadow">
      <div className="flex items-start gap-3">
        <div className="text-cyan-300 text-xl flex-shrink-0 mt-1">
          <FaGraduationCap />
        </div>
        <div className="flex-1">
          <h3 className="text-white font-bold text-base leading-tight">{degree}</h3>
          <p className="text-slate-300 text-sm mt-1">{institution}</p>
        </div>
      </div>
      
      <div className="mt-4 flex items-center gap-4 text-sm">
        <span className="flex items-center gap-2 text-slate-400">
          <FaCalendar className="text-cyan-300/60 text-xs" />
          {year}
        </span>
        <span className="flex items-center gap-2 text-cyan-300 font-semibold bg-cyan-300/10 px-3 py-1 rounded-full">
          <FaMedal className="text-xs" />
          {grade}
        </span>
      </div>
    </article>
  )
}

export default EducationCard
