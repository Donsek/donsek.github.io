const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-blue-600">NLP Text Analyzer</h3>
            <p className="text-gray-700">A tool that processes and classifies Russian text using spaCy and transformers.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-600">Flask Dashboard</h3>
            <p className="text-gray-700">A simple web app that visualizes data from CSV files using Flask and Chart.js.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
