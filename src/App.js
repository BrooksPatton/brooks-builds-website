import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Navbar from './navbar/Navbar';
import './App.css';
import Brand from './brand/Brand';
import Home from './home/Home';
import OneProject from './projects/OneProject';

class App extends Component {
  constructor() {
    super();

    this.state = {
      videos: []
    };
  }

  componentDidMount() {
    const url = 'https://wt-5f640d0b3015dcdd63e169cc79dfd2b5-0.run.webtask.io/get-latest-streams';

    fetch(url)
      .then(rawData => rawData.json())
      .then(data => this.setState({videos: data.videos}))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <Router>
        <div className="App container-fluid">
          <Navbar />
          <Brand />

          <Route exact path="/" render={() => (<Home videos={this.state.videos} />)} />
          <Route path="/projects/:id" render={(props) => (<OneProject videos={this.state.videos} {...props} />)} />
        </div>
      </Router>
    );
  }
}

export default App;
