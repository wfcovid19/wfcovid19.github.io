import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Toolkit from "./pages/toolkit";
import Signposting from "./pages/signposting";
import Stories from "./pages/stories";
import FAQ from "./pages/faq";
import ChingfordHighamsParkGiftHub from "./pages/chingfordhighamsparkgifthub";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const App = () => (
  <Router>
    <div id="main">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/toolkit" component={Toolkit} exact />
        <Route path="/signposting" component={Signposting} />
        <Route path="/faq" component={FAQ} exact />
        <Route path="/stories" component={Stories} exact />
        <Route
          path="/chingfordhighamsparkgifthub"
          component={ChingfordHighamsParkGiftHub}
          exact
        />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
