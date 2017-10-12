import React, {Component} from 'react';
import p5 from 'p5';

class Pong extends Component {
  componentDidMount() {
    new p5(this.sketch, "pong");
  }

  sketch(s) {
    s.setup = () => {
      const width = window.innerWidth;
      s.createCanvas(width, 150);
    };

    s.draw = () => {
      s.background(50);
      s.ellipse(50, 50, 50, 50);
    };
  }

  render() {
    return (
          <div id="pong">
            <h1 className="main-title">Brooks Builds</h1>
          </div>
        );
  }
}

export default Pong;
