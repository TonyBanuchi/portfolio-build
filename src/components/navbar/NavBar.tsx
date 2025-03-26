// Style Imports
import styles from "./NavBar.module.scss";

// REACT Imports
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
    <nav className={styles.navbar}>
    <NavLink className={`${styles['nav-link']}`} id="home-link" to="/" aria-current="page">Home</NavLink>
    <NavLink className={`${styles['nav-link']}`} id="cash-register-link" to="/cash" aria-current="page">Cash Register</NavLink>
    <NavLink className={`${styles['nav-link']}`} id="drop-game-link" to="/drop" aria-current="page">Drop Game</NavLink>
    <NavLink className={`${styles['nav-link']}`} id="projects-link" to="/projects" aria-current="page">Projects</NavLink>
    </nav>
    </>
  );
}
