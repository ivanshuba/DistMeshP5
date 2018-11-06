var prevTime;
var pts = [];
var delaunay;

function setup() {
  createCanvas(600, 400);
  delaunay = new Delaunay();
  prevTime = millis();
}

function draw() {
  background(230);
  textSize(20);
  textAlign(CENTER, CENTER);
  text("Click left mouse button on canvas", width * 0.5, 20);

  for (var i = 0; i < pts.length; i++) {
    pts[i].draw();
  }
  for (var i = 0; i < delaunay.triangles.length; i++) {
    delaunay.triangles[i].draw();
  }
  fill(0);
  textSize(10);
  textAlign(LEFT, CENTER);
  text("pts.length:" + pts.length, 10, 10);
  text("triangles.length:" + delaunay.triangles.length, 10, 30);
}

function mousePressed() {
  if (millis() - prevTime < 200) return;
  prevTime = millis();
  pts.push(new TPoint(mouseX, mouseY));
  delaunay.triangulate(pts);
}