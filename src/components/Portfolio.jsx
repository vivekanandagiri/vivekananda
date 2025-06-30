import React, { useState } from 'react'
import { FaFileCode } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import { BsStack } from "react-icons/bs";
import { IoSchool } from "react-icons/io5";
import Projects from './Projects';
import Academic from './Academic';
import Certification from './Certification';
import TechStack from './TechStack';

const sections = [
  {
    key: 'projects',
    icon: <FaFileCode className='text-cyan-400 mx-auto text-2xl mb-4' />,
    label: 'Projects',
    content: (
      <Projects />
    ),
  },
  {
    key: 'academic',
    icon: <IoSchool className='text-cyan-400 mx-auto text-2xl mb-4' />,
    label: 'Academic',
    content: (
        <Academic />
    ),
  },
  {
    key: 'certifications',
    icon: <GrCertificate className='text-cyan-400 mx-auto text-2xl mb-4' />,
    label: 'Certifications',
    content: (
      <>
        <Certification />
      </>
    ),
  },
  {
    key: 'techstack',
    icon: <BsStack className='text-cyan-400 mx-auto text-2xl mb-4' />,
    label: 'Tech Stack',
    content: (
      <>
        <TechStack /> 
      </>
    ),
  },
];

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('projects');

  return (
    <div>
      <div className='pb-10 pt-10'>
        <h1 className='my-10 text-center text-3xl sm:text-4xl text-cyan-400'>Portfolio Showcase</h1>
        <h2 className='mx-2 sm:mx-10 md:mx-20 lg:mx-40 text-center text-base sm:text-lg md:text-xl font-light text-slate-400'>
          Explore my journey through projects, certifications, and technical expertise. Each section<br className="hidden sm:block" /> represents a milestone in my continuous learning path.
        </h2>
      </div>
      <div>
        <div className='multibox-container mx-2 sm:mx-8 md:mx-16 lg:mx-24 my-6 sm:my-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 shadow-xl p-4 sm:p-6 rounded-lg bg-gradient-to-r from-purple-800 to-slate-900 border border-cyan-200'>
          {sections.map(section => (
            <div
              key={section.key}
              className={`multibox-item bg-slate-800 p-4 rounded-lg border border-cyan-100 cursor-pointer transition-all duration-200
                ${activeSection === section.key ? 'ring-2 ring-cyan-400 scale-105' : ''}
                hover:bg-cyan-900 hover:border-cyan-300`}
              onClick={() => setActiveSection(section.key)}
            >
              {section.icon}
              <h3 className='text-lg sm:text-xl font-bold text-center'>{section.label}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className='mx-2 sm:mx-8 md:mx-16 lg:mx-24 my-6 sm:my-10'>
        {sections.find(section => section.key === activeSection)?.content}
      </div>
    </div>
  )
}

export default Portfolio