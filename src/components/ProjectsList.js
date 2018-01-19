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
          projectDescription: 'This is the dopest project eva!',
          projectUrl: "https://google.com",
        },  {
          id: 'proj2',
          projectTitle: 'The Best',
          projectSkills: 'React, and Node',
          img: defaultImage,
          projectDescription: 'I built this site with Node, Express, and MongoDB, it is hosted on AWS and is something I build to help the community of developers that I work with. Through this app I have learned to become comfortable with REST and creating routes. Object-oriented development and many Node packages and libraries like passport js and multer. I have learned a lot while building it and it has been great to give back to my local community.',
          projectUrl: "https://facebook.com",
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
          <a href={projects.projectUrl}><div className="projectCard container" key={projects.id}>
            <img className="projectImg" src={projects.img} />
            <article>
              <h3 className="projectTitle">{projects.projectTitle}</h3>
              <p className="projectDescription">{projects.projectDescription}</p>
              <p className="projectSkills">{projects.projectSkills}</p>
            </article>     
          </div></a>
        )
      })}</div>
    );
  }
}

export default ProjectsList;