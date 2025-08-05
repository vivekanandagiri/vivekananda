import React, { useState, useEffect } from 'react';
import { HERO_CONTENT, HERO_TITLE } from '../constants'
import ProfileCard from '../ReactBits/Components/ProfileCard/ProfileCard'
import StarBorder from '../ReactBits/Animations/StarBorder/StarBorder'
import { TbExternalLink } from "react-icons/tb";
import { FiArrowUpCircle } from "react-icons/fi";

const TYPING_TEXTS = ["MCA Graduate", "Tech Enthusiast"];

const Hero = () => {
    const [showScroll, setShowScroll] = useState(false);
    const [displayText, setDisplayText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setShowScroll(window.scrollY > 500);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Typing effect logic
    useEffect(() => {
      let typingTimeout;
      const currentText = TYPING_TEXTS[textIndex];

      if (!isDeleting && charIndex < currentText.length) {
        typingTimeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 100);
      } else if (isDeleting && charIndex > 0) {
        typingTimeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 30);
      } else if (!isDeleting && charIndex === currentText.length) {
        typingTimeout = setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        typingTimeout = setTimeout(() => {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % TYPING_TEXTS.length);
        }, 300);
      }
      return () => clearTimeout(typingTimeout);
    }, [charIndex, isDeleting, textIndex]);


    return (
      <div className='border-b border-neutral-900 px-4 sm:px-8 md:px-16 lg:px-32 pb-4 lg:mb-35'>
        <div className="flex flex-col lg:flex-row flex-wrap">
          <div className='w-full lg:w-1/2'>
            <div className='flex flex-col justify-center items-center lg:items-start'>
              <h2 className='text-xl sm:text-2xl font-semibold tracking-tight lg:text-3xl text-center lg:text-left'>Namaste🙏, I am a..</h2>
              <h1 className='pb-8 sm:pb-12 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight lg:mt-12 animate-fade-in-down text-center lg:text-left'>
                {HERO_TITLE}
              </h1>
              <span className="typing-effect bg-gradient-to-r from-pink-400 via-slate-300 bg-clip-text text-2xl sm:text-3xl lg:text-4xl tracking-tight text-transparent block max-w-fit mx-auto lg:mx-0">
                {displayText}
                <span className="blinking-caret"> /</span>
              </span>
              <p className='my-2 max-w-2xl py-6 text-base sm:text-lg md:text-xl font-light tracking-tight text-center lg:text-left'>{HERO_CONTENT}</p>
              <span className='text-xl sm:text-2xl font-semibold tracking-tight mb-8 flex justify-center lg:justify-start'>
                <StarBorder
                  as="button"
                  className="custom-class"
                  color="cyan"
                  speed="5s"
                  onClick={() => window.open('https://www.linkedin.com/in/vivekanandagiri/', '_blank')}
                >
                  Connect With Me <TbExternalLink className="inline ml-2 text-2xl" />
                </StarBorder>
              </span>
              {!showScroll && (
                <div className="fixed left-1/2 bottom-6 z-40 -translate-x-1/2 flex flex-col items-center pointer-events-none select-none">
                  <svg
                    className="animate-bounce"
                    width="32"
                    height="32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 5v14M19 12l-7 7-7-7" stroke="rgb(34 211 238)" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-cyan-400 text-xs mt-1">Scroll Down</span>
                </div>
              )}
            </div>
          </div>
          <div className='w-full lg:w-1/2 lg:p-0 mt-10 lg:mt-0 flex justify-center'>
            <ProfileCard 
              name="Vivekananda Giri"
              title="Full Stack Developer"
              handle="im_vivekananda"
              status="Online"
              contactText="Contact Me"
              avatarUrl="/assets/VivekPhoto.jpg"
              showUserInfo={true}
              enableTilt={true}
              onContactClick={() => window.open('https://ig.me/m/im_vivekananda', '_blank')}
            />
          </div>
        </div>
      </div>
    )
}

export default Hero
