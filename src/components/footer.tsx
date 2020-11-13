import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import "./footer.css";

const Footer = () => (
  <footer className="footer">
    <ul>
      <li>
        <a
          href="https://facebook.com/groups/wfcoronavirus"
          target="_blank"
          rel="noreferrer"
        >
          <Icon icon={["fab", "facebook-square"]} />
        </a>
      </li>
      <li>
        <a href="mailto:walthamforestmutualaid@gmail.com">
          <Icon icon="envelope" />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/WalthamAid"
          target="_blank"
          rel="noreferrer"
        >
          <Icon icon={["fab", "twitter"]} />
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer;
