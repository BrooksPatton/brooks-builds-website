import React, {Component} from 'react';
import Teaser from './Teaser';
import {Link} from 'react-router-dom';
import './Projects.css'
const data = require('./project-list');

class Projects extends Component {
  generateProjects() {
    return data.map(raw => (
      <div className="row Projects" key={raw.id}>
        <div className="col">
          <Link to={`/projects/${raw.id}`}><Teaser title={raw.title} description={raw.description} /></Link>
        </div>
      </div>
      )
    )
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Projects</h2>
        {this.generateProjects()}
      </div>
    )
  }
}

export default Projects;
