import React, { Component } from 'react';

import './contact.css';

class Contact extends Component {
  render() {
    return (
      <div id="CONTACT" style={{backgroundImage: `url(${this.props.background})`}}>
       <div style={{fontSize: `3em`}}>{this.props.title}</div>
      </div>
    );
  }
}

export default Contact;
