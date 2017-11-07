import React, { Component } from 'react';
import './nav.css';


class Nav extends Component {
  render() {
    return (
      <div id="nav">
       <div className="startBootstrap"><div>Start</div><div> Bootstrap</div></div>
       <div className="nav-items">
       <div className="nav-item"><a href="#SERVICES">SERVICES</a></div>
       <div className="nav-item"><a href="#PORTFOLIO">PORTFOLIO</a></div>
       <div className="nav-item"><a href="#ABOUT">ABOUT</a></div>
       <div className="nav-item"><a href="#TEAM">TEAM</a></div>
       <div className="nav-item"><a href="#CONTACT">CONTACT</a></div>
       <div className="burger"><img className="nav-icon" src="https://openclipart.org/image/2400px/svg_to_png/221605/menu-icon.png"/></div>
       </div>
      </div>
    );
  }
}

export default Nav;