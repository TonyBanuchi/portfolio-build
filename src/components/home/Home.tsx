// React Imports
import { Tooltip } from "react-tooltip";

// Logo Imports
import reactLogo from "../../assets/react.svg";
import viteLogo from "../../assets/vite.svg";
import nodeLogo from "../../assets/jsIconGreen.svg";
import sassLogo from "../../assets/sass-logo.png";
import tsLogo from "../../assets/ts-logo-512.svg";



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
    </>
  );
}

export default Home;
