// React Imports
import { Route, Routes } from "react-router-dom";

// Componenet Imports
import Home from "./components/home/Home";
import CashRegister from "./components/projects/cashRegister/CashRegister";
import Projects from "./components/projects-page/Projects";
import DropGame from "./components/projects/DropGame";
import NavBar from "./components/home/NavBar";

// Icon Imports
import { FaMobileRetro } from "react-icons/fa6";
import { FaAt } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFreeCodeCamp } from "react-icons/fa6";

// Style Imports
import "./App.scss";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="cash" element={<CashRegister />} />
      <Route path="drop" element={<DropGame />} />
      <Route path="projects" element={<Projects />} />
      </Routes>
      <footer>
      <h3>Do you need an experienced Software Engineer, capable of adapting to solving the most complex problems?</h3>
      <h3>I can help your organization succeed! Contact me to find out how.</h3>
      <section id="profiles">
        <a
          href="https://www.freecodecamp.org/TonyBanuchiDev"
          id="profile-link"
          className="profile-link-item"
          target="_blank"
        >
          <FaFreeCodeCamp /> freeCodeCamp
        </a>
        <a
          href="https://www.linkedin.com/in/tony-banuchi-developer/"
          id="linkedin-link"
          className="profile-link-item"
          target="_blank"
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a
          href="https://github.com/TonyBanuchi"
          id="github-link"
          className="profile-link-item"
          target="_blank"
        >
          <FaGithub /> GitHub
        </a>
        <a
          href="mailto:tony.banuchi@gmail.com"
          id="email-link"
          className="profile-link-item"
          target="_blank"
        >
          <FaAt /> Send an Email
        </a>
        <a
          href="tel:555-555-5555"
          id="call-link"
          className="profile-link-item"
          target="_blank"
        >
          <FaMobileRetro /> Call Me
        </a>
      </section>

      </footer>
    </>
  );
}

export default App;
