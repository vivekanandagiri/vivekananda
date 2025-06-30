import React, { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";

const navLinks = [
  { id: 'Home', label: 'Home'  },
  { id: 'About', label: 'About' },
  { id: 'Portfolio', label: 'Portfolio' },
  { id: 'Contact', label: 'Contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      // Section highlight logic
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPos = window.scrollY + 120; // Offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on link click (mobile)
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-200
        ${scrolled ? 'backdrop-blur-md bg-slate-900/70 border-b border-cyan-900 shadow' : 'bg-transparent'}
      `}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center lg:px-16">
        <div className="text-2xl font-bold text-cyan-400">Vivekananda Giri</div>
        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map(link => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`transition-colors font-semibold px-2 py-1 rounded
                  ${activeSection === link.id
                    ? 'text-yellow-400 bg-cyan-900/70 underline underline-offset-8 decoration-2 decoration-cyan-400'
                    : 'text-slate-300 hover:text-cyan-400'
                  }
                `}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Desktop Socials */}
        <div className='hidden md:flex items-center justify-center space-x-4'>
          <a href='https://www.linkedin.com/in/vivekanandagiri/' target='_blank' rel='noopener noreferrer'>
            <FaLinkedin />
          </a>
          <a href='https://github.com/vivekanandagiri' target='_blank' rel='noopener noreferrer'>
            <FaGithub />
          </a>
          <a href='https://x.com/im_vivekananda' target='_blank' rel='noopener noreferrer'>
            <FaSquareXTwitter />
          </a>
          <a href='https://www.instagram.com/im_vivekananda/' target='_blank' rel='noopener noreferrer'>
            <FaInstagram />
          </a>
        </div>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-cyan-400 text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed inset-0 z-50 bg-slate-900/95 flex flex-col items-center justify-center gap-10 md:hidden">
            <button
              className="absolute top-6 right-6 text-3xl text-cyan-400"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
            <ul className="flex flex-col gap-8 text-center">
              {navLinks.map(link => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={handleLinkClick}
                    className={`transition-colors font-semibold text-2xl px-2 py-1 rounded
                      ${activeSection === link.id
                        ? 'text-yellow-400 bg-cyan-900/100 underline underline-offset-8 decoration-2 decoration-cyan-400'
                        : 'text-slate-300 hover:text-cyan-400'
                      }
                    `}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className='flex items-center justify-center space-x-6 mt-6'>
              <a href='https://www.linkedin.com/in/vivekanandagiri/' target='_blank' rel='noopener noreferrer'>
                <FaLinkedin size={28} />
              </a>
              <a href='https://github.com/vivekanandagiri' target='_blank' rel='noopener noreferrer'>
                <FaGithub size={28} />
              </a>
              <a href='https://x.com/im_vivekananda' target='_blank' rel='noopener noreferrer'>
                <FaSquareXTwitter size={28} />
              </a>
              <a href='https://www.instagram.com/im_vivekananda/' target='_blank' rel='noopener noreferrer'>
                <FaInstagram size={28} />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;