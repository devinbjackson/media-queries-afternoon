import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Page from './components/Page';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Team from './components/Team';
import Contact from './components/Contact';
import {TransitionMotion} from 'react-motion';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Nav/>
       <Page background={'https://blackrockdigital.github.io/startbootstrap-agency/img/header-bg.jpg'}/>
       <Services title="SERVICES"/>
          
       <Portfolio title="PORTFOLIO"/>
       <About title="ABOUT"/>
       <Team title="OUR AMAZING TEAM"/>
       <Contact title="CONTACT US" background={'https://blackrockdigital.github.io/startbootstrap-agency/img/map-image.png'}/>
      </div>
    );
  }
}

export default App;
