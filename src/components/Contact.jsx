import React, { useRef, useState } from 'react'
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaUser, FaRegCommentDots,FaLocationArrow } from 'react-icons/fa'

const Contact = () => {
  const formRef = useRef();
  const [notification, setNotification] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;

    // Construct mailto link
    const mailtoLink = `mailto:vivekanandagiri@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;

    window.location.href = mailtoLink;

    setNotification('Email client opened. Please send your email.');
    setTimeout(() => setNotification(''), 4000);
    form.reset();
  };

  return (
    <div className="bg-slate-900 text-slate-300 p-4 rounded-lg shadow-lg shadow-cyan-400/70 mx-4 mt-10 mb-20 lg:mx-64">
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-cyan-400">
        <FaRegCommentDots className="text-cyan-400" /> Contact Me
      </h2>
      {notification && (
        <div className="mb-4 px-4 py-2 rounded bg-cyan-700 text-white text-center font-semibold shadow">
          {notification}
        </div>
      )}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Contact Info */}
        <div className="flex-1 bg-slate-800 rounded-lg p-6 shadow-md mb-6 lg:mb-0 flex flex-col justify-center">
          <h3 className="text-xl font-semibold mb-4 text-cyan-300">Get in Touch</h3>
          <div className="flex items-center gap-3 mb-3">
            <FaEnvelope className="text-cyan-400" />
            <span className="text-slate-200">vivekanandagiri@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <FaLinkedin className="text-cyan-400" />
            <a
              href="https://www.linkedin.com/in/vivekanandagiri/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 hover:underline"
            >
              linkedin
            </a>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <FaGithub className="text-cyan-400" />
            <a
              href="https://github.com/vivekanandagiri"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 hover:underline"
            >
              github
            </a>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <FaInstagram className="text-cyan-400" />
            <a
              href="https://instagram.com/vivekanandagiri"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 hover:underline"
            >
              instagram
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaLocationArrow className="text-cyan-400" />
            <a
              href="https://www.google.com/maps/place/Bhubaneswar,+Odisha/@20.300807,85.6556413,52275m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a1909d2d5170aa5:0xfc580e2b68b33fa8!8m2!3d20.2959847!4d85.8246101!16zL20vMDNjenFz?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 hover:underline"
            >
              Bhubaneswar, Odisha, India
            </a>
          </div>
        </div>
        {/* Contact Form */}
        <form ref={formRef} onSubmit={handleSubmit} className="flex-1 bg-slate-800 p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-slate-400 mb-2" htmlFor="name">
              <span className="flex items-center gap-2"><FaUser /> Name</span>
            </label>
            <input name="name" className="w-full p-2 bg-slate-700 border border-cyan-400 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400" type="text" id="name" required />
          </div>
          <div className="mb-4">
            <label className="block text-slate-400 mb-2" htmlFor="email">
              <span className="flex items-center gap-2"><FaEnvelope /> Email</span>
            </label>
            <input name="email" className="w-full p-2 bg-slate-700 border border-cyan-400 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400" type="email" id="email" required />
          </div>
          <div className="mb-4">
            <label className="block text-slate-400 mb-2" htmlFor="subject">
              <span className="flex items-center gap-2"><FaRegCommentDots /> Subject</span>
            </label>
            <input name="subject" className="w-full p-2 bg-slate-700 border border-cyan-400 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400" type="text" id="subject" required />
          </div>
          <div className="mb-4">
            <label className="block text-slate-400 mb-2" htmlFor="message">
              <span className="flex items-center gap-2"><FaRegCommentDots /> Message</span>
            </label>
            <textarea name="message" className="w-full p-2 bg-slate-700 border border-cyan-400 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400" id="message" rows="4" required></textarea>
          </div>
          <button className="bg-cyan-400 text-slate-800 px-6 py-2 rounded hover:bg-cyan-500 font-bold transition" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
