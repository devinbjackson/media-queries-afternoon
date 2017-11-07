import React, { Component } from 'react';

import './page.css';

class Page extends Component {
  render() {
    return (
      <div className="whole-thing" style={{backgroundImage: `url(${this.props.background})`}}>
       <div style={{fontSize: `40px`, marginTop: `0`, marginBottom: `15px`}}>{this.props.title}</div>
       <div className="italia">Welcome To Our Studio!</div>
       <div className="lander">IT'S NICE TO MEET YOU</div>
       <a href="#SERVICES"> <button id='tell-me-more'>TELL ME MORE</button></a>
      </div>
    );
  }
}

export default Page;
