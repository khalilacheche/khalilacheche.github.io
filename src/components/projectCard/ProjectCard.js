import React, { Component } from "react";
import { Row, Col, Card } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import Grid from '@mui/material/Grid';
class ProjectCard extends Component {
  render() {
    const proj = parseRepoElements(this.props.project);
    const theme = this.props.theme;
    return (
      <Grid item xs={2} sm={4} md={4} key={this.props.index}>
        <Card className="h-100" style={{ borderColor: "rgb(0, 0, 0)" }} bg={"dark"}>
          <Card.Img
            variant="top"
            src={proj.img_path}
            style={{ maxHeight: "200px", objectFit: "cover", borderRadius: "20px" }}

          />
          <Card.Body>
            <Card.Title>
              <h2 style={{ lineHeight: "1.5", marginTop: "0" }}>
                {proj.title}
              </h2>
            </Card.Title>
            <div>
              {proj.tags.map((tag) => {
                return (
                  <Badge
                    style={{
                      margin: "5px",
                      backgroundColor: "rgb(17, 121, 247)",
                    }}
                  >
                    {" "}
                    {tag}
                  </Badge>
                );
              })}
            </div>
            <div>
              {proj.frameworks.map((framework) => {
                return (
                  <Badge
                    style={{
                      margin: "5px",
                      backgroundColor: "#FF0000",
                    }}
                  >
                    {" "}
                    {framework}
                  </Badge>
                );
              })}
            </div>
            <div>
              {proj.langs.map((lang) => {
                return (
                  <Badge
                    style={{
                      margin: "5px",
                      backgroundColor: "rgb(255, 165, 0)",
                    }}
                  >
                    {" "}
                    {lang}
                  </Badge>
                );
              })}
            </div>
            <div
              className="text-center"
              style={{ marginTop: "20px" }}
            ></div>
            <Card.Text>{proj.description}</Card.Text>
            {proj.link === undefined ? null : (
              <Card.Link>
                <a
                  style={{ color: theme.text }}
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                  <i
                    className={`fas fa-external-link-alt`}
                    style={{
                      color: proj.linkcolor,
                      marginLeft: "5px",
                    }}
                  ></i>
                </a>
              </Card.Link>
            )

            }
            <Card.Link>
              <a
                style={{ color: theme.text }}
                href={proj.code}
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo
                <i
                  className={`fab fa-github`}
                  style={{
                    color: proj.linkcolor,
                    marginLeft: "5px",
                  }}
                ></i>
              </a>
            </Card.Link>
          </Card.Body>
        </Card>
      </Grid>
    );
  }
}
function parseRepoElements(elem) {
  var res = {
    title: "App",
    img_path: "",
    description:
      "Lorem Impsum",
    tags: [
    ],
    langs: [],
    frameworks: [],
    link: undefined,
    code: "",
    linkcolor: "white",
  };
  res.img_path = elem.metadata.img_path === undefined ? res.img_path : elem.metadata.img_path;
  res.code = elem.url;
  res.title = elem.metadata.title;
  var content = elem.metadata.description;
  res.link = elem.metadata.link;
  res.description = content.slice(0, 100) + '...';
  res.tags = elem.metadata.tags;
  res.langs = elem.metadata.langs;
  res.frameworks = elem.metadata.frameworks;
  return res;
}
export default ProjectCard;