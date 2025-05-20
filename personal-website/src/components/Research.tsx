const Research = () => {
  return (
    <section
      id="research"
      className="scroll-mt-32 bg-[#FCF897] text-black px-6 py-[80px] relative"
    >
      {/* Text Block */}
      <div className="w-[90%] sm:w-[60%] sm:ml-[10%] text-lg space-y-6 leading-relaxed z-10 mx-auto">
        <p>
          Я начинал с гуманитарного фокуса — международные отношения,
          Юго-Восточная Азия, государственная политика. Постепенно к этому
          добавился интерес к данным и технологиям.
        </p>
        <p>
          Сейчас я работаю на стыке: строю модели, которые помогают понять —
          как страны действуют, как работают тексты, как передаётся смысл.
        </p>
        <p>
          Моя цель — не просто собрать информацию, а понять систему и объяснить суть.
        </p>

      {/* Projects: Mobile Only */}
      <div className="sm:hidden">
        <p className="text-lg text-center mt-8">
          Вот несколько проектов:
        </p>
      </div>

      {/* Bookmarks: Mobile */}
      <div className="w-full sm:hidden mt-8 flex justify-between max-w-md mx-auto">
        <a
          href="https://journals.dvfu.ru/oij/article/view/1166"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 h-12 bg-[#2a2c3a] text-white font-bold flex justify-center items-center mx-1 rounded-md"
        >
          A
        </a>
        <a
          href="https://russiancouncil.ru/danil-ukhalov/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 h-12 bg-[#4a9d8f] text-white font-bold flex justify-center items-center mx-1 rounded-md"
        >
          B
        </a>
        <a
          href="https://drive.google.com/file/d/1ommtZglao-chkY2WSzYdvlcX-CypYps_/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 h-12 bg-[#d03a80d8] text-white font-bold flex justify-center items-center mx-1 rounded-md"
        >
          C
        </a>
      </div>

      {/* Bookmarks: Desktop */}
      <div className="hidden sm:block absolute top-0 left-0 w-full z-10">
        <a
          рhref="https://journals.dvfu.ru/oij/article/view/1166"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute -top-[24px] right-[25%] w-10 h-[120px] bg-[#2a2c3a] clip-bookmark text-white font-bold flex justify-center items-center transition-transform duration-200 hover:scale-y-105 origin-top"
        >
          A
        </a>
        <a
          href="https://russiancouncil.ru/danil-ukhalov/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute -top-[24px] right-[20%] w-10 h-[100px] bg-[#4a9d8f] clip-bookmark text-white font-bold flex justify-center items-center transition-transform duration-200 hover:scale-y-110 origin-top"
        >
          B
        </a>
        <a
          href="https://drive.google.com/file/d/1ommtZglao-chkY2WSzYdvlcX-CypYps_/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute -top-[24px] right-[15%] w-10 h-[80px] bg-[#d03a80d8] clip-bookmark text-white font-bold flex justify-center items-center transition-transform duration-200 hover:scale-y-125 origin-top"
        >
          C
        </a>
      </div>
    </div>
    </section>
  );
};

export default Research;




