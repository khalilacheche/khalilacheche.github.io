import React from "react";
import "./CompetitiveSites.css";
import { Tooltip } from "@mui/material";
import IconButton from "@mui/material/IconButton";

class CompetitiveSites extends React.Component {
  render() {
    return (
      <div className="competitive-sites-main-div">
        <ul className="dev-icons">
          {this.props.logos.map((logo) => {
            return (
              <li className="competitive-sites-inline" name={logo.siteName} key={logo.siteName}>
                <Tooltip title={logo.siteName} arrow>
                  <a
                    href={logo.profileLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconButton>
                      <span
                        className="iconify"
                        data-icon={logo.iconifyClassname}
                        style={logo.style}
                        data-inline="false"
                      ></span>

                    </IconButton>

                  </a>
                </Tooltip>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CompetitiveSites;
