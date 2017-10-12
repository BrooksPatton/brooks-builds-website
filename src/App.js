import React, { Component } from 'react';
import Navbar from './navbar/Navbar';
import './App.css';
import Brand from './brand/Brand';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <Navbar />
        <Brand />
      </div>
    );
  }
}

export default App;
