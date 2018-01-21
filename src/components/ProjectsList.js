import React, { Component } from 'react';
import defaultImage from '../img/default.jpg';
import centralIMG from '../img/centralProject.png';
import movieImg from '../img/movie.png';
import storageImage from '../img/ellis.png';
import teeShirtImg from '../img/teeshirt.png';
import twitchImg from '../img/twitch.png';
import inzana from '../img/inzana.png';
import iec from '../img/IEC.png';


class ProjectsList extends Component {
  state  = {
    projects: [],
  }

  componentDidMount() {
    try {
      const projects = [
        {
          id: 'proj1',
          projectTitle: 'Movie Me',
          projectSkills: 'React 16, React Router, Styled Components, API Integration',
          img: movieImg,
          projectDescription: 'Using the powerful Async Await to pull a dynamic list of Movies from an API and diplay them beautifly with styled components',
          projectUrl: "https://ancient-lowlands-96970.herokuapp.com/",
        },  {
          id: 'proj2',
          projectTitle: 'Central Valley Developers',
          projectSkills: 'Node.js, Express, EJS, AWS, MongoDB',
          img: centralIMG,
          projectDescription: 'I built this site with Node, Express, and MongoDB, it is hosted on AWS and is something I build to help the community of developers that I work with.',
          projectUrl: "http://centralvalleydevelopers.com",
        }, {
          id: 'proj3',
          projectTitle: 'Tee Shirt Picker',
          projectSkills: 'React, Cloudinary API',
          img: teeShirtImg,
          projectDescription: 'This React demo is interactive and was fun to make and use. It uses React and Node.js, integrates with the Cloudinary API for image manipulation and is hosted on Heroko so give it a second to load.',
          projectUrl: "https://frozen-reef-26242.herokuapp.com/",
        }, {
          id: 'proj4',
          projectTitle: 'Elis Self Storage',
          projectSkills: 'Html, CSS, SQL, Web Hosting DNS',
          img: storageImage,
          projectDescription: 'This small business site needed to be updated and have outdated content removed. It was an older framework and I had to reverse engineer the code as well as rehost it on a modern hosting platform.',
          projectUrl: "http://ellisturlockstorage.com/",
        }, {
          id: 'proj5',
          projectTitle: 'Twitch Friends',
          projectSkills: 'Jquery, HTML, CSS, API integration',
          img: twitchImg,
          projectDescription: 'This example integrates the Twitch API to show your favorite twitch streamers and filters by streaming status. It uses Jquery and integrates into the Twitch api.',
          projectUrl: "https://jbull328.github.io/portfolio/projects/twitchFriends/twitchFriends.html",
        },{
          id: 'proj6',
        projectTitle: 'Inzana Farms',
        projectSkills: 'Less, Mobile Optimization, E-Commerce, Cross-Browser Testing',
        img: inzana,
        projectDescription: 'I worked with a remote team on this project, mainly focusing on polishing the design elements for mobile and creating the header elements.',
        projectUrl: "https://inzanaranch.com/",
        }, {
          id: 'proj7',
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