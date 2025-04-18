// React Imports
import { Route, Routes } from "react-router-dom";

// Componenet Imports
import Home from "./components/home/Home";
import CashRegister from "./components/projects/cashRegister/CashRegister";
import Projects from "./components/projects/projects-page/Projects";
import DropGame from "./components/projects/dropGame/DropGame";
import NavBar from "./components/navbar/NavBar";

// Icon Imports
import { FaMobileRetro } from "react-icons/fa6";
import { FaAt } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFreeCodeCamp } from "react-icons/fa6";

// Style Imports
import styles from "./App.module.scss";

function App() {
  return (
    <>
      <div className="flex flex-row">
      <NavBar />
      </div>
      <main className={`${styles.main} flex flex-col`}>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="cash" element={<CashRegister />} />
      <Route path="drop" element={<DropGame />} />
      <Route path="projects" element={<Projects />} />
      </Routes>
      </main>
      <footer className="soft-padding">
      <h3 className={`${styles['foot-text']}`}>
        Do you need an experienced Software Engineer, capable of adapting to solving the most complex problems? 
        <br />
        I can help your organization succeed! Contact me to find out how.
      </h3>
      <section className={styles.profiles}>
        <a
          href="https://www.linkedin.com/in/tony-banuchi-developer/"
          id="linkedin-link"
          className={`${styles['profile-link-item']}`}
          target="_blank"
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a
          href="https://github.com/TonyBanuchi"
          id="github-link"
          className={`${styles['profile-link-item']}`}
          target="_blank"
        >
          <FaGithub /> GitHub
        </a>
        <a
          href="https://www.freecodecamp.org/TonyBanuchiDev"
          id="profile-link"
          className={`${styles['profile-link-item']}`}
          target="_blank"
        >
          <FaFreeCodeCamp /> freeCodeCamp
        </a>
        <a
          href="mailto:tony.banuchi@gmail.com"
          id="email-link"
          className={`${styles['profile-link-item']}`}
          target="_blank"
        >
          <FaAt /> Send an Email
        </a>
        <a
          href="tel:555-555-5555"
          id="call-link"
          className={`${styles['profile-link-item']}`}
          target="_blank"
        >
          <FaMobileRetro /> Call Me
        </a>
      </section>
      <a target="_blank" href="https://icons8.com/icon/laYYF3dV0Iew/microsoft-sql-server">sql server</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        <p className="licensing">&copy; 2025 Tony Banuchi. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;
