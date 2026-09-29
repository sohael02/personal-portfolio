import { Navbar } from "./components/sections/Navbar";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Experience } from "./components/sections/Experience";
import { FeaturedProject } from "./components/sections/FeaturedProject";
import { ProjectsSection } from "./components/sections/Projects";
import { BuildProcess } from "./components/sections/BuildProcess";
import { Skills } from "./components/sections/Skills";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <FeaturedProject />
        <ProjectsSection />
        <BuildProcess />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;