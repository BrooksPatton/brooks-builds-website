import React, { Component } from 'react';
import Navbar from './navbar/Navbar';
import './App.css';
import Brand from './brand/Brand';
import AboutMe from './about-me/AboutMe';
import LatestStreams from './latest-streams/LatestStreams';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <Navbar />
        <Brand />
        <div className="container">
          <div className="row">
            <div className="col">
              <AboutMe />
            </div>
            <div className="col">
              <LatestStreams />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
