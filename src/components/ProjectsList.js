import React, { Component } from 'react';
import defaultImage from '../img/default.jpg';
import centralIMG from '../img/centralProject.png';
import movieImg from '../img/movie.png';
import storageImage from '../img/ellis.png';
import teeShirtImg from '../img/teeshirt.png';
import twitchImg from '../img/twitch.png';
import inzana from '../img/inzana.png';
import iec from '../img/IEC.png';
import dpath from '../img/dpath.png';
import octocat from '../img/octocat.png';


class ProjectsList extends Component {
  state  = {
    projects: [],
  }

  componentDidMount() {
    try {
      const projects = [
          {
            id: 'proj1',
            projectTitle: 'Hawksoft CMS',
            projectSkills: 'Vue.js, Typescript, Composition Api, Vue 3, Pinia, Vuex, B2B',
            img: octocat,
            projectDescription: 'Utilized cutting edge Vue3 (Pinia, Vuex, Typescript, Composition API) features to revolutionize a 25 year old B2B software solution used by 1000’s of businesses',
            projectUrl: "https://www.hawksoft.com/",
          },
          {
            id: 'proj2',
            projectTitle: 'Quality Control Produce App',
            projectSkills: 'Mobile App, Vue.js, Node.js, Fullstack',
            img: octocat,
            projectDescription: 'Product design from start to finish, discovery, implimentation and deployment for key business segment. Mobile high volume product warehouse tracking and reporting app.',
            projectUrl: "https://jbull.co/projects",
          },
          {
            id: 'proj3',
            projectTitle: 'Datapath Website',
            projectSkills: 'Mobile Design, CSS Flexbox, CSS Grid',
            img: dpath,
            projectDescription: 'Modern CSS Flexbox, Mobile Styles, Cross Browser Testing and custom coded Interfaces with JavaScript',
            projectUrl: "https://www.mydatapath.com/",
          },   
          {
            id: 'proj4',
            projectTitle: 'Elis Self Storage',
            projectSkills: 'Html, CSS, SQL, Web Hosting DNS',
            img: storageImage,
            projectDescription: 'This small business site needed to be updated and have outdated content removed. It was an older framework and I had to reverse engineer the code as well as rehost it on a modern hosting platform.',
            projectUrl: "http://ellisturlockstorage.com/",
          }, 
          {
          id: 'proj5',
          projectTitle: 'Inzana Farms',
          projectSkills: 'Less, Mobile Optimization, E-Commerce, Cross-Browser Testing',
          img: inzana,
          projectDescription: 'I worked with a remote team on this project, mainly focusing on polishing the design elements for mobile and creating the header elements.',
          projectUrl: "https://inzanaranch.com/",
          }, {
            id: 'proj6',
          projectTitle: 'Industrial Electrical',
          projectSkills: 'SQL Quireies, Internal Facing, HTML Emails',
          img: iec,
          projectDescription: 'I created, maintained internal web apps. This included reporting for differnet departments, automating processes, and sending out custom styled html emails to automate tasks.',
          projectUrl: "http://industrialelectricalco.com/",
        }
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
