import React from "react";
import "./SoftwareSkill.css";
import { Tooltip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
class SoftwareSkill extends React.Component {
  render() {
    return (
      <div>
        <div className="software-skills-main-div">
          <ul className="dev-icons">
            {/* {skillsSection.softwareSkills.map(skills => {
            return (
              <li className="software-skill-inline" name={skills.skillName}>
                <i className={skills.fontAwesomeClassname}></i>
              </li>
            );
          })} */}
            {this.props.logos.map((logo) => {
              return (
                <li className="software-skill-inline" key={logo.skillName} >
                  <Tooltip title={logo.skillName}>
                    <IconButton>
                      <span
                        className="iconify"
                        data-icon={logo.fontAwesomeClassname}
                        style={logo.style}
                        data-inline="false"
                      ></span>
                    </IconButton>
                  </Tooltip>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default SoftwareSkill;
