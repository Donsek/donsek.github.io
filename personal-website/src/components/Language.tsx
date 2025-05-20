const Languages = () => {
  return (
    <section
      id="languages"
      className="min-h-screen bg-[#D03A7F] text-white flex flex-col justify-center items-center px-2 sm:px-6 py-8 sm:py-16 relative"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-center gap-8 sm:gap-12">
        {/* Left: Text */}
        <div className="flex-1 text-base sm:text-lg space-y-4 sm:space-y-6 leading-relaxed">
          <div>
            <p className="font-medium">• Русский – Родной язык</p>
            <p className="italic">
              Уверенно работаю с научными, дипломатическими и техническими текстами.
            </p>
          </div>
          <div>
            <p className="font-medium">• English</p>
            <p className="italic">
              Fluent in professional and academic settings. Confident in interpretation,
              writing, presentation, and teaching.
            </p>
          </div>
          <div>
            <p className="font-medium">• Tiếng Việt</p>
            <p className="italic">
              Giao tiếp tốt. Có kinh nghiệm làm phiên dịch tại các sự kiện khoa học và văn hoá.
            </p>
          </div>
        </div>

        {/* Right: Flag */}
        <div className="flex-1 flex justify-center mt-8 md:mt-0">
          <div className="rounded-full overflow-hidden w-100 h-100 sm:w-74 sm:h-74 relative">
            <img
              src="/flags.webp"
              alt="Russian, Vietnamese, and English flags"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;