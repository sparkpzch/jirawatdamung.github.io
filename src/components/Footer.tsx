import { Mail, Phone, Instagram, Linkedin, Dribbble } from "lucide-react";

export default function Footer() {
  return (
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
            <Instagram size={20} />
          </a>
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
            <Dribbble size={20} />
          </a>
          <a
            href="#"
            className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                fillRule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clipRule="evenodd"
              />
            </svg>
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
  );
}
