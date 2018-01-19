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
          <p>This is all the stuff about me</p> 
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
      max-width: 100%;
      height: auto;
      flex-shrink: auto;
`;