import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { FiYoutube, FiMenu, FiX, FiArrowUp } from 'react-icons/fi'
import { HiOutlineLightningBolt } from 'react-icons/hi'
import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './pages/Home'
import FAQ from './pages/FAQ'
import Guide from './pages/Guide'
import Feedback from './pages/Feedback'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import Showcase from './pages/Showcase'

// Page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  }
}

// Scroll to top component
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiArrowUp className="text-xl" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

// Scroll progress bar
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return <motion.div className="progress-bar" style={{ scaleX }} />
}

// 404 Page
const NotFound = () => {
  return (
    <motion.div 
      className="min-h-screen flex items-center justify-center"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <div className="text-center">
        <h1 className="text-9xl font-bold text-indigo-600 mb-4">404</h1>
        <p className="text-2xl text-gray-600 mb-8 font-cabinet">Page not found</p>
        <Link 
          to="/"
          className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors inline-flex items-center gap-2"
        >
          <FiYoutube className="text-xl" />
          Back to Home
        </Link>
      </div>
    </motion.div>
  )
}

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  const isActive = (path) => location.pathname === path

  const navItems = [
    { path: '/guide', label: 'Installation Guide' },
    { path: '/faq', label: 'FAQ' },
    { path: '/feedback', label: 'Feedback' }
  ]

  return (
    <motion.nav 
      className="fixed top-0 w-full z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      {/* Top gradient line */}
      <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500" />
      
      <div className={`
        w-full transition-all duration-300
        ${isScrolled ? 'bg-white/90 shadow-lg backdrop-blur-md' : 'bg-white/50 backdrop-blur-sm'}
      `}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-indigo-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-200" />
                <FiYoutube className="text-3xl text-indigo-600 relative z-10" />
              </div>
              <span className="text-2xl font-clash font-bold bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
                RecFix
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {/* Nav Links */}
              <div className="flex items-center bg-gray-50 rounded-full p-1.5">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="relative px-4 py-2"
                  >
                    <span className={`
                      relative z-10 font-cabinet transition-colors duration-200
                      ${isActive(item.path) ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'}
                    `}>
                      {item.label}
                    </span>
                    {isActive(item.path) && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-white rounded-full shadow-sm"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                ))}
              </div>

              {/* CTA Button */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-75 blur group-hover:opacity-100 transition duration-200" />
                <motion.button
                  onClick={() => navigate('/guide')}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative px-6 py-2.5 bg-white rounded-full font-cabinet flex items-center gap-2 text-gray-900"
                >
                  <HiOutlineLightningBolt className="text-xl text-indigo-600" />
                  <span>Install Extension</span>
                </motion.button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="md:hidden relative w-10 h-10 flex items-center justify-center"
              onClick={toggleMenu}
            >
              <div className="absolute inset-0 bg-gray-100 rounded-full opacity-0 hover:opacity-100 transition-opacity" />
              <motion.div
                animate={isMenuOpen ? "open" : "closed"}
                variants={{
                  open: { rotate: 180 },
                  closed: { rotate: 0 }
                }}
                transition={{ duration: 0.2 }}
                className="relative w-6 h-6"
              >
                <motion.span
                  className="absolute top-2.5 left-0 w-6 h-0.5 bg-gray-600 rounded-full"
                  variants={{
                    open: { rotate: 45, y: 0 },
                    closed: { rotate: 0, y: -4 }
                  }}
                />
                <motion.span
                  className="absolute top-2.5 left-0 w-6 h-0.5 bg-gray-600 rounded-full"
                  variants={{
                    open: { opacity: 0 },
                    closed: { opacity: 1 }
                  }}
                />
                <motion.span
                  className="absolute top-2.5 left-0 w-6 h-0.5 bg-gray-600 rounded-full"
                  variants={{
                    open: { rotate: -45, y: 0 },
                    closed: { rotate: 0, y: 4 }
                  }}
                />
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-gray-100"
            >
              <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className={`
                        block px-4 py-3 rounded-xl font-cabinet transition-all duration-200
                        ${isActive(item.path) 
                          ? 'bg-indigo-50 text-indigo-600' 
                          : 'text-gray-600 hover:bg-gray-50'
                        }
                      `}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pt-2"
                >
                  <div className="relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl opacity-75 blur" />
                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      onClick={() => navigate('/guide')}
                      className="relative w-full bg-white px-6 py-3 rounded-xl font-cabinet flex items-center justify-center gap-2"
                    >
                      <HiOutlineLightningBolt className="text-xl text-indigo-600" />
                      Add to Chrome
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

// Page wrapper for transitions
const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      {children}
    </motion.div>
  )
}

function App() {
  const location = useLocation()
  const isShowcasePage = location.pathname === '/showcase'
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {!isShowcasePage && <ScrollProgress />}
      {!isShowcasePage && <Navigation />}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/guide" element={<PageWrapper><Guide /></PageWrapper>} />
          <Route path="/faq" element={<PageWrapper><FAQ /></PageWrapper>} />
          <Route path="/feedback" element={<PageWrapper><Feedback /></PageWrapper>} />
          <Route path="/privacy" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />
          <Route path="/terms" element={<PageWrapper><Terms /></PageWrapper>} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </AnimatePresence>
      {!isShowcasePage && <ScrollToTop />}
    </div>
  )
}

// Wrap the app with Router
const AppWrapper = () => (
  <Router>
    <App />
  </Router>
)

export default AppWrapper
