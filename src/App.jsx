import About from "./components/About";
import Contact from "./components/Contact";
import { FloatingNavDemo } from "./components/FloatingNavDemo";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


const App = () => {
  return (
    <div className="relative">
      <FloatingNavDemo/> 
      <Hero />
      <Projects/>
      <About />
      <Skills/>
      <Contact/>
    </div>
  );
};

export default App;
