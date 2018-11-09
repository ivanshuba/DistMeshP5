var prevTime;
var pts = [];
var delaunay;

function setup() {
  createCanvas(600, 400);
  delaunay = new Delaunay();
  prevTime = millis();

  prefill();
}

function draw() {
  background(230);
  textSize(20);
  textAlign(CENTER, CENTER);
  text("Click left mouse button on canvas", width * 0.5, 20);

  delaunay.draw();

  fill(0);
  textSize(14);
  textAlign(LEFT, CENTER);
  text("pts.length:" + pts.length, 10, 10);
  text("triangles.length:" + delaunay.triangles.length, 10, 30);
}

function mousePressed() {
  if (mouseButton == LEFT) {
    if (millis() - prevTime < 300) return;
    prevTime = millis();
    pts.push(new TPoint(mouseX, mouseY));
    delaunay.triangulate(pts);
  }
}

function prefill() {
  pts.push(new TPoint(width * 0.5 - 150, height * 0.5));
  pts.push(new TPoint(width * 0.5, height * 0.5 + 150));
  pts.push(new TPoint(width * 0.5 + 150, height * 0.5));
  delaunay.triangulate(pts);
}