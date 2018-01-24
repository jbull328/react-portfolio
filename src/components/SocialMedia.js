import React, { Component } from 'react';
var { SocialIcon } = require('react-social-icons');

class Social extends Component {
  
  render () {
    return (
      <div>
        <SocialIcon className="social" url="https://linkedin.com/in/jbull328"  network="linkedin"/>
        <SocialIcon className="social" url="https://twitter.com/jbull328"  network="twitter"/> 
        <SocialIcon className="social" url="https://github.com/jbull328"  network="github"/>
      </div>
    )
  }
}

export default Social;