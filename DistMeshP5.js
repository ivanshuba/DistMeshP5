var pts = [];
var delaunay;
var prevTime;

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
  text("Pres 't' for label drawing", width * 0.5, 40);

  delaunay.draw();

  fill(0);
  textSize(12);
  textAlign(LEFT, CENTER);
  text("points:" + delaunay.points.length, 10, 15);
  text("edges:" + delaunay.edges.length, 10, 30);
  text("triangles:" + delaunay.triangles.length, 10, 45);

  if (keyIsPressed) {
    if (key == 't') {
      if (millis() - prevTime > 200) {
        print("Ok");
        delaunay.drawText = !delaunay.drawText;
        prevTime = millis();
      }
    }
  }

}

function mousePressed() {
  if (mouseButton == LEFT) {
    if (insideScreen(mouseX, mouseY)) {
      if (millis() - prevTime > 300) {
        prevTime = millis();
        pts.push(new TPoint(mouseX, mouseY));
        delaunay.triangulate(pts);
      }
    }
  }
}

function keyPressed() {
  if (key == 't') {
    print("Ok");
    delaunay.drawText = !delaunay.drawText;
  }
}

function insideScreen(x, y) {
  return (x > 0 && x < width && y > 0 && y < height);
}

function prefill() {
  pts.push(new TPoint(width * 0.5 - 150, height * 0.5));
  pts.push(new TPoint(width * 0.5, height * 0.5 + 150));
  pts.push(new TPoint(width * 0.5 + 150, height * 0.5));
  delaunay.triangulate(pts);
}