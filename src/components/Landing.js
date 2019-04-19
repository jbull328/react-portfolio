import React, { Component } from "react";
import Social from "./SocialMedia";
import octocat from "../img/octocat.png";

class Landing extends Component {
  state = {
    events: []
  };

  componentDidMount() {
    try {
      const events = [
        {
          id: "event1",
          eventTitle: "Datapath Website",
          eventSkills: "Mobile Design, CSS Flexbox, CSS Grid",
          img: octocat,
          eventDescription:
            "Modern CSS Flexbox, Mobile Styles, Cross Browser Testing and custom coded Interfaces with JavaScript",
          eventUrl: "https://www.mydatapath.com/"
        },
        {
          id: "event2",
          eventTitle: "Kafka Streams and Events in a Web App",
          eventSkills:
            "Bloging, Technical Documentation, Enterprise Software Design",
          img: octocat,
          eventDescription:
            "A write up/ tutorial of a demo I created to show how Kafka's message streams could be used in a modern web app. Part 1 of 3",
          eventUrl:
            "https://dev.to/jbull328/wash-away-the-crud-with-kafka-streaming-3lik"
        },
        {
          id: "event3",
          eventTitle: "Kafka Streams and Events in a Web App",
          eventSkills:
            "Bloging, Technical Documentation, Enterprise Software Design",
          img: octocat,
          eventDescription:
            "Modern CSS Flexbox, Mobile Styles, Cross Browser Testing and custom coded Interfaces with JavaScript",
          eventUrl: "https://www.mydatapath.com/"
        }
      ];
      this.setState({
        events
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const events = this.state;
    return (
      <div className="Landing">
        <h3>A develeper with skills all and experience.</h3>
        <p>
          • 4+ years professional experience with Software Engineering on both
          Front End and Back End web application design and development.
          <br />• Proficiency in developing web applications with React UI,
          Vue.js JQuery, Node, Express, AWS, API Design and integration, NoSQL
          Databases(MongoDB) and SQL Databases.
          <br />• In-depth experience in front-end web development and
          development using HTML5, CSS, Bootstrap, Javascript, jQuery, JSON,
          AJAX, React and Angular 2/4.
          <br />• Great team player with strong communication skills,
          problem-solving skills and ability to learn as well as adapting to new
          technology.
          <br />• Agile Methodology, with remote teams or in-house team
          <br />I am a family man, I have two great kids and I love spending as
          much time with them as I can.
          <br /> I love creating things outside of code and it fules my fire, to
          cook, brew my own beer, and contribute in my community.
          <br />
          <br />
          Thanks, and enjoy.
          <br />
          John
        </p>
        <div className="currentEvents">
          {this.state.events.map(events => {
            return (
              <a href={events.eventUrl}>
                <div className="eventCard container" key={events.id}>
                  <img className="eventImg" src={events.img} />
                  <article>
                    <h3 className="eventTitle">{events.eventTitle}</h3>
                    <p className="eventDescription">
                      {events.eventDescription}
                    </p>
                    <p className="eventSkills">{events.eventSkills}</p>
                  </article>
                </div>
              </a>
            );
          })}
        </div>
        <Social />
      </div>
    );
  }
}

export default Landing;
