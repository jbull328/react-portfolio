import React, { Component } from "react";
import Social from "./SocialMedia";
import devImg from "../img/dev_img.png";
import dpath from "../img/dpath.png";
import streams from "../img/streams.jpg";

class Landing extends Component {
  state = {
    events: []
  };

  componentDidMount() {
    try {
      const events = [
        {
          id: "event2",
          eventTitle: "Kafka Streams and Events in a Web App",
          eventSkills:
            "Bloging, Technical Documentation, Enterprise Software Design",
          img: devImg,
          eventDescription:
            "A write up/tutorial of a demo I created to show how Kafka's message streams could be used in a modern web app. Part 1 of 3",
          eventUrl:
            "https://dev.to/jbull328/wash-away-the-crud-with-kafka-streaming-3lik"
        },
        {
          id: "event3",
          eventTitle:
            "Began Working as a Senior Developer at the Save Mart Companies.",
          eventSkills:
            "Data Pipline development, Python, Node.js, Redhat, Kubernetes, Kafka, Enterprise Software Design",
          img: streams,
          eventDescription:
            "In Nov. 2018 I started as a Developer on the HR team, where we support 15,000 emploeys, data. We work with HR staff to automate and streamline proccesses and data visulisations.",
          eventUrl: "#"
        },
        {
          id: "event1",
          eventTitle: "Datapath Website",
          eventSkills:
            "Mobile Design, CSS Flexbox, CSS Grid, HubSpot CMS Migration",
          img: dpath,
          eventDescription:
            "I ported this site from a wordpress demo to the Hubspot based CMS. Which involved reverse engineering site elements in Javascript, with Hubspot methods and template engine. Modern CSS Flexbox, Mobile Styles, Cross Browser Testing and custom coded Interfaces with JavaScript",
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
        <h3>A Senior Develeper with skills and experience.</h3>
        <p>
          • 5 years professional experience with Software Engineering on both
          Front End and Back End web application design and development.
          <br />• Proficiency in developing web applications with Vue.js (Vue3, Vue2, Composition API, Vuex, Pinia),
          Node, Python, Express, AWS, API Design and integration, Cloud Integrations,
          NoSQL Databases(MongoDB) and SQL Databases.
          <br />• In-depth experience in front end web development
          using Vue, Javascript, jQuery, JSON, Quasar, Vuetify.
          <br />• Great team player with strong communication skills,
          problem-solving skills and ability to learn as well as adapting to new
          technology.
          <br />• A colaberative leader, with experience working with and
          assisting Jr. Developers. I have been active in my local developer
          community by helping begginers get a taste of the dev life.
          <br />• Agile Methodology, with remote teams or in-house team
          <br />• I love creating things outside of code and it fules my fire,
          to cook, brew my own beer, and contribute in my community.
          <br />
          <br />
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
