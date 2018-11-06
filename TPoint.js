class TPoint {
  constructor(x, y) {
    this.position = createVector(x, y);
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
  fill(200);
  ellipse(this.position.x, this.position.y, 5, 5);
  fill(0);
  textSize(8);
  text(pts.indexOf(this), this.position.x, this.position.y - 10);
}
