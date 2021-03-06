var pts = [];
var delaunay;
var prevTime;
let mousePos = [];
let hoveredPt = null;

function setup() {
  createCanvas(600, 400);
  delaunay = new Delaunay();
  prevTime = millis();
  prefillTriangulation();
}

function draw() {
  background(250);
  textSize(20);
  textAlign(CENTER, CENTER);
  text("Click left mouse button on canvas to add more points", width * 0.5, 20);
  text("Press 't' to show/hide labels", width * 0.5, 40);

  delaunay.draw();

  fill(0);
  textSize(12);
  textAlign(LEFT, CENTER);
  text("points:" + delaunay.points.length, 10, 15);
  text("edges:" + delaunay.edges.length, 10, 30);
  text("triangles:" + delaunay.triangles.length, 10, 45);
  text("mousePos:" + mousePos[0] + ":" + mousePos[1], 10, 60);
  text("pt:" + delaunay.points[0].position.x + ":" + delaunay.points[0].position.y, 10, 75);
  text("hoveredPt:" + hoveredPt, 10, 90);

  checkPressedKey();
}

function mousePressed() {
  if (mouseButton == LEFT) {
    if (hoveredPt == null) {
      if (insideScreen(mouseX, mouseY)) {
        if (millis() - prevTime > 300) {
          prevTime = millis();
          let pt = new TPoint(mouseX, mouseY);
          pt.isHovered = true;
          hoveredPt = pt;
          pts.push(pt);
          delaunay.triangulate(pts);
        }
      }
    }
  }
}

function checkPressedKey() {
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

function mouseMoved() {
  let range = 10;
  hoveredPt = null;
  mousePos[0] = mouseX;
  mousePos[1] = mouseY;
  for (var i = 0; i < delaunay.points.length; i++) {
    let pt = delaunay.points[i];
    let ptPos = pt.position;
    if (mouseX > ptPos.x - range && mouseX < ptPos.x + range &&
      mouseY > ptPos.y - range && mouseY < ptPos.y + range) {
      pt.isHovered = true;
      hoveredPt = pt;
    } else {
      pt.isHovered = false;
    }
  }
  //hoveredPt = hovered;
}

function mouseDragged() {
  if (hoveredPt != null) {
    hoveredPt.position.x = mouseX;
    hoveredPt.position.y = mouseY;
    delaunay.triangulate(pts);
  }
}

function insideScreen(x, y) {
  return (x > 0 && x < width && y > 0 && y < height);
}

function prefillTriangulation() {
  pts.push(new TPoint(width * 0.5 - 150, height * 0.5));
  pts.push(new TPoint(width * 0.5, height * 0.5 + 150));
  pts.push(new TPoint(width * 0.5 + 150, height * 0.5));
  delaunay.triangulate(pts);
}