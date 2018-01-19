import React, { Component } from 'react';
import defaultImage from '../img/default.jpg';
import styled from 'styled-components';

class About extends Component {
  render () {
    return (
      <AboutWrapper>
        <AboutInfo>
          <img src={defaultImage}/>
          <h2>The right mix of expeirence and creativity</h2>
          <p>I have worked with distributed teams on large software rollouts in an agile team. I am currently working on FullStack projects and Freelancing. I am interested in working with an Agile team, following scrum practices. I like working with React, Node.JS, Express.js, Javascript, MongoDB, Linux, Git, and AWS. 
          I have been in the business of learning daily and working on a wide range of technologies and projects.
            <br/><br/>I have been working in tech for nearly 5 years in various roles, and what I really want is to focus on colaborating with a team and making meaningful improvements to web applications.
             In my career, I have seen how adding a great user experience has really helped the people around me, and I’m all about people. I want to help, I want to get involved and I want to work hard.
             I would love to add value to your team.</p> 
          <span>TLDR: Familiy Man, Code Slinger, Works with others, Makes Stuff, Happy, Positive</span>
        </AboutInfo>
      </AboutWrapper>
    );
  }
}

export default About;

const AboutWrapper = styled.div `
`;

const AboutInfo = styled.div `
    color: #fff;
    text-align: left;
    padding: 2rem 10%;
    display: flex;
    flex-direction: column;
    img {
      max-width: 254px;
      height: auto;
      flex-shrink: auto;
`;