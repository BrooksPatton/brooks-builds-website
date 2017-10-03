import React, { Component } from 'react';
import Navbar from './navbar/Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <Navbar />
      </div>
    );
  }
}

export default App;
