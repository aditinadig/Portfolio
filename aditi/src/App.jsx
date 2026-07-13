import "./App.css";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import TechStack from "./pages/TechStack";
import WorkExperience from "./pages/WorkExperience";
import HireMe from "./pages/HireMe";

function App() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Navbar />
      <main>
        <Hero />
        <WorkExperience />
        <Projects />
        <AboutMe />
        <TechStack />
      </main>
      <HireMe />
    </div>
  );
}

export default App;
