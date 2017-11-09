import React, {Component} from 'react';
import Teaser from './Teaser';
const data = require('./project-list');

class Projects extends Component {
  generateProjects() {
    return data.map(raw => (
      <div className="row" key={raw.id}>
        <div className="col">
          <Teaser title={raw.title} description={raw.description} />
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
