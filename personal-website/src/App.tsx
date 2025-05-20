import Header from "./components/Header";
import About from "./components/About.tsx";
import Language from "./components/Language.tsx";
import Research from "./components/Research.tsx";
import Footer from "./components/Footer.tsx";
import Hero from "./components/Hero.tsx";
import Tech from "./components/Tech";

function App() {
  return (
    <div className="bg-white text-gray-900 scroll-smooth">
      <Header />
      <main>
        <Hero />
        <About />
        <Language />
        <Research />
        <Tech />
      </main>
      <Footer />
      </div>
  );
}

export default App;