class TPoint {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.connectedPoints = [];
    this.checkedPoints = [];
    this.isHovered = false;
  }

  isInside(p1, p2, p3) {
    var center = Triangle.getCenter(p1, p2, p3);
    var d = p5.Vector.dist(center, this.position);
    var r = p5.Vector.dist(center, p1.position);
    return d < r;
  }

  draw() {
    ellipseMode(CENTER);
    fill(250);
    strokeWeight(0.5);
    ellipse(this.position.x, this.position.y, 5, 5);
    fill(0);
    textSize(12);
    if (delaunay.drawText) {
      var label = ', c[(' + this.connectedPoints.length + '):';
      for (var i = 0; i < this.connectedPoints.length - 1; i++) {
        label += pts.indexOf(this.connectedPoints[i]) + ',';
      }
      label += pts.indexOf(this.connectedPoints[this.connectedPoints.length - 1]) + ']';
      text(pts.indexOf(this) + label, this.position.x, this.position.y - 10);
    }
    if (this.isHovered) {
      noFill();
      stroke(150);
      strokeWeight(2);
      rectMode(CENTER);
      rect(this.position.x, this.position.y, 15, 15);
    }
  }
}

