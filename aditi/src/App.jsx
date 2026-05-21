import "./App.css";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import ProblemApproach from "./pages/ProblemApproach";
import RoleFit from "./pages/RoleFit";
import TechStack from "./pages/TechStack";
import UxOrigin from "./pages/UxOrigin";
import WorkExperience from "./pages/WorkExperience";
import HireMe from "./pages/HireMe";

function App() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Navbar />
      <main>
        <Hero />
        <UxOrigin />
        <ProblemApproach />
        <WorkExperience />
        <Projects />
        <AboutMe />
        <RoleFit />
        <TechStack />
      </main>
      <HireMe />
    </div>
  );
}

export default App;
