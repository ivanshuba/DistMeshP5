class TPoint {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.z = 0;
    this.r = 50;
  }
}

TPoint.prototype.draw = function() {
  ellipseMode(CENTER);
  ellipse(this.position.x, this.position.y, this.r, this.r);
}
