import React, { Component } from 'react';
import meImg from '../img/me_bw.JPG';
import styled from 'styled-components';
import Contact from './Contact';

class About extends Component {
  render() {
    return (
      <AboutWrapper>
        <AboutInfo className="aboutInfo">
          <img src={meImg} alt="John" />
          <div className="container">
            <Contact />
            <h2>The right mix of experience and creativity</h2>
            <p>
              Creative problem solver with experience working with diverse,
              distributed teams. Fullstack projects built with Vue.js, Node.js, Express,
              Javascript, hosted on AWS ec2. Four plus
              years experience as a Developer, focusing on
              solving problems and adding value to the things I work on. I keep
              it light, work hard and ask questions to get to bottom of things.
              <br />
              <br />I can generaly be found outside, hiking trails, trying to go
              to more concerts. Chill music, making things. Walks, more walks.
              Then probably some more walks after that.
            </p>
          </div>
        </AboutInfo>
      </AboutWrapper>
    );
  }
}

export default About;

const AboutWrapper = styled.div``;

const AboutInfo = styled.div`
  color: #fff;
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  line-height: 1.4;
  img {
    max-width: 254px;
    height: 365px;
    flex-shrink: auto;
  }
  span {
    font-size: 16px;
    font-weight: bold;
    color: #999;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  .container {
    margin-left: 38px;
    max-width: 850px;
  }
`;
