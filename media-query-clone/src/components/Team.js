import React, { Component } from 'react';

import './team.css';

class Team extends Component {
  render() {
    return (
      <div id="TEAM" style={{backgroundImage: `url(${this.props.background})`}}>
       <div style={{fontSize: `3em`}}>{this.props.title}</div>
      </div>
    );
  }
}

export default Team;
