import React, { Component } from 'react';

import './services.css';

class Services extends Component {
  render() {
    return (
      <div id={this.props.title} style={{backgroundImage: `url(${this.props.background})`}}>
       <div style={{fontSize: `3em`}}>{this.props.title}</div>
      </div>
    );
  }
}

export default Services;
