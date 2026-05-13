import { useState, useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import MiniProjects from './components/sections/MiniProjects'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/ui/ScrollToTop'

const App = () => {
  const [theme, setTheme] = useState('light')
  const [activeMenu, setActiveMenu] = useState('')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    const handleScroll = () => {
      const navHeight = 90
      const scrollY = window.scrollY + navHeight + 10

      const sections = [
        { id: 'about', label: '소개' },
        { id: 'skills', label: '기술 스택' },
        { id: 'projects', label: '프로젝트' },
        { id: 'contact', label: '연락처' },
      ]

      if (window.scrollY < 100) {
        setActiveMenu('')
        return
      }

      let current = ''
      sections.forEach(({ id, label }) => {
        const el = document.getElementById(id)
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY
          if (scrollY >= top) {
            current = label
          }
        }
      })

      setActiveMenu(current)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div>
      <Navbar theme={theme} toggleTheme={toggleTheme} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <MiniProjects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App