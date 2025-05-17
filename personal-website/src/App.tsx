import Header from "./components/Header";
import Aboutme from "./components/Aboutme";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer.tsx";
import Hero from "./components/Hero.tsx";

function App() {
  return (
    <div className="font-sans bg-white text-gray-900 scroll-smooth">
      <Header />
      <main>
        <Hero />
        <Aboutme />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;