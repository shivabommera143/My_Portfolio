import { useForm, ValidationError } from '@formspree/react'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'
import profile from './data/profile'

const profileLinks = {
  linkedin: profile.socialLinks.find((link) => link.icon === 'linkedin')?.url,
  github: profile.socialLinks.find((link) => link.icon === 'github')?.url,
}

const contactEmail = 'shivabommera0143@gmail.com'
const formspreeFormId = 'xbdwbweo'

function Contact() {
  const [state, handleSubmit] = useForm(formspreeFormId)

  return (
    <section id="contact" className="min-h-screen px-6 py-14">
      <p className="p-4 text-center text-cyan-300"> - CONTACT - </p>
      <h2 className="pb-10 text-center text-3xl font-bold text-white">Let's build something useful</h2>

      <div className="mx-auto max-w-4xl space-y-8">
        {/* Contact Info */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <a
            href={`mailto:${contactEmail}`}
            className="reveal flex items-center gap-3 rounded-lg border border-cyan-300/40 bg-slate-950/55 p-4 transition-all duration-300 hover:border-cyan-300/60 hover:bg-slate-950/80 hover:shadow-cyan-500/20"
          >
            <FaEnvelope className="text-cyan-300 text-2xl flex-shrink-0" />
            <div>
              <p className="text-xs text-slate-400">Email</p>
              <p className="text-sm font-semibold text-white">{contactEmail}</p>
            </div>
          </a>

          <a
            href={profileLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal flex items-center gap-3 rounded-lg border border-cyan-300/40 bg-slate-950/55 p-4 transition-all duration-300 hover:border-cyan-300/60 hover:bg-slate-950/80 hover:shadow-cyan-500/20"
          >
            <FaLinkedin className="text-cyan-300 text-2xl flex-shrink-0" />
            <div>
              <p className="text-xs text-slate-400">LinkedIn</p>
              <p className="text-sm font-semibold text-white">Connect with me</p>
            </div>
          </a>

          <a
            href={profileLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal flex items-center gap-3 rounded-lg border border-cyan-300/40 bg-slate-950/55 p-4 transition-all duration-300 hover:border-cyan-300/60 hover:bg-slate-950/80 hover:shadow-cyan-500/20"
          >
            <FaGithub className="text-cyan-300 text-2xl flex-shrink-0" />
            <div>
              <p className="text-xs text-slate-400">GitHub</p>
              <p className="text-sm font-semibold text-white">View my code</p>
            </div>
          </a>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="reveal rounded-lg border border-cyan-300/40 bg-slate-950/55 p-6 text-white shadow-lg backdrop-blur-sm transition-all hover:shadow-cyan-500/10 sm:p-8"
        >
          <input type="hidden" name="_subject" value="New portfolio contact message" />

          <div>
            <label htmlFor="name" className="font-semibold text-cyan-200">Your Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              required
              className="mt-2 w-full rounded-md border border-cyan-300/40 bg-white/10 px-4 py-3 text-white outline-none transition-all placeholder:text-slate-400 focus:border-cyan-300 focus:bg-white/20"
            />
            <ValidationError
              field="name"
              errors={state.errors}
              className="mt-2 block text-sm font-medium text-red-300"
            />
          </div>

          <div className="mt-5">
            <label htmlFor="email" className="font-semibold text-cyan-200">Your Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="your@email.com"
              required
              className="mt-2 w-full rounded-md border border-cyan-300/40 bg-white/10 px-4 py-3 text-white outline-none transition-all placeholder:text-slate-400 focus:border-cyan-300 focus:bg-white/20"
            />
            <ValidationError
              field="email"
              errors={state.errors}
              className="mt-2 block text-sm font-medium text-red-300"
            />
          </div>

          <div className="mt-5">
            <label htmlFor="message" className="font-semibold text-cyan-200">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Your message here..."
              required
              rows="5"
              className="mt-2 w-full resize-none rounded-md border border-cyan-300/40 bg-white/10 px-4 py-3 text-white outline-none transition-all placeholder:text-slate-400 focus:border-cyan-300 focus:bg-white/20"
            />
            <ValidationError
              field="message"
              errors={state.errors}
              className="mt-2 block text-sm font-medium text-red-300"
            />
          </div>

          <ValidationError
            errors={state.errors}
            className="mt-4 block text-sm font-medium text-red-300"
          />

          <button
            type="submit"
            disabled={state.submitting || state.succeeded}
            className="mt-6 rounded-md bg-cyan-300 px-8 py-3 font-bold text-slate-950 transition-all duration-300 hover:bg-cyan-200 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/40 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
          >
            {state.submitting ? 'Sending...' : 'Send Message'}
          </button>

          {state.succeeded && (
            <p className="mt-4 text-sm font-medium text-cyan-200" role="status">
              Message sent successfully. Thank you for reaching out.
            </p>
          )}
        </form>

        <p className="text-center text-sm text-slate-400">
          Interested in internships, collaborations, and impactful projects.
        </p>
      </div>
    </section>
  )
}

export default Contact
