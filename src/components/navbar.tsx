import React from "react";
import "./navbar.css";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { useDropdown } from "../hooks/use-dropdown";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dropdown = useDropdown();

  return (
    <div className="navbar">
      <header>
        <h1>
          <Link to="/">
            <strong className="d-none d-md-inline">Waltham Forest</strong>
            <strong className="d-md-none">WF</strong> Mutual Aid
          </Link>
        </h1>
      </header>
      <nav>
        <ul className={dropdown.open ? "navbar-open" : "navbar-closed"}>
          <li>
            <Link to="/">Find your local group</Link>
          </li>
          <li>
            <Link to="/toolkit">Toolkit</Link>
          </li>
          <li>
            <Link to="/signposting">Signposting</Link>
          </li>
          <li>
            <Link to="/stories">Stories</Link>
          </li>
          <li>
            <Link to="/chingfordhighamsparkgifthub">
              Chingford & Highams Park Gift Hub
            </Link>
          </li>

          <li className="navbar-toggle">
            <button onClick={dropdown.toggle}>
              <Icon icon={dropdown.open ? "caret-up" : "bars"} />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
