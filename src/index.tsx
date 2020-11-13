import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import reportWebVitals from "./reportWebVitals";

import { library } from "@fortawesome/fontawesome-svg-core";
import * as fa from "@fortawesome/free-solid-svg-icons";
import * as brands from "@fortawesome/free-brands-svg-icons";

library.add(
  fa.faClipboardList,
  fa.faCaretDown,
  fa.faCaretUp,
  fa.faPhone,
  fa.faEnvelope,
  fa.faBars,
  brands.faTwitter,
  brands.faFacebookSquare
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
