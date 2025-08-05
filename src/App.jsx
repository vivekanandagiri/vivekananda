import React, { useState, useEffect } from 'react'
import { FiArrowUpCircle } from "react-icons/fi";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
//import ProfileCard from './ReactBits/Components/ProfileCard/ProfileCard'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'  

function SectionWrapper({ id, children }) {
  // Intersection Observer for reveal + zoom-out animation
  const ref = React.useRef();
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`
        transition-all duration-700 ease-out
        ${visible
          ? 'opacity-100 scale-100 translate-y-0'
          : 'opacity-0 scale-95 translate-y-12'}
      `}
    >
      {children}
    </section>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    // Simulate loading time (e.g., 1.5s)
    const timer = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-neutral-950">
        {/* Animated loader with gradient and spinning dots */}
        <div className="relative flex items-center justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-cyan-400 via-pink-400 to-purple-500 animate-spin-slow blur-[2px]" />
          <div className="absolute w-14 h-14 rounded-full bg-neutral-950 flex items-center justify-center">
            <div className="flex space-x-2">
              <span className="block w-3 h-3 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
              <span className="block w-3 h-3 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
              <span className="block w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
            </div>
          </div>
        </div>
        <span className="text-cyan-300 text-xl font-semibold tracking-wide animate-pulse">Welcome to My Portfolio...</span>
      </div>
    );
  }

  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <div className='fixed top-0 -z-10 h-full w-full'>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        </div>
      </div>
      <div className='container mx-auto px-8 pt-24'>
        <Navbar />
        <SectionWrapper id="Home">
          <Hero />
        </SectionWrapper>
        <SectionWrapper id="About">
          <About /> 
        </SectionWrapper>
        <SectionWrapper id="Portfolio">
          <Portfolio /> 
        </SectionWrapper>
        <SectionWrapper id="Contact">
          <Contact />
        </SectionWrapper>
        {/* Copyright */}
        <footer className="text-center text-sm text-slate-400 py-8 mt-10">
          &copy; {new Date().getFullYear()} Vivekananda Giri. All rights reserved.
        </footer>
      </div>
      <div>
        {showScroll && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 animate-bounce rounded-full p-2 flex flex-col items-center hover:bg-slate-800 transition"
            aria-label="Scroll to top"
          >
            <FiArrowUpCircle className="text-cyan-400" size={40} />
            <span className="text-cyan-400 text-xs mt-1">Go to Top</span>
          </button>
        )}
      </div>
    </div>
  )
}

export default App