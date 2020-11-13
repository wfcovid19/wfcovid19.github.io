import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Toolkit from "./pages/toolkit";
import Signposting from "./pages/signposting";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const App = () => (
  <React.Fragment>
    <Router>
      <div id="main">
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/toolkit" component={Toolkit} exact />
          <Route path="/signposting" component={Signposting} exact />
        </Switch>
        <Footer />
      </div>
    </Router>
  </React.Fragment>
);

export default App;
