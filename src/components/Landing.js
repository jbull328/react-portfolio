import React, { Component } from 'react';
import Social from './SocialMedia';

class Landing extends Component {
  render () {
    return (
      <div className="Landing">
        <h3>Welcome to my portfolio site.</h3>
        <p>• 4+ years professional experience with JavaScript technology on both Front End and Back End web application design and development.
        <br/>• Proficiency in developing web applications with React UI, JQuery, Node, Express, AWS, API integrations, NoSQL Databases.
        <br/>• In-depth experience in front-end web design and development using HTML5, CSS, Bootstrap, Javascript, jQuery, JSON, AJAX, React and Angular 2/4.
        <br/>• Great team player with strong communication skills, problem-solving skills and ability to learn as well as adapting to new technology.
        <br/>• Agile Methodology, with remote teams or in-house team
            <br/>I am a family man, I have two great kids and I love spending as much time with them as I can.<br/> I love creating things outside of code and it fules my fire, to cook, brew my own beer, and contribute in my community.<br/>
            <br/>Thanks, and enjoy.<br/>
          John
        </p>
        <Social />
      </div>
    )
  }
}

export default Landing;
