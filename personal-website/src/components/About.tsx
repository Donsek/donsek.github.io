const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#4A9D8F] text-white flex flex-col justify-center items-center px-2 sm:px-6 py-8 sm:py-16 relative"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-center gap-8 sm:gap-12">
        {/* Left: Text */}
        <div className="flex-1 text-base sm:text-lg space-y-4 sm:space-y-6 leading-relaxed">
          <p>
            Язык для меня — это не просто слова, а смыслы, нюансы, контекст.
          </p>
          <p>
            Это привело меня в международные отношения, Юго-Восточную Азию, в перевод — а потом и в код: я начал использовать <span className="font-medium">Python</span> и <span className="font-medium">NLP</span>, чтобы работать с текстами по-новому. Мне ближе пересечения — язык и логика, культура и системы.
          </p>
          <p>
            Я на своём месте, когда учусь, создаю или объясняю сложное простыми словами. Этот сайт — небольшое отражение того, как я думаю.
          </p>
          <p>Если что-то откликнулось — пишите.</p>
        </div>

        {/* Right: Photo */}
        <div className="flex-1 flex justify-center mt-8 md:mt-0">
          <div className="rounded-full overflow-hidden w-100 h-100 sm:w-74 sm:h-74">
            <img
              src="/me.webp" 
              alt="Данил Ухалов"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
