import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Work } from "./components/Work";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useReveal } from "./hooks/useReveal";

function App() {
  useReveal();

  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
