import React, {Component} from 'react';
import './Brand.css';
import Pong from './pong/Pong';

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
