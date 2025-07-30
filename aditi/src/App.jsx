import "./App.css";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import WorkExperience from "./pages/WorkExperience";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <WorkExperience />
      <Projects />
      
      {/* Add other components like TechStack, Values, LetsTalk as needed */}
      {/* <TechStack /> */}
      {/* <Values /> */}
      {/* <LetsTalk /> */}
    </div>
  );
}

export default App;
