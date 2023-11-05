import React from "react";

function ResumeContent(props) {


  console.log(props);
  return (
    <div className="resume-item">
      <h2 className={props.title ? "resume-title" : "resume-no-title"}>
        {props.title}
      </h2>
      <span className="date"><em>{props.date}</em></span>
      <h3 className={props.title ? "resume-subtitle" : "resume-no-title"}>{props.subtitle}</h3>
      {props.published_in && <h4 className="resume-subtitle"><a href={props.published_in.link}>{props.published_in.title}</a></h4>}
      <p>

      </p>
      <ul>
        {props.content.map((value, index) => (
          <li key={index}> ‣ {value}</li>
        ))}
      </ul>
    </div>
  );
}

export default ResumeContent;
