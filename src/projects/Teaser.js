import React, {Component} from 'react';
import './Teaser.css';

class Teaser extends Component {
  render() {
    return (
      <div className="Teaser p-3 rounded bg-info mb-1">
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Teaser;
