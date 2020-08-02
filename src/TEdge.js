class TEdge {
  constructor(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;
  }
  
  draw() {
    if (delaunay.drawText) {
      push();
      fill(0, 200, 100);
      textSize(14);
      var label = delaunay.edges.indexOf(this) + ', [' + 
                  delaunay.points.indexOf(this.p1) + ',' +
                  delaunay.points.indexOf(this.p2) + ']';
      var x = (this.p1.position.x + this.p2.position.x ) * 0.5;
      var y = (this.p1.position.y + this.p2.position.y ) * 0.5;
      text(label, x, y - 10);
      pop();
    }
  }  
}