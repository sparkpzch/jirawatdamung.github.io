"use client";

import Image from "next/image";
import { Linkedin, Github, Mail, Phone, ArrowUp, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Smooth scroll function
  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setMobileMenuOpen(false);
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (mobileMenuOpen && !target.closest(".mobile-menu-container")) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === aboutRef.current) {
            setIsVisible(entry.isIntersecting);
          }
          if (entry.target === skillsRef.current) {
            setSkillsVisible(entry.isIntersecting);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    const currentAboutRef = aboutRef.current;
    const currentSkillsRef = skillsRef.current;

    if (currentAboutRef) {
      observer.observe(currentAboutRef);
    }
    if (currentSkillsRef) {
      observer.observe(currentSkillsRef);
    }

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (currentAboutRef) {
        observer.unobserve(currentAboutRef);
      }
      if (currentSkillsRef) {
        observer.unobserve(currentSkillsRef);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation with Mobile Menu */}
      <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 lg:py-6 relative z-50">
        <div className="flex-shrink-0">
          <Image
            src="https://res.cloudinary.com/dirmb9zsf/image/upload/v1750297438/LOGO_bmuq9b.png"
            alt="Logo"
            width={120}
            height={120}
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-white hover:text-orange-500 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-6 xl:space-x-8">
          <a
            href="#"
            className="text-orange-500 hover:text-orange-400 cursor-pointer transition-colors"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-300 hover:text-white cursor-pointer transition-colors"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo("about");
            }}
          >
            About me
          </a>
          <a
            href="#skills"
            className="text-gray-300 hover:text-white cursor-pointer transition-colors"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo("skills");
            }}
          >
            Services
          </a>
          <a
            href=""
            className="text-gray-300 hover:text-white transition-colors"
          >
            Portfolio ( Coming Soon )
          </a>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`mobile-menu-container lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
            mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Menu Content */}
          <div
            className={`absolute top-0 right-0 h-full w-64 sm:w-80 bg-gray-800 transform transition-transform duration-300 ease-in-out ${
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="p-6 space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-orange-500">Menu</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-white hover:text-orange-500"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-4">
                <a
                  href="#"
                  className="block text-orange-500 hover:text-orange-400 py-2 text-lg transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    setMobileMenuOpen(false);
                  }}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="block text-gray-300 hover:text-white py-2 text-lg transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScrollTo("about");
                  }}
                >
                  About me
                </a>
                <a
                  href="#skills"
                  className="block text-gray-300 hover:text-white py-2 text-lg transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScrollTo("skills");
                  }}
                >
                  Services
                </a>
                <a
                  href=""
                  className="block text-gray-300 hover:text-white py-2 text-lg transition-colors"
                >
                  Portfolio(Coming Soon)
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content with Better Mobile Layout and Animations */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-7xl mx-auto gap-8 lg:gap-12 xl:gap-16">
        {/* Left Side - Text Content with Staggered Animation */}
        <div className="flex-1 space-y-6 sm:space-y-8 text-center lg:text-left max-w-2xl lg:max-w-none">
          <div>
            <p className="text-gray-400 text-sm sm:text-base lg:text-lg mb-2 opacity-0 translate-y-4 animate-[fadeInUp_1s_ease-out_0.2s_forwards]">
              Hi I am
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-200 mb-2 sm:mb-4 leading-tight opacity-0 translate-y-6 animate-[fadeInUp_1s_ease-out_0.4s_forwards]">
              Jirawat Damung
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-orange-500 leading-tight opacity-0 translate-y-8 animate-[fadeInUp_1s_ease-out_0.6s_forwards]">
              Full Stack Developer
            </h2>
          </div>

          {/* Social Icons with Hover Animations */}
          <div className="flex justify-center lg:justify-start space-x-4 opacity-0 translate-y-4 animate-[fadeInUp_1s_ease-out_0.8s_forwards]">
            <a
              href="https://github.com/sparkpzch"
              className="p-2 sm:p-3 border border-gray-600 rounded-full hover:border-orange-500 hover:scale-110 hover:rotate-12 transition-all duration-300 transform"
            >
              <Github size={18} className="sm:w-5 sm:h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/jirawat-damung-023791343/"
              className="p-2 sm:p-3 border border-gray-600 rounded-full hover:border-orange-500 hover:scale-110 hover:rotate-12 transition-all duration-300 transform"
            >
              <Linkedin size={18} className="sm:w-5 sm:h-5" />
            </a>
          </div>

          {/* Action Buttons with Pulse Animation */}
          <div className="flex justify-center lg:justify-start opacity-0 translate-y-4 animate-[fadeInUp_1s_ease-out_1s_forwards]">
            <a
              href="https://drive.google.com/file/d/1yuvWomVUGukUpSNIOZSanHXZGgfOudni/view?usp=sharing"
              target="_blank"
              rel="Jirawat Damung CV"
              className="border border-gray-600 hover:border-gray-400 hover:bg-gray-800 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg font-medium inline-block text-center transition-all duration-300 text-sm sm:text-base w-full sm:w-auto max-w-xs hover:scale-105 hover:shadow-lg transform"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right Side - Profile Image with Slide Animation */}
        <div className="flex-1 flex justify-center lg:justify-end order-first lg:order-last">
          <div className="relative opacity-0 translate-x-8 animate-[slideInRight_1.2s_ease-out_0.3s_forwards]">
            <div className="w-48 h-60 sm:w-64 sm:h-80 md:w-72 md:h-88 lg:w-80 lg:h-96 xl:w-96 xl:h-[460px] bg-gray-700 rounded-lg overflow-hidden shadow-2xl hover:scale-105 hover:shadow-3xl transition-all duration-500 transform">
              <Image
                src="https://res.cloudinary.com/dirmb9zsf/image/upload/v1750293589/profile_bwhqxm.png"
                alt="Profile"
                width={384}
                height={460}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                priority
              />
            </div>
            {/* Floating Animation Background */}
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-transparent rounded-lg blur-xl animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Stats Section with Staggered Animation */}
      <div className="px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 lg:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
          <div className="text-center p-4 bg-gray-800 rounded-lg opacity-0 translate-y-8 animate-[fadeInUp_1s_ease-out_1.2s_forwards] hover:bg-gray-700 hover:scale-105 transition-all duration-300 transform">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-500 mb-2 animate-[countUp_2s_ease-out_1.5s_forwards]">
              2+
            </div>
            <div className="text-gray-300 text-sm sm:text-base">
              Years Experience
            </div>
          </div>
          <div className="text-center p-4 bg-gray-800 rounded-lg opacity-0 translate-y-8 animate-[fadeInUp_1s_ease-out_1.4s_forwards] hover:bg-gray-700 hover:scale-105 transition-all duration-300 transform">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-500 mb-2 animate-[countUp_2s_ease-out_1.7s_forwards]">
              0%
            </div>
            <div className="text-gray-300 text-sm sm:text-base">Money</div>
          </div>
          <div className="text-center p-4 bg-gray-800 rounded-lg opacity-0 translate-y-8 animate-[fadeInUp_1s_ease-out_1.6s_forwards] hover:bg-gray-700 hover:scale-105 transition-all duration-300 transform">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-500 mb-2 animate-[countUp_2s_ease-out_1.9s_forwards]">
              3th
            </div>
            <div className="text-gray-300 text-sm sm:text-base">
              Years University
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes countUp {
          from {
            transform: scale(0.8);
          }
          to {
            transform: scale(1);
          }
        }
      `}</style>

      {/* About Me Section with Progressive Reveal */}
      <section
        id="about"
        ref={aboutRef}
        className="min-h-screen bg-black px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16"
      >
        <div className="max-w-7xl mx-auto">
          {/* Title with longer reversible fade in/out */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 transition-all duration-[1200ms] ease-in-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-16"
              }`}
            >
              About Me
            </h2>
            <p
              className={`text-gray-400 text-base sm:text-lg transition-all duration-[1400ms] ease-in-out ${
                isVisible
                  ? "opacity-100 translate-y-0 delay-300"
                  : "opacity-0 -translate-y-12 delay-100"
              }`}
            >
              Full Stack Developer and Game Developer with a passion for
              creating innovatives.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
            {/* Left Side - Image with longer reversible slide */}
            <div className="flex-1 w-full">
              <div
                className={`relative transition-all duration-[1600ms] ease-in-out ${
                  isVisible
                    ? "opacity-100 translate-x-0 scale-100 delay-500"
                    : "opacity-0 -translate-x-32 scale-95 delay-200"
                }`}
              >
                <Image
                  src="https://res.cloudinary.com/dirmb9zsf/image/upload/v1750293508/aboutme_vfnhvo.png"
                  alt="About Me"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover rounded-lg max-w-md sm:max-w-lg mx-auto lg:max-w-none"
                />
              </div>
            </div>

            {/* Right Side - Text Content with extended reversible staggered reveal */}
            <div className="flex-1 space-y-4 sm:space-y-6">
              {/* First paragraph */}
              <div
                className={`transition-all duration-[1500ms] ease-in-out ${
                  isVisible
                    ? "opacity-100 translate-x-0 delay-700"
                    : "opacity-0 translate-x-24 delay-300"
                }`}
              >
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  I&apos;m a third-year student at Bangkok University,
                  <br />
                  passionate about Full Stack Development and Game Development.
                  <br />I have hands-on experience with Unity, and I&apos;m
                  always eager to learn and improve my skills in both fields.
                </p>
              </div>

              {/* Second paragraph */}
              <div
                className={`transition-all duration-[1600ms] ease-in-out ${
                  isVisible
                    ? "opacity-100 translate-x-0 delay-900"
                    : "opacity-0 translate-x-28 delay-400"
                }`}
              >
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  My most significant experience comes from being a Research
                  Assistant for two years at the Center of Specialty Innovation
                  (CoSI). I contributed to the School of Survival (Roblox Game),
                  an impactful project that teaches students how to react to and
                  prevent school shootings.
                </p>
              </div>

              {/* Third paragraph */}
              <div
                className={`transition-all duration-[1700ms] ease-in-out ${
                  isVisible
                    ? "opacity-100 translate-x-0 delay-1100"
                    : "opacity-0 translate-x-32 delay-500"
                }`}
              >
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  I also worked on CoSI Drone-Pilot, a drone flight simulation
                  program. This project was developed in partnership with the
                  Defence Technology Institute (DTI), ensuring its training
                  modules are curriculum-aligned and highly credible. This
                  experience highlights my ability to work on complex projects
                  with respected partners.
                </p>
              </div>

              {/* Download CV Button */}
              <div
                className={`pt-4 sm:pt-8 transition-all duration-[1400ms] ease-in-out ${
                  isVisible
                    ? "opacity-100 translate-y-0 scale-100 delay-1300"
                    : "opacity-0 translate-y-16 scale-95 delay-600"
                }`}
              >
                <a
                  href="https://drive.google.com/file/d/1yuvWomVUGukUpSNIOZSanHXZGgfOudni/view?usp=sharing"
                  target="_blank"
                  rel="Jirawat Damung CV"
                  className="bg-orange-500 hover:bg-orange-600 px-6 sm:px-8 py-3 rounded-lg font-medium transition-colors duration-300 text-sm sm:text-base w-full sm:w-auto inline-block text-center"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills/Services Section with Progressive Reveal */}
      <section
        id="skills"
        ref={skillsRef}
        className="min-h-screen bg-gray-800 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16"
      >
        <div className="max-w-7xl mx-auto">
          {/* Title with fade in/out */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 transition-all duration-[1200ms] ease-in-out ${
                skillsVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-16"
              }`}
            >
              Proficiencies
            </h2>
            <p
              className={`text-gray-400 text-base sm:text-lg transition-all duration-[1400ms] ease-in-out ${
                skillsVisible
                  ? "opacity-100 translate-y-0 delay-300"
                  : "opacity-0 -translate-y-12 delay-100"
              }`}
            >
              Hobbies & Skills
            </p>
          </div>

          {/* Services Grid with Staggered Animation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Service Card 1 */}
            <div
              className={`bg-gray-700 p-6 sm:p-8 rounded-lg text-center transition-all duration-[1200ms] ease-in-out ${
                skillsVisible
                  ? "opacity-100 translate-y-0 scale-100 delay-500"
                  : "opacity-0 translate-y-12 scale-95"
              }`}
            >
              <div className="text-orange-500 text-5xl sm:text-6xl mb-4 sm:mb-6">
                <svg
                  className="w-12 h-12 sm:w-16 sm:h-16 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-orange-500 mb-3 sm:mb-4">
                App Design
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                My philosophy in app design centers on creating intuitive,
                engaging, and impactful user experiences. I believe that a truly
                effective app is not just functional, but also a pleasure to
                use, seamlessly integrating into users&apos;lives.
              </p>
            </div>

            {/* Service Card 2 */}
            <div
              className={`bg-gray-700 p-6 sm:p-8 rounded-lg text-center transition-all duration-[1200ms] ease-in-out ${
                skillsVisible
                  ? "opacity-100 translate-y-0 scale-100 delay-700"
                  : "opacity-0 translate-y-12 scale-95"
              }`}
            >
              <div className="text-orange-500 text-5xl sm:text-6xl mb-4 sm:mb-6">
                <svg
                  className="w-12 h-12 sm:w-16 sm:h-16 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-orange-500 mb-3 sm:mb-4">
                Web Design
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                My approach to web design mirrors my app design philosophy:
                it&apos;s all about crafting user-centric, visually compelling,
                and highly functional digital experiences. I aim to build
                websites that are not just aesthetically pleasing, but also
                intuitive to navigate, engaging to interact with, and effective
                in achieving their purpose.
              </p>
            </div>

            {/* Service Card 3 */}
            <div
              className={`bg-gray-700 p-6 sm:p-8 rounded-lg text-center transition-all duration-[1200ms] ease-in-out ${
                skillsVisible
                  ? "opacity-100 translate-y-0 scale-100 delay-900"
                  : "opacity-0 translate-y-12 scale-95"
              }`}
            >
              <div className="text-orange-500 text-5xl sm:text-6xl mb-4 sm:mb-6">
                <svg
                  className="w-12 h-12 sm:w-16 sm:h-16 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-orange-500 mb-3 sm:mb-4">
                Video Editing
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                My approach to video editing is centered on transforming raw
                footage into compelling narratives and visually stunning
                productions. I believe effective video editing goes beyond
                technical cuts; it&apos;s about understanding the story,
                enhancing emotions, and captivating the audience. I am
                proficient in industry-standard software, including Adobe
                Premiere Pro, Final Cut Pro, and DaVinci Resolve.
              </p>
            </div>

            {/* Service Card 4 */}
            <div
              className={`bg-gray-700 p-6 sm:p-8 rounded-lg text-center transition-all duration-[1200ms] ease-in-out ${
                skillsVisible
                  ? "opacity-100 translate-y-0 scale-100 delay-1100"
                  : "opacity-0 translate-y-12 scale-95"
              }`}
            >
              <div className="text-orange-500 text-5xl sm:text-6xl mb-4 sm:mb-6">
                <svg
                  className="w-12 h-12 sm:w-16 sm:h-16 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7 7h-2v2h2c1.1 0 2-.9 2-2s-.9-2-2-2zm-14 0c-1.1 0-2 .9-2 2s.9 2 2 2h2V9H5zm7 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-4c-2.2 0-4-1.8-4-4V8c0-2.2 1.8-4 4-4s4 1.8 4 4v6c0 2.2-1.8 4-4 4z" />
                  <circle cx="10" cy="10" r="1" />
                  <circle cx="14" cy="10" r="1" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-orange-500 mb-3 sm:mb-4">
                AI Development
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                My Approach to AI Development My engagement with AI development
                is driven by a fascination with its potential to solve complex
                problems and create intelligent systems that learn and adapt. My
                philosophy centers on building ethical, impactful, and scalable
                AI solutions that leverage data to generate real-world value.
              </p>
            </div>

            {/* Service Card 5 */}
            <div
              className={`bg-gray-700 p-6 sm:p-8 rounded-lg text-center transition-all duration-[1200ms] ease-in-out ${
                skillsVisible
                  ? "opacity-100 translate-y-0 scale-100 delay-1300"
                  : "opacity-0 translate-y-12 scale-95"
              }`}
            >
              <div className="text-orange-500 text-5xl sm:text-6xl mb-4 sm:mb-6">
                <svg
                  className="w-12 h-12 sm:w-16 sm:h-16 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  <path d="M3 12h2v-2H3v2zm16 0h2v-2h-2v2zM12 3v2h-2V3h2zm0 16v2h-2v-2h2z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-orange-500 mb-3 sm:mb-4">
                DevOps
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                My approach to DevOps is centered on streamlining the software
                development lifecycle (SDLC) to deliver high-quality products
                faster and more reliably. I believe in fostering a culture of
                collaboration, automation, and continuous improvement between
                development and operations teams.
              </p>
            </div>

            {/* Service Card 6 */}
            <div
              className={`bg-gray-700 p-6 sm:p-8 rounded-lg text-center transition-all duration-[1200ms] ease-in-out ${
                skillsVisible
                  ? "opacity-100 translate-y-0 scale-100 delay-1500"
                  : "opacity-0 translate-y-12 scale-95"
              }`}
            >
              <div className="text-orange-500 text-5xl sm:text-6xl mb-4 sm:mb-6">
                <svg
                  className="w-12 h-12 sm:w-16 sm:h-16 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-orange-500 mb-3 sm:mb-4">
                Consulting
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                My approach to consulting is centered on providing strategic
                insights and actionable solutions that empower individuals and
                organizations to achieve their goals. I believe effective
                consulting involves a deep understanding of challenges, a clear
                vision for the future, and a collaborative path to get there.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 p-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg transition-all duration-300 z-50 ${
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>

      {/* Footer with Better Mobile Layout */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Logo */}
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <div className="mb-4 flex justify-center items-center space-x-4">
              <Image
                src="https://res.cloudinary.com/dirmb9zsf/image/upload/v1750297438/LOGO_bmuq9b.png"
                alt="Logo"
                width={120}
                height={120}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32"
              />
              <Image
                src="https://res.cloudinary.com/dirmb9zsf/image/upload/v1750299557/BU_logo_vertical_White_x52ebq.png"
                alt="BU Logo"
                width={120}
                height={120}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16"
              />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 sm:flex sm:justify-center gap-3 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 lg:mb-12">
            <a
              href="#"
              className="text-orange-500 hover:text-orange-400 transition-colors text-sm sm:text-base text-center"
            >
              Home
            </a>
            <a
              href="#skills"
              className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base text-center"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base text-center"
            >
              About me
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base text-center"
            >
              Portfolio
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-4 mb-6 sm:mb-8 lg:mb-12">
            <a
              href="https://www.linkedin.com/in/jirawat-damung-023791343/"
              className="p-2 sm:p-3 bg-gray-700 rounded-full hover:bg-gray-600 hover:scale-110 transition-all duration-300"
            >
              <Linkedin size={18} className="sm:w-5 sm:h-5" />
            </a>
            <a
              href="https://github.com/sparkpzch"
              className="p-2 sm:p-3 bg-gray-700 rounded-full hover:bg-gray-600 hover:scale-110 transition-all duration-300"
            >
              <Github size={18} className="sm:w-5 sm:h-5" />
            </a>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-6 lg:space-x-12 mb-6 sm:mb-8 lg:mb-12">
            <div className="flex items-center space-x-2 sm:space-x-3 text-gray-300 text-xs sm:text-sm lg:text-base">
              <Mail size={16} className="sm:w-5 sm:h-5 flex-shrink-0" />
              <span className="break-all text-center sm:text-left">
                sparkpzch@gmail.com
              </span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3 text-gray-300 text-xs sm:text-sm lg:text-base">
              <Phone size={16} className="sm:w-5 sm:h-5 flex-shrink-0" />
              <span>(+66) 92 597 6004</span>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 mb-4 sm:mb-6"></div>

          {/* Copyright */}
          <div className="text-center text-gray-400 text-xs sm:text-sm">
            <p>Designed by @mahmood.fazile UI/UX designer</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
