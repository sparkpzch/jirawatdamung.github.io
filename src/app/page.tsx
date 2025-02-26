"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle window resize and check if mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Close sidebar when changing tab on mobile
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-gray-900 to-black text-white relative">
      {/* Mobile Menu Toggle Button */}
      <button
        onClick={() => setSidebarOpen(!isSidebarOpen)}
        className="md:hidden fixed top-4 left-4 z-40 p-2 rounded-lg bg-blue-600 text-white shadow-lg"
        aria-label="Toggle menu"
      >
        {isSidebarOpen ? (
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Left Sidebar Navigation */}
      <nav
        className={`${
          isMobile
            ? `fixed z-30 transform transition-transform duration-300 ease-in-out w-64 h-full ${
                isSidebarOpen ? "translate-x-0" : "-translate-x-full"
              }`
            : "w-64 fixed h-full"
        } bg-black/50 backdrop-blur-sm border-r border-white/10 flex flex-col items-center pt-10`}
      >
        <div className="mb-10">
          <Image
            src="/pictures/profile.png"
            alt="Profile Picture"
            width={80}
            height={80}
            className="rounded-full border-2 border-white/20"
          />
          <h3 className="mt-4 text-xl font-medium">Jirawat Damung</h3>
          <p className="text-sm text-gray-400">Fullstack Developer</p>
        </div>

        <div className="w-full">
          <button
            onClick={() => handleTabClick("home")}
            className={`flex w-full items-center px-6 py-3 text-white ${
              activeTab === "home"
                ? "bg-gradient-to-r from-blue-500 to-blue-700 font-medium"
                : "text-gray-300 hover:bg-white/5 transition-colors"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Home
          </button>
          <button
            onClick={() => handleTabClick("about")}
            className={`flex w-full items-center px-6 py-3 ${
              activeTab === "about"
                ? "bg-gradient-to-r from-blue-500 to-blue-700 font-medium text-white"
                : "text-gray-300 hover:bg-white/5 transition-colors"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            About
          </button>
          <button
            onClick={() => handleTabClick("services")}
            className={`flex w-full items-center px-6 py-3 ${
              activeTab === "services"
                ? "bg-gradient-to-r from-blue-500 to-blue-700 font-medium text-white"
                : "text-gray-300 hover:bg-white/5 transition-colors"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Services
          </button>
          <button
            onClick={() => handleTabClick("contact")}
            className={`flex w-full items-center px-6 py-3 ${
              activeTab === "contact"
                ? "bg-gradient-to-r from-blue-500 to-blue-700 font-medium text-white"
                : "text-gray-300 hover:bg-white/5 transition-colors"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Contact
          </button>
        </div>

        <div className="mt-auto mb-6 flex space-x-3">
          <a
            href="https://www.linkedin.com/in/jirawat-damung-023791343/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/10 hover:bg-blue-600 transition-colors"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            href="https://github.com/sparkpzch"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/10 hover:bg-gray-700 transition-colors"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.523 2 12 2z"
              />
            </svg>
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div
        className={`w-full transition-all duration-300 ${
          isMobile ? "ml-0" : "ml-64"
        }`}
      >
        {activeTab === "home" && (
          <main className="flex flex-col items-center justify-center w-full max-w-3xl px-6 py-12 text-center mx-auto min-h-screen">
            <div className="mb-8 relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-xl opacity-50"></div>
              <Image
                src="/pictures/profile.png"
                alt="Profile Picture"
                width={150}
                height={150}
                className="rounded-full border-4 border-white/20 relative z-10"
              />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Jirawat Damung
            </h1>

            <p className="text-xl text-gray-300 mt-4 mb-8">
              Fullstack Developer
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a
                href="https://www.linkedin.com/in/jirawat-damung-023791343/"
                className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-medium py-2.5 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/sparkpzch"
                className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black text-white font-medium py-2.5 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-gray-500/20"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>

            <div className="w-full max-w-md p-6 border border-white/10 rounded-xl backdrop-blur-sm bg-white/5 shadow-xl">
              <h2 className="text-2xl font-bold mb-4">About Me</h2>
              <p className="text-gray-300 text-left">
                Im a passionate fullstack developer with expertise in building
                modern web applications. I specialize in React, Next.js,
                TypeScript, and Node.js. I enjoy creating elegant solutions that
                deliver exceptional user experiences.
              </p>
            </div>
          </main>
        )}

        {activeTab === "about" && (
          <div className="flex flex-col items-center justify-center min-h-screen w-full max-w-3xl px-6 py-12 mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mt-8 md:mt-0">
              About Me
            </h1>

            <div className="w-full space-y-8">
              <div className="p-6 border border-white/10 rounded-xl backdrop-blur-sm bg-white/5 shadow-xl">
                <h2 className="text-2xl font-bold mb-4">My Journey</h2>
                <p className="text-gray-300">
                  With over X years of experience in software development, Ive
                  worked on a diverse range of projects from small startups to
                  enterprise applications. My passion for technology started
                  when I was young, and Ive been continuously learning and
                  growing ever since.
                </p>
              </div>

              <div className="p-6 border border-white/10 rounded-xl backdrop-blur-sm bg-white/5 shadow-xl">
                <h2 className="text-2xl font-bold mb-4">Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="p-3 bg-white/10 rounded-lg text-center">
                    React
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg text-center">
                    Next.js
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg text-center">
                    TypeScript
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg text-center">
                    Node.js
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg text-center">
                    MongoDB
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg text-center">
                    AWS
                  </div>
                </div>
              </div>

              <div className="p-6 border border-white/10 rounded-xl backdrop-blur-sm bg-white/5 shadow-xl">
                <h2 className="text-2xl font-bold mb-4">
                  Education & Certifications
                </h2>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 mr-2 text-blue-500 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <span className="font-medium">
                        Bachelor s Degree in Computer Science
                      </span>
                      <p className="text-sm text-gray-400">
                        University Name, 20XX-20XX
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 mr-2 text-blue-500 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <span className="font-medium">
                        AWS Certified Developer
                      </span>
                      <p className="text-sm text-gray-400">
                        Amazon Web Services, 20XX
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === "services" && (
          <div className="flex flex-col items-center justify-center min-h-screen w-full max-w-3xl px-6 py-12 mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mt-8 md:mt-0">
              Services
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              <div className="p-6 border border-white/10 rounded-xl backdrop-blur-sm bg-white/5 shadow-xl flex flex-col items-center text-center transition-transform hover:scale-105">
                <div className="p-4 rounded-full bg-blue-500/20 mb-4">
                  <svg
                    className="h-8 w-8 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Web Development</h3>
                <p className="text-gray-300">
                  Modern, responsive websites and web applications built with
                  the latest technologies.
                </p>
              </div>

              <div className="p-6 border border-white/10 rounded-xl backdrop-blur-sm bg-white/5 shadow-xl flex flex-col items-center text-center transition-transform hover:scale-105">
                <div className="p-4 rounded-full bg-purple-500/20 mb-4">
                  <svg
                    className="h-8 w-8 text-purple-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Mobile Development</h3>
                <p className="text-gray-300">
                  Cross-platform mobile applications for iOS and Android using
                  React Native.
                </p>
              </div>

              <div className="p-6 border border-white/10 rounded-xl backdrop-blur-sm bg-white/5 shadow-xl flex flex-col items-center text-center transition-transform hover:scale-105">
                <div className="p-4 rounded-full bg-green-500/20 mb-4">
                  <svg
                    className="h-8 w-8 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">API Development</h3>
                <p className="text-gray-300">
                  Robust RESTful APIs and GraphQL endpoints to power your
                  applications.
                </p>
              </div>

              <div className="p-6 border border-white/10 rounded-xl backdrop-blur-sm bg-white/5 shadow-xl flex flex-col items-center text-center transition-transform hover:scale-105">
                <div className="p-4 rounded-full bg-red-500/20 mb-4">
                  <svg
                    className="h-8 w-8 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Security Consulting</h3>
                <p className="text-gray-300">
                  Security audits and implementation of best practices to keep
                  your applications safe.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "contact" && (
          <div className="flex flex-col items-center justify-center min-h-screen w-full max-w-3xl px-6 py-12 mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mt-8 md:mt-0">
              Get In Touch
            </h1>

            <div className="w-full p-6 border border-white/10 rounded-xl backdrop-blur-sm bg-white/5 shadow-xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500"
                    placeholder="How can I help you?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
              <div className="p-4 border border-white/10 rounded-xl backdrop-blur-sm bg-white/5 shadow-xl flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-blue-500/20 mb-3">
                  <svg
                    className="h-6 w-6 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-1">Email</h3>
                <p className="text-gray-400 text-sm">
                  contact@jirawatdamung.com
                </p>
              </div>

              <div className="p-4 border border-white/10 rounded-xl backdrop-blur-sm bg-white/5 shadow-xl flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-purple-500/20 mb-3">
                  <svg
                    className="h-6 w-6 text-purple-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-1">Phone</h3>
                <p className="text-gray-400 text-sm">+66 12 345 6789</p>
              </div>

              <div className="p-4 border border-white/10 rounded-xl backdrop-blur-sm bg-white/5 shadow-xl flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-green-500/20 mb-3">
                  <svg
                    className="h-6 w-6 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-1">Location</h3>
                <p className="text-gray-400 text-sm">Bangkok, Thailand</p>
              </div>
            </div>
          </div>
        )}

        <footer className="w-full py-6 border-t border-white/10 text-center text-gray-400 text-sm">
          <p>© 2025 Jirawat Damung. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
