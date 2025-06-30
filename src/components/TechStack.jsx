import React from 'react'
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaNpm ,FaJava,FaPython, FaDatabase} from 'react-icons/fa'
import { SiJavascript, SiExpress, SiMongodb, SiTailwindcss, SiTypescript, SiVite,SiMysql, SiIntellijidea,SiJupyter  } from 'react-icons/si'
import { BiLogoVisualStudio } from "react-icons/bi";
import { DiBootstrap} from "react-icons/di";

const techs = [
  { name: 'React', icon: <FaReact className="text-cyan-400" size={40} /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" size={40} /> },
  { name: 'Express', icon: <SiExpress className="text-gray-300" size={40} /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-600" size={40} /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" size={40} /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-400" size={40} /> },
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" size={40} /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" size={40} /> },
  { name: 'Tailwind', icon: <SiTailwindcss className="text-cyan-300" size={40} /> },
  { name: 'Git', icon: <FaGitAlt className="text-red-400" size={40} /> },
  { name: 'GitHub', icon: <FaGithub className="text-gray-300" size={40} /> },
  { name: 'NPM', icon: <FaNpm className="text-red-500" size={40} /> },
  { name: 'Vite', icon: <SiVite className="text-purple-400" size={40} /> },
  {name:'Java', icon: <FaJava className="text-blue-500" size={40} />}, 
  {name:'Python', icon: <FaPython className="text-blue-500" size={40} />}, 
  {name:'Database', icon: <FaDatabase className="text-blue-500" size={40} />}, 
  {name:'Intellij', icon: <SiIntellijidea className="text-blue-500" size={40} />},
    {name:'Jupyter', icon: <SiJupyter className="text-yellow-500" size={40} />},
    {name:'Visual Studio', icon: <BiLogoVisualStudio className="text-blue-900" size={40} />},
    {name:'MySQL', icon: <SiMysql className="text-blue-500" size={40} />},
    {name:'Bootstrap', icon: <DiBootstrap className="text-blue-500" size={40} />},

]

const TechStack = () => {
  return (
    <div>
      <h4 className="text-3xl font-bold text-center text-cyan-400 mb-12 tracking-wide">Tech Stack</h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-6 ">
        {techs.map((tech, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-slate-800 rounded-lg p-4 border border-cyan-100 shadow hover:shadow-lg transition hover:bg-violet-700 hover:border-cyan-400"
          >
            {tech.icon}
            <span className="mt-2 text-cyan-200 font-semibold">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechStack
