import React, { Component } from "react";
import "./Header.css";
import { Fade } from "react-awesome-reveal";
import { NavLink, Link } from "react-router-dom";
import { settings } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";
// import { Navbar } from "react-bootstrap";
const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};

class Header extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <Fade top duration={3000} distance="20px">
        <SeoHeader />
        <div>
          <header className="header" fixed="top">
            <NavLink to="/" tag={Link} className="logo" end>

            </NavLink>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
            <ul className="menu" style={{ backgroundColor: theme.body }}>
              <li>
                <NavLink
                  to="/"
                  tag={Link}
                  style={({ isActive }) => ({
                    fontWeight: isActive ? "bold" : "normal",
                    color: theme.text,
                    textDecorationLine: isActive ? "underline" : "none"
                  })}
                  onMouseEnter={(event) => onMouseEnter(event, theme.blue)}
                  onMouseOut={(event) => onMouseOut(event)}
                  end
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/education"
                  tag={Link}
                  style={({ isActive }) => ({
                    fontWeight: isActive ? "bold" : "normal",
                    color: theme.text,
                    textDecorationLine: isActive ? "underline" : "none"
                  })}
                  onMouseEnter={(event) => onMouseEnter(event, theme.blue)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Experience &#38; Education
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  tag={Link}
                  style={({ isActive }) => ({
                    fontWeight: isActive ? "bold" : "normal",
                    color: theme.text,
                    textDecorationLine: isActive ? "underline" : "none"
                  })}
                  onMouseEnter={(event) => onMouseEnter(event, theme.blue)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  tag={Link}
                  style={({ isActive }) => ({
                    fontWeight: isActive ? "bold" : "normal",
                    color: theme.text,
                    textDecorationLine: isActive ? "underline" : "none"
                  })}
                  onMouseEnter={(event) => onMouseEnter(event, theme.blue)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Contact Me
                </NavLink>
              </li>
            </ul>
          </header>
        </div>
      </Fade>
    );
  }
}
export default Header;
