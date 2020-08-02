class Triangle {
  constructor(p1, p2, p3){
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;
  }

  static getCenter(p1, p2, p3) {
    var D = 2 * (p1.position.x*(p2.position.y-p3.position.y) + p2.position.x*(p3.position.y-p1.position.y) + p3.position.x*(p1.position.y-p2.position.y));
    var Ux = ( (p1.position.x**2 + p1.position.y**2)*(p2.position.y - p3.position.y) + 
               (p2.position.x**2 + p2.position.y**2)*(p3.position.y - p1.position.y) + 
               (p3.position.x**2 + p3.position.y**2)*(p1.position.y - p2.position.y) ) / D;
    var Uy = ( (p1.position.x**2 + p1.position.y**2)*(p3.position.x - p2.position.x) + 
               (p2.position.x**2 + p2.position.y**2)*(p1.position.x - p3.position.x) + 
               (p3.position.x**2 + p3.position.y**2)*(p2.position.x - p1.position.x) ) / D  ;
   return createVector(Ux, Uy);
  }

  draw () {
    stroke(0);
    strokeWeight(0.25);
    line(this.p1.position.x, this.p1.position.y, this.p2.position.x, this.p2.position.y);
    line(this.p2.position.x, this.p2.position.y, this.p3.position.x, this.p3.position.y);
    line(this.p3.position.x, this.p3.position.y, this.p1.position.x, this.p1.position.y);
    if (delaunay.drawText) {
      var x = (this.p1.position.x + this.p2.position.x + this.p3.position.x) / 3;
      var y = (this.p1.position.y + this.p2.position.y + this.p3.position.y) / 3;
      fill(0);
      text(delaunay.triangles.indexOf(this), x, y);
    }
  }
  
  contains(tp) {
    return (tp === this.p1 || tp === this.p2 || tp === this.p3);
  }

  getNeighbours(tp) {
    var neighbours = undefined;
    if(tp === this.p1) {
      neighbours = [];
      neighbours.push(this.p2);
      neighbours.push(this.p3);
    }else if(tp === this.p2) {
      neighbours = [];
      neighbours.push(this.p1);
      neighbours.push(this.p3);
    }else if(tp === this.p3) {
      neighbours = [];
      neighbours.push(this.p1);
      neighbours.push(this.p2);
    }
    return neighbours;
  }

  toString() {
    print('[' + pts.indexOf(this.p1) + ',' + pts.indexOf(this.p2) + ',' + pts.indexOf(this.p3) + ']');
  }
}



