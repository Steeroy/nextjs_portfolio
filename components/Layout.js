import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import About from './About';
import Skills from './Skills';

export default function Layout() {
  const [activeSection, setActiveSection] = useState('about');

  function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
      behavior: 'smooth',
    });
  }

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      const rect = aboutSection.getBoundingClientRect();
      if (rect.top <= 0 && rect.bottom > 0) {
        setActiveSection('about');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Siyanda Mvunyiswa</title>
        <meta
          name="Siyanda Mvunyiswa's Portfolio"
          content="Portfolio website for Siyanda Mvunyiswa"
        />
        <link rel="icon" href="/images/logo.png" />
      </Head>

      <div className="main-container">
        <div className="main-section flex flex-col lg:flex-row">
          <div className="left-section w-full lg:w-5/12">
            <div className="left-texts">
              <h1 className="text-5xl font-bold font-poppins">
                Siyanda
                <br />
                Mvunyiswa
              </h1>

              <h5 className="text-2xl font-medium font-inter">
                Fullstack Developer
              </h5>
              <p className="text-base font-normal font-inter">
                I design great web and mobile app
                <br /> experiences.
              </p>

              <div className="buttons flex">
                <button type="button" className="primary">
                  <span className="text-sm font-medium font-inter">
                    Contact Me
                  </span>
                  <Icon icon="ph:arrow-right-bold" />
                </button>
                <button type="button" className="secondary">
                  <span className="text-sm font-medium font-inter">Resume</span>
                  <Icon icon="ic:round-save-alt" />
                </button>
              </div>
            </div>

            <div className="nav-socials flex flex-col">
              <div className="nav-items flex">
                <a
                  href="#about"
                  className={
                    activeSection === 'about'
                      ? 'active font-inter text-sm'
                      : 'font-inter text-sm'
                  }
                  onClick={() => scrollToSection('about')}
                >
                  ABOUT
                </a>
                <a
                  href="#skills"
                  className={
                    activeSection === 'skills'
                      ? 'active font-inter text-sm'
                      : 'font-inter text-sm'
                  }
                  onClick={() => scrollToSection('skills')}
                >
                  SKILLS
                </a>
                <a
                  href="#projects"
                  className={
                    activeSection === 'projects'
                      ? 'active font-inter text-sm'
                      : 'font-inter text-sm'
                  }
                  onClick={() => scrollToSection('projects')}
                >
                  PROJECTS
                </a>
              </div>

              <div className="socials flex">
                <a
                  href="https://github.com/Steeroy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon icon="mdi:github" />
                </a>
                <a
                  href="https://www.instagram.com/siyanda_mvunyiswa/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon icon="ri:instagram-fill" />
                </a>
                <a
                  href="https://twitter.com/Siyanda_Steeroy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon icon="ri:twitter-fill" />
                </a>
                <a
                  href="https://www.linkedin.com/in/siyanda-mvunyiswa-596654199/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon icon="ri:linkedin-fill" />
                </a>
                <a
                  href="https://dribbble.com/Steeroy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon icon="ri:dribbble-line" />
                </a>
              </div>
            </div>
          </div>
          <div className="right-section w-full lg:w-7/12">
            <About />
            <Skills />
          </div>
        </div>
      </div>
    </>
  );
}
