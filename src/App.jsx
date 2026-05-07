import { useState, useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import ScrollToTop from './components/ui/ScrollToTop'
import Skills from './components/sections/Skills'

const App = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <div>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <ScrollToTop />
      <Skills />
    </div>
  )
}

export default App