class TPoint {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.z = 0;
    this.r = 5;
  }

  isInside(p1, p2, p3) {
    var center = Triangle.getCenter(p1, p2, p3);
    var d = p5.Vector.dist(center, this.position);
    var r = p5.Vector.dist(center, p1.position);
    return d < r;
    //return false;
  }

}

TPoint.prototype.draw = function() {
  ellipseMode(CENTER);
  ellipse(this.position.x, this.position.y, this.r, this.r);
}
