const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-white">
      <h1 className="text-4xl md:text-6xl font-bold text-blue-700 mb-4">Меня зовут Данил</h1>
      <p className="text-xl text-gray-700 max-w-2xl">
        Я специалист, владеющий несколькими языками, работаю на пересечении технологий, данных и гуманитарных знаний.
        Создаю инструменты, перевожу смыслы и разбираюсь в сложных системах — от кода до культуры и контекста.
      </p>
    </section>
  );
};

export default Hero;