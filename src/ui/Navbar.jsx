import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isClose, setIsClosed] = useState(true);
  const toggleNavbar = () => {
    setIsClosed(!isClose);
  };
  const closeNavbar = () => {
    setIsClosed(true);
  };
  return (
    <nav className="navbar__nav">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          Meal Finder
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isClose ? "false" : "true"}
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isClose ? "" : "show"}`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/features"
                className="nav-link"
                onClick={closeNavbar}
              >
                Features
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/pricing" className="nav-link" onClick={closeNavbar}>
                Pricing
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/login" className="nav-link" onClick={closeNavbar}>
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
