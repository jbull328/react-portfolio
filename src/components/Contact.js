import React, { Component } from 'react';
import styled from 'styled-components';
import defaultImage from '../img/default.jpg';

class Contact extends Component {
  state  = {
    social: [],

    componentDidMount() {
      try {
        const social = [
          {
           id: 'social1',
           socialTitle: 'Twitter',
           socialImg: defaultImage,
           socialUrl: 'https://twitter.com/',
          },
          ];
          this.setState({
            social,
          });
      } catch (e) {
        console.log(e);
      }
      }
  }
  render () {
    return (
      <div>
      <div>
        <h3>Contact</h3>
        <p>Email: jackbull328@gmail.com</p>
      </div>
        <div className="social"> {this.state.social.map(social => {
          return (   
          <div> <a href={social.socialURL}><div className="socialLink" key={social.id}>
            <img className="" src={social.socialImg} /> 
              <h3 className="">{social.socialTitle}</h3>
              </div></a>
          </div>
      )
      })}</div>
      </div>
    );
  }
}

export default Contact;