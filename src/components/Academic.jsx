import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidSchool } from "react-icons/bi";
import { FaGraduationCap } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";

const academicData = [
  {
    degree: "Master's Degree in Computer Applications (MCA)",
    year: "2022 - 2024",
    institution: "Odisha University of Agriculture and Technology (OUAT), Bhubaneswar, Odisha",
    location: "Bhubaneswar, Odisha",
    Description: "Studied computer science fundamentals, data structures, algorithms, and software engineering. Participated in various hackathons and coding competitions. Developed a capstone project on web application development using React and Node.js.",
    Achievements: "Led the team for the Cognizant DigitalNature Technoverse Hackathon and Successfully Completed the idea submission phase and selected for the final round. Led the College graphics designing team, organizing, and managing various design projects and events, enhanced the team’s creative output, and achieved the Best Volunteer Award.",
  },
  {
    degree: "Bachelor's Degree in Chemistry",
    year: "2018 - 2021",
    institution: "Utkal University, Bhubaneswar, Odisha",
    location: "Bhubaneswar, Odisha",
    Description: "Focused on organic and inorganic chemistry, with hands-on laboratory experience.",
    Achievements: "Graduated with a First Class Honours degree. Participated in various chemistry workshops and seminars, enhancing my understanding of chemical processes and laboratory techniques.",
  },
  {
    degree: "Intermediate in Science",
    year: "2016 - 2018",
    institution: "Dharanidhar Junior College, Keonjhar, Odisha",
    location: "Keonjhar, Odisha",
    Description: "Completed the Science stream with a focus on Physics, Chemistry, Mathematics, and Biology.",
    Achievements: "Attended various workshops and seminars on science topics, enhancing my knowledge and skills.",
  },
  {
    degree: "Matriculation (10th Grade)",
    year: "2013 - 2016",
    institution: "N.S. Police High School, Keonjhar, Odisha",
    location: "Keonjhar, Odisha",
    Description: "Completed the Matriculation with a focus on Science and Mathematics.",
    Achievements: "Secured a position in the top 10% of the class. Participated in various extracurricular activities, including science fairs and mathematics competitions. Also a member of Odisha Scout and Guide, participated in various social service activities and attended Various camp and leadership training programs.",
  },
];

const Academic = () => {
  return (
    <div>
      <h4 className="text-3xl font-bold text-center text-cyan-400 mb-12 tracking-wide">Academic Timeline</h4>
      <div className="relative border-l-4 border-cyan-400 ml-8 mb-20 pl-6">
        {academicData.map((item, idx) => (
          <div key={idx} className="mb-14 ml-6 relative group">
            {/* Timeline Dot */}
            <div className="absolute w-5 h-5 bg-gradient-to-tr from-cyan-400 to-blue-500 rounded-full -left-3 border-4 border-slate-900 shadow-lg group-hover:scale-110 transition"></div>
            {/* Card */}
            <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-xl p-8 border border-cyan-200 shadow-xl hover:shadow-cyan-400/30 transition-all duration-300 group-hover:scale-[1.03]">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <div className="text-cyan-300 font-semibold text-lg flex items-center">
                  <SlCalender className="inline mr-2" /> {item.year}
                </div>
                <div className="text-slate-400 flex items-center mt-2 md:mt-0">
                  <FaLocationDot className="inline mr-2" /> {item.location}
                </div>
              </div>
              <div className="text-xl font-bold mb-2 flex items-center text-cyan-200">
                <FaGraduationCap className="inline mr-2" /> {item.degree}
              </div>
              <div className="text-slate-300 mb-2 flex items-center">
                <BiSolidSchool className="inline mr-2" /> {item.institution}
              </div>
              <div className="text-slate-400 mt-2 text-base italic border-l-4 border-cyan-400 pl-4 py-2 bg-slate-900/60">
                {item.Description}
              </div>
              <div className="text-slate-200 mt-4 text-base">
                <span className='font-semibold text-cyan-300'>Achievement:</span>
                <span className="ml-2">{item.Achievements}</span>
              </div>
            </div>
          </div>
        ))}
        {/* Timeline End Dot */}
        <div className="absolute w-5 h-5 bg-gradient-to-tr from-cyan-400 to-blue-500 rounded-full -left-3 border-4 border-slate-900 shadow-lg bottom-0"></div>
      </div>
    </div>
  )
}

export default Academic