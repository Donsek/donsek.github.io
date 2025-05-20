import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

const Header = () => {
  return (
    <header className="sticky w-full bg-white shadow-sm top-0 z-50">
      <div className="max-w-6xl mx-auto px-2 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
        {/* Left side: name */}
        <div className="flex items-center gap-2 sm:gap-4">
          <span className="text-lg sm:text-xl font-light">Данил Ухалов</span>
          <a href="https://t.me/danilukhalov" target="_blank" rel="noopener noreferrer">
            <span className="text-blue-500 text-lg sm:text-xl hover:scale-110 transition">
              <FaTelegramPlane />
            </span>
          </a>
          <a href="https://wa.me/79137416014" target="_blank" rel="noopener noreferrer">
            <span className="text-green-500 text-lg sm:text-xl hover:scale-110 transition">
            <FaWhatsapp />
            </span>
          </a>
          <span className="text-xs sm:text-sm text-gray-700">+7 913 741 60 14</span>
        </div>

        {/* Right side: navigation */}
        <nav className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm font-light text-gray-800 mt-2 sm:mt-0">
          <a href="#about" className="hover:text-blue-600 transition">Про меня</a>
          <a href="#languages" className="hover:text-blue-600 transition">Языки</a>
          <a href="#research" className="hover:text-blue-600 transition">Исследования</a>
          <a href="#tech" className="hover:text-blue-600 transition">Технологии</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
