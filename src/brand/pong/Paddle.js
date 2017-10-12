class Paddle {
  constructor(location, s) {
    this.location = location;
    this.acceleration = s.createVector();
    this.velocity = s.createVector();
    this.speed = s.createVector(0, 0.2);
    this.s = s;
    this.width = 5;
    this.height = 55;
    this.color = 255;
  }

  display() {
    this.s.noStroke();
    this.s.fill(this.color);
    this.s.rect(this.location.x, this.location.y, this.width, this.height);
  }

  run(ball) {
    const dist = this.location.dist(ball.location);

    if(dist <= this.s.width / 2) {
      const aboveMe = this.isAboveMe(ball);

      if(aboveMe) {
        this.applyForce(this.speed);
      } else {
        const force = this.speed.copy().mult(-1);

        this.applyForce(force);
      }
    }

    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);
    this.acceleration.mult(0);
    this.restrictLocation();
  }

  restrictLocation() {
    if(this.location.y < 0) {
      this.location.y = 0;
      this.velocity.mult(0);
    } else if(this.location.y > this.s.height - this.height) {
      this.location.y = this.s.height - this.height;
      this.velocity.mult(0);
    }
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  isAboveMe(ball) {
    const paddleCenter = this.location.y + (this.height / 2);
    const ballCenter = ball.location.y;

    return paddleCenter - ballCenter <= 0;
  }
}

export default Paddle;
