import React, { Component } from "react";
import { Route, Routes, Router } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/EduEx/EducationComponent";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";
import { createBrowserHistory } from "history";
import { BrowserRouter } from "react-router-dom";

import ReactGA from "react-ga";
export const history = createBrowserHistory();
history.listen((location) => {
  ReactGA.pageview(location.location.pathname);
});

export default class Main extends Component {
  render() {
      return (
        <div>
          <BrowserRouter basename="/" >
            <Routes>
              <Route
                path="/"
                exact
                element={<Home theme={this.props.theme} />}
              />
              <Route
                path="/education"
                element={<Education theme={this.props.theme} />}
              />
              <Route
                path="/contact"
                element={<Contact theme={this.props.theme} />}
              />
              <Route
                path="/projects"
                element={<Projects theme={this.props.theme} />}
              />
            </Routes>
          </BrowserRouter>
        </div>
      );
    
  }
}
