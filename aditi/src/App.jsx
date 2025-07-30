import "./App.css";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import TechStack from "./pages/TechStack";
import WorkExperience from "./pages/WorkExperience";
import Values from "./pages/Values";
import HireMe from "./pages/HireMe";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <WorkExperience />
      <TechStack />
      <Projects />
      <Values />
      <HireMe />
      <Footer />
    </div>
  );
}

export default App;
