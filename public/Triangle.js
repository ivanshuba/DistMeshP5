class Triangle {
  constructor(p1, p2, p3){
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;
  }
}

Triangle.prototype.draw = function() {
  stroke(0);
  line(p1.position.x, p1.position.y, p2.position.x, p2.position.y);
  line(p2.position.x, p2.position.y, p3.position.x, p3.position.y);
  line(p3.position.x, p3.position.y, p1.position.x, p1.position.y);
}

Triangle.prototype.contains = function(tp) {
  return (tp === p1 || tp === p2 || tp === p3);
}