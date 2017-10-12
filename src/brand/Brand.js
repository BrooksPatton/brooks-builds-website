import React, {Component} from 'react';
import './Brand.css';
import Pong from './Pong';

class Brand extends Component {
  render() {
    return (
        <header>
          <Pong />
        </header>
        );
  }
}

export default Brand;
