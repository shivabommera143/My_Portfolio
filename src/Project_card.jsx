import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

function ProjectCard(props) {
  return (
    <article
      style={props.style}
      className={`group flex h-full w-full flex-col rounded-lg border border-white/10 bg-[#07152f]/80 p-5 text-white shadow-xl shadow-black/20 backdrop-blur-md transition-all duration-300 ease-in-out hover:-translate-y-3 hover:border-cyan-300/70 hover:bg-[#081b3d]/90 hover:shadow-cyan-500/20 ${props.className || ''}`}
    >
      <div className="mb-4 flex justify-end">
        <span className="rounded-full border border-cyan-300/40 bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-100">
          {props.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col">
        <h3 className="text-lg font-bold leading-tight text-white">{props.title}</h3>
        <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-300 line-clamp-2">{props.description}</p>
        
        <div className="mt-3 flex flex-wrap gap-1">
          {props.techStack?.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-cyan-300/10 px-2 py-1 text-xs font-semibold text-cyan-100"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="mt-4 flex flex-wrap gap-2">
        <a
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-cyan-300/70 px-3 py-2 text-xs font-bold text-cyan-100 transition-all duration-300 ease-in-out hover:bg-cyan-300 hover:text-slate-950 hover:shadow-lg hover:shadow-cyan-500/30"
        >
          <FaGithub className="text-sm" />
          GitHub
        </a>
        {props.liveWebsite && props.liveWebsite !== '#' && (
          <a
            href={props.liveWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-emerald-400/70 px-3 py-2 text-xs font-bold text-emerald-100 transition-all duration-300 ease-in-out hover:bg-emerald-400 hover:text-slate-950 hover:shadow-lg hover:shadow-emerald-500/30"
          >
            <FaExternalLinkAlt className="text-xs" />
            Live
          </a>
        )}
        {props.demo && props.demo !== '#' && (
          <a
            href={props.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-cyan-300 px-3 py-2 text-xs font-bold text-slate-950 transition-all duration-300 ease-in-out hover:bg-cyan-200 hover:shadow-lg hover:shadow-cyan-500/40"
          >
            <FaExternalLinkAlt className="text-xs" />
            Demo
          </a>
        )}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
