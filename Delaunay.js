class Delaunay {
  constructor(){
    this.edges = [];
    this.points = [];
    this.triangles = [];
  }
}

Delaunay.prototype.triangulate = function(points) {
  this.points = points;
  this.edges = [];
  this.triangles = [];

  for (var i = 0; i < points.length; i++) {
    for (var j = i + 1; j < points.length; j++) {
      for (var k = j + 1; k < points.length; k++) {
        var isTriangle = true;
        for (var a = 0; a < points.length; a++) {
          if (a == i || a == j || a == k) continue;
          if (points[a].isInside(points[i], points[j], points[k])) {
            isTriangle = false;
            break;
          }
        }
        if (isTriangle) {
          this.triangles.push(new Triangle(points[i], points[j], points[k]));
        }
      }
    }
  }


}
