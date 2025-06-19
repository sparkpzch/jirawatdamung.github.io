"use client";

import Image from "next/image";
import { Linkedin, Github, Mail, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);

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

    return () => {
      if (currentAboutRef) {
        observer.unobserve(currentAboutRef);
      }
      if (currentSkillsRef) {
        observer.unobserve(currentSkillsRef);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6">
        <div className="text-2xl font-bold text-orange-500">LOGO</div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-orange-500 hover:text-orange-400">
            Home
          </a>
          <a href="#skills" className="text-gray-300 hover:text-white">
            Services
          </a>
          <a href="#about" className="text-gray-300 hover:text-white">
            About me
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Portfolio
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Contact me
          </a>
        </div>
        <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg font-medium">
          Hire Me
        </button>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-8 py-16 max-w-7xl mx-auto">
        {/* Left Side - Text Content */}
        <div className="flex-1 space-y-8">
          <div>
            <p className="text-gray-400 text-lg mb-2">Hi I am</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-200 mb-4">
              Mahmood Fazile
            </h1>
            <h2 className="text-4xl lg:text-6xl font-bold text-orange-500">
              UI/UX designer
            </h2>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="p-3 border border-gray-600 rounded-full hover:border-orange-500 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="p-3 border border-gray-600 rounded-full hover:border-orange-500 transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg font-medium">
              Hire Me
            </button>
            <button className="border border-gray-600 hover:border-gray-400 px-8 py-3 rounded-lg font-medium">
              Download CV
            </button>
          </div>
        </div>

        {/* Right Side - Profile Image */}
        <div className="flex-1 flex justify-center lg:justify-end mt-12 lg:mt-0">
          <div className="relative">
            <div className="w-80 h-96 bg-gray-700 rounded-lg overflow-hidden">
              <Image
                src="/pictures/profile.png"
                alt="Profile"
                width={320}
                height={384}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="px-8 pb-16">
        <div className="flex flex-col md:flex-row justify-start space-y-8 md:space-y-0 md:space-x-16 max-w-7xl mx-auto">
          <div className="text-center md:text-left">
            <div className="text-4xl font-bold text-orange-500 mb-2">5+</div>
            <div className="text-gray-300">Experiences</div>
          </div>
          <div className="text-center md:text-left">
            <div className="text-4xl font-bold text-orange-500 mb-2">20+</div>
            <div className="text-gray-300">Project done</div>
          </div>
          <div className="text-center md:text-left">
            <div className="text-4xl font-bold text-orange-500 mb-2">80+</div>
            <div className="text-gray-300">Happy Clients</div>
          </div>
        </div>
      </div>

      {/* About Me Section with Extended Reversible Progressive Reveal */}
      <section
        id="about"
        ref={aboutRef}
        className="min-h-screen bg-black px-8 py-16"
      >
        <div className="max-w-7xl mx-auto">
          {/* Title with longer reversible fade in/out */}
          <div className="text-center mb-16">
            <h2
              className={`text-5xl font-bold text-white mb-4 transition-all duration-[1200ms] ease-in-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-16"
              }`}
            >
              About Me
            </h2>
            <p
              className={`text-gray-400 text-lg transition-all duration-[1400ms] ease-in-out ${
                isVisible
                  ? "opacity-100 translate-y-0 delay-300"
                  : "opacity-0 -translate-y-12 delay-100"
              }`}
            >
              User Interface And User Experience And Also Video Editing
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Side - Image with longer reversible slide */}
            <div className="flex-1">
              <div
                className={`relative transition-all duration-[1600ms] ease-in-out ${
                  isVisible
                    ? "opacity-100 translate-x-0 scale-100 delay-500"
                    : "opacity-0 -translate-x-32 scale-95 delay-200"
                }`}
              >
                <Image
                  src="/pictures/aboutme.png"
                  alt="About Me"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Right Side - Text Content with extended reversible staggered reveal */}
            <div className="flex-1 space-y-6">
              {/* First paragraph */}
              <div
                className={`transition-all duration-[1500ms] ease-in-out ${
                  isVisible
                    ? "opacity-100 translate-x-0 delay-700"
                    : "opacity-0 translate-x-24 delay-300"
                }`}
              >
                <p className="text-gray-300 text-lg leading-relaxed">
                  A software engineer, the modern-day architect of digital
                  realms, navigates the ethereal landscapes of code, sculpting
                  intangible structures that shape our technological world. With
                  fingers poised over keyboards like virtuoso pianists, they
                  compose symphonies of logic, their minds a labyrinth of
                  algorithms and solutions.
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
                <p className="text-gray-300 text-lg leading-relaxed">
                  Their canvas is a screen, a vast expanse where lines of code
                  dance in intricate patterns, weaving the fabric of programs
                  and applications. Each keystroke is a brushstroke, crafting
                  intricate architectures and breathing life into innovative
                  designs.
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
                <p className="text-gray-300 text-lg leading-relaxed">
                  In this digital atelier, they don the mantle of problem
                  solvers, confronting bugs and glitches like valiant knights in
                  an ever-evolving quest for perfection. Debugging becomes a
                  noble pursuit, unraveling the mysteries hidden within the
                  tangled webs of code.
                </p>
              </div>

              {/* Download CV Button */}
              <div
                className={`pt-8 transition-all duration-[1400ms] ease-in-out ${
                  isVisible
                    ? "opacity-100 translate-y-0 scale-100 delay-1300"
                    : "opacity-0 translate-y-16 scale-95 delay-600"
                }`}
              >
                <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg font-medium transition-colors duration-300">
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills/Services Section with Progressive Reveal */}
      <section
        id="skills"
        ref={skillsRef}
        className="min-h-screen bg-gray-800 px-8 py-16"
      >
        <div className="max-w-7xl mx-auto">
          {/* Title with fade in/out */}
          <div className="text-center mb-16">
            <h2
              className={`text-5xl font-bold text-white mb-4 transition-all duration-[1200ms] ease-in-out ${
                skillsVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-16"
              }`}
            >
              My Services
            </h2>
            <p
              className={`text-gray-400 text-lg transition-all duration-[1400ms] ease-in-out ${
                skillsVisible
                  ? "opacity-100 translate-y-0 delay-300"
                  : "opacity-0 -translate-y-12 delay-100"
              }`}
            >
              What I offer to help bring your ideas to life
            </p>
          </div>

          {/* Services Grid with Staggered Animation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div
              className={`bg-gray-700 p-8 rounded-lg text-center transition-all duration-[1200ms] ease-in-out ${
                skillsVisible
                  ? "opacity-100 translate-y-0 scale-100 delay-500"
                  : "opacity-0 translate-y-12 scale-95"
              }`}
            >
              <div className="text-orange-500 text-6xl mb-6">
                <svg
                  className="w-16 h-16 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-orange-500 mb-4">
                App Design
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet
                consectetur
              </p>
            </div>

            {/* Service Card 2 */}
            <div
              className={`bg-gray-700 p-8 rounded-lg text-center transition-all duration-[1200ms] ease-in-out ${
                skillsVisible
                  ? "opacity-100 translate-y-0 scale-100 delay-700"
                  : "opacity-0 translate-y-12 scale-95"
              }`}
            >
              <div className="text-orange-500 text-6xl mb-6">
                <svg
                  className="w-16 h-16 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-orange-500 mb-4">
                Web Design
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet
                consectetur
              </p>
            </div>

            {/* Service Card 3 */}
            <div
              className={`bg-gray-700 p-8 rounded-lg text-center transition-all duration-[1200ms] ease-in-out ${
                skillsVisible
                  ? "opacity-100 translate-y-0 scale-100 delay-900"
                  : "opacity-0 translate-y-12 scale-95"
              }`}
            >
              <div className="text-orange-500 text-6xl mb-6">
                <svg
                  className="w-16 h-16 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-orange-500 mb-4">
                Video Editing
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet
                consectetur
              </p>
            </div>

            {/* Service Card 4 */}
            <div
              className={`bg-gray-700 p-8 rounded-lg text-center transition-all duration-[1200ms] ease-in-out ${
                skillsVisible
                  ? "opacity-100 translate-y-0 scale-100 delay-1100"
                  : "opacity-0 translate-y-12 scale-95"
              }`}
            >
              <div className="text-orange-500 text-6xl mb-6">
                <svg
                  className="w-16 h-16 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-orange-500 mb-4">
                UX Research
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet
                consectetur
              </p>
            </div>

            {/* Service Card 5 */}
            <div
              className={`bg-gray-700 p-8 rounded-lg text-center transition-all duration-[1200ms] ease-in-out ${
                skillsVisible
                  ? "opacity-100 translate-y-0 scale-100 delay-1300"
                  : "opacity-0 translate-y-12 scale-95"
              }`}
            >
              <div className="text-orange-500 text-6xl mb-6">
                <svg
                  className="w-16 h-16 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-orange-500 mb-4">
                Brand Identity
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet
                consectetur
              </p>
            </div>

            {/* Service Card 6 */}
            <div
              className={`bg-gray-700 p-8 rounded-lg text-center transition-all duration-[1200ms] ease-in-out ${
                skillsVisible
                  ? "opacity-100 translate-y-0 scale-100 delay-1500"
                  : "opacity-0 translate-y-12 scale-95"
              }`}
            >
              <div className="text-orange-500 text-6xl mb-6">
                <svg
                  className="w-16 h-16 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-orange-500 mb-4">
                Consulting
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet
                consectetur
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Logo */}
          <div className="text-center mb-12">
            <div className="text-4xl font-bold text-orange-500 mb-8">LOGO</div>
          </div>

          {/* Navigation Links */}
          <div className="flex justify-center space-x-8 mb-12">
            <a
              href="#"
              className="text-orange-500 hover:text-orange-400 transition-colors"
            >
              Home
            </a>
            <a
              href="#skills"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About me
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact me
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="#"
              className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
            >
              <Github size={20} />
            </a>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12 mb-12">
            <div className="flex items-center space-x-3 text-gray-300">
              <Mail size={20} />
              <span>Mahmood.fazile7005@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300">
              <Phone size={20} />
              <span>+93 729 107 005</span>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 mb-8"></div>

          {/* Copyright */}
          <div className="text-center text-gray-400">
            <p>Designed by @mahmood.fazile UI/UX designer</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
