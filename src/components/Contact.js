import React, { Component } from 'react';
import Social from './SocialMedia';

class Contact extends Component {
  render () {
    return (
      <div>
      <div>
        <h3>Contact</h3>
        <p>Email: <a href="mailto:jackbull328@gmail.com">jackbull328@gmail.com</a></p>
      </div>
        <Social />
      </div>
    );
  }
}

export default Contact;