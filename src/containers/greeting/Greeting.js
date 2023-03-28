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
                    typewriter
                      .typeString("Data Scientist").pauseFor(200).deleteAll()
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
                  I am currently pursuing a Masters degree in Data Science and am passionate about using <mark data-entity="passion">Artificial Intelligence</mark> to solve real-world problems.
                  I am particularly interested in Computer Vision applications and using state-of-the-art machine learning models to improve them. <br></br>
                  Apart from my academic pursuits, I am also an <mark data-entity="qualifier">avid maker</mark> and enjoy experimenting with various technologies in my free time.
                  My personal projects range from  {" "}<mark data-entity="skills"> Software Engineering, Robotics, and Machine Learning</mark>. <br></br>
                  I believe that hands-on experience in different areas of technology is essential to being a well-rounded data scientist. <br></br>
                  I want to use my skills and knowledge to make a <mark data-entity="goal">positive impact</mark> on people's life using technology, while enjoying the ride doing it.
                  <br></br>I am excited to share my portfolio with you and I hope you find it informative and interesting.
                  <br></br>Thank you for visiting!
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
