const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700">
          <li>Python</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Tailwind CSS</li>
          <li>Flask</li>
          <li>NLP (spaCy, transformers)</li>
          <li>SQL</li>
          <li>Git</li>
          <li>English, Russian, Vietnamese</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
