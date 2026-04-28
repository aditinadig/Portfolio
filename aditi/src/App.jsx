import "./App.css";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import TechStack from "./pages/TechStack";
import WorkExperience from "./pages/WorkExperience";
import Values from "./pages/Values";
import WhatIBelieveIn from "./pages/WhatIBelieveIn";
import HireMe from "./pages/HireMe";

function App() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Values />
        <WhatIBelieveIn />
        <Projects />
        <WorkExperience />
        <AboutMe />
      </main>
      <HireMe />
    </div>
  );
}

export default App;
