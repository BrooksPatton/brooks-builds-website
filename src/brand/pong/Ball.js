class Ball {
  constructor(location, s) {
    const speed = 4;

    this.s = s
    this.location = location;
    this.velocity = this.generateDirection(speed);
    this.red = 189;
    this.green = 51;
    this.blue = 255;
    this.radius = 5;
  }

  display() {
    this.s.fill(this.red, this.green, this.blue);
    this.s.noStroke();
    this.s.ellipse(this.location.x, this.location.y, this.radius, this.radius);
  }

  generateDirection(speed) {
    return this.s.createVector(5, this.s.random(-5, 5));
  }

  move() {
    this.location.add(this.velocity);
  }

  edges() {
    if(this.location.y <= 0 + this.radius/2) {
      this.location.y = 0 + this.radius/2;
      this.velocity.y *= -1;
    } else if(this.location.y >= this.s.height - this.radius/2) {
      this.location.y = this.s.height - this.radius/2;
      this.velocity.y *= -1;
    }
  }

  reverseXVelocity() {
    this.velocity.x *= -1;
  }

  isOnLeftSide() {
    return (this.s.width / 2) - this.location.x >= 0;
  }

  isOffScreen() {
    if(this.isOnLeftSide()) {
      return this.location.x + this.radius < 0;
    } else {
      return this.location.x - this.radius > this.s.width;
    }
  }
}

export default Ball;
