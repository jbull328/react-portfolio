import React, { Component } from "react";
import meImg from "../img/me_bw.JPG";
import styled from "styled-components";
import Contact from "./Contact";

class About extends Component {
  render() {
    return (
      <AboutWrapper>
        <AboutInfo>
          <img src={meImg} alt="John" />
          <Contact />
          <h2>The right mix of experience and creativity</h2>
          <p>
            Creative problem solver with experience working with diverse,
            distributed teams. Fullstack projects built with Node.js, Express,
            Javascript, React, MongoDB, hosted on AWS ec2, and Heroku. Three
            years experience as a FrontEnd Developer at an agency, focusing on
            mobile styling and cross-browser optimization/testing.
          </p>
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
  flex-direction: column;
  line-height: 1.4;
  img {
    max-width: 254px;
    height: auto;
    flex-shrink: auto;
  }
  span {
    font-size: 16px;
    font-weight: bold;
    color: #999;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
`;
