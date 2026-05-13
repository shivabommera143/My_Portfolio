import { useState, useEffect } from 'react'

const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
]

function Navig(){
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)

            let current = 'home'

            for (const item of navItems) {
                const section = document.getElementById(item.id)
                if (section && section.offsetTop - 120 <= window.scrollY) {
                    current = item.id
                }
            }

            setActiveSection(current)
        }

        handleScroll()
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return(
        <nav className={`sticky top-0 z-50 min-h-16 text-cyan-50 px-6 py-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between transition-all duration-300 ${
            isScrolled 
                ? 'bg-slate-950/80 backdrop-blur-md shadow-lg shadow-black/20 border-b border-cyan-300/10' 
                : 'bg-slate-950'
        }`}>
            <a href="#home" className={`text-2xl font-black tracking-wide transition-colors ${
                activeSection === 'home' ? 'text-cyan-200 drop-shadow-[0_0_10px_rgba(34,211,238,0.75)]' : 'text-cyan-300 hover:text-cyan-200'
            }`}>
                SB
            </a>

            <ul className="flex w-full gap-4 overflow-x-auto pb-1 text-sm font-semibold sm:w-auto sm:gap-6 sm:overflow-visible sm:pb-0">
                {navItems.map((item) => (
                    <li key={item.id} className="shrink-0">
                        <a
                            href={`#${item.id}`}
                            className={`relative block py-1 transition-all duration-200 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-cyan-300 after:transition-all after:duration-300 ${
                                activeSection === item.id
                                    ? 'text-cyan-200 drop-shadow-[0_0_10px_rgba(34,211,238,0.7)] after:w-full'
                                    : 'text-cyan-50/90 hover:text-cyan-300 after:w-0 hover:after:w-full'
                            }`}
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
export default Navig;
