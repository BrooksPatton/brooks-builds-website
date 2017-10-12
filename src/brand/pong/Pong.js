import React, {Component} from 'react';
import p5 from 'p5';
import Ball from './Ball';
import Paddle from './Paddle';

class Pong extends Component {
  componentDidMount() {
    new p5(this.sketch.bind(this), "pong");
  }

  sketch(s) {
    s.setup = () => {
      const width = window.innerWidth;

      s.createCanvas(width, 150);
      this.ball = new Ball(s.createVector(width/2, 10), s);
      this.leftPaddle = new Paddle(s.createVector(10, 15), s);
      this.rightPaddle = new Paddle(s.createVector(s.width - 15, 15), s);
      this.playing = true;
      this.scores = {
        left: 0,
        right: 0,
        toWin: 7
      };
      this.s = s;
    };

    s.draw = () => {
        s.background(50);

        s.fill(255, 50);
        s.rect(s.width/2 -2, 0, 4, s.height);

        if(this.playing || !this.ball.isOffScreen()) {
          this.ball.display();
          this.ball.move();
          this.ball.edges();
        }

        this.leftPaddle.display();
        this.rightPaddle.display();

      if(this.playing) {
        this.leftPaddle.run(this.ball);
        this.rightPaddle.run(this.ball);

        this.checkHittingPaddles();
      }

      s.fill(255);
      s.text(this.scores.left, s.width/2 - 50, 10);
      s.text(this.scores.right, s.width/2 + 50, 10);
    }

    s.windowResized = () => {
      s.resizeCanvas(window.innerWidth, 150);
      this.rightPaddle = new Paddle(s.createVector(s.width - 15, 15), s);
    }
  }

  checkHittingPaddles() {
    if(this.ball.isOnLeftSide()) {
      if(this.isBallHittingLeftPaddleX()) {
        if(this.isBallHittingLeftPaddleY()) {
          this.ball.location.x = this.leftPaddle.location.x + this.leftPaddle.width + this.ball.radius + 1;
          this.ball.reverseXVelocity();
        } else {
          this.incrementScore('right');
        }
      }
    } else {
      if(this.isBallHittingRightPaddleX()) {
        if(this.isBallHittingRightPaddleY()) {
          this.ball.location.x = this.rightPaddle.location.x - this.ball.radius - 1;
          this.ball.reverseXVelocity();
        } else {
          this.incrementScore('left');
        }
      }
    }
  }

  isBallHittingRightPaddleX() {
    return this.ball.location.x + this.ball.radius >= this.rightPaddle.location.x;
  }

  isBallHittingRightPaddleY() {
    return this.ball.location.y - this.ball.radius >= this.rightPaddle.location.y && this.ball.location.y + this.ball.radius <= this.rightPaddle.location.y + this.rightPaddle.height;
  }

  isBallHittingLeftPaddleX() {
    return this.ball.location.x - this.ball.radius <= this.leftPaddle.location.x + this.leftPaddle.width;
  }

  isBallHittingLeftPaddleY() {
    return this.ball.location.y - this.ball.radius >= this.leftPaddle.location.y && this.ball.location.y + this.ball.radius <= this.leftPaddle.location.y + this.leftPaddle.height;
  }

  incrementScore(side, s) {
    this.scores[side] += 1;

    if(this.scores[side] < 7) {
      this.ball = new Ball(this.s.createVector(this.s.width/2, 10), this.s);
    } else {
      this.playing = false;
    }
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
