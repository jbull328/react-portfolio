import React, { Component } from 'react';
var { SocialIcon } = require('react-social-icons');

class Social extends Component {
  
  render () {
    return (
      <div>
        <SocialIcon className="social" url="https://linkedin.com/in/jbull328"  network="linkedin"/>
      </div>
    )
  }
}

export default Social;