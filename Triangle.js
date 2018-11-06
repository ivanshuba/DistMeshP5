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

}

Triangle.prototype.draw = function() {
  stroke(0);
  strokeWeight(0.5);
  line(this.p1.position.x, this.p1.position.y, this.p2.position.x, this.p2.position.y);
  line(this.p2.position.x, this.p2.position.y, this.p3.position.x, this.p3.position.y);
  line(this.p3.position.x, this.p3.position.y, this.p1.position.x, this.p1.position.y);
}

Triangle.prototype.contains = function(tp) {
  return (tp === p1 || tp === p2 || tp === p3);
}

