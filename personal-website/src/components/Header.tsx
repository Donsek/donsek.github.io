const Header = () => {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <h1 className="text-xl font-bold text-blue-600">Danil Ukhalov</h1>

        {/* Navigation */}
        <nav className="space-x-6 text-sm font-medium text-gray-700">
          <a href="#about" className="hover:text-blue-600 transition">About me</a>
          <a href="#skills" className="hover:text-blue-600 transition">Skills</a>
          <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;