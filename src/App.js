import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./css/global.css";
import "./css/styles.scss";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div id="full-app-container">
          <Route path="/" render={() => <Header />} />
          <div id="content-container">
            <Switch>
              <Route exact path="/" render={() => <Home />} />
              <Route path="/" render={() => <NotFound />} />
            </Switch>
          </div>
          <Route path="/" render={() => <Footer />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
