class Delaunay {
  constructor(){
    this.edges = [];
    this.points = []
    this.triangles = [];
    this.drawText = true;
  }
  
  draw() {
    for (var i = 0; i < this.points.length; i++) {
      this.points[i].draw();
    }
    for (var i = 0; i < this.edges.length; i++) {
      this.edges[i].draw();
    }
    for (var i = 0; i < this.triangles.length; i++) {
      this.triangles[i].draw();
    }
  }

  triangulate(points) {
    this.points = points;
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

    this.clearConnectedPoints();
    this.updateConnectedPoints();
    this.updateEdgeList();
  }

  clearConnectedPoints() {
    print("Clearing points...");
    for (var i = 0; i < this.points.length; i++) {
      this.points[i].checkedPoints = [];
      this.points[i].connectedPoints = [];
    }
  }

  updateConnectedPoints() {
    for (var i = 0; i < this.points.length; i++) {
      for (var j = 0; j < this.triangles.length; j++) {
        var triangle = this.triangles[j];
        var point = this.points[i];
        if (triangle.contains(point)) {
          var neighbours = triangle.getNeighbours(point);
          for (var k = 0; k < neighbours.length; k++) {
            if (!point.connectedPoints.includes(neighbours[k])) {
              point.connectedPoints.push(neighbours[k]);
            }
          }
        }
      }
    }
  }

  updateEdgeList() {
    this.edges = [];
    for (var i = 0; i < this.points.length; i++) {
      var point = this.points[i];
      for (var j = 0; j < point.connectedPoints.length; j++) {
        var neighbour = point.connectedPoints[j];
        if (neighbour.checkedPoints.includes(point) || point.checkedPoints.includes(neighbour)) continue;
        this.edges.push(new TEdge(point, neighbour));
        neighbour.checkedPoints.push(point);
        point.checkedPoints.push(neighbour);
      }
    }
  }
}


