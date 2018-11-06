class Triangle {
  constructor(p1, p2, p3){
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;
  }

  static getCenter(p1, p2, p3) {
    var D = 2 * (p1.x*(p2.y-p3.y) + p2.x*(p3.y-p1.y) + p3.x*(p1.y-p2.y))
    var Ux = ( (p1.x**2 + p1.y**2)*(p2.y - p3.y) + 
               (p2.x**2 + p2.y**2)*(p3.y - p1.y) + 
               (p3.x**2 + p3.y**2)*(p1.y - p2.y) ) / D
    var Uy = ( (p1.x**2 + p1.y**2)*(p3.x - p2.x) + 
               (p2.x**2 + p2.y**2)*(p1.x - p3.x) + 
               (p3.x**2 + p3.y**2)*(p2.x - p1.x) ) / D  
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

