import About from "./components/About";
import { FloatingNavDemo } from "./components/FloatingNavDemo";
import Hero from "./components/Hero";
import Projects from "./components/Projects";


const App = () => {
  return (
    <div className="relative">
      <FloatingNavDemo/> 
      <Hero />
      <Projects/>
      <About />
    </div>
  );
};

export default App;
