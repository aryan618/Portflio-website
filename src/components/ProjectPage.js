import React, { Component } from "react";
import { Consumer } from "./context";

class ProjectPage extends Component {
  render() {
    const id = this.props.match.params.id;

    return (
      <Consumer>
        {(value) => {
          const { projects } = value;
          const project = projects.find((project) => project.id == id);

          if (!project) {
            // Handle case when project with the specified id is not found
            return <div>Project not found</div>;
          }

          const { imageurl, title, body,link,frontendGithub,backendGithub } = project;
          //const link="https://frontend-in.vercel.app/"
          return (
            <div className="col-12 text-center">
              <div className="justify-content-center" style={{ marginTop: "70px", marginBottom: "30px" }}>
                <img src={imageurl} alt={title} className="img-fluid img-responsive" style={{ maxWidth: "60%" }} />
              </div>
              <div className="text-center">
                <h1>{title}</h1>
              </div>
              <div style={{ padding: "20px", margin: "0 auto", maxWidth: "70%" }}>
                {/* Center the body paragraph with proper alignment */}
                <p className="text-center">{body}</p>
              </div>
              <div style={{ padding: "10px 0" }}>

                {
                    link && (
                      <a href={link} target="_blank" rel="noopener noreferrer">
                    
                    <button className="btn btn-primary">
                       View Project
                    </button>
                  </a>
                    )
                  }
                  {
                    frontendGithub && (
                      <a href={frontendGithub} target="_blank" rel="noopener noreferrer">
                    
                    <button className="btn btn-dark ml-2">
                      <i className="fab fa-github"> Frontend</i> 
                    </button>
                  </a>
                    )
                  }
                  {
                    backendGithub && (
                      <a href={backendGithub} target="_blank" rel="noopener noreferrer">
                    
                    <button className="btn btn-dark ml-2">
                      <i className="fab fa-github"> Backend</i> 
                    </button>
                  </a>
                    )
                  }
                  
              </div>
              <div>
              
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default ProjectPage;
