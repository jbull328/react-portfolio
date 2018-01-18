import React, { Component } from 'react';
import defaultImage from '../img/default.jpg';

class ProjectsList extends Component {
  state  = {
    projects: [],
  }

  componentDidMount() {
    try {
      const projects = [
        {
          id: 'proj1',
          projectTitle: 'This is the awsome project',
          projectSkills: 'I got the skills yo!',
          img: defaultImage,
          projectDescription: 'This is the dopest project eva!'
        },  {
          id: 'proj2',
          projectTitle: 'The Best',
          projectSkills: 'React, and Node',
          img: defaultImage,
          projectDescription: 'This is the dopest project eva!'
        },
    
      ];
      this.setState({
        projects,
      });
  } catch (e) {
    console.log(e);
  }
  }

  render () {
    return (
      <div className="projectList">{this.state.projects.map(projects => {
        return(
          <div className="projectCard container" key={projects.id}>
            <img className="projectImg" src={defaultImage} />
            <h3 className="projectTitle">{projects.projectTitle}</h3>
            <p className="projectDescription">{projects.projectDescription}</p>
            <p className="projectSkills">{projects.projectSkills}</p>
          </div>
        )
      })}</div>
    );
  }
}

export default ProjectsList;