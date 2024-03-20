import React from "react";
import "./Greeting.css";
// import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-awesome-reveal";
import BannerImg from "./BannerImg";
import Typewriter from "typewriter-effect";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import { competitiveSites } from "../../portfolio";
import { Link } from "react-router-dom";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.orange, fontWeight: "bold" }}>
                {greeting.title}
              </h1>
              <h1 className="greeting-sub" style={{ color: theme.grayText }}>
                I'm <mark data-entity="He/Him">{greeting.sub}</mark>
              </h1>
              <h1 className="greeting-typewriter" style={{ color: theme.blue }}>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter.typeString("ML Engineer")
                      .pauseFor(200).deleteAll().typeString("Data Scientist").pauseFor(200).deleteAll().typeString("Software Developer").pauseFor(200).deleteAll().typeString("Robotics Enthusiast").pauseFor(200).deleteAll().typeString("Problem Solver").pauseFor(200).deleteAll().typeString("AI Enthusiast").pauseFor(200).deleteAll().typeString("Lifelong Learner").pauseFor(200).deleteAll().typeString("Technology Enthusiast").pauseFor(200).deleteAll().typeString("Passionate Developer").pauseFor(200).deleteAll()
                      .start();
                  }}
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <span
                className="greeting-text-span subTitle"
                style={{ color: theme.text }}>
                <div className="entities">
                  I'm currently pursuing a Master's in Data Science, passionate about leveraging AI, especially in <mark data-entity="passion">Computer Vision</mark>, to address real-world challenges.
                  <br />
                  Beyond academics, I'm an enthusiastic maker, dabbling in {" "}<mark data-entity="skills"> Software Engineering, Robotics, and Machine Learning</mark>in my spare time.
                  <br /> I'm committed to using my diverse technological expertise to make a <mark data-entity="goal">positive impact</mark> through technology, enjoying the journey along the way.
                  <br />
                  Excited to present my portfolio, I hope you find it both informative and engaging.
                  Thanks for stopping by!

                </div>
              </span>
              <CompetitiveSites logos={competitiveSites.competitiveSites} />
              <div className="button-greeting-div">
                <Link to="/contact" > <Button text="Contact Me" ></Button> </Link>
                <Button
                  text="See my resume"
                  newTab={true}
                  href={greeting.resumeLink}
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <BannerImg />
          </div>
        </div>
      </div>
    </Fade >
  );
}
