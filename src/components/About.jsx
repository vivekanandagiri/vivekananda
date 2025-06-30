import React, { useEffect, useState } from 'react'
import { ABOUT_TEXT } from '../constants'

const stats = [
  {
    label: "Hackathons Participated",
    value: "5+",
  },
  {
    label: "Projects Completed",
    value: "8+",
  },
];

const GITHUB_USERNAME = "vivekanandagiri";

const About = () => {
  const [github, setGithub] = useState({ repos: 0, followers: 0 });

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
      .then(res => res.json())
      .then(data => {
        setGithub({
          repos: data.public_repos || 0,
          followers: data.followers || 0,
        });
      });
  }, []);

  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35 py-5'>
      <h1 className='my-10 text-center text-3xl md:text-4xl'>
        About <span className="text-neutral-500">Me</span>
      </h1>
      <div className='flex flex-wrap mx-4 md:mx-24'>
        <h2 className='text-justify mx-auto px-2 md:px-10 text-center text-base md:text-xl font-light tracking-tight'>
          {ABOUT_TEXT}
        </h2>
      </div>
      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 mt-8">
        <a
          href="/assets/Resume Vivekananda_Giri.pdf"
          download
          className="px-6 py-3 rounded-lg bg-cyan-600 text-white font-semibold shadow hover:bg-cyan-700 transition text-center"
        >
          Download CV
        </a>
        <a
          href="#Portfolio"
          className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition text-center"
        >
          View Projects
        </a>
      </div>
      {/* Statistics Cards */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-12">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-cyan-900 via-slate-900 to-blue-900 rounded-xl shadow-lg border border-cyan-300 px-6 py-6 md:px-10 md:py-8 flex flex-col items-center min-w-[140px] md:min-w-[220px] w-full sm:w-auto"
          >
            <span className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</span>
            <span className="text-base md:text-lg font-medium text-slate-200">{stat.label}</span>
          </div>
        ))}
        {/* GitHub Statistics */}
        <div className="bg-gradient-to-br from-gray-900 via-slate-900 to-blue-900 rounded-xl shadow-lg border border-cyan-300 px-6 py-6 md:px-10 md:py-8 flex flex-col items-center min-w-[140px] md:min-w-[220px] w-full sm:w-auto">
          <span className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{github.repos}</span>
          <span className="text-base md:text-lg font-medium text-slate-200">GitHub Public Repos</span>
          <span className="text-2xl md:text-3xl font-bold text-cyan-400 mt-4">{github.followers}</span>
          <span className="text-base md:text-lg font-medium text-slate-200">GitHub Followers</span>
        </div>
      </div>
    </div>
  )
}

export default About
