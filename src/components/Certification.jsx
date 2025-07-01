import React, { useState } from 'react'

const certificates = [
  {
    title: "Data Science with Artificial Intelligence",
    issuer: "Upgrad Campus",
    date: "November 2022",
    image: "/assets/certificates/Upgrad.jpg", // Place in public/assets/certificates/
  },
  {
    title: "Postman API Fundamentals Skill Badge",
    issuer: "Postman",
    date: "January 2024",
    image: "/assets/certificates/Postman.jpg",
  },
  {
    title: "SQL Workshop",
    issuer: "Skillslash",
    date: "April 2022",
    image: "/assets/certificates/Skillslash.jpg",
  },
  {
    title: "Workshop on Building REST API using spring boot",
    issuer: "FirstBit Solutions",
    date: "21st June 2025",
    image: "/assets/certificates/Firstbit Solution.jpg",
  }
];

const Certification = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <h4 className="text-3xl font-bold text-center text-cyan-400 mb-12 tracking-wide">Certification</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 px-2">
        {certificates.map((cert, idx) => (
          <div
            key={idx}
            className="bg-slate-800 rounded-lg p-4 sm:p-6 border border-cyan-100 shadow hover:shadow-lg transition flex flex-col items-center cursor-pointer"
            onClick={() => setSelected(cert)}
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-40 sm:h-48 object-cover rounded mb-4 border border-cyan-200"
            />
            <h5 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-2 text-center">{cert.title}</h5>
            <p className="text-slate-300 mb-2 text-center text-sm sm:text-base">Certified by {cert.issuer}</p>
            <p className="text-slate-300 mb-2 text-center text-sm sm:text-base">Date: {cert.date}</p>
          </div>
        ))}
      </div>

      {/* Modal for large view */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 px-2">
          <div className="relative bg-slate-900 rounded-lg p-2 sm:p-4 max-w-2xl w-full flex flex-col items-center">
            <button
              className="absolute top-2 right-2 text-cyan-400 text-2xl"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <img
              src={selected.image}
              alt={selected.title}
              className="w-full max-h-[60vh] object-contain rounded mb-4 border border-cyan-200"
            />
            <h5 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-2 text-center">{selected.title}</h5>
            <p className="text-slate-300 mb-2 text-center text-sm sm:text-base">Certified by {selected.issuer}</p>
            <p className="text-slate-300 mb-2 text-center text-sm sm:text-base">Date: {selected.date}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Certification
