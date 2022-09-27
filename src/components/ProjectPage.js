import React from "react";
import { Consumer } from "./context";

function ProjectPage(props) {
  return (
    <Consumer>
      {(value) => {
        const { projects } = value;
        const id = props.match.params.id;
        console.log(id);
        const project = projects.filter((project) => project.id == id)[0];
        console.log(project);
        const { imageurl, title, body } = project;
        return (
          <div className="col-12 text-center">
            <div className="justify-content-center">
              <img src={imageurl} alt={title} className="img-fluid" />
            </div>
            <div className="text-center">
              <h1>{title}</h1>
            </div>
            <div>{body}</div>
          </div>
        );
      }}
    </Consumer>
  );
}

export default ProjectPage;
