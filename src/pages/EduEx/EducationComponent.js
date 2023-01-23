import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import EducationImg from "./EducationImg";
import "./EducationComponent.css";
import { Fade } from "react-awesome-reveal";
import Resume from "./Resume";

class Education extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="education-main">
        <Header theme={this.props.theme} />
        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
                <EducationImg theme={theme} />
              </div>
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.orange }}>
                  Experience &#38; Education
                </h1>
                <h3 className="heading-sub-text" style={{ color: theme.text }}>
                  Academic and Professional Curriculum
                </h3>
              </div>
            </div>
          </Fade>
          <Resume />
        </div>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Education;
