import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Button from "../../components/button/Button";
import { Octokit } from "@octokit/rest";
import Select from 'react-select';
import ProjectCard from "../../components/projectCard/ProjectCard";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-awesome-reveal";
import { projectsHeader } from "../../portfolio.js";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";
import makeAnimated from 'react-select/animated';
import Grid from '@mui/material/Grid';
export const octokit = new Octokit({
  auth: process.env.REACT_APP_GH,
  userAgent: 'skylight v1'
});
const animatedComponents = makeAnimated();
const topics = {
  "Hardware": ["IoT", "Embedded Systems"],
  "Software": ["Web Development", "Mobile Development", "Game Development"],
  "Data Science": ["NLP", "Computer Vision", "Data Analysis"]
};
function selectStyles(mainColor) {
  return {
    option: (base, state) => ({
      ...base,
      background: "rgba(0, 0, 0, 1)",
      color: "rgb(255, 255, 255)",
      borderRadius: "0.5rem",
      ":hover": {
        color: "rgb(0, 0, 0)",
        background: mainColor
      },
      focus: {
        background: mainColor
      }
    }),
    control: (base, state) => ({
      ...base,
      borderColor: mainColor,
      boxShadow: 'none',
      ":hover": {
        borderColor: mainColor
      },
      focus: {
        borderColor: mainColor
      },
      color: "rgb(0, 0, 0)",
      background: "rgba(0,0,0)"
    }),
    dropdownIndicator: (base, state) => ({
      ...base,
      background: mainColor,
      color: "rgb(0, 0, 0)"
    }),
    indicatorSeparator: (base, state) => ({
    }),
    clearIndicator: (base, state) => ({
      ...base,
      background: mainColor,
      color: "rgb(0, 0, 0)"
    }),
    multiValue: (base, state) => ({
      ...base,
      background: mainColor,
      color: "rgb(0, 0, 0)",
      lineHeight: "1",
      borderRadius: "0.35em",
      verticalAlign: "middle",
      fontWeight: "bold",
    }),
    multiValueLabel: (base, state) => ({
      ...base,
      color: "rgb(0, 0, 0)",
    }),
    multiValueRemove: (base, state) => ({
      ...base,
      color: "rgb(0, 0, 0)",
      ":hover": {
        background: "rgb(0,0,0,0)",
        color: "rgb(0, 0, 0)"
      }
    }),
    indicatorsContainer: (base, state) => ({
      ...base,
      background: mainColor,

    }),
    menu: (base, state) => ({
      ...base,
      background: "rgba(0, 0, 0, 1)",
      color: "rgb(255, 255, 255)",
      borderRadius: "0.5em",
      marginTop: "0",
    }),

  };
}

class Projects extends Component {
  constructor (props) {
    super(props);
    this.state = { allRepos: [], selectedTags: [], selectedFrameworks: [], selectedLangs: [], tags: [], frameworks: [], langs: [] };
  }

  updateSelectedVariable(variable) {
    return ((selectedOption) => {
      this.setState({ [variable]: selectedOption, lastSelected: variable });

    });
  }
  filterProjects() {
    var repos = this.state.allRepos;
    var selectedTags = this.state.selectedTags;
    var selectedFrameworks = this.state.selectedFrameworks;
    var selectedLangs = this.state.selectedLangs;
    repos = repos.filter((repo) => {
      var tags = repo.metadata.tags;
      var frameworks = repo.metadata.frameworks;
      var langs = repo.metadata.langs;
      var res = selectedTags.length === 0 || selectedTags.some((tag) => tags.includes(tag.value));
      res = res && (selectedFrameworks.length === 0 || selectedFrameworks.some((framework) => frameworks.includes(framework.value)));
      res = res && (selectedLangs.length === 0 || selectedLangs.some((lang) => langs.includes(lang.value)));
      return res;
    });

    return repos;
  }
  filterSelectionOptions(filteredProjects, variable) {
    var options = this.state[variable];
    if (this.state.lastSelected !== undefined && this.state.lastSelected.toLowerCase().includes(variable)) {
      return options;
    }
    var filteredOptions = options.filter((option) => {
      return filteredProjects.some((project) => project.metadata[variable] !== undefined && project.metadata[variable].includes(option.value));
    });

    return filteredOptions;
  }

  componentDidMount() {
    octokit.repos.listForUser({
      username: 'khalilacheche',
      type: 'all',
      sort: 'created'
    }).then(res => {
      var repos = res.data;
      return Promise.all(
        repos.map(repo => retrieveRepoMetadata(repo)));
    }).then(lRepoMetadata => {
      lRepoMetadata = lRepoMetadata.filter((el) => el.metadata !== undefined);
      var tags = getValuesSet(lRepoMetadata, "tags");
      var languages = getValuesSet(lRepoMetadata, "langs");
      var frameworks = getValuesSet(lRepoMetadata, "frameworks");
      this.setState({
        "allRepos": lRepoMetadata,
        "tags": tags,
        "langs": languages,
        "frameworks": frameworks
      });

    }).catch(err => console.log(err));
  }
  render() {
    const filteredProjects = this.filterProjects();
    const filteredTags = this.filterSelectionOptions(filteredProjects, "tags");
    const filteredFrameworks = this.filterSelectionOptions(filteredProjects, "frameworks");
    const filteredLanguages = this.filterSelectionOptions(filteredProjects, "langs");

    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.orange, fontWeight: "bold" }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.text }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="repo-selector-div-main">
          <Grid container spacing={1}>
            <Grid item xs={6} style={{ textAlign: "right", marginTop: "0.3em" }}>
              Show the projects in either <div style={{ display: "inline", borderColor: "rgb(17, 121, 247)", borderStyle: "solid", borderRadius: "5px", padding: "2.5px" }}> domains</div> of:
            </Grid>
            <Grid item xs={3}>
              <Select
                isMulti
                placeholder='All'
                components={animatedComponents}
                name="colors"
                onChange={this.updateSelectedVariable("selectedTags")}
                options={filteredTags}
                className="basic-multi-select"
                classNamePrefix="select"
                styles={selectStyles("rgb(17, 121, 247)")}
              />
            </Grid>
            <Grid item xs={6} style={{ textAlign: "right", marginTop: "0.3em" }}>
              using either of the following <div style={{ display: "inline", borderColor: "#FF0000", borderStyle: "solid", borderRadius: "5px", padding: "2.5px" }}> frameworks</div>:
            </Grid>
            <Grid item xs={3}>
              <Select
                isMulti
                placeholder='All'
                components={animatedComponents}
                name="colors"
                onChange={this.updateSelectedVariable("selectedFrameworks")}
                options={filteredFrameworks}
                className="basic-multi-select"
                classNamePrefix="select"
                styles={selectStyles("#FF0000")}
              />
            </Grid>
            <Grid item xs={6} style={{ textAlign: "right", marginTop: "0.3em" }}>
              and written in either of the following <div style={{ display: "inline", borderColor: "rgb(255, 165, 0)", borderStyle: "solid", borderRadius: "5px", padding: "2.5px" }}> languages</div>:
            </Grid>
            <Grid item xs={3}>
              <Select
                isMulti
                placeholder='All'
                components={animatedComponents}
                onChange={this.updateSelectedVariable("selectedLangs")}
                name="colors"
                styles={selectStyles("rgb(255, 165, 0)")}
                options={filteredLanguages}
                className="basic-multi-select"
                classNamePrefix="select"
              />
            </Grid>
          </Grid>





        </div>
        <div className="repo-chart-div-main">

        </div>
        <div className="repo-cards-div-main">
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {filteredProjects.map((proj, index) => {
              return <ProjectCard project={proj} key={index} theme={theme} />;
            })}

          </Grid>
        </div>
        <Button
          text={"More Projects"}
          className="project-button"
          href="https://github.com/khalilacheche"
          newTab={true}
          theme={theme}
        />
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div >
    );
  }
};

function retrieveRepoMetadata(repo) {
  var s = `https://raw.githubusercontent.com/${repo.owner.login}/${repo.name}/project-metadata/project-metadata.json`;
  return fetch(s).catch(err => undefined).then(res => {
    return ((res === undefined) || (res.status === 200)) ? res.json() : undefined;
  }).catch(err => console.log(repo, err)).then(
    res => {
      return { repo: repo.name, owner: repo.owner.login, metadata: res, url: repo.html_url, created_at: repo.created_at };
    });
}
function getValuesSet(repos, attributeName) {
  var values = [];
  repos.forEach(repo => {
    if (repo.metadata !== undefined && repo.metadata[attributeName] !== undefined) {
      repo.metadata[attributeName].forEach(val => {
        if (val in values) {
          values[val] = values[val] + 1;
        } else {
          values[val] = 1;
        }
      });
    }
  });
  return Object.keys(values).map((val) => ({
    "value": val,
    "label": val //+ " (" + values[val] + ")"
  })
  );
}



export default Projects;