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
        <div className="mb-20 items-center flex flex-col">
          <Image
            src="https://i.imgur.com/WPFD1DW.jpg"
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
                src="https://i.imgur.com/WPFD1DW.jpg"
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
                สวัสดีครับ ชื่อจิรวัฒน์ ดามัง หรือ เปรียว
                ปัจจุบันเป็นผู้ช่วยนักวิจัยมหาวิทยาลัยกรุงเทพ ชั้นปีที่ 2
                สาขาเกมและสื่อเชิงโต้ตอบ สนใจด้านการพัฒนาเว็บแอพพลิเคชั่น
                และเว็บไซต์ มีความสามารถในการเขียนโปรแกรมด้วยภาษา Python,
                JavaScript, HTML, CSS, TypeScript, .NET, Node, Lua, Dart และ
                Database สามารถใช้ภาษาอังกฤษได้ดี สามารถใช้โปรแกรมต่างๆ เช่น
                Adobe, Affinity, Davinci Resolve และโปรแกรมอื่นๆ
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
                  With over 3 years of experience in full-stack development, Ive
                  worked on a diverse range of projects from small startups to
                  enterprise applications. My passion for technology started
                  when I was young, and Ive been continuously learning and
                  growing ever since.
                </p>
              </div>
              <div className="p-6 border border-white/10 rounded-xl backdrop-blur-sm bg-white/5 shadow-xl">
                <h2 className="text-2xl font-bold mb-4">Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="p-3 bg-white/10 rounded-lg text-center flex items-center justify-center space-x-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        d="M5.9 15.375L2.5 12l11-11h6.775zM13.5 23l-5.925-5.925L13.5 11.15h6.775l-5.925 5.925L20.275 23z"
                      />
                    </svg>
                    <span>Flutter</span>
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg text-center flex items-center justify-center space-x-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m4-14h-1.35v4H16zM9.346 9.71l6.059 7.828l1.054-.809L9.683 8H8v7.997h1.346z"
                      />
                    </svg>
                    <span>Next.js</span>
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg text-center flex items-center justify-center space-x-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none">
                        <g clipPath="url(#akarIconsTypescriptFill0)">
                          <path
                            fill="currentColor"
                            d="M23.429 0H.57A.57.57 0 0 0 0 .571V23.43a.57.57 0 0 0 .571.571H23.43a.57.57 0 0 0 .571-.571V.57a.57.57 0 0 0-.572-.57m-9.143 12.826h-2.857v8.888H9.143v-8.888H6.286v-1.969h8zm.64 8.38v-2.375s1.298.978 2.855.978s1.497-1.018 1.497-1.158c0-1.477-4.412-1.477-4.412-4.751c0-4.452 6.429-2.695 6.429-2.695l-.08 2.116s-1.078-.719-2.296-.719s-1.657.58-1.657 1.198c0 1.597 4.452 1.438 4.452 4.652c0 4.95-6.788 2.755-6.788 2.755"
                          />
                        </g>
                        <defs>
                          <clipPath id="akarIconsTypescriptFill0">
                            <path fill="#fff" d="M0 0h24v24H0z" />
                          </clipPath>
                        </defs>
                      </g>
                    </svg>
                    <span>TypeScript</span>
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg text-center flex items-center justify-center space-x-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.47 1.71.47c1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.13 0-.23.1-.23.22v8.47c0 .66-.68 1.31-1.77.76L4.45 16.5a.26.26 0 0 1-.11-.21V7.71c0-.09.04-.17.11-.21l7.44-4.29c.06-.04.16-.04.22 0l7.44 4.29c.07.04.11.12.11.21v8.58c0 .08-.04.16-.11.21l-7.44 4.29c-.06.04-.16.04-.23 0L10 19.65c-.08-.03-.16-.04-.21-.01c-.53.3-.63.36-1.12.51c-.12.04-.31.11.07.32l2.48 1.47q.36.21.78.21t.78-.21l7.44-4.29c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.5-.2-.78-.2M14 8c-2.12 0-3.39.89-3.39 2.39c0 1.61 1.26 2.08 3.3 2.28c2.43.24 2.62.6 2.62 1.08c0 .83-.67 1.18-2.23 1.18c-1.98 0-2.4-.49-2.55-1.47a.226.226 0 0 0-.22-.18h-.96c-.12 0-.21.09-.21.22c0 1.24.68 2.74 3.94 2.74c2.35 0 3.7-.93 3.7-2.55c0-1.61-1.08-2.03-3.37-2.34c-2.31-.3-2.54-.46-2.54-1c0-.45.2-1.05 1.91-1.05c1.5 0 2.09.33 2.32 1.36c.02.1.11.17.21.17h.97c.05 0 .11-.02.15-.07c.04-.04.07-.1.05-.16C17.56 8.82 16.38 8 14 8"
                      />
                    </svg>
                    <span>Node.js</span>
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg text-center flex items-center justify-center space-x-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 128 128"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#FFFFFFFF"
                        d="M0 91.313h4.242V74.566l6.566 14.598c.773 1.77 1.832 2.391 3.914 2.391s3.098-.621 3.871-2.391l6.566-14.598v16.746h4.242V74.594c0-1.633-.652-2.422-2-2.828c-3.223-1.004-5.383-.137-6.363 2.039l-6.441 14.41l-6.238-14.41c-.937-2.176-3.14-3.043-6.359-2.039c-1.348.406-2 1.195-2 2.828zM32.93 77.68h4.238v9.227c-.039.5.16 1.676 2.484 1.715h9.223V77.633h4.25c.02 0-.008 14.984-.008 15.047c.023 3.695-4.582 4.496-6.707 4.559H33.02v-2.852l13.414-.004c2.73-.285 2.406-1.645 2.406-2.098v-1.113h-9.012c-4.195-.039-6.863-1.871-6.898-3.977c-.004-.191.09-9.422 0-9.516zm0 0"
                      />
                      <path
                        fill="#FFFFFFFF"
                        d="M56.391 91.313h12.195c1.426 0 2.813-.301 3.914-.816c1.836-.84 2.73-1.984 2.73-3.48v-3.098c0-1.223-1.016-2.367-3.016-3.125c-1.059-.41-2.367-.625-3.629-.625h-5.141c-1.711 0-2.527-.516-2.73-1.656c-.039-.137-.039-.246-.039-.383V76.2c0-.109 0-.219.039-.355c.203-.867.652-1.113 2.16-1.25l.41-.027h12.109v-2.824H63.488c-1.711 0-2.609.109-3.426.352c-2.527.789-3.629 2.039-3.629 4.215v2.473c0 1.902 2.16 3.535 5.789 3.914l1.223.055h4.406c.164 0 .324 0 .449.027c1.344.109 1.914.355 2.324.844c.211.195.332.473.324.758v2.477c0 .297-.203.68-.609 1.004c-.367.328-.98.543-1.793.598l-.449.027H56.391zm45.297-4.922c0 2.91 2.164 4.539 6.523 4.867l1.227.055h11.051v-2.828h-11.133c-2.488 0-3.426-.625-3.426-2.121V71.738h-4.238V86.39zm-23.75.148V76.457c0-2.559 1.801-4.113 5.355-4.602a8 8 0 0 1 1.145-.082h8.047c.41 0 .777.027 1.188.082c3.555.488 5.352 2.043 5.352 4.602v10.082c0 2.078-.762 3.188-2.523 3.914l4.18 3.77h-4.926l-3.379-3.051l-3.402.215H84.44a9.2 9.2 0 0 1-2.492-.352c-2.699-.734-4.008-2.152-4.008-4.496zm4.578-.246c0 .137.039.273.082.438c.246 1.172 1.348 1.824 3.023 1.824h3.852l-3.539-3.195h4.926l3.086 2.789c.57-.305.941-.766 1.074-1.363c.039-.137.039-.273.039-.41v-9.668c0-.109 0-.246-.039-.383c-.246-1.09-1.348-1.715-2.984-1.715h-6.414c-1.879 0-3.105.816-3.105 2.098zm0 0"
                      />
                      <path
                        fill="#FFFFFFFF"
                        d="M124.219 67.047c-2.605-.07-4.598.172-6.301.891c-.484.203-1.258.207-1.336.813c.266.281.309.699.52 1.039c.406.66 1.094 1.539 1.707 2l2.074 1.484c1.273.777 2.699 1.223 3.93 2c.723.461 1.441 1.039 2.148 1.559c.348.254.582.656 1.039.816v-.074c-.238-.305-.301-.723-.52-1.039l-.965-.965c-.941-1.25-2.137-2.348-3.41-3.262c-1.016-.727-3.281-1.711-3.707-2.891l-.074-.074c.719-.078 1.563-.34 2.223-.516c1.117-.301 2.113-.223 3.262-.52l1.559-.449v-.293c-.582-.598-.996-1.387-1.633-1.93c-1.656-1.41-3.469-2.824-5.336-4.004c-1.035-.652-2.312-1.074-3.41-1.629c-.367-.187-1.016-.281-1.262-.594c-.574-.734-.887-1.664-1.332-2.52l-2.668-5.633c-.562-1.285-.93-2.555-1.633-3.707c-3.363-5.535-6.988-8.875-12.602-12.156c-1.191-.699-2.633-.973-4.148-1.332l-2.449-.148c-.496-.211-1.012-.82-1.48-1.113c-1.859-1.176-6.629-3.73-8.008-.371c-.867 2.121 1.301 4.191 2.078 5.266c.543.754 1.242 1.598 1.629 2.445c.258.555.301 1.113.52 1.703c.539 1.453 1.008 3.031 1.707 4.375c.352.68.738 1.395 1.184 2c.273.371.742.539.816 1.113c-.457.641-.484 1.633-.742 2.445c-1.16 3.652-.723 8.191.965 10.898c.516.828 1.734 2.609 3.41 1.926c1.465-.598 1.137-2.445 1.555-4.078c.098-.367.039-.641.223-.887v.074l1.336 2.668c.988 1.59 2.738 3.25 4.223 4.371c.773.582 1.379 1.59 2.375 1.93V68.6h-.074c-.195-.297-.496-.422-.742-.664c-.582-.57-1.227-1.277-1.703-1.93c-1.352-1.832-2.547-3.84-3.633-5.93c-.52-.996-.973-2.098-1.41-3.113c-.168-.391-.164-.984-.516-1.184c-.48.742-1.187 1.344-1.559 2.223c-.594 1.402-.668 3.117-.891 4.891l-.148.074c-1.031-.25-1.395-1.312-1.777-2.223c-.973-2.305-1.152-6.02-.297-8.672c.219-.687 1.219-2.852.813-3.484c-.191-.633-.828-1-1.184-1.484a11.7 11.7 0 0 1-1.187-2.074c-.793-1.801-1.164-3.816-2-5.633c-.398-.871-1.074-1.75-1.629-2.523c-.617-.855-1.305-1.484-1.781-2.52c-.168-.367-.398-.957-.148-1.336c.078-.254.195-.359.445-.441c.43-.332 1.629.109 2.074.293c1.191.496 2.184.965 3.191 1.633c.48.32.969.941 1.555 1.113h.668c1.043.238 2.211.07 3.188.367c1.723.523 3.27 1.34 4.668 2.227c4.273 2.695 7.766 6.535 10.156 11.117c.387.738.551 1.441.891 2.223c.684 1.578 1.543 3.203 2.223 4.746s1.34 3.094 2.297 4.375c.504.672 2.453 1.031 3.336 1.406c.621.262 1.637.535 2.223.891c1.125.676 2.211 1.48 3.266 2.223c.523.375 2.141 1.188 2.223 1.855zM91.082 38.805a5.3 5.3 0 0 0-1.332.148v.074h.074c.258.535.715.879 1.035 1.336l.742 1.555l.074-.07c.461-.324.668-.844.668-1.633c-.187-.195-.211-.437-.371-.668c-.211-.309-.621-.48-.891-.742zm0 0"
                      />
                    </svg>
                    <span>MySQL</span>
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg text-center flex items-center justify-center space-x-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M4 13h9.5M4 13l4 4.5M4 13l4-4.5m5.5 4.5l5-9m-5 9l5 7m0-16l-6 1m6-1L20 9.5M18.5 20l1.5-5.5M18.5 20l-6-.5"
                      />
                    </svg>
                    <span>Unity</span>
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg text-center flex items-center justify-center space-x-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        d="m13.936 15.356l-12.11-3.244L0 18.93L18.928 24l2.68-9.99l-6.818-1.83zM5.072 0L2.394 9.992l6.816 1.83l.854-3.178l12.11 3.246L24 5.072z"
                      />
                    </svg>
                    <span>Roblox Studio</span>
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg text-center flex items-center justify-center space-x-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0m0 23.52A11.52 11.52 0 1 1 23.52 12A11.52 11.52 0 0 1 12 23.52m7.13-9.791c-.206.997-1.126 3.557-4.06 4.942l-1.179-1.325l-1.988 2a7.34 7.34 0 0 1-5.804-2.978a3 3 0 0 0 .65.123c.326.006.678-.114.678-.66v-5.394a.89.89 0 0 0-1.116-.89c-.92.212-1.656 2.509-1.656 2.509a7.3 7.3 0 0 1 2.528-5.597a7.4 7.4 0 0 1 3.73-1.721c-1.006.573-1.57 1.507-1.57 2.29c0 1.262.76 1.109.984.923v7.28a1.2 1.2 0 0 0 .148.256a1.08 1.08 0 0 0 .88.445c.76 0 1.747-.868 1.747-.868V9.172c0-.6-.452-1.324-.905-1.572c0 0 .838-.149 1.484.346a6 6 0 0 1 .387-.425c1.508-1.48 2.929-1.902 4.112-2.112c0 0-2.151 1.69-2.151 3.96c0 1.687.043 5.801.043 5.801c.799.771 1.986-.342 3.059-1.441Z"
                      />
                    </svg>
                    <span>Unreal Engine</span>
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg text-center flex items-center justify-center space-x-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-width="1.5"
                        d="M21.5 8h-19m8-5.5L7 8m10-5.5L13.5 8m8.5 4c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"
                      />
                    </svg>
                    <span>Final Cut Pro</span>
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg text-center flex items-center justify-center space-x-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        d="M17.621 0L5.977.004c-1.37 0-2.756.345-3.762 1.11a4.9 4.9 0 0 0-1.61 2.003C.233 3.93 0 5.02 0 5.951l.012 12.2c.002 1.604.479 3.057 1.461 4.112c.984 1.056 2.462 1.683 4.331 1.691L16.856 24c1.26.005 3.095-.036 4.303-.714c1.075-.605 2.025-1.556 2.497-2.984c.278-.84.345-2.084.344-3.147l-.021-11.13c-.002-.888-.15-2.023-.547-2.934c-.425-.976-1.181-1.815-2.322-2.425C20.353.26 19.123 0 17.622 0zm0 .93c1.378 0 2.538.295 3.04.565c.977.523 1.544 1.166 1.889 1.96c.315.721.47 1.793.473 2.572l.018 11.13c.002 1.013-.097 2.257-.298 2.86c-.396 1.202-1.146 1.946-2.063 2.462c-.814.457-2.612.593-3.82.588l-11.05-.044c-1.657-.007-2.832-.534-3.626-1.386c-.792-.851-1.212-2.06-1.212-3.485L.999 5.95c0-.829.196-1.827.474-2.437c.345-.757.75-1.207 1.365-1.674C3.585 1.27 4.868.97 6.08.97zm-5.66 3.423c-1.976.089-3.204 1.658-3.214 3.29c.019 1.443 1.635 3.481 2.884 4.53c.12.099.154.109.33.18c.062.025.198-.047.327-.135c.36-.245.993-.947 1.648-1.738a7.7 7.7 0 0 0 1.031-1.683c.409-.89.261-1.599.235-1.888a4 4 0 0 0-.99-1.692a3.36 3.36 0 0 0-2.251-.864m4.172 7.922a10.2 10.2 0 0 0-3.244.61c-.15.058-.26.1-.374.17c-.057.036-.11.135-.105.292c.017.433.29 1.278.624 2.27c.384 1.135 1.066 2.27 1.844 2.74a3.23 3.23 0 0 0 2.53.342c.832-.243 1.595-.868 1.962-1.546c.986-1.818.19-3.548-1.121-4.417c-.447-.296-1.133-.445-1.89-.46zm-8.432.038a6 6 0 0 0-.752.047c-.596.078-.932.273-1.29.51a3.18 3.18 0 0 0-1.365 1.979c-.075.552-.086 1.053.033 1.507c.433 1.389 1.326 2.222 2.847 2.452c.636.028 1.37-.063 1.99-.45c1.269-.782 2.08-3.17 2.412-4.742c.053-.176.035-.357-.013-.42c-.005-.067-.044-.113-.19-.183c-.398-.192-1.32-.417-2.375-.6a7.7 7.7 0 0 0-1.297-.1"
                      />
                    </svg>
                    <span>Davinci Resolve</span>
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg text-center flex items-center justify-center space-x-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        d="M9.368 1.08h3.778l.318.55h1.082L24 18.004v.001l-2.036 3.47H13.69l.84 1.445h-.365l-.84-1.446H3.057l-.526-.923h-.652L0 17.298l.002-.001l2.41-4.176l2.23-1.288l3.69-6.39l-.742-1.285zm2.224 5.652L5.066 18.008h6.25l-.723-1.246l6.808.006z"
                      />
                    </svg>
                    <span>Affinity</span>
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg text-center flex items-center justify-center space-x-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M2 18a2 2 0 0 0 1.7 3h9.7l-2.7-4.5h-2L12 11l6 10h2.3a2 2 0 0 0 1.7-3L13.8 4a2 2 0 0 0-3.6 0Z"
                      />
                    </svg>
                    <span>Adobe</span>
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg text-center flex items-center justify-center space-x-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        d="M21.81 10.25c-.06-.04-.56-.43-1.64-.43c-.28 0-.56.03-.84.08c-.21-1.4-1.38-2.11-1.43-2.14l-.29-.17l-.18.27c-.24.36-.43.77-.51 1.19c-.2.8-.08 1.56.33 2.21c-.49.28-1.29.35-1.46.35H2.62c-.34 0-.62.28-.62.63c0 1.15.18 2.3.58 3.38c.45 1.19 1.13 2.07 2 2.61c.98.6 2.59.94 4.42.94c.79 0 1.61-.07 2.42-.22c1.12-.2 2.2-.59 3.19-1.16A8.3 8.3 0 0 0 16.78 16c1.05-1.17 1.67-2.5 2.12-3.65h.19c1.14 0 1.85-.46 2.24-.85c.26-.24.45-.53.59-.87l.08-.24zm-17.96.99h1.76c.08 0 .16-.07.16-.16V9.5c0-.08-.07-.16-.16-.16H3.85c-.09 0-.16.07-.16.16v1.58c.01.09.07.16.16.16m2.43 0h1.76c.08 0 .16-.07.16-.16V9.5c0-.08-.07-.16-.16-.16H6.28c-.09 0-.16.07-.16.16v1.58c.01.09.07.16.16.16m2.47 0h1.75c.1 0 .17-.07.17-.16V9.5c0-.08-.06-.16-.17-.16H8.75c-.08 0-.15.07-.15.16v1.58c0 .09.06.16.15.16m2.44 0h1.77c.08 0 .15-.07.15-.16V9.5c0-.08-.06-.16-.15-.16h-1.77c-.08 0-.15.07-.15.16v1.58c0 .09.07.16.15.16M6.28 9h1.76c.08 0 .16-.09.16-.18V7.25c0-.09-.07-.16-.16-.16H6.28c-.09 0-.16.06-.16.16v1.57c.01.09.07.18.16.18m2.47 0h1.75c.1 0 .17-.09.17-.18V7.25c0-.09-.06-.16-.17-.16H8.75c-.08 0-.15.06-.15.16v1.57c0 .09.06.18.15.18m2.44 0h1.77c.08 0 .15-.09.15-.18V7.25c0-.09-.07-.16-.15-.16h-1.77c-.08 0-.15.06-.15.16v1.57c0 .09.07.18.15.18m0-2.28h1.77c.08 0 .15-.07.15-.16V5c0-.1-.07-.17-.15-.17h-1.77c-.08 0-.15.06-.15.17v1.56c0 .08.07.16.15.16m2.46 4.52h1.76c.09 0 .16-.07.16-.16V9.5c0-.08-.07-.16-.16-.16h-1.76c-.08 0-.15.07-.15.16v1.58c0 .09.07.16.15.16"
                      />
                    </svg>
                    <span>Docker</span>
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg text-center flex items-center justify-center space-x-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 128 128"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        d="M67.3 108.8h23.3c10.1 0 18.3-8.2 18.3-18.3V37.4c0-2-.3-3.8-.9-5.6h.1c1.3 0 2.4 2.1 2.9 3.2c.5 1 1.9 1.8 3.2 2.4v54.8c0 12.1-9.8 21.9-21.9 21.9H64.7c.7-1.4 1.6-3.2 2.6-5.3m6.1-95c7.6.2 10.8 2.4 12.3 5.4H37.5c-10.1 0-18.3 8.2-18.3 18.3v53.1c0 10.1 8.2 18.3 18.3 18.3h3.8c-.4 1.1-.8 2.7-.8 3.7c0 .6.2 1.1.4 1.7h-5.1c-12.1 0-21.9-9.8-21.9-21.9V35.7c0-12.1 9.8-21.9 21.9-21.9z"
                      />
                      <path
                        fill="currentColor"
                        d="M89.9 106.4H68.5c3.3-6.8 7.4-15.5 11.1-23.2l5.7 9.8c1.3 2.2 4.1 3 6.3 1.7s3-4.1 1.7-6.3L84.4 73c2.5-5.2 4.2-8.8 4.4-9.3c.9-1.9 1.3-4.3 2.4-6.6c3-5.8 9.5-19.8 12.2-22.4c.9-.8 1.5-1.5 2.1-1.9c.6 1.7.9 3.4.9 5.3v51.7c0 9.2-7.4 16.6-16.5 16.6m5.3-35.1h-8.9l5.3 9.3h3.6c2.6 0 4.6-2.1 4.6-4.6c0-2.6-2-4.7-4.6-4.7M21.6 89.8V38.1c0-9.2 7.4-16.6 16.6-16.6h48.4c.3 1.1.5 2.2.6 3.4c.2 1.6-2.1 6.7-2.4 7.3c-2.2 4.4-6.8 13.1-9.3 17.5c-.6 1.2-2.1 3-2.2 3.2c0 0-.1.1-.2.3l-2.2-3.8l-5.3 9.3l2.2 3.8c-1.5 2.6-3.2 5.6-5.1 8.7H32.8c-2.6 0-4.6 2.1-4.6 4.6c0 2.6 2.1 4.6 4.6 4.6h24.5c-6.4 11-12.7 21.9-14.9 25.8h-4.2c-9.1.2-16.6-7.2-16.6-16.4m40.5-55.5c-1.3-2.2-4.1-3-6.3-1.7s-3 4.1-1.7 6.3l3.3 5.8l5.3-9.3zm-5.2 34.5l17.3-30c1.3-2.2.5-5-1.7-6.3s-5-.5-6.3 1.7l-20 34.6zM43.1 92.9l5.7-9.9H38.1L35 88.3c-1.3 2.2-.5 5 1.7 6.3s5.1.5 6.4-1.7"
                      />
                      <path
                        fill="currentColor"
                        d="M69.2 9.3c0-.8.9-1.4 2.9-2.2s5.1-1.6 9.5-1.6c12.9 0 21.3 5 26.6 7.8c3.3 1.8 3.7 4.7 6.3 6.6c1.8 1.3 4.2 1 6.1.7h.2s5.3 2.7 5.3 2.8c.3.3-.9 3.3-2.6 6.9c-1.8 3.7-3.5 6.5-3.9 6.3c-.2-.1-5.7-3.1-5.7-3.1s-.2-1.1-.8-1.9c-1.1-1.5-3-3.3-5.1-3.3c-2.8 0-5.7 2.4-8 5.2c-2.7 3.1-9.9 18.2-12.6 23.9c-.2.5-.6 2.7-1 3.6c-.8 1.8-25.3 52.8-27.5 57.3c-.8 1.5-2.4 2.2-4.4 2.2c-4 0-10.6-3.8-10.7-7.9c0-.6.4-2.3.7-3.1c.6-1.5 31.3-54.1 31.7-54.8c.1-.2 1.2-1.4 1.9-2.6c2.4-4.5 8.1-15 10.3-19.3c.3-.6 2.3-5.8 2.2-7.4c-.7-7.1-2.5-15-19.6-15.5c-.6 0-1.8-.3-1.8-.6"
                      />
                    </svg>
                    <span>XCode</span>
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg text-center flex items-center justify-center space-x-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M384 128v256H128V128zm-148.25 64h-24.932l-47.334 128h22.493l8.936-25.023h56.662L260.32 320h23.847zm88.344 0h-22.402v128h22.402zm-101 21.475l22.315 63.858h-44.274zM405.335 320H448v42.667h-42.667zm-256 85.333H192V448h-42.667zm85.333 0h42.666V448h-42.666zM149.333 64H192v42.667h-42.667zM320 405.333h42.667V448H320zM234.667 64h42.666v42.667h-42.666zM320 64h42.667v42.667H320zm85.333 170.667H448v42.666h-42.667zM64 320h42.667v42.667H64zm341.333-170.667H448V192h-42.667zM64 234.667h42.667v42.666H64zm0-85.334h42.667V192H64z"
                      />
                    </svg>
                    <span>AI Model</span>
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
                        Undergraduate Degree in Computer Science
                      </span>
                      <p className="text-sm text-gray-400">
                        Bangkok University, 2023-Present
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
                        No Certified Developer
                      </span>
                      <p className="text-sm text-gray-400">2023-Present</p>
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
                  Flutter.
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
                <p className="text-gray-400 text-sm">sparkpzch@gmail.com</p>
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
                <p className="text-gray-400 text-sm">092 - 597 - 6004</p>
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
