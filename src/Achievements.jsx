import { FaTrophy, FaMedal, FaBookmark, FaCode } from 'react-icons/fa'

const categoryIcons = {
  'Academics': FaMedal,
  'Entrance': FaTrophy,
  'Research': FaBookmark,
  'DSA': FaCode,
}

function Achievements({ achievements }) {
  return (
    <section id="achievements" className="min-h-screen px-6 py-14">
      <p className="p-4 text-center text-cyan-300"> - ACHIEVEMENTS - </p>
      <h2 className="pb-10 text-center text-3xl font-bold text-white">Milestones I'm proud of</h2>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
        {achievements.map((achievement) => {

          const IconComponent = categoryIcons[achievement.category] || FaTrophy
          return (
            <article
              key={`${achievement.category}-${achievement.text}`}
              className="reveal rounded-xl border border-cyan-300/40 bg-gradient-to-br from-slate-950/60 to-slate-900/30 p-6 text-white shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-cyan-300/60 hover:shadow-cyan-500/20"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-500 text-white flex-shrink-0">
                  <IconComponent className="text-xl" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-cyan-300">{achievement.category}</p>
                  <p className="mt-2 text-slate-200 text-sm leading-relaxed">{achievement.text}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Achievements
