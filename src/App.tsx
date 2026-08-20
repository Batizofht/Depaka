import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import WhatWeDo from './pages/Whatwedo'
import OurVision from './pages/Vision'
import Team from './pages/Team'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)

    const titleByPath: Record<string, string> = {
      '/': 'Venaxa Gold | Home',
      '/about': 'Venaxa Gold | About',
      '/contact': 'Venaxa Gold | Contact',
      '/what-we-do': 'Venaxa Gold | What We Do',
      '/whatwedo': 'Venaxa Gold | What We Do',
      '/vision': 'Venaxa Gold | Our Vision',
      '/our-vision': 'Venaxa Gold | Our Vision',
      '/team': 'Venaxa Gold | Team',
    }

    document.title = titleByPath[pathname] ?? 'Venaxa Gold'
  }, [pathname])

  return null
}

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF]">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/whatwedo" element={<WhatWeDo />} />
          <Route path="/vision" element={<OurVision />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
