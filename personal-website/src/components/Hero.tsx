const Hero = () => {
  return (
    <section className="min-h-screen bg-[#2a2c3a] text-white flex flex-col justify-center items-start relative overflow-hidden px-2 sm:px-4">
      {/* SVG Background Image */}
      <img
        src="/hero.svg"
        className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
      />

      {/* Main text */}
      <div className="text-center sm:text-left mx-auto sm:ml-20 max-w-full sm:max-w-3xl animate-fadeInUp">
        <h1 className="text-[2.5rem] xs:text-[4rem] sm:text-[7rem] md:text-[9rem] font-light mb-4 sm:mb-8 leading-none">
          ПРИВЕТ
        </h1>
        <h2 className="text-2xl xs:text-4xl sm:text-5xl md:text-6xl font-light mb-4 sm:mb-6 leading-tight">
          меня зовут
        </h2>
        <h2 className="text-4xl xs:text-6xl sm:text-7xl md:text-8xl font-normal leading-tight">
          Данил Ухалов
        </h2>
      </div>

        {/* Scroll */}
        <div className="absolute bottom-[10%] sm:bottom-[15%] left-[45%] transform -translate-x-1/2 text-white text-5xl opacity-60 animate-bounce tracking-widest">
        ↓
        </div>
    </section>
  );
};

export default Hero;
