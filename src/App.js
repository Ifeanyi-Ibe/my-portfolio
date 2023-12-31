import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="pb-16">
      <NavBar />
      <Profile />
      <hr className="text-white md:mx-48 pb-8" />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
