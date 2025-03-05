// React Imports
import { Tooltip } from "react-tooltip";

// Logo Imports
import reactLogo from "../../assets/react.svg";
import viteLogo from "../../assets/vite.svg";
import nodeLogo from "../../assets/jsIconGreen.svg";
import sassLogo from "../../assets/sass-logo.png";
import tsLogo from "../../assets/ts-logo-512.svg";

// Icon Imports
import { FaMobileRetro } from "react-icons/fa6";
import { FaAt } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFreeCodeCamp } from "react-icons/fa6";

// Style Imports
import "./Home.scss";

// Componenet Imports
import DropGame from "../projects/DropGame";

function Home() {
  return (
    <>
      <div>
        <a
          href="https://vite.dev"
          target="_blank"
          data-tooltip-id="tt-vite-logo"
          data-tooltip-content="Vite"
          data-tooltip-delay-hide={100}
          data-tooltip-place="bottom"
        >
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <Tooltip id="tt-vite-logo" />
        <a
          href="https://react.dev"
          target="_blank"
          data-tooltip-id="tt-react-logo"
          data-tooltip-content="React"
          data-tooltip-delay-hide={100}
          data-tooltip-place="bottom"
        >
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <Tooltip id="tt-react-logo" />
        <a
          href="https://nodejs.org/en"
          target="_blank"
          data-tooltip-id="tt-node-logo"
          data-tooltip-content="Node.JS"
          data-tooltip-delay-hide={100}
          data-tooltip-place="bottom"
        >
          <img src={nodeLogo} className="logo node" alt="Node logo" />
        </a>
        <Tooltip id="tt-node-logo" />
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          data-tooltip-id="tt-typescript-logo"
          data-tooltip-content="TypeScript"
          data-tooltip-delay-hide={100}
          data-tooltip-place="bottom"
        >
          <img src={tsLogo} className="logo typescript" alt="TypeScript logo" />
        </a>
        <Tooltip id="tt-typescript-logo" />
        <a
          href="https://sass-lang.com/"
          target="_blank"
          data-tooltip-id="tt-sass-logo"
          data-tooltip-content="Sass"
          data-tooltip-delay-hide={100}
          data-tooltip-place="bottom"
        >
          <img src={sassLogo} className="logo sass" alt="Sass logo" />
        </a>
        <Tooltip id="tt-sass-logo" />
      </div>
      <br />
      <h1>Tony Banuchi</h1>
      <h2>Full-Stack Software Engineer</h2>
      <div className="card">
        <p>
          Highly adaptable Full-Stack Software Engineer with expertise in
          designing and deploying scalable, high-performance web applications.
          Proven ability to rapidly learn and apply new technologies while
          delivering high-impact solutions using Angular, Node.js, and Express.
          Demonstrated success in remote work environments, leading technical
          initiatives, and securing enterprise applications. Passionate about
          writing clean, maintainable code, optimizing application performance,
          and driving technical excellence while delivering measurable
          improvements.
        </p>
      </div>
      <div className="highlighted-project" >
        <DropGame />
      </div>
      <br />
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
    </>
  );
}

export default Home;
