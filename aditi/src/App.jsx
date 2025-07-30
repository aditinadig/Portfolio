import "./App.css";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
