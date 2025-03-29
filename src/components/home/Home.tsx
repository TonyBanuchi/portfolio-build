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
import mongoDBLogo from "../../assets/MongoDB_Logomark_SpringGreen.svg";
import css3Logo from "../../assets/CSS3_logo.svg";
import oracleLogo from "../../assets/oracle_o.svg";
import mssqlLogo from "../../assets/icons8-sql-server.svg";
import jiraLogo from "../../assets/jira-logo-gradient-blue-attribution_rgb.svg";
import gitLogo from "../../assets/Git-Icon-1788C.svg";
import vscodeLogo from "../../assets/vscode.svg";

// Style Imports
import styles from "./Home.module.scss";

// Componenet Imports
import DropGame from "../projects/dropGame/DropGame";

function Home() {
  return (
    <>
      <div className={`${styles["home-content"]} flex flex-col soft-padding`}>
        <div className={`${styles["tech-icons"]} flex flex-row`}>
          <div className={`${styles["tech-icons"]} flex flex-col`}>
            <a
              href="https://html5.org/"
              target="_blank"
              data-tooltip-id="tt-html5-logo"
              data-tooltip-content="HTML 5"
              data-tooltip-delay-hide={100}
              data-tooltip-float={true}
            >
              <img
                src={html5Logo}
                className={`${styles.logo} ${styles.html5}`}
                alt="HTML 5 logo"
              />
            </a>
            <Tooltip id="tt-html5-logo" />
            <a
              href="https://www.w3.org/TR/2001/WD-css3-roadmap-20010523/"
              target="_blank"
              data-tooltip-id="tt-css3-logo"
              data-tooltip-content="CSS 3"
              data-tooltip-delay-hide={100}
              data-tooltip-float={true}
            >
              <img
                src={css3Logo}
                className={`${styles.logo} ${styles.css3}`}
                alt="CSS 3 logo"
              />
            </a>
            <Tooltip id="tt-css3-logo" />
            <a
              href="https://sass-lang.com/"
              target="_blank"
              data-tooltip-id="tt-sass-logo"
              data-tooltip-content="Sass"
              data-tooltip-delay-hide={100}
              data-tooltip-float={true}
            >
              <img
                src={sassLogo}
                className={`${styles.logo} ${styles.ssas}`}
                alt="Sass logo"
              />
            </a>
            <Tooltip id="tt-sass-logo" />
          </div>
          <div className={`${styles["tech-icons"]} flex flex-col`}>
            <a
              href="https://vite.dev"
              target="_blank"
              data-tooltip-id="tt-vite-logo"
              data-tooltip-content="Vite"
              data-tooltip-delay-hide={100}
              data-tooltip-float={true}
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
              data-tooltip-float={true}
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
              data-tooltip-float={true}
            >
              <img
                src={reactLogo}
                className={`${styles.logo} ${styles.react}`}
                alt="React logo"
              />
            </a>
            <Tooltip id="tt-react-logo" />
          </div>
          <div className={`${styles["tech-icons"]} flex flex-col`}>
            <a
              href="https://nodejs.org/en"
              target="_blank"
              data-tooltip-id="tt-node-logo"
              data-tooltip-content="Node.JS"
              data-tooltip-delay-hide={100}
              data-tooltip-float={true}
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
              data-tooltip-float={true}
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
              data-tooltip-float={true}
            >
              <img
                src={cSharpLogo}
                className={`${styles.logo} ${styles["c-sharp"]}`}
                alt="C-Sharp logo"
              />
            </a>
            <Tooltip id="tt-cSharp-logo" />
          </div>
          <div className={`${styles["tech-icons"]} flex flex-col`}>
            <a
              href="https://www.mongodb.com/"
              target="_blank"
              data-tooltip-id="tt-mongoDB-logo"
              data-tooltip-content="Mongo DB"
              data-tooltip-delay-hide={100}
              data-tooltip-float={true}
            >
              <img
                src={mongoDBLogo}
                className={`${styles.logo} ${styles.mongoDB}`}
                alt="Mongo DB logo"
              />
            </a>
            <Tooltip id="tt-mongoDB-logo" />
            <a
              href="https://www.microsoft.com/en-us/sql-server"
              target="_blank"
              data-tooltip-id="tt-mssql-logo"
              data-tooltip-content="MS SQL"
              data-tooltip-delay-hide={100}
              data-tooltip-float={true}
            >
              <img
                src={mssqlLogo}
                className={`${styles.logo} ${styles.mssql}`}
                alt="MS SQL logo"
              />
            </a>
            <Tooltip id="tt-mssql-logo" />
            <a
              href="https://www.oracle.com/database/"
              target="_blank"
              data-tooltip-id="tt-oracle-logo"
              data-tooltip-content="Oracle"
              data-tooltip-delay-hide={100}
              data-tooltip-float={true}
            >
              <img
                src={oracleLogo}
                className={`${styles.logo} ${styles.oracle}`}
                alt="Oracle logo"
              />
            </a>
            <Tooltip id="tt-oracle-logo" />
          </div>
          <div className={`${styles["tech-icons"]} flex flex-col`}>
            <a
              href="https://git-scm.com/"
              target="_blank"
              data-tooltip-id="tt-git-logo"
              data-tooltip-content="Git"
              data-tooltip-delay-hide={100}
              data-tooltip-float={true}
            >
              <img
                src={gitLogo}
                className={`${styles.logo} ${styles.git}`}
                alt="Git logo"
              />
            </a>
            <Tooltip id="tt-git-logo" />
            <a
              href="https://code.visualstudio.com/"
              target="_blank"
              data-tooltip-id="tt-vscode-logo"
              data-tooltip-content="Visual Studio Code"
              data-tooltip-delay-hide={100}
              data-tooltip-float={true}
            >
              <img
                src={vscodeLogo}
                className={`${styles.logo} ${styles.vscode}`}
                alt="Visual Studio Code Logo"
              />
            </a>
            <Tooltip id="tt-vscode-logo" />
            <a
              href="https://www.atlassian.com/software/jira"
              target="_blank"
              data-tooltip-id="tt-jira-logo"
              data-tooltip-content="Jira"
              data-tooltip-delay-hide={100}
              data-tooltip-float={true}
            >
              <img
                src={jiraLogo}
                className={`${styles.logo} ${styles.jira}`}
                alt="Jira logo"
              />
            </a>
            <Tooltip id="tt-jira-logo" />
          </div>
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
