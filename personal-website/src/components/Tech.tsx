const tools = [
  {
    name: "Python",
    link: "",
    description:
      "Язык программирования общего назначения, особенно полезен для анализа данных и NLP",
  },
  {
    name: "React",
    link: "",
    description:
      "Фреймворк для построения пользовательских интерфейсов на основе компонентов",
  },
  {
    name: "Flask",
    link: "",
    description:
      "Лёгкий Python-фреймворк для веб-приложений и API",
  },
  {
    name: "PyTorch",
    link: "",
    description:
      "Фреймворк машинного обучения, особенно удобен для нейронных сетей",
  },
  {
    name: "Tailwind CSS",
    link: "",
    description:
      "Утилитарный CSS-фреймворк для быстрой стилизации без написания кастомных классов",
  },
  {
        name: "Figma",
    link: "",
    description:
      "Онлайн-инструмент для дизайна интерфейсов и прототипирования",
  },
  {
        name: "HuggingFace Transformers",
    link: "https://huggingface.co/spaces/donsek/General_Assembly_Vote_Predicting",
    description:
      "Библиотека моделей NLP, включая GPT, BERT и другие",
  },
  {
    name: "Git",
    link: "",
    description:
      "Система контроля версий, используемая для отслеживания изменений в коде",
  },
  {
    name: "scikit-learn",
    link: "",
    description:
      "Библиотека машинного обучения на Python",
  },
];

const Tools = () => {
  return (
    <section
      id="tech"
      className="bg-[#EDA077] text-black flex flex-col justify-center items-center px-2 sm:px-6 py-8 sm:py-[60px] relative"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12">Мои инструменты</h2>

      <div className="max-w-4xl w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 text-center text-base sm:text-lg">
        {tools.map((tool) => (
          <div key={tool.name} className="relative group">
            {tool.link ? (
              <a
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:bg-black transition rounded px-4 py-2 inline-block"
              >
                {tool.name}
              </a>
            ) : (
              <div className="text-black-500 px-4 py-2 border border-transparent inline-block">
                {tool.name}
              </div>
            )}

            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 bg-black text-white text-sm px-3 py-2 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none z-10">
              {tool.description}
            </div>
          </div>
        ))}
      </div>
      <div>
        <p className="mt-8 text-center text-black-400 text-sm sm:text-base sm:opacity-80 opacity-10 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
          NLP – Natural Language Processing, обработка естественного языка с помощью ИИ
        </p>
      </div>
    </section>
  );
};

export default Tools;
