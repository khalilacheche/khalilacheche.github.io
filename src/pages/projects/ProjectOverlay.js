import React, { Component } from "react";
import ReactDom from 'react-dom';
import raw from "./example.md";
import MarkdownPreview from "@uiw/react-markdown-preview";
const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'rgba(0, 0, 0, 1)',
  padding: '50px',
  transition: "opacity 0.5s ease-in-out",
  overflowY: "scroll",
  width: "80vw",
  maxWidth: "80vw",
  maxHeight: "100vh",
  zIndex: 1000
};
const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  transition: "opacity 0.5s ease-in-out",
  zIndex: 1000
};
class ProjectOverlay extends Component {
  constructor (props) {
    super(props);
    this.escFunction = this.escFunction.bind(this);
    this.state = ({ active: false, md: "" });
  }
  escFunction(event) {
    if (event.key === "Escape") {
      this.props.onClose();
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.escFunction, false);
    fetch(raw)
      .then(r => r.text())
      .then(text => {
        this.setState({ md: text });
      });
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.escFunction, false);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.open !== this.props.open) {
      setTimeout(() => {
        this.setState({ active: this.props.open });
      }, prevProps.open ? 500 : 50);
    }
    if (prevProps.project !== this.props.project) {
      fetch("https://raw.githubusercontent.com/khalilacheche/" + this.props.project.repo + "/master/README.md")
        .then(r => r.text())
        .then(text => {
          this.setState({ md: text });
        });
    }
  }
  render() {
    if (!this.state.active && !this.props.open) return null;

    return ReactDom.createPortal(
      <div>
        <div style={{ ...OVERLAY_STYLES, opacity: this.state.active && this.props.open ? 1 : 0 }} onClick={this.props.onClose}>
          <span
            className="iconify"
            style={{
              color: "white", fontSize: "2em", cursor: "pointer", float: "right", margin: "25px"
            }}
            data-icon={"mdi:close"}
            data-inline="false"
            onClick={this.props.onClose}
          ></span>
        </div>
        <div style={{ ...MODAL_STYLES, opacity: this.state.active && this.props.open ? 1 : 0 }}>
          <MarkdownPreview source={this.state.md} style={{ background: "black" }}
            rehypeRewrite={(node, index, parent) => {
              if (node.tagName === "a" && parent && /^h(1|2|3|4|5|6)/.test(parent.tagName)) {
                parent.children = parent.children.slice(1);
              }
            }} />
        </div>
      </div>,
      document.getElementById('portal')
    );

  }
}

export default ProjectOverlay;
