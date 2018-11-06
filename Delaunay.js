class Delaunay {
  constructor(){
    this.edges = [];
    this.triangles = [];
  }
}

Delaunay.prototype.triangulate = function(points) {
  //this.points = points;
  this.triangles = [];

  var N = pts.length;
  for (var i = 0; i < N; i++) {
    for (var j = i+1; j < N; j++) {
      for (var k = j+1; k < N; k++) {
        var isTriangle = true;
        for (var a = 0; a < N; a++) {
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
