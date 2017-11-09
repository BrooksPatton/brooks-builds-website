import React, { Component } from 'react';
import Navbar from './navbar/Navbar';
import './App.css';
import Brand from './brand/Brand';
import AboutMe from './about-me/AboutMe';
import LatestStreams from './latest-streams/LatestStreams';
import Projects from './projects/Projects';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <Navbar />
        <Brand />
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="row">
                <div className="col">
                  <AboutMe />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <Projects />
                </div>
              </div>
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
