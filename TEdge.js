class TEdge {
  constructor(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;
  }
  
  draw() {
    fill(0);
    textSize(12);
    var label = delaunay.indexOf(this) + ', [' + 
                delaunay.points.indexOf(this.p1) + ',' +
                delaunay.points.indexOf(this.p2) + ']';
    
    text(label, this.position.x, this.position.y - 10);
  }  
}