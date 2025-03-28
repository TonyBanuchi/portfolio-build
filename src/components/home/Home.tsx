// React Imports
import { Tooltip } from "react-tooltip";

// Logo Imports
import angularLogo from "../../assets/angular_gradient.png";
import reactLogo from "../../assets/react.svg";
import viteLogo from "../../assets/vite.svg";
import nodeLogo from "../../assets/jsIconGreen.svg";
import sassLogo from "../../assets/sass-logo.png";
import tsLogo from "../../assets/ts-logo-512.svg";
import cSharpLogo from "../../assets/csharpIcon.png";
import html5Logo from "../../assets/HTML5_Badge.svg";

// Style Imports
import styles from "./Home.module.scss";

// Componenet Imports
import DropGame from "../projects/dropGame/DropGame";

function Home() {
  return (
    <>
      <div className={`${styles["home-content"]} flex flex-col soft-padding`}>
        <div className={styles["tech-icons"]}>
          <a
            href="https://vite.dev"
            target="_blank"
            data-tooltip-id="tt-vite-logo"
            data-tooltip-content="Vite"
            data-tooltip-delay-hide={100}
            data-tooltip-place="bottom"
          >
            <img src={viteLogo} className={styles.logo} alt="Vite logo" />
          </a>
          <Tooltip id="tt-vite-logo" />
          <a
            href="https://angular.dev/"
            target="_blank"
            data-tooltip-id="tt-angular-logo"
            data-tooltip-content="Angular"
            data-tooltip-delay-hide={100}
            data-tooltip-place="bottom"
          >
            <img
              src={angularLogo}
              className={`${styles.logo} ${styles.angular}`}
              alt="Angular logo"
            />
          </a>
          <Tooltip id="tt-angular-logo" />
          <a
            href="https://react.dev"
            target="_blank"
            data-tooltip-id="tt-react-logo"
            data-tooltip-content="React"
            data-tooltip-delay-hide={100}
            data-tooltip-place="bottom"
          >
            <img
              src={reactLogo}
              className={`${styles.logo} ${styles.react}`}
              alt="React logo"
            />
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
            <img
              src={nodeLogo}
              className={`${styles.logo} ${styles.node}`}
              alt="Node logo"
            />
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
            <img
              src={tsLogo}
              className={`${styles.logo} ${styles.typescript}`}
              alt="TypeScript logo"
            />
          </a>
          <Tooltip id="tt-typescript-logo" />
          <a
            href="https://learn.microsoft.com/en-us/dotnet/csharp/"
            target="_blank"
            data-tooltip-id="tt-cSharp-logo"
            data-tooltip-content="C#"
            data-tooltip-delay-hide={100}
            data-tooltip-place="bottom"
          >
            <img
              src={cSharpLogo}
              className={`${styles.logo} ${styles['c-sharp']}`}
              alt="C-Sharp logo"
            />
          </a>
          <Tooltip id="tt-cSharp-logo" />
          <a
            href="https://sass-lang.com/"
            target="_blank"
            data-tooltip-id="tt-sass-logo"
            data-tooltip-content="Sass"
            data-tooltip-delay-hide={100}
            data-tooltip-place="bottom"
          >
            <img
              src={sassLogo}
              className={`${styles.logo} ${styles.ssas}`}
              alt="Sass logo"
            />
          </a>
          <Tooltip id="tt-sass-logo" />
          <a
            href="https://html5.org/"
            target="_blank"
            data-tooltip-id="tt-html5-logo"
            data-tooltip-content="HTML 5"
            data-tooltip-delay-hide={100}
            data-tooltip-place="bottom"
          >
            <img
              src={html5Logo}
              className={`${styles.logo} ${styles.html5}`}
              alt="HTML 5 logo"
            />
          </a>
          <Tooltip id="tt-html5-logo" />
        </div>
        <br />
        <h1>Tony Banuchi</h1>
        <h2>Full-Stack Software Engineer</h2>
        <div className={styles.card}>
          <p>
            Highly adaptable Full-Stack Software Engineer with expertise in
            designing and deploying scalable, high-performance web applications.
            Proven ability to rapidly learn and apply new technologies while
            delivering high-impact solutions using Angular, Node.js, and
            Express. Demonstrated success in remote work environments, leading
            technical initiatives, and securing enterprise applications.
            Passionate about writing clean, maintainable code, optimizing
            application performance, and driving technical excellence while
            delivering measurable improvements.
          </p>
        </div>
        <div className={styles["highlighted-project"]}>
          <DropGame />
        </div>
      </div>
    </>
  );
}

export default Home;
