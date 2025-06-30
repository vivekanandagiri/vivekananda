import React, { useState } from 'react'


const certificates = [
  {
    title: "Data Science with Artificial Intelligence",
    issuer: "Upgrad Campus",
    date: "November 2022",
    image: "/src/assets/certificates/Upgrad.jpg", // Replace with your image path
  },
  {
    title: "Postman API Fundamentals Skill Badge",
    issuer: "Postman",
    date: "January 2024",
    image: "/src/assets/certificates/Postman.jpg", // Replace with your image path
  },
  {
    title: "SQL Workshop",
    issuer: "Skillslash",
    date: "April 2022",
    image: "/src/assets/certificates/Skillslash.jpg", // Replace with your image path
  },


];

const Certification = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div>
            <h4 className="text-3xl font-bold text-center text-cyan-400 mb-12 tracking-wide">Certification</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
        {certificates.map((cert, idx) => (
          <div
            key={idx}
            className="bg-slate-800 rounded-lg p-6 border border-cyan-100 shadow hover:shadow-lg transition flex flex-col items-center cursor-pointer"
            onClick={() => setSelected(cert)}
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-48 object-cover rounded mb-4 border border-cyan-200"
            />
            <h5 className="text-xl font-semibold text-cyan-400 mb-2">{cert.title}</h5>
            <p className="text-slate-300 mb-2">Certified by {cert.issuer}</p>
            <p className="text-slate-300 mb-2">Date: {cert.date}</p>
          </div>
        ))}
      </div>

      {/* Modal for large view */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <div className="relative bg-slate-900 rounded-lg p-4 max-w-2xl w-full flex flex-col items-center">
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
              className="w-full max-h-[70vh] object-contain rounded mb-4 border border-cyan-200"
            />
            <h5 className="text-xl font-semibold text-cyan-400 mb-2">{selected.title}</h5>
            <p className="text-slate-300 mb-2">Certified by {selected.issuer}</p>
            <p className="text-slate-300 mb-2">Date: {selected.date}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Certification
