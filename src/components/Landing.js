import React, { Component } from 'react';
import Social from './SocialMedia';

class Landing extends Component {
  render () {
    return (
      <div className="Landing">
        <h3>Welcome to my protfolio site.</h3>
        <p>My Name is John? I love working on code and getting into the weeds in projects, it makes me happy. 
            I would rather live in a shack by the beach with a few items than have a huge house with many items.  
            I’ve been working in the Tech industry since 2012 (so much fun) and it has been a great journy.  
            I currently work full-time at Datapath, CA working on website front end and freelancing on projects as my limited time will allow.  
            I am curous and keep learning and growing my developemnt skill everyday and am comfortable working with the whole stack. 
            I worked hard for two years organizing monthly meetups for developers in our area and we were even featured as one of FreeCodeCamps top meetups.
            <br/>I am a family man, I have two great kids and I love spending as much time with them as I can. I love creating things outside of code and it fules my fire, to cook, brew my own beer, and contribute in my community.<br/>
            <br/>Thanks, and enjoy.<br/>
          John
        </p>
        <Social />
      </div>
    )
  }
}

export default Landing;
