var delaunay;
var pts = [];

function setup() {
  createCanvas(500, 500);
  delaunay = new Delaunay();
  for (var i = 0; i<10; i++) {
    pts.push(new TPoint(random(0, width), random(0, height)));
  }
  delaunay.triangulate(pts);
}

function draw() {
  background(230);
  for (var i = 0; i<10; i++) {
    pts[i].draw();
  }
  for (var i = 0; i<delaunay.triangles.length; i++) {
    delaunay.triangles[i].draw();
  }
}

