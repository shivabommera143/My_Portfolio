import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import profile from './data/profile'
import { TypeAnimation } from 'react-type-animation'
import bg_image from './assets/bg_image.webp'
import image1 from './assets/developer_illustration.webp'


const socialIcons = {
  linkedin: FaLinkedin,
  github: FaGithub,
  leetcode: SiLeetcode,
}

function Header() {
  return (
    <header id="home" className="relative min-h-[calc(100vh-72px)] overflow-hidden bg-cover bg-center px-6 py-10 text-slate-100" style={{ backgroundImage: `url(${bg_image})` }}>
      <div className="mx-auto grid min-h-[calc(100vh-152px)] w-full max-w-6xl grid-cols-1 items-center gap-8 md:grid-cols-[45%_55%]">
        <div className="relative z-20 mx-auto w-full max-w-xl text-center">
          <p className="text-3xl text-teal-200 fade-up md:text-4xl" style={{ ['--delay']: '0.08s' }}>{profile.greeting}</p>
          <h1 className="py-4 text-4xl font-bold tracking-wide text-white fade-up sm:text-5xl" style={{ ['--delay']: '0.14s' }}>{profile.name}</h1>
          <p className="text-xl font-bold text-teal-100 fade-up md:text-2xl" style={{ ['--delay']: '0.22s' }}>{profile.role}</p>
          <p className="mx-auto mt-4 min-h-6 max-w-md text-slate-200 fade-up" style={{ ['--delay']: '0.3s' }}>
            <TypeAnimation
              sequence={[
                profile.tagline,
                3000,
                'AI/ML Enthusiast',
                3000,
                'Problem Solver',
                3000,
                'Full Stack Developer',
                3000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </p>

          <div className="my-8 flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-md bg-cyan-400 px-6 py-3 font-bold text-slate-950 btn-glow fade-up transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
              style={{ ['--delay']: '0.4s' }}
            >
              {profile.ctaLabel}
            </a>

            <a
              href="/SHIVA_RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Shiva_Bommera_resume.pdf"
              className="rounded-md border border-cyan-300/70 bg-white/10 px-6 py-3 font-bold text-cyan-100 backdrop-blur-sm btn-glow fade-up transition-all duration-300 hover:scale-105 hover:border-cyan-200 hover:bg-cyan-300/20 hover:shadow-lg hover:shadow-cyan-500/30"
              style={{ ['--delay']: '0.46s' }}
            >
              Download Resume
            </a>
          </div>

          <p className="text-center text-sm text-slate-300 fade-up" style={{ ['--delay']: '0.52s' }}>
            Open to internships and collaborative opportunities
          </p>

          <div className="flex flex-row justify-center gap-6 pt-6">
            {profile.socialLinks.map((socialLink, i) => {
              const Icon = socialIcons[socialLink.icon]

              return (
                <a
                  key={socialLink.label}
                  href={socialLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={socialLink.label}
                  className="text-2xl text-cyan-100 icon-hover fade-up transition-all duration-300 hover:scale-110 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-500/30"
                  style={{ ['--delay']: `${0.58 + i * 0.04}s` }}
                  title={socialLink.label}
                >
                  <Icon />
                </a>
              )
            })}
          </div>
        </div>

        <div className="group relative z-0 hidden min-h-[460px] items-center justify-center md:flex">
          <div className="absolute h-[28rem] w-[28rem] rounded-full bg-cyan-500/20 blur-3xl transition-all duration-700 ease-in-out group-hover:bg-cyan-400/30"></div>
          <img
            src={image1}
            alt="Developer working at a desk"
            className="relative h-auto w-full max-w-[500px] flex-shrink-0 object-contain transition-all duration-700 ease-in-out animate-[float_4s_ease-in-out_infinite] hover:scale-105 hover:drop-shadow-[0_0_36px_rgba(34,211,238,0.35)] lg:max-w-[590px] xl:max-w-[660px]"
          />
        </div>
      </div>
    </header>
  )
}

export default Header
