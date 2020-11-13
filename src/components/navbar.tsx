import React from "react";
import "./navbar.css";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { useDropdown } from "../hooks/use-dropdown";
import { Link } from "react-router-dom";

const Menu = () => (
  <React.Fragment>
    <li>
      <Link to="/">Find your local group</Link>
    </li>
    <li>
      <Link to="/toolkit">Toolkit</Link>
    </li>
    <li>
      <Link to="/signposting">Signposting</Link>
    </li>
  </React.Fragment>
);

const Navbar = () => {
  const dropdown = useDropdown();

  return (
    <div className="navbar">
      <header>
        <h1>
          <Link to="/">
            <strong>Waltham Forest</strong> Mutual Aid
          </Link>
        </h1>
      </header>
      <nav>
        <ul className={dropdown.open ? "navbar-open" : "navbar-closed"}>
          {dropdown.open && <Menu />}
          <li>
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
