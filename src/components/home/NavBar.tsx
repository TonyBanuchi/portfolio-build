// Style Imports
import "./Home.scss";

// REACT Imports
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
    <nav className="navbar">
    <NavLink id="home" to="/" aria-current="page">Home</NavLink>
    <NavLink id="cash-register" to="/cash" aria-current="page">Cash Register</NavLink>
    <NavLink id="drop-game" to="/drop" aria-current="page">Drop Game</NavLink>
    <NavLink id="projects" to="/projects" aria-current="page">Projects</NavLink>
    </nav>
    </>
  );
}
