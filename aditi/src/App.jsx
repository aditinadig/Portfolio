import "./App.css";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import Hero from "./pages/Hero";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
    </div>
  );
}

export default App;
