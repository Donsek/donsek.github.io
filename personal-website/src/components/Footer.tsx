const Footer = () => {
  return (
    <footer className="py-4 sm:py-6 text-center text-gray-500 text-xs sm:text-sm bg-gray-100">
      &copy; {new Date().getFullYear()} Данил Ухалов. Владивосток. Все права защищены.
    </footer>
  );
};

export default Footer;