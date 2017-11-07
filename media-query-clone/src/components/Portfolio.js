import React, { Component } from 'react';

import './portfolio.css';

class Portfolio extends Component {
  render() {
    return (
      <div id={this.props.title} style={{backgroundImage: `url(${this.props.background})`}}>
       <div style={{fontSize: `3em`}}>{this.props.title}</div>
      </div>
    );
  }
}

export default Portfolio;
