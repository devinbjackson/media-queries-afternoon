import React, { Component } from 'react';

import './about.css';

class About extends Component {
  render() {
    return (
      <div id={this.props.title}>
       <div style={{fontSize: `3em`}}>{this.props.title}</div>
      </div>
    );
  }
}

export default About;
